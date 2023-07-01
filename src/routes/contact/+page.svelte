<script lang="ts">
	import { Github, Mail, Linkedin, Figma } from 'lucide-svelte'
</script>

<h1 class="gradient-text">Contact</h1>
<p class="subtitle">The bureau for passing information between ourselves</p>

<div class="email">
	<Mail size="48" color="var(--brand)" />
	<h2>email:</h2>

	<a href="mailto: josh@space-shift.com" aria-label="email" class="white-link">
		josh@space-shift.com</a
	>
</div>

<div class="mobile-pad">
	<h2>socials</h2>
	<p>
		I have decided to forgo social media at the moment as I feel it is negatively impacting society
		and I want to see if it is possible to exist in the modern era without it. So far it has been
		very difficult
	</p>
</div>
<div class="mobile-pad">
	<h2>discord</h2>
	<p>
		But I'm not a masochist, so I have decided to keep discord, where my username is: <span
			style="color: var(--brand)">GHOSTMONKEY</span
		>
	</p>
</div>
<div class="mobile-pad">
	<h2>other options</h2>
	<p>You can find more at any of these locations:</p>
	<div class="social-card">
		<div>
			<a class="card" href="https://github.com/dj0le" aria-label="github">
				<Github />
				<p class="card-text">Github</p>
			</a>
		</div>
		<div>
			<a class="card" href="www.linkedin.com/in/josh-weand" aria-label="linkedin">
				<Linkedin />
				<p class="card-text">LinkedIn</p>
			</a>
		</div>
		<div>
			<a
				class="card"
				href="https://www.figma.com/file/H7LtSGpMRy7S30hP9OeewS/DesignPortfolio"
				aria-label="email"
			>
				<Figma />

				<p class="card-text">Figma</p>
			</a>
		</div>
	</div>
</div>

<div class="visual-interest">
	<span class="pill" style="background-color:var(--brand)" />
	<span class="pill" style="background-color:var(--brand)" />
	<span class="pill" style="background-color:var(--brand)" />
	<span class="pill" style="background-color:var(--brand)" />
	<span class="pill" style="background-color:var(--brand)" />
</div>

<style>
	a {
		color: var(--brand);
	}
	.white-link {
		color: var(--text-1);
		font-size: 1.75rem;
	}
	.social-card {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 3rem;
	}
	.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-items: center;
		border: 2px solid var(--brand);
		border-radius: 1rem;
	}

	.card:hover {
		outline: 2px solid var(--brand);
		outline-offset: 8px;
		transition: 0.2s all ease;
	}
	.email {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
		color: var(--text-1);
	}
	.visual-interest {
		display: flex;
		align-items: center;
		gap: var(--size-2);
	}
	.pill {
		--size: var(--size-5);
		border-radius: var(--radius-round);
		box-shadow: var(--inner-shadow-0);
		inline-size: 6.7%;
		block-size: var(--size);
		display: grid;
		place-content: center;
		color: #000;
		text-shadow: 0 0 1px hsl(0 0% 0% / 40%);
	}
	/* @media (prefers-reduced-motion: no-preference) {
		.pill {
			transition: transform 2s var(--ease-squish-5) 3s;
		}
	}
	.pill::before {
		opacity: 0;
		transition: opacity 0.4s var(--ease-out-3);
	} */
	h1 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 18vw, 15rem);
		font-weight: var(--font-weight-9);
	}
	h2 {
		color: var(--brand);
	}
	p {
		line-height: 1.6;
		padding-top: 0.75rem;
	}
	.card-text {
		color: var(--text-1);
		padding-right: 1.25rem;
	}
	.subtitle {
		font-size: 1.5rem;
		margin-bottom: var(--size-4);
		font-family: var(--font-heading);
		color: var(--brand);
	}
	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		text-transform: uppercase;
	}
	div {
		margin-block: 2rem;
		max-width: 45ch;
	}

	@media (max-width: 768px) {
		.subtitle {
			font-size: 1rem;
			border-bottom: 2px solid var(--text-1);
			padding-bottom: 1rem;
		}
		.email {
			flex-direction: column;
			align-items: flex-start;
		}
		.social-card {
			grid-template-columns: 1fr;
			gap: 0;
			justify-items: center;
		}
		.card-text {
			color: var(--text-1);
			padding-right: 1rem;
		}
		.white-link {
			font-size: 1rem;
		}
		.mobile-pad {
			margin-block: 4rem;
		}
	}
</style>
