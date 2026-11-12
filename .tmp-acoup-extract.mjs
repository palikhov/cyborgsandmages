import {readFileSync,writeFileSync} from 'node:fs';
const [input,out]=process.argv.slice(2),html=readFileSync(input,'utf8');
const dec=s=>s.replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&#x([\da-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#0?39;|&apos;/g,"'").replace(/&hellip;/g,'…').replace(/&ndash;/g,'–').replace(/&mdash;/g,'—').replace(/&rsquo;/g,'’').replace(/&lsquo;/g,'‘').replace(/&rdquo;/g,'”').replace(/&ldquo;/g,'“');
const at=t=>Object.fromEntries([...t.matchAll(/([:\w-]+)\s*=\s*(["'])(.*?)\2/gs)].map(m=>[m[1],dec(m[3])]));
const abs=u=>{try{return u&&!u.startsWith('data:')?new URL(u,'https://acoup.blog/').href:''}catch{return''}};
let b=html.slice(html.indexOf('<div class="entry-content">')+27); const ends=["<div class='sharedaddy",'<div class="sharedaddy','</div><!-- .entry-content -->'].map(x=>b.indexOf(x)).filter(x=>x>=0); b=b.slice(0,Math.min(...ends));
const imgs=[]; for(const m of b.matchAll(/<img\b[^>]*>/gi)){const a=at(m[0]);let u=abs(a['data-orig-file']||a['data-large-file']||a.src||'');if(u&&!imgs.includes(u))imgs.push(u)}
const links=[];for(const m of b.matchAll(/<a\b[^>]*>/gi)){const u=abs(at(m[0]).href);if(u&&!links.includes(u))links.push(u)}
let md=b.replace(/<!--[\s\S]*?-->|<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>/gi,'');
md=md.replace(/<img\b[^>]*>/gi,t=>{const a=at(t),u=abs(a['data-orig-file']||a['data-large-file']||a.src||''),n=imgs.indexOf(u)+1;return n?`\n\n[[IMAGE ${n}: ${a.alt||''}]]\n\n`:''});
md=md.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi,(_,r,l)=>{const u=abs(at(`<a ${r}>`).href),c=l.replace(/<[^>]+>/g,'');return u?`[${c}](${u})`:c});
md=md.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi,(_,n,x)=>`\n\n${'#'.repeat(Math.max(2,+n))} ${x}\n\n`).replace(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/gi,(_,x)=>`\n\n*${x}*\n\n`).replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi,'**$2**').replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi,'*$2*').replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi,(_,x)=>`\n- ${x}`).replace(/<br\s*\/?\s*>/gi,'\n').replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi,(_,x)=>`\n\n${x}\n\n`).replace(/<[^>]+>/g,'');
md=dec(md).replace(/[ \t]+\n/g,'\n').replace(/\n[ \t]+/g,'\n').replace(/\n{3,}/g,'\n\n').trim()+'\n';
writeFileSync(`${out}/extracted.md`,md);writeFileSync(`${out}/links.json`,JSON.stringify(links,null,2));writeFileSync(`${out}/images.json`,JSON.stringify(imgs,null,2));console.log(JSON.stringify({chars:md.length,links:links.length,images:imgs.length},null,2));
