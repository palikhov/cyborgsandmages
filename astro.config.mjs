import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Icons from 'unplugin-icons/vite';
import svelte from '@astrojs/svelte';
import rehypeMermaid from 'rehype-mermaidjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://cyborgsandmages.com',
	integrations: [
		svelte(),
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
				],
				[
					rehypeMermaid,
					{
						mermaidConfig: {
							theme: 'dark'
						}
					}
				]
			],
			extendDefaultPlugins: true,
			syntaxHighlight: false
		}),
		tailwind(),
		sitemap()
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
