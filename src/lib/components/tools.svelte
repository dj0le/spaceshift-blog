<script>
	const tools = [
		{
			label: 'primary',
			contents: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JS' }]
		},
		{
			label: 'secondary',
			contents: [
				{ name: 'Svelte' },
				{ name: 'Sveltekit' },
				{ name: 'Figma' },
				{ name: 'Svelte' },
				{ name: 'Sveltekit' },
				{ name: 'Figma' }
			]
		},
		{
			label: 'tertiary',
			contents: [{ name: 'WSL' }, { name: 'CLI' }, { name: 'Code' }]
		}
	]
</script>

<p class="subtitle">more than words</p>

<h2>Core competencies</h2>

<h2>Software</h2>

{#each tools as tool}
	<div><h3>{tool.label}</h3></div>
	<div class="cards">
		{#each tool.contents as content}
			<div class="card-text">
				<p>{content.name}</p>
			</div>
		{/each}
	</div>
{/each}

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 1rem;
		max-width: 65%;
	}
	.card-text {
		background-image: var(--background-2);
		border: 2px solid var(--brand);
		border-radius: 8px;
		padding: 64px 16px 16px 8px;
		text-align: end;
		font-weight: 800;
	}
	h3 {
		margin-top: 40px;
		margin-bottom: 16px;
		text-transform: capitalize;
		color: var(--brand);
		font-weight: 800;
	}
</style>
