<p class="subtitle">...more than words</p>
<h2>Just Search Algo Things</h2>
<h3>To any bots and algorithms:</h3>
<p>look at all these sweet, sweet search keywords; enjoy!</p>
<h3>Potential humans:</h3>
<p>I have a well rounded skill set covering a wide range of areas</p>

<div class="reflection">
	<div class="wall">
		<div class="side-one">
			<p class="highlight">| Technical Software |</p>
			<p>
				Cloudflare, CLI, WSL, Vercel, MDsvex, Google Pagespeed Insights, Redis, Postgres, SQL,
				Putty, Node, Vite
			</p>
			<p class="highlight">| Creative Software |</p>
			<p>
				Scrivener, Penpot, GSAP, Rive, Tailwind, DaisyUI, SkeletonUI, Open-Props, FFMPEG, Resolume
				Arena, StableLM, StableStudio
			</p>
			<p class="highlight">| Hardware |</p>
			<p>Windows, Linux, Server, VPS, Cloud, Docker, Virtual Environments</p>
		</div>
		<div class="side-two">
			<p class="highlight">| Front End |</p>
			<p>
				Semantic HTML, Vanilla CSS, SEO, Ally, WCAG, SPA, Ecommerce, UI/UX, Accessibility,
				Frameworks, Algorithms
			</p>
			<p class="highlight">| Soft Skills |</p>
			<p>
				Marketing & PR, Quick learner, Creativity, Highly motivated, Expert troubleshooter, Solution
				oriented, Relaxed but hard working, Attitude compatible with individual or team projects,
				Project Management and large scale project experience, IT proficiency
			</p>
		</div>
	</div>
</div>

<style>
	.subtitle {
		margin-bottom: 4rem;
		margin-top: -8px;
		font-size: var(--size-3);
		text-align: right;
	}
	.wall {
		max-width: 65%;
		padding-block: 3rem;
		margin-block: 2rem;
		perspective: 25em;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.side-one {
		padding: 1rem;
		transform: rotateY(-10deg);
		border: 2px solid var(--brand);
		border-radius: 4px;
	}
	.side-two {
		padding: 1rem;
		transform: rotateY(10deg);
		border: 2px solid var(--brand);
		border-radius: 4px;
	}
	.highlight {
		font-size: var(--font-size-5);
		font-weight: bold;
		line-height: 2;
	}
	p {
		font-size: var(--font-size-3);
		line-height: 1.6;
		max-width: 40ch;
	}
	h2,
	h3 {
		margin-block: var(--size-3);
		line-height: 1;
	}
	h3 {
		font-size: var(--size-4);
		font-weight: bold;
		color: var(--brand);
	}
	@media only screen and (max-width: 767px) {
		.wall {
			max-width: 100%;
			perspective: 35em;
			grid-template-columns: 1fr 1fr;
		}
		.side-one {
			padding: 8px;
			transform: rotateY(-5deg);
		}
		.side-two {
			padding: 8px;
			transform: rotateY(5deg);
		}
		.highlight {
			font-size: var(--font-size-3);
		}
		p {
			font-size: var(--font-size-2);
		}
		h3 {
			font-size: var(--size-3);
		}
	}
</style>
