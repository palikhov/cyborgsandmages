import { readFileSync, writeFileSync } from 'node:fs';

const tasks = [
  ['C:/Users/Anton/AppData/Local/Temp/article-work-ex1fTk/response-4c5019122717682511a2ccd6444d1ad9892672b2585633e62e852aa4f1ad2058.bin','C:/Users/Anton/AppData/Local/Temp/article-work-ex1fTk/extracted.md'],
  ['C:/Users/Anton/AppData/Local/Temp/article-work-ojHvwz/response-1c35467a3c11bf00a97b86f698edbb2e13febf02f0190822552fd869c54cebd5.bin','C:/Users/Anton/AppData/Local/Temp/article-work-ojHvwz/extracted.md'],
  ['C:/Users/Anton/AppData/Local/Temp/article-work-DOs0oS/response-b0ef1f918647be6f719e71cf9a76ca7a728f39ea733a4fe6b3c893611ced1312.bin','C:/Users/Anton/AppData/Local/Temp/article-work-DOs0oS/extracted.md']
];

function decode(text) {
  const named = new Map([['amp','&'],['lt','<'],['gt','>'],['quot','"'],['apos',"'"],['nbsp',' '],['hellip','…'],['mdash','—'],['ndash','–'],['lsquo','‘'],['rsquo','’'],['ldquo','“'],['rdquo','”'],['trade','™']]);
  return text.replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replace(/&([a-z]+);/gi,(m,n)=>named.get(n.toLowerCase())??m);
}

for (const [input, output] of tasks) {
  const source=readFileSync(input,'utf8');
  const start=source.indexOf('<div class="entry-content">');
  const end=source.indexOf('</div><!-- .entry-content -->',start);
  if(start<0||end<0) throw new Error(`Boundaries not found: ${input}`);
  let body=source.slice(start,end);
  body=body
    .replace(/<img\b([^>]*)>/gi,(_,attrs)=>`\n\n![IMAGE](${attrs.match(/\bsrc="([^"]+)"/i)?.[1]??''})\n\n`)
    .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,'[$2]($1)')
    .replace(/<(strong|b)>([\s\S]*?)<\/\1>/gi,'**$2**')
    .replace(/<(em|i)>([\s\S]*?)<\/\1>/gi,'*$2*')
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi,'\n\n## $1\n\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi,'\n\n### $1\n\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi,'\n\n#### $1\n\n')
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi,'\n- $1')
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi,(_,inner)=>`\n\n${inner.replace(/<p[^>]*>|<\/p>/gi,'').split(/<br\s*\/?\s*>|\n/).map(x=>x.trim()).filter(Boolean).map(x=>`> ${x}`).join('\n')}\n\n`)
    .replace(/<br\s*\/?\s*>/gi,'\n').replace(/<p[^>]*>/gi,'').replace(/<\/p>/gi,'\n\n').replace(/<[^>]+>/g,'').replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
  writeFileSync(output,decode(body),'utf8');
}
