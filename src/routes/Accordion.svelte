<script lang="ts">
	import Projects from '$lib/components/projects.svelte'
	import About from '$lib/components/about.svelte'
	import Tools from '$lib/components/tools.svelte'
	import Keywords from '$lib/components/keywords.svelte'

	const options = [
		{ label: 'projects', component: Projects },
		{ label: 'about', component: About },
		{ label: 'tools', component: Tools },
		{ label: 'keywords', component: Keywords }
	]
	let isOpen = false
	function toggleAccord() {
		isOpen = !isOpen
	}
</script>

{#each options as option}
	<button class="accordion" on:click={toggleAccord} class:open={isOpen} aria-label="open accordion">
		<h2 class="gradient-text">{option.label}</h2>
		{#if isOpen}
			<span class="icon gradient-text">&minus;</span>
		{:else}
			<span class="icon gradient-text">&plus;</span>
		{/if}
	</button>
	<div class="panel" class:open-panel={isOpen}>
		<svelte:component this={option.component} />
	</div>
{/each}

<style>
	.accordion {
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

	button.accordion:hover,
	button.accordion:active {
		background-image: var(--background-2);
		border-radius: 4px 16px 16px 4px;
	}

	button.accordion:hover span.icon,
	button.accordion:active span.icon {
		opacity: 1;
		transition: all ease-in-out 400ms;
	}

	.panel {
		padding: 0;
		background-color: transparent;
		display: block;
		height: 0;
		overflow: hidden;
	}

	.open-panel {
		height: auto;
	}

	h2 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 10vw, 10rem);
		font-weight: var(--font-weight-8);
	}
	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		text-transform: lowercase;
	}
</style>
