import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { lookupRegistries, normalizeUrl } from './lookup-registries.mjs';
import { repositoryRoot, safePath, articlePath, parseArticle, rewriteLinks, equivalentUrls, validateArticle, commitFiles } from './publication-lib.mjs';

const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const cells = line => line.split(/(?<!\\)\|/).slice(1, -1).map(s => s.trim());
const unwrap = text => text.replace(/^<|>$/g, '');
const escapeCell = value => String(value).replace(/\r?\n/g, ' ').replace(/\|/g, '\\|');
const newline = text => text.includes('\r\n') ? '\r\n' : '\n';

export function updateTranslations(text, entry, key) {
  const lines = text.trimEnd().split(/\r?\n/);
  let first = lines.findIndex(line => line.startsWith('|') && cells(line).length === 6 && /^<?https?:\/\//.test(cells(line)[5]));
  if (first < 0) {
    const separator = lines.findIndex(line => line.startsWith('|') && cells(line).length === 6 && cells(line).every(cell => /^:?-+:?$/.test(cell)));
    if (separator < 0) throw new Error('Cannot find translation registry data table');
    first = separator + 1;
  }
  const rows = lines.slice(first).filter(line => line.trim());
  const seenOriginal = new Map(), seenTarget = new Map();
  let found = false;
  const newLine = `| ${entry.map(escapeCell).join(' | ')} |`;
  const target = unwrap(entry[5]), original = key(unwrap(entry[4]));
  for (const line of rows) {
    const values = cells(line);
    if (values.length !== 6) throw new Error('Unexpected content in translation registry data');
    const source = unwrap(values[4]), full = unwrap(values[5]);
    const sourceKey = /^https?:/.test(source) ? key(source) : null;
    if (seenTarget.has(full) || (sourceKey && seenOriginal.has(sourceKey))) throw new Error(`Existing duplicate translation registry entry: ${source}`);
    seenTarget.set(full, line);
    if (sourceKey) seenOriginal.set(sourceKey, line);
    if (sourceKey === original || full === target) {
      if (line !== newLine) throw new Error(`Conflicting existing translation: ${source}`);
      found = true;
    }
  }
  if (!found) rows.push(newLine);
  rows.sort((a, b) => compare(unwrap(cells(a)[4]), unwrap(cells(b)[4])));
  return [...lines.slice(0, first), ...rows].join(newline(text)) + newline(text);
}

export function externalRegistry(text, key) {
  const start = text.search(/^## <https?:\/\/[^>]+>\s*$/m);
  if (start < 0) return { prefix: text.trimEnd() + newline(text) + newline(text), sections: new Map(), eol: newline(text) };
  const prefix = text.slice(0, start), sections = new Map();
  let current;
  for (const line of text.slice(start).split(/\r?\n/)) {
    const heading = line.match(/^## <(https?:\/\/[^>]+)>\s*$/);
    if (heading) {
      const url = key(heading[1]);
      if (!sections.has(url)) sections.set(url, new Set());
      current = sections.get(url);
    } else if (line.trim()) {
      const path = line.match(/^- `([^`]+)`\s*$/);
      if (!path || !current) throw new Error('Unexpected content in external registry; handle manually without discarding it');
      current.add(path[1]);
    }
  }
  return { prefix, sections, eol: newline(text) };
}

function renderExternal(registry) {
  const blocks = [...registry.sections].filter(([, paths]) => paths.size).sort(([a], [b]) => compare(a, b)).map(([url, paths]) =>
    `## <${url}>\n\n${[...paths].sort(compare).map(path => `- \`${path}\``).join('\n')}`);
  return registry.prefix + blocks.join('\n\n').replace(/\n/g, registry.eol) + registry.eol;
}

function externalLinks(article) {
  return article.links.filter(item => item.node !== article.original && /^https?:\/\//.test(item.url) && new URL(item.url).hostname !== 'cyborgsandmages.com');
}

function localTarget(root, internalPath) {
  if (!/^\/posts\/[^?#]+$/.test(internalPath)) throw new Error(`Invalid internal target: ${internalPath}`);
  const relative = `src/content${internalPath}${internalPath.endsWith('.mdx') ? '' : '.mdx'}`;
  return parseArticle(readFileSync(safePath(root, relative), 'utf8'));
}

function withAnchor(internalPath, externalUrl, target) {
  const hash = new URL(externalUrl).hash;
  if (!hash) return internalPath;
  let decoded;
  try { decoded = decodeURIComponent(hash.slice(1)); } catch { return internalPath; }
  return target.anchors.has(decoded) ? internalPath + hash : internalPath;
}

export async function planPublication(root, input) {
  const { article: path, canonicalUrl, originalTitle } = input;
  const absolute = articlePath(root, path);
  if (!originalTitle?.trim() || normalizeUrl(canonicalUrl) !== canonicalUrl) throw new Error('Expected originalTitle and normalized canonicalUrl');
  const key = equivalentUrls(input.verifiedAliases);
  const before = readFileSync(absolute, 'utf8'), article = parseArticle(before);
  const validation = await validateArticle(root, path, input, before);
  if (!validation.ok) throw new Error(`Article validation failed:\n${validation.errors.join('\n')}`);
  const translationsText = readFileSync(safePath(root, 'translated-articles.md'), 'utf8');
  const externalText = readFileSync(safePath(root, 'external-links.md'), 'utf8');
  const lookup = lookupRegistries({ articleUrl: canonicalUrl, links: externalLinks(article).map(item => item.url), verifiedAliases: input.verifiedAliases }, translationsText, externalText);
  if (lookup.article.ambiguousTranslation || lookup.article.needsVerification.translations.length || lookup.article.needsVerification.externalReferences.length) throw new Error('Resolve original URL ambiguity/variants with verifiedAliases before publishing');
  const internalPath = '/' + path.slice('src/content/'.length, -4);
  if (lookup.article.translations.some(row => row.internalPath !== internalPath)) throw new Error('The original already has another translation');
  const changes = [], replacements = [], warnings = [...validation.warnings];
  const targets = new Map();
  for (const item of externalLinks(article)) {
    const result = lookup.links.find(result => result.url === item.url);
    if (result.ambiguousTranslation) throw new Error(`Ambiguous translation target: ${item.url}`);
    if (!result.translations.length) {
      if (result.needsVerification.translations.length) warnings.push(`Unverified translation variant kept external: ${item.url}`);
      continue;
    }
    const targetPath = result.translations[0].internalPath;
    if (!targets.has(targetPath)) targets.set(targetPath, localTarget(root, targetPath));
    replacements.push({ item, url: withAnchor(targetPath, item.url, targets.get(targetPath)) });
  }
  const after = rewriteLinks(article, replacements), finalArticle = parseArticle(after);
  if (after !== before) changes.push({ path, before, after });
  const backlinks = [...new Set(lookup.article.externalReferences.flatMap(row => row.paths))];
  const updatedBacklinks = [];
  const registry = externalRegistry(externalText, key);
  for (const oldPath of backlinks) {
    if (!/^src\/content\/posts\/[^/]+\/[^/]+\.mdx$/.test(oldPath)) throw new Error(`Invalid backlink path: ${oldPath}`);
    const oldFile = safePath(root, oldPath);
    const oldText = oldPath === path ? after : readFileSync(oldFile, 'utf8');
    const old = parseArticle(oldText);
    if (old.nodes.some(node => /^mdx/.test(node.type))) throw new Error(`Manual link handling needed for JSX/expressions: ${oldPath}`);
    const oldReplacements = externalLinks(old).filter(item => key(item.url) === key(canonicalUrl)).map(item => ({ item, url: withAnchor(internalPath, item.url, finalArticle) }));
    const newText = rewriteLinks(old, oldReplacements);
    if (newText !== oldText) {
      if (oldPath === path) {
        const existing = changes.find(change => change.path === path);
        if (existing) existing.after = newText;
        else changes.push({ path, before, after: newText });
      } else changes.push({ path: oldPath, before: oldText, after: newText });
      updatedBacklinks.push(oldPath);
    }
    const remaining = externalLinks(parseArticle(newText)).some(item => key(item.url) === key(canonicalUrl));
    if (!remaining) registry.sections.get(key(canonicalUrl))?.delete(oldPath);
  }
  const exclusions = new Map();
  for (const entry of input.excludeExternal ?? []) {
    if (!entry.reason?.trim()) throw new Error('Every external link exclusion needs a reason');
    exclusions.set(key(entry.url), entry.reason);
  }
  const finalText = changes.find(change => change.path === path)?.after ?? after;
  const finalValidation = await validateArticle(root, path, input, finalText);
  if (!finalValidation.ok) throw new Error(`Final article validation failed:\n${finalValidation.errors.join('\n')}`);
  const remaining = new Set(externalLinks(parseArticle(finalText)).map(item => key(item.url)));
  for (const excluded of exclusions.keys()) if (!remaining.has(excluded)) throw new Error(`Excluded URL is not a remaining article link: ${excluded}`);
  // Refresh only this article's membership, retaining other articles' entries.
  for (const paths of registry.sections.values()) paths.delete(path);
  let addedExternalUrls = 0;
  for (const url of remaining) {
    if (exclusions.has(url)) continue;
    if (!registry.sections.has(url)) { registry.sections.set(url, new Set()); addedExternalUrls++; }
    registry.sections.get(url).add(path);
  }
  const externalAfter = renderExternal(registry);
  const data = finalArticle.data;
  const translationAfter = updateTranslations(translationsText, [originalTitle, data.title, data.author, data.translator, `<${canonicalUrl}>`, `<https://cyborgsandmages.com${internalPath}>`], key);
  if (externalAfter !== externalText) changes.push({ path: 'external-links.md', before: externalText, after: externalAfter });
  if (translationAfter !== translationsText) changes.push({ path: 'translated-articles.md', before: translationsText, after: translationAfter });
  return { changes, report: { ok: true, article: path, changedFiles: changes.map(change => change.path), internalLinksReplaced: replacements.length, updatedBacklinks, addedExternalUrls, fullUrl: `https://cyborgsandmages.com${internalPath}`, warnings } };
}

export async function runPublication(root, input, mode) {
  if (mode === 'validate') return validateArticle(root, input.article, input);
  const plan = await planPublication(root, input);
  if (mode === 'apply') commitFiles(root, plan.changes);
  else if (mode === 'check') return { ...plan.report, ok: plan.changes.length === 0, errors: plan.changes.length ? ['Publication/registries still need the listed changes'] : [] };
  else if (mode !== 'preview') throw new Error('Mode must be validate, preview, apply or check');
  return { ...plan.report, mode };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const [mode, file, root = repositoryRoot] = process.argv.slice(2);
    if (!file) throw new Error('Usage: node publish-article.mjs <validate|preview|apply|check> <input.json|-> [repository-root]');
    const input = JSON.parse(readFileSync(file === '-' ? 0 : file, 'utf8').replace(/^\uFEFF/, ''));
    const result = await runPublication(root, input, mode);
    console.log(JSON.stringify(result, null, 2));
    if (!result.ok) process.exitCode = 1;
  } catch (error) { console.error(JSON.stringify({ ok: false, errors: [error.message] }, null, 2)); process.exitCode = 1; }
}
