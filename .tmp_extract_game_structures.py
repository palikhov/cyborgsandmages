from html.parser import HTMLParser
from pathlib import Path
import html, re

source = Path(r'C:\Users\Anton\AppData\Local\Temp\article-work-YgOrbp\response-0c908cc79cffb857f912cc37dda144dc27ccf8031c1f3249c67d11fd1178cc45.bin')
cache = Path(r'C:\Users\Anton\AppData\Local\Temp\article-work-YgOrbp')
raw = source.read_text(encoding='utf-8')
m = re.search(r'<div class="storycontent">(.*?)</div>', raw, re.S | re.I)
if not m:
    raise SystemExit('storycontent not found')
fragment = m.group(1)

class Markdown(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out=[]; self.href=[]; self.alt=[]; self.list_depth=0
    def add(self,s): self.out.append(s)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag in ('p','div'): self.add('\n\n')
        elif tag == 'br': self.add('\n')
        elif tag in ('strong','b'): self.add('**')
        elif tag in ('em','i'): self.add('*')
        elif tag == 'a': self.href.append(a.get('href','')); self.add('[')
        elif tag == 'img':
            src=a.get('src') or a.get('data-src') or ''
            self.add(f'![{a.get("alt","")}]({src})')
        elif tag in ('h2','h3','h4'): self.add('\n\n'+'#'*(int(tag[1])-1)+' ')
        elif tag in ('ul','ol'): self.list_depth += 1; self.add('\n')
        elif tag == 'li': self.add('\n'+'  '*(self.list_depth-1)+'- ')
        elif tag == 'blockquote': self.add('\n\n> ')
    def handle_endtag(self, tag):
        if tag in ('strong','b'): self.add('**')
        elif tag in ('em','i'): self.add('*')
        elif tag == 'a': self.add(']('+self.href.pop()+')')
        elif tag in ('ul','ol'): self.list_depth=max(0,self.list_depth-1); self.add('\n')
        elif tag in ('p','div','blockquote'): self.add('\n\n')
    def handle_data(self,data): self.add(data)

p=Markdown(); p.feed(fragment)
text=''.join(p.out).replace('\xa0',' ')
text=re.sub(r'[ \t]+\n','\n',text)
text=re.sub(r'\n{3,}','\n\n',text).strip()+'\n'
(cache/'extracted.md').write_text(text,encoding='utf-8')
links=[]
for u in re.findall(r'(?<!\!)\[[^\]]*\]\((https?://[^)]+)\)',text):
    if u not in links: links.append(u)
images=[]
for u in re.findall(r'!\[[^\]]*\]\((https?://[^)]+)\)',text):
    if u not in images: images.append(u)
(cache/'links.txt').write_text('\n'.join(links),encoding='utf-8')
(cache/'images.txt').write_text('\n'.join(images),encoding='utf-8')
print(len(text),len(links),len(images))
