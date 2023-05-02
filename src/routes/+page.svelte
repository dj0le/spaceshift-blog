<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<main>
	<div>
		<p>welcome to the</p>
		<h1 class="gradient-text">SPACEshift</h1>
		<p>now made with 100% stardust</p>
		<p>this page is a work in progress, expect things to be broken</p>
	</div>
	<div>
		<h2 class="gradient-text">projects</h2>
	</div>
	<div>
		<h2 class="gradient-text">designs</h2>
	</div>
	<div>
		<h2 class="gradient-text">tools</h2>
	</div>
	<div>
		<h2 class="gradient-text">keywords</h2>
	</div>

	<div>
		<h2 class="gradient-text">the blog</h2>
		<ul class="posts">
			{#each data.posts as post}
				<li class="post">
					<a href={post.slug} class="title">{post.title}</a>
					<p class="date">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}
	.post {
		max-inline-size: var(--size-content-3);
	}
	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
	div {
		margin-top: var(--size-7);
	}
	h1 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 15vw, 15rem);
		font-weight: var(--font-weight-9);
	}
	h2 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 10vw, 10rem);
		font-weight: var(--font-weight-8);
	}
	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		color: transparent;
	}
</style>
