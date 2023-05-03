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
		<h1 class="gradient-text">the blog</h1>
		<ul class="posts">
			{#each data.posts as post}
				<li class="post">
					<div class="banner">
						<span><p>01</p></span>
						<a href={post.slug} class="title">{post.title}</a>
					</div>
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
		border: 2px solid orange;
	}
	.post {
		max-inline-size: var(--size-content-3);
		border: 2px solid blue;
	}
	.banner {
		background-image: url('./postbanner4.svg');
		padding-block: 1.9rem;
		background-size: 400px;
	}
	.title {
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-heading);
		color: var(--text-3);
		text-transform: capitalize;
		margin-left: 4rem;
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
	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
</style>
