import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
	const blog = await getCollection('posts');

	return rss({
		title: 'Киборги и Чародеи',
		description: 'D&D и Настольные Ролевые Игры – Статьи, Ресурсы, Материалы, Советы, Переводы',
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/posts/${post.slug}/`
		})),
		stylesheet: '/rss/pretty-feed-v3.xsl'
	});
}
