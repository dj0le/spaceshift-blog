<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'
</script>

<nav>
	<div class="logo">
		<img src="/favicon.ico" alt="logo" />
		<a href="/" class="title"> <b>{config.title}</b></a>
	</div>

	<ul class="links">
		<li>
			<a href="/">home</a>
		</li>
		<li>
			<a href="/projects">projects</a>
		</li>
		<li>
			<a href="/resume">resume</a>
		</li>
		<li>
			<a href="/contact">contact</a>
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
		/* text-decoration: none; */
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
</style>
