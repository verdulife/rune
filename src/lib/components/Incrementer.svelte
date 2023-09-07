<script>
	import { exercise_lib as lib } from '$lib/utils';

	import Minus from '$components/icons/Minus.svelte';
	import Plus from '$components/icons/Plus.svelte';

	export let id, value;

	const { min, step, unit } = lib[id];

	function decrease() {
		value -= step;
		if (value < min) value = min;
	}

	function increase() {
		value += step;
	}
</script>

<label class="row jbetween acenter wfull" for={id}>
	<button type="button" class="unset w1/4" on:click={decrease}>
		<Minus />
	</button>

	<h3>{value} {unit}</h3>

	<button type="button" class="unset w1/4" on:click={increase}>
		<Plus />
	</button>
</label>
