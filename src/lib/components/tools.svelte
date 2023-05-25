<script>
	let isOpen = false

	function toggle() {
		isOpen = !isOpen
	}

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

<button class="drop-down" on:click={toggle} aria-label="open section">
	<h2 class="gradient-text">tools</h2>
	{#if isOpen}
		<span class="icon gradient-text">&minus;</span>
	{:else}
		<span class="icon gradient-text">&plus;</span>
	{/if}
</button>
<div class="panel" class:open-panel={isOpen}>
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
</div>

<style>
	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.drop-down {
		padding-right: var(--size-6);
		width: 62%;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		background-color: transparent;
		text-align: left;
		cursor: pointer;
		transition: 0.4s;
	}

	span.icon {
		font-size: clamp(2rem, 10vw, 10rem);
		font-weight: var(--font-weight-8);
		opacity: 0;
	}

	button.drop-down:hover,
	button.drop-down:active {
		background-image: var(--background-2);
		border-radius: 4px 16px 16px 4px;
	}

	button.drop-down:hover span.icon,
	button.drop-down:active span.icon {
		opacity: 1;
		transition: all ease-in-out 400ms;
	}

	.panel {
		height: 0;
		padding: 0;
		opacity: 0;
		left: 0;
		margin: auto;
		width: 0;
		background-color: transparent;
		display: block;
		overflow: hidden;
		transition: all 350ms ease-in-out;
	}

	.open-panel {
		margin-top: 2rem;
		margin-bottom: 6rem;
		height: auto;
		opacity: 1;
		right: 0;
		width: 100%;
	}

	h2 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 10vw, 10rem);
		font-weight: var(--font-weight-8);
	}
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
