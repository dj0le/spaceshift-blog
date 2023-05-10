<h1 class="gradient-text">Contact</h1>
<h2>The bureau for passing information between ourselves</h2>
<div class="wrapper">
	<div class="inner">Expandable content</div>
	<div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos corrupti dolores
			repellat dolore debitis rem dolorum. Blanditiis dolor iure quis dolorum, praesentium sint unde
			quisquam eius repudiandae non temporibus ipsam animi aliquam! Veniam sapiente harum illum
			explicabo? Sapiente reiciendis in, quisquam praesentium minus optio dolorem nemo aliquid odit
			tempora soluta harum expedita vitae pariatur facere voluptates quae voluptatibus obcaecati
			temporibus atque quod? Alias explicabo sed atque nisi earum optio sapiente porro similique
			repudiandae, quos, facere, cum dicta culpa voluptatum praesentium quas dolores. Repudiandae
			praesentium iste eos fugiat est consequuntur odit laudantium nesciunt, sint reprehenderit in
			cum odio eius iure!
		</p>
	</div>
</div>

<div class="icon">
	<img src="/aperture.svg" alt="aperture logo" />
</div>

<style>
	.icon {
		margin-top: var(--size-7);
		max-width: 40rem;
	}

	@media only screen and (max-width: 767px) {
		.icon {
			max-width: 100%;
		}
	}
	h1 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 18vw, 15rem);
		font-weight: var(--font-weight-9);
	}
	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		text-transform: uppercase;
	}
	.wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.5s ease-out;
	}

	.wrapper :hover {
		grid-template-rows: 1fr;
	}

	.inner {
		overflow: hidden;
		/* background-image: url('/scanlines.png');
		background-size: cover;
		background-repeat: no-repeat; */
	}
</style>
