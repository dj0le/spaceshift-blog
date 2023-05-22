<script>
	export let question
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
		isAnswered = true
		isCorrect = correct
	}
</script>

<h3>{@html question.question}</h3>

{#if isAnswered}
	<h4>
		{#if isCorrect}
			Yo got it right!
		{:else}
			You got it wrong
		{/if}
	</h4>
{/if}

{#each allAnswers as answer}
	<button on:click={() => checkQuestion(answer.correct)}>{@html answer.answer}</button>
{/each}

<style>
	button {
		background-color: transparent;
		border: 2px solid var(--brand);
		border-radius: 8px;
		margin: 1rem;
		padding: 0.75rem 1.75rem;
		cursor: pointer;
	}
</style>
