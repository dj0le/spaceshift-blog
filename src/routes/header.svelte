<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'

	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}

	let current = 0
</script>

<header class="primary-header">
	<div class="nav-wrapper">
		<div class="logo">
			<img src="/favicon.ico" alt="logo" />
			<a href="/" on:click={() => (current = 0)} class="title"><b>{config.title}</b></a>
		</div>

		<ul class="links" aria-label="main navigation">
			<li>
				<a
					class:current={current === 0}
					on:click={() => (current = 0)}
					href="/"
					data-sveltekit-preload-data>portfolio</a
				>
			</li>
			<li>
				<a
					class:current={current === 1}
					on:click={() => (current = 1)}
					href="/blog"
					data-sveltekit-preload-data>blog</a
				>
			</li>
			<li>
				<a
					class:current={current === 2}
					on:click={() => (current = 2)}
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
		<div class="theme-switcher">
			<Toggle />
		</div>
		<div class="hide-burger">
			<button class="burger" on:click={toggleMenu} class:open={isMenuOpen}>
				<div class="bar-1" />
				<div class="bar-2" />
				<div class="bar-3" />
			</button>
		</div>
	</div>

	<div>
		<nav class="drop-menu" class:open={isMenuOpen}>
			<li on:click={() => (isMenuOpen = false)} on:keypress={() => (isMenuOpen = false)}>
				<a class:current={current === 0} on:click={() => (current = 0)} href="/">portfolio</a>
			</li>
			<li on:click={() => (isMenuOpen = false)} on:keypress={() => (isMenuOpen = false)}>
				<a class:current={current === 1} on:click={() => (current = 1)} href="/blog">blog</a>
			</li>
			<li on:click={() => (isMenuOpen = false)} on:keypress={() => (isMenuOpen = false)}>
				<a class:current={current === 2} on:click={() => (current = 2)} href="/resume">resume</a>
			</li>
			<li on:click={() => (isMenuOpen = false)} on:keypress={() => (isMenuOpen = false)}>
				<a class:current={current === 3} on:click={() => (current = 3)} href="/contact">contact</a>
			</li>
			<div class="center">
				<Toggle />
			</div>
		</nav>
	</div>
</header>

<style>
	.primary-header {
		position: relative;
		position: sticky;
		top: -1px;
		z-index: 9;
		padding-inline: var(--size-7);
		padding-bottom: 1.5rem;
		background: var(--headerbg);
		backdrop-filter: blur(2rem);
	}

	.nav-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		max-inline-size: 1440px;
		position: relative;
		padding-top: 2rem;
	}

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
	.current {
		position: relative;
	}
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
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
	.drop-menu {
		display: none;
		opacity: 0;
		position: absolute;
		top: 100%;
		right: 100%;
		width: 100%;
		margin-top: 1rem;
		padding-top: 2rem;
		background-image: var(--background-2);
		border: 2px solid var(--brand);
		border-radius: 0.5rem;
		transition: all 200ms ease-in-out;
		overflow: hidden;
	}

	.drop-menu li {
		font-size: 1.5rem;
		list-style: none;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	nav.open {
		opacity: 1;
		right: 0;
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
		.hide-burger {
			display: none;
		}
	}

	@media only screen and (max-width: 767px) {
		.drop-menu {
			display: block;
		}
		.links {
			display: none;
		}
		.theme-switcher {
			display: none;
		}
		.center {
			padding-block: var(--size-3);
			text-align: center;
		}
	}

	/* navlink animations */

	li > a {
		display: inline-block;
		transition: all 150ms ease-in-out;
	}

	li > a:hover {
		transform: scale(1.1);
	}

	.burger {
		height: 2rem;
		aspect-ratio: 1;
		border: 2px solid var(--text-1);
		border-radius: 0.25rem;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.burger > div {
		height: 2px;
		width: 1rem;
		background-color: var(--text-1);
		position: absolute;
		transition: all 125ms ease-out;
	}

	.bar-1 {
		transform: translateY(-5px);
	}
	.bar-3 {
		transform: translateY(5px);
	}

	/* menu icon animation */
	.burger.open .bar-1 {
		transform: rotateZ(45deg);
	}

	.burger.open .bar-2 {
		opacity: 0;
	}

	.burger.open .bar-3 {
		transform: rotateZ(-45deg);
	}
</style>
