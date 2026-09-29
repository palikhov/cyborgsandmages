from pathlib import Path

ROOT = Path(r"D:\Palant\DOCS\GITHUB\cyborgsandmages")
BASE = ROOT / "src/content/posts/translations"

files = {
    "i": BASE / "acoup-siege-of-gondor-part-i-logistics.mdx",
    "ii": BASE / "acoup-siege-of-gondor-part-ii-beacons.mdx",
    "iii": BASE / "acoup-siege-of-gondor-part-iii-storming-the-city.mdx",
}

common = {
    "[Я](https://acoup.blog/2019/05/10/collections-the-siege-of-gondor/)": "[I](https://acoup.blog/2019/05/10/collections-the-siege-of-gondor/)",
    "[Я](https://acoup.blog/2019/07/26/collections-war-elephants-part-i-battle-pachyderms/)": "[I](https://acoup.blog/2019/07/26/collections-war-elephants-part-i-battle-pachyderms/)",
    "Денэтор": "Денетор",
    "Мордер": "Мордор",
    "Эхор Раммаса": "Раммас Эхор",
    "Поля Пеленнор": "Пеленнорские поля",
    "полях Пеленнор": "Пеленнорских полях",
    "поля Пеленнор": "Пеленнорские поля",
    "Козвейные форты": "Форты у переправы",
    "Кэр-Андрос": "Каир-Андрос",
    "Кэр Андрос": "Каир-Андрос",
    "Каэра Андроса": "Каир-Андроса",
    "Каэр-Андроса": "Каир-Андроса",
    "Анориен": "Анориэн",
    "Actium": "Акциуме",
    "Операционный план": "Оперативный план",
    "операционный план": "оперативный план",
    "осадного оборудования": "осадной техники",
    "осадное оборудование": "осадную технику",
    "багажный поезд": "обоз",
    "запас поезда": "обоз",
    "вагоны": "повозки",
    "вагонов": "повозок",
    "вагоне": "повозке",
    "вагона": "повозки",
    "водителя вагона": "возница",
    "почтовыми пустотерами": "кольчужными вставками",
    "носить почту": "носить кольчугу",
    "носят почту": "носят кольчугу",
    "броня плиты": "латный доспех",
    "броней плиты": "латным доспехом",
    "оружием плиты": "латным доспехом",
    "Кудос": "И всё же похвально",
    "Гронда": "Гронда",
}

image_maps = {
    "i": [
        ("/images/acoup-siege-of-gondor-part-i-logistics-1.png", "/images/acoup-siege-of-gondor-part-i-logistics-2.png", "Армия орков выходит из Минас-Моргула"),
        ("/images/acoup-siege-of-gondor-part-i-logistics-2.png", "/images/acoup-siege-of-gondor-part-i-logistics-3.png", "Карта Мордора, Гондора и Рохана"),
        ("/images/acoup-siege-of-gondor-part-i-logistics-3.png", "/images/acoup-siege-of-gondor-part-i-logistics-4.png", "Армия Мордора перед Минас-Тиритом"),
        ("/images/acoup-siege-of-gondor-part-i-logistics-4.png", "/images/acoup-siege-of-gondor-part-i-logistics-1.png", "Армия Мордора заполняет Пеленнорские поля"),
        ("/images/acoup-siege-of-gondor-part-i-logistics-5.jpg", "/images/acoup-siege-of-gondor-part-i-logistics-5.jpg", "Ульмская кампания 1805 года"),
        ("/images/acoup-siege-of-gondor-part-i-logistics-6.png", "/images/acoup-siege-of-gondor-part-i-logistics-6.png", "Защитники Гондора за стенами Минас-Тирита"),
    ],
    "ii": [
        (f"/images/acoup-siege-of-gondor-part-ii-beacons-{n}.{ext}", f"/images/acoup-siege-of-gondor-part-ii-beacons-{n+1}.{ext}", alt)
        for n, ext, alt in [
            (1,"png","Раммас Эхор вокруг Пеленнорских полей"),
            (2,"png","Армия орков переправляется через Андуин"),
            (3,"png","Стрела попадает в латный доспех гондорского воина"),
            (4,"png","Защитники Гондора укрываются за стенами"),
            (5,"png","Отряд Фарамира отступает к Минас-Тириту"),
            (6,"png","Фарамир ведёт конницу в атаку"),
            (7,"png","unused"),
        ] if n < 7
    ] + [("/images/acoup-siege-of-gondor-part-ii-beacons-7.png", "/images/acoup-siege-of-gondor-part-ii-beacons-1.png", "Осада доставлена к стенам Минас-Тирита")],
    "iii": [
        (f"/images/acoup-siege-of-gondor-part-iii-storming-the-city-{n}.{ext}", f"/images/acoup-siege-of-gondor-part-iii-storming-the-city-{n+1}.{next_ext}", alt)
        for n, ext, next_ext, alt in [
            (1,"png","png","Армия Мордора строится перед Минас-Тиритом"),
            (2,"png","jpg","Современная реконструкция римской катапульты"),
            (3,"jpg","png","Требюше Гондора на стенах Минас-Тирита"),
            (4,"png","png","Требюше выпускает камень по осаждающим"),
            (5,"png","jpg","Средневековое изображение требюше"),
            (6,"jpg","png","Катапульты армии Мордора"),
            (7,"png","jpg","Ассирийская осада укреплённого города"),
            (8,"jpg","jpg","Осада Иерусалима в 1099 году"),
            (9,"jpg","png","Осадные башни Мордора приближаются к стенам"),
            (10,"png","png","Осадная башня ударяет по стене Минас-Тирита"),
            (11,"png","jpg","Римские кузнецы за работой"),
            (12,"jpg","png","Таран армии Мордора"),
            (13,"png","png","Гронд приближается к воротам Минас-Тирита"),
            (14,"png","png","Гронд разбивает городские ворота"),
            (15,"png","png","Иллюстрация Гронда художника Артура Рэкхема"),
        ]
    ],
}

