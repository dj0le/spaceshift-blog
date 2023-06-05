<script lang="ts">
	import * as config from '$lib/config'
	import { Rss, Github, Mail, Globe } from 'lucide-svelte'
</script>

<footer>
	<div>
		<p><span class="title">{config.title}</span> &copy {new Date().getFullYear()}</p>
		<ul class="primary-nav">
			<li>
				<a href="/" data-sveltekit-preload-data>portfolio</a>
			</li>
			<li>
				<a href="/blog" data-sveltekit-preload-data>blog</a>
			</li>
			<li>
				<a href="/experiments" data-sveltekit-preload-data>experiments</a>
			</li>
			<li>
				<a href="/contact" data-sveltekit-preload-data>contact</a>
			</li>
		</ul>
	</div>
	<div class="footer-nav">
		<button aria-label="rss"> <Rss /> </button>
		<button aria-label="language"> <Globe /> </button>
		<button aria-label="github"> <Github /> </button>
		<button aria-label="button"> <Mail /> </button>
	</div>
</footer>

<style>
	p {
		color: var(--text-2);
		padding-block: var(--size-2);
	}

	.primary-nav,
	.footer-nav {
		display: flex;
		gap: var(--size-4);
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	footer {
		padding-inline: var(--size-7);
		padding-bottom: 1rem;
		border-top: 1px solid var(--brand);
	}
	button {
		margin-right: 24px;
	}
	@media (min-width: 768px) {
		footer {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
		a {
			padding: 1rem;
		}
		.footer-nav {
			justify-self: end;
			padding-block: var(--size-1);
		}
	}
	@media (max-width: 768px) {
		.primary-nav {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding-block: 1rem;
		}
		.footer-nav {
			padding-top: 1rem;
		}
	}
</style>
