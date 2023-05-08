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
			</li>
		</div>
	{/each}
</ul>

<style>
	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.banner {
		background-image: var(--blogbanner);
		background-size: contain;
		padding-block: 8rem;
		/* margin-top: var(--size-7); */
	}
	.title {
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-heading);
		font-weight: var(--font-weight-8);
		text-transform: capitalize;
		color: var(--text-3);
		margin-left: 4rem;
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
		.banner {
			background-image: var(--postbg);
			padding-block: 2rem;
			margin-top: 0;
		}
		.posts {
			grid-template-columns: 1fr;
		}
		h1 {
			text-align: center;
		}
	}
</style>
