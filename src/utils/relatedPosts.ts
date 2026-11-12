import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"posts">;
type Candidate = {
	entry: Post;
	author: string;
	series: string;
	score: number;
	sharedTopics: Map<string, number>;
};

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
	const published = new Set<Post>();

	for (const post of posts) {
		const topics = new Set(
			post.data.tags
				.map((tag) => tag.trim().toLowerCase())
				.filter((tag) => tag && !formatTags.has(tag) && !authorAliases.has(tag) && !authorNames.has(normalizeAuthor(tag)))
		);
		topicsByPost.set(post, topics);
		if (post.data.draft || !(post.data.date <= now)) continue;
		published.add(post);

		for (const topic of topics) {
			const matches = postsByTopic.get(topic);
			if (matches) matches.push(post);
			else postsByTopic.set(topic, [post]);
		}
	}

	// Seed every first slot before balancing the remaining slots across the catalog.
	const selections = new Map<Post, Candidate[]>();
	const appearances = new Map<Post, number>();
	const pools = [...topicsByPost]
		.sort(([a], [b]) => a.slug.localeCompare(b.slug))
		.map(([post, topics]) => ({ post, candidates: getCandidates(post, topics, postsByTopic) }));

	for (const { post, candidates } of pools) {
		selections.set(post, []);
		const first = candidates.shift();
		if (first) addRecommendation(post, first);
	}

	for (const slot of [1, 2]) {
		for (const { post, candidates } of pools) {
			if (published.has(post) && candidates.length > 0) selectRecommendation(post, candidates, slot === 2);
		}
	}
	for (const { post, candidates } of pools) {
		if (published.has(post)) continue;
		if (candidates.length > 0) selectRecommendation(post, candidates, false);
		if (candidates.length > 0) selectRecommendation(post, candidates, true);
	}

	return (post: Post) => (selections.get(post) ?? []).map(({ entry: { slug, id, data } }) => ({
		slug,
		category: id.split("/")[0],
		title: data.title,
		description: data.description,
		cover: data.cover
	}));

	function addRecommendation(post: Post, candidate: Candidate) {
		selections.get(post)!.push(candidate);
		if (published.has(post)) {
			appearances.set(candidate.entry, (appearances.get(candidate.entry) ?? 0) + 1);
		}
	}

	function selectRecommendation(post: Post, candidates: Candidate[], lastSlot: boolean) {
		const selected = selections.get(post)!;
		const coveredTopics = new Set(selected.flatMap(({ sharedTopics }) => [...sharedTopics.keys()]));
		const minimumRelevance = candidates[0].score * 0.55;
		let bestIndex = 0;
		let bestRank = -Infinity;

		for (const [index, candidate] of candidates.entries()) {
			if (candidate.score < minimumRelevance) break;
			let newTopicWeight = 0;
			for (const [topic, weight] of candidate.sharedTopics) {
				if (!coveredTopics.has(topic)) newTopicWeight += weight;
			}
			const knownAuthor = candidate.author && candidate.author !== "unknown";
			const repeatsAuthor = knownAuthor && selected.some(({ author }) => author === candidate.author);
			const repeatsSeries = selected.some(({ series }) => series === candidate.series);
			const reciprocal = selections.get(candidate.entry)?.some(({ entry }) => entry === post);
			const exposure = appearances.get(candidate.entry) ?? 0;
			const exposurePenalty = (lastSlot ? 0.50 : 0.30) * exposure / (exposure + 3);
			const penalty = exposurePenalty
				+ (repeatsAuthor ? 0.15 : 0)
				+ (repeatsSeries ? 0.20 : 0)
				+ (reciprocal ? 0.28 : 0);
			const rank = candidate.score * Math.max(0.15, 1 - penalty) + (lastSlot ? 0.40 : 0.20) * newTopicWeight;
			if (rank > bestRank) {
				bestIndex = index;
				bestRank = rank;
			}
		}

		const [candidate] = candidates.splice(bestIndex, 1);
		addRecommendation(post, candidate);
	}
}

function getCandidates(post: Post, topics: Iterable<string>, postsByTopic: Map<string, Post[]>): Candidate[] {
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

	return [...scores]
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
		.slice(0, 24);
}
