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
			<div class="post">
				<p class="title">{data.meta.number}</p>
				<p class="title">{data.meta.title}</p>
			</div>
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
	.post {
		display: grid;
		grid-template-columns: 10% 1fr;
		align-items: center;
	}
	.banner {
		background-image: var(--banner);
		background-size: contain;
		padding-block: 4rem;
	}
	p {
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-heading);
		font-weight: var(--font-weight-8);
		color: var(--text-3);
		margin-left: 2.5rem;
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
	.title {
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-heading);
		font-weight: var(--font-weight-8);
		text-transform: capitalize;
		color: var(--text-3);
		margin-left: 4rem;
	}
	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-2);
	}
	@media (max-width: 768px) {
		.banner {
			background-image: var(--banner);
			padding-block: 2.5rem;
		}
		.post {
			grid-template-columns: 20% 1fr;
		}
		p {
			margin-left: 2.25rem;
		}
		.title {
			margin-left: 2rem;
		}
		.tags {
			flex-wrap: wrap;
			gap: var(--size-2);
			margin-block: var(--size-4);
			padding-bottom: 0;
			border-bottom: 1px solid var(--border);
		}
		.tags > * {
			padding: var(--size-2) var(--size-3);
			border-radius: var(--radius-2);
		}
	}
</style>
