import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { repositoryRoot, parseArticle, safePath, sharp, validateArticle, commitFiles } from './publication-lib.mjs';
import { downloadImages } from './download-images.mjs';
import { runPublication, externalRegistry, updateTranslations } from './publish-article.mjs';
import { equivalentUrls } from './publication-lib.mjs';

const article = 'src/content/posts/translations/new-article.mdx';
const target = 'src/content/posts/translations/related.mdx';
const old = 'src/content/posts/translations/old.mdx';
const front = (url, body = '', extra = '') => `---\ntitle: Перевод\ndescription: "ПЕРЕВОД - ${'Описание статьи. '.repeat(20)}"\ndate: 2026-09-17\nauthor: Author\ntranslator: Translator\ntags: [Перевод, Правила, Советы Мастеру]\n${extra}---\n\n[Оригинал](<${url}>)\n\n${body}\n`;
const entry = (url, slug) => `| Original | Перевод | Author | Translator | <${url}> | <https://cyborgsandmages.com/posts/translations/${slug}> |`;
const header = '| Original | Title | Author | Translator | URL | Target |\n| --- | --- | --- | --- | --- | --- |\n';
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'publication-test-'));
  t.after(() => { if (dirname(resolve(root)) !== resolve(tmpdir()) || !root.includes('publication-test-')) throw new Error('Unsafe cleanup'); rmSync(root, { recursive: true, force: true }); });
  const put = (name, text) => { const path = safePath(root, name); mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, text); };
  put('src/content/config.ts', readFileSync(join(repositoryRoot, 'src/content/config.ts')));
  put('tag-system.md', readFileSync(join(repositoryRoot, 'tag-system.md')));
  put(target, front('https://example.com/related', '## Section\n\nTarget.'));
  put(article, front('https://example.com/new', '## Section\n\n[**Related**](https://example.com/related#section)\n\n[Remaining](https://other.com/page?utm_source=test)'));
  put(old, front('https://example.com/old', '[New][new]\n\n[new]: https://example.com/new#section "Title"\n\n`https://example.com/new`\n\n```md\n[Code](https://example.com/new)\n```'));
  put('translated-articles.md', header + entry('https://example.com/related', 'related') + '\n');
  put('external-links.md', `# Registry\n\n## <https://example.com/new>\n\n- \`${old}\`\n- \`${old}\`\n`);
  return { root, put, input: { article, canonicalUrl: 'https://example.com/new', originalTitle: 'Original | title', date: '2026-09-17' } };
}

test('preview/apply/check updates links and registries, preserves source/code, and is idempotent', async t => {
  const { root, input } = fixture(t);
  const before = readFileSync(join(root, old), 'utf8');
  const preview = await runPublication(root, input, 'preview');
  assert.equal(preview.internalLinksReplaced, 1);
  assert.deepEqual(preview.updatedBacklinks, [old]);
  assert.equal(readFileSync(join(root, old), 'utf8'), before);
  await runPublication(root, input, 'apply');
  const updated = readFileSync(join(root, old), 'utf8');
  assert.ok(updated.includes('[New](</posts/translations/new-article#section> "Title")'));
  assert.ok(updated.includes('[Code](https://example.com/new)'));
  assert.ok(updated.includes('[Оригинал](<https://example.com/old>)'));
  assert.ok(readFileSync(join(root, article), 'utf8').includes('[**Related**](</posts/translations/related#section>)'));
  const external = readFileSync(join(root, 'external-links.md'), 'utf8');
  assert.ok(!external.includes('https://example.com/new'));
  assert.ok(external.includes('https://other.com/page'));
  assert.ok(!external.includes('utm_source'));
  assert.equal((await runPublication(root, input, 'check')).ok, true);
  assert.deepEqual((await runPublication(root, input, 'apply')).changedFiles, []);
});

