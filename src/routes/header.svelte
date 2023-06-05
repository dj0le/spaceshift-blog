<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'
	import Navigation from './navigation.svelte'

	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}

	let current = 0
</script>

<header class="primary-header">
	<div class="nav-wrapper">
		<div class="logo">
			<img src="/favicon.ico" width="48" height="48" alt="logo" />
			<a href="/" on:click={() => (current = 0)} class="title"><b>{config.title}</b></a>
		</div>
		<div class="hide-component">
			<Navigation />
		</div>
		<div class="hide-component">
			<Toggle />
		</div>
		<div class="hide-burger">
			<button class="burger" on:click={toggleMenu} class:open={isMenuOpen} aria-label="menu">
				<div class="bar-1" />
				<div class="bar-2" />
				<div class="bar-3" />
			</button>
		</div>
	</div>

	<div>
		<nav class="drop-menu" class:open={isMenuOpen}>
			<div
				class="center"
				on:click={() => (isMenuOpen = false)}
				on:keypress={() => (isMenuOpen = false)}
			>
				<Navigation />
				<Toggle />
			</div>
		</nav>
	</div>
</header>

<style>
	.primary-header {
		padding-inline: var(--size-7);
		padding-bottom: 1rem;
		position: relative;
		top: -1px;
		z-index: 9;
	}
	.nav-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		max-inline-size: 1440px;
		position: relative;
		padding-top: 1rem;
	}
	nav {
		padding-block: var(--size-7);
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

	.drop-menu {
		display: none;
		opacity: 0;
		position: absolute;
		top: 100%;
		left: 0;
		margin: auto;
		width: 0;
		padding-block: var(--size-3);
		background-image: var(--background-2);
		border: 3px solid var(--brand);
		border-radius: 0.5rem;
		transition: all 200ms ease-in-out;
		overflow: hidden;
	}

	nav.open {
		opacity: 1;
		right: 0;
		width: 85%;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}
		.primary-header {
			position: sticky;
			background: var(--headerbg);
			backdrop-filter: blur(2rem);
			border-radius: 0 0 16px 16px;
		}
		.hide-burger {
			display: none;
		}
	}

	@media only screen and (max-width: 767px) {
		.drop-menu {
			display: block;
		}
		.hide-component {
			display: none;
		}
		.center {
			padding-block: var(--size-3);
			text-align: center;
		}
	}

	/* navlink animations */

	.burger {
		height: 2rem;
		aspect-ratio: 1;
		border: 2px solid var(--brand);
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
		background-color: var(--brand);
		position: absolute;
		transition: all 175ms ease-out;
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
