import { readFileSync, existsSync, realpathSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, relative, dirname, isAbsolute, extname } from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { normalizeUrl } from './lookup-registries.mjs';

export const repositoryRoot = fileURLToPath(new URL('../../../../', import.meta.url));
const require = createRequire(import.meta.url);
const mdxRequire = createRequire(require.resolve('@astrojs/mdx'));
const load = name => import(pathToFileURL(mdxRequire.resolve(name)).href);
const { createProcessor, compile } = await load('@mdx-js/mdx');
const { default: gfm } = await load('remark-gfm');
const { default: Slugger } = await load('github-slugger');
const { parse: yaml } = await load('yaml');
export const sharp = require('sharp');
const ts = require('typescript');
const { z } = require('zod');

export function safePath(root, name) {
  if (typeof name !== 'string' || isAbsolute(name) || name.includes('\\') || name.split('/').includes('..')) throw new Error(`Unsafe path: ${name}`);
  const base = realpathSync(root), target = resolve(base, name);
  let ancestor = target;
  while (!existsSync(ancestor)) ancestor = dirname(ancestor);
  const actual = realpathSync(ancestor);
  for (const path of [target, actual]) {
    const rel = relative(base, path);
    if (rel === '..' || rel.startsWith(`..${process.platform === 'win32' ? '\\' : '/'}`) || isAbsolute(rel)) throw new Error(`Path escapes repository: ${name}`);
  }
  return target;
}

export function articlePath(root, path) {
  if (!/^src\/content\/posts\/(articles|translations|cored20rpg|core-d20|sage-advice|srd|forgotten-realms|marwang)\/[a-z0-9]+(?:-[a-z0-9]+)*\.mdx$/.test(path)) throw new Error(`Invalid article path: ${path}`);
  return safePath(root, path);
}

export function parseArticle(text) {
  const match = text.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) throw new Error('Missing YAML frontmatter');
  const data = yaml(match[1], { uniqueKeys: true });
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Frontmatter must be a mapping');
  const body = text.slice(match[0].length);
  const tree = createProcessor({ remarkPlugins: [gfm] }).parse(body);
  const nodes = [];
  function visit(node) { nodes.push(node); for (const child of node.children ?? []) visit(child); }
  visit(tree);
  const definitions = new Map(nodes.filter(n => n.type === 'definition').map(n => [n.identifier, n]));
  const links = [], images = [];
  for (const node of nodes) {
    const definition = node.type.endsWith('Reference') ? definitions.get(node.identifier) : node;
    if (['linkReference', 'imageReference'].includes(node.type) && !definition) throw new Error(`Unresolved reference: ${node.identifier}`);
    if (['link', 'linkReference', 'image', 'imageReference'].includes(node.type)) {
      const item = { node, url: definition.url, title: definition.title };
      (node.type.startsWith('image') ? images : links).push(item);
    }
  }
  const slugger = new Slugger();
  const plain = node => node.value ?? node.alt ?? (node.children ?? []).map(plain).join('');
  const anchors = new Set(nodes.filter(n => n.type === 'heading').map(n => slugger.slug(plain(n))));
  const first = tree.children[0];
  const original = first?.type === 'paragraph' && first.children.length === 1 && first.children[0].type === 'link' && plain(first.children[0]) === 'Оригинал' ? first.children[0] : null;
  return { text, prefix: match[0], data, body, tree, nodes, links, images, anchors, original };
}

