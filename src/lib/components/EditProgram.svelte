<script>
	import { User } from '$lib/stores';
	import Incrementer from './Incrementer.svelte';

	export let showModal = null;
	const { day } = showModal;

	function closeModal() {
		showModal = null;
	}

	function deleteExercise() {
		const check = confirm('¿Quieres borrar el ejercicio de este día?');
		if (!check) return;

		const cleaned = $User[day].programed.filter((p) => p !== showModal);
		$User[day].programed = cleaned;

		closeModal();
	}

	function saveChanges() {
		const updated = $User[day].programed.map((p) =>
			p.exercise === showModal.exercise ? showModal : p
		);
		$User[day].programed = updated;

		closeModal();
	}
</script>

{#if showModal}
	<section class="col acenter wfull">
		<Incrementer id="weight" bind:value={showModal.weight} />
		<button class="wfull">REGISTRAR FALLO</button>
		<button class="wfull" on:click={deleteExercise}>BORRAR EJERCICIO</button>

		<footer class="row jcenter wfull">
			<button on:click={saveChanges}>REGISTRAR</button>
			<button on:click={closeModal}>CANCELAR</button>
		</footer>
	</section>
{/if}

<style lang="postcss">
	section {
		gap: 2em;
	}
</style>
