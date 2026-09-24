# Проверка 20 переводов The Alexandrian

Дата первоначального аудита: 23 сентября 2026. Проверка ограничена точным списком пользователя.

## Исправления завершены — 24 сентября 2026

По последующему запросу пользователя отредактированы все 20 перечисленных ниже MDX-файлов. Части 2–16, статья о приёмах, «Тактический взлом» и оба дополнения содержательно вычитаны и переработаны; в статье о городском исследовании выполнена точечная редактура. Исправлены смысловые и грамматические ошибки, искажённые игровые процедуры и термины, повреждённые заголовки, цитаты, списки и ссылки. Восстановлены пропущенные абзацы и таблица «Тактического взлома»: 9 строк данных, 2 столбца, КС 10/10/15/18/20/24/25/28/30.

Сверка выполнена с сохранёнными оригиналами; исходные содержательные ссылки восстановлены с учётом локальных переводов. Ошибочный исходный адрес Amazon в части 9 исправлен. В части 2 ссылка на «Искусство решений» заменена ссылкой на существующий перевод. Другие публикации за пределами списка не изменялись.

Для части 7 восстановлены три изображения: `public/images/alexandrian-game-structures-7-1.jpg`, `public/images/alexandrian-game-structures-7-2.jpg`, `public/images/alexandrian-game-structures-7-3.jpg`. Исправлены название, описание и canonical URL; атрибуция перевода pnprpg.ru сохранена. У остальных статей сохранены автор Justin Alexander, атрибуция переводчика, даты, теги и обложки. Новых страниц и новых обложек не создавалось.

По рабочему процессу навыка выполнены validate, preview, apply и check. Заключительный check: **20/20 успешно, без ошибок и предупреждений; повторное применение не требует изменений**. Проверены схема и frontmatter, компиляция тела MDX, локальные изображения и форматы файлов, внутренние ссылки и согласованность реестров. Таблица дополнительно проверена по синтаксическому дереву. `git diff --check` прошёл. В реестре внешних ссылок добавлено 27 разделов URL и удалено 8 устаревших; реестр переводов согласован с обновлённой частью 7.

Сборка проекта, визуальная проверка страниц в браузере и развёртывание на сайте не выполнялись. Доступность всех внешних сайтов не проверялась. Ниже сохранён **исторический отчёт до исправлений**; его примеры и номера строк относятся к прежним версиям файлов, а не к текущему результату.

## Итог

18 новых переводов из предыдущей партии нельзя считать готовыми: выявлены систематические смысловые ошибки, повреждённые ссылки, разметка и пропуски. Старый перевод части 7 также нуждается в содержательной правке. «Размышления о городском исследовании» требуют точечной редактуры; значимых смысловых искажений при сверке не выявлено. Предыдущий отчёт о готовности серии был ошибочным: успешная компиляция MDX не подтверждает качество перевода.

## Как проверено

Для 19 источников использованы сохранённые снимки оригиналов из предыдущей задачи; для урбанкраулов — текущая страница автора. Проверены локальные тексты, ключевые термины и процедурные примеры, структура и комплектность, ссылки, изображения и результаты технического валидатора. Ниже перечислены подтверждённые ошибки, а не исчерпывающая построчная редактура. Полный заново вычитанный перевод этим отчётом не заменяется. Доступность всех внешних ссылок по HTTP и внешний вид в браузере отдельно не проверялись. Сборка не запускалась.

## Общие проблемы оформления

