<script lang="ts">
	let isOpen = false

	function toggle() {
		isOpen = !isOpen
	}
</script>

<button class="drop-down" on:click={toggle} aria-label="open section">
	<h2 class="gradient-text">projects</h2>
	{#if isOpen}
		<span class="icon gradient-text">&minus;</span>
	{:else}
		<span class="icon gradient-text">&plus;</span>
	{/if}
</button>

<div class="panel" class:open-panel={isOpen}>
	<section>
		<div class="card">
			<div class="column">
				<h3>ToothFairy B2C</h3>
				<p>full stack ecommerce solution</p>
				<a href="https://toothfairybh.com">Visit Page</a>
				<p>Solutions</p>
			</div>
			<div class="column">
				<img src="./scan-face.svg" alt="right side full" />
			</div>
		</div>
		<div class="card">
			<div class="column">
				<h3>ToothFairy B2B</h3>
				<p>Wholesale Buyer Portal</p>
				<a href="https://toothfairybh.com">Visit Page</a>
				<p>Solutions</p>
			</div>
			<div class="column">
				<img src="./scan-face.svg" alt="right side full" />
			</div>
		</div>
		<div class="card">
			<div class="column">
				<h3>Oliver Elwood</h3>
				<p>Single Landing Page</p>
				<a href="https://toothfairybh.com">Visit Page</a>
				<p>Solutions</p>
			</div>
			<div class="column">
				<img src="./scan-face.svg" alt="right side full" />
			</div>
		</div>
	</section>
</div>

<style>
	section {
		margin-block: var(--size-4);
		display: grid;
		gap: 4rem;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.card {
		background-image: var(--background-2);
		border-radius: 8px;
		border: 2px solid var(--brand);
		padding: var(--size-2);
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
		transition: all 250ms ease-in-out;
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
		section {
			margin-block: var(--size-4);
			display: grid;
			gap: 2rem;
			grid-template-columns: 1fr;
		}
	}
</style>
