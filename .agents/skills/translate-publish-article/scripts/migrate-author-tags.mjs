import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { authorTagRegistry, commitFiles, parseArticle, repositoryRoot } from './publication-lib.mjs';

function mdxFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? mdxFiles(path) : entry.isFile() && entry.name.endsWith('.mdx') ? [path] : [];
  });
}

function identity(value) {
  return value.toLocaleLowerCase('en').replace(/[^\p{L}\p{N}]+/gu, '');
}

function distance(a, b) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    let diagonal = previous[0];
    previous[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const above = previous[j];
      previous[j] = Math.min(previous[j] + 1, previous[j - 1] + 1, diagonal + (a[i - 1] === b[j - 1] ? 0 : 1));
      diagonal = above;
    }
  }
  return previous[b.length];
}

function replaceTags(text, tags) {
  const frontmatter = text.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!frontmatter) throw new Error('Missing YAML frontmatter');
  const newline = text.includes('\r\n') ? '\r\n' : '\n';
  const replacement = `tags:${newline}${tags.map(tag => `  - ${JSON.stringify(tag)}`).join(newline)}`;
  const updated = frontmatter[1].replace(/^tags:[^\r\n]*(?:\r?\n(?=[ \t]+-)[ \t]+-[^\r\n]*)*/m, replacement);
  if (updated === frontmatter[1] && !/^tags:/m.test(frontmatter[1])) throw new Error('Missing tags field');
  return text.slice(0, frontmatter.index) + frontmatter[0].replace(frontmatter[1], () => updated) + text.slice(frontmatter.index + frontmatter[0].length);
}

