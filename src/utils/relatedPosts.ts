import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"posts">;

const formatTags = new Set(["перевод", "переклад"]);
const authorAliases = new Map([
	["alexandrian", "justin alexander"],
	["the alexandrian", "justin alexander"],
	["джастин александер", "justin alexander"],
	["angry gm", "the angry gm"],
	["эд гринвуд", "ed greenwood"],
	["sly flourish", "mike shea"],
	["palant", "антон palant палихов"]
]);

function normalizeAuthor(name: string) {
	const normalized = name.trim().toLowerCase().replace(/["«»“”<>]/g, "").replace(/\s+/g, " ");
	return authorAliases.get(normalized) ?? normalized;
}

export function createRelatedPostLookup(posts: Post[], now = new Date()) {
	const authorNames = new Set(posts.map((post) => normalizeAuthor(post.data.author)));
	const topicsByPost = new Map<Post, Set<string>>();
	const postsByTopic = new Map<string, Post[]>();

	for (const post of posts) {
		const topics = new Set(
			post.data.tags
				.map((tag) => tag.trim().toLowerCase())
				.filter((tag) => tag && !formatTags.has(tag) && !authorAliases.has(tag) && !authorNames.has(normalizeAuthor(tag)))
		);
		topicsByPost.set(post, topics);
		if (post.data.draft || !(post.data.date <= now)) continue;

		for (const topic of topics) {
			const matches = postsByTopic.get(topic);
			if (matches) matches.push(post);
			else postsByTopic.set(topic, [post]);
		}
	}

	return (post: Post) => getRelatedPosts(post, topicsByPost.get(post) ?? [], postsByTopic);
}

function getRelatedPosts(post: Post, topics: Iterable<string>, postsByTopic: Map<string, Post[]>) {
	const scores = new Map<Post, { score: number; sharedTopics: Map<string, number> }>();
	const sourceAuthor = normalizeAuthor(post.data.author);

	for (const topic of topics) {
		const matches = postsByTopic.get(topic);
		if (!matches) continue;

		// Give more weight to specific topics with fewer published articles.
		const weight = 1 / Math.sqrt(matches.length);
		for (const candidate of matches) {
			if (candidate.slug === post.slug) continue;
			let match = scores.get(candidate);
			if (!match) {
				match = { score: 0, sharedTopics: new Map() };
				scores.set(candidate, match);
			}
			match.score += weight;
			match.sharedTopics.set(topic, weight);
		}
	}

	const candidates = [...scores]
		.map(([entry, { score, sharedTopics }]) => {
			const author = normalizeAuthor(entry.data.author);
			// Recognize numbered series from slugs without requiring new frontmatter.
			const series = entry.slug.toLowerCase().replace(/-part-(?:\d+[a-z]?|[ivxlcdm]+)(?:-.*)?$|-\d+[a-z]?$/, "");
			const sameAuthor = author && author !== "unknown" && author === sourceAuthor;
			return { entry, author, series, score: sameAuthor ? score * 1.05 : score, sharedTopics };
		})
		.sort((a, b) =>
			b.score - a.score ||
			b.entry.data.date.getTime() - a.entry.data.date.getTime() ||
			a.entry.slug.localeCompare(b.entry.slug)
		)
		.slice(0, 12);

	const selected: Post[] = [];
	const coveredTopics = new Set<string>();
	const selectedAuthors = new Set<string>();
	const selectedSeries = new Set<string>();

	while (selected.length < 3 && candidates.length > 0) {
		let bestIndex = 0;
		if (selected.length > 0) {
			let bestScore = -Infinity;
			for (const [index, candidate] of candidates.entries()) {
				let newTopicWeight = 0;
				for (const [topic, weight] of candidate.sharedTopics) {
					if (!coveredTopics.has(topic)) newTopicWeight += weight;
				}
				const authorPenalty = selectedAuthors.has(candidate.author) ? 0.15 * candidate.score : 0;
				const seriesPenalty = selectedSeries.has(candidate.series) ? 0.20 * candidate.score : 0;
				const rank = candidate.score + 0.20 * newTopicWeight - authorPenalty - seriesPenalty;
				if (rank > bestScore) {
					bestIndex = index;
					bestScore = rank;
				}
			}
		}

		const [candidate] = candidates.splice(bestIndex, 1);
		selected.push(candidate.entry);
		for (const topic of candidate.sharedTopics.keys()) coveredTopics.add(topic);
		if (candidate.author && candidate.author !== "unknown") selectedAuthors.add(candidate.author);
		selectedSeries.add(candidate.series);
	}

	return selected.map(({ slug, id, data }) => ({
		slug,
		category: id.split("/")[0],
		title: data.title,
		description: data.description,
		cover: data.cover
	}));
}
