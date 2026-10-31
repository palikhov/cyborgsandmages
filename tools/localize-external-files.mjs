import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, renameSync, statSync, writeFileSync } from "node:fs";
import { basename, extname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const registryPath = join(root, "external-links.md");
const downloadDir = join(root, "public", "files", "downloads");
const reportPath = join(root, "reports", "external-files-localization.json");

const manualSources = new Map([
  ["http://gutenberg.net.au/ebooks06/0600981.txt", "https://www.gutenberg.org/cache/epub/42243/pg42243.txt"],
  ["http://microlite20.net/wp-content/uploads/2013/01/M20-campaigns.pdf", "https://d1vzi28wh99zvq.cloudfront.net/pdf_previews/311250-sample.pdf"],
  ["https://www3.autarch.co?wpdmpro=region-hex-maps", "https://autarch.co/download/region-hex-maps/?wpdmdl=245&refresh=6ae530d6a21f91793405142"],
]);

const manualFiles = new Map([
  ["https://drive.google.com/file/d/0BznYauJBmGDJU2d5aHhUX3V6S00/view?usp=sharing&resourcekey=0-iQpgm9F0Hq73Mv6UOejIzQ", "Sample-random-encounter-table-for-Necrocarcerus.pdf"],
]);

const fileExtensions = new Set([
  ".7z", ".csv", ".doc", ".docx", ".epub", ".json", ".kml", ".kmz",
  ".mobi", ".mov", ".mp3", ".mp4", ".odp", ".ods", ".odt", ".ogg",
  ".pdf", ".ppt", ".pptx", ".rar", ".rtf", ".tsv", ".txt", ".wav",
  ".webm", ".xls", ".xlsx", ".xml", ".zip",
]);

const mimeExtensions = new Map([
  ["application/pdf", ".pdf"],
  ["application/rtf", ".rtf"],
  ["application/msword", ".doc"],
  ["application/vnd.ms-excel", ".xls"],
  ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", ".docx"],
  ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ".xlsx"],
  ["application/vnd.openxmlformats-officedocument.presentationml.presentation", ".pptx"],
  ["application/vnd.oasis.opendocument.spreadsheet", ".ods"],
  ["application/zip", ".zip"],
  ["application/x-7z-compressed", ".7z"],
  ["application/x-rar-compressed", ".rar"],
  ["audio/mpeg", ".mp3"],
  ["audio/wav", ".wav"],
  ["audio/x-wav", ".wav"],
  ["text/csv", ".csv"],
  ["text/plain", ".txt"],
]);

