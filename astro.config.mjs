import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://cyborgsandmages.com',
	integrations: [
		mdx({
			remarkRehype: { footnoteLabel: 'Примечания' }
		}),
		tailwind(),
		sitemap()
	],
	experimental: {
		assets: true
	},
	vite: {
		plugins: [
			Icons({
				compiler: 'astro',
				scale: 1.5
			})
		]
	}
});
