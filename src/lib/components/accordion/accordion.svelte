<script lang="ts">
	import { setAccordionOptions } from './context'

	export let collapse = false

	setAccordionOptions({ collapse })
</script>

<div class="accordion">
	<slot />
</div>

<style>
</style>
