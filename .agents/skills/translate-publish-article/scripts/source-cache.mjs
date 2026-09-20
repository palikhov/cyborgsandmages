import { readFileSync, writeFileSync, existsSync, mkdirSync, mkdtempSync, lstatSync, renameSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash, randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const digest = value => createHash('sha256').update(value).digest('hex');
function urlKey(value) {
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Expected HTTP(S) URL');
  url.hash = '';
  return url.href;
}
function cachePath(directory, name) {
  if (!directory) throw new Error('cacheDir is required; create a task workspace with init');
  const root = resolve(directory);
  mkdirSync(root, { recursive: true });
  if (lstatSync(root).isSymbolicLink()) throw new Error('Cache directory must not be a symlink');
  const path = join(root, name);
  if (existsSync(path) && lstatSync(path).isSymbolicLink()) throw new Error('Cache file must not be a symlink');
  return path;
}
function saveJson(path, value) {
  const temporary = `${path}.${randomUUID()}.tmp`;
  writeFileSync(temporary, JSON.stringify(value, null, 2), { flag: 'wx' });
  renameSync(temporary, path);
}

export async function cachedFetch(url, { cacheDir, refresh = false, maxBytes = 30 * 1024 * 1024 } = {}, fetcher = fetch) {
  const requestedUrl = urlKey(url);
  if (!Number.isSafeInteger(maxBytes) || maxBytes < 1) throw new Error('maxBytes must be positive');
  const path = cacheDir ? cachePath(cacheDir, `http-${digest(requestedUrl)}.json`) : null;
  if (path && existsSync(path) && !refresh) {
    const record = JSON.parse(readFileSync(path, 'utf8'));
    const bytes = Buffer.from(record.body, 'base64');
    if (record.requestedUrl !== requestedUrl || digest(bytes) !== record.sha256) throw new Error('Corrupt cache; explicitly refresh the source');
    if (bytes.length > maxBytes) throw new Error('Cached response exceeds maxBytes');
    return { ...record, body: undefined, bytes, cached: true };
  }
  const response = await fetcher(requestedUrl, { signal: AbortSignal.timeout(30000), redirect: 'follow' });
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${requestedUrl}`);
  if (!response.body || Number(response.headers.get('content-length')) > maxBytes) throw new Error('Empty response or response exceeds maxBytes');
  const chunks = []; let size = 0;
  for await (const chunk of response.body) {
    size += chunk.length;
    if (size > maxBytes) throw new Error('Response exceeds maxBytes');
    chunks.push(chunk);
  }
  const bytes = Buffer.concat(chunks);
  const finalUrl = urlKey(response.url || requestedUrl);
  const record = { requestedUrl, finalUrl, contentType: response.headers.get('content-type') ?? '',
    fetchedAt: new Date().toISOString(), sha256: digest(bytes), body: bytes.toString('base64') };
  if (path) saveJson(path, record);
  return { ...record, body: undefined, bytes, cached: false };
}

export function saveSource(input) {
  const { cacheDir, sourceUrl, canonicalUrl, title, author, textFile, links, images } = input;
  urlKey(sourceUrl); urlKey(canonicalUrl);
  if (!title?.trim() || !author?.trim() || !Array.isArray(links) || !Array.isArray(images)) throw new Error('Expected title, author, links and images');
  for (const url of [...links, ...images]) urlKey(url);
  const text = readFileSync(textFile, 'utf8');
  if (!text.trim()) throw new Error('Extracted source text is empty');
  const snapshot = { sourceUrl, canonicalUrl, title, author, links: [...new Set(links)], images: [...new Set(images)],
    verifiedAliases: input.verifiedAliases ?? [], savedAt: new Date().toISOString(), sha256: digest(text), text };
  const path = cachePath(cacheDir, `article-${digest(urlKey(sourceUrl))}.json`);
  if (existsSync(path) && !input.refresh) {
    const previous = JSON.parse(readFileSync(path, 'utf8'));
    const { savedAt: _old, ...oldData } = previous;
    const { savedAt: _new, ...newData } = snapshot;
    if (JSON.stringify(oldData) !== JSON.stringify(newData)) throw new Error('Source snapshot already exists; use refresh only after checking omissions or source changes');
  } else saveJson(path, snapshot);
  return { snapshot: path, characters: text.length, links: snapshot.links.length, images: snapshot.images.length };
}

export function readSource(input) {
  const path = cachePath(input.cacheDir, `article-${digest(urlKey(input.sourceUrl))}.json`);
  const snapshot = JSON.parse(readFileSync(path, 'utf8'));
  if (digest(snapshot.text) !== snapshot.sha256) throw new Error('Corrupt source snapshot');
  // Default output is compact; read the snapshot file once for translation.
  const { text, ...metadata } = snapshot;
  return { snapshot: path, ...metadata, characters: text.length };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const [mode, file] = process.argv.slice(2);
    if (mode === 'init') console.log(JSON.stringify({ cacheDir: mkdtempSync(join(tmpdir(), 'article-work-')) }));
    else {
      if (!file) throw new Error('Usage: source-cache.mjs init | <fetch|save|read> <input.json|->');
      const input = JSON.parse(readFileSync(file === '-' ? 0 : file, 'utf8').replace(/^\uFEFF/, ''));
      if (mode === 'fetch') {
        if (!input.cacheDir) throw new Error('cacheDir is required');
        const response = await cachedFetch(input.url, input);
        const path = cachePath(input.cacheDir, `response-${digest(urlKey(input.url))}.bin`);
        writeFileSync(path, response.bytes);
        const { bytes, ...metadata } = response;
        console.log(JSON.stringify({ ...metadata, path }, null, 2));
      } else if (mode === 'save') console.log(JSON.stringify(saveSource(input), null, 2));
      else if (mode === 'read') console.log(JSON.stringify(readSource(input), null, 2));
      else throw new Error('Unknown mode');
    }
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
