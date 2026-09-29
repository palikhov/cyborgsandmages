from pathlib import Path
import re

ROOT = Path(r"D:\Palant\DOCS\GITHUB\cyborgsandmages")

POSTS = [
    {
        "draft": Path(r"C:\Users\Anton\AppData\Local\Temp\article-work-biVW04\draft-ru.md"),
        "slug": "acoup-siege-of-gondor-part-i-logistics",
        "title": "Осада Гондора, часть I — профессионалы говорят о логистике",
        "description": "ПЕРЕВОД - Разбор стратегии и логистики наступления Мордора на Минас-Тирит: цели кампании, маршруты, снабжение и правдоподобие армий в фильме и книге.",
        "canonical": "https://acoup.blog/2019/05/10/collections-the-siege-of-gondor/",
        "images": ["png", "png", "png", "png", "jpg", "png"],
    },
    {
        "draft": Path(r"C:\Users\Anton\AppData\Local\Temp\article-work-J8ZLm9\draft-ru.md"),
        "slug": "acoup-siege-of-gondor-part-ii-beacons",
        "title": "Осада Гондора, часть II — сигнальные огни зажжены",
        "description": "ПЕРЕВОД - Разбор обороны Гондора: Раммас Эхор, переправа через Андуин, отход Фарамира, сигнальные огни и решения, которые привели армии к Минас-Тириту.",
        "canonical": "https://acoup.blog/2019/05/17/collections-the-siege-of-gondor-part-ii-these-beacons-are-liiiiiiit/",
        "images": ["png"] * 7,
    },
    {
        "draft": Path(r"C:\Users\Anton\AppData\Local\Temp\article-work-kms0Ae\draft-ru.md"),
        "slug": "acoup-siege-of-gondor-part-iii-storming-the-city",
        "title": "Осада Гондора, часть III — весёлого штурма!",
        "description": "ПЕРЕВОД - Как в действительности штурмовали укреплённые города: осадная артиллерия, башни, лестницы и тараны — и насколько убедительно это показано у стен Минас-Тирита.",
        "canonical": "https://acoup.blog/2019/05/24/collections-the-siege-of-gondor-part-iii-having-fun-storming-the-city/",
        "images": ["png", "png", "jpg", "png", "png", "jpg", "png", "jpg", "jpg", "png", "png", "jpg", "png", "png", "png", "png"],
    },
]

COMMON = {
    "досовременн": "домодерн",
    "Король ведьм": "Король-чародей",
    "Короля ведьм": "Короля-чародея",
    "Королю ведьм": "Королю-чародею",
    "Королем ведьм": "Королём-чародеем",
    "Королём ведьм": "Королём-чародеем",
    "Король-Ведьма": "Король-чародей",
    "Короля-Ведьмы": "Короля-чародея",
    "Королю-Ведьме": "Королю-чародею",
    "Королем-Ведьмой": "Королём-чародеем",
    "Королём-Ведьмой": "Королём-чародеем",
    "Минаса Моргула": "Минас-Моргула",
    "Минас Моргул": "Минас-Моргул",
    "Осгилиаф": "Осгилиат",
    "Осгилиафа": "Осгилиата",
    "Осгилиафе": "Осгилиате",
    "Итильян": "Итилиэн",
    "Итилиан": "Итилиэн",
    "Денатор": "Денетор",
    "Теоденом": "Теоденом",
    "Глубину Хелма": "Хельмову Падь",
    "Глубине Хелма": "Хельмовой Пади",
    "Глубина Хелма": "Хельмова Падь",
    "Саутрон": "харадрим",
    "Саутрона": "харадрим",
    "Саутроны": "харадрим",
    "военные слоны": "боевые слоны",
    "осадные двигатели": "осадные машины",
    "осадных двигателей": "осадных машин",
    "осадным двигателям": "осадным машинам",
    "требухет": "требюше",
    "требушет": "требюше",
    "Ринграйты": "назгулы",
    "Ринграйт": "назгул",
    "рытье Шира": "Очищение Шира",
    "рытье шир": "Очищение Шира",
    "рытье шайры": "Очищение Шира",
    "кавалерийский заряд": "кавалерийская атака",
    "кавалерийского заряда": "кавалерийской атаки",
    "кавалерийскую зарядку": "кавалерийскую атаку",
    "вовлеченная последовательность": "сложная последовательность",
    "вовлечённая последовательность": "сложная последовательность",
    "поставки": "снабжение",
    "поставок": "припасов",
}

def postedit(text: str) -> str:
    for a, b in COMMON.items():
        text = text.replace(a, b)
    text = text.replace("[Я](https://acoup.blog/2020/05/01/collections-the-battle-of-helms-deep-part-i-bargaining-for-goods-at-helms-gate/)", "[I](https://acoup.blog/2020/05/01/collections-the-battle-of-helms-deep-part-i-bargaining-for-goods-at-helms-gate/)")
    text = text.replace("**no**", "**нет**")
    text = text.replace("*** да****", "***да***")
    text = text.replace("1ENDTOKEN", " ")
    text = text.replace("LINKTOKEN", "")
    text = text.replace(" *RotK*", " *RotK*")
    # Argos sometimes turns an italic caption into a Markdown bullet.
    out = []
    for line in text.splitlines():
        if line.startswith("* ") and not line.endswith("*"):
            line = "*" + line[2:].strip() + "*"
        out.append(line.rstrip())
    text = "\n".join(out).strip() + "\n"
    return re.sub(r"\n{3,}", "\n\n", text)

generated = []
for spec in POSTS:
    raw = spec["draft"].read_text(encoding="utf-8")
    lines = raw.splitlines()
    body = "\n".join(lines[8:]).strip()

    # Localize every occurrence, including the repeated hero still used in the body.
    seen = []
    for match in re.finditer(r"!\[[^\]]*\]\((https://acoup\.blog/wp-content/uploads/[^)]+)\)", body):
        url = match.group(1)
        if url not in seen:
            seen.append(url)
    for index, (url, ext) in enumerate(zip(seen, spec["images"]), start=1):
        local = f"/images/{spec['slug']}-{index}.{ext}"
        body = re.sub(rf"!\[([^\]]*)\]\({re.escape(url)}\)", rf"![\1]({local})", body)

    body = postedit(body)
    frontmatter = f'''---
title: "{spec['title']}"
description: "{spec['description']}"
date: 2026-09-29
tags:
  - Перевод
  - Массовые сражения
  - Тактика
  - Миростроение
author: Bret Devereaux
translator: Codex по инструкциям Антона "Palant" Палихова
cover: ~assets/covers/{spec['slug']}.png
---

[Оригинал]({spec['canonical']})

'''
    target = ROOT / "src" / "content" / "posts" / "translations" / f"{spec['slug']}.mdx"
    generated.append((target, frontmatter + body))

print("*** Begin Patch")
for target, content in generated:
    rel = target.relative_to(ROOT).as_posix()
    print(f"*** Update File: {rel}")
    print("@@")
    old = target.read_text(encoding="utf-8")
    for line in old.splitlines():
        print("-" + line)
    if old.endswith("\n"):
        print("-")
    for line in content.splitlines():
        print("+" + line)
    if content.endswith("\n"):
        print("+")
print("*** End Patch")
