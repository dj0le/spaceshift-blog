<script lang="ts">
</script>

<section>
	<div class="card">
		<div class="column">
			<h3>ToothFairy</h3>
			<p>
				Full stack implementation of ecommerce solution. I designed the entire site and have
				maintained it for 3+ years. It receives 10-15 thousand unique visits per month. 100% Google
				Lighthouse / Page Speed Insight scores. Focus on SEO best practices and accessible UI
				design.
			</p>
			<a class="project-button" href="https://toothfairybh.com">Visit Page</a>
		</div>
		<div class="column">
			<img class="project-image" src="./projectpics/toothfairythumb.webp" alt="toothfairy" />
		</div>
	</div>
	<div class="card">
		<div class="column">
			<h3>ToothFairy B2B</h3>
			<p>
				B2B platform for retailers in Bosnia built on Svelte and MedusaJS. Other technologies
				include Redis, Postgres, Algolia search, and the Medusa admin CMS.
			</p>
			<a class="project-button" href="/toothfairy">Full Details</a>
		</div>
		<div class="column">
			<img class="project-image" src="./projectpics/tfb2bthumb.webp" alt="tf b2b" />
		</div>
	</div>
	<div class="card">
		<div class="column">
			<h3>Jovlabs Ai</h3>
			<p>
				Landing page with authentication for hosting your own Ai chatbots. Technologies include
				Prisma, Sql lite, Open-props and the Oobabooga api. Svelte based front-end, with chatbots
				running on Python.
			</p>
			<a class="project-button" href="https://jovlabs.vercel.app">Visit Page</a>
		</div>
		<div class="column">
			<img class="project-image" src="./projectpics/jovlabthumb.webp" alt="jovlab ai" />
		</div>
	</div>
	<div class="card">
		<div class="column">
			<h3>Miscellaneous</h3>
			<p>
				I have completed loads of other things in the front end realm, as well as other areas such
				as graphic design, after effects, product design, VJ sets for festivals, and even interior
				design.
			</p>
			<a class="project-button" href="/designs">More</a>
		</div>
		<div class="column">
			<div class="project-grid">
				<img class="project-image" src="./projectpics/designsmall-1.webp" alt="jovlab ai" />
				<img class="project-image" src="./projectpics/designsmall-2.webp" alt="jovlab ai" />
				<img class="project-image" src="./projectpics/designsmall-3.webp" alt="jovlab ai" />
				<img class="project-image" src="./projectpics/designsmall-4.webp" alt="jovlab ai" />
				<img class="project-image" src="./projectpics/designsmall-10.webp" alt="jovlab ai" />
				<img class="project-image" src="./projectpics/designsmall-6.webp" alt="jovlab ai" />
				<img class="project-image" src="./projectpics/designsmall-7.webp" alt="jovlab ai" />
				<img class="project-image" src="./projectpics/designsmall-8.webp" alt="jovlab ai" />
				<img class="project-image" src="./projectpics/designsmall-9.webp" alt="jovlab ai" />
			</div>
		</div>
	</div>
</section>

<style>
	section {
		margin-block: var(--size-4);
		display: grid;
		gap: 4rem;
		grid-template-columns: 1fr;
	}
	.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
		background-image: var(--background-2);
		border-radius: 12px;
		border: 2px solid var(--brand);
		padding: var(--size-2);
	}
	h3 {
		color: var(--brand);
		margin-block: 1rem;
	}
	p {
		font-size: var(--size-4);
		margin-bottom: 4rem;
	}
	a {
		font-size: var(--size-4);
		color: var(--text-1);
	}
	.column {
		padding: 2rem;
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
	.project-image {
		border-radius: 8px;
		border: 2px solid var(--brand);
	}
	.project-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media only screen and (max-width: 767px) {
		section {
			margin-block: var(--size-4);
			display: grid;
			gap: 2rem;
			grid-template-columns: 1fr;
		}
		.card {
			grid-template-columns: 1fr;
			justify-items: center;
		}
		.column {
			padding: 0.5rem;
		}
	}
</style>
