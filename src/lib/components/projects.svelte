<script lang="ts">
</script>

<section>
	<div class="card">
		<div class="column">
			<h2>ToothFairy B2C</h2>
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
			<h2>ToothFairy B2B</h2>
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
			<h2>Oliver Elwood</h2>
			<p>Single Landing Page</p>
			<a href="https://toothfairybh.com">Visit Page</a>
			<p>Solutions</p>
		</div>
		<div class="column">
			<img src="./scan-face.svg" alt="right side full" />
		</div>
	</div>
</section>

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
	@media only screen and (max-width: 767px) {
		section {
			margin-block: var(--size-4);
			display: grid;
			gap: 2rem;
			grid-template-columns: 1fr;
		}
	}
</style>
