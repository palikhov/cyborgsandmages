import { defineConfig, envField } from "astro/config";

import Icons from "unplugin-icons/vite";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

import { sitemapCopier } from "./sitemap-copier.ts";

// https://astro.build/config
export default defineConfig({
	site: "https://cyborgsandmages.com",
	output: "static",
	adapter: vercel({
		webAnalytics: {
			enabled: true
		}
	}),
	env: {
		schema: {
			GROQ_KEY: envField.string({ context: "server", access: "secret" })
		}
	},

	integrations: [
		svelte(),
		mdx({
			remarkRehype: {
				footnoteLabel: "Примечания"
			},
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: "append",
						test: ["h2", "h3"]
					}
				]
			],
			extendDefaultPlugins: true,
			syntaxHighlight: false
		}),
		tailwind(),
		sitemap(),
		sitemapCopier()
	],
	vite: {
		plugins: [
			Icons({
				compiler: "astro",
				scale: 1.5
			})
		]
	}
});
