import json, re, sys
from pathlib import Path
from urllib.parse import urljoin
from lxml import html

src, out_md, out_json, base = sys.argv[1:5]
doc = html.fromstring(Path(src).read_bytes())
root = doc.xpath('//div[contains(concat(" ",normalize-space(@class)," ")," storycontent ")]')[0]

def clean(value):
    return re.sub(r'\s+', ' ', value or '').strip()

def inline(node):
    out = [node.text or '']
    for child in node:
        tag = child.tag.lower() if isinstance(child.tag, str) else ''
        body = inline(child)
        if tag == 'a' and child.get('href'):
            body = f'[{body}]({urljoin(base, child.get("href"))})'
        elif tag in ('strong', 'b'):
            body = f'**{body}**'
        elif tag in ('em', 'i'):
            body = f'*{body}*'
        elif tag == 'code':
            body = f'`{body}`'
        elif tag == 'br':
            body += '\n'
        elif tag == 'img':
            url = child.get('src') or child.get('data-src')
            body = f'![{clean(child.get("alt"))}]({urljoin(base, url)})' if url else ''
        out.extend([body, child.tail or ''])
    return ''.join(out)

def render(node):
    tag = node.tag.lower() if isinstance(node.tag, str) else ''
    if tag in ('script', 'style', 'noscript', 'form'):
        return ''
    if tag in ('p', 'div'):
        value = clean(inline(node))
        return value + '\n\n' if value else ''.join(render(child) for child in node)
    if re.fullmatch(r'h[1-6]', tag):
        return '#' * int(tag[1]) + ' ' + clean(inline(node)) + '\n\n'
    if tag in ('ul', 'ol'):
        marker = '1. ' if tag == 'ol' else '- '
        return '\n'.join(marker + clean(inline(child)) for child in node.xpath('./li')) + '\n\n'
    if tag == 'blockquote':
        return '> ' + clean(inline(node)).replace('\n', '\n> ') + '\n\n'
    if tag == 'img':
        url = node.get('src') or node.get('data-src')
        return f'![{clean(node.get("alt"))}]({urljoin(base, url)})\n\n' if url else ''
    return ''.join(render(child) for child in node)

text = ''.join(render(child) for child in root if not any(
    key in (' ' + (child.get('class') or '') + ' ').lower()
    for key in ('sharedaddy', 'jp-relatedposts', 'yarpp', 'addtoany')
)).strip() + '\n'
Path(out_md).write_text(text, encoding='utf-8')
canonical = (doc.xpath('//link[@rel="canonical"]/@href') or [base])[0]
title = (doc.xpath('//meta[@property="og:title"]/@content') or doc.xpath('//title/text()') or [''])[0]
links = list(dict.fromkeys(urljoin(base, url) for url in root.xpath('.//a/@href') if urljoin(base, url).startswith(('http://', 'https://'))))
images = list(dict.fromkeys(urljoin(base, (img.get('src') or img.get('data-src'))) for img in root.xpath('.//img') if img.get('src') or img.get('data-src')))
metadata = {'canonicalUrl': canonical, 'title': clean(title), 'author': 'Justin Alexander', 'links': links, 'images': images, 'length': len(text)}
Path(out_json).write_text(json.dumps(metadata, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(metadata, ensure_ascii=False))
