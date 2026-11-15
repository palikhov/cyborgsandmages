#!/usr/bin/env python3
import errno
import hashlib
import json
import os
import re
import stat
import sys
from collections import Counter
from collections.abc import Iterator
from concurrent.futures import Future, ThreadPoolExecutor
from contextlib import contextmanager
from dataclasses import dataclass
from pathlib import Path, PurePosixPath

# Managed runtimes can enable PYTHONSAFEPATH, which omits the script directory
# even for an absolute entrypoint. Only bundled sibling modules are added.
SCRIPT_DIRECTORY = Path(__file__).resolve().parent
if str(SCRIPT_DIRECTORY) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIRECTORY))

from library_file_transfer import (  # noqa: E402
    LIBRARY_FILE_ID_XATTR_NAME,
    DownloadCompletionReporter,
    LibraryFileMaterializer,
    LibraryFileTransfer,
    LibraryFileTransferError,
    include_library_file_id_xattr,
    parse_xattrs,
    require_object,
    require_string,
)
from library_hosted_apps import HostedAppsClient, HostedAppsError  # noqa: E402


class LibraryDownloadRequestError(Exception):
    pass


_LIBRARY_CONNECTOR_ID = "connector_openai_library"
_PREPARE_MATERIALIZE_BATCH_SIZE = 20
_MAX_PARALLEL_PREPARE_MATERIALIZE_BATCHES = 4
_PARTIAL_MARKERS = {"unconfirmed_transfer_ids", "partial_bindings"}
_PARTIAL_RESULT_FIELDS = {
    "transfers",
    "warnings",
    "unavailable_items",
    "unconfirmed_transfer_ids",
    "partial_bindings",
    "destination",
    "external_connectors_accessed",
}
_PARTIAL_TRANSFER_FIELDS = frozenset(
    "transfer_id file_id library_file_id file_name suggested_path workspace_path "
    "download_url headers method current_version_number xattrs size_bytes completion_token mime_type".split()
)
_PUBLICATION_WARNING = (
    ": workspace publication is unconfirmed; no transfer is returned. "
    "The destination may exist. Do not automatically retry this item."
)


class ListOrSearchResult:
    def __init__(self, entries: list[object]) -> None:
        self.entries = entries

    @classmethod
    def parse(cls, value: str) -> "ListOrSearchResult":
        try:
            decoded: object = json.loads(value)
        except json.JSONDecodeError as exc:
            raise LibraryDownloadRequestError("list/search result must be valid JSON") from exc
        payload = cls._find_payload(decoded)
        has_items = "items" in payload
        has_results = "results" in payload
        if has_items == has_results:
            raise LibraryDownloadRequestError(
                "list/search output must contain exactly one of items or results"
            )
        entries_value = payload["items" if has_items else "results"]
        if not isinstance(entries_value, list):
            raise LibraryDownloadRequestError("items/results must be a JSON array")
        if not has_items:
            title_entries = payload.get("retrieval_title_results")
            if title_entries is None:
                title_entries = []
            if not isinstance(title_entries, list):
                raise LibraryDownloadRequestError("retrieval_title_results must be a JSON array")
            entries_value = [*entries_value, *title_entries]
        return cls(entries=entries_value)

    @classmethod
    def _find_payload(cls, value: object) -> dict[str, object]:
        payload = require_object(value, "list/search output")
        if "items" in payload or "results" in payload:
            return payload

        for wrapper_key in ("structuredContent", "result"):
            wrapped = payload.get(wrapper_key)
            if wrapped is not None:
                try:
                    return cls._find_payload(wrapped)
                except (LibraryDownloadRequestError, LibraryFileTransferError):
                    pass

        content = payload.get("content")
        if isinstance(content, list):
            for index, item in enumerate(content):
                try:
                    content_item = require_object(item, f"content[{index}]")
                    text = require_string(
                        content_item.get("text"),
                        f"content[{index}].text",
                    )
                    nested: object = json.loads(text)
                    return cls._find_payload(nested)
                except (
                    json.JSONDecodeError,
                    LibraryDownloadRequestError,
                    LibraryFileTransferError,
                ):
                    continue

        raise LibraryDownloadRequestError("list/search output does not contain items or results")


