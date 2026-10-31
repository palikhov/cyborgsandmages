import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(dir,'../..');
const records=JSON.parse(await fs.readFile(path.join(dir,'setting-logo-changes.json'),'utf8'));
const changes=[];
for(const r of records){
 const file=path.join(root,r.post);
 const text=await fs.readFile(file,'utf8');
 const before=`cover: "~assets/covers/${r.destination}"`;
 const after=`cover: "~assets/covers/${r.original}"`;
 await fs.access(path.join(root,'src/assets/covers',r.original));
 if(text.includes(before))changes.push({file,text:text.replace(before,after)});
 else if(!text.includes(after))throw Error('Cover changed since this operation: '+r.post);
}
for(const c of changes)await fs.writeFile(c.file,c.text);
console.log('Restored cover references: '+changes.length);
