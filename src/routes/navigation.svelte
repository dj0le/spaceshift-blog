<script lang="ts">
	let current = 0
</script>

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
			href="/experiments"
			data-sveltekit-preload-data>experiments</a
		>
	</li>
	<li>
		<a
			class:current={current === 3}
			on:click={() => (current = 3)}
			href="/contact"
			data-sveltekit-preload-data>contact</a
		>
	</li>
</ul>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}
	.links {
		margin-block: var(--size-5);
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
		background-color: var(--brand);
		border: 10px solid;
		border-image-slice: 1;
		border-width: 4px;
		border-image-source: var(--grad-text);
		border-left: 0;
		border-right: 0;
		border-top: 0;
	}

	li > a {
		display: inline-block;
		transition: all 150ms ease-in-out;
	}

	li > a:hover {
		transform: scale(1.1);
	}
	@media (min-width: 768px) {
		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
	@media only screen and (max-width: 869px) {
		li {
			font-size: 1.5rem;
			list-style: none;
			padding-bottom: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
