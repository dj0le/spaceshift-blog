<script>
	let isOpen = false

	function toggle() {
		isOpen = !isOpen
	}
</script>

<button class="drop-down" on:click={toggle} aria-label="open section">
	<h2 class="gradient-text">about</h2>
	{#if isOpen}
		<span class="icon gradient-text">&minus;</span>
	{:else}
		<span class="icon gradient-text">&plus;</span>
	{/if}
</button>
<div class="panel" class:open-panel={isOpen}>
	<h3>Do you like websites?</h3>
	<p>
		I specialize in engaging UI/UX design, front-end development, and copywriting. I enjoy breathing
		life into websites through design and CSS. I develop digital experiences around the concept that
		the web should be accessible and inclusive for all.
	</p>
	<p>
		I primarily code HTML, CSS & JS using Sveltekit, but am capable of using other frameworks. I
		also have extensive knowledge in Wordpress designs and implementations
	</p>
	<p>
		I currently live in beatufiul Bosnia & Hercegovina, but am willing to work anywhere world wide.
		Travel or remote are also totally fine. Basically, I am extremely flexible.
	</p>
	<p>
		Outside of coding, I like to travel, enjoy visual arts and VJing, creative writing, and watching
		people play Age of Empires II online.
	</p>
</div>

<style>
	p {
		line-height: 1.6;
		max-width: 50ch;
		padding-block: 1rem;
	}
	h3 {
		color: var(--brand);
	}
	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.drop-down {
		padding-right: var(--size-6);
		width: 62%;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		background-color: transparent;
		text-align: left;
		cursor: pointer;
		transition: 0.4s;
	}

	span.icon {
		font-size: clamp(2rem, 10vw, 10rem);
		font-weight: var(--font-weight-8);
		opacity: 0;
	}

	button.drop-down:hover,
	button.drop-down:active {
		background-image: var(--background-2);
		border-radius: 4px 16px 16px 4px;
	}

	button.drop-down:hover span.icon,
	button.drop-down:active span.icon {
		opacity: 1;
		transition: all ease-in-out 400ms;
	}

	.panel {
		height: 0;
		padding: 0;
		opacity: 0;
		left: 0;
		margin: auto;
		width: 0;
		background-color: transparent;
		display: block;
		overflow: hidden;
		transition: all 350ms ease-in-out;
	}

	.open-panel {
		margin-top: 2rem;
		margin-bottom: 6rem;
		height: auto;
		opacity: 1;
		right: 0;
		width: 100%;
	}

	h2 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 10vw, 10rem);
		font-weight: var(--font-weight-8);
	}
	@media only screen and (max-width: 767px) {
		p {
			margin-block: 1rem;
		}
		h3 {
			font-size: var(--font-size-4);
		}
	}
</style>
