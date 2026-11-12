import {readFileSync,writeFileSync} from 'node:fs';
const cache='C:/Users/Anton/AppData/Local/Temp/article-work-5y0PaJ';
const links=JSON.parse(readFileSync(`${cache}/links.json`));
const images=JSON.parse(readFileSync(`${cache}/images.json`));
const canonical='https://acoup.blog/2021/01/08/collections-that-dothraki-horde-part-iv-screamers-and-howlers';
writeFileSync(`${cache}/source-save.json`,JSON.stringify({cacheDir:cache,sourceUrl:canonical,canonicalUrl:canonical,title:'Collections: That Dothraki Horde, Part IV: Screamers and Howlers',author:'Bret Devereaux',textFile:`${cache}/extracted.md`,links,images,verifiedAliases:[]},null,2));
writeFileSync(`${cache}/registry.json`,JSON.stringify({articleUrl:canonical,links,verifiedAliases:[]},null,2));
writeFileSync(`${cache}/images-manifest.json`,JSON.stringify({slug:'acoup-that-dothraki-horde-part-iv-screamers-and-howlers',cacheDir:cache,images,coverUrl:images[0]},null,2));
