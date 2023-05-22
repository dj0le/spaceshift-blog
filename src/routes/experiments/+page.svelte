<script lang="ts">
	import Question from './question.svelte'

	let quiz = getQuiz()

	async function getQuiz() {
		const res = await fetch('https://opentdb.com/api.php?amount=10&category=28&type=multiple')
		const quiz = await res.json()
		return quiz
	}

	function handleClick() {
		quiz = getQuiz()
	}
</script>

<section>
	<h2 class="gradient-text">EXPERIMENTS</h2>
	<p>Random stuff, mostly nonsense</p>

	<button on:click={handleClick}>Get new Questions</button>

	{#await quiz}
		Loading....
	{:then data}
		{#each data.results as question}
			<Question {question} />
		{/each}
	{/await}
</section>

<style>
	h2 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 10vw, 10rem);
		font-weight: var(--font-weight-8);
		margin-top: 2rem;
		margin-bottom: 4rem;
	}

	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	button {
		background-color: transparent;
		border: 2px solid var(--brand);
		border-radius: 8px;
		margin: 2rem;
		padding: 0.75rem 2.5rem;
		cursor: pointer;
	}
</style>
