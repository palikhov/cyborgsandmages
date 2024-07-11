import type { APIRoute } from "astro";
import { GROQ_KEY } from "astro:env/server"
import { createOpenAI } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const groq = createOpenAI({
		apiKey: GROQ_KEY,
		baseURL: "https://api.groq.com/openai/v1",
	});

	const { prompt } = await request.json();

	const article = JSON.parse(prompt);

	const body = article.body;
	const { title, author } = article.data;

	const result = await streamText({
		model: groq("llama3-8b-8192"),
		temperature: 0.4,
		maxTokens: 5000,
		system:
			`You are an expert assistant specializing in summarizing articles. Follow these guidelines:
1. Provide a concise summary in 2-5 paragraphs.
2. Start with a brief introduction giving context about the article.
3. Highlight key points or main ideas from the article.
4. Use HTML tags for the response formatting. Always split paragraphs with <p> tags.
5. Always respond in Russian language and don't use any other languages.`,
		prompt: `Title: ${title}. Author: ${author}. Article: ${body}`,
	});

	return new StreamingTextResponse(result.toAIStream());
};
