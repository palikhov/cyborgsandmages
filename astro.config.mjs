import { defineConfig, envField } from "astro/config";

import Icons from "unplugin-icons/vite";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	site: "https://cyborgsandmages.com",
	output: "hybrid",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	experimental: {
    env: {
      schema: {
				GROQ_KEY: envField.string({ context: "server", access: "secret" }),
			},
    },
  },
	integrations: [
		svelte(),
		mdx({
			remarkRehype: {
				footnoteLabel: "Примечания",
			},
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: "append",
						test: ["h2", "h3"],
					},
				],
			],
			extendDefaultPlugins: true,
			syntaxHighlight: false,
		}),
		tailwind(),
		sitemap(),
	],
	vite: {
		plugins: [
			Icons({
				compiler: "astro",
				scale: 1.5,
			}),
		],
	},
});
