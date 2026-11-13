import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import placeholder from "~assets/branding/placeholder.webp";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
	const now = new Date();
	const posts = await getCollection("posts", ({ data }) => !data.draft && new Date(data.date) <= now);
	const current = url.searchParams.get("current");
	const candidates = posts.length > 1 ? posts.filter(({ slug }) => slug !== current) : posts;
	const post = candidates[Math.floor(Math.random() * candidates.length)];
	const href = post ? `/posts/${post.slug}/` : "/articles/1";

	if (url.searchParams.get("preview") === "1") {
		const headers = { "Cache-Control": "no-store" };
		if (!post) return new Response(null, { status: 404, headers });
		return Response.json({
			slug: post.slug,
			title: post.data.title,
			author: post.data.author,
			description: post.data.description,
			cover: (post.data.cover ?? placeholder).src,
			isPlaceholderCover: !post.data.cover,
			href
		}, { headers });
	}

	return new Response(null, {
		status: 302,
		headers: {
			Location: href,
			"Cache-Control": "no-store"
		}
	});
};
