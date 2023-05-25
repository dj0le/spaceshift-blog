<script lang="ts">
	import * as config from '$lib/config'
	import Projects from '$lib/components/projects.svelte'
	import About from '$lib/components/about.svelte'
	import Tools from '$lib/components/tools.svelte'
	import Keywords from '$lib/components/keywords.svelte'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<main>
	<div>
		<p>welcome to the</p>
		<h1 class="gradient-text">SPACEshift</h1>

		<p class="subtitle">
			Engaging, accessible UI/UX design && Front-end development. Made with 100% stardust
		</p>
	</div>
	<div class="text-block">
		<Projects />
		<About />
		<Tools />
		<Keywords />
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
		line-height: 0.9;
	}
	.subtitle {
		letter-spacing: 0.2rem;
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
		.text-block {
			margin-block: 4rem;
		}
		H1 {
			line-height: 1.5;
		}
		.subtitle {
			letter-spacing: normal;
		}
	}
</style>
