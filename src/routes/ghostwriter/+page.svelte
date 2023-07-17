<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1 class="gradient-text">ghostwriter</h1>
<p class="subtext">Wanna read a book co-written with an LLM?</p>
<ul class="posts">
	{#each data.posts as post}
		<div class="banner">
			<li class="post">
				<p>{post.number}</p>
				<a href={post.slug} class="title">{post.title}</a>
			</li>
		</div>
	{/each}
</ul>

<style>
	.post {
		display: grid;
		grid-template-columns: 10% 1fr;
	}
	.banner {
		background-image: var(--banner);
		background-size: contain;
		padding-block: 4rem;
	}
	.title {
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-heading);
		font-weight: var(--font-weight-8);
		text-transform: capitalize;
		color: var(--text-3);
		margin-left: 4rem;
	}
	p {
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-heading);
		font-weight: var(--font-weight-8);
		color: var(--text-3);
		margin-left: 2.5rem;
	}
	.subtext {
		color: var(--brand);
		margin: 0 0.5rem;
	}
	h1 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 11vw, 13rem);
		font-weight: var(--font-weight-9);
	}
	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		text-transform: uppercase;
	}

	@media (max-width: 768px) {
		.banner {
			background-image: var(--banner);
			padding-block: 3.5rem;
		}
		.post {
			grid-template-columns: 20% 1fr;
		}
		h1 {
			text-align: center;
		}
		p {
			margin-left: 2.25rem;
		}
		.title {
			margin-left: 1rem;
		}
	}
</style>
