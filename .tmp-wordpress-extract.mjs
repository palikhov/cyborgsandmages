import fs from "node:fs";

const [input, output] = process.argv.slice(2);
const html = fs.readFileSync(input, "utf8");
const start = html.indexOf('<div class="entry-content">');
const flair = html.indexOf('<div id="jp-post-flair"', start);
const end = flair >= 0 ? flair : html.indexOf('</div><!-- .entry-content -->', start);
if (start < 0 || end < 0) throw new Error("Article body not found");

const decode = (value) => value
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(Number.parseInt(n, 16)))
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"')
  .replace(/&apos;|&#039;/g, "'")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">");

let body = html.slice(start, end)
  .replace(/<span\b[^>]*id=["']more-[^>]+><\/span>/gi, "")
  .replace(/<br\s*\/?>/gi, "\n")
  .replace(/<i\b[^>]*>([\s\S]*?)<\/i>/gi, "*$1*")
  .replace(/<em\b[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
  .replace(/<strong\b[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
  .replace(/<b\b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
  .replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, "\n## $1\n")
  .replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, "\n## $1\n")
  .replace(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi, "\n### $1\n")
  .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, "\n$1\n")
  .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, "\n- $1")
  .replace(/<[^>]+>/g, "");

body = decode(body)
  .replace(/[ \t]+\n/g, "\n")
  .replace(/\n[ \t]+/g, "\n")
  .replace(/ {2,}/g, " ")
  .replace(/\n{3,}/g, "\n\n")
  .trim() + "\n";

fs.writeFileSync(output, body, "utf8");