@dataclass(frozen=True)
class IndexSelection:
    indices: tuple[int, ...] | None

    @classmethod
    def parse(cls, value: str) -> "IndexSelection":
        if value == "ALL":
            return cls(indices=None)
        if not value or not value.isdigit() or len(value) % 3 != 0:
            raise LibraryDownloadRequestError(
                'selection must be "ALL" or digits grouped in triples'
            )
        indices: list[int] = []
        seen: set[int] = set()
        for offset in range(0, len(value), 3):
            index = int(value[offset : offset + 3])
            if index not in seen:
                indices.append(index)
                seen.add(index)
        return cls(indices=tuple(indices))

    def resolve(self, entries: list[object]) -> tuple[int, ...]:
        if self.indices is None:
            return tuple(
                index
                for index, entry in enumerate(entries)
                if not LibraryEntry.parse(entry, index).is_folder
            )
        for index in self.indices:
            if index >= len(entries):
                raise LibraryDownloadRequestError(
                    f"selected index {index:03d} is outside the {len(entries)} returned entries"
                )
            if LibraryEntry.parse(entries[index], index).is_folder:
                raise LibraryDownloadRequestError(
                    f"selected index {index:03d} is a folder, not a downloadable file"
                )
        return self.indices


@dataclass(frozen=True)
class LibraryEntry:
    payload: dict[str, object]
    metadata: dict[str, object]
    index: int

    @classmethod
    def parse(cls, value: object, index: int) -> "LibraryEntry":
        payload = require_object(value, f"entry[{index}]")
        metadata_value = payload.get("metadata")
        metadata = (
            require_object(metadata_value, f"entry[{index}].metadata")
            if metadata_value is not None
            else {}
        )
        return cls(payload=payload, metadata=metadata, index=index)

    @property
    def is_folder(self) -> bool:
        return self.payload.get("kind", self.metadata.get("kind")) == "folder"

    def materialize_item(self) -> dict[str, object]:
        result: dict[str, object] = {
            "file_id": self._required_string(
                self.payload.get("file_id"),
                self.metadata.get("file_id"),
                self.payload.get("id"),
                self.metadata.get("id"),
                label="file id",
            ),
            "file_name": self._required_string(
                self.payload.get("name"),
                self.metadata.get("name"),
                label="file name",
            ),
        }
        library_file_id = self._optional_string(
            self.payload.get("library_file_id"),
            self.metadata.get("library_file_id"),
            label="library file id",
        )
        if library_file_id is not None:
            result["library_file_id"] = library_file_id
        return result

    def relative_path(self) -> Path:
        library_path = self.library_path()
        relative_path = library_path.relative_to("/")
        if not relative_path.parts:
            raise LibraryDownloadRequestError(
                f"entry[{self.index}] Library path does not name a file"
            )
        return Path(*relative_path.parts)

    def deduplication_key(self) -> tuple[str, ...]:
        library_file_id = self._optional_string(
            self.payload.get("library_file_id"),
            self.metadata.get("library_file_id"),
            label="library file id",
        )
        if library_file_id is not None:
            return ("library_file_id", library_file_id)
        file_id = self._required_string(
            self.payload.get("file_id"),
            self.metadata.get("file_id"),
            self.payload.get("id"),
            self.metadata.get("id"),
            label="file id",
        )
        return ("file_id_and_path", file_id, self.library_path().as_posix())

    def library_path(self) -> PurePosixPath:
        value = self._required_string(
            self.payload.get("path"),
            self.metadata.get("path"),
            label="Library path",
        )
        path = PurePosixPath(value)
        if not path.is_absolute() or ".." in path.parts:
            raise LibraryDownloadRequestError(
                f"entry[{self.index}] Library path must be absolute and normalized"
            )
        return path

    def _required_string(self, *values: object, label: str) -> str:
        result = self._optional_string(*values, label=label)
        if result is None:
            raise LibraryDownloadRequestError(f"entry[{self.index}] {label} is missing")
        return result

    def _optional_string(self, *values: object, label: str) -> str | None:
        for value in values:
            if value is not None:
                return require_string(value, f"entry[{self.index}] {label}")
        return None


@dataclass(frozen=True)
class MaterializePlan:
    items: tuple[dict[str, object], ...]
    destination: dict[str, object]

    @property
    def arguments(self) -> dict[str, object]:
        return {
            "items": list(self.items),
            "destination": self.destination,
        }

    def batches(
        self,
        batch_size: int,
    ) -> tuple["MaterializeBatch", ...]:
        if batch_size < 1:
            raise LibraryDownloadRequestError("materialize batch size must be positive")
        return tuple(
            MaterializeBatch(
                items=self.items[offset : offset + batch_size],
                destination=self.destination,
            )
            for offset in range(0, len(self.items), batch_size)
        )


@dataclass(frozen=True)
class MaterializeBatch:
    items: tuple[dict[str, object], ...]
    destination: dict[str, object]

    @property
    def arguments(self) -> dict[str, object]:
        return {
            "items": list(self.items),
            "destination": self.destination,
        }


