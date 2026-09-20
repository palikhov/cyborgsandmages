import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { repositoryRoot, safePath, imageInfo, commitFiles } from './publication-lib.mjs';
import { cachedFetch } from './source-cache.mjs';

export async function downloadImages(root, input, fetcher = fetch) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(input.slug) || !Array.isArray(input.images)) throw new Error('Expected slug and images array');
  const unique = [...new Set(input.images)];
  if (input.coverUrl && !unique.includes(input.coverUrl)) throw new Error('coverUrl must be one of images');
  const changes = [], images = [];
  const limit = input.maxBytes ?? 30 * 1024 * 1024;
  if (!Number.isSafeInteger(limit) || limit < 1) throw new Error('maxBytes must be a positive integer');
  function stage(path, bytes) {
    const file = safePath(root, path);
    if (existsSync(file)) {
      if (!readFileSync(file).equals(bytes)) throw new Error(`Refusing to overwrite different content: ${path}`);
    } else changes.push({ path, before: null, after: bytes });
  }
  for (const [index, sourceUrl] of unique.entries()) {
    if (!['http:', 'https:'].includes(new URL(sourceUrl).protocol)) throw new Error(`Invalid image URL: ${sourceUrl}`);
    const response = await cachedFetch(sourceUrl, { cacheDir: input.cacheDir, refresh: input.refresh, maxBytes: limit }, fetcher);
    const declared = response.contentType.split(';')[0].trim().toLowerCase();
    const bytes = response.bytes, info = await imageInfo(bytes);
    if (declared !== info.mime) throw new Error(`MIME mismatch: declared ${declared}, detected ${info.mime}: ${sourceUrl}`);
    const path = `public/images/${input.slug}-${index + 1}.${info.ext}`;
    stage(path, bytes);
    const image = { sourceUrl, path, url: path.slice('public'.length), cached: response.cached, ...info };
    if (input.coverUrl === sourceUrl) {
      image.coverPath = `src/assets/covers/${input.slug}.${info.ext}`;
      image.cover = `~assets/covers/${input.slug}.${info.ext}`;
      stage(image.coverPath, bytes);
    }
    images.push(image);
  }
  return { images, written: commitFiles(root, changes) };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (!process.argv[2]) throw new Error('Usage: node download-images.mjs <input.json|-> [repository-root]');
    const input = JSON.parse(readFileSync(process.argv[2] === '-' ? 0 : process.argv[2], 'utf8').replace(/^\uFEFF/, ''));
    console.log(JSON.stringify(await downloadImages(process.argv[3] ?? repositoryRoot, input), null, 2));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
