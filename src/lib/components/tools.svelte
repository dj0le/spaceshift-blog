<script>
	const tools = [
		{
			label: 'primary',
			contents: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Python' }]
		},
		{
			label: 'technical',
			contents: [
				{ name: 'Sveltekit' },
				{ name: 'FastAPI' },
				{ name: 'SQLite' },
				{ name: 'Typescript' },
				{ name: 'PostGres' },
				{ name: 'Wordpress' },
				{ name: 'Github' },
				{ name: 'Ollama' }
			]
		},
		{
			label: 'creative',
			contents: [
				{ name: 'Figma' },
				{ name: 'Penpot' },
				{ name: 'Photoshop' },
				{ name: 'Illustrator' },
				{ name: 'Inkscape' },
				{ name: 'Comfy UI' }
			]
		}
	]
</script>

<h3>My daily drivers</h3>

{#each tools as tool}
	<div><h4>{tool.label}</h4></div>
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
		margin-top: 16px;
		margin-bottom: 16px;
		color: var(--brand);
		font-weight: 400;
	}
	h4 {
		margin-top: 40px;
		margin-bottom: 16px;
		text-transform: capitalize;
		color: var(--text-2);
		font-weight: 800;
	}
	@media only screen and (max-width: 767px) {
		.cards {
			grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
			max-width: 100%;
		}
		h3 {
			margin-top: 0;
		}
	}
</style>