- Во всех 18 новых файлах нет ни одного Markdown-заголовка раздела: смысловые разделы набраны жирным текстом либо повреждёнными звёздочками. Их следует оформить как ##/###; выделенные вводные подпункты не обязательно превращать в заголовки.
- В «Тактическом взломе» исходная таблица не распознаётся как таблица. Это ошибка отображения, которую проверка синтаксиса не обнаружила.
- В адресах The Alexandrian переведены слова dungeoncrawl/hexcrawl; такие URL нужно восстановить.
- Содержательные ссылки местами потеряны, заменены голыми адресами или имеют адрес вместо понятной подписи. Некоторые исчезли вместе с обрезанными абзацами.
- Во многих новых файлах склеены слова и выделения, потеряны закрывающие скобки и кавычки, оставлены английские подписи/названия разделов.
- КС/КЗ, гекскраул, улики, броски, персонажи игроков и игровые названия не приведены к единой терминологии. Замена слов без склонения породила фразы вроде «для Ведущий» и «для персонажи игроков».
- Проверка схемы, локальных изображений и компиляции прошла у 19 из 20 файлов; часть 7 не соответствует текущему стандарту описания и ссылки на оригинал. Это не означает, что остальные 19 прошли редакторскую проверку.

## По каждой статье

### Часть 2: основы

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-2-game-structure-basics.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15134/roleplaying-games/game-structures-part-2-game-structure-basics)

- [Строка 36](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-2-game-structure-basics.mdx:36): Утрачено различие между двумя центральными вопросами: какое именно действие разрешается и как разрешается это действие. Сейчас оба пункта спрашивают почти одно и то же. Это ломает последующее объяснение масштаба действий.
- [Строка 44](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-2-game-structure-basics.mdx:44): Навыки оставлены без перевода, check превратился в «чек», имя герцогини меняется с Елизаветы на Элизабет. Нужны единые названия навыков и имени.
- [Строка 58](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-2-game-structure-basics.mdx:58): Речь об опросе/допросе НИП, а не о сомнении в их существовании или словах.

### Часть 3: данжен-краул

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-3-dungeoncrawl.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15140/roleplaying-games/game-structures-part-3-dungeoncrawl)

- [Строка 36](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-3-dungeoncrawl.mdx:36): Easy to run означает «легко проводить». Также потеряна мысль о разделении приключения на относительно независимые комнаты.
- [Строка 44](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-3-dungeoncrawl.mdx:44): Пример действия reverse-engineer превращён в бессвязное словосочетание; требуется «разобраться в устройстве гномьего голема» по контексту.
- [Строка 28](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-3-dungeoncrawl.mdx:28): Убраны пробелы и разделитель после выделения; пункты набраны как обычные абзацы.

### Часть 4: сражение

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-4-combat.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15147/roleplaying-games/game-structures-part-4-combat)

- [Строка 29](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-4-combat.mdx:29): Повторяется смысловая ошибка с run.
- [Строка 35](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-4-combat.mdx:35): Идиоматическое указание на повторение цикла переведено буквально как мытьё.
- [Строка 39](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-4-combat.mdx:39): Остался английский текст; заголовок «РЕВАРДЫ» следует заменить на «Награды». Открывающий абзац также грамматически разрушен.

### Часть 5: детективы

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-5-mysteries.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15151/roleplaying-games/game-structures-part-5-mysteries)

- [Строка 40](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-5-mysteries.mdx:40): Firewalled означает относительную изоляцию частей сценария, а не «огненные» фрагменты.
- [Строка 56](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-5-mysteries.mdx:56): Clues здесь — улики. Ошибка повторяется в рассуждении о получении информации. Нужны «Правило трёх улик» и единая терминология.
- [Строка 46](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-5-mysteries.mdx:46): Laundry list — механическое перечисление/перебор навыков, а не список для прачечной.

### Часть 6: гекскраулы

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-6-hexcrawls.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15156/roleplaying-games/game-structures-part-6-hexcrawls)

- [Строка 42](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-6-hexcrawls.mdx:42): Гекскраул превратился в термин из информатики. Заголовок «Аналитизация трещины» также не передаёт анализа структуры краула.
- [Строка 38](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-6-hexcrawls.mdx:38): Изменён адрес ссылки: часть английского URL переведена на русский. Следует восстановить исходный адрес или внутреннюю ссылку.
- [Строка 60](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-6-hexcrawls.mdx:60): Повреждена разметка заголовка; четыре звёздочки не заменяют корректный заголовок раздела.

### Часть 7: игра с гекскраулами

