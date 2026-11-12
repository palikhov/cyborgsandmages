import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"posts">;

const formatTags = new Set(["перевод", "переклад"]);

function getTopicTags(post: Post) {
	return new Set(
		post.data.tags
			.map((tag) => tag.trim().toLowerCase())
			.filter((tag) => tag && !formatTags.has(tag))
	);
}

export function createRelatedPostLookup(posts: Post[], now = new Date()) {
	const postsByTag = new Map<string, Post[]>();

	for (const post of posts) {
		if (post.data.draft || !(post.data.date <= now)) continue;

		for (const tag of getTopicTags(post)) {
			const matches = postsByTag.get(tag);
			if (matches) matches.push(post);
			else postsByTag.set(tag, [post]);
		}
	}

	return (post: Post) => getRelatedPosts(post, postsByTag);
}

function getRelatedPosts(post: Post, postsByTag: Map<string, Post[]>) {
	const scores = new Map<Post, number>();

	for (const tag of getTopicTags(post)) {
		const matches = postsByTag.get(tag);
		if (!matches) continue;

		// Give more weight to specific topics with fewer published articles.
		const weight = 1 / Math.sqrt(matches.length);
		for (const candidate of matches) {
			if (candidate.slug === post.slug) continue;
			scores.set(candidate, (scores.get(candidate) ?? 0) + weight);
		}
	}

	return [...scores]
		.sort(([a, scoreA], [b, scoreB]) =>
			scoreB - scoreA || b.data.date.getTime() - a.data.date.getTime() || a.slug.localeCompare(b.slug)
		)
		.slice(0, 3)
		.map(([{ slug, data }]) => ({ slug, title: data.title }));
}