class MaterializeRequestBuilder:
    def build(
        self,
        list_or_search_json: str,
        selection: str,
        destination: "DownloadDestination | None" = None,
    ) -> dict[str, object]:
        return self.build_plan(
            list_or_search_json,
            selection,
            destination,
        ).arguments

    def build_plan(
        self,
        list_or_search_json: str,
        selection: str,
        destination: "DownloadDestination | None" = None,
    ) -> MaterializePlan:
        result = ListOrSearchResult.parse(list_or_search_json)
        indices = IndexSelection.parse(selection).resolve(result.entries)
        entries: list[LibraryEntry] = []
        identities: set[tuple[str, ...]] = set()
        # Selection addresses the raw search order. Collapse repeated primary and
        # supplemental hits only afterward so model-visible indices stay stable.
        for index in indices:
            entry = LibraryEntry.parse(result.entries[index], index)
            identity = entry.deduplication_key()
            if identity not in identities:
                entries.append(entry)
                identities.add(identity)
        relative_paths = tuple(entry.relative_path() for entry in entries)
        materialize_directory = Path.cwd().resolve()
        if destination is not None:
            destination.prepare()
            materialize_directory = destination.path
        items: list[dict[str, object]] = []
        for entry, relative_path in zip(entries, relative_paths, strict=True):
            item = entry.materialize_item()
            if relative_path.parent != Path("."):
                item["relative_directory"] = relative_path.parent.as_posix()
            items.append(item)
        return MaterializePlan(
            items=tuple(items),
            destination={
                "directory": str(materialize_directory),
            },
        )


@dataclass(frozen=True)
class DownloadDestination:
    working_directory: Path
    relative_path: Path

    @classmethod
    def parse(cls, value: str) -> "DownloadDestination":
        relative_path = Path(value)
        if not value or relative_path.is_absolute() or relative_path == Path("."):
            raise LibraryDownloadRequestError(
                "the destination directory must be a non-empty relative path"
            )
        if ".." in relative_path.parts:
            raise LibraryDownloadRequestError("the destination directory cannot contain '..'")
        working_directory = Path.cwd().resolve()
        path = (working_directory / relative_path).resolve()
        if not path.is_relative_to(working_directory):
            raise LibraryDownloadRequestError(
                "the destination directory must remain inside the working directory"
            )
        return cls(
            working_directory=working_directory,
            relative_path=relative_path,
        )

    @property
    def path(self) -> Path:
        return self.working_directory / self.relative_path

    def prepare(self) -> None:
        self.path.mkdir(parents=True, exist_ok=True)


@dataclass(frozen=True)
class PrepareMaterializeResult:
    transfers: list[dict[str, object]]
    payload: dict[str, object]
    structured: bool

    def needs_partition(self, batch: MaterializeBatch) -> bool:
        return (
            len(self.transfers) != len(batch.items)
            or self.payload.get("unconfirmed_transfer_ids", []) != []
        )

    @classmethod
    def parse(cls, value: object) -> "PrepareMaterializeResult":
        envelope = require_object(value, "prepare_materialize output")
        if envelope.get("isError") is True:
            raise LibraryDownloadRequestError("prepare_materialize failed")
        raw = envelope.get("structuredContent")
        structured = require_object(raw, "structuredContent") if raw is not None else {}
        marked = tuple(cls._marked_results(structured))
        if marked:
            payload = marked[0]
            if (
                len(marked) != 1
                or "result" in payload
                or payload is not structured
                and (payload is not structured.get("result") or "transfers" in structured)
            ):
                raise LibraryDownloadRequestError(
                    "conflicting structured prepare_materialize results"
                )
        else:
            # Ordinary responses keep the original recursive wrapper and text fallback.
            payload = cls._find_payload(envelope)
            if _PARTIAL_MARKERS & payload.keys():
                raise LibraryDownloadRequestError(
                    "partial materialization requires structuredContent"
                )
        transfers_value = payload.get("transfers")
        if not isinstance(transfers_value, list):
            raise LibraryDownloadRequestError("transfers must be a JSON array")
        structured_result = structured if "transfers" in structured else structured.get("result")
        return cls(
            transfers=[
                require_object(transfer, f"transfers[{index}]")
                for index, transfer in enumerate(transfers_value)
            ],
            payload=payload,
            structured=isinstance(structured_result, dict)
            and structured_result.get("transfers") is transfers_value,
        )

    @classmethod
    def _marked_results(cls, payload: object) -> Iterator[dict[str, object]]:
        # Only wrappers can carry the Library result. File attributes and transfer
        # headers are data and cannot switch the parser into partial mode.
        if isinstance(payload, dict):
            if _PARTIAL_MARKERS & payload.keys():
                yield payload
            for key in ("structuredContent", "result"):
                yield from cls._marked_results(payload.get(key))

    @classmethod
    def _find_payload(cls, value: object) -> dict[str, object]:
        payload = require_object(value, "prepare_materialize output")
        if "transfers" in payload or _PARTIAL_MARKERS & payload.keys():
            return payload
        for wrapper_key in ("structuredContent", "result"):
            wrapped = payload.get(wrapper_key)
            if wrapped is not None:
                try:
                    return cls._find_payload(wrapped)
                except (LibraryDownloadRequestError, LibraryFileTransferError):
                    pass
        content = payload.get("content")
        if isinstance(content, list):
            for index, item in enumerate(content):
                try:
                    content_item = require_object(item, f"content[{index}]")
                    nested: object = json.loads(
                        require_string(
                            content_item.get("text"),
                            f"content[{index}].text",
                        )
                    )
                    return cls._find_payload(nested)
                except (
                    json.JSONDecodeError,
                    LibraryDownloadRequestError,
                    LibraryFileTransferError,
                ):
                    continue
        raise LibraryDownloadRequestError("prepare_materialize output does not contain transfers")


