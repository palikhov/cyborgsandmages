export const SITE_TITLE = 'Киборги и Чародеи';

export const SITE_DESCRIPTION = 'D&D и Настольные Ролевые Игры – Статьи, Ресурсы, Материалы, Советы, Переводы';

export const SITE_NAVIGATION = [
	{
		label: 'Главная',
		href: '/'
	},
	{
		label: 'Статьи',
		href: '/articles/1'
	},
	{
		label: 'Core d20',
		href: '/core-d20/1'
	},
	{
		label: 'Переводы',
		href: '/translations/1'
	},
	{
		label: 'Ресурсы',
		href: '/resources'
	},
	{
		label: 'Перевод SRD',
		href: '/srd/1'
	}
];

export const SITE_POST_CATEGORIES = [
	{
		path: 'articles',
		title: 'Статьи',
		description: 'Статьи про настольные ролевые игры - анализ механик, анализ лора, советы и прочее'
	},
	{
		path: 'translations',
		title: 'Переводы',
		description: 'Переводы статей с других языков.'
	},
	{
		path: 'core-d20',
		title: 'Core d20 RPG',
		description: 'Core d20 RPG — наш проект изменения и расширения D&D 5e.'
	},
	{
		path: 'srd',
		title: 'Перевод SRD 5.1',
		description: 'Наш проект по переводу SRD 5.1 - бесплатный игромехачнический движок Подземелий и Драконов'
	}
];

export const SITE_FRIENDS = [
	{
		label: 'Long Story Short',
		href: 'https://longstoryshort.app/',
		favicon: 'https://longstoryshort.app/favicon.ico'
	},
	{
		label: 'DnD5 Club',
		href: 'https://ttg.club/',
		favicon: 'https://ttg.club/favicon_ttg_v3.svg'
	},
	{
		label: 'DnD.su',
		href: 'https://dnd.su/',
		favicon: 'https://dnd.su/favicon.ico'
	},
	{
		label: 'Переклад SRD 5.1',
		href: 'https://5esrd.kyiv.ua/',
		favicon: 'https://5esrd.kyiv.ua/public/favicon.ico'
	},
	{
		label: 'D&D в Україні',
		href: 'https://dnd.in.ua/',
		favicon: '/images/decoration/ua.svg'
	}
];

// 5E CONSTS

export const DND_ALIGNMENTS = {
	lg: 'принципиальное доброе',
	ng: 'нейтральное доброе',
	cg: 'хаотичное доброе',
	ln: 'принципиальное нейтральное',
	tn: 'нейтральное',
	cn: 'хаотичное нейтральное',
	le: 'принципиальное злое',
	ne: 'нейтральное злое',
	ce: 'хаотичное злое',
	u: 'без мировоззрения',
	any: 'любое мировоззрение'
};

export const DND_TYPES = {
	aberration: 'аберрация',
	beast: 'животное',
	celestial: 'небожитель',
	construct: 'конструкция',
	dragon: 'дракон',
	elemental: 'элементаль',
	fey: 'фея',
	fiend: 'исчадие',
	giant: 'великан',
	humanoid: 'гуманоид',
	monstrosity: 'монстр',
	ooze: 'жижа',
	plant: 'растение',
	undead: 'нежить'
};

export const DND_SIZES = {
	t: 'маленький',
	s: 'небольшой',
	m: 'средний',
	l: 'крупный',
	h: 'огромный',
	g: 'исполинский',
	a: 'любой'
};

export const DND_RARITY = {
	c: 'обычный',
	u: 'необычный',
	r: 'редкий',
	v: 'крайне редкий',
	l: 'легендарный',
	a: 'артефакт'
};

export const DND_CURRENCY = {
	cp: 'мм',
	sp: 'см',
	gp: 'зм',
	ep: 'эм',
	pp: 'пм'
};

export const spelllevel = {
	cantrip: 'заговор',
	first: '1-ый',
	second: '2-ой',
	third: '3-ий',
	fourth: '4-ый',
	fifth: '5-ый',
	sixth: '6=лй',
	seventh: '7-ой',
	eigth: '8-ой',
	ninth: '9-ый'
};
