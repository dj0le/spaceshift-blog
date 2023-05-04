<script lang="ts">
	import * as config from '$lib/config'
	import { Rss, Github, Mail, Globe } from 'lucide-svelte'
</script>

<footer>
	<div>
		<p><span class="title">{config.title}</span> &copy {new Date().getFullYear()}</p>
		<ul class="footer-nav">
			<li>
				<a href="/">portfolio</a>
			</li>
			<li>
				<a href="/blog">blog</a>
			</li>
			<li>
				<a href="/resume">resume</a>
			</li>
			<li>
				<a href="/contact">contact</a>
			</li>
		</ul>
	</div>
	<div class="column">
		<div class="footer-nav">
			<button> <Rss /> </button>
			<button> <Globe /> </button>
			<button> <Github /> </button>
			<button> <Mail /> </button>
		</div>
	</div>
</footer>

<style>
	p {
		color: var(--text-2);
	}
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}
	.footer-nav {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-1);
	}

	.title {
		border-bottom: 1px solid var(--text-2);
	}

	@media (min-width: 768px) {
		footer {
			padding-block: var(--size-7);
			border-top: 1px solid var(--border);
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		.column {
			justify-self: end;
		}
	}
</style>