export function rewriteLinks(article, replacements) {
  let body = article.body;
  for (const { item, url } of replacements.sort((a, b) => b.item.node.position.start.offset - a.item.node.position.start.offset)) {
    const node = item.node;
    const children = node.children ?? [];
    const label = children.length ? article.body.slice(children[0].position.start.offset, children.at(-1).position.end.offset) : '';
    const title = item.title == null ? '' : ` "${item.title.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
    body = body.slice(0, node.position.start.offset) + `[${label}](<${url}>${title})` + body.slice(node.position.end.offset);
  }
  return article.prefix + body;
}

export function equivalentUrls(groups = []) {
  const parent = new Map();
  function key(url) {
    const value = normalizeUrl(url);
    function root(k) { return parent.has(k) ? root(parent.get(k)) : k; }
    return root(value);
  }
  for (const group of groups) {
    if (!Array.isArray(group.urls) || group.urls.length < 2 || !group.evidence?.trim()) throw new Error('Verified aliases require urls and evidence');
    const target = key(group.urls.at(-1));
    for (const url of group.urls) { const from = key(url); if (from !== target) parent.set(from, target); }
  }
  return key;
}

export async function imageInfo(bytes) {
  const metadata = await sharp(bytes, { animated: true }).metadata();
  const formats = { jpeg: ['jpg', 'image/jpeg'], png: ['png', 'image/png'], gif: ['gif', 'image/gif'], webp: ['webp', 'image/webp'], avif: ['avif', 'image/avif'], svg: ['svg', 'image/svg+xml'], tiff: ['tif', 'image/tiff'] };
  const format = metadata.format === 'heif' && metadata.compression === 'av1' ? 'avif' : metadata.format;
  if (!formats[format] || !metadata.width || !metadata.height) throw new Error(`Unsupported or invalid image: ${format}`);
  return { ext: formats[format][0], mime: formats[format][1], width: metadata.width, height: metadata.height };
}

async function checkImage(root, path) {
  const info = await imageInfo(readFileSync(safePath(root, path)));
  const ext = extname(path).slice(1).toLowerCase().replace(/^jpeg$/, 'jpg').replace(/^tiff$/, 'tif');
  if (ext !== info.ext) throw new Error(`Image extension mismatch: ${path} (${info.mime})`);
}

function postSchema(root) {
  const source = readFileSync(safePath(root, 'src/content/config.ts'), 'utf8');
  const ast = ts.createSourceFile('config.ts', source, ts.ScriptTarget.Latest, true);
  let expression;
  for (const statement of ast.statements) {
    if (ts.isVariableStatement(statement)) for (const declaration of statement.declarationList.declarations) {
      if (declaration.name.getText(ast) === 'posts') expression = declaration.initializer?.getText(ast);
    }
  }
  if (!expression) throw new Error('Cannot locate posts schema in config.ts');
  const code = ts.transpile(`const collection = ${expression};`, { target: ts.ScriptTarget.ES2022 });
  // Evaluate only the trusted local posts definition, without starting Astro or a build.
  const collection = new Function('defineCollection', 'z', `${code}; return collection;`)(value => value, z);
  const schema = typeof collection.schema === 'function' ? collection.schema({ image: () => z.string() }) : collection.schema;
  return schema.strict();
}

export async function validateArticle(root, path, options = {}, text = readFileSync(articlePath(root, path), 'utf8')) {
  articlePath(root, path);
  const article = parseArticle(text), errors = [], warnings = [];
  const attempt = async (label, action) => { try { await action(); } catch (error) { errors.push(`${label}: ${error.message}`); } };
  await attempt('Frontmatter schema', () => postSchema(root).parse(article.data));
  const data = article.data;
  for (const field of ['title', 'author', 'translator']) if (typeof data[field] !== 'string' || !data[field].trim()) errors.push(`Missing ${field}`);
  if (typeof data.description !== 'string' || !data.description.startsWith('ПЕРЕВОД - ') || data.description.includes('#')) errors.push('Invalid translation description');
  if ('draft' in data) errors.push('Do not include draft');
  if (typeof data.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(data.date) || !Number.isFinite(Date.parse(data.date)) || new Date(data.date).toISOString().slice(0, 10) !== data.date) errors.push('Invalid publication date');
  if (options.date && data.date !== options.date) errors.push(`Expected publication date ${options.date}`);
  if (options.category && path.split('/')[3] !== options.category) errors.push('Wrong category');
  const tagText = readFileSync(safePath(root, 'tag-system.md'), 'utf8');
  const canonical = new Set([...tagText.matchAll(/^\d+\. `([^`]+)`/gm)].map(m => m[1]));
  const systemsSection = tagText.split('### Игровые системы')[1]?.split('###')[0] ?? '';
  const systems = new Set([...systemsSection.matchAll(/^\d+\. `([^`]+)`/gm)].map(m => m[1]));
  if (!Array.isArray(data.tags) || data.tags[0] !== 'Перевод' || data.tags.length < 3 || data.tags.length > 6 || new Set(data.tags).size !== data.tags.length || data.tags.some(t => !canonical.has(t)) || data.tags.filter(t => systems.has(t)).length > 1) errors.push('Invalid canonical tags');
  if (!article.original || (options.canonicalUrl && article.original.url !== options.canonicalUrl)) errors.push('Missing or incorrect original link immediately after frontmatter');
  if (article.original) await attempt('Canonical original URL', () => { if (normalizeUrl(article.original.url) !== article.original.url) throw new Error('Remove tracking, fragment and trailing slash'); });
  await attempt('MDX syntax', () => compile(article.body, { remarkPlugins: [gfm] }));
  if (article.nodes.some(n => n.type === 'heading' && n.depth === 1)) errors.push('Body headings must start at level 2');
  if (article.nodes.some(n => /^mdx/.test(n.type))) errors.push('JSX, imports and MDX expressions require manual handling; use plain Markdown for automatic processing');
  for (const item of article.images) await attempt(`Image ${item.url}`, async () => {
    if (!item.url.startsWith('/images/')) throw new Error('Expected local /images/ URL');
    await checkImage(root, `public${decodeURIComponent(item.url)}`);
  });
  if (data.cover) await attempt('Cover', async () => {
    if (!data.cover.startsWith('~assets/covers/')) throw new Error('Expected ~assets/covers/ path');
    await checkImage(root, `src/assets/covers/${data.cover.slice('~assets/covers/'.length)}`);
  });
  for (const item of article.links) {
    if (/^https?:\/\//.test(item.url) && /\.(?:png|jpe?g|gif|webp|avif|svg|tiff?)$/i.test(new URL(item.url).pathname)) errors.push(`External image link must be localized: ${item.url}`);
    if (!item.url.startsWith('/posts/') && !item.url.startsWith('#')) continue;
    await attempt(`Internal link ${item.url}`, () => {
      const url = new URL(item.url, `https://cyborgsandmages.com/${path.slice('src/content/'.length, -4)}`);
      const targetPath = item.url.startsWith('#') ? path : `src/content${decodeURIComponent(url.pathname)}${url.pathname.endsWith('.mdx') ? '' : '.mdx'}`;
      const target = targetPath === path ? article : parseArticle(readFileSync(safePath(root, targetPath), 'utf8'));
      if (url.hash && !target.anchors.has(decodeURIComponent(url.hash.slice(1)))) throw new Error('Heading anchor does not exist');
    });
  }
  return { ok: errors.length === 0, errors, warnings, images: article.images.length };
}

export function commitFiles(root, changes) {
  // Check the complete plan before writing; preserve edits made after planning.
  for (const change of changes) {
    const path = safePath(root, change.path);
    const current = existsSync(path) ? readFileSync(path) : null;
    if (change.before === null ? current !== null : current === null || !current.equals(Buffer.from(change.before))) throw new Error(`File changed since planning: ${change.path}`);
  }
  const written = [];
  try {
    for (const change of changes) {
      const path = safePath(root, change.path);
      mkdirSync(dirname(path), { recursive: true });
      writeFileSync(path, change.after, change.before === null ? { flag: 'wx' } : undefined);
      written.push(change.path);
    }
  } catch (error) {
    throw new Error(`${error.message}; files already written: ${written.join(', ')}. Re-run preview to reconcile.`);
  }
  return written;
}
