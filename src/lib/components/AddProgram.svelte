<script>
	import { User } from '$lib/stores';
	import { programDefaults } from '$lib/utils';

	export let displayDay;

	let data = { ...programDefaults };
	data.day = displayDay;

	function incWeight() {
		data.weight += 2.5;
	}

	function decWeight() {
		data.weight -= 2.5;
		if (data.weight < 2.5) data.weight = 2.5;
	}

	function inc(value) {
		data[value]++;
	}

	function dec(value) {
		data[value]--;
		if (data[value] < 1) data[value] = 1;
	}

	function saveExercise() {
		$User[displayDay].programed = [data, ...$User[displayDay].programed];
		closeModal();
	}
</script>

<form class="col acenter wfull" on:submit|preventDefault={saveExercise}>
	<label class="col wfull" for="exercise">
		<p>Nombre del ejercicio</p>
		<input
			class="wfull"
			list="exercisesList"
			type="search"
			id="exercise"
			bind:value={data.exercise}
			required
		/>

		<datalist id="exercisesList">
			<option value="press de banca">press de banca</option>
			<option value="peso muerto">peso muerto</option>
		</datalist>
	</label>

	<label class="row jbetween wfull" for="weight">
		<button type="button" class="w1/3" on:click={decWeight}>-</button>
		<input
			type="number"
			id="weight"
			step="2.5"
			inputmode="numeric"
			bind:value={data.weight}
			required
		/>
		<button type="button" class="w1/3" on:click={incWeight}>+</button>
	</label>

	<label class="row jbetween wfull" for="reps">
		<button type="button" class="w1/3" on:click={() => dec('reps')}>-</button>
		<input type="number" id="reps" inputmode="numeric" bind:value={data.reps} required />
		<button type="button" class="w1/3" on:click={() => inc('reps')}>+</button>
	</label>

	<label class="row jbetween wfull" for="series">
		<button type="button" class="w1/3" on:click={() => dec('series')}>-</button>
		<input type="number" id="series" inputmode="numeric" bind:value={data.series} required />
		<button type="button" class="w1/3" on:click={() => inc('series')}>+</button>
	</label>

	<button class="w1/2">GUARDAR</button>
</form>

<style lang="postcss">
	form {
		gap: 2em;
	}
</style>
