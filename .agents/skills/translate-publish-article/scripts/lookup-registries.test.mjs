import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { normalizeUrl, lookupRegistries, parseTranslations, parseExternalLinks } from './lookup-registries.mjs';

const row = (source, slug = 'translated') =>
  `| Title \\| subtitle | Перевод | Author | Translator | <${source}> | <https://cyborgsandmages.com/posts/translations/${slug}> |`;
const external = '## <https://example.com/article/>\n\n- `src/content/posts/translations/old.mdx`\n';

test('normalization removes tracking and anchors but preserves meaningful parameters and query slashes', () => {
  assert.equal(normalizeUrl('https://EXAMPLE.com/article/?id=7&utm_source=x#part'), 'https://example.com/article?id=7');
  assert.equal(normalizeUrl('https://example.com/?next=/foo/'), 'https://example.com?next=/foo/');
  assert.notEqual(normalizeUrl('https://example.com/?id=7'), normalizeUrl('https://example.com/?id=8'));
  assert.notEqual(normalizeUrl('http://www.example.com/a'), normalizeUrl('https://example.com/a'));
});

test('finds duplicates, internal targets and backlink files without returning unrelated rows', () => {
  const result = lookupRegistries({ articleUrl: 'https://example.com/article?utm_source=x#part',
    links: ['https://example.com/article/', 'https://example.com/article/'] },
  [row('https://example.com/article'), row('https://elsewhere.com/other', 'other')].join('\n'), external);
  assert.equal(result.article.translations.length, 1);
  assert.equal(result.article.translations[0].originalTitle, 'Title | subtitle');
  assert.equal(result.article.translations[0].internalPath, '/posts/translations/translated');
  assert.deepEqual(result.article.externalReferences[0].paths, ['src/content/posts/translations/old.mdx']);
  assert.equal(result.links.length, 1);
});

test('http/www variants stay unconfirmed until explicit verified evidence is supplied', () => {
  const input = { articleUrl: 'http://www.example.com/article' };
  const unverified = lookupRegistries(input, row('https://example.com/article'), external);
  assert.equal(unverified.article.translations.length, 0);
  assert.equal(unverified.article.needsVerification.translations.length, 1);
  assert.equal(unverified.article.needsVerification.externalReferences.length, 1);
  input.verifiedAliases = [{ urls: [input.articleUrl, 'https://example.com/article'], evidence: 'Redirect checked' }];
  const verified = lookupRegistries(input, row('https://example.com/article'), external);
  assert.equal(verified.article.translations.length, 1);
  assert.equal(verified.article.externalReferences.length, 1);
  assert.equal(verified.article.needsVerification.translations.length, 0);
  input.verifiedAliases[0].evidence = '';
  assert.throws(() => lookupRegistries(input, '', ''), /evidence/);
});

test('verified redirect chains work across domains and flag conflicting translations', () => {
  const result = lookupRegistries({ articleUrl: 'https://old.example/a', verifiedAliases: [
    { urls: ['https://old.example/a', 'https://new.example/b'], evidence: '301 checked' },
    { urls: ['https://new.example/b', 'https://final.example/c'], evidence: 'Canonical checked' },
  ] }, [row('https://final.example/c', 'one'), row('https://old.example/a', 'two')].join('\n'), '');
  assert.equal(result.article.translations.length, 2);
  assert.equal(result.article.ambiguousTranslation, true);
});

test('supports legacy entries and current external registry fence layout; fails on malformed source rows', () => {
  assert.equal(parseTranslations(row('—')).length, 0);
  assert.equal(parseExternalLinks(`## Формат\n\n\x60\x60\x60md\n${external}`).length, 1);
  assert.throws(() => parseTranslations('| broken | <https://example.com/a> |'), /row 1/);
});

test('CLI reads actual repository registries from stdin using its default root', () => {
  const root = new URL('../../../../', import.meta.url);
  const translations = parseTranslations(readFileSync(new URL('translated-articles.md', root), 'utf8'));
  const references = parseExternalLinks(readFileSync(new URL('external-links.md', root), 'utf8'));
  assert.ok(translations.length > 0);
  assert.ok(references.length > 0);
  const run = spawnSync(process.execPath, [fileURLToPath(new URL('./lookup-registries.mjs', import.meta.url)), '-'], {
    input: JSON.stringify({ articleUrl: translations[0].originalUrl, links: [references[0].url] }), encoding: 'utf8',
  });
  assert.equal(run.status, 0, run.stderr);
  const result = JSON.parse(run.stdout);
  assert.ok(result.article.translations.some(item => item.fullUrl === translations[0].fullUrl));
  assert.deepEqual(result.links[0].externalReferences[0].paths, references[0].paths);
});
