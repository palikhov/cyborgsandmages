import { defineCollection, z } from 'astro:content';

/* SINGLE PAGES */
const singles = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().refine((val) => val.length <= 400, {
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
			headings: z
				.array(
					z.object({
						depth: z.number(),
						slug: z.string(),
						text: z.string()
					})
				)
				.optional(),
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

/* 5E TYPES */

/* CREATURES */
const creatures = defineCollection({
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

export const collections = { singles, posts, creatures };
