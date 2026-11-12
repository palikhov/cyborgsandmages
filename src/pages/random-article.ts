import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async () => {
	const now = new Date();
	const posts = await getCollection("posts", ({ data }) => !data.draft && new Date(data.date) <= now);
	const post = posts[Math.floor(Math.random() * posts.length)];

	return new Response(null, {
		status: 302,
		headers: {
			Location: post ? `/posts/${post.slug}/` : "/articles/1",
			"Cache-Control": "no-store"
		}
	});
};
