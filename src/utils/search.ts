export interface SearchDocument {
	title: string;
	url: string;
	description: string;
	category: string;
	tags: string[];
	text: string;
}

export const normalize = (text: string) => text.toLocaleLowerCase("ru").replace(/ё/g, "е");

// A small suffix heuristic, not a full morphological dictionary.
function stem(word: string) {
	return /^[а-я]{5,}$/.test(word)
		? word.replace(/(иями|ями|ами|ого|ему|ому|ыми|ими|ая|яя|ое|ее|ые|ие|ый|ий|ой|ов|ев|ам|ям|ах|ях|ом|ем|ы|и|а|я|у|ю|е|о)$/, "")
		: word;
}

export function words(text: string) {
	return (normalize(text).match(/[\p{L}\p{N}]+/gu) ?? []).map(stem);
}

export function prepareSearch(documents: SearchDocument[]) {
	return documents.map((document) => ({
		document,
		title: words(document.title),
		tags: words(document.tags.join(" ")),
		body: words(`${document.description} ${document.text}`)
	}));
}

export function searchDocuments(index: ReturnType<typeof prepareSearch>, query: string, category = "") {
	const terms = [...new Set(words(query))];
	if (!terms.length) return [];
	const matches = (tokens: string[], term: string) => tokens.some((token) => token.startsWith(term));
	return index.flatMap(({ document, title, tags, body }) => {
		if (category && document.category !== category) return [];
		let score = 0;
		for (const term of terms) {
			const weight = matches(title, term) ? 10 : matches(tags, term) ? 5 : matches(body, term) ? 1 : 0;
			if (!weight) return [];
			score += weight;
		}
		return [{ document, score }];
	}).sort((a, b) => b.score - a.score || a.document.title.localeCompare(b.document.title, "ru"));
}

export function excerpt(text: string, query: string) {
	const terms = words(query);
	const normalized = normalize(text);
	const positions = terms.map((term) => normalized.indexOf(term)).filter((position) => position >= 0);
	let start = positions.length ? Math.max(0, Math.min(...positions) - 70) : 0;
	if (start > 0) {
		const space = text.indexOf(" ", start);
		if (space >= 0) start = space + 1;
	}
	return `${start ? "…" : ""}${text.slice(start, start + 240).trim()}${text.length > start + 240 ? "…" : ""}`;
}

export function plainText(markdown: string) {
	return markdown
		.replace(/^(?:import|export)\s[^\n]*(?:\n|$)/gm, " ")
		.replace(/<!--[\s\S]*?-->/g, " ")
		.replace(/```[^\n]*\n[\s\S]*?```/g, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
		.replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1")
		.replace(/^\s*\[[^\]]+\]:[^\n]*$/gm, " ")
		.replace(/[#*_`~>|]/g, " ")
		.replace(/\s+/g, " ").trim();
}
