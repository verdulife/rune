<script>
	import Minus from '$components/icons/Minus.svelte';
	import Plus from '$components/icons/Plus.svelte';

	export let id, value;
	const lib = {
		reps: { amount: 1, unit: 'reps' },
		series: { amount: 1, unit: 'series' },
		weight: { amount: 5, unit: 'kg' }
	};

	const { amount, unit } = lib[id];

	function decrease() {
		value -= amount;
		if (value < amount) value = amount;
	}

	function increase() {
		value += amount;
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
