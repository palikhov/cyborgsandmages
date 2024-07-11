<script lang="ts">
	import { useCompletion } from '@ai-sdk/svelte';

	const { input, handleSubmit, completion } = useCompletion({
		api: '/api/qa'
	});

	export let article: string;

	$: input.set(JSON.stringify(article));

	const icon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-ai"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 16v-6a2 2 0 1 1 4 0v6" /><path d="M8 13h4" /><path d="M16 8v8" /></svg>`;
</script>

<div class="grid gap-2 pb-2">
	{#if $completion}
		<h3>Краткое содержание статьи</h3>
		<div class="border border-brand-ivory rounded px-4 font-sans prose text-white"><p>{@html $completion}</p></div>
	{:else}
		<form on:submit={handleSubmit}>
			<span class="text-sm font-sans">Нет времени читать всю статью?</span>
			<button
				type="submit"
				class="bg-brand-crimson p-2 rounded text-white font-medium font-sans flex items-center text-sm"
			>
				{@html icon} <span class="ml-0.5">Резюмировать</span></button
			>
		</form>
	{/if}
</div>
