import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { cachedFetch, saveSource, readSource } from './source-cache.mjs';
import { downloadImages } from './download-images.mjs';
import { sharp, validateArticle, repositoryRoot } from './publication-lib.mjs';

function workspace(t) {
  const root = mkdtempSync(join(tmpdir(), 'source-cache-test-'));
  t.after(() => {
    if (dirname(resolve(root)) !== resolve(tmpdir()) || !root.includes('source-cache-test-')) throw new Error('Unsafe cleanup');
    rmSync(root, { recursive: true, force: true });
  });
  return root;
}

test('cached responses reuse bytes and redirect evidence without network; refresh is explicit', async t => {
  const cacheDir = workspace(t); let calls = 0;
  const fetcher = async () => {
    calls++;
    const response = new Response(`body-${calls}`, { headers: { 'content-type': 'text/html; charset=utf-8' } });
    Object.defineProperty(response, 'url', { value: 'https://example.com/canonical' });
    return response;
  };
  const first = await cachedFetch('https://example.com/source#one', { cacheDir }, fetcher);
  const second = await cachedFetch('https://example.com/source#two', { cacheDir }, fetcher);
  assert.equal(calls, 1);
  assert.equal(second.cached, true);
  assert.equal(second.finalUrl, 'https://example.com/canonical');
  assert.ok(second.bytes.equals(first.bytes));
  await cachedFetch('https://example.com/source?edition=2', { cacheDir }, fetcher);
  assert.equal(calls, 2);
  const fresh = await cachedFetch('https://example.com/source', { cacheDir, refresh: true }, fetcher);
  assert.equal(calls, 3);
  assert.equal(fresh.bytes.toString(), 'body-3');
});

test('cache rejects corruption and size violations and does not cache HTTP failures', async t => {
  const cacheDir = workspace(t), url = 'https://example.com/source';
  await assert.rejects(() => cachedFetch(url, { cacheDir }, async () => new Response('Error', { status: 503 })), /503/);
  assert.equal(readdirSync(cacheDir).length, 0);
  await cachedFetch(url, { cacheDir }, async () => new Response('original'));
  await assert.rejects(() => cachedFetch(url, { cacheDir, maxBytes: 1 }, () => { throw new Error('Network should not run'); }), /maxBytes/);
  const path = join(cacheDir, readdirSync(cacheDir)[0]);
  const record = JSON.parse(readFileSync(path, 'utf8'));
  record.body = Buffer.from('modified').toString('base64'); writeFileSync(path, JSON.stringify(record));
  await assert.rejects(() => cachedFetch(url, { cacheDir }, () => { throw new Error('Network should not run'); }), /Corrupt/);
});

test('source snapshot preserves full text and metadata; replacement requires explicit refresh', t => {
  const cacheDir = workspace(t), textFile = join(cacheDir, 'extracted.md');
  writeFileSync(textFile, '# Original\n\nFull text.\n\n| A | B |\n| - | - |\n| 1 | 2 |');
  const input = { cacheDir, textFile, sourceUrl: 'https://example.com/source', canonicalUrl: 'https://example.com/canonical', title: 'Original', author: 'Author', links: ['https://example.com/related', 'https://example.com/related'], images: [] };
  const saved = saveSource(input);
  assert.equal(JSON.parse(readFileSync(saved.snapshot, 'utf8')).text, readFileSync(textFile, 'utf8'));
  assert.equal(readSource(input).links.length, 1);
  assert.equal(readSource(input).text, undefined);
  assert.equal(saveSource(input).snapshot, saved.snapshot);
  writeFileSync(textFile, 'Corrected complete text');
  assert.throws(() => saveSource(input), /already exists/);
  saveSource({ ...input, refresh: true });
  assert.equal(readSource(input).characters, 'Corrected complete text'.length);
});

test('image reruns reuse task cache and copy cover without an extra request', async t => {
  const root = workspace(t), cacheDir = join(root, 'cache'); let calls = 0;
  const png = await sharp({ create: { width: 1, height: 1, channels: 3, background: '#fff' } }).png().toBuffer();
  const input = { cacheDir, slug: 'cached', images: ['https://example.com/image'], coverUrl: 'https://example.com/image' };
  const fetcher = async () => { calls++; return new Response(png, { headers: { 'content-type': 'image/png' } }); };
  await downloadImages(root, input, fetcher);
  const rerun = await downloadImages(root, input, fetcher);
  assert.equal(calls, 1);
  assert.equal(rerun.images[0].cached, true);
  assert.deepEqual(rerun.written, []);
  assert.ok(readFileSync(join(root, 'src/assets/covers/cached.png')).equals(png));
});

test('short descriptions are accepted without minimum-length warnings, maximum remains enforced', async t => {
  const root = workspace(t);
  const put = (path, text) => { mkdirSync(dirname(join(root, path)), { recursive: true }); writeFileSync(join(root, path), text); };
  for (const path of ['src/content/config.ts', 'tag-system.md']) put(path, readFileSync(join(repositoryRoot, path)));
  const path = 'src/content/posts/translations/short.mdx';
  const article = description => `---\ntitle: Статья\ndescription: "${description}"\ndate: 2026-09-20\nauthor: Author\ntranslator: Translator\ntags: [Перевод, Правила, Советы Мастеру]\n---\n\n[Оригинал](<https://example.com/article>)\n\n## Текст\n\nПеревод.`;
  put(path, article('ПЕРЕВОД - Краткое описание.'));
  const short = await validateArticle(root, path);
  assert.equal(short.ok, true);
  assert.deepEqual(short.warnings, []);
  put(path, article('ПЕРЕВОД - ' + 'x'.repeat(400)));
  assert.equal((await validateArticle(root, path)).ok, false);
});
