<script>
	import Program from '$components/Program.svelte';
	import Modal from '$components/Modal.svelte';

	export let displayDay, programed;

	$: showModal = null;
</script>

<section class="col wfull">
	<header class="row jbetween aend wfull">
		<h3>Hoy</h3>
	</header>

	<main class="row wrap wfull">
		{#if programed.length > 0}
			{#each programed as program}
				<Program {program} />
			{/each}
		{/if}

		<Program {displayDay} bind:showModal />
	</main>
</section>

<Modal {displayDay} bind:showModal />

<style lang="postcss">
	section {
		gap: 1em;
	}

	main {
		gap: 0.4em;
	}
</style>
