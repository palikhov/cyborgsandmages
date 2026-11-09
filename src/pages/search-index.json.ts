import { getCollection } from "astro:content";
import { plainText, type SearchDocument } from "../utils/search";

export const prerender = true;

export async function GET() {
	const now = new Date();
	const posts = await getCollection("posts", ({ data }) => !data.draft && data.date <= now);
	const documents: SearchDocument[] = posts.map((post) => ({
		title: post.data.title,
		url: `/posts/${post.slug}/`,
		description: post.data.description,
		category: post.id.split("/")[0],
		tags: post.data.tags,
		text: plainText(post.body)
	}));
	return new Response(JSON.stringify(documents), {
		headers: { "Content-Type": "application/json; charset=utf-8" }
	});
}
