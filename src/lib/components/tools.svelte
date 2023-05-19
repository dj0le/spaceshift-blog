<script>
	const tools = [
		{
			label: 'primary',
			contents: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }]
		},
		{
			label: 'technical',
			contents: [
				{ name: 'Svelte' },
				{ name: 'Sveltekit' },
				{ name: 'VS Code' },
				{ name: 'Github' },
				{ name: 'Databases' },
				{ name: 'Wordpress' },
				{ name: 'Typescript' }
			]
		},
		{
			label: 'creative',
			contents: [
				{ name: 'Figma' },
				{ name: 'Photoshop' },
				{ name: 'Illustrator' },
				{ name: 'Inkscape' },
				{ name: 'After Effects' }
			]
		}
	]
</script>

<h2>Check out my daily drivers</h2>

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
	@media only screen and (max-width: 767px) {
		.cards {
			grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
			max-width: 100%;
		}
		h2 {
			font-size: var(--font-size-4);
		}
	}
</style>