function parseRegistry(markdown) {
  const entries = [];
  const pattern = /^## <([^>]+)>\r?\n\r?\n((?:- `[^`]+`\r?\n)+)/gm;
  for (const match of markdown.matchAll(pattern)) {
    entries.push({
      url: match[1],
      refs: [...match[2].matchAll(/`([^`]+)`/g)].map((item) => item[1]),
      block: match[0],
    });
  }
  return entries;
}

function candidateKind(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }
  const extension = extname(decodeURIComponent(url.pathname)).toLowerCase();
  if (fileExtensions.has(extension)) return "extension";
  if (/^docs\.google\.com$/i.test(url.hostname) && /^\/(document|spreadsheets)\/d\//.test(url.pathname)) return "google-export";
  if (/^drive\.google\.com$/i.test(url.hostname) && /^\/file\/d\//.test(url.pathname)) return "google-drive";
  if (/wpdmpro=/i.test(url.search) || /download/i.test(url.pathname + url.search)) return "download-endpoint";
  return null;
}

function fetchUrl(entry) {
  const url = new URL(entry.url);
  if (entry.kind === "google-export") {
    const match = url.pathname.match(/^\/(document|spreadsheets)\/d\/([^/]+)/);
    if (match?.[1] === "document") return `https://docs.google.com/document/d/${match[2]}/export?format=pdf`;
    if (match?.[1] === "spreadsheets") return `https://docs.google.com/spreadsheets/d/${match[2]}/export?format=xlsx`;
  }
  if (entry.kind === "google-drive") {
    const id = url.pathname.match(/^\/file\/d\/([^/]+)/)?.[1];
    if (id) return `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
  }
  return entry.url;
}

function filenameFromDisposition(value) {
  if (!value) return null;
  const encoded = value.match(/filename\*=UTF-8''([^;]+)/i)?.[1];
  if (encoded) {
    try { return decodeURIComponent(encoded.replace(/^"|"$/g, "")); } catch { /* fall through */ }
  }
  return value.match(/filename\s*=\s*"([^"]+)"/i)?.[1]
    ?? value.match(/filename\s*=\s*([^;]+)/i)?.[1]?.trim()
    ?? null;
}

function cleanFilename(value) {
  return value
    .normalize("NFC")
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/[. ]+$/g, "")
    .slice(0, 180);
}

function expectedExtension(entry, contentType) {
  const original = extname(decodeURIComponent(new URL(entry.url).pathname)).toLowerCase();
  if (fileExtensions.has(original)) return original;
  if (entry.kind === "google-export") return /\/spreadsheets\//.test(entry.url) ? ".xlsx" : ".pdf";
  return mimeExtensions.get(contentType) ?? "";
}

function chooseFilename(entry, response) {
  const contentType = response.headers.get("content-type")?.split(";", 1)[0].toLowerCase() ?? "";
  const dispositionName = filenameFromDisposition(response.headers.get("content-disposition"));
  let sourceName = dispositionName;
  if (!sourceName) {
    const finalPath = decodeURIComponent(new URL(response.url).pathname);
    const originalPath = decodeURIComponent(new URL(entry.url).pathname);
    sourceName = basename(finalPath) || basename(originalPath) || "download";
  }
  let filename = cleanFilename(sourceName) || "download";
  const extension = expectedExtension(entry, contentType);
  if (!extname(filename) && extension) filename += extension;
  return filename;
}

function isHtml(buffer, contentType) {
  if (contentType === "text/html" || contentType === "application/xhtml+xml") return true;
  const prefix = buffer.subarray(0, 512).toString("utf8").trimStart().toLowerCase();
  return prefix.startsWith("<!doctype html") || prefix.startsWith("<html") || prefix.startsWith("<head") || prefix.startsWith("<body");
}

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function existingHashes() {
  const result = new Map();
  for (const name of readdirSync(downloadDir)) {
    const path = join(downloadDir, name);
    if (!statSync(path).isFile()) continue;
    result.set(name.toLowerCase(), { name, hash: sha256(readFileSync(path)) });
  }
  return result;
}

function uniqueFilename(filename, buffer, known) {
  const key = filename.toLowerCase();
  const hash = sha256(buffer);
  if (!known.has(key)) return { filename, hash, reused: false };
  const existing = known.get(key);
  if (existing.hash === hash) return { filename: existing.name, hash, reused: true };
  const extension = extname(filename);
  const stem = basename(filename, extension);
  for (let index = 2; ; index += 1) {
    const candidate = `${stem}-${index}${extension}`;
    const candidateKey = candidate.toLowerCase();
    if (!known.has(candidateKey)) return { filename: candidate, hash, reused: false };
    if (known.get(candidateKey).hash === hash) return { filename: known.get(candidateKey).name, hash, reused: true };
  }
}

async function fetchFile(url, headers = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 90_000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "accept": "application/pdf,application/zip,application/octet-stream,audio/*,text/plain,*/*;q=0.8",
        "user-agent": "Mozilla/5.0 (compatible; CyborgsAndMagesFileArchiver/1.0)",
        ...headers,
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    const contentType = response.headers.get("content-type")?.split(";", 1)[0].toLowerCase() ?? "";
    if (isHtml(buffer, contentType)) throw new Error(`получена HTML-страница (${contentType || "без Content-Type"})`);
    if (buffer.length === 0) throw new Error("получен пустой файл");
    return { response, buffer, contentType };
  } finally {
    clearTimeout(timer);
  }
}

async function saveDownload(entry, known, fetched) {
  const { response, buffer, contentType } = fetched;
  const selected = uniqueFilename(chooseFilename(entry, response), buffer, known);
  if (!selected.reused) writeFileSync(join(downloadDir, selected.filename), buffer);
  known.set(selected.filename.toLowerCase(), { name: selected.filename, hash: selected.hash });
  return {
    status: "downloaded",
    filename: selected.filename,
    bytes: buffer.length,
    sha256: selected.hash,
    reused: selected.reused,
    contentType,
    finalUrl: response.url,
  };
}

async function download(entry, known) {
  try {
    const fetched = await fetchFile(fetchUrl(entry));
    return await saveDownload(entry, known, fetched);
  } catch (error) {
    return { status: "failed", error: error instanceof Error ? error.message : String(error) };
  }
}

async function waybackUrl(originalUrl) {
  const endpoint = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(originalUrl)}&output=json&filter=statuscode:200&fl=timestamp,original,mimetype&collapse=digest&limit=-10`;
  const response = await fetch(endpoint, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; CyborgsAndMagesFileArchiver/1.0)" },
    signal: AbortSignal.timeout(45_000),
  });
  if (!response.ok) throw new Error(`CDX HTTP ${response.status}`);
  const rows = await response.json();
  if (!Array.isArray(rows) || rows.length < 2) throw new Error("архивных копий не найдено");
  const snapshots = rows.slice(1).filter((row) => row[0] && row[1]);
  if (!snapshots.length) throw new Error("архивных копий не найдено");
  const nonHtmlSnapshots = snapshots.filter((row) => !/^text\/html$/i.test(row[2] ?? ""));
  const [timestamp, archivedOriginal] = (nonHtmlSnapshots.length ? nonHtmlSnapshots : snapshots).at(-1);
  return `https://web.archive.org/web/${timestamp}id_/${archivedOriginal}`;
}

async function recoverDownload(entry, known) {
  const attempts = [];
  const manualFile = manualFiles.get(entry.url);
  if (manualFile) {
    const path = join(downloadDir, manualFile);
    if (existsSync(path)) {
      const buffer = readFileSync(path);
      return {
        status: "downloaded",
        filename: manualFile,
        bytes: buffer.length,
        sha256: sha256(buffer),
        reused: true,
        contentType: mimeExtensions.has("application/pdf") ? "application/pdf" : "",
        finalUrl: entry.url,
        recoveredBy: "connected-google-drive",
      };
    }
  }
  const manualSource = manualSources.get(entry.url);
  if (manualSource) attempts.push({ label: "manual-mirror", url: manualSource });
  const direct = fetchUrl(entry);
  attempts.push({ label: "direct-with-referer", url: direct, headers: { referer: new URL(entry.url).origin + "/" } });
  if (direct.startsWith("http://")) attempts.push({ label: "https", url: `https://${direct.slice(7)}` });
  if (direct.startsWith("https://annarchive.com/")) attempts.push({ label: "http", url: `http://${direct.slice(8)}` });
  if (/^http:\/\/www\.wizards\.com\/dnd\/files\//i.test(direct)) {
    attempts.push({ label: "wizards-media", url: direct.replace(/^http:\/\/www\.wizards\.com\/dnd\/files\//i, "https://media.wizards.com/downloads/dnd/") });
  }
  const errors = [];
  for (const attempt of attempts) {
    try {
      const fetched = await fetchFile(attempt.url, attempt.headers);
      return { ...(await saveDownload(entry, known, fetched)), recoveredBy: attempt.label };
    } catch (error) {
      errors.push(`${attempt.label}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  try {
    const archivedUrl = await waybackUrl(entry.url);
    const fetched = await fetchFile(archivedUrl);
    return { ...(await saveDownload(entry, known, fetched)), recoveredBy: "wayback", archivedUrl };
  } catch (error) {
    errors.push(`wayback: ${error instanceof Error ? error.message : String(error)}`);
  }
  return { status: "failed", error: errors.join("; ") };
}

function urlSafeFilename(filename) {
  const extension = extname(filename).toLowerCase();
  const stem = basename(filename, extname(filename))
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "-and-")
    .replace(/['’]/g, "")
    .replace(/[^A-Za-z0-9._-]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^[-.]+|[-.]+$/g, "");
  return `${stem || "download"}${extension}`;
}

function normalizeReportFiles(report) {
  const claimed = new Map(readdirSync(downloadDir).map((name) => [name.toLowerCase(), name]));
  const filenameMap = new Map();
  for (const entry of report.entries.filter((item) => item.status === "downloaded" && item.filename)) {
    if (filenameMap.has(entry.filename)) {
      entry.filename = filenameMap.get(entry.filename);
      continue;
    }
    const oldName = entry.filename;
    const oldPath = join(downloadDir, oldName);
    if (!existsSync(oldPath)) continue;
    const extension = extname(oldName).toLowerCase();
    const base = basename(urlSafeFilename(oldName), extension);
    let nextName = `${base}${extension}`;
    let index = 2;
    while (claimed.has(nextName.toLowerCase()) && claimed.get(nextName.toLowerCase()) !== oldName) {
      nextName = `${base}-${index++}${extension}`;
    }
    if (nextName !== oldName) {
      renameSync(oldPath, join(downloadDir, nextName));
      claimed.delete(oldName.toLowerCase());
      claimed.set(nextName.toLowerCase(), nextName);
    }
    filenameMap.set(oldName, nextName);
    entry.filename = nextName;
  }
  return report;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function urlVariants(rawUrl) {
  const variants = new Set([rawUrl, rawUrl.replace(/&/g, "&amp;")]);
  try {
    const normalized = new URL(rawUrl).href;
    variants.add(normalized);
    variants.add(normalized.replace(/&/g, "&amp;"));
    if (normalized.includes("/?")) variants.add(normalized.replace("/?", "?"));
    else if (/^[a-z]+:\/\/[^/?#]+\?/i.test(normalized)) variants.add(normalized.replace("?", "/?"));
    if (normalized.endsWith("/")) variants.add(normalized.slice(0, -1));
    else if (!/[?#]/.test(new URL(normalized).pathname.slice(-1))) variants.add(`${normalized}/`);
  } catch { /* the registry parser already validates normal URLs */ }
  return [...variants].filter(Boolean).sort((a, b) => b.length - a.length);
}

function cleanLinkLabel(label) {
  return label
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_~`]/g, "")
    .replace(/\\([\\`*_[\]{}()#+.!-])/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.:;,]+$/g, "");
}

function labelForMention(line, variants, filename) {
  for (const variant of variants) {
    const pattern = new RegExp(`\\[([^\\]]+)\\]\\((?:<)?${escapeRegExp(variant)}(?:>)?\\)`);
    const match = line.match(pattern);
    if (match) {
      const label = cleanLinkLabel(match[1]);
      const generic = /^(здесь|тут|скачать|забирайте|пример|ссылка|файл|download|here)$/i;
      if (label && !generic.test(label) && label.length <= 140) return label;
    }
  }
  return basename(filename, extname(filename)).replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function titleWithExtension(label, filename) {
  const extension = extname(filename).slice(1).toUpperCase();
  const title = label || basename(filename, extname(filename));
  if (!extension || new RegExp(`\\(${escapeRegExp(extension)}\\)$`, "i").test(title)) return title;
  return `${title} (${extension})`;
}

function normalizeFileTagTitles(report) {
  let updated = 0;
  for (const entry of report.entries.filter((item) => item.status === "downloaded")) {
    for (const ref of entry.refs) {
      const path = join(root, ref);
      let text = readFileSync(path, "utf8");
      const pattern = new RegExp(`(<File\\s+file="${escapeRegExp(entry.filename)}"\\s+title=")([^"]*)("\\s*/>)`, "s");
      const match = text.match(pattern);
      if (!match) continue;
      const nextTitle = titleWithExtension(match[2], entry.filename);
      const reportRef = entry.rewrite?.refs?.find((item) => item.ref === ref);
      if (reportRef) reportRef.title = nextTitle;
      if (nextTitle === match[2]) continue;
      text = text.replace(pattern, `$1${nextTitle}$3`);
      writeFileSync(path, text, "utf8");
      updated += 1;
    }
  }
  return updated;
}

function replaceEntryInFile(entry, ref, apply = true) {
  const path = join(root, ref);
  if (!existsSync(path)) return { ref, status: "missing-file" };
  let text = readFileSync(path, "utf8");
  const internalUrl = `/files/downloads/${entry.filename}`;
  const alreadyTagged = text.includes(`file="${entry.filename}"`);
  const variants = urlVariants(entry.url);
  let firstIndex = -1;
  let firstVariant = null;
  for (const variant of variants) {
    const index = text.indexOf(variant);
    if (index >= 0 && (firstIndex < 0 || index < firstIndex)) {
      firstIndex = index;
      firstVariant = variant;
    }
  }
  if (firstIndex < 0) {
    if (text.includes(internalUrl) && alreadyTagged) return { ref, status: "already-local" };
    return { ref, status: "url-not-found" };
  }
  if (!apply) return { ref, status: "ready" };

  const lineStart = text.lastIndexOf("\n", firstIndex - 1) + 1;
  const nextNewline = text.indexOf("\n", firstIndex);
  const lineEnd = nextNewline >= 0 ? nextNewline : text.length;
  const originalLine = text.slice(lineStart, lineEnd);
  const label = labelForMention(originalLine, [firstVariant, ...variants], entry.filename);
  for (const variant of variants) text = text.split(variant).join(internalUrl);

  if (!alreadyTagged) {
    const mentionIndex = text.indexOf(internalUrl);
    const mentionLineEnd = text.indexOf("\n", mentionIndex);
    const insertAt = mentionLineEnd >= 0 ? mentionLineEnd : text.length;
    const title = titleWithExtension(label, entry.filename)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;");
    const tag = `\n\n<File\n\tfile="${entry.filename}"\n\ttitle="${title}"\n/>\n`;
    text = `${text.slice(0, insertAt)}${tag}${text.slice(insertAt)}`;
  }

  writeFileSync(path, text, "utf8");
  return { ref, status: "localized", internalUrl, title: titleWithExtension(label, entry.filename) };
}

function rewriteDownloadedEntries(report) {
  const notFiles = new Set([
    "http://technoirrpg.com/index.php?page=downloads",
    "http://thegeniusinc.com/dd-monster-maker-download?ref=2.3.3",
  ]);
  for (const entry of report.entries) {
    if (notFiles.has(entry.url)) {
      entry.status = "not-a-file";
      entry.error = undefined;
      entry.rewrite = { registryKept: true, reason: "обычная веб-страница, не прямой файл" };
      continue;
    }
    if (entry.status !== "downloaded") continue;
    const refs = entry.refs.map((ref) => replaceEntryInFile(entry, ref));
    entry.rewrite = { refs, registryKept: refs.some((item) => !["localized", "already-local"].includes(item.status)) };
  }

  let registryText = readFileSync(registryPath, "utf8");
  const currentBlocks = new Map(parseRegistry(registryText).map((entry) => [entry.url, entry.block]));
  for (const entry of report.entries) {
    if (entry.status !== "downloaded" || entry.rewrite?.registryKept) continue;
    const block = currentBlocks.get(entry.url);
    if (block && registryText.includes(block)) registryText = registryText.replace(block, "");
  }
  registryText = registryText.replace(/\n{4,}/g, "\n\n");
  writeFileSync(registryPath, registryText, "utf8");
  report.rewrittenAt = new Date().toISOString();
  return report;
}

function auditDownloadedEntries(report) {
  return report.entries
    .filter((entry) => entry.status === "downloaded")
    .flatMap((entry) => entry.refs.map((ref) => ({ url: entry.url, filename: entry.filename, ...replaceEntryInFile(entry, ref, false) })));
}
async function mapConcurrent(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function consume() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index], index);
      const item = items[index];
      const result = results[index];
      console.log(`${index + 1}/${items.length} ${result.status}: ${item.url}${result.filename ? ` -> ${result.filename}` : ` (${result.error})`}`);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, consume));
  return results;
}

const registry = readFileSync(registryPath, "utf8");
const candidates = parseRegistry(registry)
  .map((entry) => ({ ...entry, kind: candidateKind(entry.url) }))
  .filter((entry) => entry.kind);

console.log(`Найдено кандидатов: ${candidates.length}`);

if (process.argv.includes("--scan")) {
  for (const entry of candidates) console.log(`${entry.kind}\t${entry.url}\t${entry.refs.join("; ")}`);
  process.exit(0);
}

if (process.argv.includes("--recover")) {
  if (!existsSync(reportPath)) throw new Error(`Нет отчёта ${reportPath}`);
  const report = JSON.parse(readFileSync(reportPath, "utf8"));
  const failed = report.entries.filter((entry) => entry.status === "failed");
  console.log(`Повторное восстановление: ${failed.length}`);
  const known = existingHashes();
  const outcomes = await mapConcurrent(failed, 3, (entry) => recoverDownload(entry, known));
  for (let index = 0; index < failed.length; index += 1) Object.assign(failed[index], outcomes[index]);
  report.generatedAt = new Date().toISOString();
  normalizeReportFiles(report);
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  const remaining = report.entries.filter((entry) => entry.status === "failed").length;
  console.log(`После восстановления осталось ошибок: ${remaining}`);
  if (remaining) process.exitCode = 1;
  process.exit();
}

if (process.argv.includes("--normalize")) {
  if (!existsSync(reportPath)) throw new Error(`Нет отчёта ${reportPath}`);
  const report = normalizeReportFiles(JSON.parse(readFileSync(reportPath, "utf8")));
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log("Имена загруженных файлов нормализованы.");
  process.exit();
}

if (process.argv.includes("--rewrite")) {
  if (!existsSync(reportPath)) throw new Error(`Нет отчёта ${reportPath}`);
  const report = rewriteDownloadedEntries(JSON.parse(readFileSync(reportPath, "utf8")));
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  const states = report.entries.flatMap((entry) => entry.rewrite?.refs ?? []).reduce((counts, item) => {
    counts[item.status] = (counts[item.status] ?? 0) + 1;
    return counts;
  }, {});
  console.log(JSON.stringify(states, null, 2));
  process.exit();
}

if (process.argv.includes("--audit-rewrite")) {
  if (!existsSync(reportPath)) throw new Error(`Нет отчёта ${reportPath}`);
  const rows = auditDownloadedEntries(JSON.parse(readFileSync(reportPath, "utf8")));
  const states = rows.reduce((counts, item) => {
    counts[item.status] = (counts[item.status] ?? 0) + 1;
    return counts;
  }, {});
  console.log(JSON.stringify(states, null, 2));
  for (const row of rows.filter((item) => !["ready", "already-local"].includes(item.status))) console.log(`${row.status}\t${row.ref}\t${row.url}`);
  process.exit();
}

if (process.argv.includes("--normalize-titles")) {
  if (!existsSync(reportPath)) throw new Error(`Нет отчёта ${reportPath}`);
  const report = JSON.parse(readFileSync(reportPath, "utf8"));
  console.log(`Обновлено заголовков: ${normalizeFileTagTitles(report)}`);
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  process.exit();
}

if (!process.argv.includes("--download")) {
  console.error("Укажите --scan или --download");
  process.exit(2);
}

const known = existingHashes();
const outcomes = await mapConcurrent(candidates, 4, (entry) => download(entry, known));
const report = {
  generatedAt: new Date().toISOString(),
  registry: "external-links.md",
  entries: candidates.map((entry, index) => ({
    url: entry.url,
    refs: entry.refs,
    kind: entry.kind,
    ...outcomes[index],
  })),
};
normalizeReportFiles(report);
writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

const downloaded = outcomes.filter((item) => item.status === "downloaded").length;
const failed = outcomes.length - downloaded;
console.log(`Готово: ${downloaded} загружено, ${failed} ошибок. Отчёт: ${reportPath}`);
if (failed) process.exitCode = 1;
