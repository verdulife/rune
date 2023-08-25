<script>
	export let user, value;

	let rawExercises = [];
	user.forEach((d) => (rawExercises = [...d.programed, ...rawExercises]));

	const uniqueExercies = [...new Set(rawExercises)];
	const exercisesList = uniqueExercies.map((e) => e.exercise);
</script>

<label class="col wfull" for="exercise">
	<p>Nombre del ejercicio</p>
	<input class="wfull" list="exercisesList" type="search" id="exercise" bind:value required />

	<datalist id="exercisesList">
		{#each exercisesList as value}
			<option {value}>{value}</option>
		{/each}
	</datalist>
</label>

<style lang="postcss">
	input,
	datalist,
	option {
		text-transform: uppercase;
	}
</style>
