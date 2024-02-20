import { defineConfig } from 'astro/config';

import Icons from 'unplugin-icons/vite';
import keystatic from '@keystatic/astro';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	site: 'https://cyborgsandmages.com',
	output: 'hybrid',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		}
	}),
	integrations: [
		svelte(),
		react(),
		mdx({
			remarkRehype: {
				footnoteLabel: 'Примечания'
			},
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'append',
						test: ['h2', 'h3']
					}
				]
			],
			extendDefaultPlugins: true,
			syntaxHighlight: false
		}),
		tailwind(),
		keystatic(),
		sitemap({
			filter: (page) =>
				page !== 'https://cyborgsandmages.com/keystatic' && page !== 'https://cyborgsandmages.com/keystatic/'
		}),
		...(process.env.ENABLE_KEYSTATIC ? [keystatic()] : []),
		,
	],
	vite: {
		plugins: [
			Icons({
				compiler: 'astro',
				scale: 1.5
			})
		]
	}
});
