import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const root=process.cwd();
const dir=path.join(root,'output/cover-preview-2026-10-31');
const names=['a-new-road-to-lichdom','forgotten-mage-of-the-forgotten-realms','how-to-tell-a-beholder-where-to-go','lost-lore-of-the-realms-72','lost-lore-of-the-realms-75','lost-lore-of-the-realms-76','the-floating-mask-of-doom','the-ladies-three','when-the-mask-smiles'];
const logoSource=path.join(dir,'forgotten-realms-logo-internet.png');
const logo=await sharp(logoSource).trim().resize({width:340}).png().toBuffer();
const lm=await sharp(logo).metadata();
if(!lm.hasAlpha) throw Error('Logo must have transparency');
await fs.mkdir(path.join(dir,'before-setting-logo'),{recursive:true});
await fs.copyFile(logoSource,path.join(dir,'forgotten-realms-logo-master.png'));
await fs.writeFile(path.join(dir,'forgotten-realms-logo-340.png'),logo);
const records=[];
for(const name of names){
 const post='src/content/posts/forgotten-realms/ed-greenwood-'+name+'.mdx';
 const source=await fs.readFile(post,'utf8');
 const match=source.match(/^cover:.*~assets\/covers\/([^"'\r\n]+)["']?\s*$/m);
 if(!match)throw Error('Missing cover '+post);
 const original=match[1];
 const destination='ed-greenwood-'+name+'-setting-logo.png';
 const target=path.join('src/assets/covers',destination);
 try{await fs.access(target);throw Error('Output exists '+target)}catch(e){if(e.code!=='ENOENT')throw e;}
 const input=path.join('src/assets/covers',original);
 const meta=await sharp(input).metadata();
 await fs.copyFile(input,path.join(dir,'before-setting-logo',original));
 await sharp(input).composite([{input:logo,left:meta.width-340-36,top:meta.height-lm.height-32}]).png().toFile(target);
 records.push({post,original,destination});
}
console.log(JSON.stringify(records,null,2));
await fs.writeFile(path.join(dir,'setting-logo-changes.json'),JSON.stringify(records,null,2)+'\n');
