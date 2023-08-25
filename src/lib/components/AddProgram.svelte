<script>
	import { programDefaults } from '$lib/utils';
	import { User } from '$lib/stores';
	import Incrementer from './Incrementer.svelte';
	import Datalist from './Datalist.svelte';

	export let displayDay, showModal;

	let data = { ...programDefaults };
	data.day = displayDay;

	function closeModal() {
		showModal = null;
	}

	function saveExercise() {
		data.exercise = data.exercise.toUpperCase();
		$User[displayDay].programed = [data, ...$User[displayDay].programed];

		closeModal();
	}
</script>

<form class="col acenter wfull" on:submit|preventDefault={saveExercise}>
	<!-- <label class="col wfull" for="exercise">
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
	</label> -->

	<Datalist user={$User} bind:value={data.exercise} />

	<Incrementer id="weight" bind:value={data.weight} />
	<Incrementer id="reps" bind:value={data.reps} />
	<Incrementer id="series" bind:value={data.series} />

	<footer class="row jcenter wfull">
		<button type="submit">GUARDAR</button>
		<button type="button" on:click={closeModal}>CANCERLAR</button>
	</footer>
</form>

<style lang="postcss">
	form {
		gap: 2em;
	}

	footer {
		gap: 1em;
	}
</style>
