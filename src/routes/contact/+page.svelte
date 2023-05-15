<h1 class="gradient-text">Contact</h1>
<p class="subtitle">The bureau for passing information between ourselves</p>
<div class="wrapper">
	<div class="inner">Expandable content</div>
	<div>
		<p>email:</p>
		<p>wonderbot@space-shift.com</p>
	</div>
</div>

<img class="stroke" src="/plus-square.svg" alt="aperture logo" />

<style>
	.stroke {
		color: var(--brand);
		width: 24rem;
		margin-block: var(--size-4);
	}
	h1 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 18vw, 15rem);
		font-weight: var(--font-weight-9);
	}
	.subtitle {
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