@dataclass(frozen=True)
class PreparedMaterializeBatch:
    transfers: tuple[dict[str, object], ...]
    warnings: tuple[dict[str, object], ...] = ()
    uninstalled: tuple[dict[str, object], ...] = ()
    omitted_paths: frozenset[Path] = frozenset()
    omitted_directories: frozenset[Path] = frozenset()

    @classmethod
    def from_partial_result(
        cls,
        batch: MaterializeBatch,
        result: PrepareMaterializeResult,
        batch_index: int,
    ) -> "PreparedMaterializeBatch":
        expected_count = len(batch.items)
        actual_count = len(result.transfers)
        prefix = f"prepare_materialize batch {batch_index + 1}"
        destination = Path(require_string(batch.destination["directory"], "destination.directory"))
        if not result.structured:
            # A text fallback may serve a complete legacy download. In a mixed
            # download it proves neither the canonical names nor their contents.
            return cls(
                transfers=(),
                uninstalled=tuple(
                    _uninstalled(
                        batch_index + 1,
                        {"transfer_id": f"materialize-{n}"},
                        "This prepare response did not bind the selected workspace file.",
                    )
                    for n in range(1, expected_count + 1)
                ),
                omitted_directories=frozenset(
                    destination / _requested_path(item).parent for item in batch.items
                ),
            )
        if (
            not 0 < actual_count <= expected_count <= _PREPARE_MATERIALIZE_BATCH_SIZE
            or result.payload.get("unavailable_items", []) != []
            or set(result.payload) - _PARTIAL_RESULT_FIELDS
            or result.payload.get("destination")
            not in (batch.destination, {**batch.destination, "conflict_policy": "dedupe"})
        ):
            raise LibraryDownloadRequestError(
                f"{prefix} returned {actual_count} transfers; expected {expected_count}"
            )

        # IDs restart at one on each prepare call. Only structured IDs can account
        # for omissions. Human warnings never authorize a transfer.
        requested = {f"materialize-{n}": item for n, item in enumerate(batch.items, 1)}
        returned = [transfer.get("transfer_id") for transfer in result.transfers]
        confirmed = [tid for tid in requested if tid in returned]
        missing = [tid for tid in requested if tid not in returned]
        if returned != confirmed or result.payload.get("unconfirmed_transfer_ids", []) != missing:
            raise LibraryDownloadRequestError(f"{prefix} did not account for every requested file")
        bindings = result.payload.get("partial_bindings")
        omitted_paths, omitted_directories = set(), set()
        refs = {}
        if missing or bindings is not None:
            if not isinstance(bindings, dict) or set(bindings) != {
                "selected_refs",
                "request_target_ids",
            }:
                raise LibraryDownloadRequestError(f"{prefix} did not bind its selected files")
            refs = bindings["selected_refs"]
            if not isinstance(refs, dict) or set(refs) != set(confirmed):
                raise LibraryDownloadRequestError(f"{prefix} did not bind its selected files")
            for tid, ref in refs.items():
                expected = {
                    key: require_string(requested[tid][key], key).strip()
                    if requested[tid].get(key) is not None
                    else None
                    for key in ("file_id", "library_file_id")
                }
                if (
                    not isinstance(ref, dict)
                    or {key: value for key, value in ref.items() if key != "workspace_sha256"}
                    != expected
                ):
                    raise LibraryDownloadRequestError(f"{prefix} did not bind its selected files")
            target_ids = bindings["request_target_ids"]
            if (
                not isinstance(target_ids, list)
                or any(tid not in missing for tid in target_ids)
                or len(set(target_ids)) != len(target_ids)
            ):
                raise LibraryDownloadRequestError(f"{prefix} returned invalid omitted targets")
            for tid in missing:
                path = destination / _requested_path(requested[tid])
                if tid in target_ids:
                    omitted_paths.add(path)
                else:
                    omitted_directories.add(path.parent)
        workspace, uninstalled = [], []
        for tid, transfer in zip(confirmed, result.transfers, strict=True):
            digest = refs.get(tid, {}).get("workspace_sha256")
            reason = _uninstalled_reason(requested[tid], transfer, destination, digest)
            if reason is None:
                workspace.append(
                    {**transfer, "xattrs": transfer.get("xattrs") or [], "workspace_sha256": digest}
                )
            else:
                uninstalled.append(_uninstalled(batch_index + 1, transfer, reason))
        return cls(
            tuple(workspace),
            tuple(
                {
                    "batch": batch_index + 1,
                    "transfer_id": tid,
                    "message": tid + _PUBLICATION_WARNING,
                }
                for tid in missing
            ),
            tuple(uninstalled),
            frozenset(omitted_paths),
            frozenset(omitted_directories),
        )