test('reference link rewrite does not alter a shared image definition; missing anchors are dropped', async t => {
  const { root, input, put } = fixture(t);
  put(old, front('https://example.com/old', '[Link][shared]\n\n![Image][shared]\n\n[shared]: https://example.com/new#absent'));
  await runPublication(root, input, 'apply');
  const text = readFileSync(join(root, old), 'utf8');
  assert.ok(text.includes('[Link](</posts/translations/new-article>)'));
  assert.ok(text.includes('![Image][shared]'));
  assert.ok(text.includes('[shared]: https://example.com/new#absent'));
});

test('validation rejects broken MDX, unknown tags/fields, external images, missing files and wrong date', async t => {
  const { root, input, put } = fixture(t);
  put(article, front(input.canonicalUrl, '![remote](https://example.com/a.png)\n\n![missing](/images/no.png)', 'unknown: x\n').replace('Правила', 'Not a tag'));
  const result = await validateArticle(root, article, { ...input, date: '2026-09-18' });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some(e => e.startsWith('Frontmatter schema')));
  assert.ok(result.errors.includes('Invalid canonical tags'));
  assert.ok(result.errors.some(e => e.includes('Expected local')));
  assert.ok(result.errors.some(e => e.includes('no.png')));
  assert.ok(result.errors.some(e => e.includes('publication date')));
  put(article, front(input.canonicalUrl, '{unclosed'));
  await assert.rejects(() => validateArticle(root, article, input));
});

test('failed plan leaves all files untouched; source duplicates and path traversal are rejected', async t => {
  const { root, input, put } = fixture(t);
  const before = readFileSync(join(root, article), 'utf8');
  put('translated-articles.md', header + entry(input.canonicalUrl, 'another') + '\n');
  await assert.rejects(() => runPublication(root, input, 'apply'), /another translation/);
  assert.equal(readFileSync(join(root, article), 'utf8'), before);
  assert.throws(() => safePath(root, '../outside'), /Unsafe/);
  assert.throws(() => commitFiles(root, [{ path: article, before: 'stale', after: 'overwrite' }]), /changed since planning/);
});

test('downloads unique images once, detects formats, copies cover, refuses conflicts and HTML', async t => {
  const { root, put } = fixture(t);
  const png = await sharp({ create: { width: 2, height: 2, channels: 4, background: '#ff0000' } }).png().toBuffer();
  let calls = 0;
  const fetcher = async () => { calls++; return new Response(png, { headers: { 'content-type': 'image/png' } }); };
  const input = { slug: 'images', images: ['https://example.com/a.jpg', 'https://example.com/a.jpg'], coverUrl: 'https://example.com/a.jpg' };
  const result = await downloadImages(root, input, fetcher);
  assert.equal(calls, 1);
  assert.equal(result.images[0].path, 'public/images/images-1.png');
  assert.ok(readFileSync(join(root, result.images[0].coverPath)).equals(png));
  assert.deepEqual((await downloadImages(root, input, fetcher)).written, []);
  put('public/images/images-1.png', 'different');
  await assert.rejects(() => downloadImages(root, input, fetcher), /overwrite/);
  await assert.rejects(() => downloadImages(root, { slug: 'bad', images: ['https://example.com/error'] }, async () => new Response('<html>error</html>', { headers: { 'content-type': 'text/html' } })));
  assert.equal(existsSync(join(root, 'public/images/bad-1.png')), false);
  await assert.rejects(() => downloadImages(root, { slug: 'wrong', images: ['https://example.com/a'] }, async () => new Response(png, { headers: { 'content-type': 'image/jpeg' } })), /MIME mismatch/);
});

test('registry serialization sorts, deduplicates external paths, escapes titles and preserves meaningful queries', () => {
  const key = equivalentUrls();
  const registry = externalRegistry('# Registry\n\n## <https://x.com/?id=1>\n\n- `a`\n- `a`\n\n## <https://x.com/?id=2>\n\n- `b`\n', key);
  assert.equal(registry.sections.size, 2);
  assert.equal(registry.sections.get('https://x.com?id=1').size, 1);
  const output = updateTranslations(header, ['A | B', 'Title', 'Author', 'Translator', '<https://a.com/new>', '<https://cyborgsandmages.com/posts/translations/new>'], key);
  assert.ok(output.includes('A \\| B'));
});

