<script lang="ts">
	export let question
	export let nextQuestion
	export let addToScore

	let isCorrect
	let isAnswered = false

	let answers = question.incorrect_answers.map((answer) => {
		return {
			answer,
			correct: false
		}
	})

	let allAnswers = [
		...answers,
		{
			answer: question.correct_answer,
			correct: true
		}
	]
	shuffle(allAnswers)

	function shuffle(array) {
		array.sort(() => Math.random() - 0.5)
	}

	function checkQuestion(correct) {
		if (!isAnswered) {
			isAnswered = true
			isCorrect = correct
			if (correct) {
				addToScore()
			}
		}
	}
</script>

<div class="question">
	<p>{@html question.question}</p>

	<div class="grid">
		{#each allAnswers as answer}
			<button on:click={() => checkQuestion(answer.correct)}>{@html answer.answer}</button>
		{/each}
	</div>
	{#if isAnswered}
		<h4>
			{#if isCorrect}
				<p class="correct">Correct!</p>
			{:else}
				<p class="incorrect">swing and a miss</p>
			{/if}
		</h4>
	{/if}

	{#if isAnswered}
		<div>
			<button class="big-button" on:click={nextQuestion}>Next</button>
		</div>
	{/if}
</div>

<style>
	button {
		background-color: transparent;
		border: 2px solid var(--brand);
		border-radius: 8px;
		padding: 0.75rem 1.75rem;
		cursor: pointer;
	}
	p {
		font-size: var(--font-size-4);
	}
	.big-button {
		background-color: var(--brand);
		color: var(--text-1-light);
		font-size: var(--font-size-2);
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.35rem;
		margin-block: 4rem;
	}
	.question {
		margin-block: 2rem;
		max-width: 50ch;
	}
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: 40% 40%;
		margin-block: 1rem;
	}
	.correct {
		color: var(--brand);
	}
	.incorrect {
		color: red;
	}
	@media only screen and (max-width: 777px) {
		p {
			font-size: var(--font-size-2);
		}
		.big-button {
			font-size: var(--font-size-1);
			margin-block: 1rem;
		}
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