def _requested_path(item: dict[str, object]) -> PurePosixPath:
    # Match the prepare API's selected file_name and relative_directory validators.
    name = require_string(item.get("file_name"), "file_name").strip()
    directory = item.get("relative_directory", "")
    if not name or not isinstance(directory, str) or PurePosixPath(name).name != name:
        raise LibraryDownloadRequestError("invalid requested file path")
    path = PurePosixPath(directory.strip()) / name
    if (
        path.is_absolute()
        or not path.parts
        or ".." in path.parts
        or "\\" in str(path)
        or "\x00" in str(path)
    ):
        raise LibraryDownloadRequestError("invalid requested file path")
    return path


def _uninstalled_reason(
    item: dict[str, object], transfer: dict[str, object], destination: Path, digest: object
) -> str | None:
    """Bind the returned transfer to the selected request before any client-side work."""
    if set(transfer) - _PARTIAL_TRANSFER_FIELDS:
        raise LibraryDownloadRequestError("unexpected partial transfer field")
    require_string(transfer.get("file_id"), "transfer.file_id")
    if transfer.get("library_file_id") is not None:
        require_string(transfer["library_file_id"], "transfer.library_file_id")
    name = require_string(transfer.get("file_name"), "transfer.file_name")
    # The producer selects a single canonical basename beneath the original directory.
    leaf = name.strip().replace("\\", "/").rsplit("/", 1)[-1].strip()
    if leaf in {"", ".", ".."}:
        leaf = "file"
    if "\x00" in leaf:
        raise LibraryDownloadRequestError("invalid canonical transfer name")
    relative = _requested_path(item).with_name(leaf)
    if transfer.get("suggested_path") != str(relative) or transfer.get("method", "GET") != "GET":
        raise LibraryDownloadRequestError(
            "partial transfer does not match the requested destination"
        )
    version, attrs = transfer.get("current_version_number"), transfer.get("xattrs")
    expected = (
        [] if version is None else [{"name": "user.library-file-version", "value": str(version)}]
    )
    if (version is not None and (type(version) is not int or version < 0)) or (
        attrs if attrs is not None else []
    ) != expected:
        raise LibraryDownloadRequestError("unexpected partial transfer file attributes")
    token, size = transfer.get("completion_token"), transfer.get("size_bytes")
    if (token is not None and (not isinstance(token, str) or not 0 < len(token) <= 128)) or (
        size is not None and (type(size) is not int or size < 0)
    ):
        raise LibraryDownloadRequestError("invalid partial transfer metadata")
    path = transfer.get("workspace_path")
    if path is None:
        # The normal URL installer operates by pathname. While any publication
        # is uncertain, expose this independent ordinal without issuing another writer.
        try:
            LibraryFileTransfer.parse(transfer)
        except LibraryFileTransferError:
            raise LibraryDownloadRequestError("invalid separate URL transfer") from None
        return "This separate URL transfer was not installed in the partial download."
    if (
        path != str(destination / relative)
        or transfer.get("download_url") is not None
        or transfer.get("headers", {}) != {}
    ):
        raise LibraryDownloadRequestError(
            "partial workspace transfer does not match the requested path"
        )
    if not isinstance(digest, str) or not re.fullmatch("[0-9a-f]{64}", digest):
        return "Library did not supply a verified digest for this workspace file."
    return None


def _uninstalled(batch: int, transfer: dict[str, object], reason: str) -> dict[str, object]:
    return {"batch": batch, "transfer_id": transfer["transfer_id"], "reason": reason}


def _same_file(original: os.stat_result, current: os.stat_result) -> bool:
    return (
        stat.S_ISREG(current.st_mode)
        and current.st_nlink == 1
        and os.path.samestat(original, current)
        and original.st_size == current.st_size
        and original.st_mtime_ns == current.st_mtime_ns
    )