test('actual registries parse for update without writing them', () => {
  const key = equivalentUrls();
  assert.ok(externalRegistry(readFileSync(join(repositoryRoot, 'external-links.md'), 'utf8'), key).sections.size > 0);
  const real = readFileSync(join(repositoryRoot, 'translated-articles.md'), 'utf8');
  const output = updateTranslations(real, ['Fixture', 'Fixture', 'A', 'T', '<https://fixture.invalid/new>', '<https://cyborgsandmages.com/posts/translations/fixture-test-only>'], key);
  assert.ok(output.includes('fixture-test-only'));
});

test('validation checks internal targets, anchors, local image extensions and linked external images', async t => {
  const { root, input, put } = fixture(t);
  const png = await sharp({ create: { width: 1, height: 1, channels: 3, background: '#fff' } }).png().toBuffer();
  put('public/images/wrong.jpg', png);
  put(article, front(input.canonicalUrl, '[Missing](/posts/translations/missing)\n\n[Anchor](/posts/translations/related#missing)\n\n![Wrong](/images/wrong.jpg)\n\n[Full size](https://example.com/full.png)'));
  const result = await validateArticle(root, article, input);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some(e => e.includes('Internal link /posts/translations/missing')));
  assert.ok(result.errors.some(e => e.includes('Heading anchor does not exist')));
  assert.ok(result.errors.some(e => e.includes('extension mismatch')));
  assert.ok(result.errors.some(e => e.includes('External image link')));
});

test('explicit non-content exclusions stay external but are omitted from registry', async t => {
  const { root, input } = fixture(t);
  input.excludeExternal = [{ url: 'https://other.com/page', reason: 'Author profile' }];
  await runPublication(root, input, 'apply');
  assert.ok(readFileSync(join(root, article), 'utf8').includes('https://other.com/page'));
  assert.ok(!readFileSync(join(root, 'external-links.md'), 'utf8').includes('other.com'));
  assert.equal((await runPublication(root, input, 'check')).ok, true);
  input.excludeExternal = [{ url: 'https://absent.com/page', reason: 'Not present' }];
  await assert.rejects(() => runPublication(root, input, 'apply'), /not a remaining article link/);
});

test('unverified source variants prevent updates and confirmed redirects permit backlink replacement', async t => {
  const { root, input, put } = fixture(t);
  put(old, front('https://example.com/old', '[New](http://www.example.com/new)'));
  put('external-links.md', `# Registry\n\n## <http://www.example.com/new>\n\n- \`${old}\`\n`);
  await assert.rejects(() => runPublication(root, input, 'apply'), /variants/);
  input.verifiedAliases = [{ urls: ['http://www.example.com/new', input.canonicalUrl], evidence: 'Redirect verified' }];
  await runPublication(root, input, 'apply');
  assert.ok(readFileSync(join(root, old), 'utf8').includes('[New](</posts/translations/new-article>)'));
});

test('failed image batch writes nothing and size limit is enforced', async t => {
  const { root } = fixture(t);
  const png = await sharp({ create: { width: 1, height: 1, channels: 3, background: '#fff' } }).png().toBuffer();
  const input = { slug: 'batch', images: ['https://example.com/ok', 'https://example.com/broken'] };
  await assert.rejects(() => downloadImages(root, input, async url => url.endsWith('/ok') ? new Response(png, { headers: { 'content-type': 'image/png' } }) : new Response('Unavailable', { status: 503 })), /503/);
  assert.equal(existsSync(join(root, 'public/images/batch-1.png')), false);
  await assert.rejects(() => downloadImages(root, { slug: 'limit', images: [input.images[0]], maxBytes: 1 }, async () => new Response(png, { headers: { 'content-type': 'image/png' } })), /maxBytes/);
});
