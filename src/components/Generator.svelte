<script>
	export let data;

	const { title, description, tables } = data;

	let selectedTable = '';
	let selectedElement = '';

	function roll() {
		selectedTable = tables[Math.floor(Math.random() * tables.length)];
		selectedElement = selectedTable.results[Math.floor(Math.random() * selectedTable.results.length)];
	}
</script>

<div class="rounded border-2 border-brand-gold bg-brand-mist p-2 not-prose">
	<h4 class="my-0 py-0 !text-brand-ivory !font-bold">Генератор: {title}</h4>
	<p>{description}</p>

	<button
		class="bg-brand-crimson text-white font-sans px-2 py-0.5 rounded uppercase font-medium my-2 items-center flex"
		on:click={roll}
		><span
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="inline-flex mr-1"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
				<circle cx="15.5" cy="7.5" r=".5" fill="currentColor" />
				<circle cx="8.5" cy="12" r=".5" fill="currentColor" />
				<circle cx="15.5" cy="12" r=".5" fill="currentColor" />
				<circle cx="15.5" cy="16.5" r=".5" fill="currentColor" />
				<circle cx="8.5" cy="16.5" r=".5" fill="currentColor" />
			</svg></span
		>Бросок!</button
	>

	{#if selectedTable && selectedElement}
		<div class="font-sans text-white">
			<p><strong>Таблица:</strong> {selectedTable.table}</p>
			<p><strong>Результат:</strong> {selectedElement}</p>
		</div>
	{/if}
</div>
