<script>
	import { programDefaults } from '$lib/defaults';
	import { record_states } from '$lib/libs';
	import { createProgramByDay, updateProgramByData, deleteProgramByData } from '$lib/methods';

	import Incrementer from '$components/Incrementer.svelte';
	import Datalist from '$components/Datalist.svelte';
	import Trash from '$components/icons/Trash.svelte';
	import Save from '$components/icons/Save.svelte';
	import Back from '$components/icons/Back.svelte';

	export let displayDay, showModal;

	let data = showModal?.id ? showModal : { ...programDefaults };
	data.day = data.day || displayDay;

	function closeModal() {
		showModal = null;
	}

	function saveExercise() {
		if (!showModal?.id) createProgramByDay(data);
		else updateProgramByData(data);
		closeModal();
	}

	function deleteExercise() {
		const check = confirm('¿Quieres borrar el ejercicio de este día?');
		if (!check) return;

		data.state = record_states.deleted;
		deleteProgramByData(data);
		closeModal();
	}
</script>

<form class="col acenter wfull" on:submit|preventDefault={saveExercise}>
	<Datalist bind:value={data.exercise} />

	<Incrementer id="weight" bind:value={data.weight} />
	<hr class="wfull" />
	<Incrementer id="reps" bind:value={data.reps} />
	<hr class="wfull" />
	<Incrementer id="series" bind:value={data.series} />

	{#if data.id}
		<hr class="wfull" />
		<Incrementer id="rir" bind:value={data.rir} />
	{/if}

	<footer class="row fcenter wfull">
		<button type="submit" class="unset col acenter grow">
			<Save />
			<small>GUARDAR</small>
		</button>

		{#if data.id}
			<button type="button" class="unset col acenter grow" on:click={deleteExercise}>
				<Trash />
				<small>BORRAR</small>
			</button>
		{/if}

		<button type="button" class="unset col acenter grow" on:click={closeModal}>
			<Back />
			<small>CERRAR</small>
		</button>
	</footer>
</form>

<style lang="postcss">
	form {
		gap: 2em;

		& hr {
			opacity: 0.2;
		}
	}

	footer {
		background-color: var(--base-100);
		border-radius: 1em;
		padding: 1em;

		@media (--dark) {
			background-color: var(--base-700);
		}

		& button {
			gap: 0.5em;
			color: var(--base-900);

			@media (--dark) {
				color: var(--base);
			}
		}
	}
</style>
