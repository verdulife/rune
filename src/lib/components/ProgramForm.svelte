<script>
	import { programDefaults } from '$lib/utils';
	import { createProgramByDay, updateProgramByData, deleteProgramByData } from '$lib/methods';

	import Incrementer from '$components/Incrementer.svelte';
	import Datalist from '$components/Datalist.svelte';
	import Trash from '$components/icons/Trash.svelte';

	export let displayDay, showModal;

	let data = showModal?.id ? showModal : { ...programDefaults };
	data.day = displayDay;

	function closeModal() {
		showModal = null;
	}

	function saveExercise() {
		if (!showModal?.id) createProgramByDay({ day: displayDay, data });
		else updateProgramByData({ data });
		closeModal();
	}

	function deleteExercise() {
		const check = confirm('¿Quieres borrar el ejercicio de este día?');
		if (!check) return;

		deleteProgramByData({ data });
		closeModal();
	}
</script>

<form class="col acenter wfull" on:submit|preventDefault={saveExercise}>
	<Datalist bind:value={data.exercise} />

	<Incrementer id="weight" bind:value={data.weight} />
	<Incrementer id="reps" bind:value={data.reps} />
	<Incrementer id="series" bind:value={data.series} />

	{#if data.id}
		<button type="button" class="wfull">REGISTRAR FALLO</button>
	{/if}

	<footer class="row fcenter wfull">
		<button type="submit">GUARDAR</button>
		<button type="button" on:click={closeModal}>CANCERLAR</button>

		{#if data.id}
			<button type="button" class="unset" on:click={deleteExercise}><Trash /></button>
		{/if}
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