def _verified_content(fd: int, before: os.stat_result, expected: object) -> bool:
    digest = hashlib.sha256()
    remaining = before.st_size
    while remaining:
        chunk = os.read(fd, min(remaining, 1024 * 1024))
        if not chunk:
            return False
        digest.update(chunk)
        remaining -= len(chunk)
    after = os.fstat(fd)
    return (
        digest.hexdigest() == expected
        and _same_file(before, after)
        and before.st_ctime_ns == after.st_ctime_ns
    )


def _matching_metadata(fd: int, transfer: dict[str, object], *, allow_missing: bool) -> bool:
    for name, expected in (
        (LIBRARY_FILE_ID_XATTR_NAME, transfer.get("library_file_id")),
        ("user.library-file-version", transfer.get("current_version_number")),
    ):
        try:
            value = os.getxattr(fd, name)
        except OSError as error:
            if error.errno != errno.ENODATA:
                raise
            if allow_missing or expected is None:
                continue
            return False
        if expected is None or value != str(expected).encode():
            return False
    return True


class _UnverifiedWorkspaceFile(Exception):
    """One bound file could not be verified; other files may still be installed."""


@contextmanager
def _skip_unverified_file(
    uninstalled: list[dict[str, object]], batch: int, transfer: dict[str, object]
) -> Iterator[None]:
    try:
        yield
    except (_UnverifiedWorkspaceFile, OSError, LibraryFileTransferError):
        uninstalled.append(
            _uninstalled(
                batch, transfer, "The workspace file could not be verified at its prepared path."
            )
        )


@contextmanager
def _open_workspace_file(
    path: Path, original: os.stat_result | None = None
) -> Iterator[tuple[int, os.stat_result]]:
    # Pin every directory and the leaf. Applying attributes through the leaf FD
    # prevents a concurrent rename/symlink swap from retargeting the metadata.
    flags = os.O_RDONLY | os.O_CLOEXEC | os.O_NOFOLLOW
    parent = os.open("/", flags | os.O_DIRECTORY)
    try:
        for part in path.parts[1:-1]:
            child = os.open(part, flags | os.O_DIRECTORY, dir_fd=parent)
            os.close(parent)
            parent = child
        fd = os.open(path.name, flags | os.O_NONBLOCK, dir_fd=parent)
    finally:
        os.close(parent)
    try:
        info = os.fstat(fd)
        if not stat.S_ISREG(info.st_mode) or info.st_nlink == 0:
            raise _UnverifiedWorkspaceFile
        if info.st_nlink != 1:
            raise LibraryDownloadRequestError("partial workspace path has another hard link")
        if original is not None and not _same_file(original, info):
            raise _UnverifiedWorkspaceFile
        yield fd, info
    finally:
        os.close(fd)