**Вывод:** Содержательная правка старого перевода.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-7.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15164/roleplaying-games/game-structures-part-7-playing-with-hexcrawls)

- [Строка 39](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-7.mdx:39): В оригинале говорится об автоматическом обнаружении подготовленной встречи/локации гекса. Перевод подменяет её случайной встречей — это разные процедуры.
- [Строка 54](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-7.mdx:54): Foraging в перечне способов передвижения означает добычу пищи, а не мелкие грабежи.
- [Строка 61](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-7.mdx:61): Автор спрашивает, насколько хорошо игра будет работать при такой деятельности; утверждение именно о балансе добавлено переводом.
- [Строка 16](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-7.mdx:16): Нет отдельной обязательной ссылки «Оригинал» сразу после frontmatter. Описание содержит хэштеги, заголовок — технический префикс и неунифицированный Hexcrawl. Заголовки начинаются с ### и скачут к #####. Три иллюстрации исходной статьи отсутствуют; существующую атрибуцию pnprpg.ru при правке необходимо сохранить.

### Часть 8: чёткие процедуры

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-8-importance-of-clean-structures.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15176/roleplaying-games/game-structures-part-8-the-importance-of-clean-structures)

- [Строка 25](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-8-importance-of-clean-structures.mdx:25): В оригинале сутки разделены на шесть вахт по четыре часа, а не «шесть часов (каждые четыре часа)».
- [Строка 39](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-8-importance-of-clean-structures.mdx:39): Грубое искажение выражения о смене направления посреди гекса.
- [Строка 69](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-8-importance-of-clean-structures.mdx:69): AC означает Класс Защиты, а не переменный ток; «точки попадания» — неудачный перевод хитов.
- [Строка 19](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-8-importance-of-clean-structures.mdx:19): URL повреждён переводом части адреса.

### Часть 9: архаичные структуры

**Вывод:** Восстановление пропусков и существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-9-archaic-game-structures.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15182/roleplaying-games/game-structures-part-9-archaic-game-structures)

- [Строка 22](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-9-archaic-game-structures.mdx:22): От абзаца об исчезновении и возрождении гекскраулов остался хвост предложения. Пропали сведения об AD&D 2e, переиздании Wilderlands и West Marches.
- [Строка 42](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-9-archaic-game-structures.mdx:42): После иллюстрации Boot Hill исчез практически весь абзац с примерами игровых структур Gamma World, Traveller, Boot Hill и En Garde.
- [Строка 26](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-9-archaic-game-structures.mdx:26): Die в правилах означает кость/результат броска. «Умер 1–3» и «рефери катит кубок» искажают процедуру.

### Часть 10: неполные структуры

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-10-incomplete-game-structures.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15192/roleplaying-games/game-structures-part-10-incomplete-game-structures)

- [Строка 28](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-10-incomplete-game-structures.mdx:28): Идиома о сведении к сути переведена как варка.
- [Строка 56](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-10-incomplete-game-structures.mdx:56): Railroad означает рельсовое ведение/сценарий, а не железнодорожную тематику. Feats далее переведены «подвигами» вместо игровых черт.
- [Строка 60](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-10-incomplete-game-structures.mdx:60): Повреждён URL; названия Traveller и игровых сущностей переведены непоследовательно.

### Часть 11: полные структуры

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-11-complete-game-structures.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15203/roleplaying-games/game-structures-part-11-complete-game-structures)

- [Строка 50](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-11-complete-game-structures.mdx:50): В перечне необходимых элементов default scenario hook означает зацепку сценария по умолчанию; зацепка ошибочно подменена целым сценарием.
- [Строка 72](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-11-complete-game-structures.mdx:72): Associated and in-character означает связь решения с игровым миром и принятие его от лица персонажа; «характерными» этот смысл не передаёт.
- [Строка 82](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-11-complete-game-structures.mdx:82): Речь о таблицах наполнения подземелий и гексов. Формулировка уничтожает практический пример инструмента подготовки.

### Часть 12: использование структур

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-12-using-scenario-structures.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15215/roleplaying-games/game-structures-part-12-using-scenario-structures)

