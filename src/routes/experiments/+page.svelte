<script lang="ts">
	import { fade, fly } from 'svelte/transition'
	import Question from './question.svelte'
	let activeQuestion = 0
	let score = 0
	let quiz = getQuiz()

	async function getQuiz() {
		const res = await fetch('https://opentdb.com/api.php?amount=10&category=28&type=multiple')
		const quiz = await res.json()
		return quiz
	}

	function nextQuestion() {
		activeQuestion = activeQuestion + 1
	}

	function resetQuiz() {
		score = 0
		quiz = getQuiz()
		activeQuestion = 0
	}

	function addToScore() {
		score = score + 1
	}
</script>

<section>
	<h2 class="gradient-text">EXPERIMENTS</h2>
	<p class="sub-title">Random stuff, mostly nonsense</p>

	<div class="experiment-one">
		<div class="grid">
			<h3 class="gradient-text">- 001 | Pop Quiz -</h3>
			<p>The high score is 9, can you beat it?</p>
			<div class="score-card">
				<p>your score:</p>
				<div class="gradient-text score">{score}</div>
			</div>

			<button class="big-button" on:click={resetQuiz}>Start New Quiz</button>
		</div>
		<div>
			{#await quiz}
				Loading....
			{:then data}
				<p class="gradient-text question">Question #{activeQuestion + 1}:</p>

				{#each data.results as question, index}
					{#if index === activeQuestion}
						<div in:fly={{ y: -50 }} out:fly={{ y: 100 }} class="fade-wrapper">
							<Question {addToScore} {nextQuestion} {question} />
						</div>
					{/if}
				{/each}
			{/await}
		</div>
	</div>
</section>

<style>
	.experiment-one {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: start;
	}
	h2 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 10vw, 10rem);
		font-weight: var(--font-weight-8);
		line-height: 1;
		margin-top: 3rem;
	}
	h3 {
		font-family: var(--font-heading);
		font-size: clamp(--font-size-fluid-6);
		font-weight: var(--font-weight-8);
		line-height: 1;
		text-align: center;
		text-transform: uppercase;
	}
	.question {
		font-size: var(--font-size-4);
	}
	.sub-title {
		border-bottom: 2px solid var(--brand);
		max-width: 25%;
		margin-bottom: 4rem;
		margin-left: 0.65rem;
		line-height: 2;
		font-weight: bold;
		color: var(--brand);
	}
	.gradient-text {
		background: var(--grad-text);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.score {
		font-size: var(--font-size-8);
		font-weight: bold;
		justify-self: center;
	}
	.score-card {
		border: 2px solid var(--brand);
		border-radius: 8px;
		padding: 1rem;
		margin: 1rem;
		text-align: center;
	}
	.score-card p {
		border-bottom: 2px solid var(--brand);
		line-height: 2;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}
	.grid {
		display: grid;
		gap: 1rem;
		justify-items: center;
		align-items: center;
		max-width: 45ch;
	}
	button {
		background-color: transparent;
		border: 2px solid var(--brand);
		border-radius: 8px;
		margin: 2rem;
		padding: 0.75rem 2.5rem;
		cursor: pointer;
	}
	.big-button {
		background-color: var(--brand);
		color: var(--text-1-light);
		font-size: var(--font-size-4);
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.35rem;
	}
	.fade-wrapper {
		position: absolute;
	}
	@media only screen and (max-width: 777px) {
		.experiment-one {
			grid-template-columns: 1fr;
		}
		h2 {
			margin-top: 2rem;
		}
		h3 {
			text-align: start;
			line-height: 1.25;
			margin-top: 2rem;
		}
		.big-button {
			font-size: var(--font-size-1);
			margin: 0;
			width: 100%;
		}
		.sub-title {
			border-bottom: 2px solid var(--brand);
			max-width: 100%;
			margin-bottom: 2rem;
			margin-left: 0.1rem;
			line-height: 2;
		}
		.score-card {
			justify-self: center;
		}
	}
</style>
