<script>
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
	<button type="button" class="w1/4" on:click={decrease}>-</button>
	<h3>{value} {unit}</h3>
	<button type="button" class="w1/4" on:click={increase}>+</button>
</label>