- [Строка 26](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-12-using-scenario-structures.mdx:26): Клерку поручено представлять герцогиню на торгах; в оригинале его ни в чём не обвиняют.
- [Строка 59](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-12-using-scenario-structures.mdx:59): PCs означает персонажей игроков, не компьютер.
- [Строка 30](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-12-using-scenario-structures.mdx:30): Повреждён адрес ссылки; «ползание», «сквозняк» и «потолок» используются вместо одной процедуры краула.

### Часть 13: собственные структуры

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-13-custom-structures.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15222/roleplaying-games/game-structures-part-13-custom-structures)

- [Строка 22](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-13-custom-structures.mdx:22): Wilderness Lore — проверка конкретного навыка, не осмотр пустыни. DC 20 следует оформить как КС 20 по словарю.
- [Строка 42](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-13-custom-structures.mdx:42): Uneventful означает рейсы без происшествий; перевод меняет смысл на противоположный.
- [Строка 42](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-13-custom-structures.mdx:42): Wilderness has hexes — дикая местность разбита на гексы; «пустыня» и «шипы» искажают аналогию.
- [Строка 72](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-13-custom-structures.mdx:72): Roll — результат броска, не рулон; повреждён также URL части 7.

### Часть 14: Between the Stars

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-14-between-the-stars.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15234/roleplaying-games/game-structures-part-14-scenario-structure-for-between-the-stars)

- [Строка 30](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-14-between-the-stars.mdx:30): Раздел описывает захват/угон корабля (hijacking), а не предупреждение.
- [Строка 78](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-14-between-the-stars.mdx:78): Mutiny — мятеж. Ошибка подменяет один из предложенных типов сценариев.
- [Строка 64](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-14-between-the-stars.mdx:64): Random encounters — случайные встречи. «Луч трактора» ранее должен быть притягивающим лучом; Node Effects и Bomb Onboard остались по-английски.

### Часть 15: универсальные структуры

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-15-generic-scenario-structures.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15250/roleplaying-games/game-structures-part-15-generic-scenario-structures)

- [Строка 19](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-15-generic-scenario-structures.mdx:19): Redundancies — дублирующиеся/избыточные элементы систем, не увольнения.
- [Строка 21](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-15-generic-scenario-structures.mdx:21): Искажена формула автора: значение характеристики + модификатор навыка.
- [Строка 37](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-15-generic-scenario-structures.mdx:37): Skill challenges — название игровой подсистемы испытаний навыков. Перевод как «проблемы с навыками» делает критику конкретной механики непонятной.

### Часть 16: известные и неизвестные структуры

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-16-known-and-unknown.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15254/roleplaying-games/game-structures-part-16-player-known-and-unknown-scenario-structures)

- [Строка 21](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-16-known-and-unknown.mdx:21): The Unknown Hex — «Неизвестный гекс».
- [Строка 57](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-16-known-and-unknown.mdx:57): DC означает Класс Сложности. Режимы движения и их модификаторы требуется заново вычитать как правила, а не только как прозу.
- [Строка 71](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-part-16-known-and-unknown.mdx:71): Die — игральная кость; в цитате обсуждается первая выбираемая кость/первое обращение к механике, а не смерть. В следующем абзаце также утрачено название Smallville.

### Планирование приёма

