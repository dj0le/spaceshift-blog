<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'

	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}

	let current = 0
</script>

<nav>
	<div class="logo">
		<img src="/favicon.ico" alt="logo" />
		<a href="/" on:click={() => (current = 1)} class="title"><b>{config.title}</b></a>
	</div>

	<ul class="links">
		<li>
			<a
				class:current={current === 1}
				on:click={() => (current = 1)}
				href="/"
				data-sveltekit-preload-data>portfolio</a
			>
		</li>
		<li>
			<a
				class:current={current === 2}
				on:click={() => (current = 2)}
				href="/blog"
				data-sveltekit-preload-data>blog</a
			>
		</li>
		<li>
			<a
				class:current={current === 3}
				on:click={() => (current = 3)}
				href="/resume"
				data-sveltekit-preload-data>resume</a
			>
		</li>
		<li>
			<a
				class:current={current === 4}
				on:click={() => (current = 4)}
				href="/contact"
				data-sveltekit-preload-data>contact</a
			>
		</li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.logo {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
	.current {
		position: relative;
	}

	.current::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--brand);
	}
</style>
