export const SITE_TITLE = "Киборги и Чародеи";

export const SITE_DESCRIPTION = "D&D и Настольные Ролевые Игры – Статьи, Ресурсы, Материалы, Советы, Переводы";

export const SITE_NAVIGATION = [
	{
		label: "Главная",
		href: "/"
	},
	{
		label: "Статьи",
		href: "/articles/1"
	},
	{
		label: "Переводы",
		href: "/translations/1"
	},
	{
		label: "Core d20 RPG",
		href: "/cored20rpg"
	},
	{
		label: "Ресурсы",
		href: "/resources"
	}
];

export const SITE_POST_CATEGORIES = [
	{
		path: "articles",
		title: "Статьи",
		description: "Статьи про настольные ролевые игры - анализ механик, анализ лора, советы и прочее"
	},
	{
		path: "translations",
		title: "Переводы",
		description: "Переводы статей с других языков."
	},
	{
		path: "cored20rpg",
		title: "Core d20 RPG",
		description: "Core d20 RPG — наш проект изменения и расширения D&D 5e."
	},
	{
		path: "core-d20",
		title: "Статьи по Core d20 RPG",
		description: "Core d20 RPG — наш проект изменения и расширения D&D 5e."
	},
	{
		path: "sage-advice",
		title: "Советы Мудреца",
		description: "Советы Мудреца"
	},
	{
		path: "srd",
		title: "Перевод SRD",
		description: "Перевод SRD"
	},
	{
		path: "forgotten-realms",
		title: "Забытые Королевства",
		description: "Забытые Королевства"
	},
	{
		path: "marwang",
		title: "Марванг",
		description: "Марванг"
	}
];

export const SITE_FRIENDS = [
	{
		label: "Создатель Чудовищ",
		href: "https://monstermaker.cyborgsandmages.com/",
		favicon: "/favicon.png"
	},
	{
		label: "Long Story Short",
		href: "https://longstoryshort.app/",
		favicon: "https://longstoryshort.app/favicon.ico"
	},
	{
		label: "TTG Club",
		href: "https://ttg.club/",
		favicon: "https://ttg.club/favicon_ttg_v3.svg"
	},
	{
		label: "DnD.su",
		href: "https://dnd.su/",
		favicon: "https://dnd.su/favicon.ico"
	},
	{
		label: "D&D в Україні",
		href: "https://dnd.in.ua/",
		favicon: "/images/decoration/ua.svg"
	},
	{
		label: "Adventure Guys",
		href: "https://www.adventureguys.club/",
		favicon: "/images/decoration/ag.ico"
	},
	{
		label: "Orb - поиск игр",
		href: "https://orbrpg.com/",
		favicon: "/images/decoration/orb.svg"
	}
];

// 5E CONSTS

export const DND_ALIGNMENTS = {
	lg: "принципиальное доброе",
	ng: "нейтральное доброе",
	cg: "хаотичное доброе",
	ln: "принципиальное нейтральное",
	tn: "нейтральное",
	cn: "хаотичное нейтральное",
	le: "принципиальное злое",
	ne: "нейтральное злое",
	ce: "хаотичное злое",
	u: "без мировоззрения",
	any: "любое мировоззрение"
};

export const DND_TYPES = {
	aberration: "аберрация",
	beast: "животное",
	celestial: "небожитель",
	construct: "конструкция",
	dragon: "дракон",
	elemental: "элементаль",
	fey: "фея",
	fiend: "исчадие",
	giant: "великан",
	humanoid: "гуманоид",
	monstrosity: "монстр",
	ooze: "жижа",
	plant: "растение",
	undead: "нежить"
};

export const DND_SIZES = {
	t: "маленький",
	s: "небольшой",
	m: "средний",
	l: "крупный",
	h: "огромный",
	g: "исполинский",
	a: "любой"
};

export const DND_RARITY = {
	c: "обычный",
	u: "необычный",
	r: "редкий",
	v: "крайне редкий",
	l: "легендарный",
	a: "артефакт"
};

export const DND_CURRENCY = {
	cp: "мм",
	sp: "см",
	gp: "зм",
	ep: "эм",
	pp: "пм"
};

export const DND_SPELL_LEVELS = {
	0: "заговор",
	1: "1-ый",
	2: "2-ой",
	3: "3-ий",
	4: "4-ый",
	5: "5-ый",
	6: "6=лй",
	7: "7-ой",
	8: "8-ой",
	9: "9-ый"
};

export const DND_SPELL_SCHOOLS = {
	nec: "Некромантия",
	evo: "Эвокация",
	div: "Прорицание",
	conj: "Воплощение",
	tra: "Трансмутация",
	ill: "Иллюзии",
	abj: "Преграждение",
	enc: "Очарование"
};
