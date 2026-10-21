import fs from "node:fs";

const [sourcePath, outputPath] = process.argv.slice(2);
const html = fs.readFileSync(sourcePath, "utf8");

function decode(value) {
  return value
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(Number.parseInt(n, 16)))
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
    .replace(/&#(?:39|x27);/gi, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function attr(tag, name) {
  return tag.match(new RegExp(`${name}=["']([^"']*)["']`, "i"))?.[1] ?? "";
}

const startMatch = html.match(/<div\b[^>]*class=["'][^"']*\bentry-content\b[^"']*["'][^>]*>/i);
if (!startMatch || startMatch.index === undefined) throw new Error("entry-content not found");
const contentStart = startMatch.index + startMatch[0].length;
const divTags = /<\/?div\b[^>]*>/gi;
divTags.lastIndex = contentStart;
let depth = 1;
let end = -1;
for (let match; (match = divTags.exec(html)); ) {
  depth += /^<\/div/i.test(match[0]) ? -1 : 1;
  if (depth === 0) { end = match.index; break; }
}
if (end < 0) throw new Error("entry-content closing div not found");
const content = html.slice(contentStart, end).trim();
fs.writeFileSync(outputPath, content, "utf8");

const title = decode(html.match(/<h1\b[^>]*class=["'][^"']*\bentry-title\b[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "");
const author = decode(html.match(/<span\b[^>]*class=["'][^"']*\bauthor\b[^"']*["'][^>]*>[\s\S]*?<a\b[^>]*>([\s\S]*?)<\/a>/i)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "");
const canonical = decode(html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1] ?? "");
const published = html.match(/<time\b[^>]*class=["'][^"']*\bpublished\b[^"']*["'][^>]*datetime=["']([^"']+)["']/i)?.[1] ?? "";
const links = [...content.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)].map((m) => decode(m[1])).filter((url) => /^https?:\/\//i.test(url));
const images = [];
for (const match of content.matchAll(/<img\b[^>]*>/gi)) {
  const tag = match[0];
  const srcset = attr(tag, "data-srcset") || attr(tag, "srcset");
  const candidates = srcset ? srcset.split(",").map((part) => part.trim().split(/\s+/)[0]).filter(Boolean) : [];
  const url = candidates.at(-1) || attr(tag, "data-src") || attr(tag, "src");
  if (/^https?:\/\//i.test(url)) images.push(decode(url));
}
console.log(JSON.stringify({ title, author, canonical, published, links: [...new Set(links)], images: [...new Set(images)], outputPath, characters: content.length }, null, 2));
