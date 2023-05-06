<script lang="ts">
	import { title } from '$lib/config.js'
	import { formatDate } from '$lib/utils.js'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<div class="banner">
			<h1>{data.meta.title}</h1>
		</div>
		<p>{formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		font-size: 2.5rem;
		font-family: var(--font-heading);
		color: var(--text-3);
		text-transform: capitalize;
		margin-left: 7rem;
	}

	.banner {
		background-image: var(--postbg);
		padding-block: 2.75rem;
	}

	p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-block: var(--size-7);
		padding-bottom: var(--size-7);
		border-bottom: 1px solid var(--border);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-2);
	}
</style>
