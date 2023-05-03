<script lang="ts">
	import * as config from '$lib/config'
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
	</div>
</main>

<style>
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
		background-clip: text;
		color: transparent;
	}
</style>
