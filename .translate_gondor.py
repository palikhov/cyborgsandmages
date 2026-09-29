import re
import sys
from pathlib import Path
import argostranslate.translate

src, dst = map(Path, sys.argv[1:3])
langs = argostranslate.translate.get_installed_languages()
en = next(x for x in langs if x.code == "en")
ru = next(x for x in langs if x.code == "ru")
translator = en.get_translation(ru)

def translate_plain(text: str) -> str:
    if not re.search(r"[A-Za-z]", text):
        return text
    return translator.translate(text).strip()

def translate_inline(text: str) -> str:
    saved = []
    def link(m):
        token = f"LINKTOKEN{len(saved)}ENDTOKEN"
        saved.append(f"[{translate_plain(m.group(1))}]({m.group(2)})")
        return token
    masked = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", link, text)
    result = translate_plain(masked)
    for i, value in enumerate(saved):
        result = result.replace(f"LINKTOKEN{i}ENDTOKEN", value)
        result = result.replace(f"LINKTOKEN {i} ENDTOKEN", value)
    return result

raw = src.read_text(encoding="utf-8")
blocks = raw.split("\n\n")
out = []
skip_exact = {"Email Address", "Subscribe!", "So, without further ado:", "So, without further ado, let’s get to it."}
for block in blocks:
    stripped = block.strip()
    if not stripped:
        continue
    if stripped.startswith("(Note: Thanks to the effort of a kind reader"):
        continue
    if stripped.startswith("As an aside: welcome new readers!"):
        continue
    if stripped.startswith("And if you want to support this project"):
        continue
    if stripped in skip_exact:
        continue
    if stripped.startswith("# ") or stripped.startswith("Author:") or stripped.startswith("Canonical:"):
        out.append(stripped)
        continue
    if stripped.startswith("![Hero]"):
        out.append(stripped)
        continue
    image = re.match(r"^!\[([^\]]*)\]\((https?://[^)]+)\)$", stripped)
    if image:
        out.append(f"![{translate_plain(image.group(1))}]({image.group(2)})")
        continue
    heading = re.match(r"^(#{2,4})\s+(.+)$", stripped, re.S)
    if heading:
        out.append(f"{heading.group(1)} {translate_inline(heading.group(2))}")
        continue
    if stripped.startswith(">"):
        lines = []
        for line in stripped.splitlines():
            body = line[1:].lstrip() if line.startswith(">") else line
            lines.append("> " + translate_inline(body) if body else ">")
        out.append("\n".join(lines))
        continue
    out.append(translate_inline(stripped))

dst.write_text("\n\n".join(out) + "\n", encoding="utf-8")
