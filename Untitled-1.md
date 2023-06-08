

<style>
  .phb#p1{ text-align:center; }
  .phb#p1:after{ display:none; }
</style>
<style>
    #p1.page h1{
        color: ;
	  		font-family: 'cormorant scc';
  			font-size: 70px;
				color: White;
    }
</style>
<style>
    #p1.phb h5{
        color: white;
    }
</style>

<img src='https://i.imgur.com/BjjBtUZ.png' style='position:absolute; top:450px; left: -100px; width: 1000px' />

<div style='margin-top:450px;'># Homebrewery </div>

<div style='margin-top:50px'  class='wide'>##### Руководство для начинающих пользователей.
</div>

```
Сделано Киборгами и Чародеями, 2023
```

\page
{{frontCover}}

{{logo ![](/assets/naturalCritLogoRed.svg)}}

# Руководство по Homebrewery
## Для начинающих
___

{{banner Киборги и Чародеи}}

{{footnote
  И тут мы прекрасно видим, как плохо что не поддерживаются кириллические шрифты
}}

![background image](https://i.imgur.com/IwHRrbF.jpg){position:absolute,bottom:0,left:0,height:100%}

\page
{{insideCover}}

# Руководство по Homebrewery
## Для начинающих
___

{{imageMaskCenter9,--offsetX:0%,--offsetY:0%,--rotation:0
  ![background image](https://i.imgur.com/IsfUnFR.jpg){position:absolute,bottom:0,left:0,height:100%}
}}

{{logo ![](/assets/naturalCritLogoRed.svg)}}


\page

{{toc,wide
# Содержание


- ### [{{ Содержание}}{{ 4}}](#p4)
  - #### [{{ Что такое Homebrewery?}}{{ 5}}](#p5)
    - [{{ Зачем оно нужно – я прекрасно верстаю в Word’е. }}{{ 5}}](#p5)
  - #### [{{ Приступая к работе}}{{ 5}}](#p5)
    - [{{ Google аккаунт}}{{ 5}}](#p5)
    - [{{ Знание Markdown}}{{ 5}}](#p5)
    - [{{ CSS и HTML?}}{{ 5}}](#p5)
  - #### [{{ Существующие проблемы}}{{ 5}}](#p5)
    - [{{ Способы решения}}{{ 5}}](#p5)
  - #### [{{ Версии синтаксиса}}{{ 5}}](#p5)
    - [{{ Legacy}}{{ 5}}](#p5)
    - [{{ V3}}{{ 5}}](#p5)
  - #### [{{ Руководства по Homebrewery}}{{ 5}}](#p5)
    - [{{ Общий обзор}}{{ 5}}](#p5)
    - [{{ Использование синтаксиса}}{{ 5}}](#p5)
  - #### [{{ На что обратить внимание?}}{{ 5}}](#p5)
    - [{{ Размер страницы}}{{ 5}}](#p5)
    - [{{ Быстрое преобразование в черно белою версию для распечатки}}{{ 5}}](#p5)
  - #### [{{ Аналоги и альтернативы Homebrewery}}{{ 6}}](#p6)
  - #### [{{ Трюки с использованием разметки}}{{ 6}}](#p6)
  - #### [{{ Включенные в файл шрифты}}{{ 7}}](#p7)
  - #### [{{ Included Fonts}}{{ 7}}](#p7)
  - #### [{{ Шрифты, которые неплохо смотрятся}}{{ 7}}](#p7)
  - #### [{{ Шрифты, подключенные с онлайн источника}}{{ 7}}](#p7)
  - #### [{{ Полезные ссылки}}{{ 8}}](#p8)

}}



{{pageNumber,auto}}
{{footnote СОДЕРЖАНИЕ }}


\page





# Что такое Homebrewery?

Homebrewery – это веб-приложение, которое использует синтаксис языка, уже во многом ставший стандартом, - Markdown, впрочем, с небольшими своими дополнениями.

### Зачем оно нужно – я прекрасно верстаю в Word’е. 

Homebrewery – позволяет оформлять в стиле официальных материалов WoTC тем людям, которые о верстке или дизайне имеют лишь самое поверхностное представление.
Плюс, он полностью бесплатен.

## Приступая к работе

### Google аккаунт

При работе с Homebrewery вам весьма пригодится Google-account, ведь все сделанное вами будет храниться именно в Google Drive.

### Знание Markdown

Второе, что вам понадобится – это знание или хотя бы понимание Markdown разметки.


{{descriptive
##### Markdown
Markdown - это язык разметки, который весьма распространен и используется во многих продуктах, поэтому его знанение всегда пригодится.

Отдельно расписывать его 

Детальнее про него можно прочесть здесь.
}}

### CSS и HTML?

Если вы знаете CSS и HTML - то вы сможете делать гораздо больше в Homebrewery нежели обычный пользователь.

С другой стороны - если вы не знаете этих языков разметки, то ничего страшного не случится.




\page



# Существующие проблемы

Основная проблема, которая существует у пользователей, которые используют кириллические шрифты - та, что не все встроенные по умолчанию шрифты в Homebrewery поддерживают кириллицу.

И, к сожалению, наиболее похожие на официальные шрифты от WoTC - не поддерживают.


### Способы решения

Но в целом это также решаемо.

Во-первых, с помощью простого CSS кода мы можем подключить Google web шрифты.

Во-вторых, существует расширение Fontbrewery

В-третьих, мы можем подключить собственные шрифты, если разместить их онлайн

## Версии синтаксиса

### Legacy

### V3

## Руководства по Homebrewery

### Общий обзор

### Использование синтаксиса

[Legacy Homebrewery formatting guide](https://homebrewery.naturalcrit.com/share/1C7IMODarmQaHE8kL0qrt8ZvpxpC2hBuvZkW6dOmiyrI3)


\page

# На что обратить внимание?

## Размер страницы

По умолчанию, используется стандарт применяемый в Америке - Letter, а его размер отличается от принятого у нас A4.

С другой стороны, это легко поправить небольшим фрагментом CSS кода

## Быстрое преобразование в черно белою версию для распечатки

С другой стороны, это легко поправить небольшим фрагментом CSS кода


## Таблицы


\page


## Аналоги и альтернативы Homebrewery

### GMBinder

Основным конкурт

### Microsoft Word

### Google Docs

### Affinity

### Indesign


\column


## Трюки с использованием разметки

### Размер страницы


### Печатные карточки



{{pageNumber,auto}}
{{footnote 1 | Основы }}
\page

# Шрифты

## Включенные в файл шрифты

- {{os Open Sans Проверка шрифта}}
- {{cb CodeBold Проверка шрифта}}
- {{cl CodeLight Проверка шрифта}}
- {{ss ScalySansRemake Проверка шрифта}}
- {{bs BookSanityRemake Проверка шрифта}}
- {{mj MrEavesRemakeПроверка шрифта}}
- {{sb SolberaImitationRemake Проверка шрифта}}
- {{sssc ScalySansSmallCapsRemake Проверка шрифта}}
- {{wt WalterTurncoat Проверка шрифта}}
- {{la Lato Проверка шрифта}}
- {{cr Courier Проверка шрифта}}
- {{font-family:"Philosopher" Philosopher}}}
- {{font-family:"Cormorant" Cormorannt какой то текст}}}


## Included Fonts

- <span class='os'>Open Sans</span>
- <span class='cb'>CodeBold</span>
- <span class='cl'>CodeLight</span>
- <span class='sss'>ScalySans</span>
- <span class='bso'>BookSanity</span>
- <span class='mj'>MrJeeves</span>
- <span class='sby'>Solberry</span>
- <span class='sssco'>ScalySansSmallCaps</span>
- <span class='hv'>Helvetica</span>
- <span class='ar'>Arial</span>
- <span class='bz'>Barazhad</span>
<!-- - <span class='bz'>Barazhad</span> -->

## Шрифты, которые неплохо смотрятся

Allegreya

Cormorant

Philosopher

Lato

Lora

Merriwether

Cambria

## Шрифты, подключенные с онлайн источника

5e cyrillic




{{pageNumber,auto}}
{{footnote 2 | Поддерживаемые шрифты }}
\page

# Полезные ссылки

[Киборги и Чародеи]()

[Підземелля та Дракони в Україні]()

[Legacy Homebrewery Formatting Guide](https://homebrewery.naturalcrit.com/share/1C7IMODarmQaHE8kL0qrt8ZvpxpC2hBuvZkW6dOmiyrI3)

[V3 Homebrewery Formatting Guide](https://homebrewery.naturalcrit.com/share/1C7IMODarmQaHE8kL0qrt8ZvpxpC2hBuvZkW6dOmiyrI3)

https://homebrewery.naturalcrit.com/share/Vx4NZ9LVXpKz

https://homebrewery.naturalcrit.com/share/i1_uGvBjQXuI

https://github.com/G-Ambatte/GMBinder-Homebrewery-Converter


{{pageNumber,auto}}
{{footnote 3 | Полезные ссылки }}


\page

{{backCover}}

# Руководство по Homebrewery

Homebrewery - это очень мощный инструмент, который использует всю мощь современных  позволяет оформлять 
___

Для использования с любой ролевой системой

![background image](https://i.imgur.com/MJ4YHu7.jpg){position:absolute,bottom:0,left:0,height:100%}

{{logo
![](/assets/naturalCritLogoWhite.svg)

}}

\page

## Class Features

As a haberdasher, you gain the following class features

#### Hit Points
**Hit Dice:**                    :: 1d12 per haberdasher level
**Hit Points at 1st Level:**     :: 12 + your Constitution modifier
**Hit Points at Higher Levels:** :: 1d12 (or 7) + your Constitution modifier per haberdasher level after 1st

#### Proficiencies
**Armor:**   :: Heavy armor, Medium armor
**Weapons:** :: Simple weapons
**Tools:**   :: None

**Saving Throws:** :: Constitution, Charisma
**Skills:**        :: Choose two from Sleight of Hand, Investigation, Religion, Medicine, Nature

#### Spellcasting Ability
{{text-align:center
**Spell save DC**:: = 6 + your proficiency bonus + your Wisdom modifier

**Spell attack modifier**:: = your proficiency bonus + your Wisdom modifier
}}

#### Equipment
You start with the following equipment, in addition to the equipment granted by your background:
- *(a)* a martial weapon and a shield or *(b)* two martial weapons
- *(a)* five javelins or *(b)* any simple melee weapon
- 1 button\page



\page

![](https://api.qrserver.com/v1/create-qr-code/?data=https://homebrewery.naturalcrit.com/share/7j4Lg5OpdD5G&amp;size=100x100) {width:100px;mix-blend-mode:multiply}

!!

{{classTable,frame,decoration,wide
##### The Ackerman
| Level | Proficiency | Features     | Cantrips | Spells | --- Spell Slots Per Spell Level ---|||||||||
|      ^| Bonus      ^|             ^| Known   ^| Known ^|1st |2nd |3rd |4th |5th |6th |7th |8th |9th |
|:-----:|:-----------:|:-------------|:--------:|:------:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|  1st  | +2 | Nuclear Biochemistry  |    3     |   1    | 2  | —  | —  | —  | —  | —  | —  | —  | —  |
|  2nd  | +2 | Orbital Gravedigger   |    4     |   2    | 4  | —  | —  | —  | —  | —  | —  | —  | —  |
|  3rd  | +2 | Immunological Cultist |    5     |   2    | 4  | —  | —  | —  | —  | —  | —  | —  | —  |
|  4th  | +2 | Police Necromancer    |    6     |   3    | 4  | —  | —  | —  | —  | —  | —  | —  | —  |
|  5th  | +3 | Phased Linguist       |    7     |   3    | 4  | —  | —  | —  | —  | —  | —  | —  | —  |
|  6th  | +3 | Genetic Banishing     |    8     |   4    | 4  | —  | —  | —  | —  | —  | —  | —  | —  |
|  7th  | +3 | Genetic Banishing     |    9     |   5    | 4  | 2  | —  | —  | —  | —  | —  | —  | —  |
|  8th  | +3 | Ritual Astronomy      |    10    |   6    | 4  | 3  | —  | —  | —  | —  | —  | —  | —  |
|  9th  | +4 | Spiritual Illusionism |    10    |   6    | 4  | 3  | —  | —  | —  | —  | —  | —  | —  |
| 10th  | +4 | Immunological Cultist |    10    |   7    | 4  | 3  | 2  | —  | —  | —  | —  | —  | —  |
| 11th  | +4 | Orbital Gravedigger   |    10    |   7    | 4  | 3  | 3  | —  | —  | —  | —  | —  | —  |
| 12th  | +4 | Spell Analyst         |    11    |   8    | 4  | 3  | 3  | 1  | —  | —  | —  | —  | —  |
| 13th  | +5 | Malefic Chemist       |    11    |   9    | 4  | 3  | 3  | 1  | —  | —  | —  | —  | —  |
| 14th  | +5 | Hermetic Geography    |    11    |   9    | 4  | 3  | 3  | 3  | —  | —  | —  | —  | —  |
| 15th  | +5 | Gunslinger Corruptor  |    11    |   10   | 4  | 3  | 3  | 3  | —  | —  | —  | —  | —  |
| 16th  | +5 | Pharmaceutical Outlaw |    12    |   10   | 4  | 3  | 3  | 3  | —  | —  | —  | —  | —  |
| 17th  | +6 | Civil Divination      |    12    |   10   | 4  | 3  | 3  | 3  | 2  | —  | —  | —  | —  |
| 18th  | +6 | Genetic Banishing     |    12    |   10   | 4  | 3  | 3  | 3  | 3  | 1  | —  | —  | —  |
| 19th  | +6 | Malefic Chemist       |    12    |   11   | 4  | 3  | 3  | 3  | 3  | 2  | 1  | —  | —  |
| 20th  | +6 | Gunslinger Corruptor  |    13    |   11   | 4  | 3  | 3  | 3  | 3  | 2  | 1  | —  | —  |
}}


{{classTable,wide
##### The Manicurist
| Level | Proficiency | Features     | Cantrips | Spells | --- Spell Slots Per Spell Level ---|||||||||
|      ^| Bonus      ^|             ^| Known   ^| Known ^|1st |2nd |3rd |4th |5th |6th |7th |8th |9th |
|:-----:|:-----------:|:-------------|:--------:|:------:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|  1st  | +2 | Astrological Botany   |    3     |   1    | 2  | —  | —  | —  | —  | —  | —  | —  | —  |
|  2nd  | +2 | Malefic Chemist       |    4     |   2    | 4  | —  | —  | —  | —  | —  | —  | —  | —  |
|  3rd  | +2 | Ritual Astronomy      |    5     |   3    | 4  | 1  | —  | —  | —  | —  | —  | —  | —  |
|  4th  | +2 | Divinatory Mineralogy |    5     |   4    | 4  | 2  | —  | —  | —  | —  | —  | —  | —  |
|  5th  | +3 | Biochemical Sorcery   |    6     |   4    | 4  | 2  | —  | —  | —  | —  | —  | —  | —  |
|  6th  | +3 | Seismological Alchemy |    6     |   5    | 4  | 3  | —  | —  | —  | —  | —  | —  | —  |
|  7th  | +3 | Seismological Alchemy |    7     |   6    | 4  | 3  | 2  | —  | —  | —  | —  | —  | —  |
|  8th  | +3 | Hermetic Geography    |    8     |   6    | 4  | 3  | 3  | —  | —  | —  | —  | —  | —  |
|  9th  | +4 | Plasma Gunslinger     |    9     |   7    | 4  | 3  | 3  | 2  | —  | —  | —  | —  | —  |
| 10th  | +4 | Biochemical Sorcery   |    10    |   7    | 4  | 3  | 3  | 3  | 1  | —  | —  | —  | —  |
| 11th  | +4 | Exo Interfacer        |    10    |   8    | 4  | 3  | 3  | 3  | 2  | —  | —  | —  | —  |
| 12th  | +4 | Pharmaceutical Outlaw |    10    |   9    | 4  | 3  | 3  | 3  | 2  | —  | —  | —  | —  |
| 13th  | +5 | Nuclear Biochemistry  |    11    |   9    | 4  | 3  | 3  | 3  | 3  | 1  | —  | —  | —  |
| 14th  | +5 | Genetic Banishing     |    12    |   10   | 4  | 3  | 3  | 3  | 3  | 2  | 1  | —  | —  |
| 15th  | +5 | Consecrated Augury    |    13    |   10   | 4  | 3  | 3  | 3  | 3  | 2  | 2  | —  | —  |
| 16th  | +5 | Police Necromancer    |    14    |   11   | 4  | 3  | 3  | 3  | 3  | 2  | 2  | —  | —  |
| 17th  | +6 | Torque Interfacer     |    14    |   12   | 4  | 3  | 3  | 3  | 3  | 2  | 2  | 1  | —  |
| 18th  | +6 | Spiritual Illusionism |    15    |   12   | 4  | 3  | 3  | 3  | 3  | 2  | 2  | 1  | 1  |
| 19th  | +6 | Malefic Chemist       |    15    |   12   | 4  | 3  | 3  | 3  | 3  | 2  | 2  | 1  | 1  |
| 20th  | +6 | Malefic Chemist       |    15    |   12   | 4  | 3  | 3  | 3  | 3  | 2  | 2  | 1  | 1  |
}}



\page

{{wide
##### Weapons
| Name                    | Cost  | Damage          | Weight  | Properties |
|:------------------------|:-----:|:----------------|--------:|:-----------|
| *Simple Melee Weapons*  |       |                 |         |            |
| &emsp; Club             | 1 sp  | 1d4 bludgeoning | 2 lb.   | Light      |
| &emsp; Dagger           | 2 gp  | 1d4 piercing    | 1 lb.   | Finesse    |
| &emsp; Spear            | 1 gp  | 1d6 piercing    | 3 lb.   | Thrown     |
| *Simple Ranged Weapons* |       |                 |         |            |
| &emsp; Dart             | 5 cp  | 1d4 piercig     | 1/4 lb. | Finesse    |
| &emsp; Shortbow         | 25 gp | 1d6 piercing    | 2 lb.   | Ammunition |
| &emsp; Sling            | 1 sp  | 1d4 bludgeoning | &mdash; | Ammunition |
}}

{{classTable,decoration,frame
##### The Fishmonger
| Level | Proficiency Bonus | Features |     Spell Analyst     |
|:-----:|:-----------------:|:---------|:---------------------:|
|  1st  | +2 | Statistical Occultism   |          +1           |
|  2nd  | +2 | Spell Analyst           |          +1           |
|  3rd  | +2 | Divinatory Mineralogy   |          +2           |
|  4th  | +2 | Sixgun Poisoner         |          +2           |
|  5th  | +3 | Divinatory Mineralogy   |          +2           |
|  6th  | +3 | Spell Analyst           |          +2           |
|  7th  | +3 | Gunslinger Corruptor    |          +2           |
|  8th  | +3 | Plasma Gunslinger       |          +2           |
|  9th  | +4 | Hermetic Geography      |          +3           |
| 10th  | +4 | Phased Linguist         |          +4           |
| 11th  | +4 | Consecrated Augury      |          +5           |
| 12th  | +4 | Gunpowder Torturer      |          +5           |
| 13th  | +5 | Sixgun Poisoner         |          +6           |
| 14th  | +5 | Consecrated Augury      |          +7           |
| 15th  | +5 | Ritual Astronomy        |          +8           |
| 16th  | +5 | Torque Interfacer       |          +8           |
| 17th  | +6 | Exo Interfacer          |          +8           |
| 18th  | +6 | Divinatory Mineralogy   |          +8           |
| 19th  | +6 | Mathematical Pharmacy   |          +9           |
| 20th  | +6 | Pharmaceutical Outlaw   |          +9           |
}}


\column

{{classTable,frame
##### Netrunner Spellcasting
| Class  | Cantrips | Spells  |--- Spells Slots per Spell Level ---||||
| Level ^| Known   ^| Known  ^|   1st   |   2nd   |   3rd   |   4th   |
|:------:|:--------:|:-------:|:-------:|:-------:|:-------:|:-------:|
|  1st   |    3     |    1    |    2    |    —    |    —    |    —    |
|  2nd   |    4     |    2    |    3    |    —    |    —    |    —    |
|  3rd   |    5     |    2    |    4    |    —    |    —    |    —    |
|  4th   |    5     |    3    |    4    |    1    |    —    |    —    |
|  5th   |    6     |    4    |    4    |    1    |    —    |    —    |
|  6th   |    7     |    5    |    4    |    2    |    —    |    —    |
|  7th   |    7     |    6    |    4    |    3    |    —    |    —    |
|  8th   |    7     |    7    |    4    |    3    |    1    |    —    |
|  9th   |    7     |    7    |    4    |    3    |    1    |    —    |
|  10th  |    8     |    7    |    4    |    3    |    2    |    —    |
|  11th  |    9     |    7    |    4    |    3    |    2    |    —    |
|  12th  |    9     |    8    |    4    |    3    |    3    |    —    |
|  13th  |    9     |    9    |    4    |    3    |    3    |    1    |
|  14th  |    9     |   10    |    4    |    3    |    3    |    2    |
|  15th  |    10    |   10    |    4    |    3    |    3    |    3    |
|  16th  |    11    |   11    |    4    |    3    |    3    |    3    |
|  17th  |    11    |   11    |    4    |    3    |    3    |    3    |
|  18th  |    12    |   11    |    4    |    3    |    3    |    3    |
|  19th  |    13    |   11    |    4    |    3    |    3    |    3    |
|  20th  |    13    |   11    |    4    |    3    |    3    |    3    |
}}


\page

##### Draconic Runes: Sample Alphabet
{{runeTable,wide,frame,font-family:Iokharic
| a | b | c | d | e | f | g | h | i | j | k | l | m |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| a | b | c | d | e | f | g | h | i | j | k | l | m |
:
| n | o | p | q | r | s | t | u | v | w | x | y | z |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| n | o | p | q | r | s | t | u | v | w | x | y | z |
}}


##### Elvish Runes: Sample Alphabet
{{runeTable,wide,frame,font-family:Rellanic
| a | b | c | d | e | f | g | h | i | j | k | l | m |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| a | b | c | d | e | f | g | h | i | j | k | l | m |
:
| n | o | p | q | r | s | t | u | v | w | x | y | z |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| n | o | p | q | r | s | t | u | v | w | x | y | z |
}}



##### Dwarvish Runes: Sample Alphabet
{{runeTable,wide,frame,font-family:Davek
| a | b | c | d | e | f | g | h | i | j | k | l | m |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| a | b | c | d | e | f | g | h | i | j | k | l | m |
:
| n | o | p | q | r | s | t | u | v | w | x | y | z |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| n | o | p | q | r | s | t | u | v | w | x | y | z |
}}


\page
{{monster,frame
## Gum Elemental
*Medium annoyance, depressed neutral*
___
**Armor Class** :: 18 (chain mail, shield)
**Hit Points**  :: 47(1d4 + 5)
**Speed**       :: 15ft.
___
|  STR  |  DEX  |  CON  |  INT  |  WIS  |  CHA  |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|1 (-4)|6 (-2)|2 (-4)|8 (-1)|15 (+3)|5 (-2)|
___
**Condition Immunities** :: drunk, weak-kneed
**Senses**               :: darkvision 60 ft., passive Perception 18
**Languages**            :: Gibberish, Pottymouth
**Challenge**            :: 8 (8213 XP)
___
***Fowl Appearance.*** While the creature remains motionless, it is indistinguishable from a normal chicken.
:
***Onion Stench.*** Any creatures within 5 feet of this thing develops an irrational craving for onion rings.
:
***Big Jerk.*** Whenever this creature makes an attack, it starts telling you how much cooler it is than you.
:
***Big Jerk.*** Whenever this creature makes an attack, it starts telling you how much cooler it is than you.
:
***Full of Detergent.*** This creature has swallowed an entire bottle of dish detergent and is actually having a pretty good time.

While walking near this creature, you must make a dexterity check or become "a soapy mess" for three hours, after which your skin will get all dry and itchy.
### Actions
***Team Foot.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
:
***Team Foot.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
}}

!!



{{monster,frame,wide
## All-devouring Gumdrop Wraith
*Medium guy, manic-depressive evil*
___
**Armor Class** :: 10 (chain mail, shield)
**Hit Points**  :: 50(1d4 + 5)
**Speed**       :: 19ft.
___
|  STR  |  DEX  |  CON  |  INT  |  WIS  |  CHA  |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|15 (+3)|19 (+5)|8 (-1)|18 (+4)|17 (+4)|19 (+5)|
___
**Condition Immunities** :: swagged, groovy
**Senses**               :: darkvision 60 ft., passive Perception 16
**Languages**            :: None
**Challenge**            :: 11 (5658 XP)
___
***Onion Stench.*** Any creatures within 5 feet of this thing develops an irrational craving for onion rings.
:
***Pack Tactics.*** These guys work together like peanut butter and jelly.
:
***Pack Tactics.*** These guys work together like peanut butter and jelly.
:
***Sassiness.*** When questioned, this creature will talk back instead of answering.
:
***Full of Detergent.*** This creature has swallowed an entire bottle of dish detergent and is actually having a pretty good time.

While walking near this creature, you must make a dexterity check or become "a soapy mess" for three hours, after which your skin will get all dry and itchy.
### Actions
***Dual Throw.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
:
***Jumping Driver.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
:
***Crossface Suplex.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
:
***Super Hip Submission.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
:
***Team Foot.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
:
***Dual Throw.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
}}

