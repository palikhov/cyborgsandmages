import type { APIRoute } from "astro";
export const prerender = false;

import { createOpenAI } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';

const GROQ_KEY = import.meta.env.GROQ_KEY;

export const POST: APIRoute = async ({ request }) => {
  const groq = createOpenAI({
    apiKey: GROQ_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });
  
  const { prompt } = await request.json();

	const result = await streamText({
		model: groq("llama3-8b-8192"),
		temperature: 0,
		maxTokens: 2000,
		system:
			"You're an assistant that summarizes the content of the provided article. Always reply in Russian language.",
		prompt: `Article: ${prompt}`,
	});

	return new StreamingTextResponse(result.toAIStream()); 
};
