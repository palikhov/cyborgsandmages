// Read-only content audit. Run: node tools/audit-wordpress-archive.mjs
// Uses the repository's installed pnpm dependencies; does not change publications.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const auditArguments = process.argv.slice(2).join(" ");
const reportDirectory = process.argv[2] || 'reports/wordpress-archive';
const out = path.resolve(root, reportDirectory);
async function dependency(name, entry) {
  const dir = fs.readdirSync('node_modules/.pnpm').filter(p => p.startsWith(name + '@')).sort().at(-1);
  if (!dir) throw new Error(`Missing installed dependency: ${name}`);
  return import(pathToFileURL(path.resolve('node_modules/.pnpm', dir, 'node_modules', name, entry)));
}
const { parseFragment } = await dependency('parse5', 'dist/index.js');
const { load: yaml } = (await dependency('js-yaml', 'index.js')).default;
const { unified } = await dependency('unified', 'index.js');
const { default: remarkParse } = await dependency('remark-parse', 'index.js');
const parser = unified().use(remarkParse);
const skippedTags = new Set(['script', 'style', 'noscript']);
function htmlText(html) {
  function visit(n) {
    if (skippedTags.has(n.tagName)) return '';
    if (n.nodeName === '#text') return n.value;
    return (n.childNodes || []).map(visit).join(' ') + ' ';
  }
  return visit(parseFragment(html || ''));
}
function archiveContent(html) {
  const tree = parseFragment(html || '');
  const links = [], images = [], originals = [];
  let excerptNode;
  function walk(n, source = false) {
    const attrs = Object.fromEntries((n.attrs || []).map(a => [a.name, a.value]));
    const classes = (attrs.class || '').split(/\s+/);
    if (classes.includes('reblogged-content')) excerptNode = n;
    source ||= classes.includes('reblog-source');
    if (n.tagName === 'a' && attrs.href) { links.push(attrs.href); if (source) originals.push(attrs.href); }
    if (n.tagName === 'img' && attrs.src) images.push(attrs.src);
    for (const child of n.childNodes || []) walk(child, source);
  }
  walk(tree);
  function text(n) {
    if (skippedTags.has(n.tagName)) return '';
    if ((n.attrs || []).some(a => a.name === 'class' && a.value.split(/\s+/).includes('wp-crosspost-linkback'))) return '';
    if (n.nodeName === '#text') return n.value;
    return (n.childNodes || []).map(text).join(' ') + ' ';
  }
  const bodyText = text(excerptNode || tree);
  return { bodyText, contentKind: excerptNode ? 'reblog_excerpt' : cleanText(bodyText) ? 'body' : 'empty_or_media', originalUrls: [...new Set(originals)], links: [...new Set(links)], images: [...new Set(images)] };
}
function markdownText(body) {
  function visit(n) {
    if (n.type === 'html') return htmlText(n.value);
    if (n.type === 'image' || n.type === 'definition') return '';
    if (n.value !== undefined) return n.value;
    const result = (n.children || []).map(visit).join(' ');
    if (n.type === 'paragraph' && /был опубликован\s*[—–-]?\s*Киборги и Чародеи/i.test(result)) return '';
    return result;
  }
  return visit(parser.parse(body.replace(/^import .*?;?\s*$/gm, '')));
}
const norm = s => s.normalize('NFKC').toLowerCase().replace(/ё/g, 'е').replace(/https?:\/\/\S+/g, ' ').replace(/[^\p{L}\p{N}]+/gu, ' ').trim().replace(/\s+/g, ' ');
function cleanText(s) {
  return norm(s)
    .replace(/присоединяйтесь к нашему сообществу[\s\S]{0,1200}?сразу пишите в комментариях/g, ' ')
    .replace(/чтобы мы могли продолжать наше дело[\s\S]{0,1000}?сразу пишите в комментариях/g, ' ')
    .trim().replace(/\s+/g, ' ');
}
const titleNorm = s => norm(s.replace(/\[(перевод|homebrew|статья|новости)\]/gi, ''));
function shingles(words, size = 5) {
  const result = new Set();
  for (let i = 0; i <= words.length - size; i++) result.add(words.slice(i, i + size).join(' '));
  return result;
}
function overlap(a, b) { if (a.size > b.size) [a, b] = [b, a]; let n = 0; for (const s of a) if (b.has(s)) n++; return n; }
function dice(a, b) { return a.size + b.size ? 2 * overlap(a, b) / (a.size + b.size) : 0; }
function canonical(url) { try { const u = new URL(url); return decodeURIComponent(u.hostname + u.pathname).toLowerCase().replace(/\/+$/, ''); } catch { return ''; } }
function record(text, title) {
  const normalized = cleanText(text), words = normalized.split(' ').filter(Boolean), nt = titleNorm(title);
  return { normalized, words: words.length, shingles: shingles(words), titleNormalized: nt, titleGrams: shingles([...nt], 3), hash: createHash('sha256').update(normalized).digest('hex') };
}
const manifest = JSON.parse(fs.readFileSync(path.join(out, 'raw/manifest.json'), 'utf8').replace(/^\uFEFF/, ''));
const archived = [];
for (const collection of manifest.collections) {
  const ids = new Set();
  for (let page = 1; page <= collection.pages; page++) {
    const batch = JSON.parse(fs.readFileSync(path.join(out, `raw/${collection.type}-${page}.json`), 'utf8').replace(/^\uFEFF/, ''));
    if (batch.found !== collection.found) throw new Error('Archive count changed during download');
    for (const p of batch.posts) {
      if (ids.has(p.ID)) throw new Error(`Duplicate API ID ${p.ID}`);
      ids.add(p.ID);
      const title = htmlText(p.title).trim();
      const { bodyText, ...contentInfo } = archiveContent(p.content);
      archived.push({ id: p.ID, type: collection.type, title, url: p.URL, date: p.date, modified: p.modified, slug: decodeURIComponent(p.slug), ...contentInfo, ...record(bodyText, title) });
    }
  }
  if (ids.size !== collection.found) throw new Error('Incomplete archive download');
}
const files = execFileSync('rg', ['--files', '--hidden', '-g', '*.md', '-g', '*.mdx', '-g', '!node_modules/**', '-g', '!.git/**', '-g', '!.agents/**', '-g', '!.codex/**', '-g', '!reports/**', '-g', '!dist/**', '-g', '!.astro/**', '-g', '!.pnpm-store/**'], { encoding: 'utf8' }).trim().split(/\r?\n/).map(f => f.replaceAll('\\', '/'));
const locals = [], warnings = [];
for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  let meta = {};
  if (fm) { try { meta = yaml(fm[1]) || {}; } catch (e) { warnings.push({ file, error: e.message }); } }
  const title = String(meta.title || raw.match(/^title:\s*(.+)$/m)?.[1] || path.basename(file));
  const body = fm ? raw.slice(fm[0].length) : raw;
  const active = /^src\/content\/(posts|singles)\//.test(file) && meta.draft !== true;
  locals.push({ file, title, active, draft: meta.draft === true, source: canonical(meta.sourceUrl || meta.originalUrl || ''), raw, ...record(markdownText(body), title) });
}
const labels = { exists: 'уже есть', probable: 'вероятный дубликат', partial: 'перенесена частично', missing: 'кандидат на перенос' };
function indexRecords(records) {
  const index = new Map();
  records.forEach((r, i) => { for (const s of r.shingles) { if (!index.has(s)) index.set(s, []); index.get(s).push(i); } });
  return index;
}
function commonCounts(r, index) {
  const counts = new Map();
  for (const s of r.shingles) for (const i of index.get(s) || []) counts.set(i, (counts.get(i) || 0) + 1);
  return counts;
}
function compare(a, b, common) {
  const archiveCoverage = a.shingles.size ? common / a.shingles.size : 0;
  const localCoverage = b.shingles.size ? common / b.shingles.size : 0;
  const titleSimilarity = dice(a.titleGrams, b.titleGrams);
  const exactTitle = a.titleNormalized === b.titleNormalized;
  const exactText = a.normalized.length > 0 && a.hash === b.hash;
  const sourceMatch = b.source && [a.url, ...a.originalUrls].some(u => b.source === canonical(u));
  const originalSlugs = a.originalUrls.map(u => { try { return decodeURIComponent(new URL(u).pathname.split('/').filter(Boolean).at(-1) || ''); } catch { return ''; } });
  const slugMatch = [a.slug, ...originalSlugs].some(s => titleNorm(s) === titleNorm(path.basename(b.file, path.extname(b.file))));
  // Links in article bodies are deliberately not treated as identity evidence.
  const identity = exactTitle || sourceMatch || slugMatch;
  let status = 'missing', reason = 'Нет достаточного совпадения текста или идентификаторов';
  if (b.active && ((exactText && a.words >= 30) || (a.words >= 80 && archiveCoverage >= .93 && common >= 40))) {
    status = 'exists'; reason = exactText ? 'Совпадает нормализованный текст' : 'Почти весь текст архива присутствует в публикации';
  } else if (b.active && common >= 40 && archiveCoverage >= .2 && archiveCoverage < .85 && localCoverage >= .75 && b.words < a.words * .9) {
    status = 'partial'; reason = 'Текст локального файла в основном входит в архивный, но значительная часть архива отсутствует; проверить вручную';
  } else if (identity || titleSimilarity >= .8 || (common >= 25 && Math.max(archiveCoverage, localCoverage) >= .35)) {
    status = 'probable'; reason = !b.active ? 'Совпадение вне действующих публикаций или в черновике' : identity ? 'Совпадает название, slug или адрес источника; полнота текста не подтверждена' : 'Похожий текст или заголовок; требуется ручная проверка';
  }
  if (a.contentKind === 'reblog_excerpt' && ['exists', 'partial'].includes(status)) {
    status = 'probable'; reason = 'Совпадает выдержка репоста; полный оригинал в этом архиве отсутствует, полнота переноса не подтверждена';
  }
  if (status === 'probable' && b.words < 30) reason = 'Совпадает заголовок или адрес, но локальный файл почти не содержит текста статьи; проверить заглушку или вложение';
  const rank = { exists: 4, partial: 3, probable: 2, missing: 0 }[status];
  return { file: b.file, title: b.title, active: b.active, status, reason, archiveCoverage, localCoverage, titleSimilarity, commonShingles: common, exactTitle, exactText, sourceMatch: Boolean(sourceMatch), slugMatch, localWords: b.words, score: rank * 10 + archiveCoverage * 2 + localCoverage + titleSimilarity + Number(identity) };
}
let localShingleIndex = indexRecords(locals);
const results = archived.map(a => {
  const counts = commonCounts(a, localShingleIndex);
  const matches = locals.map((b, i) => compare(a, b, counts.get(i) || 0)).sort((x, y) => y.score - x.score);
  const best = matches[0];
  return { id: a.id, type: a.type, title: a.title, url: a.url, date: a.date, modified: a.modified, contentKind: a.contentKind, originalUrls: a.originalUrls, links: a.links, images: a.images, words: a.words, textHash: a.hash, status: best.status, statusLabel: labels[best.status], reason: best.reason, matches: matches.slice(0, 3), archiveDuplicates: [] };
});
localShingleIndex = null;
console.log(`Compared ${archived.length} archive records with ${locals.length} local files`);
let archiveShingleIndex = indexRecords(archived);
for (let i = 0; i < archived.length; i++) {
 const counts = commonCounts(archived[i], archiveShingleIndex);
 for (let j = i + 1; j < archived.length; j++) {
  const a = archived[i], b = archived[j];
  const sameText = a.words >= 30 && a.hash === b.hash;
  const common = counts.get(j) || 0;
  const similarText = common >= 40 && common / Math.max(a.shingles.size, b.shingles.size) >= .9;
  if (sameText || similarText || a.titleNormalized === b.titleNormalized) {
    const reason = sameText ? 'одинаковый текст' : similarText ? 'почти одинаковый текст' : 'одинаковый заголовок';
    results[i].archiveDuplicates.push({ id: b.id, reason }); results[j].archiveDuplicates.push({ id: a.id, reason });
  }
}
}
archiveShingleIndex = null;
let crossSummary;
if (process.argv[3]) {
  const otherDirectory = path.resolve(root, process.argv[3]);
  const otherManifest = JSON.parse(fs.readFileSync(path.join(otherDirectory, 'raw/manifest.json'), 'utf8').replace(/^\uFEFF/, ''));
  const otherAudit = JSON.parse(fs.readFileSync(path.join(otherDirectory, 'audit.json'), 'utf8'));
  const others = [];
  for (const c of otherManifest.collections) for (let p = 1; p <= c.pages; p++) {
    const batch = JSON.parse(fs.readFileSync(path.join(otherDirectory, `raw/${c.type}-${p}.json`), 'utf8').replace(/^\uFEFF/, ''));
    for (const row of batch.posts) {
      const title = htmlText(row.title).trim(), content = archiveContent(row.content);
      others.push({ id: row.ID, type: c.type, title, url: row.URL, originalUrls: content.originalUrls, contentKind: content.contentKind, ...record(content.bodyText, title) });
    }
  }
  if (others.length !== otherManifest.collections.reduce((n, c) => n + c.found, 0)) throw new Error('Incomplete reference archive');
  const otherIndex = indexRecords(others);
  for (let i = 0; i < archived.length; i++) {
    const a = archived[i], counts = commonCounts(a, otherIndex);
    results[i].crossArchiveMatches = [];
    for (let j = 0; j < others.length; j++) {
      const b = others[j], common = counts.get(j) || 0;
      const archiveCoverage = a.shingles.size ? common / a.shingles.size : 0;
      const otherCoverage = b.shingles.size ? common / b.shingles.size : 0;
      const linkedOriginal = a.originalUrls.some(u => canonical(u) === canonical(b.url)) || b.originalUrls.some(u => canonical(u) === canonical(a.url));
      const sameTitle = a.titleNormalized === b.titleNormalized;
      const sameText = a.words >= 30 && a.hash === b.hash;
      if (linkedOriginal || sameTitle || sameText || (common >= 40 && Math.max(archiveCoverage, otherCoverage) >= .8)) {
        results[i].crossArchiveMatches.push({ site: otherManifest.site, id: b.id, title: b.title, url: b.url, contentKind: b.contentKind, archiveCoverage, otherCoverage, commonShingles: common, linkedOriginal, sameTitle, sameText, reason: linkedOriginal ? 'Прямая ссылка репоста на оригинал' : sameText ? 'Одинаковый нормализованный текст' : sameTitle ? 'Одинаковый нормализованный заголовок' : 'Существенное совпадение текста или выдержки', otherLocalStatus: otherAudit.results.find(r => r.id === b.id)?.statusLabel });
      }
    }
    results[i].crossArchiveMatches.sort((a, b) => Number(b.linkedOriginal) - Number(a.linkedOriginal) || Number(b.sameText) - Number(a.sameText) || b.archiveCoverage + b.otherCoverage - a.archiveCoverage - a.otherCoverage);
  }
  crossSummary = { site: otherManifest.site, snapshotDate: otherManifest.fetchedAt, matchingRecords: results.filter(r => r.crossArchiveMatches.length).length, pairs: results.reduce((n, r) => n + r.crossArchiveMatches.length, 0), missingWithCrossMatches: results.filter(r => r.status === 'missing' && r.crossArchiveMatches.length).length };
  fs.writeFileSync(path.join(out, 'cross-archive.json'), JSON.stringify({ summary: crossSummary, results: results.filter(r => r.crossArchiveMatches.length).map(r => ({ id: r.id, title: r.title, url: r.url, status: r.statusLabel, matches: r.crossArchiveMatches })) }, null, 2));
}
const counts = Object.fromEntries(Object.keys(labels).map(k => [k, results.filter(r => r.status === k).length]));
const summary = { generatedAt: new Date().toISOString(), archive: manifest, localFiles: locals.length, activeFiles: locals.filter(l => l.active).length, counts, contentKinds: Object.fromEntries(['body', 'reblog_excerpt', 'empty_or_media'].map(k => [k, results.filter(r => r.contentKind === k).length])), warnings, archiveDuplicatePairs: results.reduce((n, r) => n + r.archiveDuplicates.length, 0) / 2, crossArchive: crossSummary };
fs.writeFileSync(path.join(out, 'audit.json'), JSON.stringify({ summary, results }, null, 2));
fs.writeFileSync(path.join(out, 'local-index.json'), JSON.stringify(locals.map(({ raw, normalized, shingles, titleGrams, ...rest }) => rest), null, 2));
const pct = n => `${(n * 100).toFixed(1)}%`;
const esc = s => String(s).replaceAll('|', '\\|').replace(/[\r\n]+/g, ' ');
const localLink = f => `[${esc(f)}](../../${f})`;
if (crossSummary) {
  const rows = results.flatMap(r => (r.crossArchiveMatches || []).map(m => `| [${r.id}: ${esc(r.title)}](${r.url}) | [${m.id}: ${esc(m.title)}](${m.url}) | ${m.reason} | ${pct(m.archiveCoverage)} / ${pct(m.otherCoverage)} | ${r.statusLabel} / ${m.otherLocalStatus} |`));
  fs.writeFileSync(path.join(out, 'cross-archive.md'), `# Совпадения между архивами\n\nСравнение ${manifest.site} с ${crossSummary.site} (снимок ${crossSummary.snapshotDate}).\n\nНайдено ${crossSummary.pairs} пар для ${crossSummary.matchingRecords} записей второго архива; среди кандидатов на перенос ${crossSummary.missingWithCrossMatches} имеют соответствие в первом архиве. Это список связей, а не число гарантированных дубликатов: совпадение заголовка и включение выдержки требуют проверки. ID уникальны только внутри своего сайта. Автоматического объединения не выполнялось; статусы первого архива взяты из его сохранённого отчёта.\n\n| Второй архив | Первый архив | Основание | Покрытие второго / первого | Статусы относительно репозитория |\n|---|---|---|---|---|\n${rows.join('\n')}\n`);
}
const intro = `# Сверка архива WordPress\n\nВыгрузка: ${manifest.fetchedAt}. Источник: https://${manifest.site}/.\n\nПроверены все опубликованные записи и страницы, доступные через публичный API: ${archived.length}. Уникальность ID и число результатов каждой коллекции проверены. Приватные, удалённые записи и черновики архива недоступны и не входят в отчёт.\n\nЛокально проверено ${locals.length} Markdown/MDX-файлов по всему репозиторию; ${summary.activeFiles} находятся в src/content/posts или src/content/singles и не помечены draft: true. Это проверка исходников, не фактического развёртывания сайта. Исключены зависимости, сборка, отчёты и служебные инструкции .agents/.codex.\n\n| Результат | Количество |\n|---|---:|\n${Object.entries(counts).map(([k, v]) => `| ${labels[k]} | ${v} |`).join('\n')}\n\n## Методика и ограничения\n\nHTML разобран через parse5, Markdown — через remark; ссылки и разметка не участвуют в сравнении текста. Регистр, ё/е, пунктуация и пробелы нормализованы. Исключены wp-crosspost-linkback и стандартный блок приглашения в сообщество/поддержки сайта; они давали ложные совпадения между несвязанными статьями. Сравниваются SHA-256 текста, множества последовательностей из пяти слов, заголовки без служебных префиксов, slug и sourceUrl/originalUrl. Обычная ссылка в тексте не считается переносом.\n\n«Уже есть»: точный текст от 30 слов либо покрытие текста архива ≥93% при объёме от 80 слов и ≥40 общих последовательностях. «Перенесена частично»: покрытие архива 20–85%, локального текста ≥75%, ≥40 общих последовательностей и локальный текст короче 90% исходного. Это предположение о частичном переносе: сокращённая редакция тоже возможна.\n\n«Вероятный дубликат»: совпадение идентификаторов, сходство заголовка ≥80% либо существенное пересечение текста. «Кандидат на перенос»: пороги не достигнуты; это не доказательство отсутствия. У коротких заметок, статей из изображений/вложений и сильно отредактированных версий автоматическая проверка ограничена. Вложения и изображения не скачивались и по содержимому не сравнивались. Повторяющиеся абзацы учитываются множеством, а не числом повторов.\n\nВ JSON для каждой записи сохранены три ближайших локальных файла, признаки совпадения и метрики. Доли ниже — покрытие последовательностей слов, а не вероятность. Найдено пар похожих записей внутри архива: ${summary.archiveDuplicatePairs}; их нужно учитывать перед переносом. Ошибок разбора frontmatter: ${warnings.length}.\n\nИсходные ответы API находятся в raw/. Статьи не изменялись, сборка не запускалась. Повторная локальная сверка: \`node tools/audit-wordpress-archive.mjs ${auditArguments}\`.\n`;
function table(rows) {
  return '| ID / тип | Статья архива | Локальный файл | Покрытие архива / файла | Основание | Дубли в архиве |\n|---|---|---|---|---|---|\n' + rows.map(r => {
    const b = r.matches[0];
    const note = r.contentKind === 'reblog_excerpt' ? ' **Выдержка репоста**' : r.contentKind === 'empty_or_media' ? ' **Нет текста**' : r.words < 80 ? ' **Короткий текст**' : '';
    return `| ${r.id} / ${r.type} | [${esc(r.title)}](${r.url})${note} | ${localLink(b.file)} | ${pct(b.archiveCoverage)} / ${pct(b.localCoverage)} | ${esc(r.reason)}; заголовок ${pct(b.titleSimilarity)} | ${r.archiveDuplicates.map(d => `${d.id}: ${d.reason}`).join('; ')} |`;
  }).join('\n') + '\n';
}
const caveat = `\n## Состав архива\n\nОбычных текстовых материалов: ${summary.contentKinds.body}; выдержек репостов: ${summary.contentKinds.reblog_excerpt}; без извлекаемого текста: ${summary.contentKinds.empty_or_media}. Репосты содержат только отрывок и ссылку на другой сайт. Служебные подписи репостов удалены из сравнения; совпадение отрывка всегда требует проверки полного оригинала и не считается доказательством полного переноса. Адреса оригиналов, ссылок и изображений сохранены в audit.json. Другие сайты не выгружались.\n\nОбновить снимок: \`pwsh -File tools/fetch-wordpress-archive.ps1 -Site ${manifest.site} -ReportDirectory ${reportDirectory}\`, затем повторить локальную сверку.\n`;
fs.writeFileSync(path.join(out, 'README.md'), intro + caveat + (crossSummary ? '\nСвязи с первым архивом: [межархивная сверка](cross-archive.md).\n' : '') + '\n' + Object.entries(labels).map(([k, label]) => `\n## ${label}\n\n${k === 'missing' ? 'Локальный файл в таблице — ближайший результат поиска, а не установленный дубликат.\n\n' : ''}${table(results.filter(r => r.status === k))}`).join('\n'));
fs.writeFileSync(path.join(out, 'missing.md'), '# Кандидаты на перенос\n\nНе импортировать автоматически: проверить ближайшие совпадения и дубли внутри архива. Полная методика — в [отчёте](README.md).\n\n' + table(results.filter(r => r.status === 'missing')));
fs.writeFileSync(path.join(out, 'review.md'), '# Записи для ручной проверки\n\nПредположительно частичные переносы и вероятные дубликаты. Полная методика — в [отчёте](README.md).\n\n' + table(results.filter(r => ['partial', 'probable'].includes(r.status))));
const duplicateRows = results.flatMap(r => r.archiveDuplicates.filter(d => r.id < d.id).map(d => {
  const other = results.find(x => x.id === d.id);
  return `| [${r.id}: ${esc(r.title)}](${r.url}) | [${other.id}: ${esc(other.title)}](${other.url}) | ${d.reason} | ${r.statusLabel} / ${other.statusLabel} |`;
}));
fs.writeFileSync(path.join(out, 'duplicates.md'), '# Возможные дубли внутри архива\n\nПары отмечены по совпадению текста или заголовка. Совпадение заголовка само по себе не доказывает дублирование. Репосты сравниваются по доступным выдержкам. Перед импортом выбрать нужную версию; записи автоматически не объединялись.\n\n| Первая запись | Вторая запись | Основание | Статусы сверки |\n|---|---|---|---|\n' + duplicateRows.join('\n') + '\n');
console.log(JSON.stringify(summary, null, 2));
