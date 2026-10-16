import fs from 'node:fs';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

const [input, output, metaOutput] = process.argv.slice(2);
const html = fs.readFileSync(input, 'utf8');
const $ = cheerio.load(html);
const article = $('.entry-content').first();
article.find('.sharedaddy, script, style, noscript, iframe').remove();

const links = [...new Set(article.find('a[href]').map((_, el) => new URL($(el).attr('href'), $('link[rel="canonical"]').attr('href')).href).get())];
const images = [...new Set(article.find('img').map((_, el) => $(el).attr('data-orig-file') || $(el).attr('data-large-file') || $(el).attr('src')).get().filter(Boolean).map((url) => new URL(url, $('link[rel="canonical"]').attr('href')).href))];

const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', emDelimiter: '*', strongDelimiter: '**' });
td.addRule('figcaption', { filter: ['figcaption'], replacement: (content) => `\n*${content.trim()}*\n` });
td.addRule('image', { filter: 'img', replacement: (_content, node) => { const el = $(node); const src = el.attr('data-orig-file') || el.attr('data-large-file') || el.attr('src'); return src ? `![${el.attr('alt') || ''}](${new URL(src, $('link[rel="canonical"]').attr('href')).href})` : ''; } });
const text = td.turndown(article.html() || '').replace(/\n{3,}/g, '\n\n').trim() + '\n';
fs.writeFileSync(output, text, 'utf8');
fs.writeFileSync(metaOutput, JSON.stringify({ canonicalUrl: $('link[rel="canonical"]').attr('href'), title: $('.entry-title').first().text().trim(), author: $('.author a, a[rel="author"]').first().text().trim(), links, images }, null, 2), 'utf8');
console.log(JSON.stringify({ chars: text.length, links: links.length, images: images.length, title: $('.entry-title').first().text().trim() }));
