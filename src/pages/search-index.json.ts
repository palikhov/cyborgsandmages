import { getCollection } from "astro:content";
import { plainText, type SearchDocument } from "../utils/search";

export const prerender = true;

// MDX collection entries can omit `body` in production. Read the source
// explicitly so full-text search works in both development and static output.
const sources = import.meta.glob<string>("../content/posts/**/*.{md,mdx}", {
	query: "?raw",
	import: "default",
	eager: true
});

export async function GET() {
	const now = new Date();
	const posts = await getCollection("posts", ({ data }) => !data.draft && data.date <= now);
	const documents: SearchDocument[] = posts.map((post) => {
		const source = sources[`../content/posts/${post.id}`];
		if (typeof source !== "string") {
			throw new Error(`Search index: source file not found for ${post.id}`);
		}
		return {
			title: post.data.title,
			url: `/posts/${post.slug}/`,
			description: post.data.description,
			category: post.id.split("/")[0],
			tags: post.data.tags,
			text: plainText(source)
		};
	});
	return new Response(JSON.stringify(documents), {
		headers: { "Content-Type": "application/json; charset=utf-8" }
	});
}
