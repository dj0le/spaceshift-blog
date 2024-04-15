<script>
</script>

<h3>Do you like websites?</h3>
<p>
	I've always felt at home in the IT industry, but it was in Front End Development where I found the
	perfect combination integrating the technical and the creative. I bring websites to life by
	developing digital experiences around the belief that the web should be accessible and inclusive
	for all.
</p>
<p>If you are searching for a UI Designer or Front End Developer, let's connect:</p>
<div>
	<div class="social-card">
		<div>
			<a class="project-button card" href="mailto: josh@space-shift.com" aria-label="email"
				>Contact</a
			>
		</div>
		<div>
			<a class="project-button card" href="https://github.com/dj0le" aria-label="github">
				Github
			</a>
		</div>
		<div>
			<a
				class="project-button card"
				href="https://www.linkedin.com/in/josh-weand"
				aria-label="linkedin"
			>
				LinkedIn
			</a>
		</div>
	</div>
</div>

<p>
	I primarily code HTML, CSS & JS using Svelte, but am capable of using other frameworks. I also
	have extensive knowledge in Wordpress designs and implementations.
</p>
<p>
	I currently live in beautiful Bosnia & Hercegovina, but am willing to work anywhere world wide.
	Travel or remote are also totally fine. Basically, I am extremely flexible.
</p>
<p>
	Outside of coding, I like to travel, enjoy visual arts and VJing, machine learning, creative
	writing, and watching people play Age of Empires II online.
</p>

<style>
	p {
		line-height: 1.6;
		max-width: 50ch;
		padding-block: 1rem;
	}
	h3 {
		color: var(--brand);
	}
	div {
		margin-block: 2rem;
		text-align: center;
	}
	a {
		color: var(--brand);
	}
	.project-button {
		border: 2px solid var(--brand);
		border-radius: 8px;
		padding: 1rem 1.75rem;
		text-decoration: none;
	}
	.project-button:hover {
		outline: 2px solid var(--brand);
		outline-offset: 8px;
		transition: 0.2s all ease;
	}

	.social-card {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 16px;
	}
	.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-items: center;
	}

	.card:hover {
		outline: 2px solid var(--brand);
		outline-offset: 8px;
		transition: 0.2s all ease;
	}
	@media only screen and (max-width: 767px) {
		p {
			margin-block: 1rem;
		}
		h3 {
			font-size: var(--font-size-4);
		}
		.social-card {
			grid-template-columns: 1fr;
			gap: 0;
			justify-items: center;
		}
		.card {
			grid-template-columns: 1fr;
			padding-inline: 48px;
		}
	}
</style>