class PreparedDownloadInstaller:
    def __init__(
        self,
        destination: DownloadDestination,
        materializer: LibraryFileMaterializer,
        apps_client: HostedAppsClient | None = None,
    ) -> None:
        self.destination = destination
        self.materializer = materializer
        self.apps_client = apps_client

    def install(
        self,
        batches: tuple[PreparedMaterializeBatch, ...],
    ) -> tuple[list[Path], list[dict[str, object]]]:
        installed_paths: list[Path] = []
        item_index = 0
        reporter = DownloadCompletionReporter(self.apps_client)
        try:
            if any(batch.warnings for batch in batches):
                if sys.platform != "linux":
                    raise LibraryDownloadRequestError(
                        "partial workspace downloads require Linux file descriptors"
                    )
                return self._install_partial(batches, reporter)
            for batch in batches:
                for transfer in batch.transfers:
                    with reporter.observe(transfer):
                        suggested_path = self._suggested_path(transfer, item_index)
                        destination_path = self.destination.path / suggested_path
                        workspace_path = self._workspace_path(
                            transfer,
                            item_index,
                            destination_path,
                        )
                        if workspace_path is not None:
                            self._apply_xattrs(transfer, workspace_path)
                            installed_paths.append(workspace_path)
                        else:
                            self.materializer.materialize(
                                LibraryFileTransfer.parse(transfer),
                                destination_path,
                            )
                            installed_paths.append(destination_path)
                        item_index += 1
        finally:
            reporter.flush()
        return installed_paths, []

    def _install_partial(
        self, batches: tuple[PreparedMaterializeBatch, ...], reporter: DownloadCompletionReporter
    ) -> tuple[list[Path], list[dict[str, object]]]:
        # Inspect all local siblings before applying metadata. Reopen by FD and compare
        # the saved identity so a large selection need not hold all its files open.
        checked: dict[tuple[int, int], tuple[int, dict[str, object], Path, os.stat_result]] = {}
        uninstalled = []
        for index, batch in enumerate(batches, 1):
            for transfer in batch.transfers:
                path = Path(require_string(transfer["workspace_path"], "workspace_path"))
                with (
                    _skip_unverified_file(uninstalled, index, transfer),
                    _open_workspace_file(path) as (_, original),
                ):
                    identity = (original.st_dev, original.st_ino)
                    if identity in checked:
                        raise LibraryDownloadRequestError(
                            "partial workspace paths refer to the same file"
                        )
                    checked[identity] = (index, transfer, path, original)
        tagged = []
        for index, transfer, path, original in checked.values():
            with (
                _skip_unverified_file(uninstalled, index, transfer),
                _open_workspace_file(path, original) as (fd, current),
            ):
                size = transfer.get("size_bytes")
                if size is not None and current.st_size != size:
                    raise _UnverifiedWorkspaceFile
                if (
                    not _verified_content(fd, current, transfer["workspace_sha256"])
                    or not _matching_metadata(fd, transfer, allow_missing=True)
                    or current.st_ctime_ns != os.fstat(fd).st_ctime_ns
                ):
                    uninstalled.append(
                        _uninstalled(
                            index,
                            transfer,
                            "The workspace bytes or Library metadata did not match the verified transfer.",
                        )
                    )
                    continue
                with reporter.observe(transfer, defer_success=True):
                    self._apply_xattrs(transfer, fd)
                    observed = os.fstat(fd)
                    # Don't report the file if the path moved during tagging.
                    with _open_workspace_file(path, original):
                        pass
                    tagged.append((index, transfer, path, observed))
        # A later sibling's install could race an earlier pathname. Verify again
        # before recording each success and including that path in the result.
        paths: list[Path] = []
        for index, transfer, path, observed in tagged:
            with (
                _skip_unverified_file(uninstalled, index, transfer),
                _open_workspace_file(path, observed) as (fd, current),
            ):
                if (
                    observed.st_ctime_ns != current.st_ctime_ns
                    or not _matching_metadata(fd, transfer, allow_missing=False)
                    or not _verified_content(fd, current, transfer["workspace_sha256"])
                ):
                    uninstalled.append(
                        _uninstalled(
                            index,
                            transfer,
                            "The verified workspace file changed before completion.",
                        )
                    )
                    continue
                with reporter.observe(transfer):
                    paths.append(path)
        return paths, uninstalled

    def _apply_xattrs(self, transfer: dict[str, object], path: Path | int) -> None:
        library_file_id_value = transfer.get("library_file_id")
        library_file_id = (
            require_string(library_file_id_value, "transfer.library_file_id")
            if library_file_id_value is not None
            else None
        )
        attrs = include_library_file_id_xattr(
            parse_xattrs(transfer.get("xattrs", [])), library_file_id
        )
        self.materializer.apply_xattrs(attrs, path)

    @staticmethod
    def _workspace_path(
        transfer: dict[str, object],
        index: int,
        expected_path: Path,
    ) -> Path | None:
        value = transfer.get("workspace_path")
        if value is None:
            return None
        path = Path(require_string(value, f"transfers[{index}].workspace_path"))
        if not path.is_absolute():
            raise LibraryDownloadRequestError("workspace_path must be absolute")
        if path.resolve() != expected_path.resolve():
            raise LibraryDownloadRequestError(
                "workspace_path does not match the requested destination"
            )
        if not path.is_file():
            raise LibraryDownloadRequestError(f"workspace_path does not name a file: {path}")
        return path

    @staticmethod
    def _suggested_path(transfer: dict[str, object], index: int) -> Path:
        value = require_string(
            transfer.get("suggested_path"),
            f"transfers[{index}].suggested_path",
        )
        path = PurePosixPath(value)
        if path.is_absolute() or not path.parts or ".." in path.parts:
            raise LibraryDownloadRequestError(
                f"transfers[{index}].suggested_path must stay beneath the destination"
            )
        return Path(*path.parts)


