import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const posts = (await getCollection("posts"))
		.filter((post) => new Date(post.data.date) <= new Date())
		.sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

	return rss({
		title: "Киборги и Чародеи",
		description: "D&D и Настольные Ролевые Игры – Статьи, Ресурсы, Материалы, Советы, Переводы",
		site: context.site,
		items: posts.flatMap((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/posts/${post.slug}/`
		})),
		stylesheet: "/rss/pretty-feed-v3.xsl"
	});
}
