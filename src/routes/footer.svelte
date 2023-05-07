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
	<div class="footer-nav">
		<button> <Rss /> </button>
		<button> <Globe /> </button>
		<button> <Github /> </button>
		<button> <Mail /> </button>
	</div>
</footer>

<style>
	p {
		color: var(--text-2);
		padding-block: var(--size-3);
	}
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
		margin-right: 24px;
	}
	.footer-nav {
		display: flex;
		gap: var(--size-4);
		padding-block: var(--size-3);
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	.title {
		border-bottom: 1px solid var(--text-2);
		padding-block: var(--size-1);
	}
	footer {
		padding-block: var(--size-7);
	}
	@media (min-width: 768px) {
		footer {
			border-top: 1px solid var(--border);
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
		a {
			color: inherit;
			text-decoration: none;
		}
		.footer-nav {
			justify-self: end;
			padding-block: var(--size-5);
		}
	}
</style>
