<script lang="ts">
	import { fly } from 'svelte/transition'
	import { HandMetal, Ghost } from 'lucide-svelte'
	import { theme, toggleTheme } from '$lib/theme'
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly|global={{ y: 10 }}>
			<Ghost />
			<span>spoooky</span>
		</div>
	{:else}
		<div in:fly|global={{ y: -10 }}>
			<HandMetal />
			<span>metal</span>
		</div>
	{/if}
</button>

<style>
	button {
		transition: all 250ms ease-in-out;
		border: 2px solid var(--brand);
		border-radius: 8px;
		padding: 0.75rem 2rem;
		cursor: pointer;
	}
	button > * {
		color: var(--brand);
		display: flex;
		gap: var(--size-2);
	}
</style>
