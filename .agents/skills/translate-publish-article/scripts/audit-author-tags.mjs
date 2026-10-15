import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { authorTagRegistry, parseArticle, repositoryRoot } from './publication-lib.mjs';

function mdxFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? mdxFiles(path) : entry.isFile() && entry.name.endsWith('.mdx') ? [path] : [];
  });
}

export function auditAuthorTags(root = repositoryRoot) {
  const tagText = readFileSync(join(root, 'tag-system.md'), 'utf8');
  const registry = authorTagRegistry(tagText);
  const issues = registry.errors.map(message => ({ file: 'tag-system.md', message }));
  const postsRoot = join(root, 'src/content/posts');
  const files = mdxFiles(postsRoot);
  let translations = 0;

  for (const absolute of files) {
    const file = relative(root, absolute).replaceAll('\\', '/');
    let data;
    try { data = parseArticle(readFileSync(absolute, 'utf8')).data; }
    catch (error) { issues.push({ file, message: error.message }); continue; }
    const tags = Array.isArray(data.tags) ? data.tags : [];
    const usedAuthorTags = tags.filter(tag => registry.authorTags.has(tag));
    const isTranslation = file.startsWith('src/content/posts/translations/');
    if (!isTranslation) {
      if (usedAuthorTags.length) issues.push({ file, message: `Author tags are allowed only in translations: ${usedAuthorTags.join(', ')}` });
      continue;
    }
    translations++;
    const author = typeof data.author === 'string' ? data.author.trim() : '';
    const expected = registry.byAuthor.get(author);
    if (!author) issues.push({ file, message: 'Missing author' });
    else if (!expected) issues.push({ file, message: `Author is missing from the author-tag registry: ${author}` });
    if (usedAuthorTags.length !== 1) issues.push({ file, message: `Expected exactly one author tag, found ${usedAuthorTags.length}${usedAuthorTags.length ? `: ${usedAuthorTags.join(', ')}` : ''}` });
    else if (expected && usedAuthorTags[0] !== expected) issues.push({ file, message: `Expected author tag ${expected} for ${author}, found ${usedAuthorTags[0]}` });
  }

  return { ok: issues.length === 0, files: files.length, translations, issues };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const args = process.argv.slice(2);
  const root = args.find(argument => !argument.startsWith('--')) ?? repositoryRoot;
  const result = auditAuthorTags(root);
  if (args.includes('--json')) console.log(JSON.stringify(result, null, 2));
  else {
    const translationFiles = new Set(result.issues.filter(issue => issue.file.startsWith('src/content/posts/translations/')).map(issue => issue.file));
    const otherFiles = new Set(result.issues.filter(issue => issue.file.startsWith('src/content/posts/') && !issue.file.startsWith('src/content/posts/translations/')).map(issue => issue.file));
    console.log(`Checked ${result.translations} translations (${result.files} posts total).`);
    console.log(`${translationFiles.size} translations need attention; ${result.translations - translationFiles.size} pass.`);
    console.log(`${otherFiles.size} non-translation posts use author tags.`);
    console.log(`${result.issues.length} issues total.`);
    if (!args.includes('--summary')) for (const issue of result.issues) console.log(`${issue.file}: ${issue.message}`);
  }
  if (!result.ok) process.exitCode = 1;
}
