<script>
	import { exercise_lib as lib } from '$lib/libs';
	import { parseRir, parseWeight } from '$lib/utils';

	import Minus from '$components/icons/Minus.svelte';
	import Plus from '$components/icons/Plus.svelte';

	export let id, value;

	const { min, step, unit, max } = lib[id];
	value = value || 0;

	function decrease() {
		value -= step;
		if (value < min) value = min;
	}

	function increase() {
		value += step;
		if (value > max) value = max;
	}
</script>

<label class="row jbetween acenter wfull" for={id}>
	<button type="button" class="unset w1/4" on:click={decrease}>
		<Minus />
	</button>

	<h3>
		{#if unit === lib.weight.unit}
			{parseWeight(value)}
		{:else if unit === lib.rir.unit}
			{parseRir(value)}
		{:else}
			{value} {unit}
		{/if}
	</h3>

	<button type="button" class="unset w1/4" on:click={increase}>
		<Plus />
	</button>
</label>

<style lang="postcss">
	button {
		color: var(--base-900);

		@media (--dark) {
			color: var(--base);
		}
	}
</style>
