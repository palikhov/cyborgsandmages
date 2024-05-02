import { any } from 'astro/zod';
import { defineCollection, z } from 'astro:content';
import { DND_SPELL_SCHOOLS, DND_SPELL_LEVELS } from 'src/consts';

/* SINGLE PAGES */
const singles = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().refine((val) => val.length <= 1000, {
			message: 'Описание не может быть длиннее 400 символов.'
		}),
		links: z
			.array(
				z.object({
					label: z.string(),
					href: z.string()
				})
			)
			.optional()
	})
});

/* POST PAGES */
const posts = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().refine((val) => val.length <= 400, {
				message: 'Описание не может быть длиннее 400 символов.'
			}),
			date: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			cover: image().optional(),
			author: z.string().default('Антон «Palant» Палихов'),
			translator: z.string().optional(),
			tags: z.array(z.string()),
			links: z
				.array(
					z.object({
						label: z.string(),
						href: z.string()
					})
				)
				.optional(),
			draft: z.boolean().default(false),
			headings: z.any().optional()
		})
});

/* GENERATORS */
const generators = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tables: z.array(
			z.object({
				table: z.string(),
				results: z.array(z.string())
			})
		)
	})
});

/* 5E CREATURES */
const creatures = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		source: z.string(),
		size: z.enum(['t', 's', 'm', 'l', 'h', 'g', 'a']),
		type: z.string(),
		subtype: z.string().optional(),
		alignment: z.enum(['lg', 'ng', 'cg', 'ln', 'tn', 'cn', 'le', 'ne', 'ce', 'u']),
		ac: z.object({
			value: z.number(),
			type: z.string().default('естественный доспех')
		}),
		hp: z.object({
			value: z.number(),
			max: z.number(),
			formula: z.string()
		}),
		speed: z.object({
			walk: z.number(),
			burrow: z.number().optional(),
			climb: z.number().optional(),
			crawl: z.number().optional(),
			fly: z.number().optional(),
			swim: z.number().optional()
		}),
		abilities: z.object({
			str: z.number(),
			dex: z.number(),
			con: z.number(),
			int: z.number(),
			wis: z.number(),
			cha: z.number()
		}),
		saves: z
			.object({
				str: z.number().optional(),
				dex: z.number().optional(),
				con: z.number().optional(),
				int: z.number().optional(),
				wis: z.number().optional(),
				cha: z.number().optional()
			})
			.optional(),
		skills: z
			.object({
				acr: z.number().optional(),
				ani: z.number().optional(),
				arc: z.number().optional(),
				ath: z.number().optional(),
				dec: z.number().optional(),
				his: z.number().optional(),
				ins: z.number().optional(),
				itm: z.number().optional(),
				inv: z.number().optional(),
				med: z.number().optional(),
				nat: z.number().optional(),
				prc: z.number().optional(),
				prf: z.number().optional(),
				per: z.number().optional(),
				rel: z.number().optional(),
				slt: z.number().optional(),
				ste: z.number().optional(),
				sur: z.number().optional()
			})
			.optional(),
		di: z.string().optional(),
		dr: z.string().optional(),
		dv: z.string().optional(),
		dc: z.string().optional(),
		senses: z.object({
			perception: z.number(),
			blindsight: z.number().optional(),
			darkvision: z.number().optional(),
			tremorsense: z.number().optional(),
			truesight: z.number().optional()
		}),
		languages: z.string().optional(),
		cr: z.union([z.string(), z.number()]),
		items: z.string().optional(),
		features: z
			.array(
				z.object({
					name: z.string(),
					description: z.string()
				})
			)
			.default([]),
		actions: z
			.array(
				z.object({
					name: z.string(),
					description: z.string()
				})
			)
			.default([])
	})
});

/* 5E ITEMS */
const items = defineCollection({
	schema: z.object({
		name: z.string(),
		source: z.string(),
		type: z.string(),
		subtype: z.string().optional(),
		rarity: z.enum(['c', 'u', 'r', 'v', 'l', 'a']).optional(),
		attunement: z.string().optional(),
		cost: z.number().optional(),
		currency: z.enum(['cp', 'sp', 'gp', 'ep', 'pp']).default('gp'),
		weight: z.number().optional(),
		property: z.string().optional()
	})
});

/* 5E SPELLS */
const spells = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		source: z.string().optional(),
		page: z.number(),
		level: z.nativeEnum(DND_SPELL_LEVELS),
		school: z.nativeEnum(DND_SPELL_SCHOOLS),
		time: z.array(
			z.object({
				number: z.number().optional(),
				unit: z.enum(['action', 'bonus', 'reaction', 'minute', 'hour', 'day', 'special'])
			})
		),
		range: z.object({
			type: z.enum(['point', 'line', 'cone', 'cube', 'sphere', 'hemisphere', 'cylinder', 'plane', 'self']),
			distance: z.object({
				type: z.enum(['feet', 'miles', 'sight']),
				amount: z.number()
			})
		}),
		components: z
			.object({
				v: z.boolean().default(false),
				s: z.boolean().default(false),
				m:
					z.object({
						text: z.string(),
						consume: z.boolean().default(false),
						cost: z.number().optional()
					}) || z.boolean().default(false)
			})
			.optional(),
		duration: z.array(
			z.object({
				type: z.enum(['instant', 'timed', 'permanent', 'special']),
				duration: z
					.object({
						type: z.enum(['instant', 'round', 'minute', 'hour', 'day', 'year', 'special']),
						amount: z.number()
					})
					.optional(),
				concentration: z.boolean().default(false),
				combat_concentration: z.boolean().default(false)
			})
		),
		entries: z.string()
	})
});

/* 5E FEATS */

export const collections = { singles, posts, generators, creatures, items, spells };
