<script lang="ts">
	import Projects from '$lib/components/projects.svelte'
	import About from '$lib/components/about.svelte'
	import Tools from '$lib/components/tools.svelte'
	import Keywords from '$lib/components/keywords.svelte'

	const items = [
		{ title: 'projects', content: Projects },
		{ title: 'about', content: About },
		{ title: 'tools', content: Tools },
		{ title: 'keywords', content: Keywords }
	]

	let isOpen = false

	function toggle() {
		isOpen = !isOpen
	}
</script>

<section>
	{#each items as { title, content }}
		<button class="drop-down" on:click={toggle} aria-label="open section">
			<h2 class="gradient-text">{title}</h2>
			{#if isOpen}
				<span class="icon gradient-text">&minus;</span>
			{:else}
				<span class="icon gradient-text">&plus;</span>
			{/if}
		</button>
		<div class="panel" class:open-panel={isOpen}>
			<svelte:component this={content} />
		</div>
	{/each}
</section>

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
</style>
