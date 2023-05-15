<script lang="ts">
	import * as config from '$lib/config'
	import Accordion from './Accordion.svelte'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<main>
	<div>
		<p>welcome to the</p>
		<h1 class="gradient-text">SPACEshift</h1>
		<p>now made with 100% stardust</p>
		<p>this page is a work in progress, expect things to be broken, like really broken</p>
	</div>
	<div>
		<Accordion />
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
	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	main {
		background-image: var(--catbg);
		background-repeat: no-repeat;
		background-position: bottom right;
		background-size: 45%;
	}
	@media only screen and (max-width: 777px) {
		main {
			background-size: 55%;
		}
	}
</style>
