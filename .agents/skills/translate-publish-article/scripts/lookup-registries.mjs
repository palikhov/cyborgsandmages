import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Keep meaningful query parameters (including their order) intact.
export function normalizeUrl(value) {
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error(`Not an HTTP URL: ${value}`);
  url.hash = '';
  for (const key of [...url.searchParams.keys()]) {
    if (/^utm_/i.test(key) || /^(fbclid|gclid|dclid|msclkid|_ga|_gl|mc_cid|mc_eid)$/i.test(key)) {
      url.searchParams.delete(key);
    }
  }
  return `${url.origin}${url.pathname.replace(/\/+$/, '')}${url.search}`;
}

function variantKey(value) {
  const url = new URL(value);
  return `${url.host.replace(/^www\./, '')}${url.pathname}${url.search}`;
}

export function parseTranslations(text) {
  const rows = [];
  for (const [index, line] of text.split(/\r?\n/).entries()) {
    if (!line.startsWith('|')) continue;
    const cells = line.split(/(?<!\\)\|/).slice(1, -1).map(v => v.trim().replace(/\\\|/g, '|'));
    if (!cells.some(v => /^<?https?:\/\//.test(v))) continue;
    if (cells.length !== 6) throw new Error(`Invalid translated-articles.md row ${index + 1}`);
    const originalUrl = cells[4].replace(/^<|>$/g, '');
    if (!/^https?:\/\//.test(originalUrl)) continue; // Legacy entries without a source URL.
    const fullUrl = cells[5].replace(/^<|>$/g, '');
    const target = new URL(fullUrl);
    if (target.hostname !== 'cyborgsandmages.com' || !target.pathname.startsWith('/posts/')) {
      throw new Error(`Invalid translation target on row ${index + 1}`);
    }
    rows.push({ line: index + 1, originalTitle: cells[0], title: cells[1], originalUrl,
      fullUrl, internalPath: target.pathname.replace(/\/$/, ''), key: normalizeUrl(originalUrl) });
  }
  return rows;
}

export function parseExternalLinks(text) {
  const rows = [];
  let current;
  // The existing registry contains URL sections after an unclosed example fence.
  // Read its actual section/entry convention, independent of fence state.
  for (const [index, line] of text.split(/\r?\n/).entries()) {
    const heading = line.match(/^## <(https?:\/\/[^>]+)>\s*$/);
    if (heading) {
      current = { line: index + 1, url: heading[1], paths: [], key: normalizeUrl(heading[1]) };
      rows.push(current);
    } else if (/^#{1,6}\s/.test(line)) {
      current = undefined;
    } else {
      const entry = line.match(/^- `([^`]+)`\s*$/);
      if (current && entry && !current.paths.includes(entry[1])) current.paths.push(entry[1]);
    }
  }
  return rows;
}

export function lookupRegistries(input, translationsText, externalText) {
  if (!input || typeof input.articleUrl !== 'string' ||
      (input.links !== undefined && !Array.isArray(input.links))) {
    throw new Error('Expected articleUrl and optional links array');
  }
  const translations = parseTranslations(translationsText);
  const external = parseExternalLinks(externalText);
  const parent = new Map();
  const root = key => {
    if (!parent.has(key)) parent.set(key, key);
    if (parent.get(key) !== key) parent.set(key, root(parent.get(key)));
    return parent.get(key);
  };
  for (const group of input.verifiedAliases ?? []) {
    if (!Array.isArray(group.urls) || group.urls.length < 2 ||
        typeof group.evidence !== 'string' || !group.evidence.trim()) {
      throw new Error('Each verifiedAliases group needs at least two urls and evidence');
    }
    const keys = group.urls.map(normalizeUrl);
    for (const key of keys.slice(1)) parent.set(root(key), root(keys[0]));
  }
  const clean = ({ key, ...row }) => row;
  function lookup(url) {
    const key = normalizeUrl(url);
    const equivalent = row => root(row.key) === root(key);
    const aliases = [...parent.keys()].filter(k => root(k) === root(key));
    const variants = new Set([key, ...aliases].map(variantKey));
    const candidate = row => !equivalent(row) && variants.has(variantKey(row.key));
    const matches = translations.filter(equivalent);
    return {
      url, normalizedUrl: key,
      translations: matches.map(clean),
      externalReferences: external.filter(equivalent).map(clean),
      ambiguousTranslation: new Set(matches.map(row => row.internalPath)).size > 1,
      needsVerification: {
        translations: translations.filter(candidate).map(clean),
        externalReferences: external.filter(candidate).map(clean),
      },
    };
  }
  return {
    article: lookup(input.articleUrl),
    links: [...new Set(input.links ?? [])].map(lookup),
  };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const inputFile = process.argv[2];
    if (!inputFile) throw new Error('Usage: node lookup-registries.mjs <input.json|-> [repository-root]');
    const repository = process.argv[3] ? resolve(process.argv[3]) : fileURLToPath(new URL('../../../../', import.meta.url));
    const input = JSON.parse(readFileSync(inputFile === '-' ? 0 : inputFile, 'utf8').replace(/^\uFEFF/, ''));
    const result = lookupRegistries(input,
      readFileSync(resolve(repository, 'translated-articles.md'), 'utf8'),
      readFileSync(resolve(repository, 'external-links.md'), 'utf8'));
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  }
}
