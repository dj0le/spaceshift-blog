<script lang="ts">
	import { slide } from 'svelte/transition'
	import { getAccordionOptions } from './context'

	export let open = false

	const componentId = crypto.randomUUID()
	const { collapse, activeComponentId } = getAccordionOptions()

	function setActiveComponent() {
		if ($activeComponentId === componentId) {
			$activeComponentId = null
		} else {
			$activeComponentId = componentId
		}
	}

	function toggleOpen() {
		open = !open
	}

	function handleClick() {
		collapse ? setActiveComponent() : toggleOpen()
	}

	$: open && collapse && setActiveComponent()
	$: isActive = $activeComponentId === componentId
	$: isOpen = collapse ? isActive : open
</script>

<div class="accordion-item gradient-text">
	<button
		on:click={handleClick}
		class="drop-down"
		aria-expanded={isOpen}
		aria-controls="accordion-{componentId}"
	>
		<h2 class="accordion-title gradient-text">
			<slot name="title" />
		</h2>

		<div class="gradient-text">
			{#if isOpen}
				<span class="icon" class:open={isOpen}>&minus;</span>
			{:else}
				<span class="icon" class:close={!isOpen}>&plus;</span>
			{/if}
		</div>
	</button>
</div>

{#if isOpen}
	<div
		transition:slide|global={{ duration: 600 }}
		role="region"
		aria-hidden={!isOpen}
		aria-labelledby="accordion-{componentId}"
	>
		<slot name="content" />
	</div>
{/if}

<style>
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
		transition: all ease-in-out 500ms;
	}

	h2 {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 10vw, 10rem);
		font-weight: var(--font-weight-8);
	}

	@media only screen and (max-width: 767px) {
		.drop-down {
			margin-block: 1.5rem;
			width: 100%;
			align-items: center;
		}
	}
</style>