special = {
    "i": {
        "## *Цели: Стратегия и операции*": "## Цели: стратегия и оперативное искусство",
        "## У нас была одна логистика, да. Но как насчет второй логистики?": "## С первой логистикой разобрались. А как насчёт второй?",
        "эта серия будет выходить один раз в неделю, в пятницу": "новые части будут выходить по пятницам раз в неделю",
        "я положу эти части в маленькую коробочку": "я буду выделять такие фрагменты отдельными врезками",
        "серия компаньонов": "сопутствующая серия",
        "которые приседают, наблюдая за зрелищем": "которые, пригнувшись, наблюдают за зрелищем",
        "Цели здесь (оперативные цели) плана Саурона здесь абсолютно проверьте.": "Оперативные цели плана Саурона вполне выдерживают проверку.",
        "Любители говорят тактику": "Дилетанты говорят о тактике",
        "Специалисты изучают логистику": "профессионалы изучают логистику",
        "поднимите стул за столом для взрослых": "присаживайтесь за взрослый стол",
        "вместо того, чтобы попасть в башню немного ближе к цели": "вместо того чтобы просто попасть по башне чуть ближе к цели",
        "в среднем около 10 миль в день": "в среднем проходит около 10 миль в день",
        "флот Умбара": "флотом Умбара",
    },
    "ii": {
        "## Операционный план Гондора": "## Оперативный план Гондора",
        "## Тем временем в Осгилиате плохая тактика": "## Тем временем в Осгилиате: плохая тактика",
        "## Заряжайте руины! Может быть, камни убегут?": "## В атаку на руины! Может быть, камни разбегутся?",
        "## Это не обвинение. Теперь *это* является платой.": "## Это ещё не атака. Вот *это* — атака",
        "> ***Примечание: ****": "> **Примечание:**",
        "Стена Адриана": "вал Адриана",
        "Стрелы так не работают. Латный доспех не работает таким образом.": "Стрелы действуют не так. И латный доспех тоже.",
        "** носят кольчугу **": "**носят кольчугу**",
    },
    "iii": {
        "## Ступень Пеленнор (Pelennor Steppe)": "## Подступы (или Пеленнорская степь)",
        "## Громкий": "## Гронд",
        "## Сомма Гондора": "## Гондорская Сомма",
        "[это](https://youtu.be/jJ1Qm1Z_D7w)brief отношение к обману фильма и сохраняющуюся актуальность": "[этот краткий разбор](https://youtu.be/jJ1Qm1Z_D7w) обмана в фильме и его непреходящей актуальности",
        "270 кг; Vitr.": "270 000 современных фунтов; Vitr.",
        "метров *": "*метров*",
        "*Helepolis *": "*Гелеполис*",
        "*De Arch *": "*De architectura*",
        "* * в одиночку * *": "**только железа**",
        "*толщины *": "*толщины*",
    },
}

for key, path in files.items():
    old = path.read_text(encoding="utf-8")
    new = old
    for a, b in common.items():
        new = new.replace(a, b)
    for a, b in special.get(key, {}).items():
        new = new.replace(a, b)
    # Avoid cascading path replacements by replacing complete image nodes once.
    for idx, (old_url, new_url, alt) in enumerate(image_maps[key]):
        new = new.replace(f"![]({old_url})", f"![{alt}]({new_url})", 1)
    lines = []
    for line in new.splitlines():
        if line.startswith("*") and not line.startswith("**") and not line.endswith("*"):
            line += "*"
        lines.append(line.rstrip())
    new = "\n".join(lines) + "\n"
    print("*** Begin Patch")
    print(f"*** Update File: {path.relative_to(ROOT).as_posix()}")
    print("@@")
    for line in old.splitlines(): print("-" + line)
    if old.endswith("\n"): print("-")
    for line in new.splitlines(): print("+" + line)
    if new.endswith("\n"): print("+")
    print("*** End Patch")