**Вывод:** Восстановление пропуска и существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structure-party-planning.mdx) · [Оригинал](https://thealexandrian.net/wordpress/37995/roleplaying-games/game-structure-party-planning)

- [Строка 20](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structure-party-planning.mdx:20): Belle of the ball означает быть звездой бала/оказаться в центре внимания.
- [Строка 52](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structure-party-planning.mdx:52): Перед этим обрывком потеряна инструкция подготовить каждого важного НИП по универсальному шаблону отыгрыша и сама содержательная ссылка на шаблон.
- [Строка 108](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structure-party-planning.mdx:108): Party в этой статье означает приём/вечеринку, а не партию. Наряду с «ТОПИКА КОНВЕРСАЦИИ» это искажает структуру практического руководства.

### Размышления об урбанкраулах

**Вывод:** Точечная редактура; значимых смысловых искажений не выявлено.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-thinking-about-urbancrawls.mdx) · [Оригинал](https://thealexandrian.net/wordpress/36473/roleplaying-games/thinking-about-urbancrawls)

- [Строка 53](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-thinking-about-urbancrawls.mdx:53): Опечатка: «вторую оставить кому-нибудь другому».
- [Строка 22](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-thinking-about-urbancrawls.mdx:22): В словаре репозитория закреплён «гекскраул». Унифицировать употребление в тексте. Основные тезисы, четыре свойства краула и объяснения А–Г сохранены; локальная иллюстрация и иерархия заголовков оформлены корректно.

### Тактический взлом

**Вывод:** Восстановление таблицы и существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-deus-ex-tactical-hacking.mdx) · [Оригинал](https://thealexandrian.net/wordpress/15331/roleplaying-games/deus-ex-tactical-hacking)

- [Строка 64](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-deus-ex-tactical-hacking.mdx:64): Таблица КС и разведданных разрушена: заголовок и строки больше не образуют Markdown-таблицу, часть разделителей заменена восклицательными знаками. MDX компилируется, но таблица не отображается.
- [Строка 84](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-deus-ex-tactical-hacking.mdx:84): PC означает персонажа игрока.
- [Строка 38](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-deus-ex-tactical-hacking.mdx:38): Access cap — предел доступа/верхний предел результата; «кабинет» и «колпачок» не передают параметр. Intel — сведения/разведданные, не название производителя.
- [Строка 28](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-deus-ex-tactical-hacking.mdx:28): Networks — сети, не Интернет. В пользовательской исходной ссылке также есть лишнее %22; в файле указан правильный адрес без кавычки.

### Дополнение: катаны и плащи

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-addendum-katanas-trenchcoats.mdx) · [Оригинал](https://thealexandrian.net/wordpress/43510/roleplaying-games/game-structures-addendum-katanas-trenchcoats)

- [Строка 38](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-addendum-katanas-trenchcoats.mdx:38): Сопоставляются игровые показатели Человечность и Рассудок, а не человечество и санитария.
- [Строка 36](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-addendum-katanas-trenchcoats.mdx:36): Humanity mechanic означает механику Человечности.
- [Строка 30](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-addendum-katanas-trenchcoats.mdx:30): Предложение о редкости определённого стиля игры частично осталось английским и синтаксически распалось. Названия игр и показателей переведены непоследовательно.

### Дополнение: система имеет значение

**Вывод:** Существенная переработка.

[Файл](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-addendum-system-matters.mdx) · [Оригинал](https://thealexandrian.net/wordpress/43568/roleplaying-games/game-structures-addendum-system-matters)

- [Строка 22](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-addendum-system-matters.mdx:22): Gets out of the way означает «не мешает играть». Перевод делает исходное высказывание противоположным по практическому смыслу.
- [Строка 34](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-addendum-system-matters.mdx:34): Heavy lifting — основная работа, возлагаемая на ведущего и игроков, а не физический подъём тяжестей.
- [Строка 40](D:/Palant/DOCS/GITHUB/cyborgsandmages/src/content/posts/translations/alexandrian-game-structures-addendum-system-matters.mdx:40): Resolution+combat systems — сочетание механики разрешения действий и боевой системы. Перевод затушёвывает центральное разграничение статьи.

## Приоритет исправления

1. Восстановить потерянные абзацы части 9 и «Планирования приёма», таблицу «Тактического взлома» и повреждённые URL.
2. Заново вычитать все 18 новых переводов по оригиналам, уделяя особое внимание терминам, числам, процедурам и цитатам. Одних замен по словарю недостаточно.
3. Исправить содержательные ошибки старой части 7 с сохранением её атрибуции; выполнить точечные правки урбанкраулов.
4. После изменения текстов восстановить разметку и реестры, проверить полноту ссылок и изображений, затем повторить проверку MDX и отображения.
