<h1>Designs and Inspirations</h1>
<div class="wrapper">
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
	<a class="project-button" href="/">Back</a>
</div>

<style>
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
		max-width: 300px;
	}
	.project-grid {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		justify-items: center;
	}

	@media only screen and (max-width: 767px) {
		.column {
			padding: 0.5rem;
		}
	}
</style>
