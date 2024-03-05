<style>
/* Background */
  .phb{ background-image: url('https://www.gmbinder.com/images/UCIUXyr.jpg') }
  .phb{ background-size: cover }
/* Fix for Chrome 95+ */
  .phb p{line-height: 1.2em;}
/* Notes */
  .phb blockquote {background-color: #ebcec3}
  .phb hr + blockquote tr:nth-child(odd) td {background-color: #FDF1DC;}
/* Tables */
  .phb hr+section blockquote tr:nth-child(odd) td {background-color:transparent; }
  table tr:nth-child(odd) td {background-color: #ebcec3}
/* Footer */
  .phb .pageNumber {color: rgba(0, 0, 0, 0.6)}
  .phb .footnote {color: rgba(0, 0, 0, 0.6)}
  .phb:nth-child(odd):after {
    background-image: url('https://www.gmbinder.com/images/6kGBrGW.png'); z-index: -2;
  }
  .phb:nth-child(even):after {
    background-image: url('https://www.gmbinder.com/images/6kGBrGW.png'); z-index: -2;
    transform: scalex(-1);
  }  
/* Misc */.phb hr+section blockquote hr{background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M0 0l2 1L0 2z' fill='%239c2b1b'/%3E%3C/svg%3E")}
/* Fix for Blinking Pages */   
  .phb h1::before { content: " "; display: table; }
/* Fix for Fan Content Footer*/   
  .phb:after { 
        content: "";
    }
/* */
.phb .column-break {
      display: flex;
  }
/* Cover */    
  .phb#p1:after { display:none; }
/* Suffering an Injury */    
  .phb#p9 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p9 table:nth-of-type(1) th:nth-of-type(1) { width: 15%; }  
/* Exhaustion */ 
  .phb#p13 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p13 table:nth-of-type(1) th:nth-of-type(1) { width: 10%; }
  .phb#p13 table:nth-of-type(1) th:nth-of-type(2) { width: 15%; }  
/* Realistic Armor */ 
  .phb#p28 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p28 table:nth-of-type(1) th:nth-of-type(1) { width: 18%; }
  .phb#p28 table:nth-of-type(1) th:nth-of-type(2) { width: 15%; }   
  .phb#p28 table:nth-of-type(1) th:nth-of-type(3) { width: 9%; }     
  .phb#p28 table:nth-of-type(1) th:nth-of-type(4) { width: 34%; }   
  .phb#p28 table:nth-of-type(1) th:nth-of-type(5) { width: 9%; }     
  .phb#p28 table:nth-of-type(1) th:nth-of-type(6) { width: %; }  
/* Realistic Weapons */
  .phb#p32 table:nth-of-type(1) th:nth-of-type(1) { width: 17%; }
  .phb#p32 table:nth-of-type(1) th:nth-of-type(2) { width: 10%; }  
  .phb#p32 table:nth-of-type(1) th:nth-of-type(3) { width: 12%; }  
  .phb#p32 table:nth-of-type(1) th:nth-of-type(4) { width: 9%; }  
  .phb#p33 table:nth-of-type(1) th:nth-of-type(1) { width: 13.5%; }
  .phb#p33 table:nth-of-type(1) th:nth-of-type(2) { width: 8%; }  
  .phb#p33 table:nth-of-type(1) th:nth-of-type(3) { width: 11%; }  
  .phb#p33 table:nth-of-type(1) th:nth-of-type(4) { width: 8%; }  
  .phb#p34 table:nth-of-type(1) th:nth-of-type(1) { width: 12%; }
  .phb#p34 table:nth-of-type(1) th:nth-of-type(2) { width: 8%; }  
  .phb#p34 table:nth-of-type(1) th:nth-of-type(3) { width: 11%; }  
  .phb#p34 table:nth-of-type(1) th:nth-of-type(4) { width: 8%; }  
  .phb#p38 table:nth-of-type(1) th:nth-of-type(1) { width: 17%; }
  .phb#p38 table:nth-of-type(1) th:nth-of-type(2) { width: 9%; }  
  .phb#p38 table:nth-of-type(1) th:nth-of-type(3) { width: 11%; }  
  .phb#p38 table:nth-of-type(1) th:nth-of-type(4) { width: 8%; }  
  .phb#p38 table:nth-of-type(1) th:nth-of-type(5) { width: 9%; }    
  .phb#p39 table:nth-of-type(1) th:nth-of-type(1) { width: 21%; }
  .phb#p39 table:nth-of-type(1) th:nth-of-type(2) { width: 8%; }  
  .phb#p39 table:nth-of-type(1) th:nth-of-type(3) { width: 9%; }  
  .phb#p39 table:nth-of-type(1) th:nth-of-type(4) { width: 9%; }    
  .phb#p39 table:nth-of-type(1) th:nth-of-type(5) { width: 9%; }    
/* Siege Warfare */      
  .phb#p45 table:nth-of-type(1) th:nth-of-type(1) { width: 25%; }
  .phb#p46 table { font-size:105% }
  .phb#p46 table:nth-of-type(1) th:nth-of-type(1) { width: 25%; }
  .phb#p47 table:nth-of-type(1) { font-size:105% }
  .phb#p47 table:nth-of-type(1) th:nth-of-type(1) { width: 23%; }  
/* Balanced CR Table */    
  .phb#p63 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p63 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p63 table:nth-of-type(1) th:nth-of-type(2) { width: 7%; } 
/* Running a Business */      
  .phb#p76 table tbody tr td { font-size:95% }
  .phb#p77 table tbody tr td { font-size:95% }  
  .operationtab table:nth-of-type(1) th:nth-of-type(1) {
      width: 16%;
  }  
  .operationtab table:nth-of-type(1) {
      font-size:110%;
  }    
/* Realistic Travel */    
  .phb#p80 table:nth-of-type(1) { table-layout: fixed; }
  .smalltab table:nth-of-type(1) th:nth-of-type(1) {
      width: 50%;
  }
  .smalltab table:nth-of-type(1) th:nth-of-type(3) {
      width: 30%;
  }  
  .hunttable table:nth-of-type(1) th:nth-of-type(1) {
      width: 17%;
  }    
  .hunttable table:nth-of-type(1) th:nth-of-type(3) {
      width: 12%;
  }      
  .hunttable table:nth-of-type(1) th:nth-of-type(4) {
      width: 12%;
  }        
  .hunttable table:nth-of-type(1) th:nth-of-type(5) {
      width: 20%;
  }       
  .hunttable table {
     font-size:110%;
  }         
/* Critical Tables */    
  .phb#p91 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p91 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p91 table:nth-of-type(1) th:nth-of-type(2) { width: 41%; }  
  .phb#p92 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p92 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p92 table:nth-of-type(1) th:nth-of-type(2) { width: 41%; }    
  .phb#p93 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p93 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p93 table:nth-of-type(1) th:nth-of-type(2) { width: 41%; }      
  .phb#p94 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p94 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p94 table:nth-of-type(1) th:nth-of-type(2) { width: 41%; }  
/* Lingering Injuries */      
  .phb#p95 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p95 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p95 table:nth-of-type(1) th:nth-of-type(2) { width: 93%; }    
  .phb#p96 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p96 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p96 table:nth-of-type(1) th:nth-of-type(2) { width: 93%; }    
  .phb#p97 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p97 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p97 table:nth-of-type(1) th:nth-of-type(2) { width: 93%; }     
  .phb#p98 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p98 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p98 table:nth-of-type(1) th:nth-of-type(2) { width: 93%; }       
  .phb#p99 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p99 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p99 table:nth-of-type(1) th:nth-of-type(2) { width: 93%; }  
  .phb#p100 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p100 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p100 table:nth-of-type(1) th:nth-of-type(2) { width: 93%; }  
  .phb#p101 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p101 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p101 table:nth-of-type(1) th:nth-of-type(2) { width: 93%; }    
  .phb#p102 table:nth-of-type(1) { table-layout: fixed; }
  .phb#p102 table:nth-of-type(1) th:nth-of-type(1) { width: 7%; }
  .phb#p102 table:nth-of-type(1) th:nth-of-type(2) { width: 93%; }      
/* Memos */    
.memo1{
    background-image: url(https://www.gmbinder.com/images/mLtvLEl.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: 211px;
    position: absolute;
    top: -40px;
    left: 0px;
    transform: rotate(-15deg);
    padding: 20px 20px;
    padding-top: 90px;
}

.memo1-bottom{
    background-image: url(https://www.gmbinder.com/images/NLqlUKx.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: 211px;
    position: absolute;
    bottom: -50px;
    right: -30px;
    transform: rotate(-15deg);
    padding: 5px 20px;
}

.memo1-bottom2{
    background-image: url(https://www.gmbinder.com/images/NLqlUKx.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: 211px;
    position: absolute;
    bottom: -80px;
    right: -30px;
    transform: rotate(-15deg);
    padding: 5px 20px;
}

.memo2-top{
    background-image: url(https://www.gmbinder.com/images/xAkCMa0.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: 196px;
    position: absolute;
    top: -20px;
    transform: rotate(6deg);
    padding: 20px 20px;
    padding-top: 105px;
}

.memo2-top2{
    background-image: url(https://www.gmbinder.com/images/xAkCMa0.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: 206px;
    position: absolute;
    top: -20px;
    transform: rotate(6deg);
    padding: 20px 20px;
    padding-top: 105px;
}

.memo2-top3{
    background-image: url(https://www.gmbinder.com/images/xAkCMa0.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: 206px;
    position: absolute;
    top: -20px;
    transform: rotate(6deg);
    padding: 20px 20px;
    padding-top: 135px;
    
}

.memo2-bottom{
    background-image: url(https://www.gmbinder.com/images/uz1AipU.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: 196px;
    position: absolute;
    bottom: -15px;
    transform: rotate(6deg);
    padding: 10px 20px;
}

.memo2-left{
    background-image: url(https://www.gmbinder.com/images/b78l21b.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 280px;
    width: 196px;
    position: absolute;
    left: -15px;
    transform: rotate(6deg);
    padding: 5px 20px;
    padding-left: 45px;
}

.memo2-right{
    background-image: url(https://www.gmbinder.com/images/aZw7Ex0.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 280px;
    width: 196px;
    position: absolute;
    right: -15px;
    transform: rotate(6deg);
    padding: 5px 20px;
    padding-right: 25px;
}

.memo3{
    background-image: url(https://www.gmbinder.com/images/4MErzAb.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: auto;
    position: absolute;
    padding: 20px 20px;
}  
/* table of contents */
.toc a {
 color: inherit !important;	/*toc specifically wants black text. This resets the headers*/}
.toc li span:nth-child(2){ /*Allow dot leaders to fill remaining space but not overlap*/
 width: auto;
 overflow: hidden;
 white-space: nowrap; 
 display: block;}
.toc li span:nth-child(2):after{
 font-family: BookSanity; /*Remove any header styles from dot leaders*/
 font-size: 0.317cm;
 font-weight: normal;
 color: black;
 content:" ........................................" "........................................." ".........................................";}
.toc li span:first-child{ /*Remove any header styles from page numbers*/
 float: right;
 font-family: BookSanity;
 font-size: 0.317cm;
 font-weight: normal;
 color: black;
 margin-left: 1px; /*Leaves a small space between page numbers and dot leaders*/}
/*Special cases for headings*/    
.toc li h3 span:nth-child(2):after{content: " ";/*Remove dot leaders on h3*/}
.toc li h3 {
 margin-bottom: 4px !important;	/*Special spacing for h3*/
 margin-top: 10px !important;
 line-height: initial !important; /*For some reason Multi-line h3 line spacing changed*/}
.toc li h3 span:first-child{line-height: 1.8em !important;  	/*Line page numbers up with Multi-line h3 better*/}
.toc ul ul {margin-left: 10px !important; /*Original lists intented too much*/}
.toc>ul>li {margin-bottom: initial !important; /*margin for list items needs to be removed or 0*/}
</style>

<img src='https://www.gmbinder.com/images/UDZmLy2.png' class='cover-image' />

<div><img src="https://www.gmbinder.com/images/TwnX3gW.png" style="position:absolute;bottom:965px;right:360px;width:90px;"></div>

<div class='cover-diamond' style="top:180px;"></div>

<div class='cover-header' style="top:90px;font-size:460%;">{title}</div>

<img src='https://www.gmbinder.com/images/UNR8ilF.png' style='position:absolute;bottom:180px;left:0px;width:50%' />



<div class='cover-footer'>Extra rules a Dungeon Master needs for running gritty and realistic adventures <br />with the world's greatest roleplaying game</div>

\pagebreakNum

<div class='partpage-dmg'>

# Credits 
##### 

</div>

<br><br><br><br><br><br><br><br><br><br><br><br>

## Core Team

<div style="font-size:125%">

**Apostol Apostolov** - Project Lead<br>
**Kyle Taylor** - Co-author, Weapon Specialist<br>
**Chip Llewellyn** - English proofing<br>
**Jahmal McNair** - English proofing<br>

</div>

### Contributors

*{title} is built with contributions and house rules from talented DMs from the Reddit and Discord community.*

___
/u/damnedmage - Ingenious Proficiency<br>
/u/ezfi - Personality Scores<br>
/u/ilovegoodfood - Combat Options<br>
/u/FTangSteve - Injury Tokens<br>
/u/TheCheatIsNotDead - On Death's Door<br>
/u/everythingnarrative - Con-based Death Saves<br>
/u/transmogrify, /u/LeoKeros - Armors<br>
/u/Wilhelm_III, [Unknown](http://homebrewery.naturalcrit.com/share/HJCBLI4mQ) - Weapons<br>
/u/Rescon, /u/pfaffi89 - Realistic Firearms<br>
[Bryan Holmes](https://fallenwyvern.github.io/DMsGuild-Product-Page/)- Subskills<br>
/u/aeyana - Horde Opponents<br>
/u/RaccoonLX - Inventory<br>
/u/vulpetrem - Buying Items<br>
/u/DracoDruid - Realistic Travel<br>


### Inspiration

*These third party supplements have inspired or contributed to some of the key mechanics in {title}.*

___
[Fifth Edition Options](http://www.drivethrurpg.com/product/186685/Fifth-Edition-Options) by Total Party Kill Games<br>
[Roshambo-Style Theatre of the Mind](https://www.dmsguild.com/product/224253/RoshamboStyle-Theatre-of-the-Mind) by Wagner Volanin<br>
[The Comprehensive Equipment Manual](https://www.dmsguild.com/product/218782/The-Comprehensive-Equipment-Manual-Revised) by Randall Right<br>
[En5ider 267: Weapon Degradation](https://www.patreon.com/posts/weapon-26123238) by Erik Evjen<br>
[Darker Dungeons](https://www.reddit.com/r/darkerdungeons5e/) by /u/giffyglyph<br>
[Death Saves Revised](https://thinkdm.org/2020/08/01/death-saves-revived/) by ThinkDM<br>
[Blog of Holding](http://blogofholding.com/?p=7338) by Paul Hughes<br>
[Book of Hordes](https://www.gmbinder.com/share/-LZWXq83Rk2jZNs7spok) by /u/aeyana<br>
[The World of Farland](http://farlandworld.com/injuries.html) by S.Baker<br>


### Thorough Feedback

/u/ilovegoodfood, /u/Wilhelm_III, /u/Seb_veteransleeper, /u/Rescon, /u/pfaffi89, /u/LeoKeros, /u/Monger9, /u/Mornal, /u/dynamite8100, 

\columnbreak

<br><br><br><br><br><br><br>

<div class='classTable' style='dissplay: none;'>

##### Art Credits

**Cover:**  "Brunner the Bounty Hunter" by [Marek Okoń](https://www.okonart.com/#portfolio&illustrations&83)<br>
**Page 3, 63:** "Night over the poor district" by [Lucas Örström](https://www.deviantart.com/ortsmor/art/Night-over-the-poor-district-411611698)<br>
**Page 4, 5:** "Step by Step" by [Flavio Bolla](http://flaviobolla.blogspot.com/2013/04/das-schwarze-auge-step-by-step.html)<br>
**Page 6:** "Ragnarok" by [Joel Hustak](https://www.deviantart.com/joelhustak/art/Ragnarok-545493973)<br>
**Page 7:** "Fearless" by [Alan Chou](https://alonchou.cgsociety.org/2ybd/fearless)<br>
**Page 8:** "Knight Watch" (MtG Card) by [Matt Stewart](http://www.matthew-stewart.com/)<br>
**Page 9:** "Fallen Warrior" by [Marek Okon](https://www.okonart.com/)<br>
**Page 11:** "Defeat" by [Johnson Ting](https://www.artstation.com/artwork/danw)<br>
**Page 12:** "Solace" by [Egor Motygin](https://egor-motygin.livejournal.com/125520.html)<br>
**Page 15:** "Warden" by [Kim Junghun](https://www.artstation.com/artwork/lKdY5)<br>
**Page 16:** "Campfire" by [Rogier van de Beek](http://www.beek-art.com/)<br>
**Page 17:** "Flank" by [Matt Forsyth](https://mattforsyth.cgsociety.org/39cc/flank)<br>
**Page 18:** "Tavern Brawl" by [Svetlin Velinov](https://www.deviantart.com/velinov/art/Tavern-Brawl-96471746)<br>
**Page 20:** "Drescher, Falcon's Eye Hunter" ([LotC Card](https://legendofthecryptids.fandom.com/wiki/Drescher,_Falcon%27s_Eye_Hunter))<br>
**Page 21:** *Thief 4* concept art by [Mathieu Latour-Duhaime](https://www.artstation.com/matlat)<br>
**Page 23:** "An Autumn War" by [zippo514](https://www.deviantart.com/zippo514/art/An-Autumn-War-346258870)<br>
**Page 24:** "Storm the Gate" by [daRoz](https://www.deviantart.com/daroz/art/Storm-the-Gate-364145588)<br>
**Page 27:** "Adventurer's Pack" by [Nathan Rosario](https://www.deviantart.com/nathanrosario)<br>
**Page 29:** "Total War" concept art by [luulala](https://www.deviantart.com/luulala/art/Unused-sketch-for-Total-War-Kingdom-646508981)<br>
**Page 30:** "Medieval Battle" by [Ivan Gerard](http://conceptartworld.com/artists/ivan-girard/)<br>
**Page 31:** "Armorsmith" by [Ben Lo](https://www.deviantart.com/benlo/art/Armor-smith-208402252)<br>
**Page 34:** "Assassin's Creed" concept by [Grant Hillier](https://www.artstation.com/artjunkie)<br>
**Page 35:** "Weapon Master Belk" by [KangJason](https://www.deviantart.com/kangjason)<br>
**Page 38:** Unnamed by [Stepan Alekseev](https://www.artstation.com/artwork/2x8ega)<br>
**Page 42:** "Steam States" by [Javier Charro](https://www.artstation.com/artwork/14E6L)<br>
**Page 44:** "Nazar, Rustedge Holder" by [Sam Hogg](https://www.artstation.com/artwork/oPekL)<br>
**Page 48:** "The Siege" by [Stonemason](https://www.renderosity.com/mod/gallery/the-siege/2351949/)<br>
**Page 50:** Untitled by [David Palumbo](https://curiator.com/art/david-palumbo/0)<br>
**Page 52:** "Explorer" by [UnidColor](https://www.deviantart.com/unidcolor/art/Explorer-265248146)<br>
**Page 53:** *Waterdeep: Harbor* by [Craig Mullin](http://www.goodbrush.com/)<br>
**Page 54:** *Guild Wars 2* concept art by [Kekai Kotaki](http://gw2101.gtm.guildwars2.com/en/art/concept-art/)<br>
**Page 56:** "Night Watchman" by [Eric Martin](https://www.artstation.com/artwork/RnwDX)<br>
**Page 58:** "Bard" by [Lee Chak Khuen](https://www.artstation.com/puppeteer)<br>
**Page 66:** "The Militia" by [Andrei Pervukhin](https://www.deviantart.com/andrei-pervukhin/art/the-militia-253204984)<br>
**Page 68:** "Ambush" (Gwent card) by [Unknown]()<br>
**Page 72:** "Market" by [Ignacio Bazán Lazcano](https://www.deviantart.com/neisbeis/art/Market-tutorial-150836202)<br>
**Page 73:** "The Foreign Market" by [Rhys Griffiths](https://www.artstation.com/artwork/qeaAz)<br>
**Page 76:** "Merchant" by [Kieran Yanner](http://www.kieranyanner.com/)<br>
**Page 78:** "Travel" by [Zuoan Dong](https://www.artstation.com/artwork/XG35L)<br>
**Page 81:** *Fable* concept art by [Sarel Theron](https://www.sareltheron.com/)<br>
**Page 83:** "Of Orcs and Men" by [Camille Bachmann](https://www.artstation.com/artwork/mWV89)<br>
**Page 86:** "Tales from Weirdland" by [Sanjulián](http://manuelsanjulian.blogspot.com/)<br>
**Page 90:** "Field Medic" (Gwent card) by [Diego de Almeida](https://www.artstation.com/diegodealmeida)<br>
**Page 91:** "First Strike" by [Pauperia](https://www.deviantart.com/pauperia/art/First-Strike-573325106)<br>
**Page 92:** "Gug Shrine" by [Dave Allsop](https://www.deviantart.com/daveallsop/art/Gug-Shrine-626222286)<br>
**Page 93:** "Rary the Traitor" by [Ben Wootten](https://www.deviantart.com/benwootten/art/Rary-the-Traitor-271574637)<br>
**Page 94:** "Spell Contortion" (MtG card) by [Wayne Reynolds](https://www.waynereynolds.com/)<br>
**Page 97:** "Crown of Madness" by [Jason Deem](https://jdillustration.net)<br>
**Page 102:** "Lightning Bolt" (*MtG promo*) by [Kekai Kotaki](http://www.kekaiart.com/)<br>
**Page 103:** Sage" (Gwent card) by [Bryan Sola](https://www.artstation.com/bpsola)<br>

</div>

<div style='display: none;'> ##### <div align=center><font color=black>Join the community!</font></div> </div>

<div style='display: none;'>
[<img
   src='https://www.gmbinder.com/images/urfe1Rv.png'
   style='position:absolute;bottom:95px;right:140px;width:170px;transform:rotate(0deg);z-index:0;filter:opacity(100%)'
/>](https://www.reddit.com/r/gritandglory5e/)


[<img
   src='https://i.redd.it/tpvewx1950311.png'
   style='position:absolute;bottom:175px;right:125px;width:200px;transform:rotate(0deg);z-index:0;filter:opacity(100%)'
/>](https://rebrand.ly/gritandglory5ediscord)
</div>

\pagebreakNum

<img src='https://www.gmbinder.com/images/aKVwF2a.jpg' class='cover-image' style='filter: grayscale(20%) brightness(70%)' />

<img 
src='https://www.gmbinder.com/images/UA8ok1j.png' style='position:absolute; bottom:-30px; left:-100px; width:530px; filter:  opacity(100%) grayscale(100%) brightness(100%)' />

## <div style="font-size:150%">Brace Yourself...</div>

___
<div style="font-size:120%">

For decades, running realistic campaigns using the world's greatest role-playing game has been an impossible feat. Previous editions showered players with supernatural abilities and magic items until only monsters of legend presented <br>by formidable challenge. 

<div style="margin-top:20px;"></div>

*Dungeons & Dragons 5th Edition* is a welcome break from that tradition. The bounded accuracy, reasonable power curve and flexible core rules need only a few changes to allow for campaigns where players struggle to survive and face the unexpected consequences of combat.

<div style="margin-top:20px;"></div>

*{title}* is your Advanced Player's Guide to low fantasy and historic roleplaying. This book contains popular house rules and expanded combat, equipment, attrition and recovery<br>rules that focus on realism and lethality. 

<div style="margin-top:20px;"></div>

*{title}* is intended for campaigns where players and opponents are made using similar rules. A perfect example of what these rules do best are the human-centric and low magic worlds of *Game of Thrones* and *Conan the Barbarian*. While these rules support traditional dungeon delving, monsters that scale far beyond human capabilities are dreadful encounters that can make or break your players. If you are looking for a survival and horror fantasy like *Dark Souls* or *Cthulhu Mythos*, you can challenge your players with uncompromising difficulty and attrition. 

<div style="margin-top:20px;"></div>

These rules may appear overwhelming at first but all rules are modular and can be introduced one by one into your game. Start with those that empower your players such as Combat Options and Realistic Equipment, and slowly raise the stakes by bringing new Recovery and Wounds mechanics to your game. Wounds and Recovery mechanics are best suited for campaigns starting at level 3-5 and can be very lethal at lower levels. 

<div style="margin-top:20px;"></div>

*{title}* is a product of two years of design and playtesting and is actively supported. You <br>can leave feedback or suggestions on [Discord](https://rebrand.ly/gritandglory5ediscord).

</div>

___
\columnbreak

<div style="margin-top:0px;"></div>

<div class='classTable toc' style='margin-left:20px;'>

## Table of Contents

- ### [<span>4-67</span><span>Playing The Game</span>](#p4)
  - [<span>5-6</span><span>Core Rules</span>](#p5)
  - [<span>7</span><span>Initiative</span>](#p7)
  - [<span>8</span><span>Wounds</span>](#p8)
  - [<span>9</span><span>Injuries</span>](#p9)
  - [<span>10</span><span>Perils of Combat</span>](#p10)
  - [<span>11</span><span>Healing</span>](#p11) 
  - [<span>12</span><span>Attrition and Death</span>](#p12)
  - [<span>13</span><span>Expanded Exhaustion</span>](#p13)
  - [<span>14-15</span><span>Expanded Conditions</span>](#p14)
  - [<span>16</span><span>Resting and Recovery</span>](#p16)
  - [<span>17</span><span>Standard Combat Actions</span>](#p17)
  - [<span>18-21</span><span>Combat Options</span>](#p18)
  - [<span>22-24</span><span>Mapless Combat</span>](#p22)
  - [<span>25</span><span>Stealth</span>](#p25)
  - [<span>26-27</span><span>Starting Equipment</span>](#p26)
  - [<span>28-32</span><span>Realistic Armors</span>](#p28)
  - - [<span>30</span><span>Armor Properties</span>](#p30)
  - - [<span>31</span><span>Armor Degradation</span>](#p31)
  - [<span>32-38</span><span>Realistic Melee Weapons</span>](#p32)
  - - [<span>34-38</span><span>Melee Properties</span>](#p34)
  - [<span>39</span><span>Realistic Ranged Weapons</span>](#p39)
  - [<span>40-44</span><span>Realistic Firearms</span>](#p40)
  - - [<span>41-42</span><span>Ranged and Firearm Properties</span>](#p41)
  - - [<span>43-44</span><span>Weapon Degradation</span>](#p43)
  - [<span>45-48</span><span>Siege Weapons</span>](#p45)
  - [<span>49</span><span>Character Options</span>](#p49)
  - [<span>50-58</span><span>Skills and Subskills</span>](#p50)
  - [<span>59</span><span>Inventory Slots</span>](#p59)
  - [<span>60</span><span>Realistic Encumbrance</span>](#p60)
  - [<span>61-67</span><span>Realistic Opponents</span>](#p61)
  - - [<span>64</span><span>Encounter Balancing</span>](#p64)
  - - [<span>65-67</span><span>Hordes and Swarms</span>](#p65)

- ### [<span>68-71</span><span>Hard Grit</span>](#p68)
  - - [<span>69</span><span>Hard Grit Mode</span>](#p69) 
  - - [<span>70</span><span>Realistic Defense</span>](#p70) 
  - - [<span>71</span><span>Wounds and Vigor</span>](#p71)  

- ### [<span>72-89</span><span>Living The World</span>](#p72)
  - [<span>73</span><span>Silver Standard Economy</span>](#p73)
  - [<span>74-75</span><span>Realistic Lifestyle</span>](#p74)
  - [<span>76-77</span><span>Running a Business</span>](#p76)
  - [<span>78</span><span>Henchmen and Hirelings</span>](#p78)
  - [<span>79-89</span><span>Realistic Travel</span>](#p79)

- ### [<span>90-102</span><span>Crits and Injuries</span>](#p90)
  - [<span>91-94</span><span>Critical Hit and Failure Tables</span>](#p91)
  - [<span>95-102</span><span>Injury Tables by Damage Type</span>](#p95)

- ### [<span>103-108</span><span>Character Sheet</span>](#p103)
  - [<span>104-105</span><span>Filling Your Sheet</span>](#p104)
  - [<span>106-108</span><span>*Grit and Glory* Character Sheet</span>](#p106)

</div>

<div style="margin-top:815px; display: none;">

##### <div align=center><font color=white>Join the community!</font></div>

[<img
   src='https://i.redd.it/tpvewx1950311.png'
   style='position:absolute;bottom:60px;right:125px;width:200px;transform:rotate(0deg);z-index:0;filter:opacity(100%)'
/>](https://rebrand.ly/gritandglory5ediscord)

</div>

\pagebreakNum

<div class='partpage-dmg'>

# Part I

##### Playing The Game

<img src='https://www.gmbinder.com/images/JmL4ydq.png' class='cover-image' style="height:1066px" />

</div>

\pagebreakNum

<img
   src='https://www.gmbinder.com/images/JmL4ydq.png'
   style='position:absolute;bottom:00px;right:160px;width:870px;transform:rotate(0deg);filter:opacity(100%)'
/>


<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:-0px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:330px;
  width:1270px;
  transform:
    scalex(1.12);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
  '
/>

\columnbreak

<div style="margin-top:0px;"></div>

## Core Rules

### Exceptional Success

Any noncritical Attack Roll that beats AC by 10 or any Skill Roll that beats DC by 10 is called an Exceptional Success.

If your Attack is an Exceptional Success, you may reroll one weapon die before calculating the damage. If you do, <br>you can choose between the two results. 

If your Skill check is an Exceptional Success, it is also a Critical Success (at DM's discretion). The DM may give you advantage on one related follow-up skill check. 

<div style="margin-top:20px;"></div>

### Group Checks

When the DM asks all players to make the same skill check (such as Perception or Insight) treat it as a group check. A standard group check may require successes equal to one half of the players, rounded down. A group of 5 players needs 2 successes to succeed. Any player that rolls an Exceptional Success or a Critical Success counts as two successes.

When the party is trying to gain complex information that can be broken into separate pieces, each success earns one piece of it, starting with the most vague. Very valuable and complicated information may require additional successes. 

<div style="margin-top:20px;"></div>

### Stacking Advantage

*Player's Handbook* (pg. 173) states that multiple advantages and disadvantages do not stack. You can increase realism and tactical complexity by allowing multiple advantages and disadvantages to stack. To stack, they need to originate from different players or conditions, for example being Prone and Frightened by a creature at the same time. Abilities or spells with the same name cannot stack their benefit.

If after cancelling advantages with disadvantages you are left with more than one advantage, you apply one of the advantages but the rest give a +1 bonus to the roll each (max +3). If you are left with more than one disadvantage, you apply one of the disadvantages and the rest give a -1 penalty to the roll each (max -3). 

<div style="margin-top:20px;"></div>

### Helping Others

When you use the Help action to aid another character in a task, you must have proficiency in that Skill and make a DC 10 skill check with that skill. You cannot Help if you suffer disadvantage to the roll (such as from Exhaustion).

<div style="margin-top:20px;"></div>

### Free Item Interaction

At any time during your combat turn, you have one free interaction with your inventory or the environment. You can draw a one-handed or two-handed weapon, or draw any Prepared items (pg. [59](#p59)) from worn containers. You can also interact with one feature of the environment (such as opening or closing a door, kicking a table). 

If you want to interact with a second object, draw an item from a backpack container, manipulate an object such as magic item or a complex activity that requires an Ability check, you need to use your action (see *Player's Handbook*, pg. 190).

\pagebreakNum

### Contacts

When creating their characters, players have a number of Contact slots equal to their proficiency bonus. Each slot can be used to create a non-player character who can assist them. 

To create a contact, speak with the DM and explain your concept. The DM chooses two attributes (usually Wisdom and Charisma) that helped to bond with that character. Make a d20 roll adding both attribute modifiers to the result. The DM may grant advantage if a contact is important to the story.

| DC  | Relationship |
|:---:|:-----------|
|  1–8  | Hostile or Distrusting, approach at your own risk |
|  9–12  | Complicated, you owe them a Favor |
|  13–15  | Neutral or Associate, will talk and do business |
|  16–18  | Friendly or Obsequious, will be hospitable to you |
|  19–22  | Very Friendly, owes you a Favor |
|  +5  | Contact is 3 or more levels higher than you |
|  +3  | Contact is much wealthier than you |
|  +5  | Contact has local authority |
|  +8  | Contact has global authority |

Each time you spend a total of 30 days of downtime doing activities in a social situation, you gain a new Contact slot that can be used to create a non-player character in that particular location. 

<div style="margin-top:-5px;"></div>

### Inspiration Points

Inspiration Points are earned by the whole party. The party can earn up to 3 points per session and store points up to the number of players in the group. The party must agree when and how to spend the Inspiration Points.
___
The party earns Inspiration Points at the end of a session with:

<div style="margin-top:-10px;"></div>

* great roleplaying moments, deep storytelling with dramatic effect, rich detail in describing combat, or <br>having appropriate fun
* working together as a team to overcome extraordinary odds, defeating difficult opponents, and progressing the story when it is not openly directed by the DM
* creating a dramatic moment important to their character, or contributing to an important scene involving other player characters that advances their development
___
The party can spend an Inspiration Point anytime to:

<div style="margin-top:-10px;"></div>

* increase one player’s Initiative by +10 for one combat
* remove one failed Death Save or Injury Token (pg. [9](#p9))
* reroll a damage roll rolled by a player or DM. 
* reroll one Attack, Saving Throw or Attribute check by a player and choose between the two results. If a failure is turned into a success, it is a partial success that may come with unexpected complications
* change the next Skill check by a player, if successful, to a exceptional success. If the roll is a failure, the Inspiration Point is wasted. Attack rolls cannot be changed to a critical hit.
* have the DM roll twice when rolling on a random effect table and the party chooses one of the possible results

___
\columnbreak


<img
   src='https://www.gmbinder.com/images/ApLXZhF.jpg'
   style='position:absolute;bottom:-20px;left:360px;height:1080px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%) 
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreakNum

\columnbreak

# Initiative

### Balanced Initiative

When combat starts, every participant makes a Dexterity check to determine their place in the initiative order. 

However, if the result of the die is equal or lower than their Intelligence modifier, the participant may reroll the d20 once but must take the new result even if it is lower. 

### Ready to Strike

Even if you are outside of combat, you may declare that you are "ready to strike" at any creatures that you can see and observe their behavior for longer than 6 seconds, and you have your weapon readied to Attack at the start of your first combat turn. While Ready to Strike, you can add your proficiency bonus to your Initiative roll.

Any activity other than observing the creatures breaks your concentration and you lose this benefit unless you spend 6 seconds to ready again.

### Initiative Rush

Sometimes a few points of initiative prevent the cleric from saving the fighter's life before he makes his last death save, or, if a fighter could move up the initiative order, he could act before the enemy and deal the final blow. When you want to achieve such feats, you can rush your initiative. 

At any time between your combat turns, you may announce that you want to rush your next turn. If you do so, you can raise your initiative for this round only by any amount up to <br>5 + your Dexterity modifier. During your rushed turn you may use only your Movement or your Action but not both, and you cannot use your reaction until the start of your next turn. You do not benefit from Dominance (pg. [18](#p18)) until the start of your next non-rushed turn.

### Expanded Ready Action

Ready Action (*Player's Handbook, pg. 193*) states that you can only declare a readied action under the specific condition that "if something happens or someone does something, I will act" where the trigger must happen before you can use your reaction to either move, make an opportunity attack or release a prepared spell. You may also use Combat Options (pg. [18-21](#p18)) that use your reaction as new options available to Readied Action. 

You can also make split second statements that say "before something happens, I will do this" where you may attempt to pre-empt the trigger. If you choose such a statement, when your readied action is triggered use your reaction and make an opposed Wisdom (Insight) or Dexterity (Sleight of Hand) skill check (DM chooses the skill) contested by the target's Wisdom (Perception) or Charisma (Deception). You can only make this check using a skill you are proficient in. If you succeed, you can act before the trigger resolves. If you fail, your used reaction is forfeited but your Readied Action can be used after the current turn ends.


<img
   src='https://www.gmbinder.com/images/UYFLVhV.png'
   style='position:absolute;bottom:-10px;left:250px;height:1070px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%) 
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>


\pagebreakNum

# Wounds

___
Realistic combat can be an ugly thing. What *Dungeons and Dragons* represents as simple loss of hit points obscures the truth of pain, suffering and death. These rules introduce Wounds and Injuries to make your players fear combat again. 

<div style="margin-top:-5px;"></div>

### Wounds

To represent actual bodily trauma, *Grit and Glory* uses what is called 'Wound Thresholds' and 'Wound Risks'. 

A creature's Wound Threshold is equal to 12 + their Constitution modifier and represents how tough they are to resist physical damage. Should a creature ever take damage equal or greater than their Wound Threshold, they suffer what is called a Wound Risk - an injury that very well could lead to something serious! DM's and players can use tokens to tally up their characters' Wound Risks.

<div style="margin-top:-2px;"></div>

##### <div style="text-align: center"> Wound Threshold = 12 + CON Modifier </div><br><div style="margin-top:-10px;"></div>

<div style="margin-top:-2px;"></div>

At the end of each Combat Turn, if you have suffered one or more Wound Risks, make a Constitution saving throw at DC 12 + 2 for each Wound Risk you have. This saving throw is called a Confirmation Roll. Should you fail, you suffer an Open Wound - an injury that is bleeding profusely! 

Regardless of whether you succeeded or failed the Confirmation Roll, remove all your Wound Risks, resetting them to 0, ready for another Turn.

<div style="margin-top:-2px;"></div>

##### <div style="text-align: center"> Confirmation DC = 12 + 2 per Wound Risk </div><br><div style="margin-top:-10px;"></div>

<div style="margin-top:-2px;"></div>

Any time you take damage that is equal or greater than x2 your Wound Threshold, you automatically suffer an Open Wound and you take an Injury token (pg. [9](#p9)).

<div style="margin-top:-5px;"></div>

### Bleeding

Until the end of combat, you take 1 point of bleeding damage at the beginning of your Combat Turn for each Open Wound you have suffered since the start of that combat.

\columnbreak



Bleeding damage doesn't trigger death saves while you are dying. You can stop the bleeding during combat if you spend your action and make a DC 12 Wisdom (Medicine) check.

### Falling from Wounds

If you have more Open Wounds than your Constitution Modifier plus half your Player Level, rounded up, then you immediately become Unconscious. The minimum amount of Open Wounds a creature can have before falling unconcious is 3 wounds. If you are not stabilized beforehand, you regain consciousness and lose one Open Wound in 2d4 hours.

### Recovering Wounds

Open Wounds can be removed with natural healing or by using a Healer's Kit. At the end of a short or long Rest, you can spend one hit die and close one Open Wound. This die does not grant hit points: it only removes the Open Wound.

You can also use a Healer's Kit to attempt a First Aid Action (pg. [11](#p11)) to close one or several Open Wounds.

Healing Spells of 5th level or higher can remove one or several Wounds, which are up to the DM's discretion. Regenerate, a 7th level Spell, removes all Open and Closed (pg. [10](#p10)) Wounds from a creature.

<div style="margin-top:25px;"></div>

>
>##### Describing Damage and Wounds
>
>Combat in *Dungeons & Dragons* is abstract. Each attack that causes a loss of hit points does not always cause actual damage - they wear the opponent down or leave nonfatal scratches and bruises until one final attack makes the killing blow. 
>
>When someone suffers a Wound Risk, the DM or players can describe an actual physical strike that causes significant damage. When the Wound Risk results in an Open Wound, you can describe real grievous wound caused by a particularly strong attack. Тhe wound may be nonfatal however it can be broken bones, exposed flesh and bleeding that can be used to track a fleeing creature. 
>
>Players who receive Wounds are encouraged to treat them as real damage that causes them great pain and impediment. While Wounds have no lasting effect like Injuries, DM should recognize and reward with Inspiration Points (see pg. [6](#p6)) the players who put effort into realistically portraying the nasty consequences of combat. 
>
>When you gain the Bloodied or Beaten state (see Combat Conditions, pg. [12](#p12)), the accrued damage changes your appearance so others can recognize how close you are to dying. The DM and players must communicate when any creature reaches these states. Any creature with an Intelligence score of 6 or more can pick up on weaker or wounded targets based on their appearance.
>

<div class="memo2-left" style="top:640px;">

##### NPC Wounds

Monsters do not suffer Wounds, only damage. For NPCs, apply their proficiency modifier instead of half their player level to their max number of Wounds.

##### Massive Damage

When you take over 50% of your maximum hit points in damage from an attack, fall, explosion, the DM can rule that you take one or several Injury tokens.

</div>

<img src='https://www.gmbinder.com/images/lv3f85u.jpg' style='position:absolute; bottom:-90px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-250px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />

\pagebreakNum

# Injuries

___

It is inevitable that even great heroes will suffer grievous injuries! *Grit and Glory* introduces Injuries and DM's and players can tally these during combat by using tokens. You take an Injury Token of a specific damage type when:

<div style="margin-top:-10px;"></div>

- You fall unconscious due to damage or Open Wounds.
- You fail a Confirmation Roll (pg. [8](#p8)) by 10 or more, or you take enough damage to suffer an automatic Open Wound.
- You suffer a critical hit and the attacker can repeat the same attack roll and the result is still a hit.

<div style="margin-top:-10px;"></div>

At the end of combat, count how many Injury Tokens you have. For each damage type, count the number of tokens received and roll on the corresponding Severity Table below. If you have Injury Tokens for two or more different damage types, you roll on the Severity Table for each damage type, risking seperate Injuries. The outcome you rolled determines what happens next: Should you roll a Minor, Medium, Major, or Extreme outcome, you then roll on the corresponding Injury table (pg. [95-102](#p95)) based on its damage type. The Severity Table will tell you if you can add your Constitution Saving Throw Modifier and Proficiency Bonus to the roll, and if it is with Advantage or Disadvantage. These modifiers could drastically lessen or worsen the severity of a Critical Injury - the higher the result, the less serious the Injury. Should you roll an Escalate outcome on the Severity Table, you simply roll again but this time on the Severity Table one step higher in Injury Tokens, performing the new result.

Once you have found your Injury, if any, all Injury Tokens are removed.

<div style="margin-top:-5px;"></div>

##### Severity 1: One Injury Token

| 4d6 | Injury Roll |
| :-: | :- |
| 4-6 | **Escalate:** Roll on Severity 2 |
| 7-17 | **Minor:** Constitution saving throw, advantage.<br>Add proficiency bonus to your saving throw <br>if you are not already proficient in Constitution. |
| 18-21 | **Medium:** Constitution saving throw, advantage | 
| 22-24 | **Major:** Natural 1d20 roll, advantage | 

<div style="margin-top:-5px;"></div>

##### Severity 2: Two Injury Tokens
| 3d8 | Injury Roll |
| :-: | :- |
| 3-5 | **Escalate:** Roll on Severity 3 |
| 6-7 | **Major:** Natural 1d20 roll | 
| 8-9 | **Medium:** Constitution saving throw | 
| 10-15 | **Minor:** Constitution saving throw, advantage |  
| 16-19 | **Medium:** Constitution saving throw | 
| 20-24 | **Major:** Natural 1d20 roll | 

\columnbreak

##### Severity 3: Three Injury Tokens
| 2d6 | Injury Roll |
| :-: | :- |
| 2 | **Escalate:** Roll on Severity 4 |
| 3 | **Major:** Natural 1d20 roll |
| 4-6 | **Medium:** Constitution check |
| 7 | **Minor:** Constitution check, advantage |
| 8-9 | **Medium:** Constitution check |
| 10-12 | **Major:** Natural 1d20 roll, disadvantage |

<div style="margin-top:-5px;"></div>

##### Severity 4: Four Or More Injury Tokens
| 1d12 | Injury Roll |
| :-: | :- |
| 1-2 | You will die in three combat rounds. |
| 3-5 | **Extreme:** Natural 1d12 roll instead of a<br> 1d20 roll, disadvantage |
| 6 |  **Medium:** Constitution check, disadvantage |
| 7 | **Minor:** Constitution check |
| 8-9 | **Medium:** Constitution check, disadvantage |
| 10-12 | **Major:** Natural 1d20 roll, disadvantage |



### Option: Overcoming Pain

When an injury requires making a Constitution saving throw to overcome nerve damage or lose your action and reaction until your next turn and you fail that roll, you may choose to exert yourself despite the debilitating pain and suffer internal damage to your body.

If you choose to do so, you execute the action as normal, but take internal damage as shown on the table, below. You still can't use your reaction until your next turn. 

##### Overcoming Nerve Injury
| Injury DC | Internal Damage |
| :-: | :- |
| 10 | 1d4 + your proficiency modifier |
| 15 | 1d8 + your proficiency modifier |

<div class="memo2-bottom" style="left:255px;bottom:-102px;filter: brightness(97%) hue-rotate(-10deg);transform: rotate(3deg);">

##### Injury While Unconscious

While unconscious, when you take more damage than the maximum value of your hit die, you also gain one Injury token.

</div>

<div class="memo2-bottom" style="filter: drop-shadow(8px -0px 8px gray); transform: rotate(5deg);left:-15px;bottom:-52px;">

##### Excess Injury

For every Injury token above four, the DM may require an additional roll on Table 4. These additional rolls are only for avoiding sudden death. If you roll 1 or 2, you will die <br>in three combat rounds. If you roll any other value, the additional roll has no effect. 

</div>

<img src='https://www.gmbinder.com/images/2XKvkUe.png' style='position:absolute; top:750px; right:0px; width:1000px' />

<img src='https://www.gmbinder.com/images/sKQMREa.png' style='position:absolute; top:100px; right:0px; width:850px; transform: scalex(1); filter:   opacity(100%)   grayscale(100%)   brightness(97%)' />

\pagebreak

<img src='https://www.gmbinder.com/images/rWcEn0u.jpg' style='position:absolute; top:-20px; right:-0px; width:150%;' />
  
<img src='https://www.gmbinder.com/images/WGybwnz.png' style='position:absolute; top:180px; right:0px; width:900px; filter:  grayscale(100%) brightness(97%)' />

<div style='margin-top:880px;'></div>

# Perils of Combat

___
These optional rules are the last step towards extreme realism and lethality in combat. Introduce them only to players and campaigns where a victorious fighter could <br>still succumb to bleeding out or untreated wounds.

### Option: Realistic Bleeding

Bleeding rules (pg. [8](#p8)) are balanced towards levels 5 to 10. At higher levels, the bleeding damage is a lesser factor and can be easily ignored by players. To improve realism, instead of losing 1 hp from each Open Wound at start of a turn, instead you lose half your proficiency modifier, rounded down.

### Option: Bleeding Out of Combat

The Bleeding rules prevent creatures from dying due to bleeding after combat ends. To improve realism instead of bleeding stopping at the end of combat, for each five minutes (equal to a breather, see pg. [16](#p16)) after the end of combat a bleeding creature loses hit points equal to its proficiency, for each Open Wound it received in the last combat.  

Creatures can stop bleeding if they or an ally make a DC 12 Wisdom (Medicine) skill check and spend one use of a healer's kit or improvised equivalent (such as a ripped tunic to make a bandage). The check can be repeated after another five minutes have passed.

If bleeding out loss makes you become Beaten (see pg. [12](#p12)) you suffer the Poisoned condition and gain one level of Exhaustion. The Poisoned condition ends when you stop bleeding out and you regain hit points enough to lose the Beaten condition.

\columnbreak

### Option: Festering Wounds

When you take a long or full rest (see pg. [16](#p16)), if you have any open Wounds they risk festering. Make a Constitution saving throw at DC 12 + number of open Wounds you have. If you fail, you suffer a Festering wound. A festering wound cannot be closed with hit dice while festering. A successful DC 15 Wisdom (Medicine) check at the end of a long rest stops the festering and turns the wound into ordinary Open Wound. 

While you have a Festering Wound, at the end of each long or full rest your maximum hit points decrease by your hit die maximum value. Your maximum hit points return to normal when you take a long or full rest with no Open Wounds. While your hit point maximum is decreased from Festering Wounds, your Death Save DC (see pg. [12](#p12)) is increased by 2. 

### Option: Closed Wounds and Scars

When you remove an Open Wound by spending hit dice, you gain a Closed Wound. Track Closed Wounds separately on your sheet. When you suffer a number of closed wounds equal to or more than your Level plus Constitution score, you suffer one permanent level of Exhaustion that cannot be recovered with normal rest and recovers only when you lower your total of Closed Wounds.

You recover 1 closed wound per day of Full Rest and a successful DC 15 Constitution check. If you fail the check, you still recover the Closed Wound but it leaves a Scar. You may choose the shape and location of the scar. If you miss by 10 or more or roll a natural 1, the scar is hideous and, if seen, it will influence (positively or negatively) others’ attitude. 

\pagebreakNum

# Healing

___
In a realistic or historic setting, players must rely on healing kits and natural healing, with precious little magic available to them. These rules introduce new uses to the healing kits.

#### Healer's Kit
___
**5 gp, 3 lbs.** This kit is a leather pouch containing bandages, salves and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.  

With Healer's Kit you can use the First Aid, Long Rest Care and Resuscitate actions.

#### Herbalist's Kit
___
**5 gp, 3 lbs.** This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. The kit has 10 uses. Proficiency with this kit lets you add your proficiency bonus to any ability check you make to identify and apply herbs. Also, proficiency with this kit is required to create antitoxin and any potion of healing. 

With Herbalist's Kit you can use Treat Poison and Treat Disease actions, as well as the Long Rest Care.

You can refill one use of the Herbalist Kit with a Wisdom (Nature) check gathering herbs from their environment, with the DC value dependent on their availability.

#### Surgeon's Kit
___
**100 gp, 10 lbs. Heavy (2 Bulk)** This kit contains scalpels, scissors and saws, grasping forceps, and vials of alcohol. You must be proficient in Medicine to use Surgeon's Kit. This kit lets you use the First Aid action and benefit from advantage to the Wisdom (Medicine) check. Also, you can attempt the Perform Surgery actions. 

A Surgeons Kit can be reused when all uses are spent, and can be refilled with 10 uses for 40 gold.

### Healing Actions

##### First Aid

By spending a use of Healer's or Surgeon's Kit, you attempt to tend to an injured person until full medical treatment or rest is possible. Make a Wisdom (Medicine) check against DC equal to 5 + twice the Open Wounds of the treated creature. If you provide First Aid to yourself, you suffer disadvantage to the roll. On success, you close one Open Wound. If you score a critical or exceptional success on the Medicine check, you close an extra Open Wound.

Once you attempt a First Aid on a creature, you cannot attempt again until the creature completes a long rest. 

##### Long Rest Care

By spending one use of Healer's or Herbalist's Kit, you can ease the suffering of one injured creature during its long rest. While spending Hit Dice to recover hit points during the long rest, the creature can choose one of the dice and change it to the maximum value of the die. Also, the creature benefits from an advantage to its next Constitution saving throw made during the long rest. In addition, the creature's Open Wounds are immune to festering effects (see pg. [11](#p11)). 

\columnbreak

##### Resuscitate

By spending a use of Healer's Kit, you attempt to stabilize and return creature to life despite clinical death. A dead creature can still be returned to life within number of combat rounds equal to 1 + the number of successful death saves it scored before dying. Attempt a Wisdom (Medicine) check against DC 30 - 5 for each successful death save the creature had before dying.

If you succeed, the creature can immediately repeat one of its death saves with advantage. If it succeeds on it, it can repeat another death save with advantage. It can continue to do this until it scores one failure. Upon scoring one failure, it dies and can not be Resuscitated again. A creature may not be Resuscitated more than once until it finishes a long rest.

##### Treat Poison

By spending a use of Herbalist's Kit, you provide immediate assistance against the effect of poison. The creature gains resistance to the next damage it receives from the poison and can immediately repeat the saving throw against the effect of poison. You can also spend another use and make a Wisdom (Medicine) check against the Poison's DC. If you succeed, the creature gains advantage to its saving throw. You cannot Treat Poison again until the creature completes a long rest. 

##### Treat Disease

By spending a use of Herbalist's Kit, you provide relief from a disease and prevent is further spreading. The creature can immediately repeat the saving throw against the effect of disease. You can also spend another use and make a Wisdom (Medicine) check against the Disease's DC. If you succeed, the creature gains advantage to its saving throw. In addition, any check against contracting the disease from the sick creature is made with advantage. You cannot Treat Disease again until the creature completes a long rest.

##### Surgery

By spending a use of Surgeon's Kit, you perform a complex procedure on specific Lasting Injury (pg. [9](#p9)) the creature has. Attempt a Wisdom (Medicine) check against DC 30 - 2 points for each position below the first the Injury holds in its Lasting Injury table (pg. [95-102](#p95)). The procedure requires minimum of 1 hour of uninterrupted work, plus another hour and an extra use of the Surgeon's Kit for each 5 points of DC. A creature proficient in Medicine can attempt to Help by spending an additional use of the Surgeon's Kit.

On success, the Injury recovery effect improves. If the Injury requires natural healing, it recovers twice as fast. If the Injury requires magical healing of a specific level or higher, magical healing of up to two levels lower achieves the same result. If the Injury effect lists a Constitution check or saving throw, the roll benefits from advantage for the next one week. On failure, the Injury remains the same. If you fail by 5 points or more, for each point below DC the creature suffers one Open Wound and may become dying during surgery. 

Once you attempt a Surgery on a specific Lasting Injury, you cannot attempt again for one week. You can however attempt Surgery on another Injury on the same creature.

\pagebreakNum

# Attrition and Death

### Combat Conditions

The lingering marks of combat and physical pain affect your appearance and actions. People can read the signs of bodily damage and may act sympathetically or aggressively. 

#### Bloodied

When you lose half of your Max HP, you are **bloodied**. Your body has open wounds or massive hematomas, and you feel intense pain during physical feats requiring Strength or Dexterity. Even if your wounds are hidden, anyone can recognize the signs of pain with a Wisdom (Insight) check vs DC 5 + your Constitution (Deception) skill. 

#### Beaten

When you drop below 1/4 of your Max HP, you are **beaten**. Your body is a mess of bleeding open wounds, cracked or splintered bones, or much worse. You experience severe pain simply by moving around.

When you become **beaten** for the first time in combat and you have 2 or fewer levels of Exhaustion, you gain 1 level of Exhaustion that only comes into effect after the combat ends and the adrenaline rush wears off. 

#### Dying

When you drop to 0 hit points and start **dying**, you gain one level of Exhaustion that comes into effect immediately when you are stabilized.

<div style="margin-top:-3px;"></div>

### Stabilizing Dying Characters

When performing a Death Save, you must meet or exceed a DC with a natural d20 roll. An ally can attempt a DC 10 Wisdom (Medicine) check to help stabilize you. A normal success on that roll lowers your DC as shown below, while exceptional or critical success stabilizes you immediately.

| DC  | Situation |
|:---:|:-----------:|
|  12  | Victim makes Death Saves alone, without Help |
|  10  | Victim receives non-proficient Medicine check |
|  8  | Victim receives proficient Medicine check |
|  -1  | For each +2 Constitution modifier of the victim |
|  +1  | For each -1 Constitution modifier of the victim |

### Option: On Death's Door

For more dramatic and engaging close encounters with death, the DM may allow the following variant rule. When you gain the dying condition at 0 hp, your condition depends on the number of failed death saves. 

<div style="margin-top:-10px;"></div>

* **0 Failed Death Saves:** You fall prone and you cannot stand up. You can spend your whole movement to crawl up to 5 feet. You can use your action only to make one attack. Any attempt to interact with object requires a successful DC 15 (or higher, up to DM) Dexterity check.
* **1 Failed Death Saves:** You are incapacitated.
* **3 Failed Death Saves:** You are dead.
* **More Fails than Successes:** You lose consciousness. 
* **More Successes than Fails:** You regain consciousness. 
 
<img
   src='https://www.gmbinder.com/images/8v1g3ie.jpg'
   style='position:absolute;bottom:00px;left:-360px;height:1070px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreak

# Expanded Exhaustion
___
The Exhaustion condition covers all effects from casual exhaustion to life drain. These rules allow differentiation between normal fatigue and more dangerous effects.

Levels 1-3 of Exhaustion (called *Soft*) often happen with strenuous activity like working, training or fighting. Soft Exhaustion accumulates easily but is recovered quickly with a short or longer rest. Any rule or DM decision that makes you gain Soft Exhaustion increases your Exhaustion only if your current Exhaustion is level 2 or less.

Levels 4-6 of Exhaustion come in play when you push past your limits or your life is being drained. If you have 4 or more levels of Exhaustion, you may recover a level of Exhaustion only during long or full rest. 

##### Soft Exhaustion
| Level  | Ignore | Effect |
|:---:|:----:|:-----------|
|  1  | – | Disadvantage on Strength and Dexterity Ability and Skill checks. |
|  2  | – | Disadvantage on all Ability and Skill checks. Speed halved. Anyone can tell you're tired with DC 10 Wisdom (Insight) check. |
|  3  | 15 | Disadvantage on Attack rolls and Saving Throws. Rolling 1 on attack rolls leads to critical fumbles (see tables at pg. [92](#p92),[94](#p94))  |

##### Heavy Exhaustion
| Level  | Ignore | Effect |
|:---:|:----:|:-----------|
|  4  | 18 | You can only take an action or a bonus action during your turn, and you can't take reactions. You can concentrate on one thing only, such as a spell or enemy target, and ignore all the rest. You're limited to simple mental tasks. |
|  5  | 20 | Speed reduced to 5. Anyone can tell you're on the verge of passing out. You cannot concentrate, or cast spells requiring Concentration. You have blurry vision, tunnel vision, or vertigo and may experience hallucinations (DM's choice).  |
|  6  | 25 | You are Dying. Any additional Exhaustion counts as two failed death saves. |

<br>

<div style="margin-top:-15px;"></div>

> ##### Player's Handbook Compatibility
> The wording *"if you have 2 or fewer levels of exhaustion..."* used elsewhere in this supplement is a PHB-compatible definition of Soft Exhaustion.

<br>

<div style="margin-top:-15px;"></div>

### Ignoring Exhaustion

When you attempt an action that has a chance to increase your Exhaustion to a level that has a listed Ignore DC, you <br>must make either a Constitution saving throw to muster the strength to do it. If you fail, you find an excuse not to do it.

\columnbreak 

### Excess Soft Exhaustion

If you have reached the maximum level of Soft Exhaustion and you take another level of it, instead of increasing your Exhaustion level you lose one hit die. If you have no hit dice left, your Exhaustion increases as normal. 

### Option: Mental Exhaustion

Intense mental activities such as studying, deciphering, solving a problem that takes longer than an hour, may inflict a level of Mental Exhaustion. This variant of Soft Exhaustion is strictly limited to brain activity.

Mental Exhaustion is tracked separately from Exhaustion. Effects that lower Exhaustion also lower Mental Exhaustion by the same number of levels.

##### Mental Exhaustion
| Level  | DC | Effect |
|:---:|:----:|:-----------|
|  1  | – | Disadvantage on Intelligence, Wisdom and Charisma checks |
|  2  | – | Speed of mental activity halved. You feel sleepy, and may ignore fine detail. |
|  3  | 15 | Speed of mental activity halved again. Disadvantage on Intelligence, Wisdom and Charisma saving throws. You barely maintain your focus on the subject of your study, and ignore anything else.  |

### Option: Combat Fatigue

The following rule is useful only when you are engaged in prolonged combat on a battlefield or in a duel with a heavily armored opponent and physical exhaustion plays a big role <br>in deciding the outcome.

During long combat encounters, you gain a level of Soft Exhaustion after a number of combat rounds equal to your Constitution score. Each Heavy weapon you wield and each Bulky or Cumbersome armor you wear decreases the number of rounds until exhaustion by 2. 

Taking a breather (see pg. [16](#p16)) resets the count of combat turns but doesn't recover Soft Exhaustion lost this way.

### Option: Combat Stress

While you have no hit dice left to spend on recovering hit points or closing Wounds, you experience Combat Stress. Your character is under duress and may act anxious or aggressive, and experience cold hands, rapid heartbeat or stomach craps. Communication with the rest of the party may strain or stir petty conflicts. Negative traits that are usually repressed may come to dominate its behavior. <br> The DM should reward realistic role-play of stress with Inspiration Points (pg. [6](#p6)).

While you are affected by Combat Stress you suffer the effect of the *bane* spell to Intelligence (Investigation), Wisdom (Insight or Perception) and Charisma (Performance or Persuasion) skill checks in noncombat situations; however, you also benefit from the effect of the *bless* spell to the same skills during combat. 

\pagebreakNum

# Expanded Conditions

<div style="margin-top:-10px;"></div>

#### Grappled

* A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. 
* The condition ends if the Grappler is incapacitated or an effect removes the grappled creature from the reach of the Grappler or Grappling effect.

<div style="margin-top:-10px;"></div>

___
In addition, the following new rules apply:

<div style="margin-top:-10px;"></div>

* Attacks targeting the grappled creature are at disadvantage unless a Light or Natural weapon is used.
* A grappled creature has disadvantage to attack creatures that are not grappling it.
* If you have a Strength of 13 or more, you can spend one of your attacks to make a Grapple check to restrain them. If you succeed, the creature is Restrained by you. If you fail, the Grapple is broken and the creature can use its reaction to make an opportunity attack against you.

<div style="margin-top:-10px;"></div>

#### Restrained
* A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.
* Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage. The creature has disadvantage on Dexterity Saving Throws.

<div style="margin-top:-10px;"></div>

___
In addition, the following new rules apply:

<div style="margin-top:-10px;"></div>

* If you have Strength of 13 or more, you can spend one of your attacks to make a Grapple check to pin them down. If you succeed the creature is Pinned by you. If you fail, the Grapple is broken and the creature can use its reaction to make an opportunity attack against you.

<div style="margin-top:-5px;"></div>

#### Pinned [New]
Pinned creatures are usually pressed against a hard surface, their limbs held in a lock and struggling under body weight. 

<div style="margin-top:-10px;"></div>

* You can pin down creatures of the same size or smaller than you. Creatures larger than you cannot be pinned.
* A pinned creature is unable to perform any actions other than a Grapple check to break the grapple, or cast spells and cantrips with verbal components only.
* A pinned creature does not benefit from Dexterity or Shield bonuses to AC, fails all Dexterity-based  checks and saving throws, and Coup de Grace (pg. [21](#p21)) against it has disadvantage.
* At the start of your turn, you must spend one of your attacks to maintain the pin down. If you fail to maintain the grapple, the creature is no longer pinned by you.
* During your turn and as long as you have used one of your attack to maintain the pin down, you can attempt a Disarm action as a bonus action. 
* A creature remains Pinned and Restrained by you as long as it is also grappled and restrained by you. If the grapple breaks, it is no longer Pinned and Restrained by you.

<div style="margin-top:-5px;"></div>

#### Shaken [New]
A shaken creature is dealing with the initial shock from a horrifying sight or a powerful enemy attack. Unless stated otherwise, the effect ends on the end of your next turn.

<div style="margin-top:-10px;"></div>

* A shaken creature has disadvantage on its first Attack roll or Ability Check on its turn.
* If a shaken creature is subjected to an effect that causes it to become Shaken again, it becomes Frightened.

\columnbreak

#### Frightened
* A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within sight.
* The creature can’t willingly approach the source of its fear.

<div style="margin-top:-10px;"></div>

___
In addition, the following new rules apply:

<div style="margin-top:-10px;"></div>

* If a frightened creature is subjected to an effect that causes it to become frightened again, the creature must make a Wisdom saving throw at Save DC of the source. If it fails, it becomes Panicked.

<br><div style="margin-top:-30px;"></div>

#### Panicked [New]
An unspeakable dread can break the will of weaker creatures and send them running for their lives. 

<div style="margin-top:-10px;"></div>

* A panicked creature remains panicked as long as it is frightened. If it is no longer frightened, it stops panicking. 
* A panicked creature must Disengage or Dash with all its movement speed from the source of its fear, as well as any other dangers it encounters, along a random path. The creature uses the Dodge action anytime it can, and will attack or interact with obstacles, use special abilities including spells as a means of escape. If cornered, a panicked creature cowers and does not attack. 
* At the start of its turn, a panicking creature can attempt a Wisdom saving throw at Save DC of the source of the fear. If it succeeds, it is no longer panicked. It may continue to feign panicking to surprise any pursuers. 

<br><div style="margin-top:-30px;"></div>

#### Nauseated [New]

Nauseated is a lesser variant of the Poisoned condition. It can be caused by consumption of spoiled food or exposure to toxic conditions without direct contact with poisons. Unless stated otherwise, the effect persists while exposed to its source.

<div style="margin-top:-10px;"></div>

* A nauseated creatures has disadvantage on its first Attack roll or Ability Check on its turn. 
* If a nauseated creature is subjected to an effect that causes it to become Nauseated again, it becomes Poisoned.
* A nauseated creature can spend its action to wretch to remove the Nauseated condition.

<br><div style="margin-top:-30px;"></div>

#### Poisoned
* A poisoned creature has disadvantage on Attack rolls and Ability Checks.

<div style="margin-top:-10px;"></div>

___
In addition, the following new rules apply:

<div style="margin-top:-10px;"></div>

* When a poisoned creature takes poison damage equal to or more than its Constitution modifier (minimum of one), its hit point maximum is reduced by 1d6.
* While poisoned, if a creature's hit point maximum is reduced below half than normal it suffers one level of Exhaustion that cannot be removed. This exhaustion persists even if the creature is no longer Poisoned, as long as its hit point maximum is reduced below half.
* Creature's hit point maximum recover at the end of a long rest, as long as it is no longer Poisoned during the rest. Healing using hit dice or magical means also recovers the same amount to their hit point maximum lost this way.

\pagebreakNum

#### Dazed [New]

Dazed is a lesser variant of Stunned. You may become Dazed after taking guaranteed Wound (damage taken equal or more than twice your Constitution score), taking Massive Damage or when failing a saving throw against a Stunning effect by just one. Unless stated otherwise, the effect ends on the end of your next turn.

<div style="margin-top:-10px;"></div>

* A Dazed creature cannot take reactions, and may use either an action or a bonus action but not both.
* Regardless of your abilities or effects, you cannot make more than one melee or ranged attack during your turn.
* If a Dazed creature is subjected to an effect that causes it to become Dazed again, the creature becomes Stunned.


#### Susceptible [New]

Susceptibility is lesser variant of Vulnerability. Creatures susceptible to a damage type take extra damage from that damage type. You can use this effect instead of Vulnerability to lessen the damage type expoits in your campaign.

Susceptibility has damage type and a value (typically 5) or a die size. If a creature has Fire Susceptibility 1d10, then any time it takes fire damage it takes an extra 1d10 fire damage.

#### Pain-wracked [New]

The creature is experiencing excruciating pain that inhibits its ability to maintain control over its actions. It can suffer the Pain-Wracked condition along with ongoing damage due to burning alive, dissolving into acid, being eaten by a swarm of bugs or rats, extreme torture or surgery without anaesthesia, or when its mind is crushed by a powerful psychic entity. 

<div style="margin-top:-10px;"></div>

* A Pain-wracked creature suffers disadvantage on all skill checks and attack rolls, and its movement speed is decreased by 10.
* A Pain-wracked creature does not benefit from Dexterity or Shield bonuses to AC.
* At the start of its turn, a pain-wracked creature must make a DC 15 Constitution saving throw. If it fails the saving throw, it must use its action to attempt to cancel the ongoing damage, and cannot use its bonus action or reaction until the start of its next turn. <br>If it fails by 5 or more, it also can only use its movement to flee in a direction away from the source of pain and drops prone if it enters difficult terrain or obstacles. If it fails by 10 or more, it always drops prone after using its movement action.
<br>The action required to cancel the ongoing damage must be a saving throw with an appropriate attribute: Strength (to open a bear trap), Dexterity (to remove burning clothes), Constitution (to withstand dissolving flesh), Intelligence (defend against psychic intrusion), Wisdom (brace for pain during surgery), or Charisma (let out your anguish as the pain engulfs you). The DC is either the Trap or Poison DC, a creature's Save or Spellcasting DC or if nothing else applies, either 15 or half the damage taken since the end of the previous turn, whichever is higher.
* If a creature manages to remove the source of pain or the ongoing damage effect ends, it is no longer pain-wracked.
* A Pain-wracked creature that drops unconscious or is dying cannot be stabilized unless it is no longer pain-wracked. 

\columnbreak



<img
   src='https://www.gmbinder.com/images/sA1ofeZ.png'
   style='position:absolute;bottom:00px;left:250px;height:1070px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<br>

<div style="margin-top:550px;"></div>

> ##### Immunity to New Conditions
> Amorphous creatures immune to the Grappled condition are also immune to the Restrained and Pinned condition. Creatures immune to fear are also immune to the Shaken and the Panicked condition. Creatures immune to pain are also immune to the Pain-wracked condition, such as undead and constructs.
>
>___
>##### Option: Aggravated Conditions
>
>When a melee attack or a melee spell attack is an exceptional success or a critical hit, any conditions applied by that attack become aggravated. Abilities and spells that apply conditions that are used after the attack roll is made cannot be aggravated. 
>
>Aggravated conditions have lasting effects that may be hard to overcome. Any time an aggravated condition's effect states the condition should end, the affected creature must make a saving throw (usually Dexterity, Constitution or Wisdom, up to DM) at DC 10 plus your proficiency modifier. If it fails, the aggravated condition remains in effect. The affected creature can repeat the saving throw every time the condition's ending condition is met. 

\pagebreakNum

# Resting and Recovery

<div style="margin-top:10px;"></div>

### Breather

Taking a breather is a short period of rest, at least 5 minutes long, after a strenuous activity. During that time you may rest, slake your thirst and hunger, or check on a single wound and bandage it.

During a breather, you may spend one Hit Die for healing or removing a Wound. If a Hit Die is spent to heal, you roll the die and add your Constitution modifier to it. You regain hit points equal to the total. 

### Short Rest

A short rest is a period of downtime, at least 1 hour long, during which you do nothing more strenuous than light activity like eating, drinking, reading, and tending to wounds. 

You can spend Hit Dice at the end of a short rest for recovery or removing a Wound, up to 1 + Constitution modifier (minimum of 1). For each Hit Die spent in this way, you roll the die and add your Constitution modifier to it. You regain hit points equal to the total. If you have exactly 1 level of Exhaustion, you can remove that level.

You can't benefit from more than two short rest in a 24-hour period, and you must have at least 1 hit point at the start of the rest to gain its benefits. 

### Long Rest

A long rest is a period of extended downtime, at least 8 hours long, during which a character sleeps for at least 6 hours and performs no more than 2 hours of light activity, such as reading, talking, eating, or standing watch. If the rest is interrupted by a period of strenuous activity - at least 1 hour of walking, fighting, casting spells, or similar adventuring activity - you must begin the rest again to gain any benefit. 

<div style="margin-top:210px;"></div>

>
>##### Realistic Going On without Rest
>
>*Xanathar's Guide to Everything* (pg. 78) establishes simple rules for continuing without any sleep. 
>
>To improve realism, assume that Constitution checks and Exhaustion kick in not after 24 hours but after 48 hours of no sleep. Also, if going without sleep makes you get to a second level of Exhaustion, you automatically progress to a third level of Exhaustion.
>

\columnbreak 

During a long rest, you must consume at least 2 pints of water and 1 ration. If you consume at least one sustenance, food or water, you do not gain any exhaustion. If you consume both food and water, you remove one level of exhaustion. Sleeping in Hard armor (pg. [30](#p30)) prevents you from reducing your Exhaustion during rest.

At the end of a long rest, your hit points do not increase to maximum. You regain up to half of your total number of Hit Dice, rounded down and you can spend any number of Hit Dice in that order to recover hit points or close wounds. Any Hit Dice above the maximum amount for your level must be spent, otherwise they are lost.

You can't benefit from more than one long rest in a 24-hour period, and you must have at least 1 hit point at the start of the rest to gain its benefits. 

### Full Rest

A full rest is a period of downtime, at least 24 hours long, during which you sleep at least 6 hours, and perform light activity or nonstrenuous labor for up to 2 hours. A full rest cannot be attempted while in the wilderness, while sleeping on dirt or stone, or while wearing Hard armor (pg. [30](#p30)). You must be in a safe location where you do not feel the need to keep watch or constantly be on guard. 

You must consume at least 1 rations and 4 pints of water (a waterskin) during your rest. If you do not consume water, you gain 1 level of Exhaustion. If you cannot consume food, you cannot recover Exhaustion during this day. If you can provide both, you lose 1 level of Exhaustion and if you have exactly 1 level of Exhaustion after that, you lose it as well. 

At the end of a full rest, you recover all lost hit points and regain all spent Hit Dice. A full rest also counts towards recovery for any serious Injuries. You must have at least 1 hit point at the start of the rest to gain its benefits.

<img 
  src='https://www.gmbinder.com/images/GbCK6zH.jpg' 
  style='position:absolute;top:540px;right:-175px;width:1000px;
    transform:scalex(1);filter: brightness(95%);' />

<img
   src='https://www.gmbinder.com/images/tFcatIg.png'
   style='position:absolute;
  bottom:400px;
  left:-70px;
  width:300px;
  transform:
    rotate(0deg);
  filter: grayscale(100%) brightness(97%)'
/>

<img
   src='https://www.gmbinder.com/images/TN3SKuL.png'
   style='position:absolute;
  bottom:400px;
  left:620px;
  width:300px;
  transform:
    rotate(-10deg);
    filter: grayscale(100%) brightness(97%)'
/>

<img
   src='https://www.gmbinder.com/images/TN3SKuL.png'
   style='position:absolute;
  bottom:390px;
  left:120px;
  width:300px;
  transform: rotate(-10deg);
  filter: grayscale(100%) brightness(97%)'
/>


<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:370px;
  left:270px;
  width:300px;
  transform:
    rotate(10deg);
  filter: grayscale(100%) brightness(97%)    '
/>

<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:350px;
  left:345px;
  width:300px;
  transform:
    rotate(40deg);
  filter: grayscale(100%) brightness(97%)    '
/>

<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:350px;
  left:465px;
  width:300px;
  transform:
    rotate(40deg);
  filter: grayscale(100%) brightness(97%)    '
/>


<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:410px;
  left:-90px;
  width:150px;
    filter: grayscale(100%) brightness(97%)
  ' />


<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:410px;
  left:0px;
  width:190px;
    filter: grayscale(100%) brightness(97%)
  ' />

<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:410px;
  left:-20px;
  width:190px;
    filter: grayscale(100%) brightness(97%)
  ' />


<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:410px;
  left:120px;
  width:190px;
    filter: grayscale(100%) brightness(97%)
  ' />
  
  
<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:390px;
  left:140px;
  width:190px;
    filter: grayscale(100%) brightness(97%)
  ' />



<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:380px;
  left:460px;
  width:190px;
    filter: grayscale(100%) brightness(97%)
  ' />
  
  

<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:390px;
  left:460px;
  width:190px;
    filter: grayscale(100%) brightness(97%)
  ' />



<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:400px;
  left:650px;
  width:190px;
    filter: grayscale(100%) brightness(97%)
  ' />
  
  
<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:420px;
  left:610px;
  width:100px;
    filter: grayscale(100%) brightness(97%)
  ' />
  
<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:420px;
  left:280px;
  width:100px;
    filter: grayscale(100%) brightness(97%)
  ' />  

<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:420px;
  left:380px;
  width:100px;
    filter: grayscale(100%) brightness(97%)
  ' />  
  
  
<img 
  src='https://www.gmbinder.com/images/IQENPZX.png' 
  style='position:absolute;
  bottom:420px;
  left:300px;
  width:190px;
    filter: grayscale(100%) brightness(97%)
  ' />

\pagebreakNum

# Standard Combat Actions

<div style="margin-top:-0px;"></div>

### Grappling

When using the Grapple action (*Player's Handbook*, pg. 195), the attacker's attack roll is no longer contested by the target's Strength (Athletics) check or Dexterity (Acrobatics) check, but is made against a DC equal to 10 +  Strength (Athletics) or Dexterity (Acrobatics) skill modifier of the target (its choice).

If the target has an advantage to resist a grapple the DC is increased by 3, or decreased by 3 if it suffers a disadvantage instead.

<div style="margin-top:-0px;"></div>

### Escaping a Grapple

Instead of your whole action (*Player's Handbook*, pg. 195), you may use any of your attacks to attempt an escape from grapple. To attempt an Escape, make a Strength (Athletics) or Dexterity (Acrobatics) check against the Passive Athletics (10 + Strength (Athletics) modifier) of the creature grappling you. If you succeed, you lose the Grappled condition. If your roll a natural 1 or your result is an exceptional failure, you fail and can't attempt any more Escape attempts until your next turn.

Grappled creatures with the Multiattack ability may use this ability as Multiescape instead. For each attack described as part of the Multiattack, they get one escape attempt. If the Multiattack includes more than one set of attacks, use the set with the most attacks. 

<div style="margin-top:-0px;"></div>

### Flanking

*Dungeon Master's Guide* (pg. 251) introduces flanking as an easy way to gain advantage and exploit a common enemy. 

To make it more realistic, at the beginning of your turn while being flanked you may choose one of the attackers that are flanking you and deny them the benefit of flanking until the start of your next turn. You can choose a different attacker that is flanking you during each of your turns.

<div style="margin-top:-0px;"></div>

### Disarming

When using the Disarm action (*Dungeon Master's Guide*, pg. 271), the attacker's attack roll is no longer contested by the target's Strength (Athletics) check or Dexterity (Acrobatics) check, but is made against a DC equal to 10 + Strength

___
\columnbreak

 Saving Throw or Dexterity Saving Throw modifier of the target (its choice).

The attacker has advantage on their attack roll if they grappled using Opportunity Grapple (pg. [19](#p19)) or with a weapon with the Grappling property (pg. [36](#p36)) or if they are larger than the target. The attacker has disadvantage on their attack roll if the target is holding the item with two or more hands, or if they are smaller than the target. 

If you succeed, the weapon, shield or item is no longer held by the target. You can use your item interaction to either kick the weapon into an adjacent area (your choice) or take the item if you have a free hand, otherwise the target may use its item interaction on their turn to take it back.

<div style="margin-top:-5px;"></div>

### Marking

The *Dungeon Master's Guide* (pg. 271) introduces marking as a way to harry each other with opportunity attacks. This rule overrides the original effect.

When you use the Mark action, you gain a second reaction that can only be used for opportunity attack provoked by your marked target, and only this attack benefits from advantage.

However, you cannot perform reactions against any hostile creatures other than your marked target until the end of your next turn.

<div style="margin-top:-5px;"></div>

### Overrun & Tumble

The *Dungeon Master's Guide* (pg. 272) introduces Overrun and Tumble as a way to pass through hostile creature's space. 

By spending an action or a bonus Action, you are able to pass through hostile creatures as part of your movement. If you succeed, you do not provoke an Opportunity Attack when leaving the hostile creature's reach that you passed through.

If you fail your check, you may still choose to pass through hostile creature's space. If you choose so, treat the space as difficult terrain and you provoke an Opportunity Attack or a Grapple check from the hostile creature (their choice). If you miss by 5 or more, you are denied this option. 

If you attempt to move through more than one hostile creature per turn, all checks after the first are made at disadvantage. 

<img src='https://www.gmbinder.com/images/mMe4kUi.png' style='position:absolute; bottom:-170px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-155px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />

\pagebreakNum

# Combat Options

___
Combat Options are common martial techniques available to anyone of any class. You can perform Combat Options only if you are proficient with the weapon you are wielding. 

Combat Options with the <img src="https://img.icons8.com/ios/14/000000/action-filled.png"> icon take your whole Action. Options with <img src="https://img.icons8.com/material/14/000000/sword.png"> replace one of your Attacks and if you can make multiple attacks only one can be used as a Combat Option. Options with <img src="https://img.icons8.com/material/14/000000/exercise.png"> use your Movement. Options with <img src="https://img.icons8.com/material/16/000000/conflict.png"> can be used anytime you can use your reaction. Options with <img src="https://img.icons8.com/windows/16/000000/high-priority.png"> can be used instead of an opportunity attack.

Combat Options with <img src="https://img.icons8.com/metro/12/000000/icosahedron.png"> icon allow classes with access to superiority dice to spend a die and add its total to both Attack and Damage roll.

## Melee Strikes

#### Power Attack <img src="https://img.icons8.com/material/16/58180d/sword.png"> <img src="https://img.icons8.com/metro/14/58180d/icosahedron.png"> (not Finesse)

Before you make an attack with a melee weapon, you can choose to take a -5 penalty to the attack roll and attempt to put more of your raw strength behind a powerful blow. 

If the attack hits, you add 2 + your Strength modifier (minimum 1) to the attack's damage. 

<div style="margin-top:-5px;"></div>

#### Feint <img src="https://img.icons8.com/material/16/58180d/sword.png"> <img src="https://img.icons8.com/metro/14/58180d/icosahedron.png"> (Finesse)

Before you make an attack with a finesse melee weapon that you are proficient with, you can spend your bonus action and perform a feint to deceive your target.

Make an attack roll opposed by the target's Passive Insight. If you succeed, you have advantage on your next attack and you benefit from Dominance against your target until the start of your next turn. If you fail you have disadvantage on the next attack roll and you cannot succeed a Feint against this target for the rest of the encounter.

<div style="margin-top:-5px;"></div>

#### Shove / Trip <img src="https://img.icons8.com/material/16/58180d/sword.png"> <img src="https://img.icons8.com/windows/16/58180d/high-priority.png"> <img src="https://img.icons8.com/metro/14/58180d/icosahedron.png"> (Reach or Polearm)

While wielding a melee weapon with the Reach property, or any Polearm weapon, you can spend one of your attacks to perform the Shove a Creature action (see *Player's Handbook* pg. 195) without the need of a free hand. Make an Attack roll instead of a Strength (Athletics) check.

<br><div style="margin-top:-18px;"></div>

>
>##### Realistic Stand from Prone
>
>Rising from a throw or fall is a difficult thing in the heat of battle. It takes training and skill to do so very quickly and even more so when faced with an aggressive adversary. 
>
>Standing provokes an opportunity attack from all threatening creatures unless you make a Dexterity (Acrobatics) or Strength (Athletics) skill check at DC 10 + 2 for each enemy engaged with you. If any opportunity attack roll beats your AC by 10 or more, you remain prone.
>
>Creatures that are knocked prone usually fall in supine position. In order to attempt a Strength (Athletics) saving throw to stand up, they must spend an additional 5 ft movement to turn around. 
>
>If you beat the Stand from Prone DC by 5 or more, you may also choose to tumble 5 feet into unoccupied space and stand up there.

\columnbreak

<div style="margin-top:548px;">&nbsp;</div>

>##### New Condition: Dominance
>
>When you have advantage on your attack rolls against your target and your target doesn't have the same benefit against you, or a hostile creature that attacks you has disadvantage to its attack rolls and you don't suffer the same penalty, this condition is called having Dominance. You also benefit from Dominance if your target is standing on difficult terrain while you are not, or you hold the higher ground position on steep terrain.
>
>Some Combat Options (pg. [18-21](#p18)) and Melee Weapon Properties (pg. [35-37](#p34)) require Dominance as prerequisite for their use during combat. Some combat options or abilities may also allow you to benefit from Dominance even if the conditions above are not met. 
>
>If your game uses Critical Hits (pg. [91, 93](p#91)), the DM can limit Critical Hit effects only while you have Dominance over your target.


<img
   src='https://www.gmbinder.com/images/xx63o7z.png'
   style='position:absolute;bottom:00px;left:170px;height:1070px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreakNum

<div style="margin-top:-0px;"></div>

#### Stagger <img src="https://img.icons8.com/material/16/58180d/sword.png"> <img src="https://img.icons8.com/metro/14/58180d/icosahedron.png"> (Bludgeoning)

Before you make a melee attack with a bludgeoning  weapon, you can choose to take a -5 penalty to the attack roll and try to disrupt the movement of your target while attacking.

If the target takes damage, the target's movement speed <br>is reduced by 10 until the end of its next turn. If its speed is reduced to 0 in this way, it immediately drops prone. Until the target recovers its movement speed to full it cannot use the Dash, Disengage and Dodge actions. 


## Melee Reactions

<div style="margin-top:-0px;"></div>

#### Deflect <img src="https://img.icons8.com/material/16/58180d/conflict.png"> <img src="https://img.icons8.com/metro/14/58180d/icosahedron.png"> (not Finesse)

When a creature that you can see declares a melee attack against you and you have Dominance over your target, you may use your reaction to attempt to deflect the attack. You can attempt to deflect only before damage is rolled. Attacks by Flexible weapons (such as flails) cannot be deflected.

If you do and you are proficient with the weapon that you are currently wielding, roll your weapon damage dice without any modifiers. The damage is reduced by that result.

**Riposte.** If your weapon has the Parry property and your Deflect result negates all attack damage, you can follow up with a single melee attack against the same target.

<div style="margin-top:-0px;"></div>

#### Counter <img src="https://img.icons8.com/material/16/58180d/conflict.png"> <img src="https://img.icons8.com/metro/14/58180d/icosahedron.png"> (Finesse or Parry)

When a creature misses you with a melee attack by 10 or more and you have Dominance over it, you may use your reaction to perform a single melee attack against that creature. You cannot Counter while using the Dodge action.

<div style="margin-top:-0px;"></div>

#### Raise Shield <img src="https://img.icons8.com/material/16/58180d/conflict.png"> 

If you are wielding a shield and another creature hits you with a melee attack you may use your reaction to interpose your shield between yourself and the attack and increase <br>your AC by 2 potentially causing the attack to miss you. Your shield is damaged in the process and suffers a -1 penalty to its AC each time you block in this fashion. If your shield's AC reaches 0, it is destroyed.

Magical shields self repair AC equal to their enchantment bonus each long rest and may block critical hits that meet the above criteria. 

<div style="margin-top:-0px;"></div>

#### Opportunity Grapple <img src="https://img.icons8.com/material/16/58180d/conflict.png">  <img src="https://img.icons8.com/windows/16/58180d/high-priority.png">  (Free Hand)

You use one of your free hands to reach out and attempt to grapple an opponent. 

Make a Grapple check (pg. 17). If this opportunity grapple is provoked by a movement and you succeed, both you and the opponent move 5 feet in the direction the target tried to move into and the target's speed becomes 0.

#### Give Ground <img src="https://img.icons8.com/material/16/58180d/conflict.png"> <img src="https://img.icons8.com/metro/14/58180d/icosahedron.png">

When you are hit with a melee attack and you haven't moved during your last turn, you can use your reaction to move 5 feet away from the creature, reducing the damage you take by 1d6 points (minimum of 1), as long as your movement speed is greater than 0. This movement does not provoke an opportunity attack from the attacker, and the attacker may immediately follow you into the space you just left as a free action.

You cannot Give Ground while you are grappled by any creature, or knocked prone. You cannot Give Ground if <br>you are already on, or would walk into difficult terrain.

\columnbreak

## Ranged Actions

#### Aim <img src="https://img.icons8.com/material/16/58180d/exercise.png"> (Ranged Weapon) 

If your target hasn't moved during its previous turn, you can spend your movement to stand still, hold your breath and aim with a ranged weapon. Until the end of this turn, your next ranged attack against that target has advantage.

Aiming requires concentration. If you maintain spells requiring Concentration, Aiming causes them to end.

## Movement Actions

<div style="margin-top:-3px;"></div>

#### Charge <img src="https://img.icons8.com/material/16/58180d/exercise.png"> <img src="https://img.icons8.com/ios/16/58180d/action-filled.png"> <img src="https://img.icons8.com/metro/14/58180d/icosahedron.png">

When you or a mount you ride moves at least 20 feet towards a target, you may declare a charge attack as an action. You must have a clear path towards your target, and nothing should hinder your path (such as difficult terrain). If you finish your movement within reach of your target, you may use your action to follow it with one of these options:

**Strike.** You may make a single melee attack with advantage. The attack deals additional damage equal to the distance you charged divided by 5, up to your Strength or Constitution modifier (your choice, minimum of 1). If you are riding a mounted animal that provides the movement instead of you, you may use its Strength or Constitution instead your own.

**Slam.** You may perform the Shove action (*Player's Handbook*, pg. 195) with advantage. If you succeed, the creature is shoved twice the normal distance, or shoved as normal then knocked prone. You may choose to move up to five feet in the direction you are shoving your target. If you fail, you provoke an attack of opportunity from your target.

**Tackle.** You may make a single Grapple attempt with advantage. If the Grapple fails, you provoke an attack of opportunity from your target and are knocked prone. If you succeed, both you and your opponent are knocked prone and your target is subjected to the Grappled condition. 

<div style="margin-top:-3px;"></div>

#### Drive Back <img src="https://img.icons8.com/material/16/58180d/sword.png">

Using one of your Attacks, you attempt to force back a standing creature. The target must be no larger than you in size. Make a Charisma (Intimidation) check against DC 10 + the target's Wisdom (Insight) check. If you have Dominance over your target, you have advantage to your Intimidation check.

If you win the contest, the target backs away from you by 5 feet. As part of this attack, you can move 5 feet in the direction of the target. If you lose the contest, you provoke an attack of opportunity from the target or it may choose to use its reaction to perform a Drive Back action. 

#### Brace <img src="https://img.icons8.com/material/16/58180d/exercise.png">

You can spend your movement to move up to half your speed to a solid object and brace yourself for additional support. This requires the use of both hands. For as long as you maintain your grip, any checks to move you or knock you prone are made with disadvantage. Furthermore, saving throws to resist being moved or knocked prone are made with advantage. 

Once braced, you can maintain this effect as long as you do not release your grip or use your hands for anything else. If you are moved further than 5 feet away from the braced object, or knocked prone, the effect ends.

\pagebreakNum

<div style="margin-top:-15px;"></div>

#### Lunge <img src="https://img.icons8.com/material/16/58180d/sword.png"> (Piercing, not Heavy or Light)

If you have Dominance over your target, you can make a special melee weapon attack that extends the reach of your weapon by 5 feet. You provoke opportunity attacks from enemies within 5 feet of you. 

## Special Actions

<div style="margin-top:-6px;"></div>

#### Dirty Fighting <img src="https://img.icons8.com/material/16/58180d/sword.png"> (Free Hand)

Dirty fighting is a catch-all name for many socially rejected grappling techniques that exploit the opponent. 

If you have Dominance over your target, you can change one of your attacks into a dirty move from the list below. Engage in a contested Grapple check with your target. If you fail, you provoke an attack of opportunity from your opponent. If you succeed, apply the dirty move effect.

**Restrain.** The target is grappled and restrained by you.

**Headlock.** The target is grappled by you and suffocating (*Player's Handbook*, pg. 183) until the grapple is broken.

**Eyejab.** The target is Blinded until the end of its next turn. You may also Shove the creature as part of the Dirty Trick, but at disadvantage.

**Groin shot.** The target is Stunned until the end of its next turn. You may also Shove the creature as part of the Dirty Trick, but at disadvantage.

Once you use a dirty move against a target, you cannot succeed with the same trick again until end of combat.

<div style="margin-top:-6px;"></div>

#### Sunder <img src="https://img.icons8.com/ios/16/58180d/action-filled.png"> <img src="https://img.icons8.com/metro/14/58180d/icosahedron.png"> (Heavy or Sundering)

You can spend your action to deliver a series of blows aimed at chinks in a creature's armor or shield. Instead of damage to the target, you attempt to apply the Sundered condition to Heavy Armor (or a component with the Hard property, if you use Realistic Armors, pg. [28](#p28)). Flexible armors such as chain mail, and materials such as leather cannot be Sundered.

Make a single melee attack against the target, and you get advantage to that attack. If it hits, roll for damage. You cannot apply class abilities or spells that award extra damage dice such as Smite or Sneak Attack. For each extra attack you can do in a round, add 2 to the damage. If the target is Grappled or Prone, add 2 to the damage for each condition. If your weapon has the Sundering property, add 5 to the damage. 

If the damage total is equal to or higher than the creature's armor Hardness (the hardness of Iron and Steel is 19, for others check the *Dungeon Master's Guide*, pg. 246), you sunder the armor or shield (your choice). Sundered armor or shields decrease their bonus to AC by 2 until repaired. Sundered armor or shields cannot be sundered again. For optional rules, check Armor Degradation (pg. [31](#p31)).

You can also sunder smaller items if held in a hand (up to DM's decision) but the Sunder attack roll must be made at disadvantage.

<div style="margin-top:-6px;"></div>

#### Body-Shield <img src="https://img.icons8.com/material/16/58180d/exercise.png"> (Restrained Target)

While a creature is Restrained or Pinned (pg. [14](#p14)) by you, you may use half your movement to make a Grapple check against that creature in order to position it in such a way that it shields you from one or more hostile creatures that you are aware of. If the creature is of your size it provides half cover and +2 AC, or, if the creature is one size larger than you, three-quarters cover and +5 AC.

If the creature you shield yourself with becomes stunned, paralyzed or unconscious, when attacked make a Strength (Athletics) check at DC 15 plus 5 for each size category above yours. On a failure, you do not benefit from the cover.

\columnbreak

<div style="margin-top:535px;">&nbsp;</div>

>##### Option: Fighting Styles
>
>Players may be overwhelmed by the amount of Combat and Stealth Actions in this book. To avoid confusion and choice paralysis during combat, you can help your players by using Fighting Style.
>
>Fighting Styles are a set of Combat Options that a creature has been trained to use in combat. Every time a creature learns a Fighting Style, or gains the Extra Attacks feature from its class progression, it learns one Combat Option. Anytime they level up or spend 15 or more downtime days in training, players can change one or several options in their Style. A few examples are below:
>
><div style="margin-top:10px;"></div>
>
>___
>**Brute:** Power Attack, Charge, Sunder<br>
>**Duelist:** Feint, Deflect, Counter<br>
>**Bandit:** Feint, Trip, Dirty Fighting<br>
>**Assassin:** Dirty Fighting, Silent Grapple, Distraction
>
><div style="margin-top:10px;"></div>
>
>Enemies and villains should also get Fighting Styles. Minions should be limited to 1 or 2 options, while important NPCs and villains get a full Fighting Style. Include the descriptions of the combat options in your enemy statblock notes the way you would include creature abilities.

<img
   src='https://www.gmbinder.com/images/SKkka2E.png'
   style='position:absolute;bottom:00px;left:130px;height:1070px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreakNum

<div style="margin-top:-16px;"></div>

## Stealth Actions

#### Distraction <img src="https://img.icons8.com/ios/16/58180d/action-filled.png">
While you are hidden from a creature, you throw a pebble or make a sound meant to confuse and distract them. You must be aware of the creature's approximate location or direction of movement. Make a Dexterity (Sleight of Hand) or Charisma (Performance) check depending on your distraction method, contested by Wisdom (Insight) or Intelligence (Investigation) check (the targets choose the ability to use). If the creatures is alert, Passive Insight or Passive Investigation applies.

If you succeed, the creature is Distracted until the end of its next turn. Distracted creatures have disadvantage to Wisdom (Perception) skill checks and cannot use their Passive Perception. You have advantage on attacks and grapple checks against any Distracted creature, and if grappled while Distracted it is Surprised until the end of its next turn. 

If you fail, you provoke a Wisdom (Perception) check with advantage from your targets opposed by your Dexterity (Stealth) skill. Your Passive Stealth (pg. [25](#p25)) does not apply.

<div style="margin-top:-6px;"></div>

#### Stealth Grapple <img src="https://img.icons8.com/material/16/58180d/sword.png">
While you are hidden from your target, as long as your Stealth check total or Passive Stealth are above the Passive Perception of all nearby targets, you can come out of stealth and perform a Grapple check with advantage. If you succeed, you may use your reaction to follow it with one of the following effects. If you fail, you provoke an attack of opportunity or grapple of opportunity from your target.

The chosen effect applies as long as the stealth grapple is maintained. While maintaining it, creatures other than your target have advantage on attack rolls against you, and you have disadvantage on Dexterity saving throws.

**Gag.** You attempt to gag the target's mouth to prevent it from making any sound. Make another Grapple check with your target. On a success, the target is gagged until the grapple ends. A gagged creature cannot cast spells with verbal components and its speech is muffled and difficult to understand.

**Choke Hold.** You try to grab the creature by the throat and prevent it from breathing. Make another Grapple check with your target. you have disadvantage on your roll. On a success, the target is also gagged and suffocating until the grapple ends. (*Player's Handbook*, pg. 183).

**Silent Takedown.** If your target is already grappled and gagged, you may attempt to strike it with a weapon with the Finesse or Concealed property. Make a Grapple check to maintain the hold on your target. If you succeed, you can make a single special melee attack. Your target has vulnerability towards the damage dealt by that attack.

<div style="margin-top:-6px;"></div>

#### Stealth Drag <img src="https://img.icons8.com/material/16/58180d/exercise.png">
While you are grappling a creature that is unable to speak, you may attempt to return to stealth. The Stealth check is made at disadvantage. On a success,the movement speed penalty from dragging a grappled creature does not apply.

<div style="margin-top:-6px;"></div>

#### Coup de Grace <img src="https://img.icons8.com/material/16/58180d/sword.png">
When you make an attack that qualifies as an automatic critical hit against a defenseless target, roll a regular Attack roll. If you hit the target's AC minus Dexterity modifier, the creature takes damage equal to its current HP and is dying.

If you miss, the creature instead takes damage equal to half its current HP.

\columnbreak

<div style="margin-top:810px;">&nbsp;</div>

>##### Hitting Covers
>
>If an attack misses a creature only due to an AC bonus from cover, the attack hits said cover. If that cover was another creature, that creature suffers the effects of the attack.


<img
   src='https://www.gmbinder.com/images/RtwDhQX.jpg'
   style='position:absolute;bottom:00px;left:310px;height:1070px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreakNum

# Mapless Combat

___
Theatre of the Mind combat are intense, exciting and very fast. They can bring a lot of emotion to your most violent encounters, without the use of a grid or miniatures.

### Ranges

In Theatre of the Mind there are only two ranges to keep track of: **Near** and **Far**.

The **Near** range comprises everything that you can reach by using a single Move Action of approximately 30 feet. All creatures and things that are Near to each other comprise a Combat Zone. A pirate ship, for example, could be divided into multiple Combat Zones. 

<img src='https://www.gmbinder.com/images/H5DlFyo.png' class='image-location-top-right-bottom-left' style="width:400px;z-index:-2;margin-left:-50px;margin-top:-00px">

Beyond that, everything is considered to be in the **Far** range, without the need to measure exact distances between them. Each Combat Zone is considered to be Far from the rest.

### Freedom of Movement

During your turn, you can move anywhere within Near range. In order to move Far and enter another Combat Zone you must spend an Action to Dash.

Combat Zones that are very distant from each other can be described by a DM as **Very Far**. For each **Very** attached to it, an additional Dash action is needed to reach that zone.

### Rules of Engagement

In order to attack a creature with a melee weapon, it must be Near and you must **Engage** that creature. You must use your Move action to approach that creature and declare that you become Engaged with each other in combat. When you do so, it instantly becomes Engaged with you. While Engaged with a creature in combat, you can perform melee attacks against it and impose disadvantage to ranged attacks and spells.

You also end up Engaged with multiple creatures if these creatures decide to become Engaged with you as part of their movement, in their turn.

If you're already Engaged, attempting to become Engaged with another creature will break your current engagements. You also break your current engagements when you Dash to exit the Combat Zone or Engage another creature. Doing so provokes Opportunity Attacks against you from the creatures you were Engaged with, unless you Disengage them first.

While Engaged, you're still free to move around as you wish, without that affecting any of your engagements. The creature you're Engaged with can track you around and maintain engagement, if they choose to do so.

\columnbreak

### Tactical Movement

During Theatre of the Mind combat, you can perform three different types of action: Engage, Dash and Intercept. With the exception of Dash, all other actions in combat work as described in the *Player's Handbook* (pg. 192).

<img src='https://www.gmbinder.com/images/yX1h7aJ.png' class='image-location-top-right-bottom-left' style="width:295px;z-index:-2;margin-left:10px;">

#### Engage (Move)

While not engaged, you can Engage a creature by simply Moving into it and declaring engagement. If you are Engaged, you can use a bonus action and become Engaged with an additional Near creature of your choice, without breaking your current engagements. However, this engagement attempt can be Intercepted by another unengaged creature.

#### Dash (Action)

You need to Dash in order to move Far. If you do so, you can become Engaged with a creature from another Combat Zone as part of your Dashing, but this attempt can be Intercepted normally.

You can also Dash into a Near creature to become Engaged with it without the opportunity of being Intercepted by any of its Near allies.

When you Dash, you break all your current engagements, and provoke Opportunity Attacks from all Engaged creatures. Unless otherwise stated, a successful hit from an Opportunity Attack doesn't stop your Dash.

#### Intercept (Reaction)

If you are unengaged and any Near creature tries to become Engaged with one of your Near allies, you can immediately use a Reaction to Intercept, forcing it to become Engaged with you instead. 

You can still make Opportunity Attacks against a creature that you Intercepted, if it breaks the engagement with you on the same turn.

If you are Engaged with a creature and it Disengages, you cannot Intercept it until the end of its turn. You also won't be able to Intercept an engagement attempt if a Near creature Dashes into one of your Near allies

\pagebreakNum

### Terrain and Cover

In order to interact with terrain or objects and activate or disrupt their effects (e.g. opening Doors, operating Trap Devices, or getting into Cover), you must become Engaged with them. Being Engaged with Cover grants the usual bonuses to Armor Class until you break the engagement.

If a creature attempts to Engage with a terrain feature, it can be Intercepted as usual, unless the creature Dashes.

<div style="margin-top:-5px;"></div>

### Move Advantage & Disadvantage

Every core Race is considered to have the same movement range while in combat. If you have any Class Feature that increases your movement speed (e.g. Monk's *Unarmored Movement*, Barbarian's *Fast Movement* and Druid's *Wild Shape* as a Wolf) or other effects that raise your movement speed temporarily (e.g. Haste Spell, Potion of Speed) grant you the benefits of **Movement Advantage**. Having Movement Advantage allows you to Dash as a Bonus Action. Multiple Class Features that increase your movement speed, such as those gained through multiclassing, don't ever stack.

If you already have a Class Feature that allows you to Dash as a Bonus Action, and yet you also get the benefits of Movement Advantage, they stack: You're now able to Dash once per turn for free as part of your normal movement, Dash again as a Bonus Action, and Dash once more as an Action.

Effects that reduce your movement speed temporarily (e.g. *Difficult Terrain*, *Prone*) impose **Movement Disadvantage**. Having Movement Disadvantage means you cannot usually Dash at all. If you have a Class Feature that specifically allows you to Dash as a Bonus Action, you are able to Dash normally by using an Action instead. You can still move Far by spending your entire turn moving, and you cannot become Engaged with anything as part of this movement.

<div style="margin-top:-5px;"></div>

### Weapon Range & Reach

If an Engaged creature attempts a melee attack against another armed with a weapon with wider Reach, it must spend a bonus action to step forward, or attack with disadvantage.

The range of weapons should be converted from their value in feet into Near and Far. If the original range of a weapon is 30 feet or less, it can only affect Near targets. If the range is beyond that, it can also affect Far targets. It's up to the DM to decide if something is too far to be hit. For example: a dagger range is 20/60, so it can be thrown at Near creatures, and also thrown at Far creatures with disadvantage.

A creature with a reach weapon (or natural reach) can perform Opportunity Attacks with advantage against other Near creatures. 

<div style="margin-top:-5px;"></div>

### Spell Range & Area of Effect

The range of spells should be converted following the same method used for ranged weapons. Spells that require touch can be targeted at any Near creature. If the spell requires a melee spell attack, you must be engaged with the target. 

Example spells: *Shocking Grasp*’s range is listed as Touch, so it can affect only Near creatures; it is also a spell attack, so it requires engagement. *Fireball*’s range is listed as 150 feet, so it can affect Near or Far creatures. *Lightning Bolt*’s range is listed as Self (100-foot line). Since the area size is beyond 30 feet, it can affect either Near or Far creatures.

\columnbreak 


<img
   src='https://www.gmbinder.com/images/dhMHtFD.png'
   style='position:absolute;bottom:00px;left:250px;height:1070px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreakNum

<div style="margin-top:-10px;"></div>

### Adjudicating Areas of Effect

Area spells (and some Class Features and Feats) list their area shape and size in the description. To better adjudicate this, the area should be converted into the number of targets the spell can affect. All targets must be within a single Combat Zone.

When casting a spell, the caster simply chooses which targets are affected, within range. To convert the spell area into the number of targets that it can affect, check the table below (from *Dungeon Masters' Guide*, pg. 249). 

<div style="margin-top:-5px;"></div>

##### Targets in Areas of Effect
| Area  | Number of Targets |
|:---:|:-----------|
|  Line  | Length / 30 (round up) |
|  Cone  | Size / 10 (round up) |
|  Cube or Square  | Size / 5 (round up) |
|  Sphere or Circle  | Radius / 5 (round up) |
|  Cylinder  | Radius / 5 (round up) |

<div style="margin-top:-5px;"></div>

A creature that is Engaged with one or more of your allies counts as 2 targets when targeted by an area spell. This extra cost can be avoided if any one of those Engaged allies (at the caster's choice) is included in the area of effect as well. Allies included in the area of effect suffer the full effects of the spell, unless they are protected by the *Evoker's Sculpt* spell or another similar feature.

Area spell's range should be written down with the reach of the spell and how many targets it can affect.

<div style="margin-top:-10px;"></div>

* *Thunderwave:* Near 3
* *Fireball:* Far 4

<div style="margin-top:-10px;"></div>

Example spell: *Zone of Truth* range is listed as 60 feet and its area is listed as a 15-foot radius sphere. Firstly, the spell can affect either Near or Far creatures. Secondly, checking the table shows that a 15-foot radius sphere affects up to three targets. So it should be written down as Far 3.

\columnbreak

<div style="margin-top:20px;"></div>

### Casting While Engaged

When you spend your Action to cast a spell while Engaged by one or more opponents, all opponents get advantage on their first melee attack against you. This does not affect spells cast using your Bonus Action. 

<div style="margin-top:-3px;"></div>

### Flanking While Engaged

This rule overrides the Flanking rules in the *Dungeon Master's Guide* (pg. 251). If you are Engaged with an opponent that is also Engaged with at least one other creature friendly to you, you may spend your Move action and declare that you are Flanking the opponent until the start of your next turn. 

When any creature friendly to you makes a melee attack against the opponent you are Flanking, they can spend their Move action and get advantage on their melee Attacks until the end of their turn.

<div style="margin-top:-3px;"></div>

### Disarming While Engaged

This rule complements the Disarm rules present in the *Dungeon Master's Guide* (pg. 271). When you succeed at Disarming an opponent, the weapon becomes an object within the Combat Zone. The opponent can attempt to take their weapon only if they disengage first (either by Disengage or the Dash action) from all creatures they are currently Engaging. 

When you succeed at Disarming an opponent and you are also Grappling them, you may attempt to grab their weapon from their hand. Doing so breaks the Grapple and you must make a Dexterity (Sleight of Hand) skill check opposed by your opponent's Strength (Athletics) skill. If you succeed, you take the weapon with the same free hand used for grappling. If you fail, the opponent is still disarmed but you fail to grab their weapon.

<img src='https://www.gmbinder.com/images/mHKxsX3.png' style='position:absolute; bottom:-90px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-290px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />

\pagebreakNum

# Stealth 

### Passive Perception

Your innate ability to automatically notice important things in your surroundings without a skill roll can act as a minimum result to your Active Perception rolls. For that to happen, you must declare that you are "Alert for...", followed by descriptor of what you are actively looking for: enemies, secret doors, peculiar behavior in a crowd, or other things. While you are Alert, if the DM requests a Perception skill check he may allow you to take a minimum value of 10 if the die roll is lower. The DM must also reveal information below the Perception DC if it matches the Alert descriptor.

In order to remain Alert, you must not engage in activities that require concentration such as talking (except simple commands), working, fighting, casting or maintaining a spell. Some DMs may want to enforce a rule that distracted players engaged in small talk during play lose the Alert status, or even get disadvantage on their roll. 

Having special senses (such as heatsense or tremorsight) that complement Perception add +3 to Passive Perception for each applicable sense. This is separate from advantage (+5) or disadvantage (-5) modifiers to Passive Perception.

<br> 

<div style="margin-top:-15px;"></div>

### Enemy Alertness

Enemy creatures have various levels of Alertness that affect their Passive Perception. High Alert creatures know they are in a dangerous situation and enemies could be nearby. Low Alert creatures guard their close vicinity but do not expect an immediate threat. Unaware creatures consider themselves completely safe in their environment. 

When enemy creatures engage in activities that requires concentration such as talking, eating, taking a leak,  etc. they temporarily lower their Alertness level to Unaware. 

##### Creature Alertness
| State  | Passive Perception |
|:---|:-----------|
|  High Alert  | 10 + Wisdom modifier + Proficiency, even <br>if they are not proficient in Perception  |
|  Low Alert  | 10 + Wisdom modifier + Proficiency if <br>they are proficient in Perception |
|  Unaware  | 10 + Wisdom modifier. Modifier value <br>can't be higher than 0, unless they are <br>proficient in Perception |

<br> 

<div style="margin-top:-15px;"></div>

### Hiding Clarification

To attempt a Hide action, you must declare one or several targets you are hiding from, and your targets must not be <br>able to see you clearly. You must be able to see or sense your targets' location at all times. If you are unable to locate your targets, your Dexterity (Stealth) checks are at disadvantage.

Your targets can see you clearly when you or any opponent you are Engaged with is in clear line of sight, and you are not Engaged with cover or inside a lightly (dim light) or heavily (darkness) obscured area. 

\columnbreak

#### Hiding While Invisible

While Invisible, you can forego your Movement action and gain advantage to Dexterity (Stealth) check to Hide . Also, you can use your Action to keep still and hold your breath. If you do, you can increase your Dexterity (Stealth) check total by your Proficiency. You must keep spending your Action to maintain this increase. 

<div style="margin-top:-5px;"></div>

### Maintaining Stealth

When you take the Move action at more than half your speed, or attempt to use an item (such as picking a lock) the DM may require a new Dexterity (Stealth) check that supersedes the previous Stealth value and is immediately compared to the Passive Perception of all enemy creatures. If you take the Dash action, or your movement happens in a lightly or highly obscured area, you don't have to make the check.

While hiding, you can Engage with cover that lets you benefit from your Passive Stealth value. Passive Stealth serves as a minimum result to your Dexterity (Stealth) check. If you are asked to reroll, you can choose between the check total or the Passive Stealth value of the cover you engage as part of the Movement or Dash action. The table provides example Passive Stealth values that the DM may use.

<div style="margin-top:-5px;"></div>

##### Passive Stealth
|  Value | Examples |
|:---:|:-----------|
|  8  | *Half cover.* Low wall, a large piece of furniture, a narrow column or a tree trunk, or a creature of a size larger than yours, whether enemy or friend.   |
|  12  | *Three-quarters cover.* Portcullis, an arrow slit, or a thick tree trunk. A small group of creatures, whether enemies or friends.|
|  16  | *Total-cover.* A large wall, massive statue, dense foliage. A large group of creatures, whether enemies or friends, such as busy street.  ||

<div style="margin-top:-5px;"></div>

You can use your Action to keep still and hold your breath while hiding behind cover. If you do so, you may add your Proficiency to the Passive Stealth value. You need to keep spending your Action to hold still to benefit from this increase.

If your cover is a moving object such as a street crowd, you must match its movement speed and direction. If you do, you remain Engaged with the cover and you do not provoke a new Dexterity (Stealth) check. The DM may require a Charisma (Persuasion or Deception) check to convince the crowd to not react to your presence, or Wisdom (Animal Handling) to not scare off animals.

> ##### Passive Stealth Modifiers
> Similar to Passive Perception, situational factors such as dim light or loud sounds increase cover's Passive Stealth with an advantage (+5) modifier.
> Alternatively, having two or more enemy creatures located on opposite sides of the cover decrease its Passive Stealth with a disadvantage (-5) modifier. 

\pagebreakNum

<div style="margin-top:30px;"></div>

# Starting Equipment

___
The following pages introduce a major overhaul of armor <br>and weapon in *Dungeons & Dragons*. To take advantage <br>of them while creating your character, use these updated equipment packs for each class. 

If a weapon proficiency is named after a table of weapons (such as Simple Blades or Martial Axes), you are proficient with all weapons in that table. If a weapon name or weapon property is listed in parenthesis, you are proficient with that weapon, or only the weapons that have the weapon property.

<br><div style="margin-top:-5px;"></div>

<img src='https://www.gmbinder.com/images/bC8rF4p.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Artificer

___  
**Armors:** All Jacks and Hauberks

<div style="margin-top:-10px;"></div>

___  
**Weapons:** All Simple, Simple Crossbows

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> any 2 Simple weapons

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> Light Crossbow and 20 bolts

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Leather Tunic (underlay) and Boiled Leather (overlay); <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an Aketon (underlay) and Chain Mail (overlay)

<img src="https://img.icons8.com/small/14/000000/circled-a.png">a thieves' tools and a dungeoneer’s pack

<br><div style="margin-top:-15px;"></div>

<img src='https://www.gmbinder.com/images/DClzxYi.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Barbarian

___  
**Armors:** All Jacks, Hauberks and Shields

<div style="margin-top:-10px;"></div>

___  
**Weapons:** All Simple and Martial.

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Greataxe; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any Martial Melee weapon

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> 2 Handaxes; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any Simple weapon

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> an Explorer's pack, and 4 javelins

<br><div style="margin-top:-15px;"></div>

<img src='https://www.gmbinder.com/images/f4ybPyx.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Bard

___  
**Armors:** All Jacks

<div style="margin-top:-10px;"></div>

___  
**Weapons:** All Simple, Martial (Finesse).

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Rapier; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> a Bastard Sword; <img src="https://img.icons8.com/small/14/000000/circled-c.png"> any Simple Weapon

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Diplomat's pack; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an Entertainer's pack

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Lute; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any musical instrument

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Leather Tunic (underlay), and a Dagger

<br><div style="margin-top:-15px;"></div>

<img src='https://www.gmbinder.com/images/LUGzlvL.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Cleric

___  
**Armors:** All Jacks, Hauberk and Shields

<div style="margin-top:-10px;"></div>

___  
**Weapons:** All Simple, Flexible (Flails), Martial Bludgeoning.

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> any Bludgeoning weapon; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> a Flexible (flail)

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Light Crossbow & 20 bolts,; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any Simple weapon

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Leather Tunic (underlay) and a Scale Mail (overlay); <img src="https://img.icons8.com/small/14/000000/circled-b.png">an Aketon (underlay) and Chain Mail (overlay); <img src="https://img.icons8.com/small/14/000000/circled-c.png">a Jack of Plates (underlay) and Light Cloak (cloak)

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Priest's pack; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an Explorer's pack 

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Shield, and a Holy symbol

<br><div style="margin-top:-15px;"></div>

\columnbreak

<div style="margin-top:-8px;"></div>

<img src='https://www.gmbinder.com/images/16i2Syv.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Druid

___  
**Armors:** All Jacks, Hauberk and Shields <br>(except made of metal)

<div style="margin-top:-10px;"></div>

___  
**Weapons:** All Simple, Martial Blades (Scimitar)

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> any wooden Shield; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any Simple weapon

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Scimitar; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any Simple melee weapon

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Leather Tunic (underlay), an Explorer's pack, and a Druidic focus

<br><div style="margin-top:-15px;"></div>

<img src='https://www.gmbinder.com/images/XdGuM5J.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Fighter

___  
**Armors:** All Armors and Shields

<div style="margin-top:-10px;"></div>

___  
**Weapons:** All Simple and Martial.

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> an Aketon(underlay) and a Chain Mail(overlay); <img src="https://img.icons8.com/small/14/000000/circled-b.png"> a Leather Tunic(underlay), a Longbow, and 20 arrows

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> any Martial weapon and a Shield; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any 2 Martial weapons

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Light Crossbow and 20 arrows; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> 2 Handaxes

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Dungeoneer's pack; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an Explorer's pack

<br><div style="margin-top:-15px;"></div>

<img src='https://www.gmbinder.com/images/GdhP2aP.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Monk

___  
**Armors:** None

<div style="margin-top:-10px;"></div>

___  
**Weapons:** All Simple, Blades (light), Flexible (chains), Polearms (all Spears), Other Martial Ranged (blowguns)

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Shortsword; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any Simple weapon

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Dungeoneer's pack; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an Explorer's pack

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> 10 darts

<br><div style="margin-top:-15px;"></div>

<img src='https://www.gmbinder.com/images/Haotb3R.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Paladin

___  
**Armors:** All Armors and Shields

<div style="margin-top:-10px;"></div>

___  
**Weapons:** All Simple and Martial. 

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> any Martial weapon and a Shield <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any 2 Martial weapons

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> 5 javelins; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any Simple melee weapon]

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Priest's pack; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an Explorer's pack

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Chain mail

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Holy Symbol


<br><div style="margin-top:-15px;"></div>

<img src='https://www.gmbinder.com/images/FJwnniw.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Ranger

___  
**Armors:** All Jacks, Hauberks and Shields

<div style="margin-top:-10px;"></div>

___  
**Proficiency:** All Simple and Martial. 

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Leather Tunic (underlay) and Scale Mail (overlay); <img src="https://img.icons8.com/small/14/000000/circled-b.png"> a Leather Tunic (underlay) and and Light Cloak (cloak)

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> 2 shortswords; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any 2 Simple melee weapons

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Dungeoneer's pack; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an Explorer's pack

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Longbow and 20 arrows

\pagebreakNum

<div style="margin-top:30px;"></div>

<img src='https://www.gmbinder.com/images/GaTIfuL.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Rogue

___  
**Armors:** All Jacks

<div style="margin-top:-10px;"></div>

___  
**Weapons:** All Simple, Martial (Finesse).

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Rapier; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> a Shortsword

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Shortbow and 20 arrows; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> a Shortsword

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Burglar's pack; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> a Dungeoneer's pack; <img src="https://img.icons8.com/small/14/000000/circled-c.png"> an Explorer's pack

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Leather Tunic(underlay), a Light Cloak (cloak), 2 Daggers, and thieves’ tools

<br><div style="margin-top:-15px;"></div>

<img src='https://www.gmbinder.com/images/hVbdljo.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Sorcerer

___  
**Armors:** None

<div style="margin-top:-10px;"></div>

___  
**Weapons:** Simple Blades, Simple Thrown Weapons, Simple Crossbows (Light), Simple Polearms (non-lethal)

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Light Crossbow and 20 bolts; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any Simple weapon

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a component pouch; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an arcane focus

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Dungeoneer's pack; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an Explorer's pack

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> 2 Daggers

\columnbreak

<div style="margin-top:30px;"></div>

<img src='https://www.gmbinder.com/images/AHnldLf.png' class='' style='float: left;width:55px;margin-top:-5px;margin-left:-50px;margin-right:-10px;'> 

##### Warlock

___  
**Armors:** All Jacks

<div style="margin-top:-10px;"></div>

___  
**Weapons:** All Simple Weapons, Martial Flexible (chains)

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Light Crossbow and 20 bolts; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> any Simple weapon

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a component pouch; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an arcane focus

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Scholar's pack; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an Dungeoneer's pack

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Leather Tunic (underlay), any Simple weapon, and 2 Daggers

<br><div style="margin-top:-15px;"></div>

<img src='https://www.gmbinder.com/images/cGdHIaS.png' class='' style='float: left;width:40px;margin-top:-5px;margin-left:-40px;'> 

##### Wizard

___  
**Armors:** None

<div style="margin-top:-10px;"></div>

___  
**Weapons:** Simple Blades, Simple Thrown Weapons, Simple Crossbows (Light), Simple Polearms (non-lethal)

<div style="margin-top:-10px;"></div>

___
**Equipment:**

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Quarterstaff; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> a Dagger

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a component pouch; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an arcane focus

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Scholar's pack; <img src="https://img.icons8.com/small/14/000000/circled-b.png"> an Explorer's pack

<img src="https://img.icons8.com/small/14/000000/circled-a.png"> a Spellbook

<br><div style="margin-top:-5px;"></div>

>##### Option: Poverty and Equipment
>
>Starting equipment assumes that all new characters have a Modest lifestyle and can easily afford quality equipment. If your character is among the poor, your access to equipment will be limited.
>
>Check Lifestyle levels and their descriptions on pg. [74](#p74). For each Lifestyle level below Modest, you lack access to one item of starting equipment of your or DM's choice.
>

<img src='https://www.gmbinder.com/images/uH0KfKM.png' style='position:absolute; bottom:0px; right:-50px; width:950px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-450px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />

\pagebreakNum

# Realistic Armor

<div class="memo2-top2" style="right:-20px;top:-100px">

##### Warning! Medieval Realism

These expanded rules are intended to accurately replicate medieval armor. Only<br> use them if your players prefer historical accuracy and customization over fantasy.

</div>

<div class='wide'>

<div style="margin-top:-0px;"></div>

##### Jack Components <font size="-1">(require Light Armor proficiency)</font>
| Armor | AC | Layer | Qualities | Strength | Wt | Price |
|:----:|:---:|:----:|:----:|:--:|:--:|:--:|:--:|
|Aketon|1|Underlay|Concealed, Soak (Bludgeoning)|—|8 lbs|10 gp|
|Leather Tunic|1|Underlay|Concealed, Soak (Piercing)|—|10 lbs|10 gp|
|Jack of Plates|1|Underlay|Concealed, Soak (Slashing)|—|18 lbs|10 gp|
|Gambeson|1|Underlay|Noisy|—|8 lbs|5 gp|
|Overcoat|—|Overlay|Coverage 1|—|3 lbs|5 gp|
|Boiled Leather|1|Overlay|—|—|3 lbs|35 gp|
|Padded Coif|—|Head|Coverage 1|—|1 lbs|5 gp|
|Padded Limb Guards|—|Hands|Coverage 1|—|2 lbs|5 gp|
|Light Cloak|—|Cloak|Stealthy|—|1 lbs|5 gp|

<div style="margin-top:5px;"></div>

##### Hauberk Components <font size="-1">(require Medium Armor proficiency)</font>
| Armor | AC | Layer | Qualities | Strength | Wt | Price |
|:----:|:---:|:----:|:----:|:--:|:--:|:--:|:--:|
|Lamellar Mail|—|Mesolay|Concealed, DR: 2/Bludgeoning|11|10 lbs|300 gp|
|Buff Coat|—|Mesolay|Concealed, DR: 2/Piercing|11|10 lbs|300 gp|
|Coat of Plates|—|Mesolay|Concealed, DR: 2/Slashing|11|10 lbs|300 gp|
|Hide Tunic|1|Overlay|—|—|2 lbs|2 gp|
|Padded Jack|1|Overlay|Bulky, DR: 1/Piercing|9|8 lbs|5 gp|
|Pelt Armor|1|Overlay|Bulky, DR: 1/Slashing|9|10 lbs|10 gp|
|Chain Shirt|2|Overlay|—|9|10 lbs|40 gp|
|Scale Mail|3|Overlay|Bulky, Noisy|11|35 lbs|40 gp|
|Breastplate|3|Overlay|Hard|11|10 lbs|390 gp|
|Half Plate|4|Overlay|Bulky, Hard, Noisy|13|30 lbs|740 gp|
|Chain Coif|—|Head|Coverage 2|—|8 lbs|40 gp|
|Steel Bracers|—|Hands|Coverage 1, Beatdown(1 bludgeoning)|—|2 lbs|10 gp|
|Spiked Bracers|—|Hands|Coverage 1, Beatdown(1d4 piercing)|—|4 lbs|15 gp|
|Fur Cloak|—|Cloak|Bulky, DR: 1/Bludgeoning|9|8 lbs|5 gp|
|Mail Cloak|1|Cloak|Bulky, Cumbersome, Noisy|11|40 lbs|100 gp|

<div style="margin-top:5px;"></div>

##### Cuirras Components <font size="-1">(require Heavy Armor proficiency)</font>
| Armor | AC | Layer | Qualities | Strength | Wt | Price |
|:----:|:---:|:----:|:----:|:--:|:--:|:--:|:--:|
|Banded Mail|—|Mesolay|DR: 3/Bludgeoning, Bulky, Noisy|13|20 lbs|450 gp|
|Loricated Mail|—|Mesolay|DR: 3/Piercing, Bulky, Noisy|13|20 lbs|450 gp|
|Brigandine|—|Mesolay|DR: 3/Slashing, Bulky, Noisy|13|20 lbs|450 gp|
|Ring Mail|3|Overlay|Bulky, Cumbersome, Noisy|13|30 lbs|20 gp|
|Chainmail|5|Overlay|Bulky, Cumbersome, Noisy|13|45 lbs|65 gp|
|Splint Mail|6|Overlay|Bulky, Hard, Noisy|15|50 lbs|190 gp|
|Full Plate|7|Overlay|Bulky, Hard, Noisy|15|55 lbs|1490 gp|
|Helm & Bevor|—|Head|Visor, Coverage 1|9|2 lbs|75 gp|
|Great Helm|—|Head|Visor(always lowered), Coverage 2|11|5 lbs|90 gp|
|Gardbraces & Faulds|—|Vitals|Coverage 2, Noisy|11|4 lbs|60 gp|
|Thigh Plates|—|Vitals|Coverage 1|11|1 lb|50 gp|

</div>

\pagebreakNum


<div class='wide'>

##### Shields

For description of the *Bashing, Cover, Free-Handed, Nonlethal* and *Worn* properties, see Melee Weapon Properties (pg. [35-38](#p35)).

| Name | Cost | +AC | Strength | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|:--|
|Buckler|5 gp|+1<img src="https://img.icons8.com/ios/12/000000/knight-shield-filled.png">|—|5 lb.|Bashing(1d4 bludgeoning), free-handed, light, nonlethal, worn|
|Shield, light|3 gp|+1<img src="https://img.icons8.com/ios/12/000000/knight-shield-filled.png">|—|5 lb.|Bashing(1d4 bludgeoning), light, nonlethal|
|Shield|10 gp|+2<img src="https://img.icons8.com/ios/12/000000/knight-shield-filled.png">|—|6 lb.|Bashing(1d6 bludgeoning), nonlethal|
|Shield, spiked|17 gp|+2<img src="https://img.icons8.com/ios/12/000000/knight-shield-filled.png">|—|11 lb.|Bashing(1d6 piercing)|
|Tower Shield|30 gp|+4<img src="https://img.icons8.com/ios/12/000000/knight-shield-filled.png">|13|45 lb.|Bulky, cover, heavy|

</div>


## Armor Layers

Medieval armor consists of protective layers that combined provide the Armor Class as well as additional qualities to the wearer. You may wear one armor component on each of the three layers, and one supplemental component on your Head, Hands and Vitals. Your Armor Class is equal to 10 plus the AC bonus provided by each worn armor component.

**Underlay** is the worn protection directly in contact with the body. It is usually soft and thick clothing that protects the skin from weapon materials. These components are easy to conceal under civil clothing and soak damage from powerful hits that manage to penetrate your external armor.

**Mesolay** is the worn protection on top of the *underlay* that is used to mitigate much of the damage from a blow that penetrates the Overlay. These components provide solid damage reduction to specific types of melee damage and are considered a secondary layer of a warrior's suit of armor.

**Overlay** is the worn protection on the outside, what a mere layman with no training would call armor. An *overlay* serves as an impenetrable carapace that stops much of the strength of the blow. The overlay is the main source of Armor Class. 

**Cloaks** is a supplementary layer that covers the body and protects from environmental hazards such as rain or snow, or provides consealment for the facial features, clothing (including light armor) and hands movement. 

**Head, Hands and Vitals** components are intended to protect your exposed head and limbs, or any gaps in the armor. Each provides a tiny bit of coverage that helps to protect from called shots and suffering open wounds.

___
\columnbreak

## Armor Frame

An armor’s frame determines its core materials and how the wearer's mobility is impacted. When wearing multiple armor components from different frames, the rules regarding the most rigid frame apply to your Dexterity bonus to armor. 

**Jack:** Requires Light Armor proficiency. This armor is flexible and easy to move in. Most are made of canvas or leather, often stiffened and reinforced in places. When you only wear a jack, add your Dexterity modifier to your AC.  

**Hauberk:** Requires Medium Armor proficiency. A hauberk is a shirt of armor that is still flexible enough to dodge blows, but restricts the wearer’s agility. The most common hauberk is made of interlocking links of steel or iron chain. When you wear a hauberk, your Dexterity bonus to armor is limited to +2 even if your Dexterity modifier is higher. 

**Cuirass:** Requires Heavy Armor proficiency. Formidable armour built around a rigid carapace protecting the wearer’s vital organs. The armor is uncomfortable when worn bare and needs an underlay to avoid chafing. When you wear a cuirass, do not add your Dexterity bonus to armor. You must deduct your Dexterity penalty if your Dexterity is below 10. 

Cuirass armor parts have a restrictive design tailored to specific body proportions, such as height and bulk. Typically, fitted armor is made by special order and requires an armor smith to make it usable for other wearers. There are three distinctive body shapes and the armor fitting depends on its previous wearer or is decided by rolling a 1d6: lean (1-2), stout (3-4), and athletic (5-6). If the wearer and armor's fit differ, the wearer takes disadvantage to Dexterity checks and saving throws. 

<div style="margin-top:20px;"></div>

>##### Magical Armors
>
>When you wear multiple armor components with magical enhancement bonus, the highest bonus among them applies to your Armor Class.
>
>Alternatively, the DM may allow each layer of armor to apply its enhancement bonus to its signature armor property:
>
>* **Underlay armor.** Soak prevents +1, +2 or +3 more damage if you take 10 or more damage. 
>* **Mesolay armor.** Damage Reduction prevents +1, +2 or +3 more damage of its associated type.
>* **Overlay armor.** Armor Class improves with +1, +2 or +3, as stated in the *Player's Handbook*.

<img src='https://www.gmbinder.com/images/yQJHhrL.jpg' style='position:absolute; bottom:-130px; right:-20px; width:850px; transform: scaleX(-1)' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-170px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />

\pagebreakNum

<img src='https://www.gmbinder.com/images/eMQvCQD.png' style='position:absolute; bottom:-130px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-160px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />

## Armor Properties

<br>

<div style="margin-top:-15px;"></div>

#### Beatdown

Check *beatdown* weapon property on pg. [35](#p35).

<div style="margin-top:-5px;"></div>

#### Bulky

Bulky armor is usually exposed and may draw attention or even intimidate others, or provoke the use of a *Heat Metal* spell from hostile spell-casters if made of metal. Bulky armor cannot be hidden from plain sight and you cannot benefit from the Concealed armor property while wearing any Bulky armor component.

Bulky armor has a Strength score requirement of 9 or more. If your Strength score is less than the requirement, your are considered to carry Medium Load (see pg. [60](#p60)) until you doff the armor.

Bulky armor imposes disadvantage on Strength (Athletics) and Dexterity (Acrobatics) checks to swim, climb, run, and similar activities. These penalties can be avoided if your Strength score is at least 2 points higher than the armor's Strength requirement.

Bulky armor impedes your initiative in combat. When you roll for Initiative, subtract 2 for each Bulky armor component you wear. Bulky armor also impedes your movement when standing from Prone. Add +1 to the Standing from Prone DC for each Bulky armor component you wear.

<div style="margin-top:-5px;"></div>

#### Concealed

This armor consists of protective reinforcement that can be inconspicuously worn under ordinary looking clothing. 

When only such armor is worn under clothes, the wearer appears unarmored unless an observer succeeds on a DC 15 Wisdom (Perception) check. If the observer has physical contact with the wearer, this check is made with advantage.

<div style="margin-top:-5px;"></div>

#### Coverage

When rolling to confirm Wound Risk at the end of combat turn, add the total Coverage bonus from all worn armor components to your Wound Confirmation roll. 

<div style="margin-top:-5px;"></div>

#### Cumbersome

Armors with the Cumbersome property do not distribute their weight across the whole torso. Wearing such armors for more than 8 hours results in prolonged shoulder and back fatigue, and you gain 1 level of Exhaustion. Armors made of mithral lose the Cumbersome property.

<br>

<div style="margin-top:-15px;"></div>

>
>##### The Order of Damage Reduction
>
>* Calculate weapon damage and note its damage type: bludgeoning, piercing or slashing.
>* If you have Damage Reduction for the same damage type, subtract it from the damage total.
>* If you have Soak for the same damage type, subtract 1 point if remaining damage is 10 or more.
>* If you have resistance to the damage type, you only take half of the remaining damage. 

\columnbreak

<div style="margin-top:0px;"></div>

#### Damage Reduction

After damage is calculated and before damage resistance (if any) is applied, reduce the damage taken by the amount of Damage Reduction.  

If multiple armor components provide Damage Reduction to the same damage type, they stack together. 


#### Hard

The armor is made of large hard plates making it vulnerable to the Sundering weapon property. When taking a long or full rest in Hard armor, you do not recover levels of Exhaustion. 

#### Noisy

This type of armor reduces your ability to move quietly, due to metal components striking against each other. When you wear Noisy armor, you suffer disadvantage on any Dexterity (Stealth) checks that you make to move silently. Other situations, such as hiding without movement or magical silence, are up to the DM.

#### Soak

After damage is calculated and Damage Reduction is applied but before damage resistance (if any) is applied, if the damage is 10 points or more reduce its amount by 1. 

#### Stealthy

Cloaks with the Stealthy property let you hide your face, shape and the contents of your hands. You benefit from advantage to Dexterity (Stealth) and (Sleight of Hand) checks to hide your identity (but not your presence) or items you are carrying in your hands. As long as you wear no Bulky Armor, you appear unarmored to others. 

#### Visor

Helmets with a protective visor provide additional protection to the face. The visor is optional (unless stated otherwise) and can be raised or lowered as a bonus action. 

While the visor is lowered, your face is hidden and you benefit from an additional +1 to AC. However the visor limits <br>the effective field of view. You suffer -2 to AC when attacked by creatures that you are not directly looking at, or did not attack or target with abilities and spells during your last combat turn.

You also suffer disadvantage on all Wisdom (Perception) skill checks to notice things out of your direct field of view. 

\pagebreakNum

<img
   src='https://www.gmbinder.com/images/QS3G8UJ.png'
   style='position:absolute;bottom:-140px;height:1200px;right:380px;transform:rotate(0deg);filter:opacity(100%)'
/>


<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:-0px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:330px;
  width:1270px;
  transform:
    scalex(1.12);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
  '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:430px;
  width:1270px;
  transform:
    scalex(1.12);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
  '
/>

___
\columnbreak

## Armor Degradation

During the heat of combat, armor is what keeps you alive. When used normally, armor only suffers minimal damage during combat. Cleaning and repairing is part of a long rest.

The only way armor can degrade is when not taken care for a long time (such as old leather armor or rusted metal plate) or when Sundered (pg. [20](#p20)) by enemies in combat. 

<div style="margin-top:-2px;"></div>

### Armor Conditions

##### Worn Out

The armor has not seen care in a long time, or recent repairs have failed. The leather is cracked and prone to tears, and the mail vest or plates are badly bent or barely holding together. When such armor is sundered, it suffers a -4 penalty to AC instead the usual -2 to AC (up to your total Armor Class).

Unless the condition is permanent, the armor can be fully repaired using repair parts worth 25% of the armor value, 1 hour of work and a successful DC 12 Leatherworker’s tools or Smith’s tools skill check. Access to a workshop or a smithy lets you double your proficiency modifier with this roll.

<div style="margin-top:-2px;"></div>

##### Sundered

The armor has been sundered in combat. Leather or mail is has large lacerations, and plate armor is bent or severed. The armor suffers -2 to AC when used.

The armor can be fully repaired using repair parts worth 25% of the armor value, 3 hours of work and a successful DC 15 Leatherworker’s tools or Smith’s tools skill check. Access to a workshop or a smithy lets you double your proficiency modifier with this roll.

<div style="margin-top:-2px;"></div>

### Permanent Armor Damage

When you make an attempt to repair a Sundered armor and you fail the check, it becomes Broken and unusable (except for spare parts).

However if the armor is not already Worn Out, you can turn the failure in a success but the armor suffers a permanent Worn Out condition that can no longer be removed. If the armor is also magical, you may also choose to permanently decrease its magical enhancement bonus by 1 instead of the armor suffering a permanent Worn Out condition. 

<div style="margin-top:-2px;"></div>

### Salvaging Repair Material

You can salvage spare parts from armors of the same type. If you are proficient with Leatherworker’s tools or Smith’s tools, you may spend 10 minutes to salvage repair parts worth 50% of armor's nonmagical item value. The salvaged armor is destroyed in the process.

<div style="margin-top:-2px;"></div>

### Armor Materials

Armors made of materials such as Mithril or Adamantine are usually harder to sunder. The DM may rule that the sunder damage roll must beat the armor's Hardness by a certain amount (for a steel weapon to sunder mithril armor, the damage roll must beat the armor’s Hardness by 5 or more) or that only weapons made of the same or harder material may sunder it (such as adamantine weapons).

\pagebreakNum

# Realistic Melee Weapons

<div class='wide'>

These expanded weapon rules are intended for advanced players looking for an authentic HEMA feel and tactical depth. Melee damage types are represented by icons: <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> for bludgeoning, <img src="https://img.icons8.com/ios/12/000000/archer-filled.png"> for piercing and <img src="https://img.icons8.com/ios/12/000000/sword-filled.png"> for slashing damage. 

<div style="margin-top:0px;"></div>

##### Unarmed Gear
Unarmed weapons increase your own unarmed strike damage by 1, and add weapon properties to it.

<div style="margin-top:-10px;"></div>

| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Glove, armored|2 gp|+1 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|1 lb.|Beatdown(1d6), finesse, free-handed, light, nonlethal, worn|
|Gauntlet, clawed|5 gp|+1 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|1 lb.|Beatdown(1d6), finesse, free-handed, light, vicious, worn|
|Knuckles, Brass|1 gp|+1 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|1 lb.|Concealed, beatdown(1d4) finesse, free-handed, light, nonlethal|

</div>

<div class='wide'>

<div style="margin-top:-17px;"></div>

##### Simple Axes
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Handaxe|5 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|2 lb.|Finesse, light, thrown (20/60)|
|Hatchet|3 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|1 lb.|Finesse, light, thrown (30/60)|

</div>

<div class='wide'>

<div style="margin-top:-17px;"></div>

##### Martial Axes
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Battleaxe|10 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|4 lb.|Sweeping, versatile(1d10)|
|Broadaxe|8 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|5 lb.|Sweeping, two-handed|
|Greataxe|30 gp|1d12 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|7 lb.|Heavy, slow, sweeping, two-handed, wounding|
|Maulaxe|25 gp|1d8 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|4 lb.|Sweeping, sundering(2), versatile(1d10)|
|Urgosh, dwarven|50 gp|2d4 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> <img src=https://img.icons8.com/ios/12/000000/sword-filled.png> <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|12 lb.|Heavy, double-sided, slow, sweeping, two-handed|
|Waraxe|7 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|3 lb.|Sweeping|

</div>

<div class='wide'>

<div style="margin-top:-17px;"></div>

##### Simple Blades
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Dagger|2 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|1 lb.|Finesse, light, thrown (20/60)|
|Dagger, punch|2 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|1 lb.|Concealed, finesse, light, vicious|
|Stiletto|5 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|1 lb.|Concealed, brutal, finesse, light|

</div>

<div class='wide'>

<div style="margin-top:-15px;"></div>

##### Martial Blades
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Curveblade, elven|50 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|7 lb.|Critical, finesse, parry, two-handed|
|Dagger, dueling|12 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|1 lb.|Finesse, light, parry|
|Dueling sword|10 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|1 lb.|Defensive, finesse, parry|
|Falchion|15 gp|2d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|8 lb.|Brutal, parry|
|Flamberge|50 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|6 lb.|Heavy, parry, slow, two-handed, vicious|
|Greatsword|50 gp|3d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png"> <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|6 lb.|Heavy, parry, slow, two-handed, wounding|
|Longsword|10 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png"> <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|3 lb.|Parry, two-handed|
|Rapier|25 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|Critical, finesse, parry|
|Sabre|25 gp|2d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|4 lb.|Finesse, mounted strike, parry|
|Scimitar|25 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|3 lb.|Finesse, light, mounted strike, parry|
|Shortsword|10 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|Finesse, light, opportunistic, parry|
|Sword, bastard|15 gp|2d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|6 lb.|Parry, versatile(1d10)|
|Sword, broad|5 gp|2d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|4 lb.|Parry|
|<div style="font-size:92%">Sword, double-bladed</div>|50 gp|2d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|10 lb.|Heavy, double-sided, parry, two-handed|

</div>

\pagebreakNum

<br>

<div class='wide'>

<div style="margin-top:0px;"></div>

##### Simple Bludgeoning Weapons
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Club|1 sp|1d8 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|2 lb.|Nonlethal|
|Hammer, light|2 gp|1d4 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|2 lb.|Finesse, light, thrown(30/60)|
|Greatclub|2 sp|1d10 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|10 lb.|Heavy, nonlethal, two-handed|
|Mace, light|5 gp|1d6 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|4 lb.|Finesse, light|
|Sap|1 gp|1d4 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|2 lb.|Brutal, concealed, finesse, light, nonlethal|

</div>

<div class='wide'>

<div style="margin-top:-5px;"></div>

##### Martial Bludgeoning Weapons
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Earthbreaker|40 gp|2d6 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|14 lb.|Heavy, slow, sundering(2), two-handed, wounding|
|Hammer, great|8 gp|1d10 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|9 lb.|Sundering (1), two-handed|
|Mace|7 gp|1d8 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|8 lb.|Sundering (2)|
|Maul|10 gp|1d10 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|10 lb.|Heavy, sundering (1), slow, two-handed, vicious|
|Morningstar|15 gp|1d8 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|4 lb.|Sundering(2), vicious|
|Warhammer|15 gp|1d8 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|2 lb.|Sundering (1), versatile(1d10)|

</div>

<div class='wide'>

<div style="margin-top:-5px;"></div>

##### Simple Polearms
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Crook|1 gp|2d4 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|5 lb.|Finesse, nonlethal, tripping, two-handed|
|Javelin|5 sp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|Fragile(5), sharp(1), thrown(30/120)|
|Longspear|5 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|9 lb.|Heavy, long, mounted strike, reach, sharp(1), threatening, two-handed|
|Quarterstaff|2 sp|1d6 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|4 lb.|Finesse, nonlethal, parry, versatile(2d4)|
|Spear|1 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|3 lb.|<div style="font-size:90%">Finesse, mounted strike, sharp(1), threatening, thrown(20/60), versatile(1d8)</div>|
|Spear, boar|5 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|8 lb.|Grappling, preventing, versatile(1d8)|
</div>

<div class='wide'>

<div style="margin-top:-5px;"></div>

##### Martial Polearms
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Boarding gaff|8 gp|2d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|8 lb.|Double-sided, grappling, hooked, tripping, two-handed|
|Glaive|20 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|6 lb.|Heavy, reach, sweeping, two-handed|
|Guisarme|12 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lb.|Heavy, long, reach, slow, threatening, tripping, two-handed|
|Halberd|20 gp|1d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png"> <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|6 lb.|Heavy, long, reach, slow, threatening, two-handed, wounding|
|Lance, combat|10 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|6 lb.|Limit(mounted), long, mounted strike, reach|
|Lance, light|7 gp|2d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|4 lb.|Finesse, limit(mounted), long, mounted strike, reach|
|Lance, great|20 gp|2d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lb.|<div style="font-size:95%">Heavy, limit(mounted), long, mounted strike, reach, slow, wounding</div>|
|Lucerne|15 gp|1d10 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|12 lb.|Heavy, long, reach, sundering(2), slow, threatening, two-handed|
|Pike|5 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|18 lb.|Heavy, long, reach, sharp(1), slow, threatening, two-handed|
|Pincer staff|15 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lb.|Grappling, long, preventing, reach, two-handed|
|Ranseur|25 gp|2d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|12 lb.|Disarming, heavy, long, reach, sharp(1), slow, threatening two-handed|
|Spear, hooked|2 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|3 lb.|Finesse, grappling, hooked, light, sharp(1), tripping, versatile(1d8)|
|Spear, talon|5 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|4 lb.|Disarming, finesse, sharp(1), versatile(1d8)|
|Spear, weighted|7 sp|2d4  <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|8 lb.|Finesse, parry, sharp(1), two-handed|
|Trident|5 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|4 lb.|<div style="font-size:96%">Disarming, finesse, sharp (1), threatening, thrown (20/60), versatile (1d10)</div>|
|Trident, great|12 gp|1d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|8 lb.|Disarming, sharp(1), slow, threatening, two-handed|

</div>



\pagebreakNum

<div style="margin-top:-30px;"></div>

<div class='wide'>

<div style="margin-top:-7px;"></div>

##### Simple Flexible Weapons
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Whip|2 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|3 lb.|Bypass, disarming, finesse, grappling, nonlethal, reach, restraining(hand), tripping, weak|
|Lasso|1 sp|—|5 lb.|<div style="font-size:92%">Breakable, bypass, finesse, grappling, restraining(body/legs), reach, thrown(20/60)</div>|
|Peasant Flail|8 gp|1d8 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|5 lb.|Bypass, two-handed|
|Scourge|1 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|1 lb.|Bypass, disarming, finesse, nonlethal|

</div>

<div class='wide'>

<div style="margin-top:-7px;"></div>

##### Martial Flexible Weapons
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Bolas|5 gp|—|2 lb.|<div style="font-size:96%">Breakable, bypass, finesse, grappling, restraining(legs), reach, thrown(20/60)</div>|
|Net|1 gp|—|3 lb.|Breakable, finesse, grappling, restraining(all/hand), thrown(5/15)|
|Net, barbed|20 gp|—|6 lb.|<div style="font-size:96%">Breakable, finesse, grappling, ongoing(1), restraining(all/hand), thrown(5/15)</div>|
|Chain, light|15 gp|1d4 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|5 lb.|<div style="font-size:89%">Breakable, bypass, finesse, grappling, restraining(hand), reach, tripping, two-handed</div>|
|Chain, spiked|25 gp|2d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lb.|Breakable, bypass, finesse, grappling, ongoing(1), reach, two-handed|
|Flail|10 gp|1d8 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|Bypass|
|Flail, dire|90 gp|2d4 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lb.|Bypass, double-sided, heavy, two-handed|
|Flail, heavy|15 gp|1d10 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lb.|Bypass, heavy, two-handed|
|Flail, staff|15 gp|2d4 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lb.|Bypass, parry, reach, two-handed|
|<div style="font-size:94%">Whip, combat</div>|5 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|3 lb.|<div style="font-size:95%">Bypass, disarming, finesse, grappling, reach, restraining(hand), tripping, vicious</div>|

</div>

<div class='wide'>

<div style="margin-top:-7px;"></div>

##### Other Simple Melee Weapons
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Plançon|10 sp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lbs.|Finesse|
|<div style="font-size:85%">Hook, prosthetic</div>|10 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|1 lb.|Disarming, worn|
|Pick, light|4 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|Finesse, light, sundering (1)|
|Scythe|18 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|4 lb.|Critical, fragile(4), slow, tripping, two-handed|
|Sickle|1 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|2 lb.|Finesse, fragile(6), light|
|<div style="font-size:94%">Stake, wooden</div>|-|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|-|Finesse, light|

</div>

<div class='wide'>

<div style="margin-top:-7px;"></div>

##### Other Martial Melee Weapons
| Name | Cost | Damage | Weight | Properties | 
|:----|:---:|:----:|:----:|:--|
|Garotte, wire|3 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|1 lb.|Finesse, grappling, light, suffocating, two-handed|
|Scythe, war|25 gp|2d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|10 lb.|Critical, heavy, long, reach, slow, sweeping, tripping, two-handed|
|<div style="font-size:95%">Warpick, horse</div>|5 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|mounted strike, sundering(2), versatile(1d8)|
|Warpick, foot|5 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|3 lb.|sundering(2), versatile (1d10)|

</div>

<img src='https://www.gmbinder.com/images/JzsTIB4.jpg' style='position:absolute; bottom:-30px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-90px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />



\pagebreakNum

# Melee Properties

___
Similar to Combat Options (pg. [18-21](#p17)), some weapon properties have <img src="https://img.icons8.com/ios/14/000000/action-filled.png">, <img src="https://img.icons8.com/material/14/000000/sword.png"> and <img src="https://img.icons8.com/material/16/000000/conflict.png"> icons. You can benefit from these properties only if you are proficient with the weapon.

Weapon properties listed in the *Player's Handbook* are only included if they have additional rules.

#### Bashing <img src="https://img.icons8.com/material/16/58180d/sword.png">

You may attack with a shield with the bashing property as though it were a weapon, rolling the damage dice shown in parenthesis.

<br><div style="margin-top:-20px;"></div>

#### Beatdown <img src="https://img.icons8.com/material/16/58180d/sword.png">

You can use one of your attacks to make a special unarmed attack beating down on a defenseless target. 

If your target is either restrained, or is both grappled and prone, you may choose to beat it down with a special melee attack that deals additional damage of the same type as shown in parenthesis. 

#### Breakable

The weapon has AC and HP values and can be attacked with melee attacks as long as the weapon is grappling you (see Grappling property). You may also be allowed a Strength check to break the weapon. Common breakable objects are:

<div style="margin-top:-10px;"></div>

* **Net.** AC 10 and HP 5. Immune to bludgeoning and piercing damage. Can also be broken with a DC 12 Strength check but if the Net is Barbed, you take 2d4 piercing damage breaking it.
* **Bola or Lasso.** AC 10 and HP 5. Immune to bludgeoning and piercing damage. Can also be broken with a DC 12 Strength check. 
* **Chain.** AC 10 and HP 10. Immune to piercing damage. Takes no damage from attacks dealing 5 damage or less. Can also be broken with a DC 20 Strength check. 

<div style="margin-top:-10px;"></div>

Once broken, weapons immediately release their grapple with their target and unless held by you they drop to the ground.

<br><div style="margin-top:-20px;"></div>

#### Brutal

Weapons with the Brutal property deal devastating critical hits. When you score a critical hit, you add one additional weapon die to the damage total.

<br><div style="margin-top:-20px;"></div>

#### Bypass

Flexible weapons with the Bypass property are unaffected by directly blocking the blow. These weapons ignore the AC bonus from shields. The target can still use the Raise Shield combat action (pg. [19](#p19)) to make your attack miss.

<br><div style="margin-top:-20px;"></div>

#### Concealed

Weapons with the Concealed property can be hidden from plain sight until wielded or used. You can use your Dexterity (Sleight of Hand) skill to hide the weapon. 

If the weapon does not have the Light property, anyone who uses Wisdom (Perception) check to detect the weapon may benefit from Passive Perception.

\columnbreak

<div style="margin-top:435px;">&nbsp;</div>

>##### Weapon Mastery
>
>Some weapon properties allow your target to resist your attacks or find weakness in your stance. In such a situation, the target must make a skill check against your Weapon Mastery DC.
>
>You can add your Proficiency to the Weapon Mastery DC only if you are proficient with the weapon you are wielding.
><br><div style="margin-top:0px;"></div>
>
>##### <div style="font-size:85%"><div style="text-align: center"> Weapon Mastery DC = 8 + Proficiency + Strength (or Dexterity Modifier,<br>if their weapon has Finesse) </div></div><br><div style="margin-top:-0px;"></div>
>
>##### Realistic Nonlethal Damage
>
>All weapons may be used to deal Nonlethal strikes, but they deal bludgeoning damage equal to 1 plus Strength instead of their typical value. Only listed weapons with the Nonlethal property can deal their full damage as nonlethal. All improvised Weapons have this property if they do bludgeoning damage. 
>
>Critical hits dealt with weapons without the Nonlethal property cannot deal nonlethal damage and may lead to accidental kills.


<img
   src='https://www.gmbinder.com/images/YH6sAkj.jpg'
   style='position:absolute;bottom:-115px;left:210px;height:1180px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreakNum

<div style="margin-top:3px;"></div>

#### Cover

Shields with the Cover property provide exceptional protection but hinder you in combat. While wielding this shield, your attack rolls are made at disadvantage. Also, all attempts to Overrun or Tumble (pg. [17](#p17)) through space you occupy are made at disadvantage unless you allow them, and treat your space as difficult terrain. 

As an action, you can set down a shield with the Cover property as stationary protection. The shield faces in a direction of your choice, and it takes an action to change its orientation while stationary. You benefit from three-quarters cover (+5 AC) instead the shield's bonus to Armor Class, and one adjacent ally standing behind you benefit from half-cover (+2 AC). You can also apply the cover bonus against effects that require a Dexterity saving throw, such as the fireball spell. You get no cover from attacks that pass through other edges of your square.

<div style="margin-top:-3px;"></div>

#### Critical

Upon a critical hit, this weapon can produce a devastating blow. When your attack is a critical hit, instead of rolling the weapon dice again add the maximum amount of damage that the dice could roll.

<div style="margin-top:-3px;"></div>

#### Defensive

While using the Deflect combat reaction with a weapon with Defensive property and not wielding a shield, you roll the weapon damage die twice and subtract the total from the damage you would have taken. 

<div style="margin-top:-3px;"></div>

#### Disarming <img src="https://img.icons8.com/ios/16/58180d/action-filled.png">

When your attack beats the AC of your target by 5 or more, you may use your bonus action to perform a Disarm action against the same target.

<div style="margin-top:-3px;"></div>

#### Double-sided  <img src="https://img.icons8.com/material/16/58180d/sword.png">

This weapon has two striking heads on each side of its haft. When you take the attack action and make a two-handed attack with a Double-sided weapon, you can use a bonus action to make a melee attack with the opposite end of the weapon. This attack uses the same ability modifier as the primary attack. The weapon’s damage die for this attack is a d4, and it deals one of the weapon's damage types.

<div style="margin-top:-3px;"></div>

#### Finesse
Check the *Player's Handbook* pg. 147 for this property. 

Melee weapons with this property that do not also have the Light property require Strength 11 or higher to use Dexterity in this way.

<div style="margin-top:-3px;"></div>

#### Fragile

Whenever you make an attack roll with a melee weapon with the Fragile property and the result on the d20 die is equal to or lower than the weapon’s Fragile value, the weapon breaks immediately after the attack. 

<div style="margin-top:-3px;"></div>

#### Free-handed

This weapon or shield attaches to the arm but the hand remains unoccupied to hold a weapon or an item but not a shield. If you attack with a weapon held in that unoccupied hand (such as a two-handed weapon), you must either choose to do so with disadvantage or you cannot benefit from the AC bonus of your shield until the start of your next turn.

\columnbreak

<div style="margin-top:0px;"></div>

#### Grappling <img src="https://img.icons8.com/material/16/58180d/sword.png">

When you hit with a melee or thrown attack using a weapon with the Grappling property and you beat target's AC by 5 or more, you can spend your bonus action and attempt a Grapple check against DC equal to target's Passive Acrobatics (equal to 10 plus target's Dexterity (Acrobatics) modifier). If you succeed, your weapon grapples the target by a specific body limb or the target's weapon or shield. Other weapon properties (Restraining, Preventing, etc.) list this condition as prerequisite.

While your weapon is grappling the target or an item wielded by the target, any attack with the same weapon breaks the grapple. The grapple is broken if you or the target move out of reach, or the target releases the wielded item. The target can also spend an attack and attempt a Strength (Athletics) or Dexterity (Acrobatics) check against your Weapon Mastery DC. If it succeeds, the grapple is broken. If it is not grappled by a thrown weapon, the target can also break the weapon grapple if it succeeds in Disarming you.

While your weapon is grappling the target and you are holding onto your weapon, you can attempt Shove a Creature action using your Attack roll instead of Strength (Athletics).


#### Hooked

The weapon has a hooked head that can get stuck into your opponent. While your weapon is grappling the target and you are holding on your weapon, if the target attempts to break the grapple by leaving your reach or is Shoved away from you, it provokes an opportunity attack from you that automatically hits. 

#### Light
Check *Player's Handbook* pg. 147 for this property.

The weapon is able to be used just as effectively while you are laying on the ground or while you are standing. When you are prone and attack with this weapon, you do not suffer disadvantage if you are proficient with the weapon.

#### Limit

Weapons with the Limit property impose disadvantage when not used in the specific way described in parenthesis, such as only or never on a mount, or only when stationary.

#### Long 

Weapons with the Long property impose a disadvantage to attacks within 5 feet. You also cannot attempt any combat options or special melee attacks with this weapon against any target within that range.

#### Mounted Strike <img src="https://img.icons8.com/material/16/58180d/sword.png">

When you are riding upon a creature capable of movement at a speed 40 feet or faster, you can use the momentum of your mount to deal one powerful strike at a target that is not prone or smaller than you. If the weapon also has reach, being prone or size differences doesn't prevent your mounter strike.

You must command your mount to Dash in a straight line through the position of your target. When you enter reach, you can spend one of your attacks to make a special melee attack. If it hits, your deal one additional die of damage for every weapon damage die. You can then continue the movement of your mount and you do not provoke an opportunity attack if you leave the reach of your target unless your special melee attack missed.

\pagebreakNum

#### Nonlethal
The weapon is designed to incapacitate, or is otherwise capable of delivering a hit that does not kill the target. Weapons with this  property still deal their full damage when dealing nonlethal damage. 

<div style="margin-top:-5px;"></div>

#### Ongoing

While a weapon with the Ongoing property is grappling the target (see Grappling weapon property), the target takes damage at the beginning of each of its turns equal to the value shown in parenthesis. 

#### Opportunistic <img src="https://img.icons8.com/material/16/58180d/conflict.png">
This weapon is great for striking back at opponents who threaten you. When using your reaction to make an opportunity attack with this weapon, you benefit from advantage to the attack roll. 

#### Parry

The weapon has a catching or deflecting feature, allowing it to be used to parry incoming attacks. 

You can use the Deflect combat action (see pg. [19](#p19)) without Dominance over your target, and even if the weapon has the Light or Finesse properties. 

#### Preventing

While your weapon is grappling the target (see Grappling weapon property) and you are holding your weapon, the target is unable to approach you and can only move away from you. 

The target can only move towards you if it attempts to Shove you. If it succeeds, it also provokes an opportunity attack from you that automatically hits. 


#### Reach
The weapon has an extended length. This weapon adds 5 feet to your Reach when you attack with it, and when determining your Reach for attacks of opportunity with it.

<div style="margin-top:-3px;"></div>

#### Restraining
While your weapon is grappling the target (see Grappling weapon property), the weapon restricts some of the actions of the creature. The Restrain effect depends on the location listed in parenthesis. If more than one is listed, pick one.

<div style="margin-top:-8px;"></div>

* **All.** The creature is Restrained by your weapon.
* **Body.** The creature is Restrained by your weapon, except its speed is not reduced to 0. 
* **Hand.** Choose a free hand or a hand wielding a Light weapon. The target cannot use that hand to attack or use items (unless activated) while Restrained.
* **Legs**. The creature is Restrained by your weapon, but it doesn’t suffer disadvantage to attacks. If the creature used its movement in its turn before it was hit by this attack, it also falls prone. 
* **Shield**. The creature doesn't benefit from shield bonus to AC until it breaks the grapple. While your weapon is restraining the creature's shield you have dominance over the creature. The creature can break the Grapple by breaking the grapple, or releasing its shield. 

<div style="margin-top:-10px;"></div>

While your weapon is restraining the creature and you are wielding your weapon, on your turn you may spend an attack to deal damage equal to your Strength modifier without rolling to attack. Creatures that are formless or have size category of Huge or Gargantuan cannot be Restrained. 

\columnbreak

#### Sharp <img src="https://img.icons8.com/material/16/58180d/sword.png">
The weapon is particularly adept at making the most of the advantageous situation when an enemy is unarmored.

When you attack a target that is unarmoured or with an armor AC of 12 or less, you gain a bonus to the attack roll equal to the value written in parenthesis. Creatures with natural armor or an armor AC of 13 or higher (including spells such as *mage armor*) are immune to this property.

#### Slow

A Slow weapon is massive and cumbersome, and requires great strength to wield and multiattack with. The weapon can make only one attack per turn if wielded by a character with a Strength score of 14 or less. It can make up to one extra attack if wielded by a character with a Strength score of 15 or 16, or up to two extra attacks if wielded by a character with Strength score 17 or 18. It can make any number of attacks if wielded by a character with a Strength score of 19 or more. 

The limit to the number of attacks also affects attacks that use a bonus action and opportunity attacks.


<div style='column-count:2'>

| Strength  | Max Attacks |
|:---:|:-----------:|
|  < 15  | 1 attack |
|  15–16  | 2 attacks |

| Strength  | Max Attacks |
|:---:|:-----------:|
|  17–18  | 3 attacks |
|  >19  | no limit |

</div>

<div style="margin-top:-0px;"></div>

#### Suffocating

While your weapon is grappling the target (see Grappling weapon property) and you are holding your weapon, the target is also Suffocating. 

If the target attempts to break the weapon grapple by moving out of reach, it provokes and opportunity grapple check against your Weapon Mastery DC. It can only move away from you if it succeeds on the check 

<div style="margin-top:-0px;"></div>

#### Sundering <img src="https://img.icons8.com/material/16/58180d/sword.png">
The weapon has qualities that crush or pierce armor, making it more effective against targets that employ such defenses.  

When you attack a target wearing armor components with the Hard property, or natural armor and its armor AC is 15 or more, you gain a bonus to the attack roll equal to the value in parenthesis. 

<div style="margin-top:-0px;"></div>

#### Sweeping <img src="https://img.icons8.com/material/16/58180d/sword.png">
The weapon makes attacks in broad, sweeping motions. You can use your bonus action to make one of your attacks into a special Sweeping attack. If there's another creature adjacent to you and your attack roll would hit both of them, your target takes normal damage and the other creature takes the weapon's dice result as damage, without adding the Strength modifier or any extra damage.

If there are multiple walls, friendly characters sized Medium or larger adjacent to your target, or other such obstructions adjacent to you, you cannot use this property. 

<div style="margin-top:-0px;"></div>

#### Threatening <img src="https://img.icons8.com/material/16/58180d/conflict.png">

You can spend your reaction to perform an opportunity attack against any opponent that enters your weapon's reach after moving 10 feet or further. 

If the opportunity attack is against a mounted target, it or its mount has vulnerability to the damage from that attack.

\pagebreakNum

#### Tripping <img src="https://img.icons8.com/ios/16/58180d/action-filled.png">

Weapons with the Tripping property are designed to catch a target off balance. When your attack beats the AC of your target by 5 or more, you may use your bonus action to make a Trip combat action pg. [18](#p18)) against the same target.

<div style="margin-top:-4px;"></div>

#### Thrown
Check *Player's Handbook* pg. 147 for this property. 

Drawing a Thrown weapon is part of the attack, but you need a free hand. You may use your bonus action to recover any Thrown weapon within your reach. At the end of combat, you can recover all undamaged Thrown weapons by taking up to a minute to search the battlefield.

When you take damage from a thrown weapon and it causes an Open Wound (pg. [8](#p8)), the weapon remains lodged in the target. Any time you use your action during your turn with one or several lodged weapons in you, you take 1d4 internal damage. Removing a lodged weapon is an action.

<div style="margin-top:-4px;"></div>

#### Two-Handed, Versatile

Check the *Player's Handbook* pg. 147 for these properties. In addition, when the weapon is held in two hands attempts to disarm you are made at disadvantage.

<div style="margin-top:-4px;"></div>

#### Vicious

If a weapon with the Vicious property deals damage, you may reroll any of the weapon dice if it rolls a value of 1. You must use the new value even if it is also a 1. If you have the *Great Weapon Fighting* style, the two rerolls stack to 1-3 instead. 


<div style="margin-top:-5px;"></div>

#### Weak

Creatures that wear any Hauberk, or Medium, armor have resistance to damage dealt by weapons with the Weak property unless it is an exceptional or critical hit.

<div style="margin-top:-5px;"></div>

#### Worn

Weapons with the Worn property are equipped in a way similar to armor, by strapping it firmly to the body. It takes up to 1 minute to don or doff the weapon or shield, and you can do it as part of donning or doffing armor. The DM may allow you to skip the required time if you ignore the Worn property of the weapon or shield until the end of combat.

While the weapon or shield benefits from the Worn property, it cannot be disarmed unless the attack or skill check is an exceptional or critical hit. 


<div style="margin-top:-5px;"></div>

#### Wounding <img src="https://img.icons8.com/material/16/58180d/sword.png">
The weapon is particularly potent in maximizing its unique damage type.  When you cause an Open Wound (pg. [8](#p8)) with this weapon, it will inflict an additional effect based upon the type of damage dealt. A critical hit guarantees the Wounding effect even if the attack doesn't cause an Open Wound.

**Slashing weapons** can tear through defencses or otherwise leave a target more vulnerable. The target's AC is lowered by 2 until the end of its next turn.

**Bludgeoning weapons** can hit with a singularly bone-shaking blow, stunning the target. The target becomes Dazed until the end of its next turn.

**Piercing weapons** can inflict gaping wounds and cause profuse bleeding.  The target loses an extra 1 hp at the start of its turns, or extra 2 hp if caused by a critical hit. To stop the excessive bleeding, the Medicine check DC is raised to 15. Objects, Constructs, and Elementals are immune to this effect.

\columnbreak

<div style="margin-top:590px;">&nbsp;</div>

>##### Option: Two-Handed Strength
>
>Wielding melee weapons with the Two-Handed and Versatile property allows you to put more of your brute strength behind blows when held with both hands. 
>
>At the start of your turn you can enter a combat stance that increases the bonus damage by ×1.5 times as shown on the table below. While in this stance, your attacks or reactions cannot be spent on Combat Options. You can leave this stance at the start of any of your turns.
>
><div style='column-count:2'>
>
>| Strength Modifier  | Extra Damage |
>|:---:|:-----------:|
>|  +1  | +1 |
>|  +2  | +1 |
>|  +3  | +2 |
>|  +4  | +2 |
>
>| Strength Modifier  | Extra Damage |
>|:---:|:-----------:|
>|  +5  | +3 |
>|  +6  | +3 |
>|  +7  | +4 |
>|  +8  | +4 |
>
></div><div style="margin-top:-15px;"></div>



<img
   src='https://www.gmbinder.com/images/McUQ1b6.png'
   style='position:absolute;bottom:-60px;left:300px;height:1170px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreakNum

# Realistic Ranged Weapons

<div class='wide'>

Ranged damage types are represented by icons: <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png"> for bludgeoning and <img src="https://img.icons8.com/ios/12/000000/archer-filled.png"> for piercing damage. 

##### Simple Thrown Weapons
| Name | Cost | Damage | Weight | Range | Properties | 
|:----|:---:|:----:|:----:|:----:|:--|
|<div style="font-size:100%">Dagger, throwing</div>|8 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|¼ lb.|30/120|Light, limit(only thrown)|
|Dart|5 cp|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|¼ lb.|20/60|Light|
|Sling|1 sp|1d4 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|-|30/120|Light, pellets|

</div>


<div class='wide'>

<div style="margin-top:-5px;"></div>

##### Simple Bows
| Name | Cost | Damage | Weight | Range | Properties | 
|:----|:---:|:----:|:----:|:----:|:--|
|Bow, hunter's|20 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|80/320|Two-handed|
|Bow, pellet|15 gp|1d4 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|2 lb.|40/160|Pellets, two-handed|

</div>

<div class='wide'>

<div style="margin-top:-5px;"></div>

##### Martial Bows
| Name | Cost | Damage | Weight | Range | Properties | 
|:----|:---:|:----:|:----:|:----:|:--|
|Shortbow|25 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|80/320|Brutal, strength(9), two-handed|
|Shortbow, recurve|50 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|80/320|Brutal, two-handed|
|<div style="font-size:95%">Shortbow, composite</div>|75 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|100/400|Brutal, strength(11), two-handed|
|Longbow|50 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|150/600|Brutal, limit(not mounted), strength(11), two-handed|
|Longbow, recurve|75 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|150/600|Brutal, limit(not mounted), strength(9),  two-handed|
|<div style="font-size:95%">Longbow, composite</div>|125 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|200/800|Brutal, limit(not mounted), strength(13), two-handed|
|Greatbow|150 gp|1d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|4 lb.|250/1000|<div style="font-size:100%">Brutal, heavy, limit(not mounted), slow, strength(13), two-handed, volley, wounding</div>|
</div>

<div class='wide'>

<div style="margin-top:-5px;"></div>

##### Simple Crossbows

All crossbows are considered Simple ranged weapons. Instead of martial proficiency, Heavy crossbows take longer to reload. 

| Name | Cost | Damage | Weight | Range | Properties | 
|:----|:---:|:----:|:----:|:----:|:--|
|Hand, standard|75 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|3 lb.|30/120|Light, loading, point-blank|
|Hand, repeating|400 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|5 lb.|30/120|Light, loading(5), mag(6), point-blank|
|Light, standard|25 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|5 lb.|80/320|Loading(1), stock, two-handed|
|Light, double|50 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|9 lb.|80/320|Loading(2), mag(2), stock, two-handed|
|Light, repeating|250 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|8 lb.|30/120|Loading(5), mag(6), two-handed|
|Heavy, standard|50 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|18 lb.|100/400|Heavy, loading(2), stock, two-handed|
|Heavy, double|100 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|36 lb.|75/300|Heavy, loading(4), mag(2), two-handed|
|Heavy, repeating|300 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|24 lb.|50/200|Heavy, loading(7), mag(6), two-handed|
|Blade Crossbow|300 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/sword-filled.png">|19 lb.|50/200|Caliber(3), loading(1), stock, two-handed|
|Pellet Crossbow|20 gp|1d6 <img src="https://img.icons8.com/ios-glyphs/12/000000/thor-hammer.png">|5 lb.|40/160|Loading, pellets, stock, two-handed|

</div>

<div class='wide'>

<div style="margin-top:-5px;"></div>


</div>

<div class='wide'>

<div style="margin-top:-5px;"></div>

##### Other Martial Ranged Weapons
| Name | Cost | Damage | Weight | Range | Properties | 
|:----|:---:|:----:|:----:|:----:|:--|
|Blowgun|10 gp|1 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|1 lb.|25/100|Loading|
|Blowgun, large|15 gp|1d4 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|30/120|Loading|

</div>



\pagebreakNum


<div class="memo2-top2" style="right:-20px;top:-100px">

___
<div style="margin-top:15px;"></div>

##### Long Range Aiming

Even if a weapon's long range is listed as over 1000 feet, you cannot aim beyond 1000 feet without optical, magical or divine aid. 

</div>

# Realistic Firearms

<div class='wide'>

<div style="margin-top:-10px;"></div>

##### Medieval Firearms

All Medieval Firearms have the **Misfire(2)** and **Sundering(3)** properties in addition to those listed below.

| Name | Cost | Damage | Weight | Range | Properties | 
|:----|:---|:----:|:----:|:----:|:--
|Handgonne|240 gp|2d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|7 lb.|150/600|Loading(4), two-handed|
|Two-Faced Gonne|370 gp|2d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|11 lb.|150/600|Loading(8), heavy, mag(2), two-handed|
|Ten-Eyed Gonne|920 gp|2d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|27 lb.|15/45|Buckshot(5), heavy, loading(40), mag(2), two-handed|

</div>

<div class='wide'>

<div style="margin-top:-10px;"></div>

##### Renaissance Firearms

All Renaissance Firearms have the **Misfire(1)** and **Velocity** properties in addition to those listed below. 

| Name | Cost | Damage | Weight | Range | Properties | 
|:----|:---|:----:|:----:|:----:|:--
|Wheellock Pistol|400 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|3 lb.|200/800|Light, loading(3),point blank|
|Pocket Pistol|380 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|½ lb.|80/320|Concealed, light, loading(3), point blank|
|Flintlock Pistol|400 gp|2d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|3 lb.|200/800|Light, loading(2), point blank|
|Duck's Foot Pistol|550 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2 lb.|30/90|Buckshot(4), light, loading(12)|
|Snaphaunce Pistol|250 gp|1d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|1 lb.|125/500|Light, loading(3), point blank|
|Tantsutsu|350 gp|1d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|5 lb.|125/500|Light, loading(7), point blank|
|Arquebus|300 gp|2d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lb.|200/800|Loading(9), two-handed|
|Caliver|270 gp|2d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|7 lb.|250/1000|Caliber(1), loading(9), two-handed|
|Carbine|580 gp|2d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|7 lb.|250/1000|Caliber(1), loading(6), two-handed|
|Flintlock Carbine|490 gp|2d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|4 lb.|200/800|Loading(6), two-handed|
|Fusil Ordinaire|300 gp|2d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|7 lb.|200/800|Caliber(1), loading(6), two-handed|
|Matchlock Musket|350 gp|2d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|21 lb.|300/1000|Caliber(2), loading(9), two-handed|
|Flintlock Musket|400 gp|2d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|13 lb.|300/1000|Caliber(2), loading(3), two-handed|
|Puckle Gun|3600 gp|2d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|90 lb.|150/600|Limited(tripod), loading(14), mag(9), two-handed|
|Teppo|340 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|9 lb.|150/600|Loading(9), two-handed|
|Wall Gun|850 gp|2d12 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|28 lb.|300/1000|Caliber(3), limited(tripod), loading(6), two-handed|
|Winged Tiger Gun|440 gp|2d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|7 lb.|150/600|Loading(27), mag(3), two-handed|
|Breechloading Carbine|540 gp|2d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|9 lb.|150/1500|Loading(1), two-handed|
|Jäger Rifle|600 gp|2d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|11 lb.|200/2000|Caliber(1), loading(9), two-handed|
|Jäger Rifle, Double|1000 gp|2d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|20 lb.|200/2000|Caliber(1), loading(18), mag(2), two-handed|
|Blunderbuss|330 gp|2d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|11 lb.|30/90|Buckshot(3), loading(2), two-handed|
|Fowling Piece, Single|270 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lb.|30/90|Buckshot(5), loading(6), two-handed|
|Fowling Piece, Double|340 gp|1d6 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|17 lb.|30/90|Buckshot(5), loading(12), mag(2), two-handed|

</div>

<div class='wide'>

<div style="margin-top:-10px;"></div>

##### Industrial Firearms

All Industrial Firearms have the **Velocity** property in addition to those listed below. 

| Name | Cost | Damage | Weight | Range | Properties | 
|:----|:---|:----:|:----:|:----:|:--
|Derringer|400 gp|1d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|½ lb.|200/2000|Concealed, loading(1), light, mag(2), point blank|
|Revolver|600 gp|2d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|2½ lb.|400/4000|Loading(2), light, mag(6), point blank|
|Rifle-Musket|600 gp|2d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|9 lb.|2000/6000|Caliber(2), loading(2), two-handed|
|Cartridge Rifle|800 gp|2d10 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|6 lb.|2000/6000|Caliber(3), loading, two-handed|
|Lever-Action Carbine|2400 gp|2d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|7 lb.|1500/9000|Caliber(3), loading(3), mag(7), two-handed|
|Double-Barreled Shotgun|1800 gp|2d8 <img src="https://img.icons8.com/ios/12/000000/archer-filled.png">|10 lb.|30/90|Buckshot(5), heavy, loading(1), mag(2), two-handed|

</div>

\pagebreakNum



<div class='wide'>

<div style="margin-top:-15px;"></div>

##### Ammunition
| Name | Cost (20x) | Weight | Weapon | Properties |
|:----|:---|:----|:----:|:----:|
|Stone Pellet|–|1 lb.|Sling|can find 10 for free when searching for 1 hour.|
|Sling Pellet|1 sp|½ lb.|Sling|double the Near range of the sling or pellet weapon|
|Blowgun needle|1 sp|½ lb.|Blowgun|–|
|Quarrel|1 gp|1 lb.|Crossbow|–|
|Arrow|1 gp|1 lb.|Bow|–|
|Bodkin arrow|4 gp|1 lb.|Bow|Sundering(2)|
|Broadhead arrow|4 gp|1 lb.|Bow|Wounding|
|Greatbow arrow|10 gp|2 lbs.|Bow|Required by Greatbow|
|Bullet|5 gp|1 lb.|Gun|–|
|Buckshot shells|20 gp|1 lb.|Gun|Used by ranged weapons with Buckshot property|

</div>

## Ranged Properties

#### Ammunition (Ammo)
Check the *Player's Handbook* pg. 146 for this property.

At the end of combat, you can recover half of your expended Ammunition by taking a minute to search the battlefield. This does not apply to bullets and pellets. 

<div style="margin-top:-5px;"></div>

#### Buckshot

The ranged weapon spreads multiple fragments in a scatter cone in short range. Both the weapon and the ammunition used must have the Buckshot property.

If the target is within the normal range increment you can select a number of secondary targets within 5 feet of the primary target up to the value in parenthesis. The primary target cannot be selected as secondary target. Secondary targets behind the primary target or behind another secondary target cannot be selected. Make one attack and damage roll to apply to all targets.

If the target is within 5 feet reach instead of selecting secondary targets, the primary target takes additional damage. Roll additional damage dice equal to the value in parenthesis. 

Buckshot attacks with this weapon do not add your ability modifier to damage unless the modifier is negative. 

<div style="margin-top:-5px;"></div>

#### Caliber

Ranged weapons with the Caliber property deal additional damage when you shoot from an advantageous position. The following conditions allow you to add extra damage dice of the same damage type up to the value shown in parenthesis. 

<div style="margin-top:-10px;"></div>

* If your target is within 15 feet of you, the attack deals 1 additional damage die
* For each 3 points by which you beat the target's AC, the attack deals 1 additional damage die.

<div style="margin-top:-5px;"></div>

#### Limit

Check the *Limit* ranged weapon property on pg. [36](#p36).

<div style="margin-top:-5px;"></div>

#### Loading

Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make.

Some weapons take longer to reload and you must spend a number of attacks to reload equal to the value in parenthesis.

\columnbreak

<br><div style="margin-top:15px;"></div>



<div style="margin-top:-0px;"></div>

#### Mag

When you reload a ranged weapon with the Mag property, an amount of Ammunition is placed in it ready to be fired. You must have the ammunition in a quiver, case or another container. As long as there is ammunition in the weapon, you can ignore the Loading property of the weapon.

<div style="margin-top:-0px;"></div>

#### Misfire

Whenever you make an attack roll with a ranged weapon with the Misfire property and the attack roll is equal to or lower than the weapon’s Misfire value, the weapon misfires. The attack misses, and the weapon cannot be used again until you spend an action to try and clean or repair it. 

To repair a firearm, you must make a successful Tinker’s Tools check (DC equal to 8 + Misfire score). If your check fails, the weapon is unusable until the end of combat and may need to be mended out of combat at a quarter of the cost of the firearm (DM's discretion). Creatures who use a firearm without being proficient increase the weapon’s Misfire score by 1.

<div style="margin-top:-0px;"></div>

#### Pellets

This weapon uses free ammunition intended for a sling, even if it's weapon type is not a sling. Pellets do not leave a trace of the direction they were shot from unless the victim is alive to notice, or the wound is inspected with a DC 15 Intelligence (Investigation) check, or the environment is searched with a DC 20 Wisdom (Perception) check.

#### Point Blank <img src="https://img.icons8.com/material/16/58180d/sword.png">

Ranged weapons with the Point Blank property allow for exact precision when pointing at nearby targets. Attacks with ranged weapons that have this property do not suffer disadvantage when made within 5 feet of a hostile creature.

#### Stock

Ranged weapons with the Stock property can improve your aim when set on firm ground. 

If you lay prone and make a ranged attack with it, you can ignore disadvantage when shooting at long range (but no further than 1000 feet), but you suffer disadvantage if you shoot at targets within close range.

\pagebreakNum



#### Strength

Ranged weapons with the Strength property require raw strength to draw the string. You must have the minimum Strength score as shown in parenthesis in order to use them. 

<div style="margin-top:-0px;"></div>

#### Velocity

Advanced firearms shoot projectiles at a higher velocity than all other ranged weapons. While causing less bleeding than arrows, bullets deal more trauma and are very effective at killing quickly. When rolling for damage, roll one additional weapon die then remove the die with the lowest result.

When using weapons with the Velocity property the target does not benefit from any AC bonus from armor components with the Hard property. If you use Realistic Defense (pg. [70](#p70)), all DR is ignored instead. 

#### Volley

Weapons with the Volley property are less effective at close distances. Your attacks against targets that are within 30 feet from you suffer disadvantage.

<br><div style="margin-top:-15px;"></div>

>##### Optical Scope
>
>Firearms with ranges above 1000 feet require optical scopes for extreme range increments. Your weapon must have an optical or arcane attachment costing a minimum of 100gp per 1000 feet increment beyond the natural limit of 1000 feet.
>
>If you have not moved since the end of your last turn, you can use an action to aim down the scope of a firearm that has this trait at a specific target. Once you do so, you are incapacitated and your speed becomes 0 until the start of your next turn. However, the first attack you make against the target at the start of your next turn can extend beyond the 1000 feet natural range, and ignore disadvantage on your attack roll from long range. 

\columnbreak

### Lodged Arrows and Bullets

When you take damage from a ranged weapon using arrow projectiles and it causes you to suffer an Open Wound (pg. [8](#p8)), the arrow lodges deep into your body. Anytime you use your action during your turn with one or several lodged arrows in you, you take 1d4 internal damage. Removing a lodged arrow is an action. You can use your action to remove the arrow, make a DC 10 Wisdom (Medicine) check. If you fail, the arrow breaks and the arrowhead remains in your body. 

When you take damage from a ranged weapon using bullet projectiles and it causes you to suffer an Open Wound (pg. [8](#p8)), the whole bullet or a fragment of it remains lodged in your body. Normal bullets leave one fragment while Buckshot bullets (pg. [41](#p41)) leave 1d4 fragments. 

Having arrows or fragments of bullets in your body will elicit a foreign body reaction and become encapsulated by connective tissue unless removed. Until all fragments are removed, any time you have one or more open Wounds you always take the minimum roll from healing by restorative abilities, magical healing or using hit dice during rest.

To remove all fragments left by bullets in your body, you or an ally must spend one use of a Healer's Kit and make a Wisdom (Medicine) skill check at DC 10 + the number of lodged pieces lodged in your body (maximum DC 20). If the check fails, you can still remove any amount of fragments but you lose 1 hit point for each fragment removed. The manipulation takes 1 minute per fragment removed.

If you do not have Healer's Kit available, you can use a blade or even your fingers to attempt to remove fragments lodged in your body. If you choose to do so the DC is 12 + the number of fragments lodged in your body (maximum DC 20) and if you fail, you can remove any number of fragments but you lose 1d4 hit points for each fragment removed. The manipulation takes 2 minutes per fragment removed.


<img src='https://www.gmbinder.com/images/98cS7Cx.png' style='position:absolute; bottom:-300px; right:-32px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-310px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />


\pagebreakNum

## Weapon Degradation

Like any means of war weapons dull and break. When used normally, weapons only take minimal damage compensated by cleaning or sharpening them as part of long or full rest. 

You can also push your weapon beyond its limit to achieve great effect, damaging it in the process. At any time you can choose from the actions below and your weapon suffers a level of degradation. 

* When your attack roll is an exceptional success, you may choose to degrade your weapon to make the attack deliver a critical hit instead of exceptional one. 
* If you have Dominance over your target and you hit with a melee weapon, you may choose to degrade your weapon once and deal 1d6 as additional weapon damage.
* If you have Dominance over a creature and that creature hits you, you may choose to degrade your weapon and use your reaction to increase your AC by 2 (3 if weapon is held in two hands) potentially causing the attack to miss.
* When you must make a Strength or Dexterity saving throw against a threat, you may choose to degrade your weapon and gain advantage on the saving throw by bracing or stopping the threat with your weapon, if the DM allows.
* You may propose an unorthodox use of your weapon (as a lever to lift fallen rocks or a bar to hold a door). The DM may allow it if you choose to degrade the weapon.

Weapon degradation has a negative effect on damage rolls and an increased risk of the weapon breaking. The weapon also no longer benefits from any positive listed weapon properties until it is repaired (negative properties still apply). Like with Exhaustion, degradation effects stack.

<div style='column-count:2'>

<div style="margin-top:-12px;"></div>

##### Melee

| Degree  | Condition |
|:---:|:-----------|
|  1  | Dulled |
|  2  | Chipped |
|  3  | Cracked |
|  4  | Splintered |
|  5  | Broken |

##### Ranged

| Degree  | Condition |
|:---:|:-----------|
|  1  | String Fray |
|  2  | String Snap |
|  3  | Frame Decay |
|  4  | Broken |

</div>

<div style="margin-top:10px;"></div>

Nonmagical weapons always suffer degradation. Magical weapons can attempt to resist by rolling a d20 every time you choose to degrade the weapon. If the result is higher than the DC, the weapon resists the degradation; otherwise it degrades as normal.

<div style="margin-top:8px;"></div>

<div style='column-count:3'>

| +Bonus  | DC |
|:---:|:-----------|
|  +1  | 15 |

| +Bonus  | DC |
|:---:|:-----------|
|  +2  | 13 |

| +Bonus  | DC |
|:---:|:-----------|
|  +3  | 11 |

</div>

<br>

<div style="margin-top:-24px;"></div>

>
>##### Degradation due to Damage
>
>The DM may also rule that when you take more than 25 acid, fire, lightning or thunder damage, <br>any wielded weapon also degrades.
>
>The threshold varies between materials (10 bone, 15 stone, 40 for adamantine, etc.)
>


\columnbreak

<div style="margin-top:35px;"></div>

### Melee Weapon Conditions

##### Dulled

The weapon's edge has lost its sharpness or its bludgeoning head has worn off. When a damage die rolls its maximum value, you must reroll the die. The weapon loses the Brutal, Critical and Vicious properties if it has them until repaired.

The weapon can be fully repaired using a whetstone for 10 minutes and a successful DC 10 Smith’s tools check.

<div style="margin-top:5px;"></div>

##### Chipped

The weapon has lost small bits in combat, its edge or surface is ragged and uneven. The weapon's damage die decreases its size by a category (a d6 handaxe deals d4 damage if chipped). The weapon loses the Sharp, Sundering and Wounding properties if it has them until repaired.

The weapon can still be fully repaired using blacksmith's sharpening wheel for 1 hour and a DC 12 Smith’s tools check

<div style="margin-top:5px;"></div>

##### Cracked

The weapon has spiderline cracks within it, making it nearly unusable without breaking. When rolling damage, roll the weapon dice twice and take the lower result. When you roll a natural 1, the cracked weapon breaks. The weapon loses the Bypass and Defending properties if it has them until repaired.

The weapons cannot be repaired unless made of malleable material such as metal and requires half day of smith work and a successful DC 15 Smith's tools check.

<div style="margin-top:5px;"></div>

##### Splintered

The weapon's handle has been damaged or parts of the blade or head are coming loose, subjecting the wielder to potential injury upon the weapon breaking. When you roll 10 or less on the attack roll, the weapon breaks. If you use any Combat Action or Weapon Property that uses your action, attack or reaction, the weapon breaks after the effect. When a splintered weapon breaks, you take 1d4 in damage.

The weapons cannot be repaired unless made of malleable material such as metal and requires a full day of smith work, materials for a new handle or blade (DM's choice) and a successful DC 15 Smith's tools check.

<div style="margin-top:5px;"></div>

##### Broken

A broken weapon is rendered useless in its current function, either snapping in half, at the handle, or is shattered. It can only be used as an improvised weapon.

A broken weapon cannot be repaired and can only be salvaged for material for a new weapon. You can salvage material worth 25% of the item's nonmagical base cost.

<br>

<div style="margin-top:4px;"></div>

>
>##### Loot and Degradation
>
>No weapons left for years unattended will be found in pristine condition. Most nonmagical weapons found as loot may suffer the Dulled condition. Weapons affected from rust and environmental damage come as Chipped or Cracked. 
>

\pagebreakNum

<img
   src='https://www.gmbinder.com/images/8n2HHzR.png'
   style='position:absolute;bottom:-30px;right:180px;width:870px;transform:rotate(0deg);filter:opacity(100%)'
/>


<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:-0px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:330px;
  width:1270px;
  transform:
    scalex(1.12);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
  '
/>

___

\columnbreak

### Ranged Weapon Conditions

##### String Fray

The bow string of this weapon has been frayed from long use. The weapon gains the Misfire(2) weapon property. If the weapon misfires, the bow string snaps and the weapon is broken until the string is replaced. The weapon is unable to deal critical damage or reroll damage dice from an exceptional success or Combat Action while the string is frayed. 

The weapon can be fully repaired if you replace the string. If you are unable to do so, you must wax the string for 10 minutes and make a DC 10 Carpenter's tools check during each long rest. If you fail, the Misfire value increases by 1. 

##### String Snap

The bow string of this weapon is in critical condition with many strain points ready to snap. The weapon gains the Misfire(5) weapon property. If the weapon misfires, the <br>bow string snaps and the weapon is broken until the string is replaced. Ranged attacks outside the weapon's near range fail automatically. 

The weapon can be fully repaired if you replace the string. If you are unable to do so, you must wax the string for 10 minutes and make a DC 12 Carpenter's tools check during each long rest. If you fail, the Misfire value increases by 2. 

##### Frame Damage

The fine grain of the weapon has gathered hairline cracks and heavy decay from being loaded and handled hastily.  When you have disadvantage on the attack roll and you roll 10 or less on the attack roll, the bow frame or the crossbow mechanism breaks.

The weapon can be fully repaired by replacing the frame or repairing the crossbow mechanism using spare parts for 10 minutes and a DC 15 Carpenter's tools check.

##### Broken

A broken weapon is rendered useless, either its bow string snapped, the frame cracked or the crossbow mechanism is broken. It can only be used as an improvised weapon.

A broken weapon cannot be repaired and can only be salvaged for material for a new weapon. You can salvage material worth 25% of the item's nonmagical base cost.

### Permanent Degradation

When you make an attempt to repair a degraded weapon and you fail on the tool check, the weapon becomes permanently degraded to its current state and further maintenance cannot improve its condition above the permanent damage. 

If the weapon is magical and you risk permanently degrading the weapon due to a failed check, you may choose to permanently decrease its magical enhancement bonus by 1 or decrease magical damage dealt by 1 die (your choice) to automatically succeed on a failed repair check.

\pagebreakNum

# Siege Weapons

<div class='wide'>

These Siege Weapons rules recreate the brutal reality of siege weapon impact from a creature point of view. As such, damages are balanced towards realism and do not consider player survivability as a priority. An impact from a siege weapon is intended to cause instant death or severe injuries beyond those of standard adventuring life. You have been warned!

<div style="margin-top:17px;"></div>

##### Medieval Direct Firing Mechanical Artillery 

| Name | Cost | DT/HP | Aim | Range | Damage | Crew|Loading | Size|Weight | 
|:----|:---:|:----:|:---:|:----:|:----:|:----:|:---:|:----:|:---:|
|Ballista, 1-lb.|1,960 gp |10/50|+10|750/900|4d10 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|2|Medium|1/2
|Ballista, 2-lb.|2,450 gp |10/50|+9|750/950|5d10 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|3|Medium|1/2
|Ballista, 5-lb.|2,940 gp |10/50|+9|800/1000|6d10 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|3|Medium|1
|Ballista, 10-lb.|3,430 gp |10/50|+8|850/1100|7d10 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|4|Large|1
|Ballista, 15-lb.|3,920 gp |15/50|+8|900/1100|8d10 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|6|Large|1
|Ballista, 20-lb.|4,410 gp |15/50|+8|900/1200|9d10 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|7|Large|1
|Ballista, 30-lb.|4,900 gp |15/50|+7|950/1250|10d10 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|2|18|Large|2
|Ballista, 60-lb.|5,880 gp |20/50|+7|950/1300|12d10 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|3|27|Huge|4
|Ballista, 180-lb.|7,840 gp |20/50|+6|1000/1300|16d10 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|6|66|Huge|12
|Carroballista, .5-lb.|1,470 gp |10/50|+10|650/800|3d8 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|1|Large|1/2
|Gastraphetes, 1-lb.|1,470 gp |10/50|+10|950/1200|3d8 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|3|Compact|—
|Gastraphetes, 4-lb.|2,450 gp |10/50|+7|900/1100|5d8 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|6|Medium|1/5
|Scorpion, 27", .5-lb|1,470 gp |10/50|+10|650/850|3d8 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|1|Medium|1/3
|Scorpion, 36", 1.2-lb|1,960 gp |15/50|+9|700/900|4d8 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|2|Large|1/2
|Scorpion, 45", 2.25-lb|2,450 gp |15/50|+8|750/950|5d8 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|3|Large|1
|Scorpion, 54" 4-lb.|2,940 gp |20/50|+7|750/950|6d8 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|4|Huge|1
|Scorpion, 72" 10-lb.|3,430 gp |20/50|+6|800/1050|7d8 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|5|Huge|1
|Arbalest, 0.5-lb|1,470 gp |10/50|+2|1100/1400|3d8 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|4|Medium|1/3
|Springald 2-lb.|2,450 gp |10/50|+5|250/350|5d8 <img src="https://img.icons8.com/material/12/000000/archers-arrow.png">|1|3|Medium|1
</div>

<div class='wide'>

<div style="margin-top:-7px;"></div>

##### Medieval Indirect Firing Mechanical Artillery																		


| Name | Cost | DT/HP | Aim | Range | Damage | Crew|Loading | Size|Weight | 
|:----|:---:|:----:|:---:|:----:|:----:|:----:|:---:|:----:|:---:|
|Petrobolos, 5-lb.|2,900 gp |10/75|+9|750/950|5d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|1|6|Large|1/2
|Petrobolos, 40-lb.|6,380 gp |15/75|+7|1000/1250|11d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|2|18|Huge|3
|Monankon, 15-lb.|6,960 gp |15/75|+4|400/1300/1650|12d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|2|18|Huge|2
|Mangonel, 2-lb.|4,060 gp |10/75|+5|45/150/200|7d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|15|30|Large|1/5
|Mangonel, 5-lb.|4,640 gp |10/75|+4|50/150/200|8d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|30|60|Large|1/3
|Mangonel, 10-lb.|5,800 gp |15/75|+4|50/150/200|10d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|50|100|Huge|1
|Mangonel, 30-lb.|7,540 gp |20/75|+3|55/150/200|13d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|100|200|Huge|2
|Mangonel, Weighted, 5-lb.|4,640 gp |10/75|+5|100/300/400|8d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|30|270|Large|1
|Mangonel, Weighted, 10-lb.|5,800 gp |15/75|+5|100/300/400|10d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|50|450|Huge|1
|Trebuchet, Small, 25-lb.|7,540 gp |15/75|+3|250/800/1000|13d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|25|1225|Huge|10
|Trebuchet, Large, 80-lb|10,440 gp |15/150|+2|270/850/1100|18d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|30|2220|Gargantuan|25
|Trebuchet, Hinged, 25-lb.|6,960 gp |20/75|+3|450/1450/1800|12d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|25|1225|Huge|8
|Trebuchet, Hinged, 80-lb.|9,860 gp |20/150|+3|500/1500/2000|17d10 <img src="https://img.icons8.com/metro/11/000000/weight.png">|30|2220|Gargantuan|22
</div>

\pagebreakNum

<div class='wide'>

<div style="margin-top:-20px;"></div>

##### Medieval Gunpowder Artillery

<div style="margin-top:-2px;"></div>

| Name | Cost | DT/HP | Aim | Range | Damage | Crew|Loading | Size|Weight | 
|:----|:---:|:----:|:---:|:----:|:----:|:----:|:---:|:----:|:---:|
|Rocket, 1.2-lb|100 gp |—/25|+4|0/2500|2d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|1|2|Compact|—
|Bombard, 50-lb.|5,850 gp |15/75|+1|250/1650|13d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|4|36|Large|1
|Bombard, 430-lb|16,200 gp |20/75|+1|400/2200|36d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|4|36|Huge|8
|Crapaudeau .12-lb|450 gp |15/50|+4|50/500|1d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|4|36|Large|1/5
|Veuglaire 2.5-lb.|1,800 gp |15/50|+4|150/1050|4d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|4|36|Large|1/3
</div>

<div class='wide'>

<div style="margin-top:-15px;"></div>

##### Renaissance Gunpowder Artillery

<div style="margin-top:-2px;"></div>

| Name | Cost | DT/HP | Aim | Range | Damage | Crew|Loading | Size|Weight | 
|:----|:---:|:----:|:---:|:----:|:----:|:----:|:---:|:----:|:---:|
|Rabinet, 0.6-lb|2,000 gp |15/50|+6|270/2550|5d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|1|9|Large|1/5
|Falconet, 1.5-lb|2,800 gp |15/150|+5|350/3000|7d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|1|9|Large|1/4
|Falcon, 3-lb|4,000 gp |15/75|+5|400/3900|10d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|1|9|Large|1/3
|Saker, 10-lb|6,000 gp |15/75|+5|650/5700|15d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|3|27|Large|1
|Culverin, 30-lb|9,600 gp |15/75|+4|900/6500|24d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|6|66|Large|2
|Cannon, 80-lb|12,000 gp |15/75|+5|1050/7800|30d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|12|192|Huge|3
|Field Cannon, support, 3-lb.|5,600 gp |15/100|+6|600/5400|14d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|1|9|Large|1/2
|Field Cannon, large, 12-lb.|9,600 gp |15/100|+5|900/7200|24d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|5|45|Huge|2
|Field Cannon, fort, 24-lb.|12,000 gp |20/150|+4|1100/8100|30d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|7|77|Huge|4
|Ship's Gun, 4-lb.|7,200 gp |15/100|+6|810/6900|18d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|2|18|Large|1/2
|Ship's Gun, 9-lb.|9,600 gp |15/100|+5|900/7200|24d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|4|36|Huge|2
|Ship's Gun, 18-lb.|11,200 gp |20/150|+4|1000/7800|28d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|6|66|Huge|3
|Ship's Gun, 42-lb.|14,400 gp |20/150|+3|1100/8400|36d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|11|154|Huge|4
|Swivel Gun, 2.5-lb|2,400 gp |15/50|+3|250/2700|6d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|1|3|Large|1/5
|Crouching Tiger Gun, 1.2-lb|2,400 gp |15/150|+2|200/1650|6d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|4|36|Large|1/5
|Long-Range Awe-Gun 3-lb|2,800 gp |20/200|+2|400/3600|7d12 <img src="https://img.icons8.com/ios/12/000000/flash-bang-filled.png">|4|36|Large|1/2

</div>

<div class="wide" style='column-count:2'>

| Ammo Type  | Cost | Weapon Type & Effect |
|:---|:-----------:|:-----------:|
|  Bolt | 6 sp/lb. | Impaling
|  Boulder | 2 sp/lb. | Crushing

| Ammo Type  | Cost | Weapon Type & Effect |
|:---|:-----------:|:-----------:|
|  Stone cannonball  | 2 gp/lb. | Explosive, Medieval
|  Iron Cannonball  | 8 sp/lb. | Explosive, Renaissance

</div>

<div class="wide" style='column-count:1'>

| Extra Effect  | Cost | Weapon Type & Effect |
|:---|:-----------:|:-----------:|
|  Burning | +50 gp | Target or area starts burning 1d6/round for rounds equal to weapon dice of attack.
|  Shrapnel | +100 gp | Make Dexterity saving throw vs DC raised by +3, success deals half damage

</div>

### Siege Weapon Damage Types

Siege Weapons introduce three new types of damage: impaling, crushing and explosive. 

<div style="margin-top:-8px;"></div>

##### Impaling <img src="https://img.icons8.com/material/16/000000/archers-arrow.png">

Impaling damage is dealt by direct fire artillery such as the ballista. Their projectiles need to hit the target exactly to deal damage so they are best used against immobile structures.

<div style="margin-top:-8px;"></div>

##### Crushing <img src="https://img.icons8.com/metro/14/000000/weight.png">

Crushing damage is dealt by indirect fire artillery such as the trebuchet. Their projectiles are large and bulky and threaten a small radius around the impact point. They can do damage to immobile structures even if they near miss, but creatures can attempt to evade to avoid any damage. 

<div style="margin-top:-5px;"></div>

##### Explosive <img src="https://img.icons8.com/ios/16/000000/flash-bang-filled.png">

Explosive damage is dealt by gunpowder artillery such as cannons. Their projectiles are shot at high velocity and they shatter and threaten a radius around the impact point. They can do damage to immobile structures even if they near miss, and creatures can attempt to evade to only take half damage.

\columnbreak

### Structures and Materials

Structures made of solid material have Damage Reduction based on the material they are made from. Subtract DR from any damage dealt to them unless they are vulnerable to the damage type. Their size determines the base siege AC and the smaller the target is, the harder it is to hit.

<div class="siegebox">

<div style="margin-top:-8px;"></div>

| Material | Vulnerable To... | DR | HP/foot
|:----|:---:|:----:|:----:|
|Wood|Explosive, Impaling|5|120
|Stone|Explosive, Crushing|8|180
|Iron/Steel|—|10|240

</div>

<div style="margin-top:-3px;"></div>

>##### Proficiency with Siege Weapons
>
>In a campaign where siege warfare is essential, the DM should introduce Siege Weapon proficiency. Players can receive it as part of their background instead of another tool proficiency, or spend downtime days and gold to learn it.

<br><div style="margin-top:-25px;"></div>

\pagebreakNum

## Siege Weapon Properties

##### Ammunition Weight

The ammunition calibre and weight (pounds per unit) are listed at the end of the siege weapon's name. 

##### DT and HP

To make a melee or ranged attack against an immobile siege weapon you must make an attack roll of 10 or better. If you hit and you deal damage higher than the Damage Threshold (DT) the siege weapon takes normal damage, otherwise it takes no damage.

##### Aim

To fire a loaded siege weapon, you must make an Intelligence (Siege Weapons proficiency) skill check. Add the Aim bonus or penalty of the weapon to your roll. 

##### Range

Some siege weapons have three range values. The first value is the minimum range it can shoot at. The second and the third value are the Near and Long range. 

##### Crew and Loading

To load a siege weapon with a single unit of ammunition one or several creatures must commit a number of actions to clean and prepare the weapon to fire. Once actions equal to the Loading value are spent, the weapon is ready to fire. 

Only a limited number of creatures can work on a siege weapon together, up to the Crew value. 

##### Size and Weight

Size category defines how massive the weapon is. Compact weapons can be lifted with two hands and shot like ranged weapons. Huge or Gargantuan weapons require special platforms to be moved around, or need to be assembled by skilled personnel. When mounting such weapons inside a vehicle (for example, a war ship) the vehicle will have a limited number of weapon slots of specific size.

The Weight is represented by the number of horses required to pull a cart containing the weapon and roughly equals a US tonne (2000 pounds). Values of 1/2 or 1/3 means multiple weapon can be transported with a single cart, and is limited to weapons Large or smaller. When the value is 2 or more, a wagon capable of being pulled by several animals is needed, or the weapon must be disassembled and parts of it carried by several carts. Huge creatures (i.e. elephants) count as two horses but require special carts or platforms. 

## Siege Weapon Actions

### Push/Move Weapon

When a siege weapon is built, assembled or placed stationary it is considered to be facing in a chosen direction (including diagonals). The weapon can only fire in that direction. Only if mounted on a mobile platform, vehicle or a living creature, can its direction change on command.

You can spend your action during combat to push or pull a siege weapon to change its direction of fire, or move it to a new position. To do this with a Large siege weapon you must have a Strength score 13 or more and make a DC 15

___
Strength (Athletics) check. For each size category above Large, raise minimum Strength score by +2 and DC by 5. The DM may allow you to roll with advantage if the weapon has means to rotate or move (such as wheels) or impose a disadvantage if has large friction area and stationary.

<div style='column-count:2'>

| Size | Strength | DC 
|:----|:---:|:---:|
|Medium|—|15
|Large|13|20


| Size | Strength | DC 
|:----|:---:|:---:|
|Huge|16|25
|Gargantuan|19|30

</div>

<div style="margin-top:-7px;"></div>

A number of creatures that meet the Strength requirement can Help you, up to the Crew value of the siege weapon. See Stacking Advantage (pg. [5](#p5)) for bonuses beyond advantage.

If you attempt to move a siege weapon and succeed, it can be moved up to half your speed if Large or smaller, or by 5 feet if Huge. Gargantuan siege weapons cannot be moved without wheels, platforms or beasts of burden.

Once a siege weapon is moved or repositioned, it is no longer Aimed and all Aiming benefits are lost.

### Aim

Aiming involves precise targeting or trajectory calculations that improve the odds of hitting the target. To Aim a siege weapon during combat, spend your action to make a DC 15 Intelligence (Siege Weapon proficiency) check. Only one creature can Aim with the same siege weapon, up to a number of times equal to its Intelligence modifier. On a success, an effect is applied to the next Fire action:

**Precise Targeting.** You gain advantage on the next Fire action with the siege weapon. This advantage ignores the general rule for only one advantage to the roll. You can take this option multiple times, each time adding one more d20 die to your next Fire action.

**Predict Positioning.** When you fire a siege weapon that deals impaling or explosive damage against a target that moved during its previous turn (such as a creature or a vehicle), you ignore AC bonuses from movement. This effect is ignored if the target chooses not to use its movement during any of its following turns prior to the Fire action.

**Calculate Trajectory.** When you fire a siege weapon that deals crushing damage, it will ignore half and three quarters cover unless the cover is positioned above the target. 

**Collateral Damage.** When you fire a siege weapon that deals explosive damage, instead of doing collateral damage on missing the AC by 2 or less, you do so on missing the AC by 4 or less.

### Fire

Fire is either a manual action or a given command to an ally who uses its reaction to fire the siege weapon. Firing a siege weapon is not a ranged attack, and abilities and feats that benefit ranged attacks do not apply. After the weapon is fired, all Aiming benefits are lost. 

You can either spend your action or reaction to Fire a siege weapon. Make a Dexterity or Intelligence (Siege Weapon proficiency) check and add the weapon's Aim modifier. If you use your reaction, you or an ally suffers disadvantage to the check. You must meet or beat the Siege AC of the target. 

The Aim action allows you to roll one or several extra d20 and take the highest result. You always hit if you roll more natural 20s than natural 1s with all dice. 

\pagebreakNum

The Siege AC of the target is based on its size, movement, evasion ability or natural armor. Use the tables to calculate the AC by choosing the Base and applying related modifiers. 

<div class="siegebox">

##### Target Size Base AC
| Size | Example | Base AC
|:----|:---:|:----:|:----:|
|Medium|a humanoid, a pile of munition|25
|Large|a siege weapon, a small tent|20
|Huge|a single floor building|15
|Gargantuan|a two or three floor bulding|10
|Colossal|a temple, a large tower|7
|Titanic|a large castle|5

</div>

<div class="siegebox">

##### Target Mobility Modifier
| Speed | Example | Near Range | Long Range
|:----|:---:|:----:|:----:|:----:|
|Stationary|any building|—|—
|Slow <br>20ft. or less|moving siege weapon|+5|+10
|Steady <br>30ft. to 50ft|squad of footmen|+10|+15
|Fast 55ft. or more|charging horsemen|+15|+20

</div>


<div class="siegebox">

##### Target Armor Modifier
| Speed | Modifier | 
|:----|:---:|
|for each 3 points of natural armor|+1
|for each 2 point Dexterity bonus to armor|+1

</div>

<div class="siegebox">

##### Cover Modifiers
For a structure or creature to benefit from cover, the cover should not be smaller than one size category below the size of the target.

| Cover | Visibility | Modifier | 
|:----|:---:|:---:|
|half cover|night, fires illumination|+2
|three quarters cover|night, clear moon|+5
|almost total cover|night, cloudy|+10

</div>

## Damage Resolution

##### Impaling <img src="https://img.icons8.com/material/16/000000/archers-arrow.png">

Siege weapons that deal impaling damage do so only if your Fire check is equal to or more than the target's Siege AC.

<img src='https://www.gmbinder.com/images/92zrsNh.png?2' style='position:absolute; bottom:25px; right:710px; width:850px;z-index:1;width:80px;transform: rotate(-5deg);box-shadow: 0 4px 8px 0 rgba(256, 256, 256, 0.6), 0 6px 20px 0 rgba(256, 256, 256, 0.2);' />

<div style="position:absolute; bottom:25px; right:345px;width:380px;"> 

>These weapons are compatible with *Strongholds & Followers* by MCDM Productions. To convert to S&F, the Power Bonus is equal to the number of dice of the weapon damage.

</div>


\columnbreak

##### Crushing <img src="https://img.icons8.com/metro/14/000000/weight.png">

Siege weapons that deal crushing damage cause damage to all targets in the radius of their impact point. The size of the affected area is based on the number of damage dice.

When using Mapless Combat (pg. [22](#p22)), treat a 30 feet radius around the impact point as a combat zone. Divide the siege impact radius by 5 to find the maximum number of targets that can be affected within that area.


##### Size of Impact Area
<div style='column-count:2'>

| Damage Dice | Radius, ft | 
|:----|:---:|
|3–4| 5ft.
|5–7| 10ft.
|8–11| 20ft.

| Damage Dice | Radius, ft | 
|:----|:---:|
|12–16| 30ft.
|17–30| 60ft.
|31+| 120ft.

</div>

<br><div style="margin-top:-20px;"></div>

All targets (structures and creatures) in the affected area take damage. Creatures can make a Dexterity saving throw against a DC based on the die size of the siege weapon. If they succeed on the save, they take no damage.

<div style='column-count:2'>

| Die Size | Save DC | 
|:----|:---:|
|d8| 11
|d10| 13

| Die Size | Save DC | 
|:----|:---:|
|d12| 15
|d20| 17

</div>

<br><div style="margin-top:-40px;"></div>

##### Explosive <img src="https://img.icons8.com/ios/16/000000/flash-bang-filled.png">

Siege weapons that deal explosive damage cause damage to all targets in the radius of their impact point. The size of the affected area and the Dexterity saving throw DCs are the same as those of siege weapons that deal crushing damage. However, creatures that succeed on the Dexterity saving throw take half damage instead of no damage. 

Siege weapons that deal explosive damage also cause a lot of collateral damage. Even if the siege weapon misses the AC by 2 or less, it still hits. However, structures take half damage and creatures that succeed on their Dexterity saving throw take no damage.

## Siege Damage Injuries

For living creatures, a siege weapon impact is almost a death sentence. Not only may you die, but the prospects of finding any remains of your body or being able to resurrected it may be uncertain.

If siege damage deals more than half your max hp and reduces you to 0 hp, you suffer a Siege Critical Injury. Make a natural d20 roll on the table on pg. [101](#p101). Roll with advantage if the damage is impaling. Roll with disadvantage if the damage is explosive. 



<img src='https://www.gmbinder.com/images/NEZJGOJ.jpg' style='position:absolute; bottom:-40px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-50px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />

\pagebreak

# Character Options

### Ingenious Proficiency

Unless you are a spellcaster, Intelligence can be one of the least useful scores in *Dungeons and Dragons 5th Edition*. To remedy that, your cunning mind unlocks the potential to learn more skills and knowledge than others. 

When creating a character, you gain a number of points equal to your Intelligence modifier (minimum of 0). Subtract 2 points if your class is capable of casting spells based on your Intelligence or you plan to multiclass as such.

##### Proficiency Costs
| Benefit  | Cost |
|:---:|:-----------:|
|  Additional Class or Background Skill proficiency  | 2 |
|  Double proficiency for a Skill you are proficient in | 3 |
|  Subskill (pg. [50-58](#p50)) in a Skill you are proficient in | 1 |
|  Learn an additional language  | 1 |
|  Tool proficiency  | 1 |
|  Double proficiency for a Tool you are proficient with  | 2 |
|  Proficiency with 3 Simple or 2 Martial weapons | 1 |

When you permanently increase your Intelligence modifier, you may spend additional points as normal. Proficiencies learned by spending points cannot be lost once gained.

### Personality Profile

A Personality Profile is a tool for players who are uncertain about what action their character should take. Whenever you aren't sure how your character would act or react, you can decide with a die roll plus a modifier based on your character's personality traits. 

**You do not have to follow the result of a personality check if you don't like it.** The DM may suggest a Personality check, but can't make you roll or abide by the result.

#### Creating a Personality Profile

To fully sketch your character's personality, you may assign an advantage or disadvantage to any trait. You may assign double advantage or double disadvantage when certain traits are incredibly strong or devastatingly weak. As characters develop with time, you can change your profile at any point.

#### Personality Check

When you want to check a certain personality trait, make an Intelligence, Wisdom or Charisma ability check using the advantage or disadvantage (normal or double) assigned to the chosen trait. Then compare with the Difficulty table.

<div style="margin-top:-10px;"></div>

* **Intelligence.** Making a calm decision based on clearly understanding how your personality affects you and others, and whether the outcome benefits you.
* **Wisdom.** Resisting giving in to your emotions and personal urges, or making a choice between options while clouded by emotion, conflict, beliefs, or delusions. 
* **Charisma.** Expressing your personality and emotions in a way that satisfies your urges, or affects others in a profoundly dramatic way. 

\columnbreak

|   |  |
|:---:|:-----------:|
|  Simple emotions. Easy to resist urges. Obvious decisions with few risks involved.  | 10 |
|  Strong emotions. Powerful urges. Challenging decisions with significant consequences. | 15 |
|  Overwhelming emotions. All-consuming urges. Very difficult decisions with significant consequences for many, clouded by beliefs or delusions.  | 20+ |

##### Personality Traits

|             |  |
|:---:|:-:|
|  Bravery  | How well you handle fear and danger |
|  Reasoning  | Your ability to think your actions through and acknowledge bad ideas |
|  Discipline  | Your ability to commit to a routine, code, or rule despite adversity |
|  Stoicism  | Your ability to keep your emotions and pain to yourself |
|  Stability  | How emotionally volatile you are |
|  Optimism  | Your tendency to keep a positive attitude |
|  Risk-taking  | How willing you are to take risks |
|  Social Bravery  | Your resistance to social anxiety |
|  Introspection  | How well you can reevaluate your behavior and grow as a person |
|  Open-mindedness  | Your ability to accept when you are wrong and change your mind |
|  Social Awareness  | How aware you are of social norms |
|  Self-control  | Your ability to resist temptation |
|  Patience  | How well you can handle boredom |
|  Eloquence  | Staying calm and logical during emotionally charged conversations and debates |
|  Anger Management  | Your ability to resist resorting to violence when you're angry |
|  Grieving | How affected you are when reminded of a loss |
|  Desire  | How easily you are distracted by or infatuated with attractive people |
|  Trauma | How much a disturbing moment will traumatize you |
|  Mental Health  | The state of your mental health at the moment |
|  Trust  | How willing you are to trust people |
|  Confidence  | Your overall belief in yourself |
|  Narcissism  | Your self-obsession above all others |
|  Machiavellianism  | Your desire to manipulate others |
|  Psychopathy  | Your lack of empathy and sympathy |

</div>

\pagebreakNum

# Skills

___
In *Dungeons and Dragons 5th Edition*, skills are intentionally vague and simple to appeal to new players. This section lets you add depth and customization to skills in a meaningful way related to your character's background and training.

<div style="margin-top:-5px;"></div>

### Subskills

Subskills are a narrow domain of knowledge and mastery that further refines a Skill. You can develop a Subskill only in skills you are proficient in. Subskills let you benefit from a bonus to skill checks depending on its level of mastery.

Subskills also let you reroll your skill check if the d20 result is within the Reroll range. If you roll with advantage, you reroll the higher result. You may reroll only once and you may choose between the two results. 

| Focus Level  | Benefit | Training Points |
|:---:|:-----------:|:-----------:|
|  Trained  | +1 Reroll (1-3)| 50
|  Expert  | +2, Reroll (1-6) | 200
|  Master  | +3, Reroll (1-9) | 1000

### Starting Subskills

You may choose a number of Trained Subskills from this section equal to your proficiency modifier. When your proficiency modifier increases, you learn a new Trained Subskill. Additional Subskills and advancement to Expert and Master level can only be gained via Subskill Training.

You can also remove one skill proficiency to gain Trained Subskills in two separate skills you are proficient in.

### Subskill Training

Gaining new Subskills or advancing existing to Expert and Master level requires downtime and access to a teacher or source of knowledge. For example, the DM may suggest that Arcane Spell Lore can only be learned from someone trained in its basic skill (Arcana) or the same Spell Focus (Arcane Spell Lore), or with access to a library that cover the matter.

During a day of downtime with at least 4 hours of training or studying, you can make a skill check using the basic skill category of the Subskill. If you are trained by someone who has the same Subskill at a higher level than yours, you have advantage on the check. Depending on your result you earn a number of training points and once you acquire enough your Subskill advances to the next level. 

In campaigns where downtime is not possible, characters can spend 100 XP to make a training roll during a long rest as long as they spend 1 hour training or studying. 

| Check  | Benefit |
|:---:|:-----------:|
|  0-10  | No Points |
|  10-14  | 1 point |
|  15-19  | 2 points |
|  20-24  | 3 points |
|  25-29  | 5 points |
|  30+  | 8 points |

\columnbreak

<div style="margin-top:635px;">&nbsp;</div>

>
>##### Routine Check
>
>Anytime you are not threatened, distracted or pressured, the DM may allow you to do a Routine Check. You make a skill check and if you roll 7 or less, you take 8 as your result.
>
>Distractions or threats (such as combat) or suffering disadvantage to the ability check make it impossible to make a Routine Check. Routine checks require three to ten times (up to DM) the time needed to complete the task because you check for possible mistakes.
>
>If you have advantage on the roll, instead of rolling two dice and taking the higher result you add +5 to the roll.
>

<img
   src='https://www.gmbinder.com/images/qqkw17L.png'
   style='position:absolute;bottom:00px;left:195px;height:1070px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>


\pagebreakNum


## Strength

### Athletics

Athletics is broken down into four subskills: Climbing, Jumping, Mining and Swimming.

##### Climbing

Scaling cliffsides or reaching rooftops, few characters have lasting careers without the use of climbing out of trouble.

##### Jumping

Jumping allows characters to leap in great bounds horizontally, or try to attain great heights vertically. You can add your Focus bonus to your Strength score when calculating long and high jump distance.

##### Mining

Extracting minerals and metals from the ground is a staple in worlds where iron and steel see kingdoms rise and fall. This is a new use of the Athletics skill. DMs should set DCs based on how long it would take, or how difficult it would be to extract valuables. Failure results in half yields.

##### Swimming

Crossing rapid streams, delving into the lair of a black dragon, or communing with mermaids, few are the characters who stay dry forever.

## Dexterity

### Acrobatics

Acrobatics is broken down into five subskills: Balance, Diving, Escapology, Aerobatics and Tumbling.

##### Balance

Crossing narrow bridges, riding choppy seas, or running across ice, most characters actively avoid trying to fall prone.

##### Diving

Sometimes a belly flop is fine, but most characters want to avoid taking damage when falling into water. Slipping unnoticed into water to evade a dock guard might come in handy for port rogues.

##### Escapology

Between spider webs and bounty hunter manacles, a quick Escape is sometimes the better part of valor.

##### Aerobatics

Tumbling and swimming are great for characters darting around foes on the ground and underwater, but Aerobatics helps airborne characters do the same. DMs should set DCs similar to those skills for flying creatures.

##### Tumbling

Avoiding damage from a big fall or sliding through an opponents legs, mobile characters can often find a need to tumble.

\columnbreak

### Sleight of Hand

Sleight of Hand includes three subskills: Concealment, Juggling and Pickpocketing.

##### Concealment

While pickpocketing is great for liberating things from less observant targets, Concealment is great for making sure perceptive individuals aren't going to notice objects you've hidden. The DM should set the DC based on the size of the object and how difficult it would be to hide.

##### Juggling

Whether catching something to prevent it from falling or entertaining a crowd, it's not an uncommon skill for those with quick reflexes to pick up. 

##### Pickpocketing

Planting evidence or filling your pockets with the possessions of others, Pickpocketing is a staple in every major city.

### Stealth

Stealth is broken down into two subskills: Camouflage and Tailing. While both are used for hiding in different situations (staying still vs moving) the usual rules for stealth still apply as per page 177 in the Player's Handbook.

##### Camouflage

Hiding in place like a great cat stalking prey, Camouflage is a great tool for staking out targets or keeping your party hidden while resting.

##### Tailing

Wanting to move and not be noticed isn't just for Rogues. Keepers of Law or Bounty Hunters can find it useful for tracking targets. Either way, if you plan to move and be hidden Tailing is a useful skill to know.

## Constitution

### New Skill: Endurance

Endurance is a completely new main skill based on Constitution. The Barbarian, Druid, Fighter, Monk, Paladin and Ranger classes can add Endurance to the list of skills they can choose from. Endurance checks are made when your character needs to push their bodies beyond normal limits. Holding your breath, marching for days, going without sleep or food, and resisting the effects of alcohol are all times when one would roll an Endurance check.

Endurance can be broken down into three subskills: Environmental Adaptation, Pain Tolerance, and Running. 

##### Environmental Adaptation

Over time, your body and mind have adapted to an environment. When using your Endurance skill to resist the naturally occurring effects of that terrain, you can use adaptation instead. For example, in a desert, you could use it to resist a lack of water or overwhelming heat.

\pagebreakNum

When picking this expertise, select one type of terrain or environment. You can take this expertise multiple times, selecting one new environment each time. The terrains available to Rangers via the Natural Explorer trait (*Player's Handbook*, pg. 91) are the options you can choose from, each time you take the Environmental Adaptation expertise. 

<div style="margin-top:-10px;"></div>

* Arctic
* Coast
* Desert
* Forest
* Grassland
* Mountain
* Nautical
* Swamp
* Underdark
* Nautical

##### Pain Tolerance

Information is power, and to that end torturers consider information extraction an art. Pain Tolerance allows you to resist their craft. The DM should use Endurance or Pain Tolerance as the skill to resist Torture.

##### Distance Running

Sprinting short distances is fine, but sometimes characters need to cover vast distances without rest. Distance Running allows you to maintain your pace. DMs should use Distance Running to allow characters to cover greater distances overland than usual, with failure resulting in exhaustion.

## Intelligence

### Arcana

Arcana is broken down into five subskills: Abberation Lore, Construct Lore, Elemental Lore, Monstrosity Lore and Arcane Spell Lore.

\columnbreak

##### Aberration Lore

Aberrations are the strange and unusual creatures of the far realms. Experts can spend decades learning about these creatures but often end up going insane from picking up forbidden knowledge.

##### Construct Lore

Wizards are often considered fragile or frail, their strength in the arcane leads them to have powerful bodyguards made of stone, iron, or flesh. These constructed guardians will fight to the death for their masters.

##### Elemental Lore

Airy assassins, powerful efreeti, and alien gem-eating mounds of rock, the elemental planes spit out all manner of unusual creature. But their long history and ties to the creation of existence make them a well-studied group.

<div style="margin-top:-5px;"></div>

##### Monstrosity Lore

While natural creatures like wolves and bears are well known to all, there are rarer beings like hydras and centaurs that inhabit the lands. With unusual abilities like turning characters to stone from a paralyzing gaze or dissolving metals with only a touch, it's the wise hero who knows about these beasts. 

<div style="margin-top:-5px;"></div>


##### Arcane Spell Lore

A wizard pulls out a pinch of sulphur and bat guano. Woe to the hero who doesn't identify a fireball spell before experiencing it first-hand.


<div style="margin-top:-7px;"></div>


> ### Lore
>
> The lore skills defined below allow you to know lots about things in the world. Functionally they are all the same, although the information they provide is quite varied. Below is a guide on how DMs can set their DCs, using dragons as an example.
>
>* **Very Easy (DC 5)** - Very common knowledge. *Dragons are dangerous, have breath weapons and fly.*
>* **Easy (DC 10)** - Common knowledge. *The color of a dragon determines its breath weapon element.*
>* **Moderate (DC 15)** - Uncommon knowledge that most people don't know. *The color of a dragon also determines their resistance or immunity to the same element. Sometimes dragons are spellcasters.*
>* **Hard (DC 20)** - Rare knowledge. *Dragons of a specific color have been documented to use specific spells, or specific legendary actions.*
>* **Very Hard (DC 25)** - Very rare knowledge. *Elder dragons have these legendary lair actions when encountered inside their lairs.*
>
>Obviously it's up to the DM to determine how rare information is for their world, but here is a good rule of thumb. Commoners know stuff of DC 5-10. Educated individuals know things of DC 10-15. Scholars know things of DC 15-20 and Experts (people who focus on that area of expertise) know things of DC 20+


<img src='https://www.gmbinder.com/images/9Ztjf6l.jpg' style='position:absolute; top:560px; right:0px; width:900px' />

<img src='https://www.gmbinder.com/images/sKQMREa.png' style='position:absolute; top:-100px; right:0px; width:850px; transform: scaleX(-1); filter: grayscale(100%) brightness(97%);' />


\pagebreakNum

### History

History is broken down into 10 subskills: Humanoid Lore, Giant Lore, Dragon Lore, Regional Lore, Ancient Lore, Appraising, Bureaucracy, Heraldry, and Law.

##### Regional Lore

How old is Waterdeep? What are the laws regarding open magic in Sembia? Who is the consulate from Thay in Damara? Only a fool would go into a country without knowing anything about it.

When picking this skill, select a region from the Lore Regions sidebar. You can take this skill multiple times, selecting one new region each time. 

<div style="margin-top:20px;"></div>

> ### Lore Regions
>
> The 'default' setting for *Dungeons and Dragons 5th Edition* is Faerun. Below are the regions we suggest for the use of History, but you can adapt this to any world. Generally, if your world has only a few regions (such as Ravenloft), each one would get an appropriate skill. If you have a great many regions, try grouping them. For example, in Faerun exists the Bloodstone Lands. That covers Vaasa, Damara, and a little of the surrounding areas.
>
>* **The Sword Coast:** Waterdeep down to Amn.
>* **The Frozen North:** The Ten Towns of Icewind Dale down to Neverwinter and across to Netheril.
>* **Netheril:** The former desert of Netheril. 
>* **The Shining South:** The Snowflake Mountains across to Chessenta, from the Sea of Fallen Stars down to Halruaa.
>* **The Caliphate of Calim:** Tethyr, the country of Calim and Velen
>* **The Jungles of Chult:** Everything on the south side of the Shining Sea, over to Halruaa.
>* **Old Empires of the East:** Unther, Mulhorand, Murghom and Thay
>* **The Bloodstone Lands:** Vaasa, Damara and Narfel 
>* **The Moonsea:** The Dalelands, Impiltur, Cormanthor and the region between Vaasa and Netheril.
>* **The Sea of Fallen Stars:** Turmish, Sembia, Cormyr, Thesk, Aglarond and Chessenta
>* **The Sea of Swords:** Moonshae Islands, Lantan and all the islands of the Sword Coast.
>
> These are just a few detailed suggestions. If you want fewer regions, you could say the map is split into West, Central and Eastern Faerun.

\columnbreak

##### Humanoid Lore

Humans, Elves, Dwarves and the other races of the world have raised empires, toppled kingdoms, forged alliances, and broken them with each other.

##### Ancient Lore

Is that statue historically relevant to the people who made the dungeon you're in, or is it something that was added in a later age? Knowing who built things and why can give greater insight into how they can help you now.

##### Giant Lore

Uncertain which giant sitting in a circle is the leader? Can't tell a Storm and a Cloud giant apart? Perhaps picking up the Giant Lore skill would help your hero avoid these confusions. 


##### Dragon Lore

Everyone thinks they know all about dragons, but the creatures are so prolific and create so many half-breeds that filtering fact from fiction is difficult. A smart hero would want to study them.

##### Appraising

Knowing the cut of a gem, the difficulty in casting a bronze statue, or the elegance of a wooden box, allows you to understand exactly how ripped off you're going to get from the merchants in town.

##### Bureaucracy

A hero gains understanding of the ins and outs of governments, politics, and those who pull the strings behind the scenes. Characters who train in bureaucracy long for the safety of dungeons. 

<img src='https://www.gmbinder.com/images/qiXB1Pd.png' style='position:absolute; top:650px; right:0px; width:900px' />

<img src='https://www.gmbinder.com/images/sKQMREa.png' style='position:absolute; top:-50px; right:0px; width:850px; transform: scaleX(1); filter: grayscale(100%) brightness(97%);' />

\pagebreakNum

<img src='https://www.gmbinder.com/images/gnqL515.jpg' style='position:absolute; top:-100px; right:-200px; width:1050px' />
  
<img src='https://www.gmbinder.com/images/WGybwnz.png1' style='position:absolute; top:150px; right:0px; width:900px;transform: scaleX(-1); filter: grayscale(100%) brightness(97%);' />

<div style='margin-top:450px;'></div>

##### Heraldry

You see a shield emblazoned *Party per pale or and vert, a dragon sergeant sable*. Does it belong to the evil baron from the next county or the benevolent king in your debt? Knowing means the difference between being celebrated or captured.

##### Law

Knowledge of the rules and regulations, and the consequences when your party members break them.

<div style='margin-top:20px;'></div>

### Investigation

Investigation contains three subskills: Cryptography, Information Gathering, and Deduction.

##### Cryptography

Cryptography is used when someone wants to hide information inside something else. Characters can pick up the hidden meaning in a story, a password drawn into a painting, or a message left for a member of a hidden society. 

##### Information Gathering

Walking around town, picking up rumors, is a common adventurer past time. Plying locals with booze to get secrets out of them is a great cover for getting drunk in town.

##### Deduction

The ability to see connections between seemingly random facts, and the process of reaching a decision or answer by evaluating known facts.

\columnbreak

<div style='margin-top:425px;'>&nbsp;</div>

### Nature

Nature is broken down into 9 subskills: Beast Lore, Fey <br>Lore, Ooze Lore, Plant Lore, Botany, Cartography, Geography, Geology, and Poison. 

##### Beast Lore

Lions, Tigers and Bears. And Giant Rats. And Dinosaurs. Prepared characters are ready for any of these horrors nature decides to throw at them.

##### Fey Lore

The Seelie and Unseelie courts are something no rational character will want to delve into, but rarely do you interact with these strange beings of your own volition.

##### Ooze Lore

One would think that Oozes don't have much lore behind them but the Oozeologists of the worlds disagree. These creatures have a tendency to inhabit exactly the places where characters need to go.

##### Plant Lore

While farmers grow wheat and rotting wood grows new mushrooms, there are more mobile threats to the world. 

##### Botany

If it's not walking, talking and thinking but it's still a plant, those trained in botany know all about it. Farmers, cooks, rangers, and scholars tend to fill out their ranks.

\pagebreakNum

##### Cartography

There's a big difference between being able to read the lay of the land in person, and reading a map. Knowing how to create and read maps is especially important for adventurers wanting to explore new lands.

##### Geography

Knowing how and why mountains form, what rocks lay under the ocean and which side of trees moss tends to are all skills useful to those who trek through the wilds. You can read the lay of the land faster than any map.

##### Geology

No dwarf worth their salt would be caught dead not knowing the differences between rock types. If you plan on delving through caves or even the Underdark, it's advised you listen to their knowledge.

##### Poison

Is a substance safe to touch? To breathe? To apply to your weapon? Not all poisons are created equal and their dangerous nature means understanding them makes you much safer.

### Religion

Religion is broken down into seven subskills: Celestial Lore, Fiend Lore, Undead Lore, Ceremony, Divine Spell Lore, Prophecy Lore, and Zeal.

##### Celestial Lore

Angels are powerful creatures and it's an old hero's adage: don't anger anyone who can vaporize you in a beam of concentrated holy light.

##### Fiend Lore

Devils? Demons? It's ill-advised to trust either, but knowing which one sticks to their word and which doesn't will save your life.

##### Undead Lore

A skeleton stands before you, a few strands of hair clinging to the dome of its skull. A quick check will tell you if you should rush a disposable guardian or if you're about to be disintegrated by a powerful lich.

##### Ceremony

Watching a priest perform a ritual in the center of town is something most wouldn't consider unusual. Those keen of eye and armed with the knowledge of the hidden rituals of Tamoachan would know something evil is afoot.

##### Divine Spell Lore

A priest raises their hands, calling out for a powerful being to lend them power. With your hefty knowledge of divine spells, you'll know if they're summoning a fiendish weasel or casting a magical darkness.

##### Prophecy Lore

Characters deal with prophecies regularly, but it usually involves seeking out wise old mountain dwellers for their knowledge. Cut out the middle prophet by learning about them yourself.

##### Zeal

A priest needs to communicate with the followers of their God. Zeal allows them to pass religious messages along with their sermons, similar to Bards using the Perform skill with an audience.

<div style='margin-top:20px;'></div>

## Wisdom

### Animal Handling

Animal Handling consists of five subskills: Entomology, Falconry, Horsemanship, Kenneling, and Shepherding. 

##### Entomology

Favoured by the drow, your knowledge of insects and arachnids allows you to identify the small ones and convince the big ones to let you ride them.

##### Falconry

Working with majestic birds, you can train them to send messages to other cities, find food, or if your size allows, ride them.

##### Horsemanship

Many an adventurer has swung a sword from horseback, but these creatures need to be trained to wade into battle. Understanding your mount will go a long way towards keeping it from flinging you off.

##### Kennelling

While others know how to deal with animals and even ride them, learning kennelling will allow you to keep and breed them. Many lords will have large kennels of canines with which to hunt.

##### Shepherding

While not as glamourous as a giant spider, eagle, wolf or horse, the shepherd deals with herding groups of animals. A rider can calm a horse, but a shepherd can calm a whole herd of cows, sheep or goats.

<div style='margin-top:20px;'></div>

### Insight

Insight is broken into two subskills: Empathy and Combat Sense. 

##### Empathy

A bard might understand how to make others see their point of view with a silvered tongue. Empathy will let you understand how someone else is feeling without having to press them as forcibly. A more subtle art, certainly. 

##### Combat Sense

Everyone knows to take the high ground, but there are hundreds of battlefield strategies that can keep adventurers alive. Likewise, understanding that your opponent also knows these tricks is an equally useful tool.

### Medicine

Medicine is broken down into four subskills: Apothecary, Massage, Forensics, and Veterinary.

\pagebreakNum

##### Apothecary

Ointments, medicines and unguents are all different ways of solving what ails the common man who can't afford to down a healing potion whenever they get a headache. Being trained in the skill allows you to separate real cures from snake oil.

##### Massage Therapy

Physical therapy is not only a useful skill medicinally, but many a powerful ruler has had their ear swayed when they were in good moods during a skilled massage. 

##### Forensics

Looking at a battlefield and being able to determine which side won, where the victors went and who might have survived takes as sharp a wit as being able to look at a corpse and determine the cause of death. Such a skill can help keep the same fate from befalling the characters.

##### Veterinary

While many medicines apply in a general way between humans and horses, understanding the specific differences between the two can help you apply medicine to animals. 

### Perception

Perception is broken into three subskills: Eavesdropping, Guarding, and Tasting.

##### Eavesdropping

Listening through a door, from a distance, or around a corner is not an easy task. Another one of those skills that urban adventurers find useful.

##### Guarding

You have an ever-watchful eye that can spot movement or any other irregularities around you. You keep a perfect watch, able to tell friend from foe and patiently guard your surroundings. 

##### Tasting

Wow, you can really taste the poison! Every lord, king, or emperor will be glad they have royal tasters specially trained in picking out the dangers lurking within their food.

### Survival

Survival consists of 10 subskills: Find Water, Fire Mastery, Fishing, Foraging, Regional Navigation, Rope Mastery, Skinning, Tracking, Trapping, and Weather Sense.

##### Find Water

It's recommended that characters take time to drink a few times in an adventuring day. In some of the more dangerous regions of the world that can be hard to do. Being trained to find water can help mitigate this risk.

##### Fire Mastery

Something even child is taught and one of the basics of survival, you know how to start, stop, or enlarge a fire. Also, you can easily determine how long a fire has been burning.


\columnbreak

<img
   src='https://www.gmbinder.com/images/sR3Eoqe.jpg'
   style='position:absolute;bottom:00px;left:370px;height:1070px;transform:rotate(0deg);filter:opacity(100%);'
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-500px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-600px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-400px;
  left:-740px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreakNum

##### Fishing

Let others eat berries. Find yourself some of that delicious flaky food. A staple in any port location, many adventurers will supplement their dried foods with fish.

##### Foraging

No water nearby? Can't hunt because the animals in the forest belong to the king and his evil henchmen? If you're going to end up eating berries, it's a good idea to know the difference between the ones that will make you feel better and the ones that will leave you sick.

##### Region Navigation

Can't see the forest for the trees? Finding the Underdark keeps twisting around in circles? An ocean all around you and no idea where you are? Take some time to learn how to navigate the world and never feel lost again. When picking this skill, select a region from the Regional Lore expertise. You can take this skill multiple times, selecting a new region each time.

##### Rope Mastery

You might not want to kill your foes, but they certainly can't be allowed to walk around freely. Why not tie them up with a rope? Or tie off a rope as an impromptu ladder for those times you're in the dungeon and a ladder cannot be found.

##### Skinning

Animals need to be skinned before becoming the leather armor that ends up protecting your more lightly armored friends and warming more northern peoples.  It is recommended for DMs to set the DC based on how difficult removal is and to reward failures with lower yields.

##### Tracking

Not everyone can be so lucky as to track foes through wet mud or snow. Being skilled in spotting the tell-tale signs of your prey through the best and worst of conditions is useful to most adventuring groups.

##### Trapping

If the whole 'slowly chase animals and shoot them with arrows' thing isn't working for you, try luring them with some bait into a trap! It is advised that the DM sets the DC based on how plentiful creatures are in the area.

##### Weather Sense

Storm's a brewin' and you can tell! Know what the weather will be like in a few hours or even a few days, if you're really good at it.

## Charisma

### Deception

Deception is broken into five subskills: Acting, Boasting, Disguise, Fast Talking, and Mimicry.

##### Acting

From impressing audiences in the amphitheatres of large cites to tricking mob bosses in sewer lairs, the skill of Acting can be plied widely across the land.

##### Boasting

Drunks from taverns across the world, trained or otherwise, flood the ears of passers-by with the Boasting skill. Of course, every single boasted tale is absolutely factual as well! 

##### Disguise

This is the ability to apply pigments, makeup, and prosthetics to literally make someone look unlike themselves. The DM should set the DC according to how difficult it would be to make the target look like something else.

##### Fast-talk

Your lips are just as quick as your wits, and combining both throws people off of the intent of your words and directly where you want them (provided they don't notice your duplicity).

##### Mimicry

Calling out to a goblin tribe, mimicking their war boss, and having them let prisoners loose is a great test of your Mimicry skill. Of course, sounding like someone isn't enough to convince people you are them but it's a start.

### Intimidation

Intimidation is broken into two subskills: Torture and Savagery.

##### Torture

Extracting information from a source by force. The DM should use a Constitution or an Endurance (Pain Tolerance) roll to set the DC for using this skill.

##### Savagery

Talking to barbarians, tribal creatures, and other so-called 'uncivilized' societies requires a different set of skills from playing around in a court. The Savagery skill is used in the same way that Etiquette is used in civilized places or Zeal in locations of faith.

### Performance

Performance is broken down into seven subskills: Comedy, Dancing, Entertainment Mastery, Pantomime, Oratory, Poetry, and Singing.

##### Entertainment Mastery

You have mastered a form of entertainment appropriate to specific situations. When picking this subskill, select a style. You can take this subskill multiple times, selecting one new style each time. You can use this subskill to perform in a way that is particularly fitting to specific situation. If you use an instrument you are proficient with, you gain advantage to your skill check. 

<div style="margin-top:-10px;"></div>

* **Tavern Music** - jolly or rautious songs of simple nature
* **Ceremonial** - fit for weddings, funerals or other rituals
* **Storytelling** - telling great stories that inspire others
* **Emotional** - music that makes people laugh or weep
* **Concerto** - excquisite performance for the high classes

##### Comedy

What's the deal with Orcs subjugating other races? Comedy is a great way to endear yourself to your audience. Of course, the wrong joke to the right crowd could end very poorly. 

\pagebreakNum

<img
   src='https://www.gmbinder.com/images/GYh63uc.jpg'
   style='position:absolute;bottom:00px;right:160px;width:870px;transform:rotate(0deg);filter:opacity(100%)'
/>


<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:-0px;
  width:1270px;
  transform:
    scalex(.6);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)  
   '
/>

<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:330px;
  width:1270px;
  transform:
    scalex(1.12);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
  '
/>

<div style="margin-top:795px;"></div>

> ##### Creating New Subskills
> 
> The list of subskills is not exhaustive. You can propose new ones that the DM must approve. 
> 
> Well-designed subskills should always cover a narrow niche of knowledge or experience that doesn't benefit general adventuring or take over the main use of the skill itself. A great use for subskills are crafts and trades that can earn income.


\columnbreak

##### Dancing

Dancing is a universal sign of civilization. From the smallest Halflings to the largest Giants, every race seems to have their own culturally significant way to cut a rug.

##### Pantomime

This is the ability to pantomime actions and have others understand what you're conveying, such as communicating with party members without resorting to whispering. The DM should set the DC according to how difficult that action would be to convey without any other items.

##### Oratory

A booming voice, echoing through a large room, catches the attention of all. The oratory skill lets you say what needs to be said with a significant amount of panache.

##### Poetry

It's not for everyone but to the right target, Poetry is like the Massage skill for the soul.

##### Singing

Functionally similar to playing an instrument but requiring an entirely different set of skills, singing is oft said to be one of the most difficult instruments to perfect.

### Persuasion

Persuasion consists of six subskills: Bargaining, Debate, Etiquette, Leadership, Provocation, and Seduction

##### Bargaining

Honest merchants prefer a fair bargain versus a cunning tongue. The best deals are the ones which benefit everyone. 

##### Debate

You might be right, and they might be wrong, but if you don't understand the best way to express that then you'll truly have your work cut out for you.

##### Etiquette 

While your usual skills of persuasion will work with the commoners, nobles and gentry will require a much more refined touch. That's when it's time to break out your Etiquette skills to impress.

##### Leadership

Anyone can send a troupe of soldiers into battle. A leader will be there to inspire them to stay on the battlefield when the going gets tough, or to ignore their exhaustion when they're tired. The DM should set the DC based on how loyal that group is to the leader as well as what the leader is asking of that group.

##### Provocation

Your cunning words cut deeper than your sword, and it is a fair reason to make anyone react angrily, violently, or emotionally against their best interests.

##### Seduction

If you've got it, flaunt it. Of course there's no promise that you are what your target is looking for, but nothing ventured, nothing gained.

\pagebreakNum


# Inventory Slots

___
Many players dislike managing inventory weight and ignore the rules for encumbrance. These new Inventory rules allow you to manage your most frequently accessed items using a simple slot system. 

<div style="margin-top:-5px;"></div>

### Item Bulk

Instead of a precise weight, items have a Bulk value based on their approximate size and mass. Players and the DM can easily classify every item using the suggested examples from the table below. Most adventuring items fall into the Medium size category. Most quest items are either Tiny or Small. Add together the Size and Mass value to get the Bulk of an item.

<div style="margin-top:0px;"></div>

##### Item Sizes
| Bulk  | Category | Examples for Medium size characters|
|:---:|:-----------:|:-----------|
| – | Tiny | Very small (smaller than your palm). Hold many in one hand. Many fit in a pocket. Coins, pebbles, keys, rings, small gems.
| 0 | Small | Short length (up to a handspan / 9 inches). Held comfortably in one hand. Can fit one in a pocket that visibly bulges. A dagger, a potion, a scroll, a pocket-sized book.
| 1 | Medium |  Medium length (up to an arms-length / <br>2 ft). Held with one hand. Cannot fit in a pocket, but can be attached to a belt or strap. A sword, a set of tools, a spell book, a healing kit, a lantern, quiver of 20 arrows. 
| 2 | Large | Long length (longer than arm). Requires one hand to hold or two hands to use. All weapons with Reach or Two-Handed. All shields.  A long sword, a large sack, small furniture.

<div style="margin-top:-10px;"></div>

##### Item Mass
| Bulk  | Category | Examples |
|:---:|:-----------:|:-----------|
| -1 | Light | The item is very light for its size. You can hold several in your hand if the size allows. Includes all weapons with Light property.
| 0 | Normal | The item is easy to carry in one hand.
| +2 | Heavy | The item is heavy or bulky, and if Medium or Large requires two hands to carry. Includes all weapons and shields with Heavy property.

### Inventory Slots

You have a number of Prepared Item and Stowed Item slots based on your Strength score, or based on the Capacity of your Clothes and Containers. Each item takes up to number of slots equal to its Bulk value. 


<div style="margin-top:15px;"></div>

>Armor (except Shields) never use the slot system and cannot be used as Prepared or Stowed items. To interact with Armor, use the don and doff armor rules (*Player's Handbook*, pg. 146)

<div style="margin-top:20px;"></div>


\columnbreak

##### Prepared Items
Prepared items are items that are kept in easily accessible pockets, sheaths, holsters or belt pouches. You can draw a Prepared Item using your Free Item Interaction (see pg. [5](#p5)). 

You can have Prepared slots equal to half your Strength score or the Capacity value of your clothing, whichever value is higher. Items with 0 Bulk still take 1 Prepared slot.

##### Clothing Capacity for Prepared Items

<div style='column-count:2'>

| Clothing  | Capacity|
|:---:|:-----------:|
| Belt | 4
| Commoner | 5


| Clothing  | Capacity|
|:---:|:-----------:|
| Traveller | 6
| Assassin's | 8

</div>

<div style="margin-top:-15px;"></div>

##### Stowed Items

Stowed items are on top of backpacks, in carefully-balanced leg or arm pockets, or otherwise packed away where they will least encumber you. Any Stowed items need to be stored in a Container (see below) and the Container must be carried by you or located within 5 feet reach from you.

You can draw a Stowed item using your Action to quickly dig it out of your backpack or sheaths. You can have Stowed slots equal to your Strength score.

##### Other items

All items that are not Prepared or Stowed cannot use the slot system and their weight counts towards your Encumbrance (pg. [60](#p60)). During combat you must spend an Action to open one of your backpacks and rummage in it, followed by another Action to draw the desired item. 

### Containers

Containers are used to store Stowed items, as well as your whole inventory. A container's Size category is a limit on the largest item you can place inside it, and its own size. The Slots value defines how much total Bulk can be stowed inside it for easy access. The Weight value is how much general encumbrance can be stored in the container.

In addition to containers, you have storage space for 10 basic rations, a waterskin, and a purse that holds 100 coins. That space doesn't count towards your Prepared or Stowed items. Your clothing also doesn't occupy a slot when worn.

<div style="margin-top:-6px;"></div>

##### Containers
| Container  | Max. Size | Stow Slots | Weight
|:---:|:-----------:|:-----------:|:-----------:|
| Messenger Bag | Medium | 3 | 15 lbs
| Small Sack | Medium | 4 | 30 lbs
| Large Sack | Medium | 5 | 40 lbs
| Backpack | Large | 8 | 30 lbs
| Traveling Backpack | Large | 10 | 60 lbs

<div style="margin-top:-6px;"></div>

### Inventory Slots and Weight

If you must calculate the total weight of all your Prepared and Stowed items, each slot that is occupied by an item with Bulk 1 or more weight 3 pounds. Items with Bulk 0 or less have no weight. Empty slots also have no weight as well. 

\pagebreakNum

# Realistic Encumbrance

___
The variant rule for Encumbrance (*Player's Handbook*, pg. 176) does not offer realistic scaling of physical strength. Use the improved table below to determine whether your gear is heavy enough to slow you down. Depending on your carrying capacity, you may be carrying a light, medium, or heavy load. Your gear should not exceed your Maximum capacity.

When using the Inventory rules (pg. [59](#p59)) to avoid the need to calculate weight for all your Prepared and Stowed items, you can reserve 3 pounds for each Prepared slot and reserve enough capacity for Stowed items that you need to be more accessible. The remaining capacity is available for your worn armor as well as treasure haul or incidental baggage. 

##### Carrying Capacity (Up To Weight Maximum)
| Strength | Light | Medium | Heavy | Maximum 
|:--------------:|:----------:|:-----------:|:----------:|:----------:|
| 1 | 3 lbs | 6 lbs | 9 lbs | 12 lbs |
| 2 | 6 lbs | 12 lbs | 18 lbs | 24 lbs |
| 3 | 10 lbs | 20 lbs | 30 lbs | 40 lbs |
| 4 | 13 lbs | 27 lbs | 40 lbs | 53 lbs |
| 5 | 17 lbs | 33 lbs | 50 lbs | 67 lbs |
| 6 | 20 lbs | 40 lbs | 60 lbs | 80 lbs |
| 7 | 23 lbs | 47 lbs | 70 lbs | 93 lbs |
| 8 | 27 lbs | 53 lbs | 80 lbs | 107 lbs |
| 9 | 30 lbs | 60 lbs | 90 lbs | 120 lbs |
| 10 | 33 lbs | 67 lbs | 100 lbs | 133 lbs |
| 11 | 38 lbs | 77 lbs | 115 lbs | 153 lbs |
| 12 | 43 lbs | 87 lbs | 130 lbs | 173 lbs |
| 13 | 50 lbs | 100 lbs | 150 lbs | 200 lbs |
| 14 | 58 lbs | 117 lbs | 175 lbs | 233 lbs |
| 15 | 66 lbs | 133 lbs | 200 lbs | 266 lbs |
| 16 | 77 lbs | 153 lbs | 230 lbs | 307 lbs |
| 17 | 87 lbs | 173 lbs | 260 lbs | 347 lbs |
| 18 | 100 lbs | 200 lbs | 300 lbs | 400 lbs |
| 19 | 117 lbs | 233 lbs | 350 lbs | 467 lbs |
| 20 | 133 lbs | 267 lbs | 400 lbs | 533 lbs |
| 21 | 153 lbs | 307 lbs | 460 lbs | 613 lbs |
| 22 | 173 lbs | 347 lbs | 520 lbs | 693 lbs |
| 23 | 200 lbs | 400 lbs | 600 lbs | 800 lbs |
| 24 | 233 lbs | 467 lbs | 700 lbs | 933 lbs |
| 25 | 267 lbs | 533 lbs | 800 lbs | 1067 lbs |
| 26 | 307 lbs | 613 lbs | 920 lbs | 1227 lbs |
| 27 | 347 lbs | 693 lbs | 1040 lbs | 1387 lbs |
| 28 | 400 lbs | 800 lbs | 1200 lbs | 1600 lbs |
| 29 | 467 lbs | 933 lbs | 1400 lbs | 1867 lbs |
| 30 | 533 lbs | 1067 lbs | 1600 lbs | 2133 lbs |

\columnbreak

### Encumbrance

If you are carrying a Medium or Heavy load, you are slowed down and you suffer penalties as listed in the table below.

You also suffer a level of Soft Exhaustion (pg. [13](#p13)) when you carry physical activity (such as walking) for a number of hours shown in the Time column, without taking a short rest.

<div class="encumbtab">

##### Encumbrance
| Load  | Time | Effect |
|:---:|:-----------:|:-----------|
|  Light  | — | No negative effect.  |
|  Medium  | 6 | Speed decreased by 10 feet. Your maximum Dexterity bonus to AC is +3. Disadvantage on Ability checks using Dexterity. |
|  Heavy  | 3 | Speed decreased by 20 feet. Your maximum Dexterity bonus to AC <br>is +1. Disadvantage on Ability checks, Attack rolls and Saving throws using Strength, Dexterity and Constitution.  |

</div>


### Size and Body Shape

Creatures with a size category different than Medium apply a modifier to their Load thresholds. Quadrupeds can carry heavier loads than bipeds can and have their own modifiers. 

##### Capacity Modifiers

<div style='margin-bottom: -15px; margin-left: 105px'>

-------------------- **Size Categories** -------------------- </div>

| Body Shape | T | S | M | L | H | G |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Bipedal | ×1/2 | ×3/4 | ×1 | ×2 | ×4 | ×8 | 
| Quadrupedal | ×3/4 | ×1 | ×1.5 | ×3 | ×6 | ×12 | 

### Feats of Strength

You can lift a weight up to your Maximum Load over your head or deadlift up to twice that for a number of rounds equal to your Strength Modifier (minimum of 1). You can pull or push a weight up to twice your Maximum Load for a number of minutes equal to your Strength modifier (minimum of 1).

While engaged with weights above your Heavy Load your speed drops to 5 feet, you do not benefit from Dexterity bonus to Armor Class, and you are unable to take any action other than maintaining the weight. You stagger and you cannot enter difficult terrain. Taking damage causes you to drop the weight unless you make a Constitution saving throw against DC 20 or the damage taken, whichever is higher.

If you want to exceed your physical limits, attempt a Strength (Athletics) check against DC 15. For each 5 points your result beats the DC, you can increase your Maximum Load by a number of pounds equal to your Strength Score. 

If you want to ignore the effect of Soft Exhaustion from Medium or Heavy Load, or extend your lifting or pull/push period, attempt a Constitution (Endurance) check (see pg. [51](#p51)) against DC 15. For each 5 points your result beats the DC, you increase the period (hours, minutes, or rounds) by one.

\pagebreakNum


# Realistic Opponents

___
The *Dungeon Master's Guide* (pg. 274) offers guidelines on how to create a monster for your adventures. While sufficient for fantasy monsters, realistic humanoids must have physical limitations and abilities that should closely resemble those of player characters to remain believable. This section contains additional rules to improve realistic opponent design.

<div style="margin-top:-3px;"></div>

### Concept

When creating realistic opponents, start by selecting official or third party classes, subclasses and feats. You will be using the class hit die and its abilities for your opponent.

<div style="margin-top:-3px;"></div>

### Attributes

You can set arbitrary values between –5 and +5 to each of the six attributes, or roll them using a mix of 3d6 and "4d6, drop the lowest" methods.

Ordinary, mediocre opponents roll five times using "3d6" and one time using "4d6, drop the lowest" values and distribute them as required. Competent opponents roll three times using "3d6" and three times using "4d6, drop the lowest" values. Heroic and highly competent opponents roll six times using"4d6, drop the lowest" like player characters in the *Player's Handbook*.

<div style="margin-top:-3px;"></div>

### Hit Points 

At CR 1, realistic opponents should start with 6 hit dice of its corresponding size category (usually d8 for humanoids). 

For each category below CR 1, subtract 1 hit die. For each category above CR 1, add one hit die of its size category and two hit dice of its chosen class. 

Realistic humans reach peak health condition at 20 hit dice. You can assign different values to other races, such as 18 to elves, 25 to half-orcs and 30 to dwarves. 

As an opponent ages, their hit dice total will decline. As an opponent passes its prime, the hit dice maximum decreases by 10%, rounded down. If an opponent is old or venerable, the hit dice maximum is decreased by 20%, rounded down. A life of deprivation or disease would decrease hit dice further.

<div style="margin-top:-3px;"></div>

### Damage per Round

Damage per Round must be distributed into one or several attacks. Without multiple attacks, your opponent will either deal all or no damage at all against players with high AC. By distributing damage into multiple attacks, you improve their odds to deal at least some damage.

For each 10 points of the Damage per Round total allow for a separate attack after the first, up to five attacks. Each attack must deal a roughly equal share of the total. Subtract the Strength (melee) and Dexterity (ranged) modifier from each attack, and convert the remaining damage into the weapon dice of a desired weapon.

### Attacks

Even if your opponent can make only one attack per round, it is good practice to prepare several different attack options for various situations. If you are expecting players with very high AC, you should prepare a Grapple or a Saving Throw-based attack to challenge them.

Your opponent may be particularly proficient with specific attacks. You may distribute up to 2 points of Attack bonus from one attack to another. The improved attack has the Recharge (5-6) property and on a failed Recharge the opponent must use the weakened attack.

You may use Combat Options and Weapon Properties in this supplement as attacks, if your players are actively using them too. Put a Recharge(4-6) requirement on them to make sure your opponent is not overusing them.

<div style="margin-top:-0px;"></div>

### Conditional Damage

High offensive CR allows for more damage than a realistic opponent can fit within five attacks. If your opponent must deal 80 damage per round, but five attacks can deal about 50, you have to distribute the remaining 30 elsewhere. 

You can assign extra damage to attacks when certain conditions are met, or when the target fails a saving throw with an appropriate Save DC for the opponent's CR. The extra damage uses the same damage type as the main attack and is included when checking for Wound Risk (pg. [8](#p8)). 

You can convert 10 damage per round into a chance to inflict condition instead of extra damage. The condition must allow the target to spend its action to recover (such as Standing from Prone, or Remove Burning Clothes), or repeat a saving throw at the end of its next turn (like a Constitution saving throw to recover from Stunned or Poisoned). 

You can convert 10 damage per round and make an attack also inflict an extra Wound Risk if it hits. The target suffers an extra Wound Risk even if the total damage doesn't exceed the threshold of 12 + Constitution modifier. The target can attempt a saving throw at an appropriate Save DC to avoid the guaranteed Wound Risk.

You can convert 20 damage per round and make an attack also inflict an Injury Token if it hits. The target can attempt a saving throw at an appropriate Save DC to avoid the guaranteed Wound Risk.

When creating multiple conditions on different attacks, avoid creating self-sufficient synergies. Allow different opponents to play as a team and complement each other. 

<div style="margin-top:-10px;"></div>

___
>
> <div style="margin-top:-10px;"></div>
>
> ### Example Actions
> ***Quarterstaff.*** *+5 to attack, 1d8+3 bludgeoning damage.* If the target is prone, your attack deals 2d8 extra damage. 
>
> <div style="margin-top:-5px;"></div>
>
> ***Knife.*** *+2 to attack, 1d4+2 piercing damage.* The target must make a DC 13 Dexterity check or take 3d4 extra damage. 
>
> <div style="margin-top:-5px;"></div>
>
> ***Knee Strike.*** *+3 to attack, 1d4+1 bludgeoning damage.* If you have advantage on your attack roll, the target must make a DC 13 Constitution check or drop prone. [Converts 10 damage into a prone condition].  
>
> <div style="margin-top:-5px;"></div>
>
> ***Heart Pierce.*** *+5 to attack, 1d6+5 piercing damage.* The target must make a DC 11 (13, minus 2) Dexterity check or take a guaranteed Open Wound. [Converts 10 damage into an Open Wound]. 

\pagebreakNum

<div style="margin-top:20px;"></div>

### Abilities

Realistic opponents have a class and subclass just like players do and use the same abilities. The table below lists which class and subclass abilities are available to the opponent based on its CR.

Player abilities may increase your opponent's effective CR compared to a monster CR from other sources. The increase modifier is listed as a CR increase in the table.

| Minimum CR  | Class Abilities | Subclass Abilities | CR Increase
|:---:|:-----------:|:-----------:|:-----------:|
|  1+  | Level 1-5 | – | –
|  3+  | Level 1-11 | Level 1-7| +1
|  6+  | Level 1-17 | Level 1-15| +1
|  9+  | Level 1-20 | Level 1-20| +2

You may substitute features and abilities from classes and subclasses with feats or monster abilities from the *Monster Manual* or other sources. Make sure you substitute features important to combat encounters, not flavor or skill abilities.

If you want your opponent to multiclass, you can replace any class or subclass ability available at its CR for another from another class or subclass, as long as the new ability is <br>of the same type (class or subclass) and is gained on a level tier lower than the ability that is being replaced. 

It is possible but not advised to multiclass with abilities that unlock new mechanics, resources or lists of options (such as the list of Battlemaster techniques or Ki points). 

### Spellcasting

Spellcasting is a feature inherent to some player classes or subclasses, and some monster types. Its choice of spells and spellcasting ability are determined by its class. 

Realistic opponents of CR 1 count as a spellcaster of 2nd level. For each 2 CR above 1, the spellcasting level increases by 1. 

The choice of spells also affects the opponent's CR. If it wields destructive magic, check its highest spells damage output as an alternative to its attacks' total Damage per Round to calculate the opponent's offensive CR. 

### Legendary Actions

Realistic opponents with a high CR make great champions or memorable villains that players will try to challenge as a group. Against experienced players and without any support, a villain will be easily overwhelmed. 

You can balance such encounters and utilize extra damage by giving your opponent access to Legendary Actions. A boss creature meant to be engaged by the whole group needs to have Legendary Actions equal to party size minus one. Elite creatures meant as a group leader or challenging opponent can have one or several.

The table below defines four power tiers with descriptors you may attach to their creature type, a number of Legendary Actions per turn, an increase to the opponent's effective CR and extra Hit Dice based on their chosen class. 

When calculating the effective CR of a Legendary opponent, consider any creature of CR 1/2 or lower as having a CR of 0 for the purpose of this calculation. 

\columnbreak

<div style="margin-top:40px;"></div>

| Power Descriptor  | CR Increase | Legendary Actions | Extra Hit Dice
|:---:|:-----------:|:-----------:|:-----------:|
|  Elite  | +1 | 1 | +2 class
|  Boss | +2 | 2 | +4 class
|  Legendary  | +3 | 3 | +6 class
|  Epic  | +4 | 4 | +8 class
|  *Custom*  | *+1/Leg.A* | *Players-1* | *+2/Leg.A*

Opponents can perform Legendary Actions after another creature’s turn, provided they can “pay” the action cost for them. For example, an Elite opponent will not be able to perform Legendary Actions that cost 2 actions because they can only take 1 such action per round. Only one Legendary Action option can be used at a time and only at the end of another creature’s turn. The opponent regains all spent Legendary Actions at the start of its turn. 

The list below contains Legendary Actions that represent extraordinary skill or combat insight. 

___
>
> <div style="margin-top:-10px;"></div>
>
> ### Legendary Actions
> ***Attack.*** The opponent makes a single melee or ranged attack.
>
> <div style="margin-top:-5px;"></div>
>
> ***Move.*** The opponent moves up to its speed without provoking attacks of opportunity.
>
> <div style="margin-top:-5px;"></div>
>
> ***Cast a Cantrip.*** The opponent casts a cantrip, provided it is able to cast spells.
>
> <div style="margin-top:-5px;"></div>
>
> ***Multiattack (Costs 2 Actions).*** The opponent uses its multiattack, provided it already has such an action option.
>
> <div style="margin-top:-5px;"></div>
>
> ***Special Ability (Costs 2 Actions).*** The opponent uses one of its special abilities that requires an action, provided that it has such an ability.
>
> <div style="margin-top:-5px;"></div>
>
> ***Cast a Spell (Costs 2 Actions).*** The opponent casts a spell, provided it is able to cast spells.
>
> <div style="margin-top:-5px;"></div>
>
> ***All-Out (Costs 3 Actions).*** The opponent moves up to its speed without provoking attacks of opportunity and uses its multiattack, provided it already has such an action option.

In addition to Legendary Actions, opponents also gain access to the same amount of Legendary Reactions. Unlike Actions, they do not recover at the start of the opponent's next turn but at the dawn of the next day.

___
>
> <div style="margin-top:-10px;"></div>
>
> ### Legendary Reactions
> ***Legendary Resistance.*** If the opponent fails a saving throw it can choose to succeed instead.
>
>
>
> ***Legendary Conditioning***. If a condition or effect makes you suffer from disadvantage, ignore it <br>until the end of the turn.

\pagebreakNum

### Final Touches

**Armor Class.** Increase or decrease AC by up to 3 points. High AC opponents usually have lower than average HP. 
___
**HP.** You can increase or decrease hit points by up to 30%. Realistic opponents (**real.HP** column) peak at 20 hit dice. High HP opponents usually have a lower AC or Attack bonus.
___
**Attack.** Increase or decrease their Attack bonus by up to 2 points. High Attack opponents usually have lower than average HP or Armor Class. Opponents can have various attacks with a lower Attack bonus but higher damage output.

<br>

<div style="margin-top:6px;"></div>

**Damage.** Increase or decrease damage per round by up to 50%. High damage opponents usually have lower AC or HP.
___
**DC and Save.** This value represents a creature's top attribute save. You can increase or decrease the DC and Save by up to 2 points.
___
**Number of Attacks.** For each 10 points of damage, deal one extra attack. Distribute damage between all attacks.  
___
**Legendary Action.** Some opponents of CR 12+ can have a number of optional Legendary attacks.

<div class='classTable wide'>

##### Balanced Monster CR Scaling
|CR|AC|HP|real.HP|+Attack|Damage|DC|Save|No. Attacks|Leg. Actions|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**0**|12|3|10|+2|1|9|+1|1|–|
|**1⁄8**|12|9|15|+3|3|10|+2|1|–|
|**1⁄4**|13|15|20|+3|5|10|+2|1|–|
|**1⁄2**|13|24|25|+4|8|11|+3|1|–|
|**1**|13|30|30|+4|10|11|+3|1|–|
|**2**|13|45|45|+5|15|12|+4|2|–|
|**3**|14|60|60|+5|20|12|+4|2|–|
|**4**|14|75|75|+6|25|13|+5|3|–|
|**5**|14|90|90|+6|30|13|+5|3|–|
|**6**|15|105|105|+7|35|14|+6|4|–|
|**7**|15|120|120|+7|40|14|+6|4|–|
|**8**|15|120|120|+8|40|15|+7|4|–|
|**9**|16|135|135|+8|45|15|+7|5|–|
|**10**|16|150|150|+9|50|16|+8|5|–|
|**11**|16|165|165|+9|55|16|+8|5|–|
|**12**|17|180|180|+10|60|17|+9|5|1|
|**13**|17|195|180|+10|65|17|+9|5|1|
|**14**|17|210|180|+11|70|18|+10|5|1|
|**15**|18|225|180|+11|75|18|+10|5|1|
|**16**|18|240|180|+12|80|19|+11|5|2|
|**17**|18|255|180|+12|85|19|+11|5|2|
|**18**|19|270|180|+13|90|20|+12|5|2|
|**19**|19|285|180|+13|95|20|+12|5|2|
|**20**|19|300|180|+14|100|21|+13|5|3|
|**21**|20|315|180|+14|105|21|+13|5|3|
|**22**|20|330|180|+15|110|22|+14|5|3|
|**23**|20|345|180|+15|115|22|+14|5|3|
|**24**|21|360|180|+16|120|23|+15|5|4|
|**25**|21|375|180|+16|125|23|+15|5|4|
|**26**|21|390|180|+17|130|24|+15|5|4|

</div>

\pagebreakNum

# Encounter Balancing

___
*Dungeon Master's Guide* (pg. 82) suggests using XP budget to create balanced encounters. This approach can be difficult to master since you may end up with overwhelming group of weaker opponents or overpowering solo villains at very high challenge rating. The following method simplifies that math of encounter building and resolves its issues without need for modifiers for multiple monsters and other tweaks.

### Party  Rating

Sum up the Rating value of all players and NPCs that assist them in combat, based on their player level. 

<div style='column-count:2'>

| Player Level  | Rating |
|:---:|:-----------:|
|1|1|
|2|1.5|
|3|2.5|
|4|3|
|5|5|
|6|6|
|7|7|
|8|8|
|9|9|
|10|10|

| Player Level  | Rating |
|:---:|:-----------:|
|11|11|
|12|12|
|13|13|
|14|14|
|15|16|
|16|18|
|17|20|
|18|22|
|19|24|
|20|26|

</div>

### Encounter  Rating

Sum up the Rating value of all hostile creatures that are part of the encounter, based on their challenge rating. 

<div style='column-count:2'>

| Monster CR  | Rating |
|:---:|:-----------:|
|0|1/3|
|1/8|1/2|
|1/4|1|
|1/2|1.5|
|1|2|
|2|4|
|3|6|
|4|8|
|5|11|
|6|13|
|7|15|
|8|18|
|9|21|
|10|24|
|11|28|
|12|32|
|13|36|

| Monster CR  | Rating |
|:---:|:-----------:|
|14|40|
|15|44|
|16|48|
|17|52|
|18|56|
|19|60|
|20|64|
|21|76|
|22|88|
|23|104|
|24|120|
|25|136|
|26|152|
|27|168|
|28|184|
|29|200|
|30|216|

</div>

\columnbreak

### Monster Rating

Once you calculate your Party Rating, you can compare it with the Encounter Rating to figure out the difficulty of the encounter. You can add or remove hostile creatures to get closer to your desired difficulty. 

Encounter difficulty descriptions listed in the  *Dungeon Master's Guide* reflect the combat-heavy adventuring of a dungeon crawl. To be properly challenged and exhausted, players must face 6 to 8 Medium or Hard encounters per <br>day, with about two short rests between them. Outside of published adventures, such combat heavy adventuring is rare and DMs should focus on one to three Deadly encounters.

If you want to challenge your players with only one defining encounter per day, use the new Challenging and Punishing difficulties. When creating such encounters, the maximum CR of a single creature should not be more than 3 levels than average player level among the party. 

| Encounter<br>Difficulty  | Encounter % of <br>Player Rating |
|:---:|:-----------:|
|Very Easy, no limit, no risk| up to 40%|
|Medium, up to 8/day, no risk|~60%|
|Hard, up to 6/day, forces use of powers|~80%|
|Deadly, up to 2/day, risk of player down|~100%|
|Challenging, 1/day, small risk of TPK|~125%|
|Punishing, 1/day, high risk of TPK|~150%|

<div style="margin-top:0px;"></div>

### Modifying CR

A creature's Challenge Rating can vary widely depending on the player's resources to deal with it. Check the table below for some common modifiers. Round down, where needed.

| Condition  | CR Modifier |
|:---:|:-----------:|
|Resistance to almost all player damage| +1/3 CR|
|Benefits from difficult terrain or magic aura|+1 to +2|
|Evaluates party and targets weakest players|+1|

<div style="margin-top:0px;"></div>

### Characters as Enemies

Player characters and opponents are built using different rules. Player Characters have less hit points than monsters but more abilities and powers at their disposal, and usually help each other to overcome the odds. Their opponents have roughly double the health points in order to survive long enough to challenge the players, but they have few and simple abilities that define their tactics in combat. The exception of this rule are spellcasting monsters who are generally more capable casters than players at the same Challenge Rating. 

If you want to use a non-spellcasting player character as an opponent, its CR is equal to half the levels, rounded up. If you want to use a spellcasting character as an opponent, its CR is equal to two thirds of its spellcasting level, rounded up. 

Increase the CR by 1 or 2 if the character build is using optimized build or powerful abilities unavailable to players. 

\pagebreakNum

## Hordes

If combat would be slowed down by a large number (16 to 20) of identical creatures working as a collective towards <br>a common goal, you can instead represent them as a single horde opponent. You can also use hordes to represent each separate squad in mass combat warfare. 

### Horde Template

To create a horde, choose a creature and apply the following template to its statistics. 

___
**Hit dice.** The horde's hit dice are d20, and total hit points should be roughly equal to 12 × the hit points of one creature.
___
**Abilities.** The horde's Strength score increases by 6, and Intelligence and Charisma decrease by 4.
___
**Size.** A horde of Small or Medium creatures is sized as Gargantuan, taking up a 20 feet by 20 feet area on a map. Creatures that are Large or larger are difficult to fit into hordes, and should be treated as individual combatants.  Groups of Tiny creatures are considered a swarm (pg. [67](#p67)). 
___
**Speed.** The horde's movement type and speed is based on the individual creatures. Except when it uses the Stampede action, a horde's movement speed is decreased by 5 feet.
___
**Condition Immunities.** The horde gains immunity to the following conditions: charmed, frightened, grappled, paralyzed, poisoned, petrified, prone, restrained, stunned. Additionally, the horde is immune to any spell or effect that would alter its form. These immunities do not apply when the spell or effect targets 10 members or more.
___
**Crowd Shape.** The horde can occupy another creature's space and vice versa, and the horde can move through any opening large enough for an individual creature. 
___
**Creature Features.** The horde retains some of the features of the individual creatures that comprise it. If the horde contains a minority of different creatures, their activated abilities should have a Recharge (5-6) property.
___
**Limited spellcasting.** The horde is unable to cast spells. If the horde consists of spellcasters, they must separate from the horde as individual creatures to cast spells.
___
**Group Initiative.** When rolling for initiative or skill checks, if the horde rolls 7 or less it can take 8 instead of the die result. 
___
**Multiattack.** The horde makes four attacks, or two attacks if the horde is Bloodied (pg. [12](#p12)). If the individual creatures in a horde originally had the Multiattack action, the horde gains one extra attack.
___
**Assault Attack** When the horde has enemies surrounded, it can use its action to make a single assault attack against multiple enemies within the area it occupies. See the rules for Assault Attacks (pg. [66](#p66)).
___
**Challenge Rating.** It is recommended that the base creature used for the horde is CR 1/2 or less. The horde's Challenge Rating increases by 5 when calculating its Encounter Rating (pg. [64](#p64))

\columnbreak

### Horde Commander

The role of a commander is assigned to a separate creature that bears similarities to the horde it leads, but exemplifies itself in some factor. Examples of such creatures include the orc war chief, a priest among a peasant mob, etc. 

While a commander is within 60 feet of its horde, it can take 1 legendary action choosing from the options below, at the end of another creature's turn. The commander regains the spent legendary action at the start of its turn.

<div style="margin-top:-5px;"></div>

___
>
> <div style="margin-top:-10px;"></div>
>
> ### Commander Legendary Actions
> ***Attack.*** The commander and the horde both make a single melee or ranged attack.
>
> <div style="margin-top:-5px;"></div>
>
> ***Charge.*** The commander and the horde both move up to their speed.
>
> <div style="margin-top:-5px;"></div>
>
> ***Rally.*** The horde gains temporary hit points equal to the commander's Challenge Rating plus the commander's Charisma modifier (minimum of one).

### Horde Actions

The horde can choose from additional actions during its turn.

<div style="margin-top:-0px;"></div>

#### Stampede

When the horde uses the Dash action, it may choose to Stampede instead. If the horde enters the space of one or several individual creatures that are no more than one size larger than an individual member of the horde, they must succeed on a Strength saving throw or be knocked prone. The DC of this saving throw is equal to 8 + the horde's proficiency bonus + the horde's Strength modifier. 

<div style="margin-top:-0px;"></div>

#### Protect

A horde can allow friendly creatures to enter its occupied space and protect them from enemy attacks. A horde can protect up to three creatures of the same size as the horde's individual creatures. The creatures must share space occupied by the horde and Engage with it to become Protected. Protected creatures can Disengage at any time to cancel this condition. The Protected creatures cannot be Engaged (pg. [22](#p22)) and benefit from three-quarters cover (+5) against ranged attacks unless the horde is Bloodied. 

<div style="margin-top:-0px;"></div>

#### Surround

If the horde occupies the space of one or several individual creatures that are no more than one size larger than an individual member of the horde, it can use its action to surround them. The creatures must succeed on a Dexterity saving throw or become Surrounded. The DC of this saving throw is equal to 8 + the horde's proficiency bonus + the horde's Dexterity modifier. 

Surrounded creatures can be targeted by Assault Attack. They cannot use Dash or Disengage while surrounded, and provoke an opportunity attack if they use their Move action. 

If a creature that is Surrounded deals damage to the horde, it can attempt a Dexterity saving throw against the horde's DC at the end of the turn. On a successful save, it is no longer Surrounded and can use its movement to leave the space of the horde without provoking an opportunity attack.

\pagebreakNum

#### Spread

The Horde can use its action to spread thin across a larger unoccupied area. The Horde needs a 40 feet by 40 feet area on a map to spread successfully. While spread, the Horde can make only 2 attacks (1 if bloodied) as part of its multiattack, and cannot be targeted by Volley attacks or targeted by spells with a range of 30 feet or less or that targets a large number of creatures (10 creatures or more).

While the Horde is spread, all creatures that occupy its space lose the Surrounded or Protected conditions if they had them. 

#### Collide

If the horde occupies some of the space of another horde and both hordes are not already Surrounded, it can use its action to collide with it. Both hordes suffer the Surrounded condition from each other. Both hordes make an opposed Strength check, adding their proficiency bonus. The horde that wins the contest can immediately make one Surround Attack against the other horde. 

#### Assault Attack

Hordes that use surround tactics can use their action to make a single Assault Attack that targets all creatures that occupy its space and suffer the Surrounded condition. Assault attacks are listed in the horde's statistics.

When the horde makes an Assault Attack, all targets must make a Dexterity saving throw. The DC of this saving throw is equal to 8 + the horde's proficiency bonus + the horde's Strength modifier (or Dexterity modifier if the horde uses ranged or finesse weapons). On a failed save, each target takes damage equal to 4 times an individual creature's weapon dice, or 2 times an individual creature's weapon dice if the horde is Bloodied. On a successful save, it takes half as much damage.

#### Volley Attack

If the horde consists of individual creatures armed with ranged weapons, they can shoot a volley at all targets within a 10-foot radius sphere centred on a point within a ranged weapon's range. All targets must make a Dexterity saving throw. The DC of this saving throw is equal to 8 + the horde's proficiency bonus + the horde's Dexterity modifier. On a failed save, each target takes damage equal to 4 times an individual creature's weapon dice, or 2 times an individual creature's weapon dice if the horde is Bloodied. On a successful save, it takes half as much damage.

### Hordes and Mapless Combat

When using Mapless Combat (pg. [22-24](#p22)), each zone can accommodate only one horde of Gargantuan size. If another horde wants to enter the zone it must Collide with the horde occupying the zone.

While inside a zone, the horde can use its Move and declare engagement with any Near creature without breaking its current engagements. Each creature it Engages is considered to share space with the horde and is a valid target for the Surround action. 
 

The size of a Horde makes it an easy target. Any Near creature can attack the horde even if it is not Engaged by it. 

\columnbreak

### Area of Effects and Many Targets

Although hordes are immune to many conditions as a group, an effect that is capable of targeting the horde's entire space or of targeting a large number of creatures can suspend this. If the effect targets a large number of creatures (10 creatures or more), the horde is required to be the only target of such an effect. The horde loses its immunity against that specific effect, but makes any saving throws related to it at advantage.

Additionally, if the area of an effect that deals damage covers all of a horde's space, the horde has vulnerability to the effect's damage. Examples of spells that would interact with this rule include *fireball*, *fear*, *mass suggestion*, *weird*, and *mass polymorph*, among others.

### Survivors

When a horde is reduced to 0 hit points, the DM can have it make a Constitution saving throw to determine any survivors. The DC is equal to 5 + the damage taken. On a successful save, the DM can then add 1d4 individual creatures from the horde, acting on the horde's initiative.


<!-- Main Image -->

<img 
  src='https://www.gmbinder.com/images/rWF6dFu.png' 
  style='position:absolute;right:-575px;bottom:-90px;width:150%;' />

<!-- Colored Blends, clockwise from bottom -->


<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:-930px;
  width:1270px;
  transform:
    scalex(1.12);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
  '
/>


<img
   src='https://www.gmbinder.com/images/tFcatIg.png'
   style='position:absolute;
  bottom:-50px;
  right:355px;
  width:300px;
  transform:
    rotate(0deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)'
/>


<img
   src='https://www.gmbinder.com/images/TN3SKuL.png'
   style='position:absolute;
  bottom:380px;
  right:305px;
  width:300px;
  transform:
    rotate(270deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%) '
/>

<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:530px;
  right:275px;
  width:300px;
  transform:
    rotate(110deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%) '
/>

<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:610px;
  right:235px;
  width:200px;
  transform:
    rotate(150deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%) '
/>

<img
   src='https://www.gmbinder.com/images/TN3SKuL.png'
   style='position:absolute;
  bottom:630px;
  right:-10px;
  width:300px;
  transform:
    rotate(0deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%) '
/>

<img
   src='https://www.gmbinder.com/images/hf69hrN.png'
   style='position:absolute;
  bottom:630px;
  right:-40px;
  width:200px;
  transform:
    rotate(350deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%) '
/>

<!-- Circle Blends, clockwise from bottom -->

<img
   src='https://www.gmbinder.com/images/IQENPZX.png'
   style='position:absolute;
   bottom:-70px;
   right:400px;
  transform: 
     rotate(100deg);
  filter:
     opacity(100%)
     hue-rotate(0deg)
     brightness(100%)
     contrast(100%)
     saturate(100%)
     grayscale(100%)
     brightness(97%); '
/>

<img
   src='https://www.gmbinder.com/images/IQENPZX.png'
   style='position:absolute;
   bottom:350px;
   right:380px;
   transform:
      scaleY(4);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
   '
/>

<img
   src='https://www.gmbinder.com/images/IQENPZX.png'
   style='position:absolute;
   bottom:750px;
   right:60px;
   transform:
      scaleX(4);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
   '
/>

<img
   src='https://www.gmbinder.com/images/IQENPZX.png'
   style='position:absolute;
   bottom:800px;
   right:60px;
   transform:
      scaleX(4)
      scaleY(3);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
   '
/>

<!-- Splotch Blends, clockwise from bottom -->

<img
   src='https://www.gmbinder.com/images/tFcatIg.png'
   style='position:absolute;
  bottom:0px;
  right:355px;
  width:300px;
  transform:
    rotate(50deg);
    filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%);
   '
/>

<img
   src='https://www.gmbinder.com/images/tFcatIg.png'
   style='position:absolute;
  bottom:170px;
  right:325px;
  width:300px;
  transform:
    rotate(150deg);
    filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%);
   '
/>

<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:680px;
  right:330px;
  width:200px;
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
   '
/>

<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:870px;
  right:185px;
  width:200px;
  transform:
    rotate(30deg);
  filter:
    brightness(103%)
    hue-rotate(5deg)
  grayscale(100%)
  brightness(97%)    
   '
/>

<img
   src='https://www.gmbinder.com/images/TN3SKuL.png'
   style='position:absolute;
  bottom:900px;
  right:-25px;
  width:250px;
  transform:
    rotate(0deg);
  filter:
  opacity(70%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreakNum

## Swarms

Small or Tiny creatures who fight together are called Swarms and can be represented as a single creature.

### Swarm Template

To create a swarm, choose a creature and apply the following template to its statistics.

___
**Hit dice.** The horde's hit dice are d8, and total hit points should be roughly equal to 8 × the hit points of one creature.
___
**Abilities.** The swarm's Strength score increases by 4, and Intelligence and Charisma decrease by 2.
___
**Size.** A swarm of Tiny creatures is sized as a Medium creature. A swarm of Small creatures is sized as a Large creature. For Medium or larger creatures, use Hordes. 
___
**Condition Immunities.** The swarm gains immunity to the following conditions: charmed, frightened, grappled, paralyzed, poisoned, petrified, prone, restrained, stunned. Additionally, the swarm is immune to any spell or effect that would alter its form. The swarm can't regain hit points or gain temporary hit points.
___
**Damage Resistances.** If the swarm is made of Tiny creatures, it benefits from resistance to bludgeoning, piercing and slashing damage.
___
**Crowd Shape.** The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for an individual creature.
___
**Multiattack.** The swarm makes two attacks, or one attack if the swarm is Bloodied (pg. [12](#p12)). If the individual creatures in a swarm originally had the Multiattack action, the swarm does not gain the individual's Multiattack action.
___
**Challenge Rating.** It is recommended that the base creature used for the horde is CR 1/4 or less. The horde's Challenge Rating increases by 3 when calculating its Encounter Rating (pg. [64](#p64))

### Hivemind

Swarms can have a unified consciousness or intelligence that coordinates the actions of each individual creature. Such a swarm benefits from a Commander (see *Horde Commander*, pg. [65](#p65)) except it is not a creature but a feature of the swarm. The swarm benefits from a hivemind and can take legendary actions (except *Rally*) only as long as it is not Bloodied. 

### Swarm Actions

The horde can choose from these actions during its turn.

#### Attack

The swarm can use its action to make a multiattack. Attacks from Tiny swarms have Reach 0 and must occupy the space of its target to attack it. Attacks from Small creatures have Reach 5 feet. The swarm is always proficient with its attacks. 

The Damage caused by the swarm’s attacks is based upon its Hit Dice used to calculate its hit points:

|Swarm Hit Dice|Damage|Damage while Bloodied
|:--:|:--:|:--:|
|1-5|2d4|1d4
|6-10|2d6|1d6
|11-15|2d8|1d8
|16-20|2d10|1d10
|21+|2d12|1d12

If the base creature has any special ability that deals extra damage with an attack (e.g. a poison bite), double the amount of damage dealt by the swarm's normal attacks and convert half of it into the damage type of the special ability.

#### Cover

When the swarm occupies the space of a creature that is Medium or smaller, the swarm can use its action and cover its body. The creature must succeed on a Dexterity saving throw or become Covered by the swarm. The DC of this saving throw is equal to 8 + the swarm's proficiency bonus + the swarm's Dexterity modifier. 

While the creature is Covered by the swarm, it suffers vulnerability to damage dealt by the swarm. Also when the creature moves the Swarm may choose to spend its reaction to move with the creature to its new occupied space.

If a creature that is Covered by a swarm deals damage to the swarm, it can attempt a Dexterity saving throw against swarm's DC at the end of the turn. On a successful save, it is no longer Covered and can use its movement to leave the space of the horde without provoking an opportunity attack.

#### Topple

While the swarm is Covering a creature, it can use its action to put the creature off balance or knock it prone. 

The swarm and the creature make a Grapple check. If the creature fails the check, it suffers disadvantage to its attacks until the end of its next turn. If the creature fails the check by 5 or more, it is also knocked prone. 

If the creature succeeds at the check, it can use its reaction to make a Dexterity saving throw against the swarm's DC (see *Cover*, above) to break free from the Covered condition. 

### Swarms and Mapless Combat

When using Mapless Combat (pg. [22-24](#p22)), swarms must use the Dash action to Engage and also enter the space of another creature. 

If a swarm chooses to just Engage instead of Dash, it can attack a Near creature but it doesn't share space with it and cannot use the Cover and Topple actions. 

### Area of Effect and Many Targets

Although swarms are immune to many conditions as a group, an effect that is capable of targeting the horde's entire space and doesn't require a specific number of targets suspends this. The horde loses its immunity against that specific effect, but makes any saving throws related to it at advantage.

Additionally, if the area of an effect that deals damage covers all of a swarm's space, the swarm has vulnerability to the effect's damage. Examples of spells that would interact with this rule include *fireball, fear, mass suggestion, weird,* and *mass polymorph*, among others.

\pagebreakNum

<div class='partpage-dmg'>

# Part II

##### Hard Grit Mode

<img src='https://www.gmbinder.com/images/pt7mY0d.png' class='cover-image' style="height:1066px" />

<div style="margin-top:830px;"></div>

<div class='wide'>

>
> ##### Optional High Lethality Variant Rules
>
>This chapter contain variant rules that change core concepts of *Player's Handbook* - leveling, armor class and hit points. These rules are meant only for most realistic and lethal games focused on ordinary characters in a historic campaign. Unlike other rules in *Grit and Glory* tackling similar subject, these take grit to a whole new level and do not support classic D&D campaigns such as dungeon crawls.

</div>

</div>

\pagebreak

# Hard Grit Mode

___
Even with all the rules in *Grit and Glory* aimed at increased realism and danger, *Dungeons and Dragons* remains a game about heroes who inevitably become legends and face ever growing threats. For a historical or medieval campaign where characters must remain mundane, the DM needs rules that restrict leveling without restricting progression. Hard Grit Mode is a *5th Edition* variant of the widely popular "Epic 6" rules from past editions that allow to lock characters in low-tiered play and limit magic up to 3rd level spells. 

<div style="margin-top:-5px;"></div>

#### The Limits of Hard Grit
* **Level.** You can progress up to 5th level in any class. You can multiclass in a second class at any time, and  pick a third class once you reach 5th level in both your initial classes. You can choose no more than one spellcasting class. Taking a new class requires that its multiclassing prerequisites be fulfilled and you gain the saving throw proficiencies of the new class. 
* **Hit Dice.** You can have up to 5 hit dice, unless class features, feats or rewards grant you additional ones. Once you reach maximum hit dice, gaining new dice allows you to remove a smaller die and gain a larger die in its place.
* **Proficiency Bonus.** Your bonus does not increase once you reach 5th level in any class.
* **Effect Scaling.** Features and abilities that scale by level use the sum of all levels among classes you multiclass to scale their effect.

<div style="margin-top:-5px;"></div>

### Starting Level

In a Hard Grit game, most characters start at 1st or 2nd level. Characters at 1st level are ordinary people, who undertake their career. Level 2 and 3 are experienced and accomplished in routine tasks and ready for the challenges ahead. Level 4 characters are talented experts with few may exist in a city. Level 5 are among the best between mundane professionals that may have what it takes to excel into heroes some day. 

A campaign may also start with zero-level characters. A zero-level character has no proficiency bonus, no hit dice, <br>and its maximum hit points equal to 1d6 plus Constitution modifier. Once such character survives a proving ground challenge and accepts the campaign mission, it gains a level in class of its player's choice. 

<div style="margin-top:-5px;"></div>

### Milestone Leveling

Hard Grit uses milestone leveling. Milestones are dangerous achievements that are defined by the DM or players pick for themselves. The effort needed to accomplish each milestone should vary by the expected length of your campaign. They can be simple steps achieved in a session for a campaign aimed to last a month, or very long and demanding goals in campaigns made to last for years. Most campaigns should have between 15 and 30 milestones. 

The DM can allow players to come up with their personal milestone goals based on their character's motivation in the story. All player must have equal number of milestones but may achieve them at different times. This allow some players to level up before others, however in the long run the group should remain relatively at the same level.

\columnbreak

### Using Milestones

When a player completes a number of milestones he can spend them to unlock one of the following rewards:

##### Gain a new Level [2 to 5]
The milestone cost to gain a new level is equal to your character level but never more than 5 milestones.

##### Improve Abilities or Gain a Feat [6]
You can increase one ability score by 2 or two abilities by 1 up to maximum of 20, or gain a new feat. 

##### Improve one of your Subclasses [8, 12, 16]
For 8 milestones, you unlock abilities for levels 6 to 10 in one of your subclasses. For 12 milestones you can further unlock abilities for levels 11 to 16. For 16 milestones you can unlock abilities for levels 17 to 20. You must take each unlock before you take the next one in the same subclass. 


### High Magic

Hard Grit mode restricts spell casters up to 3rd level of spells. If you want to introduce higher level magic in your campaign, consider these or other options for your game:

You can introduce rare or very rare magical items that provide one or several higher level spell slots to the caster while worn or held. A typical rare item can have up to 4th level slot, very rare up to 6th, and legendary up to 9th level. The slots recover at dawn each day and can be used to cast any known spell, any known spell from certain schools or preselected list of spells that the item is able to cast on its own. Spells with concentration require the item to be held for concentration to be maintained.

You can require rituals for non-combat spells of higher levels with requirements specific to your setting. This may include number of casters, material components or sacrifice. Rituals up to 4th level require 3 or more casters and use of uncommon components, up ot 6th level require 10 casters and rare components and spells up to 9th level require 30 casters and very rare components. 

<div style="margin-top:-5px;"></div>

### Option: Spellcasting Limits

In order to cast a spell, you must have an ability score in your spellcasting ability equal or higher than 10 + spell's level.

### Option: Wider Proficiency

Proficiency Bonus (*Player's Handbook*, pg. 16) is based on 20 level progression. To make it meaningful in Hard Grit, use the table below to find your Proficiency Bonus. This change will allow for middle-tier checks but low-tier abilities and magic.

<div style='column-count:2'>

| Level  | Proficiency Bonus |
|:---:|:-----------:|
| 0th | — |
|  1st  | +2 |
|  2nd | +2 |



| Level  | Proficiency Bonus |
|:---:|:-----------:|
|  3rd  | +2 |
|  4th | +3 |
|  5th  | +4 |

</div>

\pagebreakNum

# Variant: Realistic Defense

___
In real life, armor doesn't make you harder to hit, instead it mitigates the damage you take. If your historic campaign needs accurate rules for armor and defense, these rules allow you to change a core concept in *Dungeons and Dragons*.

### Armor Class [AC]

Your Armor Class (AC) that attack rolls must meet or beat, is based only on your combat proficiency and your Dexterity as well as any bonus from carrying a shield. 

##### <div style="text-align: center">Armor Class = 8 + Proficiency Bonus<br> + Dexterity Bonus to Armor + Shield AC</div><br><div style="margin-top:-10px;"></div>

### Damage Reduction [DR]

Each time you get hit, your armor mitigates some of the damage dealt to you. Your Damage Reduction (DR) is <br>equal to the sum of all AC bonuses from all worn armor components when using Realistic Armor (pg. [28](#p28)), or your Total AC - 10 using standard armor rules. 

When using Realistic Armor, some armor components have additional DR value against specific damage types. <br>Add together the base and the additional DR against these types of damage.

### Coverage [CV]

Your armor provides Coverage to your body, measuring how much area of you is covered by all worn protective layers. 

| Coverage  | Value |
|:---|:-----------:|
|  Bare-chested, Unarmored  | 12 |
|  Chest covered partially, exposed arms  | 15 |
|  Chest covered fully, exposed arms | 17 |
|  Chest covered fully, upper arms covered  | 18 |
|  Chest covered fully, full arm coverage  | 19 |

When using Realistic Armor (pg. [28](#p28)) supplemental items that cover the head, hands and thigh provide additional Coverage that is added to the armor's Coverage.

If using Sunder (pg. [20](#p20)) and Armor Degradation (pg. [31](#p31)) rules, when your armor is sundered its Coverage value is decreased by 2 (4 if it is also Worn Out) instead of your AC.

### Hitting and Taking Damage

If an attack meets or exceeds the Armor Class of the target, but doesn't exceed the Coverage value of the target, the target subtracts its armor's DR from the damage taken. If the attack also meets and exceeds the Coverage of the target,  damage is taken as normal without subtracting armor's DR from it.

### Magical Armor

Enhancement bonus from magical shield is added to your Armor Class, as normal. Enhancement bonus from magical armor is added to your DR value. 

\columnbreak

>##### How this changes the game?
>
>Using Realistic Defense, you will hit and you will take damage more often. Armor will mitigate some of the damage but the small scratches accumulate over time and result in quicker deaths.
>
>To protect yourself, learn to use the full potential of your reaction. Combat Options such as Deflect, Give Ground or Raise Shield (pg. [19](#p19)) can further mitigate damage or avoid enemy attacks. Mastering the use of reactions is crucial to survive in combat.

<div style="margin-top:-5px;"></div>

### Types of Damage

Armor DR is effective against all types of physical damage (bludgeoning, slashing and piercing), as well as all damage types delivered by melee or ranged attacks, including spell attacks, except force, psychic and radiant damage. Damage that do not require touch or that envelops an area 5-foot or larger (such as enveloping fire or poisonous gas) ignores DR.

DM may require that at least one worn armor component is made of material able to protect against each damage type: one must be made of Cloth or Leather for cold damage; one must be made of Metal for acid and fire damage; one must have Hard property for thunder damage; none must be made of Metal for lightning damage; one must be magical for force damage. Coverage of 3 or more from supplemental items may be needed for necrotic and radiant damage.

<div style="margin-top:-5px;"></div>

### Abilities

Abilities, actions or weapon properties that provide a bonus to AC should be evaluated by the DM. As a rule of thumb, abilities that make you harder to hit should retain their AC bonus while abilities that make you endure more damage should be converted to bonus to DR. 

Abilities that deal extra damage (such as *Sneak Attack* or *Power Attack*) are added to the damage before subtracting DR. Abilities that have additional effects on a successful hit require at least 1 point of hp damage after subtracting DR to count as a hit.

<div style="margin-top:-9px;"></div>

##### Unarmored Defense

The Monk's *Unarmored Defense* ability remains a bonus to AC. A Barbarian's *Unarmored Defense* becomes a DR bonus that is never ignored by exceeding their Coverage.

<div style="margin-top:-9px;"></div>

##### Great Weapon Master / Sharpshooter

The -5/+10 Power Attack option changes as follows: you can choose to make an attack roll without adding your proficiency bonus to it and if your attack results in a hit, you deal twice your proficiency bonus as extra damage. 

If the attack is a critical hit, instead you deal three times your proficiency bonus as extra damage. 

<div style="margin-top:-9px;"></div>

##### Weapon Properties

The weapon properties *Fragile*, *Sharp* and *Sundering* (pg. [36](#p36)) should refer to DR not AC, and subtract 10 from the values listed in their description. 

<div style="margin-top:-9px;"></div>

##### Other Abilities

Monster abilities such as *Parry* should remain a bonus to AC. 

\pagebreakNum

# Variant: Wounds and Vigor

___
Wounds and Vigor are variant to hit points made popular in previous editions of Dungeons & Dragons. Vigor represents your combat fatigue and ability withstand pain, while Wounds are a measure of your physical integrity and actual damage.

<div style="margin-top:0px;"></div>

### Vigor 

Your stamina and ability to evade enemy attacks is your Vigor points. It's equal to your hit points. Anytime you take damage, subtract that amount from Vigor and if there's excess damage remaining, subtract that amount from Wounds.

<div style="margin-top:0px;"></div>

##### <div style="text-align: center"> Vigor = Hit Points</div><br><div style="margin-top:-10px;"></div>

<div style="margin-top:5px;"></div>

##### Instant Death

If damage reduces your Vigor reserve to 0 and the excess damage remaining is equal or more than your maximum Wounds, you die instantly without death saves.

<div style="margin-top:5px;"></div>

##### Vigor Exertion

Before you make an attack you can exert yourself by spending and rolling one Hit Die. You take the rolled result as Vigor damage then you can add the rolled amount to one attack roll or damage roll of a weapon or spell attack, or the attack uses your bonus action instead of your action.

<div style="margin-top:-5px;"></div>

### Wounds

You have Wound points equal to the sum of your Constitution score (not the modifier) and your proficiency modifier. If your Wound points ever reach 0, you start dying. 

<div style="margin-top:-5px;"></div>

##### <div style="text-align: center"> Wounds = Constitution Score + Proficiency Modifier</div><br><div style="margin-top:-10px;"></div>

<div style="margin-top:-5px;"></div>

You lose Wound points when:

<div style="margin-top:-10px;"></div>

* you take damage and your current Vigor is 0. Any excess damage is dealt to your Wound reserve
* you take damage from a single weapon or a spell attack, before adding any extra damage from abilities (such as Sneak Attack or a Smite), that excceeds *10 + your level + your Constitution modifier*. Such debilitating damage causes you to lose one Wound point. 
* you take damage from a critical hit. Even if your Vigor is more than 0, you lose Wound points equal to attacker's proficiency modifier
* you take damage while unconscious, stunned, paralyzed, incapacitated, or you take falling damage it always goes to Wounds
* you take damage during a surprise round. You can make a Dexterity or Constitution saving throw with a DC equal to 10 or half the damage, whichever is greater. If you fail the save, damage is dealt directly to Wounds instead Vigor. 

<div style="margin-top:-5px;"></div>

##### At Death's Door

When your Vigor reaches 0 but you have remaining Wounds, you remain standing and conscious but you are reeling. You gain the At Death's Door condition.

Anytime you use your action while At Death's Door, make a DC 12 Injury check (only make the check, without consulting the tables and take an injury). If you fail, you take one level of Exhaustion.

\columnbreak

##### Bleeding 

For each Wound point lost since the beginning of the combat, you lose 1 Vigor point as bleeding damage. 

You can stop the bleeding during combat if you spend your action and make a Wisdom (Medicine) check at DC 10 + bleeding damage. When combat ends and heart rates slow, bleeding causes you to lose one Wound every 10 minutes, without Injury check.

<div style="margin-top:-3px;"></div> 

### Injuries

___
Anytime you lose Wound points, you risk suffering a Lasting Injury. Make an Injury check by adding your Constitution saving throw modifier and remaining Wound points, and then subtract the amount of Wounds points missing from your reserve (all lost points, not just during the last damage taken). Consult the the Injury tables (pg. [95-102](#95)) for the effect of the injury suffered. If the same injury is rolled twice, unless its effect state otherwise you don't get another injury but the existing one is aggravated, up to DM's discretion. 

If you have resistance to the damage type of the attack, you make an Injury check with advantage, or with disadvantage if you suffer from vulnerability to the damage type.

<div style="margin-top:-2px;"></div>

##### <div style="text-align: center"> Injury Check = d20 + Constitution Saving Throw Modifier + total Coverage + your remaining Wounds - lost Wounds so far</div><br><div style="margin-top:-18px;"></div>

___
> <div style="margin-top:-10px;"></div> 
>
> Jorgal the Barbarian has Constitution save modifier of +6, maximum Wounds of 17 but only 9 remain after an enemy club hit him. His check is 1d20 + 6 + 9 - 8 on the Bludgeoning table on pg. [95](#95). Jorgal hopes to get a total of 17+ to avoid anything worse than a broken nose. 
>

<div style="margin-top:-5px;"></div> 

##### Nonlethal Damage to Wounds

Monlethal damage that results in loss of Wound points doesn't provoke an Injury check. The same rule applies <br>to bleeding damage lost outside of combat. 

<div style="margin-top:-5px;"></div> 

### Healing

Vigor follows the same rules for healing as hit points (pg. [11](#11), [16](#16)). Wounds are recovered with natural recovery, normal or magical healing:

<div style="margin-top:-10px;"></div> 

* at the end of a long rest, you recover Wound points equal to your Constitution modifier. at the end of a full rest you recover the same amount plus one extra Wound point.
* with the First Aid action and a use of Healer's Kit (pg. [11](#p11)), you recover 1 Wound point if you succeed, and 1 extra Wound point for each 5 points you beat the First Aid DC.
* with magical healing you may choose to recover Wounds instead of Vigor. Each 5 points recover 1 Wound.

<div style="margin-top:-5px;"></div> 

### Injury Recovery

Injuries have natural recovery usually in days or weeks. For each day of full rest you receive magical healing focused on your injury while you are at maximum Vigor points, the day counts as two days for the purpose of injury healing.

\pagebreakNum

<div class='partpage-dmg'>

# Part III

##### Living The World 

<img src='https://www.gmbinder.com/images/BpZX3Ff.png' class='cover-image' style="height:1066px" />

</div>

\pagebreakNum

<img src='https://www.gmbinder.com/images/6dBiFu2.png' style='position:absolute; top:0px; right:-150px; width:130%;' />
  
<img src='https://www.gmbinder.com/images/WGybwnz.png' style='position:absolute; top:210px; right:0px; width:900px; filter:  grayscale(100%) brightness(97%)' />

<div style='margin-top:10200px;'></div>

# Economy

### Silver Standard Economy

Players interested in Medieval life and alternative historical settings may find *Dungeons & Dragons* prices and treasure based on gold to be very generous. Playing poor characters that struggle in remote areas is also made impossible by the ease of attaining gold. To improve the level of realism in your game, you may want to switch to the Silver Standard instead.

The Silver Standard is a simple conversion of all official rulebook prices of nonmagical goods, weapons and armor from gold to silver. If a longsword costs 15gp in the *Player's Handbook*, it now costs 15sp; a 1sp club costs only 1cp. This makes silver the basis of your game economy and copper is now a meaningful exchange unit for small transactions. Any treasure in the form of gold and platinum is suddenly the stuff of legend and a life-changing opportunity to become rich. 

Players creating new characters don't need to convert while choosing their starting equipment. Once done, any remaining money is converted from silver to copper, and from gold to silver. 

Depending on your setting, you may want to keep certain prices in gold. In settings with low magic, magical items are expensive and should retain their price in gold. In settings where knowledge and skill are highly valued, mercenaries might retain their hire price in gold. In settings with politics and merchants, all international trade is done in gold.

\columnbreak

### Masterwork Weapons

In medieval and alternative historical settings where magic may not exist, players do not have access to magical weapons as presented in *Dungeon Master's Guide*. The following rules allow the DM to provide Masterwork items, created by few master craftsmen, using rare materials or forged with secret smithing techniques.

Masterwork weapons still have bonus properties but they only apply to damage. For example, a +1 longsword will add +1 to damage, but not +1 to attack. Masterwork weapons cannot have their damage die or bonus impaired by effects, such as a Rust Monster's touch.

Masterwork weapons and armor are not magical and rules regarding magical items do not apply to them. If a spell is used to enchant the weapon to make it a magical weapon with both an attack and damage bonus, the Masterwork item gains a bonus to attack up to its bonus to damage.

When deciding the price of any Masterwork weapon or armor, use 40% of the price provided in the *Dungeon Master's Handbook* or other  supplements. Unlike normal weapons, Masterwork gear retains its value. If you want to sell your normal used weapons or armor, the DM may have traders pay a third of their listed value while Masterwork weapons always retain at least 80% of their listed value. If you use the Silver Standard and access to high quality equipment is reserved for nobility and kings only, you may retain its price in gold. 


\pagebreakNum

## Realistic Lifestyle

In realistic campaigns, your wealth and lifestyle define what you can and cannot do, and who you are in the eyes of the people and the state. These rules will help you manage your wealth and commodities between adventures.

### Starting Lifestyle

To pick a lifestyle, work with the DM to decide what kind of community you or your family lives in. Each community has a Size and Lifestyle shared by the majority of the population. Pick any lifestyle up to three categories above the community average.

##### Community Size
| Community  | Population | DC Mod. | In the Realms |
|:---|:---:|:-----------:|:-------|
Homestead|20 – 80|+3|*Kheldell*|
Hamlet|81 – 400|+2|*Longsaddle*|
Village|401 – 900|+1|*Port Llast*|
Small town|901 – 2,000|0|*Daggerford*|
Large town|2001 – 5,000|-3|*Skullport*|
Small city|5,001 – 12,000|-6|*Zhentil Keep*|
Large city|12,001–100,000|-9|*Neverwinter*|
Metropolis|100,001+|-12|*Waterdeep*|

##### Community Lifestyle
Predominant Lifestyle|Price Mod.|DC Mod.|Risk Range|
|:---|:---:|:-----------:|:-----------:|
Wretched|× 0.1|+6|1–8
Squalid|× 0.2|+4|1–3
Poor|× 0.5|+2|1–2
Modest|× 1|0|1–1
Comfortable|× 1.2|-1|–
Wealthy|× 2|-2|–
Aristocratic|× 5|-5|–

<div style='margin-top:-8px;'></div>

### Personal Expenses

Your chosen lifestyle defines how much you must spend on expenses (food, clothes and necessities), state tax (if you run a business, you are subject to additional wealth tax determined by the DM) and minimum expenditure for entertainment. Multiply the values in the table by the community Price Mod.

<div style='margin-top:-8px;'></div>

##### Daily Lifestyle Expenses 
| Lifestyle  | Expenses | Taxes | Entertainment |
|:---:|:---:|:-----------:|:-------:|
| Wretched | 5 cp | – | 1 cp
| Squalid |  1 sp | – | 1 sp
| Poor | 2 sp  | – | 2 sp
| Modest | 1 gp | 1 sp | 5 sp
| Comfortable | 2 gp | 2 sp | 1 gp
| Wealthy | 4 gp | 8 sp | 3 gp
| Aristocratic | 10+ gp | 3+ gp | 10+ gp

\columnbreak

You can support your lifestyle as long as you can pay your expenses and tax at the end of the week. If you fail to do so, your lifestyle decreases by a category or you enter debt. 

### Lifestyle Description

**Wretched.** You live in inhumane conditions. With no place to call home, you shelter wherever you can, sneaking into barns, huddling in old crates, and relying on the good graces of people better off than you. A wretched lifestyle presents abundant dangers. Violence, disease, and hunger follow you wherever you go. Other wretched people covet your armor, weapons, and adventuring gear, which represent a fortune by their standards. You are beneath the notice of most people.

<div style='margin-top:-8px;'></div>

___
**Squalid.** You live in a leaky stable, a mud-floored hut just outside town, or a vermin-infested boarding house in the worst part of town. You have shelter from the elements, but you live in a desperate and often violent environment, in places rife with disease, hunger, and misfortune. You are beneath the notice of most people, and you have no legal protections. Most people at this lifestyle level have suffered some terrible setback. They might be disturbed, marked as exiles, or suffer from disease. 

<div style='margin-top:-7px;'></div>

___
**Poor.** A poor lifestyle means going without the comforts available in a stable community. Simple food and lodgings, threadbare clothing, and unpredictable conditions result in a sufficient, though probably unpleasant, experience. Your accommodations might be a room in a flophouse or in the common room above a tavern. You benefit from some legal protections, but you still have to contend with violence, crime, and disease. People at this lifestyle level tend to be unskilled laborers, costermongers, peddlers, thieves, mercenaries, and other disreputable types. 

<div style='margin-top:-7px;'></div>

___
**Modest.** A modest lifestyle keeps you out of the slums and ensures that you can maintain your equipment. You live in an older part of town, renting a room in a boarding house, inn, or temple. You don't go hungry or thirsty, and your living conditions are clean, if simple. Ordinary people living modest lifestyles include soldiers with families, laborers, students, priests, hedge wizards, and the like. 

<div style='margin-top:-7px;'></div>

___
**Comfortable.** Choosing a comfortable lifestyle means that you can afford nicer clothing and can easily maintain your equipment. You live in a small cottage in a middle-class neighborhood or in a private room at a fine inn. You associate with merchants, skilled tradespeople, and military officers.

<div style='margin-top:-7px;'></div>

___
**Wealthy.** Choosing a wealthy lifestyle means living a life of luxury, though you might not have achieved the social status associated with the old money of nobility or royalty. You live a lifestyle comparable to that of a highly successful merchant, a favored servant of royalty, or the owner of a few small businesses. You have respectable lodgings, usually a spacious home in a good part of town or a comfortable suite at a fine inn. You likely have a small staff of servants. 

<div style='margin-top:-7px;'></div>

___
**Aristocratic.** You live a life of plenty and comfort. You move in circles populated by the most powerful people in the community. You have excellent lodgings, perhaps a townhouse in the nicest part of town or rooms in the finest inn. You dine at the best restaurants, retain the most skilled and fashionable tailor, and have servants attending to your every need. You receive invitations to the social gatherings of the rich and powerful, and spend evenings in the company of politicians, guild leaders, high priests, and nobility. 

\pagebreakNum

### Option: Family Expenses

In historic times, people strived to support large families to survive hardship or acquire wealth and influence. If you have a family, such as a partner and children to support, you must multiply all your personal expenses based on the table below.

Family Size|Expenses Mod.|Bolster Effect|
|:---|:---:|:-----------:|
Partner or old parents|× 1.5|+1 bonus, 1/day|
Partner and 1-3 children|× 2|+2 bonus, 1/day|
Partner and 4+ children|× 4|+2 bonus, 2/day|

In exchange for supporting your family, you benefit from a psychological bolstering effect. Anytime you face imminent danger, as a reaction you may think of your family that you must support and increase your AC or Wisdom saving throw by +1 or +2. You may do so a number of times as shown in the table. You benefit from this bolstering effect as long as you dutifully provide to your family and protect them from harm.

### Lifestyle Risks

If you have a Modest lifestyle or worse, you may be exposed to regular hardships and misfortune. At the end of each week, make a d20 roll and compare the result with your community Risk Range. If the result is within Risk Range, make a roll on the Misfortune table. The DM decides how each misfortune complicates your life and may even pose a risk of death.

If you have a family, the DM may choose to impose the misfortune effect to your partner or any of your children. If so, you must take every measure to protect them if you want to continue to benefit from the bolstering effect.

##### Poverty Misfortunes
| d6  | Misfortune |
|:---:|:-----------|
|1|<div style='font-size:95%'>**Injured.** Make a DC 15 Dexterity check. If you fail, you suffer a bad injury and it takes 1d10 days to recover.</div>
|2|<div style='font-size:95%'>**Exploited.** Make a DC 15 Intelligence check. If you fail, you are involved in local conflict of power for 2d4 days.</div>
|3|<div style='font-size:95%'>**Indentured.** Make a DC 15 Wisdom check. If you fail, a debt is paid by 1d6 days of unpaid hard labor.</div>
|4|<div style='font-size:95%'>**Beaten.** Make a DC 15 Strength check. If you fail, you are beaten by thugs and it takes you 1d6 days to recover.</div>
|5|<div style='font-size:95%'>**Sick.** Make a DC 15 Constitution check. If you fail, you go down very sick until you start to recover in 1d8 days.</div>
|6|<div style='font-size:95%'>**Prison.** Make a DC 15 Charisma check, If you fail, you spend the next 1d10 days in incarceration.</div>

### Buying Items

Other than expenses, you may want to acquire adventuring goods or magical items. Every item or service has a chance of being available for purchase in your settlement based on its purchase price, multiplied by the settlement's Price Mod. Find the closest value to the modified item price and write down the Acqusition DC that corresponds to it.  

In places full of people with Poor, Wretched and Squalid lifestyles, access to expensive and magical items is extremely limited. Only apply the Price Mod to everyday goods and nonmagical services.

\columnbreak

<div style='column-count:3'>

| DC  | Price |
|:---:|:-----------:|
1|1 cp
2| 3 cp
3 |5 cp
4| 7 cp
5 |9 cp
6| 1 sp
7| 3 sp
8| 5 sp
9| 7 sp
10| 9 sp
11| 1 gp


| DC  | Price |
|:---:|:-----------:|
12| 20 gp
13 |40 gp
14| 60 gp
15| 80 gp
16| 100 gp
17 |180 gp
18| 260 gp
19| 340 gp
20| 420 gp
21| 500 gp
22| 1,400 gp


| DC  | Price |
|:---:|:-----------:|
23| 2,300 gp
24| 3,200 gp
25 |4,100 gp
26| 5,000 gp
27| 14,000 gp
28| 23,000 gp
29| 32,000 gp
30| 50,000 gp
31| 250,000 gp
32| 250,000+ gp

</div>

___
The Acquisition DC is then modified by both the DC Mod of the settlement size and the settlement's predominant lifestyle (see tables in Starting Lifestyle, pg. [74](#p74)).

If it is an item, the DM or one of the players rolls a D20, and if the result equals or exceeds the modified DC, the item is available for sale. If the item isn't available for sale, the players can attempt to see if the item is available at the same settlement after a number of days equal to the difference of the modified DC and the roll result.

If it is a service, the availability may depend on prior commitments made by the proprietor. The PCs can roll again for services, if they offer to pay an amount that would increase the purchase DC by 1. This can continue until the purchase DC equals 21.

If the modified DC is 1 or less, the item is automatically available for purchase in the settlement the PCs are in. If the modified DC is 21 or higher, the settlement will never have the item readily available for purchase, though the DM may allow the PCs to order such items to be crafted or delivered. Rolls are not necessary for these situations.

If your result exactly matches the DC, the item is available for purchase but there's complication to it. It can be an unwilling seller, competition from another buyer or legal issues surrounding the item or service. 

>##### Magical Item Prices
>
>The *Dungeon Master's Guide* does not condone selling magical items for gold. However if your campaign allows magical items to be acquired for gold, we suggest you use [Sane Magical Items](https://drive.google.com/file/d/0B8XAiXpOfz9cMWt1RTBicmpmUDg/view?usp=sharing) for balanced prices.

### Lifestyle Influence

In historical campaigns where social status and lifestyle are highly valued, you can use your affluent lifestyle to force others to recognize your authority and do things for you.

For every category of lifestyle higher than an opponent, you benefit from a +1 bonus to opposed Charisma (Persuasion), Wisdom (Deception) and Charisma (Intimidation) checks. If you fail a check by 5 or more, the opponent recognizes your abuse of your status and you lose the benefit of the bonus from your lifestyle (up to the DM). 

\pagebreakNum

## Running a Business

When players acquire wealth from adventuring it is a good idea to invest it wisely. While a business has nothing to do with delving into dungeons or saving the world, it provides a stable income you can always fall back on and it can affect how others perceive you in your home community. These rules cover creating and maintaining your own venture.

<div style='margin-top:-10px;'></div>

There are five types of businesses in a medieval society:

<div style='margin-top:-10px;'></div>

* **Farms.** These businesses produce raw or processed plant or animal food, beasts of burden and mounts.
* **Inns.** These businesses provide services to locals and visitors such as food, lodging, and simple entertainment.
* **Shop.** These businesses produce goods and offer services that require expertise, from a cobblery to a magic shop.
* **Stage.** These businesses offer elaborate entertainment, from gladiatorial fights to high class theatre and concerts.
* **Caravan or Ship.** These businesses transport goods and people across long distances.

<div style='margin-top:-5px;'></div>

___
Businesses are graded based on their scale (pg. [77](#p77)). A level 1 business is usually a small farmstead while level 9 may be an arcana shop sought after nationwide. Monopolies are venues that are the only one in a small locale or offer unique goods, services or experiences that people would travel far to find. 

Each settlement has a populace of sufficient wealth able to support a business up to the Max Grade listed below. Businesses that are larger make Operation checks with disadvantage.

<div style='margin-top:-6px;'></div>

### Creating a Business

To create a business, you need to have a permit to build from the local authority, and sometimes a permit to work usually granted by guilds. Building in the wilderness or a small village does not carry such costs. 

Find the base permit cost for the chosen community and multiply it by the Grade of your chosen business (see pg. [77](#p77)). If you can spend the money, you must also make a Charisma (Persuasion or Deception) check against the Permit DC. If you fail, you can retry in a week but must spend half the Permit cost on bribes. If you choose not to spend on bribes, the next check suffers a disadvantage. 

<div style='margin-top:-6px;'></div>

##### Business Permits
| Community  | Max Grade | Permit DC | Permit Cost | 
|:---|:---:|:-----------:|:-----------:|
Homestead|3|–|–|
Hamlet|4|–|–|
Village|5|–|1 gp|
Small town|5|10|2 gp|
Large town|6|12|5 gp|
Small city|7|15|10 gp|
Large city|8|20|15 gp|
Metropolis|9|25|20 gp|

<div style='margin-top:-6px;'></div>

___
Once you secure a permit, you can start building. A business has a Base Cost and Workdays (see pg. [77](#77)). The Base Cost covers the materials for the building and hiring labor. Each day, every worker completes one workday worth of construction. 

Once built, a business can be upgraded to a higher grade by spending the Base Cost and Workdays of the next grade.

\columnbreak

If creating a new business is impossible or takes too long, <br>you can always purchase an existing one. The DM decides whether the business you are interested in is successful, struggling or failing. Look at the Community Lifestyle table (pg. [77](#p77)) and find the Price Mod based on the lifestyle of the majority of the population. If the business is struggling, move one lifestyle category lower. If the business is failing, instead move two categories lower. Multiply the Base Cost of the business by the Price Mod to find the initial asking price. 


### Managing a Business

To run a business, you need a Master (yourself or a hired expert) who will run the business, and a number of helping hands. The Master provides his experience and skill and manages the helping hands. You or the Master choose one skill that will govern how the business is handled. The Master must have a total bonus in that skill equal to or higher than the Skill value (see pg. [77](#p77])). If the Master does not have this minimum experience, the Business Operation roll is made at disadvantage (see Business Operation (pg. [77](#77])). 

| Skill Check  | Description |
|:---:|:-----------|
|  Persuasion  | The business is run diplomatically with good business sense. |
|  Performance  | The business attracts the populace with spectacles and shows. |
|  Intimidation  | The business has a tight grip on its competition and employees. |
|  Deception  | The business is shady and tricks the populace into overspending. |
|  Insight  | The business predicts the local trends and prices. |
|  Any Subskill (pg. [50](#50))  | If the business requires trade knowledge, such as an Arcane or Herbalist shop, and you have an applicable Field Expertise, you may add your Focus Benefit to the Business Operation roll. |

Helping Hands are usually unskilled labor assisting the Master in his work. A business must have a minimum number of helping hands as listed in the Business table.

The Master and the helping hands salaries are listed in the Businesses table, (pg. [77](#p77)). Salaries must be paid at the start of the week from existing revenue. Master may work up to two weeks without payment, while helping hands will carry on up to four weeks without payment. 

>##### Working at other Businesses
>
>You may work as a Master or helping hand at the businesses of other people. You must succeed a Charisma (Persuasion, Deception or appropriate tool proficiency) check to get hired, at DC 10 for a helping hand, or DC 12 + the Grade of Business as a Master. You must have total bonus to the roll in the Business Skill equal or higher than the required Skill value if you are hired as Master, otherwise the business will suffer disadvantage on the Business Operation rolls. 
>
>You receive salaries as listed in the Businesses table, at the start of each week past the first.

\pagebreakNum


<div class='wide'>

##### Businesses Table

<div style="margin-top:-20px;"></div>

|Grade|Description|Expenses (week)|Cost (gold)|Workdays|Skill|Hands|Salary (Master)|Salary (Hands)|
|:----:|:---|:----:|:---:|:----:|:----:|:----:|:---:|:----:|
|1|Farm, Market Stand|25 sp|160|15|+2|—|15 sp|—|
|2|Large farm, Large Market Stand|5 gp|400|20|+3|1|1 gp|2 sp|
|3|Massive Farm, Small Shop, Tiny Stage, Tiny Inn, <br>Small Caravan|10 gp|800|25|+3|2|2 gp|4 sp|
|4|Multiple farms, Shop, Stage, Inn, Large Caravan|20 gp|2,000|50|+4|3|3 gp|6 sp|
|5|Local Farm Monopoly, Large Shop, Large Stage, <br>Small Ship|80 gp|4,000|50|+4|3|4 gp|8 sp|
|6|Farm Monopoly, Massive Shop, Massive Stage, <br>Massive Inn, Caravan Monopoly, Large Ship|120 gp|8,000|80|+4|4|8 gp|1 gp|
|7|Multiple Shops, Multiple Stages, Multiple Inns, <br>Multiple Caravans, Multiple Small Ships|160 gp|20,000|125|+5|5|12 gp|12 sp|
|8|Local Shop Monopoly, Local Stage Monopoly, <br>Local Inn Monopoly, Small Ship Monopoly|320 gp|50,000|250|+5|6|16 gp|15 sp|
|9|Shop Monopoly, Stage Monopoly, Inn Monopoly, Large Ship Monopoly|640 gp|100,000|500|+6|8|20 gp|2 gp|
</div>

<div style='margin-top:-0px;'></div>

### Business Operation

At the start of each week, spend the Expenses needed to keep the business open. At the end of each week, make a check using the skill that was chosen for the Business and consult the table below to find your profits or losses.

Your business has its own account in gold where all revenues are added and expenses and salaries to staff are paid from. When you visit the business location, you can add to that account or withdraw as you wish. If your business cannot pay losses or salaries, it can go into debt. The DM decides the interest rate and any additional details. If your business generates debt equal to half its Base Cost, it is requisitioned by your creditors. 

Under certain conditions the DM may choose for a player to roll with advantage or disadvantage on the Operations check. A festival might increase demand to give the business an advantage, or customers may be too poor to afford its wares, putting the business at a disadvantage.

<div style='margin-top:-8px;'></div>

<div class="operationtab">

##### Business Operation
| Roll  | Revenue for the week |
|:---:|:-----------|
|  4—  | The business generates twice the expenses as losses. Hands left unpaid. |
|  5—9  | The business generates its expenses as losses. Hands paid half. |
|  10—14  | The business covers its expenses but generates <br>no profit. |
|  15—19  | The business makes a profit equal to half the expenses. |
|  20—24  | The business makes a profit equal to the expenses. |
|  25—29  | The business makes a profit equal to twice the expenses. Master Salary raised by half. |
|  30+  | The business earns a profit equal to three times the expenses. Master Salary doubled.|

</div>

On a natural 1, the DM may impose additional losses up to one tenth of the Base Cost (consumed in a fire, for example). On a natural 20, the DM may increase the profits by a factor of the maintenance cost and the next week has advantage.

\columnbreak

<div style="margin-top:470px;"></div>

>
>##### Taxes
>
>In communities that tax businesses, taxes are a percentage increase of the expenses (usually 10% but may vary) paid at the start of the week. 
>
>In places that tax profits, taxes are a percentage of the profits (usually 10% but may increase by 5% for each 50g in profits) paid by businesses only on weeks when a business turns a profit.

<!-- Main Image -->

<img 
  src='https://www.gmbinder.com/images/HWYOaEy.jpg' 
  style='position:absolute;right:-70px;bottom:-40px;width:70%;' />

<!-- Colored Blends, clockwise from bottom -->


<img
   src='https://www.gmbinder.com/images/pEJl0m5.png'
   style='position:absolute;
  top:-200px;
  left:-930px;
  width:1270px;
  transform:
    scalex(1.12);
    scaley(.8);
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
  '
/>


<img
   src='https://www.gmbinder.com/images/tFcatIg.png'
   style='position:absolute;
  bottom:-50px;
  right:355px;
  width:300px;
  transform:
    rotate(0deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)'
/>


<img
   src='https://www.gmbinder.com/images/TN3SKuL.png'
   style='position:absolute;
  bottom:380px;
  right:305px;
  width:300px;
  transform:
    rotate(270deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%) '
/>

<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:530px;
  right:275px;
  width:300px;
  transform:
    rotate(110deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%) '
/>

<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:610px;
  right:235px;
  width:200px;
  transform:
    rotate(150deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%) '
/>

<img
   src='https://www.gmbinder.com/images/TN3SKuL.png'
   style='position:absolute;
  bottom:630px;
  right:-10px;
  width:300px;
  transform:
    rotate(0deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%) '
/>

<img
   src='https://www.gmbinder.com/images/hf69hrN.png'
   style='position:absolute;
  bottom:630px;
  right:-40px;
  width:200px;
  transform:
    rotate(350deg);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%) '
/>

<!-- Circle Blends, clockwise from bottom -->

<img
   src='https://www.gmbinder.com/images/IQENPZX.png'
   style='position:absolute;
   bottom:-70px;
   right:400px;
  transform: 
     rotate(100deg);
  filter:
     opacity(100%)
     hue-rotate(0deg)
     brightness(100%)
     contrast(100%)
     saturate(100%)
     grayscale(100%)
     brightness(97%); '
/>

<img
   src='https://www.gmbinder.com/images/IQENPZX.png'
   style='position:absolute;
   bottom:350px;
   right:380px;
   transform:
      scaleY(4);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
   '
/>

<img
   src='https://www.gmbinder.com/images/IQENPZX.png'
   style='position:absolute;
   bottom:750px;
   right:60px;
   transform:
      scaleX(4);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
   '
/>

<img
   src='https://www.gmbinder.com/images/IQENPZX.png'
   style='position:absolute;
   bottom:800px;
   right:60px;
   transform:
      scaleX(4)
      scaleY(3);
      filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
   '
/>

<!-- Splotch Blends, clockwise from bottom -->

<img
   src='https://www.gmbinder.com/images/tFcatIg.png'
   style='position:absolute;
  bottom:0px;
  right:355px;
  width:300px;
  transform:
    rotate(50deg);
    filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%);
   '
/>

<img
   src='https://www.gmbinder.com/images/tFcatIg.png'
   style='position:absolute;
  bottom:170px;
  right:325px;
  width:300px;
  transform:
    rotate(150deg);
    filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%);
   '
/>

<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:680px;
  right:330px;
  width:200px;
  filter:
  opacity(100%)
  grayscale(100%)
  brightness(97%)
   '
/>

<img
   src='https://www.gmbinder.com/images/qAcqsv8.png'
   style='position:absolute;
  bottom:870px;
  right:185px;
  width:200px;
  transform:
    rotate(30deg);
  filter:
    brightness(103%)
    hue-rotate(5deg)
  grayscale(100%)
  brightness(97%)    
   '
/>

<img
   src='https://www.gmbinder.com/images/TN3SKuL.png'
   style='position:absolute;
  bottom:900px;
  right:-25px;
  width:250px;
  transform:
    rotate(0deg);
  filter:
  opacity(70%)
  grayscale(100%)
  brightness(97%)  
   '
/>

\pagebreakNum

## Henchmen and Hirelings

Players truly feel rich when they can hire others to do most of their chores for them - like tending to their business or hold, to build them a castle or gather a mercenary army. These new rules add realistic prices for hiring unskilled and skilled workers, negotiating salaries, mercenaries, offering bounties that entice others to do their dirty work.

### Unskilled Laborers

Unskilled Laborers have +0 total bonus to skill checks and are hired for field work and construction. The standard cost for hiring a common laborer is 2 silver pieces per day. 

In communities where the majority are Poor (see pg. [74](#p74)), you might be able to hire unskilled laborers for as little as 1 sp per day. This is considered inhumane for good-aligned characters, as this barely allows for a Squalid lifestyle.

Alternatively in communities that are Comfortable or better, unskilled labor can be hired for up to 5 sp per day.

### Skilled Laborers

Skilled laborers are individuals who have the aptitude, skill and experience to accomplish complex tasks and are offering their services for hire. Their hiring price is determined by their total bonus to the skill checks for which they are hired. Their availability depends on the community size.

<div style='column-count:2'>

| Modifier  | Cost/Day |
|:---:|:-----------:|
|  +1  | 1 gp |
|  +2  | 2 gp |
|  +3  | 3 gp |
|  +4  | 4 gp |
|  +5  | 5 gp |
|  +6  | 6 gp |
|  +7  | 7 gp |
|  +8  | 8 gp |
|  +9  | 16 gp |
|  +10  | 32 gp |
|  +11  | 64 gp |
|  +12  | 128 gp |
|  +13  | 136 gp |
|  +14  | 144 gp |

| Modifier  | Cost/Day |
|:---:|:-----------:|
|  +15  | 152 gp |
|  +16  | 160 gp |
|  +17  | 168 gp |
|  +18  | 176 gp |
|  +19  | 184 gp |
|  +20  | 192 gp |
|  +21  | 200 gp |
|  +22  | 208 gp |
|  +23  | 216 gp |
|  +24  | 224 gp |
|  +25  | 232 gp |
|  +26  | 240 gp |
|  +27  | 248 gp |
|  +28  | 256 gp |

</div>

| Community  | Min Modifier | Max Modifier | Min CR | Max CR
|:---|:---:|:-----------:|:-------|:-----------:|:-------|
Homestead|+1|+3|0|3
Hamlet|+1|+4|1/4|4
Village|+2|+5|1/2|4
Small town|+2|+7|1|5
Large town|+3|+8|2|5
Small city|+4|+10|3|6
Large city|+5|+12|3|6
Metropolis|+6|+15|3|7

Certain trades might demand a higher price than others - an alchemist might cost double, while a weaver will cost half. Inventors capable of creating new items or technologies or improving existing standards always cost double. 

<div style='margin-top:-5px;'></div>

### Hiring Mercenaries

When you want to hire someone with combat experience to defend you or fight for you, the cost is based on their CR.  

<div style='margin-top:-5px;'></div>

<div style='column-count:2'>

| CR  | Cost/Day |
|:---:|:-----------:|
|  0  | 5 sp |
|  1/8  | 1 gp |
|  1/4  | 2 gp |
|  1/2  | 5 gp |
|1|10 gp|
|2|15 gp|
|3|35 gp|
|4|65 gp|
|5|100 gp|
|6|145 gp|
|7|195 gp|
|8|255 gp|
|9|325 gp|
|10|400 gp|
|11|485 gp|
|12|575 gp|
|13|675 gp|

| CR  | Cost/Day |
|:---:|:-----------:|
|14|785 gp|
|15|900 gp|
|16|1,025 gp|
|17|1,155 gp|
|18|1,295 gp|
|19|1,445 gp|
|20|1,600 gp|
|21|1,765 gp|
|22|1,935 gp|
|23|2,115 gp|
|24|2,305 gp|
|25|2,500 gp|
|26|2,705 gp|
|27|2,915 gp|
|28|3,135 gp|
|29|3,365 gp|
|30|3,600 gp|

</div>

<div style='margin-top:-5px;'></div>

Unlike laborers, mercenaries have their own terms of service. Most mercenaries will refuse to be hired for a period of days less than their CR or one week, whichever is longer. They also expect plentiful availability of food and water, first aid and accessories rather than bringing their own. 

The base costs are intended for keeping mercenaries on retainer for extended periods of time, with only intermittent periods of fighting. An example would be in a war scenario where the PCs are fielding an army; most days, there's no fighting at all (though the threat of ambush is ever present), and when fighting does happen it's not terribly lethal. Facing extremely lethal encounters in dangerous places where a mercenary might expect several times as much fighting such as the worst day at war, may raise the cost of hire by 2 or even 4 times. Soldiers specialized in traditional warfare might outright refuse, while only adventurers may agree.

Chaotic-aligned mercenaries will respect orders as long as hired by players of no more than 3 levels lower. Evil-aligned mercenaries will not consider mutiny as long as hired by players of no more than 3 levels lower.

Spellcasters cost several times as much as a warrior of a comparable level. Depending on the highest level of harmful spells they can cast, their hiring cost is modified as described in the table below.

<div style='margin-top:-5px;'></div>

<div style='column-count:2'>

| Max Spell Level  | Cost Mod |
|:---:|:-----------:|
|  3rd  | x 1.5 |
|  5th  | x 2 |

| Max Spell Level  | Cost Mod |
|:---:|:-----------:|
|  7th  | x 3 |
|  9th  | x 5 |
</div>

\pagebreakNum

<img src='https://www.gmbinder.com/images/3hdx69F.png' style='position:absolute; top:-110px; right:-100px; width:130%;transform: scaleX(-1);' />
  
<img src='https://www.gmbinder.com/images/WGybwnz.png' style='position:absolute; top:200px; right:0px; width:900px; filter:  grayscale(100%) brightness(97%)' />

<div style='margin-top:10300px;'></div>

# Realistic Travel

___
In historic and fantasy campaigns, wilderness travel can take a very long time crossing through unsettled territory with neither the luxury to rest in an inn or road hut each night, nor the safety of secure civilization. These rules simulate the resource management and perils of day to day traveling.

## The Travel Route

As a DM, help your players come up with a travel plan then calculate its distance in miles. Break down the full distance into smaller segments by using checkpoint locations such as towns and hamlets, wayside inns, river banks and other points of interest. Break segments when terrain type changes or roads start or end as such changes affect travel speed. 

For particularly long travels across unsafe territory, it is best that you prepare a random encounter table specific to the region. In these rules you will find advice for when and how to introduce danger in your travel. If you have preplanned encounters that happen at specific locations or at a set distance along the travel route, keep a handy list and check it at the start of each daily routine. By dividing the distance to the encounter location by the speed of travel, you can identify during which travel leg the players will reach it.

Players must put a great deal of their effort into managing their resources - food, water, and means of transportation (mounts or vehicles) when available. Appoint one dependable player with the role of Travel Manager, who will calculate the use of resources and distribute tasks between other players.

\columnbreak

## The Traveling Day
A typical day of travel consists of roughly 9 to 16 hours of activity, out of which there are 6-10 hours of actual travel. At specific times the party must rest, drink and eat.

##### Daily Travel Routine
| Activity | Time | Cost |
|:------:|:-------:|:-------:|
|Wake up around sunrise|——|——|
|Breakfast and breaking up camp|——|1/2 ration|
|First travel leg|3-5 hours| 2 pints water|
|Midday break|1-2 hours| 1/2 ration |
|Second travel leg|3-5 hours| 2 pints water|
|Rest for the night|8 hours|——| 

#### Daylight by Season
The amount of usable daylight vastly depends on the region and/or season you are traveling at. 

| Season | Sunrise | Sunset | Time Traveling |
|:------:|:-------:|:------:|:--------:|
| Summer |  4 am   | 8 pm  | 16 hours |
| Spring/Autumn |  6 am   | 6 pm  | 12 hours |
| Winter |  8 am   | 4 pm  |  8 hours |

\pagebreakNum

## Daily Planning

During each travel day, the players must make choices.

**Choose Destination and Speed.** Players must choose a travel pace (fast, normal or slow) and whether they will force march despite exhaustion. The Travel Manager spends the needed resources. 

**Determine Terrain Difficulty.** The DM determines the terrain type and calculates how much distance will be crossed without any larger disruptions (such as combat or a detour to explore unexpected locations). 

**Decide Travel Activities.** The players distribute Travel Activities among themselves. In each of the two travel legs of the daily routine, a player may take one activity of his choice. Some activities allow several players to work as a group.

**Making Camp.** The players must search the environment and find a proper location for setting up camp. Depending on the location, the camp can have different properties. 

**Decide Camp Activities.** The players distribute Camp Activities among themselves. Each player can take one Camp Activity before having to rest for the night. 

<div style='margin-top:-8px;'></div>

## Choose Destination
The players must choose where they are heading and at which pace to travel at. The party can follow a natural feature of the land like a coast, river or tree line, or just head off in any of the cardinal directions. Check the *Travel Speed and Activities* table to decide on the following properties.

<div style='margin-top:-8px;'></div>

##### Travel Speed

The actual movement speed (by foot) either per hour or per day (assuming 8 hours of travel). 

If you travel by horse or carriage and you cross *easy* (DC 5) or *moderate* (DC 10) terrain, refer to Mounted Travel rules (pg. [85](#p85)) for each mount's speed and distance. If you choose to gallop by horse and you cross *easy* (DC 5) terrain, you can use fast pace and increase distance traveled by 33%. If you cross *difficult* terrain (DC 15 or higher), you can only use slow pace and decrease distance traveled by 33%.

<div style='margin-top:-8px;'></div>

##### Travel Activities

Your chosen pace of travel affects how easy it is to do things during your daily travel legs. 

**Favored Activities.** Favored activities may be made with advantage when traveling at this pace.

**Associated Activities.** Associated activities are typical activities for the corresponding pace.

**Hindered Activities.** Hindered activities must be made with disadvantage when traveling at this pace.

**Forbidden Activities.** These activities cannot be taken when traveling at this pace.

\columnbreak 

##### Forced March

Players can safely travel for 8 hours in a day before risking exhaustion. For each additional hour of travel beyond that, each player or their mounts (if riding or in a carriage) must make a Constitution saving throw at the end of every hour. The DC is 10 + 1 for each hour past 8 hours. On a failed saving throw, the player or its mount suffers a level of exhaustion. 

If the party is moving at a *slow* pace, they gain a +5 bonus to the check, and a *fast* pace imposes a -5 penalty

<div style='margin-top:-5px;'></div>

## Determine Terrain
Several activities during travel refer to the Navigation DC. This DC is dependent on the terrain you are traversing.

The harder the terrain, the slower your group will advance during your travel, up to a point where you must concentrate on actually moving, rather than paying attention to other activities. If difficult terrain slows your pace to 0 miles or less, you can still move but at ½ a mile per hour. 


<div style='margin-top:5px;'></div>

<div class="smalltab">

| Terrain Difficulty                                 | DC | Speed Modifier |
|:------------------------------------------------------|:--:|:------------------:|
|Barren, wasteland|10|-1 mile/hour
|Clear, farmland|5|——
|Desert, rocky|10|-1 mile/hour
|Desert, sand|15|-2 miles/hour
|Forest, medium or heavy|15|-2 miles/hour
|Forest, light|10|-1 mile/hour
|Glacier|10|-1 mile/hour
|Grassland, foothills|5|——
|Scrub, bushland, hills|10|-1 mile/hour
|Jungle, heavy|20|-3 miles/hour
|Jungle, medium|15|-2 miles/hour
|Marsh, swamp|20|-3 miles/hour
|Moor|15|-2 miles/hour
|Mountain, high|20|-3 miles/hour
|Mountain, low or medium|15|-2 miles/hour
|Tundra|15|-2 miles/hour
|Any terrain, by trail|5|——
|Any terrain, by road|5|+2 miles/hour
|Fog, rain, low visibility|+3|——
|Storm, snowfall, dark night|+5|-1 mile/hour


</div>

<div style='margin-top:-10px;'></div>

<div class='wide' style='margin-top:-200px'>

##### Travel Speeds and Activities

<div style='margin-bottom: -1px; margin-left: 205px'>

----------------------------------------------------------------- **Travel Activities** -----------------------------------------------------------------

</div>

| Pace |Travel Speed  | Favored | Associated | Hindered | Forbidden |
|:-----|:-------------|:-----------:|:--------:|:---------:|:----------:|
| *Fast*         | 4 miles per hour;<br>32 miles per day | ——— | ——— | Keep Watch,<br> Navigate, Scout, Track, Trailblaze | Draw a Map, Hunt & Forage, Sneak |
|*Normal* | 3 miles per hour;<br>24 miles per day | ——— | Keep Watch, <br>Navigate, Scout, Track, Trailblaze | Draw a Map, Hunt & Forage, Sneak | ——— |
| *Slow*         | 2 miles per hour;<br>16 miles per day | Keep Watch, <br>Navigate, Scout, Track, Trailblaze | Draw a Map, Hunt & Forage, Sneak | ——— | ——— |

</div>

\pagebreakNum

## Travel Activities

For each travel leg, a player may choose one of the following activities in accordance with your chosen travel pace. Each activity has an associated ability check you will make to determine your success or failure during the travel leg.

##### Dangerous Activities <img src="https://img.icons8.com/ios/20/000000/poison-filled.png">
Several activities are noted as *Dangerous*. Performing one of these activities usually means having to separate from the group with a risk of being attacked or trapped without help.

##### Distracting Activities <img src="https://img.icons8.com/ios/20/000000/watch-your-step-filled.png">
Some activities are so demanding that you can't pay much attention to your surroundings. If you perform a *Distracting* activity, you suffer a -5 penalty to your passive Wisdom (Perception) score for the whole travel leg.

##### Exhausting Activities <img src="https://img.icons8.com/ios/20/000000/napping-filled.png">
Some activities are much more tiresome that simple travel. If you perform two *Exhausting* activities on one day, you suffer one level of exhaustion after finishing the second one, but before looking for and setting up camp.

##### Focused activities <img src="https://img.icons8.com/ios/20/000000/west-direction-filled.png">
Most activities can be performed by several players. However, some activities can only be performed by one or two simultaneously. These Focused activities can only be performed by a maximum of 2 players, and you only use the higher of the two check results to determine their effect. 

If a player fails their check, they still suffer the consequences.

### Draw a Map <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/west-direction-filled.png">
___
**Skill:** Intelligence (Cartographer's tools) 

___
While your companions keep watch, hunt for food and guide the party, you focus on documenting your journey. Drawing a map won't help you on your journey forward, but might prove useful once you try to find your way back. Good maps are also a highly sought-after commodity.

___
Make an Intelligence (Cartographer's tools) check against the Navigation DC.

<div style='margin-top:-9px;'></div>

* If your guide succeeded on their navigation check, you gain a +5 bonus to your check.
* If they failed by less than 5, you suffer a -5 penalty.
* If you got lost, your check automatically fails.
* For each travel leg, note if you succeeded or failed your cartography check.

Once you have reached your destination, divide the number of successful cartography checks by the total number of legs travelled, and compare the result on the following table:

| Success per Travel Leg  | Result |
|:--------------------------------------:|:-------|
| 0.75 |  Detailed Map    |
| 0.5  |  Simple Map      |
| 0.25 |  Crude Map       |
|  0   |  *Wasted Effort* |

### Hunt & Forage  <img src="https://img.icons8.com/ios/20/58180d/poison-filled.png">
___
**Skill:** Wisdom (Survival)

___
During your travels, you keep an eye out for nearby sources of food and water, such as roots, fruits, small game, and hidden springs. You must pick one: either plants, game or water. 

Make a Wisdom (Survival) check and compare the result with the region's abundance level on the following table to determine the number of fresh rations (for 1 day) you can manage to provide, or gallons of water (8 pints) you gather.

<div style='margin-bottom: -6px; margin-left: 105px;'>

--------- **Number of Rations / Gallons** ---------
</div>

|Abundance|  1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |
|:--------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Plenty  | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 |
| Average | 10 | 13 | 16 | 19 | 22 | 25 | 28 | 31 |
| Scarce  | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 |
| Barren  | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 |

### Keep Watch
___
**Skill:** Wisdom (Perception)

___
You keep your eyes peeled and your ears open for any sign of approaching danger, as well as signs of close by pursuers.

Make a Wisdom (Perception) check. If you roll 7 or less, you take 8 as your result. The DM determines the DC for any threat or other suspicious activity along your path and compares it to the result of all watching players. 

If you travel at a *Fast Pace*, you do not benefit from the minimum result of 8 on your Keep Watch die roll. 

### Navigate <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/west-direction-filled.png">
___
**Skill:** Intelligence (Navigator's tools) or Wisdom (Survival)

___
More often than not, a location of interest for a group of adventurers is not situated along a well trodden path, but hidden in the wilds behind obscure hints and directions.

If you wish to find your way through the wilds towards a specific location, you need to make a Navigation check at the Navigation DC. The Navigation DC is additionally modified by the information you possess to reach your destination:

| Detail of information | DC |
|:----------------------|:---------------------------------------:|
| Detailed map with travel hints                             | -5 |
| Outdated or simple map                                     |  0 |
| Crude Map or general directions *(e.g. 40 <br>   miles north-west, near a small lake)* |  +5  |
| Obscure information *(e.g. follow the <br>  rising sun for 2 moons as the owl flies)*  | +10 |

If your navigation check fails by less than 5, you roughly travel towards your target, but not in the most direct way. Your travel speed is halved (rounded down) for this travel leg.

If your navigation check fails by 5 or more, you have made a mistake. Your travel speed is halved (rounded down) for this travel leg, however, you moved _away_ from your location.

If you rolled a total of 5 or lower, you got lost. Depending on the nature of your surroundings, getting lost might entail additional complications and dangers.

<div style='margin-top:10px'></div>

\pagebreakNum

<div style='margin-top:20px'></div>

### Scout <img src="https://img.icons8.com/ios/20/58180d/poison-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/west-direction-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/napping-filled.png">
___
**Skill:** Intelligence (Investigation) in civil environment, Intelligence (Nature) or Wisdom (Survival) in wild environment.

___
If your travel information is rather vague, or you are simply curious to see what else there is to see, you can scout ahead of the group. Make an Intelligence (Investigation or Nature) or Wisdom (Survival) check. If you are approaching stealthily, also make a Dexterity (Stealth) check. The DM determines the DC for any noticeable things in the vicinity and whether you are noticed scouting.

You might find such things as creatures waiting in ambush, favorable paths, or hidden locations.

### Sneak
___
**Skill:** Dexterity (Stealth)

___
Sometimes you need to move quietly for a while to avert the eyes and ears of nearby enemies or to cover your tracks and take detours to shake off possible pursuers. Doing so does not require the whole party to perform the Sneak activity, as the party members that do so, can try to keep everyone else as stealthy as possible.

Add the Dexterity (Stealth) check results of all sneaking party members together and divide the sum by the number of players in the group (rounding down). This is the final and effective result for the group's efforts.

### Track <img src="https://img.icons8.com/ios/20/58180d/west-direction-filled.png">
___
**Skill:** Wisdom (Survival)

___
Sometimes you don't try to find a specific location, but follow or chase another creature or group. Instead of the Navigation activity, make a Wisdom (Survival) check against the terrain 

\columnbreak

<div style='margin-top:40px'></div>

DC to find and follow the tracks of your quarry. If your quarry is trying to cover their tracks, use the higher of their Sneak result or the terrain DC.

If your check fails by less than 5, you are having trouble following your quarry. Your travel speed is halved (rounded down) for this travel leg.

If your check fails by 5 or more, you have made a mistake. Your travel speed is halved (rounded down) for this travel leg, however, you moved away from your quarry.

If you rolled a total of 5 or lower, you got lost. Depending on the nature of your surroundings, getting lost might entail additional complications and dangers.

___
A different use for the Track activity is to read the tracks your group crosses during their travel, in order to glean what kind of creatures are roaming nearby. Make a Wisdom (Survival) check. The DM determines the DC for any possible tracks you might find and to which creatures they might belong.

### Trailblaze <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/napping-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/west-direction-filled.png">
___
**Skill:** Strength (Athletics)

___
Traveling through difficult terrain slows you significantly. You can help your companions by clearing a clear path for them to follow. Make a Strength (Athletics) check against the terrain DC. If you succeed, the terrain's travel speed penalty is reduced by 1 mile per hour (to a minimum of 0).

If you succeed by 5 or more, the terrain's travel speed penalty is reduced by 2 miles per hour instead.

If you fail the check by less than 5, you still reduce the terrain's travel speed penalty by 1 mile per hour (to a minimum of 0), but you automatically suffer one level of exhaustion at the end of the activity.

<img src='https://www.gmbinder.com/images/Rb1XGdP.png' style='position:absolute; bottom:-0px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-290px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />

\pagebreakNum

## Making Camp

When it's time to make camp for the night, the players need to start looking for a suitable camping location. If you had players *Scout* on the last leg, they may make an Intelligence (Investigation) check, while players that *Kept Watch* may make a Wisdom (Perception) check with disadvantage. For each 5 points of the best result among all rolls, the campsite has one or more properties, some even improved.

If none of the party took either activity, you need to spend an additional hour to find a suitable campsite.

<div style='column-count:2'>

| Campsite properties | Search Result |
|:-------------------:|:---------:|
| 0 |  1–5 |
| +1st Property | 6–10 |
| +2nd Property | 11–15 |

| Campsite properties | Search Result |
|:-------------------:|:---------:|
| +3rd Property | 16–20 |
| Improve any 1 | 21–25 |
| Improve any 2 | 26–30 |

</div>

The DM rolls a d6 on the table below to decide what campsite properties are found first, second and third.

<div style='margin-top:-3px;'></div>

| d6 | 1st Property | 2nd Property | 3rd Property |
|:-------------------:|:---------:|:---------:|:---------:|
|1|Comfortable|Defendable|Hidden
|2|Comfortable|Hidden|Defendable
|3|Defendable|Comfortable|Hidden
|4|Defendable|Hidden|Comfortable
|5|Hidden|Comfortable|Defendable
|6|Hidden|Defendable|Comfortable

<div style='margin-top:-3px;'></div>

___
If you are not content with the campsites you found, you must travel on for another hour (risking a forced march), in order to search again. Once night sets in, you can search by *Scouting* using Intelligence (Investigation) with disadvantage.

<div style='margin-top:-3px;'></div>

##### Comfortable
*The campsite is reasonably protected against all but the harshest weather.* You regain half your maximum hit dice (rounded down, minimum 1) and reduce your exhaustion level by one after completing a long rest (as usual).

In an *Uncomfortable* location you only regain one quarter of your maximum hit dice (rounded down, minimum 0) and don't reduce your exhaustion level.

<div style='margin-top:-3px;'></div>

##### Defendable
*The campsite has a natural barrier or is otherwise difficult to reach (e.g. inside the canopy of a large tree or up on a rock ledge).* The party entering the camp for the first time and other approaching creatures need to succeed on a DC 15 Strength (Athletics) check to enter the camp.

This property can be improved on a Search Result of 20 and more, increasing the DC to enter the campsite to 20.

<div style='margin-top:-3px;'></div>

##### Hidden
*The campsite is removed or obscured from prying eyes (e.g. a cave behind a waterfall or under the leaves of a huge willow tree).* Approaching creatures need to succeed on a DC 15 Intelligence (Investigation) or Wisdom (Perception) check to find your camp.

This property can be improved on a Search Result of 20 or more, increasing the DC to find the campsite to 20.

\columnbreak

## Camp Activities

Once a party sets down to rest, players can choose one or more of the following activities. Each activity takes roughly 1 hour, i.e. each player can perform one of these activities during a short rest, or two activities during a typical long rest of 8 hours (6 hours of sleep and 2 hours of light activity).

You may always expend hit dice to regain lost hit points, but you can take a special camp activity to accelerate your recovery (*Tend to the Wounded*).

<div style='margin-top:px'></div>

### Attune Magic Item <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png">
___
**Skill:** none
___
Attuning to one magical item takes time and concentration. You must have identified the items magical properties before you can attune to it.

<div style='margin-top:px'></div>

### Camouflage Camp <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/west-direction-filled.png">
___
**Skill:** Dexterity (Stealth)

___
You can gather and use natural materials like rocks or foliage to hide your campsite. A successful DC 15 Dexterity (Stealth) check adds the *Hidden* property to your campsite if it doesn't have it. 

<div style='margin-top:px'></div>

### Cook Hearty Meal <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/west-direction-filled.png">
___
**Skill:** Wisdom (Cook's utensils)

___
A good night's rest is not guaranteed when camping in the wilds and a fine cooked meal can go a long way to remedy this fact. Make a DC 15 Wisdom (Cook's utensils) check. <br>You need one fresh ration of food for every person that will partake of the meal, as well as a reasonable amount of seasoning. If you provide at least 50% more fresh rations than necessary, you gain advantage on this check. If you can only provide half the required amount of rations (but not less), you gain disadvantage.

If you succeed, each person partaking of your meal regains a quarter of their maximum hit dice (rounded down, min 1). If you fail, the meal is edible, but not refreshing. If you rolled a total of 5 or lower, the whole meal is spoiled and its rations are wasted.

You can only benefit from one hearty meal per long rest.

<div style='margin-top:px'></div>

### Fortify Camp <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/west-direction-filled.png">
___
**Skill:** Strength (Athletics)

___
You can use wooden spikes or large boulders to barricade your campsite or dig a ditch and build ramparts. A successful DC 15 Strength (Athletics) check adds the *Defendable* property to your campsite if it doesn't already have it. 

<div style='margin-top:px'></div>

### Hunt & Forage <img src="https://img.icons8.com/ios/20/58180d/poison-filled.png">
___
**Skill:** Wisdom (Survival) 

___
Gather food and water or hunt local game.  This is the same action as the *Hunt & Forage* travel activity. However, since you are not traveling at this point, you may make the corresponding Wisdom (Survival) check with advantage.

\pagebreakNum

### Identify Magic Item <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png">
___
**Skill:** proficient Intelligence (Arcana)

___
If you lack the magic abilities to use the *identify* spell, you can try to ascertain the nature of a magic item by focusing on its aura and trying to decipher its glyphs and markings. Make an Intelligence (Arcana) check. The DC depends on the rarity of the magic item you wish to identify.

| Magic Item Rarity |    DC   |
|:------------------|:----------:|
| Common    | 10 |
| Uncommon  | 15 |
| Rare      | 20 |
| Legendary | 25 |
| Artifact  | 30 |


### Keep Watch
___
**Skill:** Wisdom (Perception)

___
A long rest requires at least 6 hours of sleep and 2 hours of light activity. Depending on the size of the traveling party, you are advised to take shifts keeping watch whilst the others try to gain some sleep. Make a Wisdom (Perception) check. If your result is 7 or lower, you can take 8 instead. Players who perform one of the other camp activities (i.e. not sleeping or keeping watch) do not benefit from a minimum of 8 on the roll.

The DM determines the DC for any threat or approaching danger (hostile creatures or natural phenomena) and compares it to all Wisdom (Perception) results. On a success, the watchers are able to wake and warn the rest of the party, and prevent being surprised.


\columnbreak

### Set up Traps <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/west-direction-filled.png">
___
**Skill:** Wisdom (Survival)

___
You can set a number of small traps like caltrops, slings, and small pits around your camp. Make a Wisdom (Survival) check. The DC to find these traps with an Intelligence (Investigation) or Wisdom (Perception) check, as well as the DC for any saving throw made to resist their effects is equal to the result of your Wisdom (Survival) check.

### Rest and Recuperate
___
**Skill:** Wisdom (Medicine)

___
You take your time to catch your breath properly, eat and drink, and dress your wounds. Make a Wisdom (Medicine) check. The DC depends on the severity of your wounds (see the *Dress Wounds* table). If you succeed, treat any hit dice rolled to determine the hit points you regain as having rolled their maximum value during this rest. If you suffer from a sickness or disease, you gain advantage to one related Constitution saving throw during your long rest. 


### Tend to the Wounded <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png">
___
**Skill:** Wisdom (Medicine)

___
You go around camp, making sure that the wounds of up to six creatures other than yourself are properly cleaned and dressed. Make a Wisdom (Medicine) check for each patient, in order to assess the wounds and properly dress them. The DC depends on the severity of their wounds (see the *Dress Wounds* table).

If you succeed, your patient can treat any hit dice rolled to determine the hit points they regain as having rolled their maximum value, during this rest. If your patient suffers from a sickness or disease, it gains advantage to one related Constitution saving throw during your long rest. 

___
>##### Dress Wounds
>
> <br><div style='margin-top:-15px'></div>
>
> ___
> | Combat Condition <br>(see pg. [12](#p12)) | DC* | Required Uses<br>of Healer's kit |
> |:----------:|:----:|:---:|
> | *Bruised*  |   5  |  0  |
> | *Bloodied*  |  10  |  1  |
> | *Beaten*  |  15  |  2  |
> | *Dying*    |  20  |  3  |
> ___
>
> The DC increases by 5 for every use of a healer's kit you cannot provide.

<img src='https://www.gmbinder.com/images/PK3sCSp.png' style='position:absolute; bottom:-10px; right:-20px; width:1050px;transform: scaleX(-1);' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-270px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />

\pagebreakNum

## Mounted Travel

Using mounts or vehicles (such as carts and wagons) you can significantly shorten travel time, up to maximum distance per travel leg using normal pace.

##### Travel Pace of Mounts
| Pace | Cost | Speed | Max.Distance| Capacity
|:------|:---------------|:------:|:----:|----:|
| Pony | 50gp | 5 per hour| 18 miles| 225 lb
| Mastiff | 25 gp | 4 per hour| 12 miles| 195 lb
| Musk Ox | 30 gp | 4 per hour| 15 miles| 700 lb
| Donkey | 8 gp | 5 per hour| 18 miles| 420 lb
| Riding Horse| 75 gp | 8 per hour| 30 miles| 480 lb
| War Horse| 400 gp | 8 per hour| 30 miles| 540 lb
| Draft Horse | 50 gp | 6 per hour| 25 miles| 540 lb
| Mammoth | 200 gp | 4 per hour| 15 miles| 1500 lb
| Camel | 50 gp | 4 per hour| 15 miles| 480 lb
| Carriage | 100 gp | 4 per hour| 15 miles| 1500 lb
| Cart, wagon | 15 gp | 4 per hour| 12 miles| 480 lb

Animals need feed (per day) or can find some themselves with a Wisdom (Survival) check at a DC based on the *Hunt & Forage* table (pg. [81](#p81)) for 1 Ration. Animals who hunger or thirst for longer than 2 days suffer one level of Exhaustion per day at the end of their long rest. 

##### Feed Costs (per day)
| Type | Cost | Weight 
|:------|:---------------|:------|
| Herbivores (hay, barley) | 5cp | 10 lb.| 
| Omnivore (disposed food) | 10cp | 5 lb.| 
| Carnivore (by-products, entrails) | 25cp | 3 lb.| 

Mounts can pull five times their typical carrying capacity minus the weight of the vehicle. Mounts pulling carts or wearing armor may not travel more than two travel legs in a row without rest and suffer a disadvantage to the Forced March check. Travel groups that use wagons have access to the Drive Wagon travel activity, below.

### Drive Wagon <img src="https://img.icons8.com/ios/20/58180d/watch-your-step-filled.png"> <img src="https://img.icons8.com/ios/20/58180d/west-direction-filled.png">
___
**Skill:** Intelligence (Vehicle proficiency) or Dexterity (Animal Handling)
___
You stay at the front of the wagon, maintaining a steady pace for the animals and avoiding road obstacles that slow down or damage the carriage. Make a Dexterity (Animal Handling) check against the Navigation DC. Increase the DC by 5 if you are traveling off-road, without a clear trail or road. 

If your check succeeds by 5 or more, you may increase the travel pace by 1 mile per hour for the rest of the travel leg.

If your check fails by 10 or more or is a critical failure, a cart wheel breaks. Repairing a cart is a Focused activity requiring a successful DC 15 Intelligence check and takes a full travel leg. Players with proficiency in Smith, Carpenter, Woodcarver, or Tinker's tools add their proficiency bonus. 

\columnbreak

## Perils of Travel

##### Starvation

Players can survive without food for 3 + Constitution Modifier Days. At the end of a day beyond that limit, you are starving and automatically suffer one level of exhaustion. Eating food resets the count of days since starvation.

<br><div style='margin-top:-15px'></div>

>
>##### What's In A Ration?
>
> Hard tack, dried and cured meats, cheeses, and dried grains form the basis of traveler's rations. These rations last for 10 days before spoiling, making them valuable choices for purchase compared to fresh meats which spoil after a day.

<br><div style='margin-top:-25px'></div>

##### Dehydration

Hot weather and deserts doubles water intake need to 4 pints per travel leg. Players who can only drink half their daily water intake, must succeed on a DC 15 Constitution saving throw or suffer two levels of exhaustion. If a player drinks no water for the whole day, they automatically suffer two levels of exhaustion.

<br><div style='margin-top:-15px'></div>

>
> ##### Desperate Measures
>
> You can quench thirst by eating raw meat or fresh plants. Each 2 pints of fresh blood or 1 pound of fresh plants counts as 1 pint of water.
>
>You can drink dirty water or blood from a carcass. You must make a DC 15 Constitution saving throw to avoid vomiting. Your next saving throw to resist sickness is at disadvantage. 
>

<br><div style='margin-top:-25px'></div>

##### Sickness

At the end of each day of travel, every player makes a DC 12 Constitution saving throw. If you travel in hazardous weather (arctic or winter) or terrain (jungle or swamp) or someone in the party already suffers from a contagious disease, make that check at disadvantage. Remember that camp activities such as *Rest and Recuperate* and *Tend to the Wounded* helps negate this disadvantage. If you fail, record the failure. If you succeed, remove all recorded failures so far.

If you record two failures in a row, you come down with a minor sickness such as the common cold. It is more of an annoyance than anything else.

If you record three failures in a row, you get sick from a regional sickness such as flu or malaria. While sickened, you suffer from disadvantage to Dexterity and Wisdom saving throws until you recover. Magic such as greater restoration helps you recover immediately.

If you record four or more failures in a row, you are really sick from a rare regional disease such as plague or dengue fever. While sickened, you suffer one permanent level of exhaustion and disadvantage to all saving throws until you recover. DMs may impose other risks, including death. 


\pagebreakNum

## Optional Detail

These tables help the DM come up with quick results to player actions based on terrain and circumstances.

### Foraging - Water

When making a *Hunt & Forage* travel activity for water, you may apply the following modifiers:

| Terrain | DC |
|:----:|:----:|
| Tundra, Snowfall/Winter| No check needed
| Mountain Peak, Sub-Arctic| No check needed
| Swamp | No check. Dirty Water. |
| Light Forest, Jungle | 10 |
| Dense Forest | 12 |
| Plains, Hills  | 15 |
| Mountain Base| 20
| Major River within 10 miles| -5 DC
| Recent Rainfall|-5 DC

### Foraging - Plants

When making a *Hunt & Forage* travel activity for plants, if your result beats the DC you find a specific type of plant food.

#####   Plains 
| Type | Summer/Spring | Autum| Winter
|:----:|:----:|:----|:----|:----|
| Fruit/Berries | 12 |15| N/A
| Mushrooms/ Edible Plants | 10 | 12| N/A
| Nuts/Roots | 10 | 11| 15

#####   Forest
| Type | Summer/Spring | Autum| Winter
|:----:|:----:|:----|:----|:----|
| Fruit/Berries | 10 |15| N/A
| Mushrooms/ Edible Plants | 5 | 10| N/A
| Nuts/Roots | 10 | 12| 15

#####   Jungle/Swamp 
| Type | Summer/Spring | Autum| Winter
|:----:|:----:|:----|:----|:----|
| Fruit/Berries | 12 |15| N/A
| Mushrooms/ Edible Plants | 10 | 12| N/A
| Nuts/Roots | 11 | 11| 15

#####   Hills/Mountain Base 
| Type | Summer/Spring | Autum| Winter
|:----:|:----:|:----|:----|:----|
| Fruit/Berries | 13 |16| N/A
| Mushrooms/ Edible Plants | 10 | 12| N/A
| Nuts/Roots | 11 | 11| 15

\columnbreak

#####   Tundra/Sub-arctic/Mountain Peak 
| Type | Summer/Spring | Autum| Winter
|:----:|:----:|:----|:----|:----|
| Fruit/Berries | N/A |N/A| N/A
| Mushrooms/ Edible Moss | 15 | 20| N/A
| Roots | 15 | 17| 20|

### Hunting 

When making a *Hunt & Forage* travel activity for a game, the DM may let the players roleplay actual hunting. If they choose to, use the following tables to identify, track and kill the prey. Make a Wisdom (Perception) check against the Track DC, and then an Attack Roll against the Kill DC to take down each individual prey with the appropriate weapon (usually, a ranged weapon). You have advantage on one of the Attack rolls if you beat the Track DC by 5 or more prior making the killing shot.

Each terrain table has 17 safe encounters and 3 combat encounters with *Monster Manual* page references. In combat encounters, players can withdraw or must fight the creature. Depending on how dangerous your environment is, you may change safe encounters into appropriate combat encounters. 

<div class="hunttable">


##### Plains
1d20|Creature|Track|Kill|Meat (lbs)|
|:----:|:----|:----:|:----:|:----:|
1—3|1d2 Rabbits|12|14|1d2|
4—5|1d4 Deer|12|13|20+1d8|
6—7|1d2 Elk|12|10|30+1d10|
8—9|1d4 Wolves|15|13|1d12|
10—11|1d4 Foxes|15|13|1d8|
12—13|1d4 Squirrels|10|13|1d2|
14—15|1d20 Flock of birds|10|8|1d2|
16—17|1 Eagle|12|12|1d12|
18|1 Giant Lizard (MM318)|12|Combat|1d12|
19|1 Wild Cat<br>(MM339)|15|Combat|20+1d20|
20|1 Male Lion (MM339)|15|Combat|30+1d10|

</div>

<div class="hunttable">

##### Hills/Mountain Base
1d20|Creature|Track|Kill|Meat (lbs)|
|:----:|:----|:----:|:----:|:----:|
1—3|1d2 Rabbits|12|14|1d2|
4—5|1d4 Goats|11|13|10+1d8|
6-7|1d2 Wild cats|14|10|10+1d8|
8—9|1d4 Wolves|15|13|1d12|
10—11|1d4 Foxes|15|13|1d8|
12—13|1d20 Birds|10|8|1d2|
14—15|1d5 Vultures|12|10|1d12|
16—17|1 Black Bear<br>(MM318, flees)|11|11|40+1d10|

</div>

\pagebreakNum

<br><div style='margin-top:-40px'></div>

<div class="hunttable">

##### Hills/Mountain Base (cont.)
1d20|Creature|Track|Kill|Meat (lbs)|
|:----:|:----|:----:|:----:|:----:|
18|1 Boar<br>(MM319)|9|Combat|30+1d8|
19|1 Brown Bear (MM319)|12|Combat|80+2d10|
20|1 Cave Bear (MM334)|13|Combat|100+2d10|

</div>

<br><div style='margin-top:-45px'></div>

<div class="hunttable">

##### Swamp
1d20|Creature|Track|Kill|Meat (lbs)|
|:----:|:----|:----:|:----:|:----:|
1—3|1d6 Frogs|10|11|1d2|
4—5|1d6 Lizards|8|10|1d4|
6—7|1d4 Turtles|8|12|1d6|
8—9|1d20 Birds|10|8|1d2|
10—11|1d4 Poisonous Snakes|10|13|1d2|
12—13|1d2 Constrictor Snakes|10|12|1+1d4|
14—15|1 Crocodile|10|12|20+1d8|
16—17|1d4 Snails|8|10|1d2|
18|1 Giant poisonous snake (MM327)|10|Combat|5+1d12|
19|1 Giant Lizard (MM318)|12|Combat|1d12|
20|1 Giant Crocodile (MM324)|10|Combat|30+1d10|

</div>

<br><div style='margin-top:-45px'></div>

<div class="hunttable">

##### Forest
1d20|Creature|Track|Kill|Meat (lbs)|
|:----:|:----|:----:|:----:|:----:|
1—3|1d4 Squirrels|10|13|1d2|
4—6|1d2 Rabbits|12|14|1d2|
7—9|1d4 Wolves|15|13|1d12|
10—11|1d2 Foxes|12|13|1+1d6|
12—13|1d2 Racoons|10|10|1+1d6|
14—15|1d2 Wild cats|14|10|10+1d8|
16—17|1d20 Flock of birds|10|8|1d2|
18|1 Boar<br>(MM319)|9|Combat|30+1d8|
19|1 Brown Bear<br>(MM319)|12|Combat|80+2d10|
20|1 Owlbear<br>(MM249)|13|Combat|90+2d6|

</div>

\columnbreak

<br><div style='margin-top:-40px'></div>

<div class="hunttable">

##### Tundra/Sub-Arctic
1d20|Creature|Track|Kill|Meat (lbs)|
|:----:|:----|:----:|:----:|:----:|
1—3|1d2 Arctic hares|12|14|1d2|
4—5|1d8 Musk ox|10|12|40+1d20|
6—7|1d4 Wolves|15|13|1d12|
8—9|1d2 Arctic foxes|12|13|1+1d6|
10—11|1d4 Goats|11|13|10+1d8|
12—13|1d2 Caribou|12|10|30+1d10|
14—15|1d6 Penguins|8|12|2+1d6|
16—17|1d20 Flock of birds|10|8|1d2|
18|1 Saber-Toothed Tiger (MM336)|15|Combat|40+1d10|
19|1 Polar Bear<br>(MM334)|12|Combat|90+2d20|
20|1 Yeti<br>(MM305)|14|Combat|90+1d20|

</div>

<div class="hunttable">

##### Jungle
1d20|Creature|Track|Kill|Meat (lbs)|
|:----:|:----|:----:|:----:|:----:|
1—3|1d20 Flock of birds|10|8|1d2|
4—5|1d4 Poisonous Snakes|10|13|1d2|
6—7|1d2 Constrictor Snakes|10|12|1+1d4|
8—9|1d6 Lizards|8|10|1d4|
10—11|1 Crocodile|10|12|20+1d8|
12—13|1d6 Frogs|10|11|1d2|
14—15|1d4 Panthers|12|15|15+1d10|
16—17|1+1d6 troop of apes|11|15|10+1d6|
18|1 Giant Lizard<br>(MM318)|12|Combat|1d12|
19|1 Saber-Toothed Tiger (MM336)|15|Combat|40+1d10|
20|1 Giant ape<br>(MM323)|11|Combat|50+1d10|

</div>

<img src='https://www.gmbinder.com/images/VUpg7Km.png' style='position:absolute; top:70px; right:0px; width:1000px' />

<img src='https://www.gmbinder.com/images/sKQMREa.png' style='position:absolute; top:30px; right:0px; width:850px; transform: scalex(1); filter:   opacity(100%)   grayscale(100%)   brightness(97%)' />

\pagebreakNum

### Fishing 

Fishing is a time-consuming activity that requires a whole travel leg (3-5 hours) to be spent near the bank of a river or a lake. For every travel leg spent fishing, the player rolls a DC 12 Survival check. If successful, the DM rolls on the following table. 

Subtract 5 from the result (minimum 1) if fishing in a River, or subtract 10 from the result (minimum 1) if fishing in a Pool or a Small Lake. 

<div style='margin-top:-4px;'></div>

##### Freshwater
| 1d20 | Fish Type| Meat (lbs)
|:----:|:----:|:----:
| 1|Bass|2d4
| 2|Perch|1d6
| 3|Catfish|2d6
| 4|Walleye|2d6
| 5|Crappie|1d4
| 6|Bluegill|1d2
| 7|Rudd|1d4
| 8|Bream|2d4
| 9|Chub|2d4
|10|Pike|3d6
|11|Snook|2d6
|12|Salmon|2d6
|13|Grayling|2d4
|14|Trout|2d4
|15|Flounder|2d6
|16|Grouper|2d6
|17|Tarpon|20+2d10
|18|Sole|2d4
|19|Tuna|10+2d8
|20|Swordfish|30+3d10

<div style='margin-top:-4px;'></div>

##### Saltwater
| 1d12 | Seafood | Number Appearing| Meat (lbs)
|:----:|:-----:|:----:|:----:
| 1| Crab |1d8|1d4
| 2| Crayfish |1d12|1d2
| 3| Lobster |1d12|1d2
| 4| Prawn |2d20|1/4
| 5| Molluscs |1d12|1/4
| 6| Cockle|1d12|1/4
| 7| Cuttlefish|1d2|1d2
| 8| Mussel|1d12|1/4
| 9| Octopus|1d2|1d4
|10| Oyster|1d6|1/4
|11| Scallops|1d12|1/4
|12| Squid|1d4|1d4

\columnbreak

## Creating Hazards

The following rules let the DM quickly design and resolve blizzards, hailstorms, avalanches and earthquakes. Choose the appropriate tier of your player group and the danger level of the hazard: setback, dangerous or deadly. Each hazard has an associated saving throw (usually Dexterity or Constitution) that the players must make. 

If they fail, they take damage appropriate for their level tier. If they succeed, they take half of that damage. If they critically fail, they suffer vulnerability to the full damage. If they critically succeed, they have resistance to the half damage. 


##### Hazards Save DCs and Attack Bonuses
| Hazard Danger Level | Save DC |
|:----|:---|
| Setback | 10-11 |
| Dangerous | 12-15 |
| Deadly | 16-20 |

##### Damage Severity by Level
| Character Level | Setback | Dangerous | Deadly |
|:----:|:---:|:---:|:---:|
| 1st-4th | 1d10 | 2d10 | 4d10 |
| 5th-10th | 2d10 | 4d10 | 10d10 |
| 11th-16th | 4d10 | 10d10 | 18d10 |
| 17th-20th | 10d10 | 18d10 | 24d10 |

### Hazard Examples

<div style='margin-top:5px'></div>

#### Avalanches, Rockfalls and Mudslides
*Any Level of Hazard*
___
Any character in the area where the hazard occurs must make a Dexterity saving throw. On a failed save, a creature takes bludgeoning damage and is buried by the hazard, or half as much damage on a successful one. The area is filled with snow, rubble or mud and becomes difficult terrain.

Any buried creature is considered suffocated, and it can dig through to free itself. To do so, the creature must succeed a number of Strength (Athletics) checks, as shown in the following table.

| Hazard Level | Number of Checks |
|:----|:----:|
| Setback  | 2 |
| Dangerous  | 3 |
| Deadly | 4 |

You can read more about suffocating rules in chapter 8 of the *Player's Handbook.*

#### Blizzard
*Setback Hazard*
___
The area affected by a blizzard is considered difficult terrain. When a creature without proper shelter is in the area affected by the blizzard for one hour, it must make a Constitution saving throw, taking cold damage on a failed save or half as much damage on a successful one. If a creature is wearing warm clothing, it has advantage on the saving throw.

\pagebreakNum

#### Earthquakes
*Any Level of Hazard*
___
A tremor shakes the area; each creature on the ground in that area must make a Dexterity saving throw or be knocked prone.

The hazard level is determined by the proximity to the epicentre or the intensity of the earth tremor:
- **Setback.** Far from the epicentre or light earthquake.
- **Dangerous.** Near the epicentre or moderate earthquake.
- **Deadly.** Very close to the epicentre or severe earthquake.

#### Hailstorm
*Dangerous Hazard*
___
Similar to a blizzard, the terrain affected by the hailstorm is considered difficult terrain. When a creature without proper shelter is in the area affected by the hailstorm for one hour, it must make a Constitution saving throw, taking cold damage on a failed save or half as much damage on a successful one.

#### Insect Swarm
*Setback Hazard*
___
A cloud of swarming insects fills a 20-foot-radius sphere. The swarm moves 20 feet each round. When a creature enters the cloud, it must make a Constitution saving throw. On a failed save, it takes piercing damage, or half as much damage on a successful one. A creature that ends its turn in the cloud must roll another saving throw. A creature cannot be damaged by the insect swarm if it’s wielding a torch or if it is at least 5 feet from a fire. 

#### Lava
*Deadly Hazard*
___
The lava is considered difficult terrain. Any creature that enters the lava takes fire damage. A creature that ends its turn in the lava takes fire damage.


#### Lightning Storms
*Dangerous or Deadly Hazard*
___
The DM rolls a d20 to determine if any creature is struck by lightning. This check can be made at the beginning of each turn during combat or at any time while the party is not in combat.

| d20 | Number of Creatures |
|:----:|:----|
| 1—10 | 0 |
| 11—14 | 1d4 |
| 15—17 | 1d6 |
| 18—19 | 1d8 |
| 20 | 1d10 |

The creatures hit by lightning are determined by the DM, and any creature in the area under total cover from above cannot take damage.

\columnbreak

#### Magma Eruptions
*Dangerous Hazard*
___
Magma erupts from a point on the ground, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a Dexterity saving throw, taking fire damage on a failed save, or half as much on a successful one.

#### Poison Clouds and Spores
*Setback Hazard*
___
When a creature enters the cloud, it must make a Constitution saving throw, taking poison damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the cloud must make another saving throw.

#### Rapids
*Setback Hazard*
___
When a Large or smaller creature enters the rapids, it’s pushed 30 feet in the direction of the water flow and it must succeed on a Strength saving throw or take bludgeoning damage. Any creature caught by the rapids can make a Strength (Athletics) check to swim out of the rapids.


#### Rogue Wave
*Dangerous Hazard*
___
A large and unexpected wave that can be extremely dangerous. When a creature is hit by the rogue wave, it must succeed on a Strength saving throw or take bludgeoning damage, or half as much damage on a successful save. The rogue wave, along with any creatures in it, moves in a straight line at a speed of 50 feet per turn, and any Huge or smaller creature inside the wall must succeed on a Strength saving throw or take damage. The wave damage is reduced by 1d10 on each subsequent round. When the damage is reduced to 0, the wave ends. 

A creature caught by the wave can move by swimming and it can make a Strength (Athletics) check to swim out of the wave.

#### Sandstorms
*Dangerous Hazard*
___
Any creature in the sandstorm must make a Constitution saving throw or be blinded until the sandstorm ends. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature cannot be blinded by the sandstorm if it’s wearing goggles or something that protects its eyes.

Any check that relies on sight is made with disadvantage for the duration of the sandstorm.

#### Unsteady Ground
*Setback Hazard*
___
The floor in the area is considered difficult terrain. Any creature on the ground that starts moving on its turn while in the area must succeed on a Dexterity (Acrobatics) check or fall prone. If a creature uses a Dash action, it must make another check.

\pagebreakNum

<div class='partpage-dmg'>

# Part IV

##### Crits & Injuries 

<img src='https://www.gmbinder.com/images/6qut4ZI.png' class='cover-image' style="height:1066px" />

</div>

___
\columnbreak

<div style="margin-top:550px;"></div>

<div class='classTable toc' style='display:none'>

## Table of Contents

- ### [<span>83-86</span><span>Critical Tables</span>](#p83)
  - [<span>83</span><span>Weapon Attack Critical Hit</span>](#p83)
  - [<span>84</span><span>Weapon Attack Critical Failure</span>](#p84)
  - [<span>85</span><span>Spell Attack Critical Hit</span>](#p85)
  - [<span>86</span><span>Spell Attack Failure</span>](#p86)

- ### [<span>87-94</span><span>Injury Tables</span>](#p87)
  - [<span>87</span><span>Acid Injury</span>](#p87)
  - [<span>87</span><span>Bludgeonin Injury</span>](#p87)
  - [<span>88</span><span>Cold Injury</span>](#p88)
  - [<span>88</span><span>Fire Injury</span>](#p88)
  - [<span>89</span><span>Force Injury</span>](#p89)
  - [<span>90</span><span>Lightning Injury</span>](#p90)
  - [<span>90</span><span>Necrotic Injury</span>](#p90)
  - [<span>91</span><span>Piercing/Bleeding Injury</span>](#p91)
  - [<span>91</span><span>Poison Injury</span>](#p91)
  - [<span>92</span><span>Psychic Injury</span>](#p92)
  - [<span>92</span><span>Radiant Injury</span>](#p92)
  - [<span>93</span><span>Slashing Injury</span>](#p93)
  - [<span>93</span><span>Siege Critical Injury</span>](#p93)
  - [<span>94</span><span>Thunder Injury</span>](#p94)


</div>


\pagebreakNum

<div class='wide'>

<div style="margin-top:-20px;"></div>

##### Weapon Attack Critical Hit 
| Roll %  | Description | Effect | 
|:---:|:-----------|:----------:|
|  1  | *You feel accomplished, but nothing remarkable happens.* | Regular critical hit. |
|  2-5  | *You feel it is imperative to press the advantage no matter the cost.*	| You can choose to gain advantage on all attacks against your target until the end of your next turn, but if you do all enemies have advantage on their attack rolls against you until the end of your next turn. |
|  6-9  | *You feel it is imperative to press the advantage, but maintain awareness of your surroundings.* | You can choose to gain advantage on all attacks against your target next turn, your target has advantage on their attack rolls against you until the end of your next turn. |
|  10-14  | *You know how to press the advantage.* | You gain advantage on all attacks against your target until the end of your next turn. |
|  15-19  | *As you are fighting, you notice an effective route to escape danger.* | You are able to use the disengage action after your attack. |
|  20-24  | *You feel the eb and flow of the battle, and know where to make your next move.* | After your turn you move to the top of the initiative order. |
|  25-29  | *You begin to recognize patterns in your opponent’s fighting technique.* | You gain +2 to your AC against your target, and advantage on all savings throws from effects originating from your target until your next turn. |
|  30-39  | *You are able to manoeuvre towards your opponent while attacking, and attempt to harass them.* | After your attack you can choose to attempt to grapple your opponent if you have a free hand, or attempt to shove your opponent if both hands are in use. | 
|  40-49  | *You are able to manoeuvre towards your opponent while attacking and harass them.* | After your attack you can choose to automatically succeed in grappling your opponent if you have a free hand, or shoving your opponent if both hands are in use. |
|  50-59  | *You attempt to disarm your opponent.* | You are able to take the disarm action after your attack |
|  60-69  | *You kick your target’s weapon out of their hands.* | You are able to take the disarm action after your attack, and can steal your opponent’s weapon if you have a free hand. Otherwise you can knock it up to 20 feet away. |
|  70-74  | *Your senses heighten and you become aware of threats around the battlefield.* | You are able to use the dodge action after your attack. |
|  75-79  | *Your attack knocks your target over.* | Your target is knocked prone. |
|  80-84  | *Your strike surprises your opponent.* | Your target is surprised until the end of their next turn. |
|  85-89  | *You strike with great force.* | Roll an additional set of damage dice above and beyond your normal critical roll. |
|  90-94  | *You strike with extreme force.* | Roll an additional set of damage dice above and beyond your normal critical roll, and the target suffers one level of exhaustion. |
|  95-99  | *You strike with debilitating force.* | Roll an additional set of damage dice above and beyond your normal critical roll, and the target suffers a permanent injury chosen by the DM. The permanent injury can be healed with an extended rest of a length determined by the DM, but the attack leaves a scar. |
|  100  | *You strike with devastating force.* | Roll an additional set of damage dice above and beyond your normal critical roll, and the target suffers 1 unit of exhaustion, and the target suffers a permanent injury chosen by the DM. The permanent injury can be healed with an extended rest of a length determined by the DM, but the attack leaves a scar. |

</div>

<div class="memo2-bottom" style="left:-12px;bottom:-95px;transform: rotate(3deg);">

##### Limiting Critical Hits

You can limit critical effects only when rolling natural 20 while also having Dominance (pg. [18](#p18)) over your target.

</div>

<img src='https://www.gmbinder.com/images/ew9l4fG.png' style='position:absolute; bottom:-410px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-10px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%);transform: scalex(-1);' />

\pagebreak

<div class="memo2-top3" style="right:-20px;top:-130px">

##### Critical Failure

When you roll natural 1 on an attack roll, <br>roll 1d100 for a Critical Failure event. 

</div>

<div class='wide'>

##### Weapon Attack Critical Failure  
| Roll %  | Description | Effect | 
|:---:|:-----------|:----------:|
|  1  | *You are embarrassed by your poor showing, but nothing remarkable happens.* | You miss your attack. |
|  2-5  | *You lose your combat footing, exposing yourself to your target.*	| Your target has advantage on their first attack roll against you next round. |
|  6-9  | *You lose your combat footing, exposing yourself to your enemies.* | Your enemies have advantage on their first attack roll against you next round. |
|  10-14  | *You lose your combat footing, and have difficulty recovering.* | Your enemies have advantage on their attack rolls against you until the end of your next turn. |
|  15-19  | ***Melee:** You get tangled with your enemy and fall over. <br>**Ranged:** You spill the contents of your quiver.* | **Melee:** You are knocked prone and your movement is reduced to 0. Your target must succeed a DC 10 dexterity check or they are also knocked prone.<br> **Ranged:** You must pick up arrows individually from the ground using your “environmental interaction”, or the “Use an Object” action to nock an arrow. |
|  20-29  | *You lose your balance while attacking.* | You fall prone and your movement is reduced to 0. |
|  30-39  | *As you attack your opponent you begin to fear that they are the superior combatant.* | Disadvantage on your next attack roll against your target. |
|  40-49  | *You miss an attack and gaze upon the chaos of the battle, causing your confidence to falter.* | Disadvantage on your next attack roll against any target. |
|  50-59  | *You lose your grip as you attack.* | Roll a DC 10 Dexterity Check, on a failure you drop your weapon at your feet. |
|  60-69  | ***Melee:** The weapon slips from your hand as you attack. <br>**Ranged:** Your ammunition gets lodged in its container.* | **Melee:** Roll a DC 10 Dexterity Check, on a failure you throw your weapon into your enemy’s space. The DM determines where the item is thrown on large or greater sized creatures. <br>**Ranged:** You must use an action to organize the ammunition in its case before you can make another ranged attack. |
|  70-79  | ***Melee:** You lunge past an enemy exposing yourself to his attack. <br>**Ranged:** Your missile startles your allies near your target.* | **Melee:** The enemy you were attacking is able to use their reaction to perform and attack of opportunity. <br>**Ranged:** the target can perform an opportunity attack on any ally within melee range. |
|  80-84  | *Missing what you thought was a critical blow causes you to panic.* | End your current turn and you are surprised until the end of your next turn. |
|  85-89  | *You attack wildly and lose track of the fight around you.* | End your turn and move to the bottom of the initiative order at the start of the next round. |
|  90-94  | *You lose your footing while attacking and fall to the ground bumping your head.* | You fall prone. Roll a DC 10 constitution save, on failure you take 1d6 damage and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious. |
|  95-99  | *You lose your footing while attacking and fall head first.* | You fall prone. Roll a DC 15 constitution save, on failure you take 2d6 damage and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious. |
|  100  | *You lose your footing while attacking and slam your head into the ground.* | You fall prone, take 3d6 damage, and become unconscious for 1 minute or until you receive damage from any source. |

</div>

<div class="memo2-bottom" style="left:-12px;bottom:-95px;transform: rotate(3deg);">

##### Triggers of Failure 

Critical failure can put an abrupt end to any campaign. Such fumbles only happen for you if you have 3 or more levels of Exhaustion.

</div>

<img src='https://www.gmbinder.com/images/DBnaNeP.png' style='position:absolute; bottom:-90px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-40px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%);transform: scalex(-1);' />


\pagebreak

<div class='wide'>

##### Spell Attack Critical Hit
| Roll %  | Description | Effect | 
|:---:|:-----------|:----------:|
|  1  | *You feel accomplished, but nothing remarkable happens.* | Regular spell critical hit. |
|  2-5  | *You feel it is imperative to press the advantage no matter the cost.* | You can choose to gain advantage on your next attack roll against your target, but all enemies have advantage on their attack rolls against you until the end of your next turn. |
|  6-9  | *You feel it is imperative to press the advantage, but maintain awareness of your surroundings.* | You can choose to gain advantage on your next attack roll against your target, your target has advantage on their attack rolls against you until the end of your next turn. |
|  10-14  | *As you are fighting, you notice an effective route to escape danger.* | You are able to use the disengage action after your attack. |
|  15-19  | *You feel the eb and flow of the battle, and know where to make your next move.* | After your turn you move to the top of the initiative order. |
|  20-29  | *Your spell cripples your opponent.* | Your target’s movement speed is cut in half for their next 2 turns. |
|  30-39  | *Your spell attack knocks your target over.* | Your target is knocked prone. |
|  40-49  | *The light from your spell flashes near your target’s eyes* | Your target is blinded until the end of their next turn. |
|  50-59  | *You blast the targets weapons out of their hands.* | Your target’s weapon is flung 1d6*5 feet away in a random direction. |
|  60-69  | *The sight of your magic fills the target’s heart with fear.* | Your target is frightened by you until you stop casting magic. You are able to discern the source of your targets fear. |
|  70-74  | *The force from your spell stuns your opponent.* | Your target is incapacitated until the end of their next turn. |
|  75-79  | *Your spell is incidentally infused with fey energy.* | Roll 10d8. If your targets current health is lower than the number rolled they fall asleep for 1 minute. |
|  80-84  | *Your spell’s strike surprises your opponent.* | Your target is surprised until the end of their next turn. |
|  85-89  | *Your spell strikes with great force.* | Roll an additional set of spell damage dice above and beyond your normal critical roll. |
|  90-94  | *Your spell strikes with extreme force.* | Roll an additional set of spell damage dice above and beyond your normal critical roll, and the target suffers one unit of exhaustion. |
|  95-99  | *Your spell strikes with debilitating force.* | Roll an additional set of spell damage dice above and beyond your normal critical roll, and the target suffers a permanent injury chosen by the DM. The permanent injury can be healed with an extended rest of a length determined by the DM, but the attack leaves a scar. |
|  100  | *Your spell strikes with devastating force.* | Roll an additional set of spell damage dice above and beyond your normal critical roll, and the target suffers 1 unit of exhaustion, and the target suffers a permanent injury chosen by the DM. The permanent injury can be healed with an extended rest of a length determined by the DM, but the attack leaves a scar. |

</div>

<div class="memo2-bottom" style="left:-12px;bottom:-95px;transform: rotate(3deg);">

##### Limiting Critical Hits

You can limit critical effects only when rolling natural 20 while also having Dominance (pg. [18](#p18)) over your target.

</div>

<img src='https://www.gmbinder.com/images/N88t5DX.png' style='position:absolute; bottom:-130px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-80px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%);transform: scalex(-1);' />

\pagebreak

<div class="memo2-top3" style="right:-20px;top:-130px">

##### Critical Failure

When you roll natural 1 on a spell attack, roll 1d100 for a Critical Failure event. 

</div>

<div class='wide'>

##### Spell Attack Failure
| Roll %  | Description | Effect | 
|:---:|:-----------|:----------:|
|  1  | *You are embarrassed by your poor showing, but nothing remarkable happens.* | You miss your attack. |
|  2-5  | *You get wrapped up in your spellcasting and forget to watch your target.* | Your target has advantage on their first attack roll against you next round. |
|  6-9  | *You get wrapped up in your spellcasting and forget to watch your surroundings.* | All enemies have advantage on their first attack roll against you next round. |
|  10-14  | *You are so wrapped up in your spellcasting that you forget you are fighting a battle.* | All enemies have advantage on their attack rolls against you until the end of your next turn. |
|  15-19  | *Your spell creates a large plume of smoke obscuring your location.* | The area in a 5 foot radius around your location becomes heavily obscured for 1 minute. A strong breeze can blow away the smoke in 1 round. |
|  20-29  | *Your spell misfires knocking you over.* | You are knocked prone. |
|  30-39  | *The spell fires in an unexpected manner, causing your confidence in your abilities to falter.* | You have disadvantage on any spell attacks, and enemies have advantage against your spell savings throws until the end of your next turn. |
|  40-49  | *The placement of your spell startles your allies near to your target, causing them to drop their guard.* | Your target is able to use their reaction to take an attack of opportunity on one of your allies in melee range. |
|  50-59  | *You scramble the ingredients of your component pouch or your focus becomes overloaded with magical energy and temporarily stops working.* | You are unable to use material components to cast spells until the end of your next turn. |
|  60-69  | *Your arm cramps as you cast.* | You are unable to perform somatic components to cast spells until the end of your next turn. |
|  70-79  | *You bite your tongue as you cast.* | You are unable to use verbal components to cast spells until the end of your next turn. |
|  80-84  | *Your spell misfires and dazes you, causing you to lose track of the fight.* | End your turn and move to the bottom of the initiative order at the start of the next round. |
|  85-89  | *Your spell misfires causing you to panic.* | End your current turn and you are surprised until the end of your next turn. |
|  90-94  | *Your spell backfires creating a small explosion causing you to fall and bump your head.* | You fall prone. Roll a DC 10 constitution save, on failure you take 1d6 bludgeoning damage and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious. |
|  95-99  | *Your spell backfires creating a large explosion causing you to fall and bump your head.* | You fall prone. Roll a DC 15 constitution save, on failure you take 1d6 bludgeoning damage, 1d6 thunder damage, and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious. |
|  100  | *Your spell completely backfires creating a large explosion causing you to fall and bump your head.* | You hit yourself with your spell. If the spell effect is instant you take the full effect. You also fall prone, take 1d6 bludgeoning damage, 1d6 thunder damage, and become unconscious for 1 minute or until you receive damage from any source. | 

</div>

<div class="memo2-bottom" style="left:560px;bottom:-92px;transform: rotate(-3deg);">

##### Triggers of Failure 

Critical failure can put an abrupt end to any campaign. Fumbles only happen for you if you have 3 or more levels of Exhaustion.

</div>

<img src='https://www.gmbinder.com/images/4eCB3MK.png' style='position:absolute; bottom:-10px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-70px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%);transform: scalex(-1);' />


\pagebreak

<div class='wide'>

<div style="margin-top:-20px;"></div>


##### Acid Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Blindness.** Your eyes are destroyed; you gain the blinded condition. Magic such as the regenerate spell can restore your sight. |
| 2 | **Partial Blindness.** Your eyes are damaged; you have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can heal the damage to your eyes. If you have already suffered partial blindness, you're blinded. |
| 3 | **Destroyed Hand.** You can no longer hold anything with two hands, and you can hold only a single object at a time. Magic such as the regenerate spell can restore the lost appendage. |
| 4 | **Destroyed Foot or Leg.** Your speed on foot is halved, and you must use a crutch or cane to move. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. Magic such as the regenerate spell can restore the damaged appendage. |
| 5-7 | **Major Neuralgia.** You are in constant pain from nerve damage. Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal and regenerate, cures the neuralgia, or if you spend twenty days doing nothing but resting it resolves on its own. |
| 8-10 | **Minor Neuralgia.** This has the same effect as Major Neuralgia above, except that the save DC is 10, and it only takes ten days to resolve on its own. |
| 11-13 | **Horrible Disfigurement.** You have acid burns to the extent that the scars can't be easily concealed. You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks. Magical healing of 6th level or higher, such as heal or regenerate, remove the acid burn scar. |
| 14-16 | **Blisters.** You have severe blisters. You have disadvantage on Dexterity checks. The blisters heal if you receive magical healing. Alternatively, someone can tend to the blisters and make a DC 15 Wisdom (Medicine) check once every 24 hours. After seven successes, the blisters heal. |
| 17+ | **Minor Disfigurement.** You have acid burn scars, but they don’t have any adverse effect. Magical healing of 6th level or higher, such as heal or regenerate, remove the acid burn scars. |

<div style="margin-top:-10px;"></div>

##### Bludgeoning Injury

Use the Bludgeoning Injury table when a character gains an Injury Token due to receiving excess Wounds. In such a case, when you roll 1-3 on the table below, use 4 instead. 

<div style="margin-top:-10px;"></div>

| Roll | Injury | 
|:-:|:-|
| 1 | **Brain Injury.** You have suffered a brain injury. You have disadvantage on Intelligence, Wisdom, and Charisma checks, as well as Intelligence, Wisdom, and Charisma saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can restore your full brain function. |
| 2 | **Broken leg.** Your speed on foot is halved, and you must use a cane or crutch to move. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. If your leg is splinted with a successful DC 15 Wisdom (Medicine) check, then it will heal naturally in 8 weeks. If it is not splinted before within a week, the effects remain until the leg is rebroken and splinted. Magical healing of 6th level or higher, such as heal or regenerate, mends the broken leg. | 
| 3 | **Broken arm.** You can no longer hold anything with two hands, and you can hold only a single object at a time. If your arm is splinted with a successful DC 15 Wisdom (Medicine) check, then it will heal naturally in 8 weeks. If it is not splinted before within a week, the effects remain until the arm is rebroken and splinted. Magical healing of 6th level or higher, such as heal or regenerate, mends the broken arm.|
| 4 | **Internal Injury.** Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, repair the injury, or if you spend ten days doing nothing but resting, it will heal naturally. |
| 5-7 | **Broken Ribs.** This has the same effect as Internal Injury above, except that the save DC is 10. |
| 8-10 | **Major Concussion.** You have disadvantage on Intelligence checks, Wisdom checks, and Charisma checks, as well as Constitution saving throws to maintain concentration. Magical healing of 6th level or higher, such as heal or regenerate, cures the concussion. Alternatively, it heals on its own in four weeks. |
| 11-13 | **Minor Concussion.** You have disadvantage on Intelligence checks. The concussion heals if you receive any magical healing; alternatively, it heals on its own in two weeks. If you already have a minor concussion, you suffer a major concussion. |
| 14-16 | **Severe bruising.** You suffer severe bruising over an extensive portion of your anatomy. Anytime you suffer bludgeoning or force damage, you suffer an additional point of bludgeoning or force damage. The bruising heals if you receive magical healing. Alternatively, it heals on its own in 2 weeks. |
| 17+ | **Broken Nose.** Your broken nose is painful but doesn't have any adverse effect. Any magical healing mends your nose, although it may heal crooked if it is crooked when the healing is applied. |
</div>

\pagebreakNum

<div class='wide'>

<div style="margin-top:-30px;"></div>

##### Cold Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Ocular Damage.** One of your corneas is damaged from frostbite. You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can restore the damaged cornea. If you have no corneas that remain undamaged after sustaining this injury, you're blinded. |
| 2 | **Systemic Damage from Frostbite.** You have disadvantage on Strength, Dexterity, and Constitution ability checks and Strength, Dexterity, and Constitution saving throws. Magic such as the regenerate spell cures this damage. |
| 3 | **Gangrene of the Hand.** You can no longer hold anything with two hands, and you can hold only a single object at a time. Magic such as the regenerate spell can restore the damaged appendage. |
| 4 | **Gangrene of the Foot.** Your speed on foot is halved, and you must use a cane or crutch to move. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. Magic such as the regenerate spell can restore the damaged appendage. |
| 5-7 | **Major Neuralgia.** You have constant, painful nerve damage over a large portion of your body. Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, cures the neuralgia, or if you spend twenty days doing nothing but resting it resolves on its own. |
| 8-10 | **Frostbitten Foot**. Your speed on foot is reduced by 5 feet. You must make a DC 10 Dexterity saving throw after using the Dash action. If you fail the save, you fall prone. Magical healing cures the frostbite. Alternatively, your foot can be treated with a successful DC 15 Wisdom (Medicine) check, in which case it will heal naturally in 2 weeks. |
| 11-13 | **Frostbitten hand.** Randomly determine which hand has been frostbitten. In order to grasp or manipulate an object with that hand, you must succeed at a DC 15 Dexterity check. Magical healing cures the frostbite. Alternatively, your hand can be treated with a successful DC 15 Wisdom (Medicine) check, in which case it will heal naturally in 2 weeks. |
| 14-16 | **Minor Neuralgia.** This has the same effect as Major Neuralgia above, except that the save DC is 10 and it only takes ten days to resolve on its own. |
| 17+ | **Anosmia.** You lose your sense of smell and taste. You automatically fail any ability checks that involve your sense of smell or taste. The condition heals if you receive any magical healing. |

<div style="margin-top:-10px;"></div>

##### Fire Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Lose an Eye.** You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can restore the lost eye. If you have no eyes left after sustaining this injury, you're blinded. |
| 2 | **Fourth Degree Burns.** You have disadvantage on ability checks and Strength, Dexterity, and Constitution saving throws. If you fail a saving throw against an effect that causes fire damage, you also gain the stunned condition until the end of your next turn. Magic such as the regenerate spell cures this damage. If you already have fourth degree burns, you must succeed at a DC 15 Constitution saving throw or die. |
| 3 | **Third Degree Burns.** You have disadvantage on ability checks and Constitution saving throws. If you fail a saving throw against an effect that causes fire damage, you also gain the stunned condition until the end of your next turn. Magic such as the regenerate spell cures this damage. Alternatively, someone can tend to the burns and make a DC 15 Wisdom (Medicine) check once every week. After ten successes, the burns heal. If you already have third degree burns, you instead suffer fourth degree burns. |
| 4 | **Second Degree Burns.** You have disadvantage on Strength, Dexterity, and Constitution checks. Magic such as the regenerate spell cures this damage. Alternatively, they will heal on their own in 4 weeks. If you already have second degree burns, you instead suffer third degree burns. |
| 5-7 | **Major Neuralgia**. You have constant, painful nerve damage over a large portion of your body. Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, cures the neuralgia, or if you spend twenty days doing nothing but resting, it resolves on its own. |
| 8-10 | **Minor Neuralgia.** This has the same effect as Major Neuralgia above, except that the save DC is 10, and it will resolve on its own in ten days. |
| 11-13 | **Horrible Disfigurement.** You have burn scars to the extent that they can't be easily concealed. You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks. Magical healing of 6th level or higher, such as heal or regenerate, removes the burn scars. |
| 14-16 | **Blisters.** You have severe blisters. You have disadvantage on Dexterity checks. The blisters heal if you receive magical healing. Alternatively, someone can tend to the blisters and make a DC 15 Wisdom (Medicine) check once every 24 hours. After seven successes, the blisters heal. |
| 17+ | **First Degree Burns.** You have superficial but painful burns. Whenever you take fire damage, you take an additional 1 point of damage. Magical healing cures the burns; alternatively, they will heal on their own in 2 weeks. If you already have first degree burns, you instead suffer second degree burns. |
</div>

\pagebreakNum

<div class='wide'>

##### Force Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Brain Injury.** You have suffered a brain injury. Your mind exists in two planes of reality, one real and one borne of raw magic. You constantly shift between the two, seeing or hearing things that may not exist. You have disadvantage on Intelligence, Wisdom, and Charisma checks, as well as Intelligence, Wisdom, and Charisma saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can restore your full brain functions. |
| 2 | **Neuroregressive ataxia.** Your limbs lose their sensation to temperature, pain, vibration and touch. Your muscles feel weakened and you have difficulty holding items. You suffer disadvantage to all Strength and Dexterity ability checks and saving throws. You also experience occasional loss of control over your limbs and make sudden and short subconscious actions (such as attempting to unsheathe your weapon or write words on a nearby piece of paper, etc). Magic such as the regenerate spell can restore your coordination. |
| 3 | **Neurodegenerative disorder.** Your hands are jittery and coordination is impeded by frequent muscle jolts that make you grab or squeeze hard on whatever you are holding. You suffer disadvantage to all Dexterity checks to manipulate items and you must make Dexterity saving throws against breaking fragile items you are holding. Magic such as the regenerate spell can restore your coordination. |
| 4 | **Sleep Disruption.** You suffer from severe parasomnia and you are unable to force yourself to sleep unless you have at least one level of Exhaustion. When you sleep you suffer from terrifying nightmares and sleep paralysis. You have disadvantage on Wisdom checks and Wisdom saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can cure your condition. |
| 5-7 | **Internal Injury.** You suffer occasional phantom sensations of something touching an internal organ or moving inside you causing you discomfort. Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, cures the internal injury, or if you spend ten days doing nothing but resting, it heals on its own. |
| 8-10 | **Major Concussion.** You have disadvantage on Intelligence checks, Wisdom checks, and Charisma checks, as well as Constitution saving throws to maintain concentration. You suffer regular vertigo, lose smell and taste sensitivity and suffer from colour blindness. Magical healing of 6th level or higher, such as heal or regenerate, cures the concussion. Alternatively, it heals on its own in four weeks. |
| 11-13 | **Minor Concussion.** You have disadvantage on Intelligence checks. You suffer occasional vertigo and lose smell and taste sensitivity. The concussion heals if you receive any magical healing; alternatively it heals on its own in two weeks. If you already have a minor concussion, you suffer a major concussion. |
| 14-16 | **Severe Bruising.** You suffer severe bruising over an extensive portion of your anatomy and lose tactile sensitivity over the area. Anytime you suffer bludgeoning or force damage, you suffer an additional point of bludgeoning or force damage. The bruising heals if you receive magical healing. Alternatively, it heals on its own in 2 weeks. |
| 17+ | **Phantom Pain.** Part of your body feels numb as if blood flow has stopped and feels phantom pain but doesn't have any adverse effect. Any magical healing relieves your pain, although sensation may linger until the end of your next long rest. |

</div>

<img src='https://www.gmbinder.com/images/L06nnDz.png' style='position:absolute; bottom:-790px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-190px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />


\pagebreakNum

<div class='wide'>

##### Lightning Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Brain Injury.** You have suffered a brain injury. You have disadvantage on Intelligence, Wisdom, and Charisma checks, as well as Intelligence, Wisdom, and Charisma saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can restore your full brain function. |
| 2 | **Explosive Grounding of the Hand.** You lose a hand. You can no longer hold anything with two hands, and you can hold only a single object at a time. Magic such as the regenerate spell can restore the lost appendage. |
| 3 | **Explosive Grounding of the Foot.** You lose a foot. Your speed on foot is halved, and you must use a cane or crutch to move unless you have a peg leg or other prosthesis. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. Magic such as the regenerate spell can restore the lost appendage. |
| 4 | **Kidney Failure.** When you complete a long rest, you must succeed at a Constitution saving throw of DC 15 or gain the poisoned condition until you complete a long rest. Magic such as the regenerate spell can cure your kidney failure. Alternatively, someone can tend to the kidney failure and make a DC 15 Wisdom (Medicine) check once every week. After ten successes, the kidney failure is resolved. |
| 5-7 | **Arc Flash.** Roll on the fire table. |
| 8-10 | **Cardiac Injury.** You gain a level of exhaustion which cannot be removed by normal means. If you fail a saving throw against fear or fear effects, you gain another level of exhaustion that can be removed by normal means. Magic such as the regenerate spell can heal your cardiac damage. |
| 11-13 | **Skeletal Muscle Breakdown.** You have disadvantage on Strength checks and Strength saving throws. Magic such as the regenerate spell can cure your muscle breakdown. Alternatively, it will resolve on its own in 6 weeks. |
| 14-16 | **Muscle Spasms.** You have disadvantage on Dexterity checks. Magical healing cures your muscle spasms. Alternatively, they will resolve on their own in 2 weeks. |
| 17+ | **Flash Burns.** You have superficial burns. You turn as red as a lobster, but otherwise suffer no mechanical effects. Magical healing cures your flash burns. Alternatively, they will heal on their own in 2 weeks. |

<div style="margin-top:-10px;"></div>

##### Necrotic Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Spiritual Injury.** You are afflicted with intense apathy and depression. You have disadvantage on Intelligence, Wisdom, and Charisma ability checks and Intelligence, Wisdom, and Charisma saving throws. Magic such as the heal or regenerate spell can resolve your spiritual injury, but such spells must be cast by a cleric, druid, or other class that uses divine magic. |
| 2 | **Withered Hand.** You lose a hand. You can no longer hold anything with two hands, and you can hold only a single object at a time. Magic such as the regenerate spell can restore the lost appendage. |
| 3 | **Withered Foot.** Your speed on foot is halved, and you must use a cane or crutch to move. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. Magic such as the regenerate spell can restore the lost appendage. |
| 4 | **Major Organ Necrosis.** Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, cures the Major Organ Necrosis. |
| 5-7 | **Minor Organ Necrosis.** This has the same effect as Major Organ Necrosis above, except that the save DC is 10. |
| 8-10 | **Necrotic Stench.** You smell like rotting flesh. You have disadvantage on Charisma (Persuasion) checks. Magical healing of 6th level or higher, such as heal or regenerate, removes the smell. |
| 11-13 | **Necrotising Wound.** Your hit point maximum is reduced by 1 every 24 hours the wound persists. If your hit point maximum drops to 0, you die. The wound heals if you receive magical healing. Alternatively, someone can tend to the wound and make a DC 15 Wisdom (Medicine) check once every 24 hours. After ten successes, the wound heals. |
| 14-16 | **Inflammation.** Your muscles are irritated and inflamed. You have disadvantage on strength checks. Magical healing resolves the inflammation. Alternatively, it will resolve on its own in two weeks. |
| 17+ | **Necrotic Discoloration.** You get white and grey spots on your cheeks. The spots don't have any adverse effect. Magical healing of 6th level or higher, such as heal or regenerate, removes the spots. |
</div>

\pagebreakNum

<div class='wide'>

##### Piercing/Bleeding Injury

Use the Piercing Injury table when a character gains an Injury Token due to bleeding out to 0 hp (see Wounds, pg. [8](#p8)). In such cases, when you roll 1-3 on the table below, use 4 instead. 

<div style="margin-top:-10px;"></div>

| Roll | Injury | 
|:-:|:-|
| 1 | **Lose an Eye.** You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can restore the lost eye. If you have no eyes left after sustaining this injury, you're blinded. |
| 2 | **Throat Injury.** You gain a level of exhaustion which cannot be removed by normal means. You also have disadvantage on constitution checks. Magic such as the regenerate spell can heal your throat injury. |
| 3 | **Groin Injury.** Your speed on foot is halved, and you must use a cane or crutch to move. You cannot take the Dash action. You are also sterile. Magic such as the regenerate spell can heal the groin injury. |
| 4 | **Cardiac Injury.** You gain a level of exhaustion which cannot be removed by normal means. If you fail a saving throw against fear or fear effects, you gain another level of exhaustion that can be removed by normal means. Magic such as the regenerate spell can heal your cardiac damage. |
| 5-7 | **Organ Damage.** Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Magic such as the regenerate spell can cure your organ damage. Alternatively, someone can tend to the organ damage and make a DC 15 Wisdom (Medicine) check once every day. After ten successes, the organ damage is resolved. |
| 8-10 | **Pierced Stomach.** When you complete a long rest, you must succeed at a Constitution saving throw DC 10 or gain the poisoned condition until you complete a long rest. Magical healing of 6th level or higher, such as heal or regenerate, heals the pierced stomach, or if you spend ten days doing nothing but resting, it heals on its own. |
| 11-13 | **Horrible Scar.** You are disfigured to the extent that the wound can't be easily concealed . You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks. Magical healing of 6th level or higher, such as heal and regenerate, removes the scar. |
| 14-16 | **Festering Wound.** Your hit point maximum is reduced by 1 every 24 hours the wound persists. If your hit point maximum drops to 0, you die. The wound heals if you receive any magical healing. Alternatively, someone can tend to the wound and make a DC 15 Wisdom (Medicine) check once every 24 hours. After ten successes, the wound heals. |
| 17+ | **Minor Scar.** The scar doesn't have any adverse effect. Magical healing of 6th level or higher, such as heal and regenerate, removes the scar. |

<div style="margin-top:-10px;"></div>

##### Poison Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Systemic Damage.** You have disadvantage on Strength, Dexterity, and Constitution ability checks and Strength, Dexterity, and Constitution saving throws. Magic such as the regenerate spell cures this damage. |
| 2 | **Major Liver Damage.** When you complete a long rest, you must succeed at a Constitution saving throw of DC 15 or gain the poisoned condition until you complete a long rest. Additionally, whenever you take poison damage, you take an additional 3 (1d6) poison damage. Anytime you drink alcohol or take another drug, you take 3 (1d6) poison damage. Magic such as the regenerate spell can cure your liver failure. |
| 3 | **Minor Liver Damage.** When you complete a long rest, you must succeed at a Constitution saving throw of DC 10 or gain the poisoned condition until you complete a long rest. Additionally, whenever you take poison damage, you take an additional 2 (1d4) poison damage. Anytime you drink alcohol or take another drug, you take 2 (1d4) poison damage. Magic such as the regenerate spell can cure your liver failure. |
| 4 | **Major Kidney Failure.** When you complete a long rest, you must succeed at a Constitution saving throw of DC 15 or gain the poisoned condition until you complete a long rest. Magic such as the regenerate spell can cure your kidney failure. Alternatively, someone can tend to the kidney failure and make a DC 15 Wisdom (Medicine) check once every week. After ten successes, the kidney failure is resolved. |
| 5-7 | **Minor Kidney Failure.** This has the same effect as Major Kidney Failure above, except that the save DC is 10 and only six Wisdom (Medicine) check successes are needed to resolve the Kidney Failure. |
| 8-10 | **Cardiac Injury.** You gain a level of exhaustion which cannot be removed by normal means. If you fail a saving throw against fear or fear effects, you gain another level of exhaustion that can be removed by normal means. Magic such as the regenerate spell can heal your cardiac damage. |
| 11-13 | **Vertigo.** You have disadvantage on Dexterity checks. Magic such as the regenerate spell can cure your vertigo. Alternatively, it will resolve on its own in 8 weeks. |
| 14-16 | **Nausea.** You have disadvantage on Constitution checks. Magical healing cures your nausea. Alternatively, it will resolve on its own in 4 weeks. |
| 17+ | **Minor nausea.** You must succeed at a DC 10 Constitution saving throw before you can consume food. Magical healing cures your nausea. Alternatively, it will resolve on its own in 1 week. |
</div>

\pagebreakNum

<div class='wide'>

##### Psychic Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Brain Injury.** You have suffered a brain injury. You have disadvantage on Intelligence, Wisdom, and Charisma checks, as well as Intelligence, Wisdom, and Charisma saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can restore your full brain function. |
| 2 | **Indefinite Madness.** Roll on the Indefinite Madness table in the Dungeon Masters Guide. |
| 3 | **Severe headaches.** You have disadvantage on Wisdom checks and Wisdom saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can cure your severe headaches. |
| 4 | **Phobia.** You develop a debilitating fear of something in the situation from which you gained your injury. For example, if you were damaged by a mind flayer, you might have a fear of octopuses. The DM will decide. When you are confronted with your phobia, you have disadvantage on all ability checks and saving throws. Magic such as the regenerate spell can cure your phobia. |
| 5-7 | **Long-term Madness.** Roll on the Long-term Madness table in the Dungeon Masters Guide. Your madness lasts twice as long. |
| 8-10 | **Short-term Madness.** Roll on the Short-term Madness table in the Dungeon Masters Guide. Your madness lasts twice as long. |
| 11-13 | **Weak Persona.** You have suffered damage to your sense of self. You have disadvantage on Charisma checks. Magic such as the regenerate spell can heal your weak persona. Alternatively, it will heal on its own in four weeks. |
| 14-16 | **Minor headaches.** You have disadvantage on Wisdom checks. Magical healing cures your minor headaches. Alternatively, they will resolve on their own in two weeks. |
| 17+ | **Inappropriate Volume.** You can’t regulate your volume. You shout when you intend to whisper, and whisper when you intend to shout. Magical healing cures your inappropriate volume. |

<div style="margin-top:-10px;"></div>

##### Radiant Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Blindness.** Your eyes are destroyed; you gain the blinded condition. Magic such as the regenerate spell can restore your sight. |
| 2 | **Partial Blindness.** Your retinas are damaged; you have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can restore the lost eye. If you have already suffered partial blindness, you're blinded. |
| 3 | **Third Degree Burns.** You have disadvantage on ability checks and Constitution saving throws. If you fail a saving throw against an effect that causes fire damage, you also gain the stunned condition until the end of your next turn. Magic such as the regenerate spell cures this damage. Alternatively, someone can tend to the burns and make a DC 15 Wisdom (Medicine) check once every week. After ten successes, the burns heal. If you already have third degree burns, you instead suffer fourth degree burns as per the Fire chart. |
| 4 | **Second Degree Burns.** You have disadvantage on Strength, Dexterity, and Constitution checks. Magic such as the regenerate spell cures this damage. Alternatively, they will heal on their own in 4 weeks. If you already have second degree burns, you instead suffer third degree burns. |
| 5-7 | **Large Skin Tumours.** You develop several large, painful skin tumors. You have disadvantage on Charisma and Wisdom checks. Magic such as the regenerate spell cures your large skin tumors. If your large skin tumors are not cured within six months, you develop Systemic Damage as per the poison table. |
| 8-10 | **Small Skin Tumors.** You develop several small, painless skin tumors. You have disadvantage on Charisma checks. Magic such as the regenerate spell cures your small skin tumors. If your small skin tumors are not cured within one year, you develop Large Skin Tumors. |
| 11-13 | **Blisters.** You have severe blisters. You have disadvantage on Dexterity checks. The blisters heal if you receive magical healing. Alternatively, someone can tend to the blisters and make a DC 15 Wisdom (Medicine) check once every 24 hours. After seven successes, the blisters heal. |
| 14-16 | **First Degree Burns**. You have superficial but painful burns. Whenever you take fire damage, you take an additional 1 point of damage. Magical healing cures the burns; alternatively, they will heal on their own in 2 weeks. If you already have first degree burns, you instead suffer second degree burns. |
| 17+ | **Minor nausea.** You must succeed at a DC 10 Constitution saving throw before you can consume food. Magical healing cures your nausea. Alternatively, it will resolve on its own in 1 week. |
</div>

\pagebreakNum

<div class='wide'>

##### Slashing Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Lose an Eye.** You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can restore the lost eye. If you have no eyes left after sustaining this injury, you're blinded. |
| 2 | **Lose an Arm or a Hand.** You can no longer hold anything with two hands, and you can hold only a single object at a time. Magic such as the regenerate spell can restore the lost appendage. |
| 3 | **Lose a Foot or Leg.** Your speed on foot is halved, and you must use a cane or crutch to move unless you have a peg leg or other prosthesis. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. Magic such as the regenerate spell can restore the lost appendage. |
| 4 | **Hamstrung.** Your speed on foot is reduced by 5 feet. You must make a DC 10 Dexterity saving throw after using the Dash action. If you fail the save, you fall prone. Magic such as the regenerate spell can cure your severed hamstring tendons. |
| 5-7 | **Major Internal Injury.** Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, heals the internal injury; alternatively, if you spend ten days doing nothing but resting, it heals on its own. |
| 8-10 | **Minor Internal Injury.** This has the same effect as Major Internal Injury above, except that the save DC is 10. |
| 11-13 | **Horrible Scar.** You are disfigured to the extent that the wound can't be easily concealed. You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks. Magical healing of 6th level or higher, such as heal or regenerate, removes the scar. |
| 14-16 | **Festering Wound.** Your hit point maximum is reduced by 1 every 24 hours the wound persists. If your hit point maximum drops to 0, you die. The wound heals if you receive magical healing. Alternatively, someone can tend to the wound and make a DC 15 Wisdom (Medicine) check once every 24 hours. After ten successes, the wound heals. |
| 17+ | **Minor Scar.** The scar doesn't have any adverse effect. Magical healing of 6th level or higher, such as heal or regenerate, removes the scar. |

<div style="margin-top:10px;"></div>

##### Siege Critical Injury
This table applies only to impaling, crushing and explosive damage (see Siege Weapons, pg. [46](#p46)) that dealt more than half your maximum Hit Points in damage and reduced you to 0 hp. Make a simple d20 roll. Roll with advantage if the damage is impaling. Roll with disadvantage if the damage is explosive.

If a siege weapon deals damage of more than half your maximum Hit Points, but doesn't reduce you to 0 hp, you instead take one or several (up to the DM, see Massive Damage on pg. [8](#p8)) Injury tokens of piercing (if the siege damage was impaling), bludgeoning (if the siege damage was crushing) or slashing or fire (up to the DM, if the siege damage was explosive). 

| Roll | Injury | 
|:-:|:-|
| 1-2 | **You are dead.**  Your remains are reduced to a bloody pulp that is unrecognisable without a DC 15 Wisdom (Insight) check or magical means. If this injury was caused by Explosive damage or by Burning ammunition, your remains are burned and unusable for the purpose of the Resurrection spell and you can only be returned to life with the True Resurrection or Wish spells. |
| 3-5 | **You are dead.**  Your remains are reduced to a mix of body parts and crushed entrails that are unrecognisable without a DC 12 Wisdom (Insight) check by an ally. Parts of your body can be used for a Resurrection spell. If this injury was caused by explosive damage, a successful DC 12 Intelligence (Investigation) check is needed to find the part usable for the Resurrection spell. |
| 6-8 | **You are dead.**  Your remains are torn into several parts, most of your organs spilled out. Parts of your body can be used for a Resurrection spell. Unless this injury was caused by explosive damage, most of your head is intact which allows the use of the Speak with Dead spell. |
| 9-13 | **You are dead.**  You can be raised back to life with the Revivify or Raise Dead spell, but you take 3 injury tokens that must be resolved immediately upon returning to life (see Injuries, pg. [9](#p9)).  |
| 14-16 | **You are dying.** You automatically fail 2 of your Death Saves. You take 2 Injury tokens that must be resolved upon stabilisation. |
| 17+ | **You are dying.** You automatically fail 1 of your Death Saves. You take 1 Injury token that must be resolved upon stabilisation. |
</div>

\pagebreakNum

<div class='wide'>

<div style="margin-top:-20px;"></div>

##### Thunder Injury
| Roll | Injury | 
|:-:|:-|
| 1 | **Brain Injury.** You have suffered a brain injury. You have disadvantage on Intelligence, Wisdom, and Charisma checks, as well as Intelligence, Wisdom, and Charisma saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can restore your full brain functions. |
| 2 | **Deafness.** Your eardrums have been destroyed; you gain the deafened condition. Magic such as the regenerate spell can restore your hearing. |
| 3 | **Partial Deafness.** Your eardrums have been damaged; you are hard of hearing. You have disadvantage on any ability check that requires hearing. Magic such as the regenerate spell can restore your hearing. |
| 4 | **Severe Headaches.** You have disadvantage on Wisdom checks and Wisdom saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can cure your severe headaches. |
| 5-7 | **Internal Injury.** Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can't use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, cures the internal injury, or if you spend ten days doing nothing but resting, it heals on its own. |
| 8-10 | **Major Concussion.** You have disadvantage on Intelligence checks, Wisdom checks, and Charisma checks, as well as Constitution saving throws to maintain concentration. Magical healing of 6th level or higher, such as heal or regenerate, cures the concussion. Alternatively, it heals on its own in four weeks. |
| 11-13 | **Minor Concussion.** You have disadvantage on Intelligence checks. The concussion heals if you receive any magical healing; alternatively, it heals on its own in two weeks. If you already have a minor concussion, you suffer a major concussion. |
| 14-16 | **Minor headaches.** You have disadvantage on Wisdom checks. Magical healing of 6th level or higher, such as heal or regenerate, cures the headaches. Alternatively, they will resolve on their own in two weeks. |
| 17+ | **Severe bruising.** You suffer severe bruising over an extensive portion of your anatomy. Anytime you suffer bludgeoning or force damage, you suffer an additional point of bludgeoning or force damage. The bruising heals if you receive magical healing. Alternatively, it heals on its own in 2 weeks. |
</div>

<img src='https://www.gmbinder.com/images/5HSkQE6.png' style='position:absolute; bottom:-10px; right:-20px; width:850px' />
  
<img src='https://www.gmbinder.com/images/XEVwU5k.png' style='position:absolute; top:-390px; right:-100px; width:950px; filter: opacity(100%) grayscale(100%) brightness(97%)' />

\pagebreakNum

<div class='partpage-dmg'>

# Part V

##### Character Sheet

<img src='https://www.gmbinder.com/images/AcfJBfe.jpg' class='cover-image' style="top:-50px" />

</div>

\pagebreakNum

# Filling Your Sheet

___
*Grit and Glory* introduces several new statistics that need to be tracked on your *Dungeons and Dragons* character sheet. This section will walk you through the major changes made to the standard sheet. 

### Attributes

Fill in the diamond tick box for Saving Throws you are proficient in. For Skills, fill in one round tick box for proficiency or two for expertise (double proficiency).

<img src='https://www.gmbinder.com/images/Qk5dj7G.png' class='' style='float:absolute;width:310px;left:-10px;'>

<br><div style="margin-top:-30px;"></div>

___
Record your Wound Threshold (see pg. [8](#p8)) and the maximum Wounds you can sustain before dropping unconscious. Draw a heart outline around number of heart icons equal to your maximum Wounds. Anytime you suffer an Open Wound scratch one of your empty outlines. 

Endurance is a new Constitution-based skill (see Subskills, pg. [51](#p51)) that is optional for realistic campaigns. It allows to represent endurance separately from health. Fill its round tick boxes if you are proficient in it.

<img src='https://www.gmbinder.com/images/vINJxAm.png' class='' style='float:absolute;width:310px;'>

<br><div style="margin-top:-30px;"></div>

### Subskills

If your game uses Subskills (pg. [50](#p50)), track each subskill and the improved modifier of its related skill. 

Fill one, two or three round tick boxes if you are Trained, Expert or Master in each subskill. You can also track the number of training points towards the next level of subskill mastery. 

<img src='https://www.gmbinder.com/images/yXaxJNK.png' class='' style='float:absolute;width:320px;'>

<img src='https://www.gmbinder.com/images/Q2UjLRr.jpg' class='' style='position:absolute;height:850px;top:120px;left:485px; border-style: solid; border-width: 2px; border-color:#C0C0C0;-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);'> 

\pagebreakNum

<img src='https://www.gmbinder.com/images/Q2UjLRr.jpg' class='' style='position:absolute;height:850px;top:120px;left:-331px; border-style: solid; border-width: 2px; border-color:#C0C0C0;-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);'> 

___
\columnbreak

<div style="margin-top:30px;"></div>

### Armor

If you use Realistic Armor (pg. [28](#p28)), you need to track Damage Reduction and Soak against each melee damage type. From left to right, record DR values for Bludgeoning, Piercing and Slashing damage. Fill the tick box below each DR field if your armor provides Soak (pg. [26](#p26)) against that damage type.

If you use Realistic Defense (pg. [70](#p70)), your total armor bonus should be filled as Damage Reduction next to the Armor Class.

<img src='https://www.gmbinder.com/images/nLC7hs2.png' class='' style='float:absolute;width:320px;'>

<br><div style="margin-top:-20px;"></div>

### Combat Conditions

If you use Combat Conditions (pg. [12](#p12)), you should keep the Bloodied and Beaten hit points thresholds precalculated and easy to reference.

<img src='https://www.gmbinder.com/images/RbgUNhJ.png' class='' style='float:absolute;width:280px;margin-left:20px;'>

<br><div style="margin-top:-20px;"></div>

### Resource (Class Dice)

If your class or chosen subclass has a resource (such as Ki) or specialty dice (such as Superiority dice) you can record them on your sheet in the Resource field.

<img src='https://www.gmbinder.com/images/l8UziUU.png' class='' style='float:absolute;width:80px;margin-left:120px;'>

<br><div style="margin-top:-20px;"></div>

### Inspiration Points

If you use Group Inspiration Points (pg. [6](#p6)), only one of the players on the table needs to manage them. However to avoid confusion when he is missing from the game, each player can record the available Inspiration.

<img src='https://www.gmbinder.com/images/NTVk8zJ.png' class='' style='float:absolute;width:180px;margin-left:70px;'>

\pagebreakNum

<img src='https://www.gmbinder.com/images/Q2UjLRr.jpg' class='cover-image' />

\pagebreak

<img src='https://www.gmbinder.com/images/mDfoiKv.jpg' class='cover-image' />

\pagebreak

<img src='https://www.gmbinder.com/images/xmJaIiS.jpg' class='cover-image' />

\pagebreak

<img src='https://www.gmbinder.com/images/aKVwF2a.jpg' class='cover-image' />

 <style>
   /** Change the p2 to whatever page number is the last page in your document **/
   .phb#p2:after { display:none; }
 </style>
 
 <div class='back-cover-image'></div>
 
 <div style='margin-top:20px;'></div>
 
 <div class='back-cover-header'>
 
 Grit
 
 Is Adventure
 
 Of Its Own
 
 </div>
 
 <div class='back-cover-text'>
 
 Realistic, historic and low fantasy settings are among the most difficult to fit into the *D&D* ruleset. When heroes grow in power and become legends, they are no longer bound to the laws of reality. They no longer fear injury or death.
 
 This supplement adds many practical rules that improve the realism of the game. For every rule that makes combat and survival dangerous and lethal, there are player options with an emphasis on decisions between high risk and great reward. 
 
 So go ahead, put on your armour, take your sword out and see how long you can survive without full hp recovery at a long rest!

 
  </div>
 
 <div class='back-cover-diamond' style='top: 679px;'></div>
 
 <div style='margin-top:45px;'></div>
 
 <div class='back-cover-close'>
 
This compendium is maintained by Apostol Apostolov and Kyle Taylor. Feedback and suggestions are greatly appreciated. 

</div>

<div class='back-cover-logo'></div>
 
<div class='back-cover-logo-link'>
 
 [WWW.GMBINDER.COM](https://www.gmbinder.com)
 
</div>

\columnbreak

