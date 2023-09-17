<script lang="ts">
	import { title, description } from '$lib/config'
	import { Accordion, AccordionItem } from '$lib/components/accordion'
	import Projects from '$lib/components/projects.svelte'
	import About from '$lib/components/about.svelte'
	import Tools from '$lib/components/tools.svelte'
	import Keywords from '$lib/components/keywords.svelte'

	const items = [
		{ title: 'projects', content: Projects },
		{ title: 'about', content: About },
		{ title: 'tools', content: Tools },
		{ title: 'keywords', content: Keywords }
	]
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{@html `<script type="application/ld+json">
{
		"@context": "http://schema.org",
		"@type": "WebSite",
		  "name": "${title}",
          "description": "${description}",
		  "url": "https://space-shift.com/",
		}
	</script>`}
</svelte:head>

<main>
	<div>
		<p>welcome to the</p>
		<h1 class="gradient-text">SPACEshift</h1>
		<p class="subtitle">
			Hello, I'm Josh, and this is my portfolio. Engaging, accessible UI / UX design && Front-end
			development. Made with 100% stardust.
		</p>
	</div>
	<Accordion collapse>
		{#each items as item}
			<AccordionItem>
				<svelte:fragment slot="title">{item.title}</svelte:fragment>
				<svelte:fragment slot="content"><svelte:component this={item.content} /></svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
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
		H1 {
			line-height: 1.5;
		}
		.subtitle {
			letter-spacing: normal;
		}
	}
</style>
