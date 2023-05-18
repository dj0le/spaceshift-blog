<script lang="ts">
	import PageTransition from './transition.svelte'
	import Header from './header.svelte'
	import Footer from './footer.svelte'
	import 'open-props/style'
	import 'open-props/normalize'
	import '../app.css'

	export let data
</script>

<div class="layout">
	<Header />
	<main class="container">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<div class="containter">
		<Footer />
	</div>
</div>

<style>
	.layout {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		max-inline-size: 1440px;
		margin-inline: auto;
	}
	main {
		padding-block: var(--size-3);
		padding-inline: var(--size-7);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
	@media only screen and (max-width: 767px) {
		main {
			padding-block: var(--size-3);
		}
	}
</style>