function renderTagSystem(text, authorTags, mappings) {
  const tagLines = [...authorTags].sort((a, b) => a.localeCompare(b, 'ru')).map(tag => `- \`${tag}\``).join('\n');
  const rows = [...mappings].sort(([a], [b]) => a.localeCompare(b, 'ru')).map(([author, tag]) => `| \`${author}\` | \`${tag}\` |`).join('\n');
  let updated = text.replace(
    /(### Авторские теги переводов\r?\n\r?\n)[\s\S]*?(?=\r?\n### Соответствие авторов переводов тегам)/,
    `$1${tagLines}\n`
  );
  updated = updated.replace(
    /(### Соответствие авторов переводов тегам\r?\n\r?\n\| Значение `author` \| Авторский тег \|\r?\n\| --- \| --- \|\r?\n)[\s\S]*?(?=\r?\n### Источники)/,
    `$1${rows}\n`
  );
  return updated;
}

export function planAuthorTagMigration(root = repositoryRoot) {
  const tagPath = join(root, 'tag-system.md');
  const tagText = readFileSync(tagPath, 'utf8');
  const registry = authorTagRegistry(tagText);
  if (registry.errors.length) throw new Error(registry.errors.join('\n'));
  const files = mdxFiles(join(root, 'src/content/posts'));
  const records = [];
  for (const absolute of files) {
    const path = relative(root, absolute).replaceAll('\\', '/');
    const text = readFileSync(absolute, 'utf8');
    try { records.push({ path, text, data: parseArticle(text).data }); }
    catch (error) { records.push({ path, text, error: error.message }); }
  }

  const translationAuthors = new Map();
  for (const record of records.filter(record => record.path.startsWith('src/content/posts/translations/') && !record.error)) {
    const author = typeof record.data.author === 'string' ? record.data.author.trim() : '';
    if (!translationAuthors.has(author)) translationAuthors.set(author, []);
    translationAuthors.get(author).push(record.path);
  }

  const problems = [];
  const blocked = new Map();
  const block = (author, reason) => {
    if (!blocked.has(author)) blocked.set(author, new Set());
    blocked.get(author).add(reason);
  };
  for (const [author] of translationAuthors) {
    if (!author) block(author, 'Не заполнено поле author');
    else if (/^unknown$/iu.test(author)) block(author, 'Автор указан как Unknown');
    else if (/[©;]/u.test(author) || /,\s*(?:©|\d{4})/u.test(author)) block(author, 'Значение похоже на повреждённую атрибуцию');
  }
  const unmapped = [...translationAuthors.keys()].filter(author => author && !registry.byAuthor.has(author));
  for (let i = 0; i < unmapped.length; i++) for (let j = i + 1; j < unmapped.length; j++) {
    const left = identity(unmapped[i]), right = identity(unmapped[j]);
    if (Math.min(left.length, right.length) >= 6 && (left === right || distance(left, right) === 1)) {
      block(unmapped[i], `Возможный вариант того же имени: ${unmapped[j]}`);
      block(unmapped[j], `Возможный вариант того же имени: ${unmapped[i]}`);
    }
  }
  const numberedCanonical = new Set([...tagText.matchAll(/^\d+\. `([^`]+)`/gm)].map(match => match[1]));
  for (const author of unmapped) if (numberedCanonical.has(author)) block(author, 'Имя совпадает с существующим неавторским каноническим тегом');

  const mappings = new Map(registry.byAuthor);
  const authorTags = new Set(registry.authorTags);
  for (const author of unmapped) if (!blocked.has(author)) {
    mappings.set(author, author);
    authorTags.add(author);
  }

  const changes = [];
  const nextTagText = renderTagSystem(tagText, authorTags, mappings);
  if (nextTagText !== tagText) changes.push({ path: 'tag-system.md', before: tagText, after: nextTagText });

  for (const record of records) {
    if (record.error) { problems.push({ author: '', reason: record.error, files: [record.path] }); continue; }
    if (!Array.isArray(record.data.tags)) { problems.push({ author: record.data.author ?? '', reason: 'Поле tags не является массивом', files: [record.path] }); continue; }
    const isTranslation = record.path.startsWith('src/content/posts/translations/');
    const author = typeof record.data.author === 'string' ? record.data.author.trim() : '';
    if (isTranslation && blocked.has(author)) continue;
    const expected = isTranslation ? mappings.get(author) : null;
    const retained = record.data.tags.filter(tag => !authorTags.has(tag));
    let tags = [...new Set(retained)];
    if (isTranslation) {
      if (!expected) {
        problems.push({ author, reason: 'Нет однозначного авторского тега', files: [record.path] });
        continue;
      }
      tags = ['Перевод', ...tags.filter(tag => tag !== 'Перевод')];
      tags.splice(1, 0, expected);
    }
    if (JSON.stringify(tags) === JSON.stringify(record.data.tags)) continue;
    changes.push({ path: record.path, before: record.text, after: replaceTags(record.text, tags) });
  }

  for (const [author, reasons] of blocked) problems.push({ author, reason: [...reasons].join('; '), files: translationAuthors.get(author) });
  const grouped = new Map();
  for (const problem of problems) {
    const key = `${problem.author}\u0000${problem.reason}`;
    if (!grouped.has(key)) grouped.set(key, { author: problem.author, reason: problem.reason, files: [] });
    grouped.get(key).files.push(...problem.files);
  }
  const groupedProblems = [...grouped.values()].map(problem => ({ ...problem, files: [...new Set(problem.files)].sort() }));
  groupedProblems.sort((a, b) => b.files.length - a.files.length || a.author.localeCompare(b.author, 'ru'));
  return { changes, problems: groupedProblems, addedAuthors: [...mappings.keys()].filter(author => !registry.byAuthor.has(author)).length };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const [mode = 'preview', root = repositoryRoot] = process.argv.slice(2);
  if (!['preview', 'apply', 'check'].includes(mode)) throw new Error('Mode must be preview, apply or check');
  const plan = planAuthorTagMigration(root);
  if (mode === 'apply') commitFiles(root, plan.changes);
  const result = {
    ok: plan.changes.length === 0 && plan.problems.length === 0,
    mode,
    changedFiles: plan.changes.map(change => change.path),
    addedAuthors: plan.addedAuthors,
    problems: plan.problems
  };
  console.log(JSON.stringify(result, null, 2));
  if (mode === 'check' && !result.ok) process.exitCode = 1;
}
