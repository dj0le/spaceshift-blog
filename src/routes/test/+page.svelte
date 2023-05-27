<script lang="ts">
	import { Accordion, AccordionItem } from '$lib/components/accordion'
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
</script>

<Accordion>
	{#each items as item}
		<AccordionItem>
			<svelte:fragment slot="title">{item.title}</svelte:fragment>
			<svelte:fragment slot="content"><svelte:component this={item.content} /></svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion>

<!-- {#each items as { title, content }}
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
{/each} -->

<style>
</style>
