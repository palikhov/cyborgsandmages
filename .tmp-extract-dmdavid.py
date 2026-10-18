import html as htmllib
import json, re, sys
from pathlib import Path
from urllib.parse import urljoin
from lxml import html

source, out_md, out_json, base_url = sys.argv[1:5]
raw = Path(source).read_text(encoding='utf-8', errors='replace')
doc = html.fromstring(raw)
entries = doc.xpath('//div[contains(concat(" ", normalize-space(@class), " "), " entry-content ")]')
if not entries:
    raise SystemExit('entry-content not found')
root = entries[0]
for bad in root.xpath('.//*[contains(@class,"sharedaddy") or contains(@class,"jp-relatedposts") or self::script or self::style or self::form or self::button]'):
    parent = bad.getparent()
    if parent is not None: parent.remove(bad)

links, images = [], []
def clean(s): return re.sub(r'\s+', ' ', s or '').strip()
def inline(node):
    parts = []
    if node.text: parts.append(node.text)
    for c in node:
        tag = c.tag.lower() if isinstance(c.tag, str) else ''
        inner = inline(c)
        if tag == 'a':
            href = urljoin(base_url, c.get('href',''))
            if href:
                links.append(href); parts.append(f'[{inner}]({href})')
            else: parts.append(inner)
        elif tag in ('strong','b'): parts.append(f'**{inner}**')
        elif tag in ('em','i'): parts.append(f'*{inner}*')
        elif tag == 'code': parts.append(f'`{inner}`')
        elif tag == 'br': parts.append('  \n')
        elif tag == 'img':
            src = urljoin(base_url, c.get('data-src') or c.get('src') or '')
            alt = clean(c.get('alt',''))
            if src: images.append({'src':src,'alt':alt}); parts.append(f'![{alt}]({src})')
        else: parts.append(inner)
        if c.tail: parts.append(c.tail)
    return clean(''.join(parts)).replace('  \n ', '  \n')

def block(node, depth=0):
    tag = node.tag.lower() if isinstance(node.tag, str) else ''
    if tag in ('h1','h2','h3','h4','h5','h6'):
        return '#' * max(2, int(tag[1])) + ' ' + inline(node)
    if tag == 'p': return inline(node)
    if tag == 'blockquote':
        text = '\n\n'.join(filter(None,(block(c,depth) for c in node))) or inline(node)
        return '\n'.join('> '+line if line else '>' for line in text.splitlines())
    if tag in ('ul','ol'):
        out=[]
        for i,li in enumerate(node.xpath('./li'),1):
            val=inline(li); prefix=f'{i}. ' if tag=='ol' else '- '
            out.append(prefix+val)
        return '\n'.join(out)
    if tag == 'table':
        rows=[]
        for tr in node.xpath('.//tr'):
            cells=[inline(x) for x in tr.xpath('./th|./td')]
            if cells: rows.append(cells)
        if not rows: return ''
        width=max(map(len,rows)); rows=[r+['']*(width-len(r)) for r in rows]
        return '\n'.join(['| '+' | '.join(rows[0])+' |','| '+' | '.join(['---']*width)+' |']+['| '+' | '.join(r)+' |' for r in rows[1:]])
    if tag == 'figure':
        chunks=[]
        for img in node.xpath('.//img'):
            src=urljoin(base_url,img.get('data-src') or img.get('src') or '')
            alt=clean(img.get('alt',''))
            if src: images.append({'src':src,'alt':alt}); chunks.append(f'![{alt}]({src})')
        caps=node.xpath('.//figcaption')
        if caps: chunks.append('*'+inline(caps[0])+'*')
        return '\n\n'.join(chunks)
    if tag == 'img':
        src=urljoin(base_url,node.get('data-src') or node.get('src') or '')
        alt=clean(node.get('alt',''))
        if src: images.append({'src':src,'alt':alt}); return f'![{alt}]({src})'
        return ''
    chunks=[]
    if node.text and clean(node.text): chunks.append(clean(node.text))
    for c in node:
        v=block(c,depth+1)
        if v: chunks.append(v)
    return '\n\n'.join(chunks)

md='\n\n'.join(filter(None,(block(c) for c in root)))
md=re.sub(r'\n{3,}','\n\n',md).strip()+'\n'
Path(out_md).write_text(md,encoding='utf-8')
title=clean(''.join(doc.xpath('//h1[contains(@class,"entry-title")][1]//text()')))
canonical=(doc.xpath('//link[@rel="canonical"]/@href') or [base_url])[0]
author=clean(''.join(doc.xpath('//a[@rel="author"][1]//text()')))
data={'title':htmllib.unescape(title),'canonicalUrl':canonical,'author':author,'characters':len(md),'links':list(dict.fromkeys(links)),'images':list({x['src']:x for x in images}.values())}
Path(out_json).write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(data,ensure_ascii=False,indent=2))