class LibraryDownloadWorkflow:
    def __init__(
        self,
        apps_client: HostedAppsClient,
        materializer: LibraryFileMaterializer,
    ) -> None:
        self.apps_client = apps_client
        self.materializer = materializer

    def run(
        self,
        list_or_search_json: str,
        selection: str,
        destination_value: str,
    ) -> dict[str, object]:
        destination = DownloadDestination.parse(destination_value)
        plan = MaterializeRequestBuilder().build_plan(
            list_or_search_json,
            selection,
            destination,
        )
        if plan.items:
            prepared_batches = self._prepare_batches(plan)
        else:
            prepared_batches = ()
        paths, unverified = PreparedDownloadInstaller(
            destination=destination,
            materializer=self.materializer,
            apps_client=self.apps_client,
        ).install(prepared_batches)
        output: dict[str, object] = {
            "directory": str(destination.path),
            "files": [str(path) for path in paths],
        }
        warnings = [warning for batch in prepared_batches for warning in batch.warnings]
        if warnings:
            output.update(partial=True, warnings=warnings)
            uninstalled = [
                item for batch in prepared_batches for item in batch.uninstalled
            ] + unverified
            if uninstalled:
                output["uninstalled"] = uninstalled
        return output

    def _prepare_batches(
        self,
        plan: MaterializePlan,
    ) -> tuple[PreparedMaterializeBatch, ...]:
        batches = plan.batches(_PREPARE_MATERIALIZE_BATCH_SIZE)
        worker_count = min(
            len(batches),
            _MAX_PARALLEL_PREPARE_MATERIALIZE_BATCHES,
        )
        with ThreadPoolExecutor(max_workers=worker_count) as executor:
            futures: tuple[Future[dict[str, object]], ...] = tuple(
                executor.submit(
                    self.apps_client.call_tool,
                    _LIBRARY_CONNECTOR_ID,
                    "prepare_materialize",
                    batch.arguments,
                )
                for batch in batches
            )
            results = []
            for index, (batch, future) in enumerate(zip(batches, futures, strict=True), 1):
                result = PrepareMaterializeResult.parse(future.result())
                if not _PARTIAL_MARKERS & result.payload.keys() and len(result.transfers) != len(
                    batch.items
                ):
                    raise LibraryDownloadRequestError(
                        f"prepare_materialize batch {index} returned {len(result.transfers)} "
                        f"transfers; expected {len(batch.items)}"
                    )
                results.append(result)
        if not any(
            result.needs_partition(batch) for batch, result in zip(batches, results, strict=True)
        ):
            return tuple(PreparedMaterializeBatch(tuple(result.transfers)) for result in results)
        prepared = tuple(
            PreparedMaterializeBatch.from_partial_result(batch, result, index)
            for index, (batch, result) in enumerate(zip(batches, results, strict=True))
        )
        structured_results = [result for result in results if result.structured]
        tokens = [
            transfer["completion_token"]
            for result in structured_results
            for transfer in result.transfers
            if transfer.get("completion_token") is not None
        ]
        if len(set(tokens)) != len(tokens):
            raise LibraryDownloadRequestError("partial download has duplicate completion tokens")
        # A partial binding certifies disjointness within its own prepare call.
        # Other calls can claim the same leaf, or an unknown leaf in the same directory.
        root = Path(require_string(plan.destination["directory"], "destination.directory"))
        claims = Counter(
            root / require_string(transfer["suggested_path"], "suggested_path")
            for result in structured_results
            for transfer in result.transfers
        )
        omitted_paths = Counter(path for batch in prepared for path in batch.omitted_paths)
        omitted_dirs = Counter(path for batch in prepared for path in batch.omitted_directories)
        independent = []
        for index, batch in enumerate(prepared, 1):
            transfers, uninstalled = [], list(batch.uninstalled)
            for transfer in batch.transfers:
                path = Path(require_string(transfer["workspace_path"], "workspace_path"))
                if (
                    claims[path] > 1
                    or omitted_paths[path]
                    or omitted_dirs[path.parent] > (path.parent in batch.omitted_directories)
                ):
                    uninstalled.append(
                        _uninstalled(
                            index, transfer, "Another selected item may share this workspace path."
                        )
                    )
                else:
                    transfers.append(transfer)
            independent.append(
                PreparedMaterializeBatch(tuple(transfers), batch.warnings, tuple(uninstalled))
            )
        return tuple(independent)


def main(argv: list[str]) -> int:
    if argv:
        print("usage: library_download.py < request.json", file=sys.stderr)
        return 2
    if sys.stdin.isatty():
        print(
            "library download request failed: stdin must be closed after one JSON request",
            file=sys.stderr,
        )
        return 2
    try:
        try:
            request = require_object(json.load(sys.stdin), "download request")
        except json.JSONDecodeError as exc:
            raise LibraryDownloadRequestError("stdin must contain valid JSON") from exc
        list_or_search_json = json.dumps(
            require_object(request.get("result"), "download request result")
        )
        selection = require_string(request.get("selection"), "download request selection")
        if "destination" not in request:
            result = MaterializeRequestBuilder().build(list_or_search_json, selection)
        else:
            result = LibraryDownloadWorkflow(
                apps_client=HostedAppsClient(),
                materializer=LibraryFileMaterializer(),
            ).run(
                list_or_search_json,
                selection,
                require_string(request["destination"], "download request destination"),
            )
        print(json.dumps(result, separators=(",", ":")))
    except (
        HostedAppsError,
        LibraryDownloadRequestError,
        LibraryFileTransferError,
        OSError,
    ) as exc:
        print(f"library download request failed: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
