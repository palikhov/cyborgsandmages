import fs from 'node:fs';
import path from 'node:path';

const configPath = process.argv[2];
if (!configPath) throw new Error('Usage: node .tmp-article-pipeline.mjs <config.json>');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const html = fs.readFileSync(config.sourceFile, 'utf8');
const start = html.indexOf(config.startMarker);
const end = html.indexOf(config.endMarker, start + config.startMarker.length);
if (start < 0 || end < 0) throw new Error('Article body markers not found');
const body = html.slice(start, end);
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&#038;', '&');
const links = [...body.matchAll(/href=["']([^"']+)["']/gi)].map(match => decode(match[1]));
const extractedImages = [...body.matchAll(/<img\b[^>]*src=["']([^"']+)["'][^>]*>/gi)]
  .map(match => decode(match[1]))
  .filter(url => /^https?:\/\//.test(url))
  .filter(url => !(config.excludeImages ?? []).includes(url));
const images = config.imageUrls ?? extractedImages;
const aliases = [...(config.verifiedAliases ?? [])];
if (config.resolveAlexandrianIds) {
  const ids = [...new Set(links.map(url => url.match(/^https:\/\/thealexandrian\.net\/\?p=(\d+)$/)?.[1]).filter(Boolean))];
  const posts = [];
  for (let offset = 0; offset < ids.length; offset += 100) {
    const include = ids.slice(offset, offset + 100).join(',');
    const url = `https://thealexandrian.net/wp-json/wp/v2/posts?include=${include}&_fields=id,link&per_page=100`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`WordPress API returned ${response.status}`);
    posts.push(...await response.json());
  }
  aliases.push(...posts.map(post => ({
    urls: [`https://thealexandrian.net/?p=${post.id}`, post.link],
    evidence: `Официальный WordPress REST API сайта вернул канонический адрес публикации ${post.id}.`,
  })));
}
fs.mkdirSync(config.cacheDir, { recursive: true });
const extracted = path.join(config.cacheDir, 'extracted.md');
fs.writeFileSync(extracted, body, 'utf8');
const sourceManifest = path.join(config.cacheDir, 'source-save.json');
fs.writeFileSync(sourceManifest, JSON.stringify({
  cacheDir: config.cacheDir,
  sourceUrl: config.articleUrl,
  canonicalUrl: config.canonicalUrl,
  title: config.title,
  author: config.author,
  textFile: extracted,
  links: [...new Set(links)],
  images: [...new Set(images)],
  verifiedAliases: aliases,
}, null, 2), 'utf8');
const registryManifest = path.join(config.cacheDir, 'registry.json');
fs.writeFileSync(registryManifest, JSON.stringify({
  articleUrl: config.canonicalUrl,
  links: [...new Set(links)],
  verifiedAliases: aliases,
}, null, 2), 'utf8');
if (config.slug && config.coverUrl) {
  const imageManifest = path.join(config.cacheDir, 'images.json');
  fs.writeFileSync(imageManifest, JSON.stringify({
    slug: config.slug,
    cacheDir: config.cacheDir,
    images: [...new Set(images)],
    coverUrl: config.coverUrl,
  }, null, 2), 'utf8');
}
if (config.articlePath && config.originalTitle && config.date && config.category) {
  const publicationManifest = path.join(config.cacheDir, 'publication.json');
  fs.writeFileSync(publicationManifest, JSON.stringify({
    article: config.articlePath,
    canonicalUrl: config.canonicalUrl,
    originalTitle: config.originalTitle,
    date: config.date,
    category: config.category,
    verifiedAliases: aliases,
    excludeExternal: config.excludeExternal ?? [],
  }, null, 2), 'utf8');
}
console.log(JSON.stringify({
  bodyCharacters: body.length,
  links: [...new Set(links)].length,
  images: [...new Set(images)].length,
  aliases: aliases.length,
  extracted,
  sourceManifest,
  registryManifest,
}, null, 2));
