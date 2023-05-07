<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1 class="gradient-text">blog</h1>
<ul class="posts">
	{#each data.posts as post}
		<div class="banner">
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<div class="line" />
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		</div>
	{/each}
</ul>

<style>
	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--size-3);
	}
	.posts:nth-child(odd) {
		border: 2px solid green;
	}
	.post {
		max-inline-size: var(--size-content-3);
	}

	.banner {
		background-image: var(--blogbanner);
		padding-block: 6.5rem;
		margin-top: var(--size-7);
	}
	.title {
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-heading);
		font-weight: var(--font-weight-8);
		text-transform: capitalize;
	}
	.date {
		text-transform: uppercase;
		margin-top: var(--size-3);
	}
	.description {
		margin-top: var(--size-4);
	}
	.line {
		margin-top: var(--size-2);
		border-top: 4px solid var(--text-3);

		width: 50%;
	}
	.title,
	.line,
	.description,
	.date {
		color: var(--text-3);
		margin-left: 6rem;
		max-width: 25ch;
	}
	h1 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 25vw, 15rem);
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
		.posts {
			grid-template-columns: 1fr;
		}
		.banner {
			padding-block: 6.5rem;
			margin: 0 8px;
		}
		h1 {
			text-align: center;
		}
		.title,
		.line,
		.description,
		.date {
			max-width: 15ch;
		}
	}
</style>
