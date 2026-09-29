import fs from "node:fs";

const [input, output] = process.argv.slice(2);
const html = fs.readFileSync(input, "utf8");

function decode(value) {
	return value
		.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
		.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
		.replaceAll("&nbsp;", " ")
		.replaceAll("&amp;", "&")
		.replaceAll("&quot;", '"')
		.replaceAll("&apos;", "'")
		.replaceAll("&hellip;", "…")
		.replaceAll("&lt;", "<")
		.replaceAll("&gt;", ">");
}

function inline(value) {
	return decode(value)
		.replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => `[${inline(text)}](${decode(href)})`)
		.replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**")
		.replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*")
		.replace(/<sup\b[^>]*>([\s\S]*?)<\/sup>/gi, "$1")
		.replace(/<br\s*\/?\s*>/gi, " ")
		.replace(/<[^>]+>/g, "")
		.replace(/\s+/g, " ")
		.replace(/\s+([,.;:!?])/g, "$1")
		.trim();
}

function imageUrl(tag) {
	let url = tag.match(/\bdata-orig-file=["']([^"']+)["']/i)?.[1]
		?? tag.match(/\bsrc=["']([^"']+)["']/i)?.[1]
		?? "";
	url = decode(url);
	url = url.replace(/^https:\/\/i\d+\.wp\.com\/acoup\.blog\//, "https://acoup.blog/");
	url = url.replace(/[?&](?:fit|resize)=[^&]+/g, "").replace(/[?&]ssl=1/g, "").replace(/[?&]$/g, "");
	return url;
}

const title = inline(html.match(/<h1\b[^>]*class=["'][^"']*entry-title[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "");
const canonicalUrl = decode(html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1] ?? "");
const heroTag = html.match(/<img\b[^>]*class=["'][^"']*hero-header-image[^"']*["'][^>]*>/i)?.[0] ?? "";
const hero = imageUrl(heroTag);
const start = html.indexOf('<div class="entry-content">');
const end = html.indexOf("<div class=\"sharedaddy", start);
if (start < 0 || end < 0) throw new Error("entry-content boundaries not found");
const article = html.slice(start, end);
const blocks = [];
const links = new Set();
const images = hero ? [hero] : [];

for (const match of article.matchAll(/<(h2|h3|h4|p)\b[^>]*>([\s\S]*?)<\/\1>|<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>|<figure\b[^>]*>([\s\S]*?)<\/figure>/gi)) {
	if (match[1]) {
		const kind = match[1].toLowerCase();
		const raw = match[2];
		const text = inline(raw);
		if (!text) continue;
		for (const link of raw.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) links.add(decode(link[1]));
		blocks.push(kind.startsWith("h") ? `${"#".repeat(Number(kind[1]))} ${text}` : text);
	} else if (match[3]) {
		const raw = match[3];
		for (const link of raw.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) links.add(decode(link[1]));
		const paragraphs = [...raw.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => inline(m[1])).filter(Boolean);
		if (paragraphs.length) blocks.push(paragraphs.map((p) => `> ${p}`).join("\n>\n"));
		else {
			const text = inline(raw);
			if (text) blocks.push(`> ${text}`);
		}
	} else {
		const raw = match[4];
		const tag = raw.match(/<img\b[^>]*>/i)?.[0] ?? "";
		const url = imageUrl(tag);
		if (!url) continue;
		const alt = inline(tag.match(/\balt=["']([^"']*)["']/i)?.[1] ?? "");
		const captionRaw = raw.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i)?.[1] ?? "";
		const caption = inline(captionRaw);
		for (const link of captionRaw.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) links.add(decode(link[1]));
		if (!images.includes(url)) images.push(url);
		blocks.push(`![${alt}](${url})${caption ? `\n\n*${caption}*` : ""}`);
	}
}

const markdown = [`# ${title}`, `Author: Bret Devereaux`, `Canonical: ${canonicalUrl}`, hero ? `![Hero](${hero})` : "", ...blocks].filter(Boolean).join("\n\n") + "\n";
fs.writeFileSync(output, markdown, "utf8");
process.stdout.write(JSON.stringify({ title, author: "Bret Devereaux", canonicalUrl, links: [...links], images, blocks: blocks.length, characters: markdown.length }, null, 2));
