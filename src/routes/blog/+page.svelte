<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1 class="gradient-text">the blog</h1>
<ul class="posts">
	{#each data.posts as post}
		<div class="banner">
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<img src="/blogbar.svg" class="seperator" alt="" />
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
	.post {
		max-inline-size: var(--size-content-3);
	}
	.banner {
		background-image: url('/blogMainBanner.svg');
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
	.seperator {
		margin-top: var(--size-2);
	}
	.title,
	.seperator,
	.description,
	.date {
		color: var(--text-3);
		margin-left: 6rem;
		max-width: 25ch;
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

	@media (max-width: 768px) {
		.posts {
			grid-template-columns: 1fr;
		}
		.banner {
			padding-block: 6.5rem;
			margin: 0 8px;
		}
		.title,
		.seperator,
		.description,
		.date {
			max-width: 15ch;
		}
	}
</style>
