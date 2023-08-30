<script>
	import Program from '$components/Program.svelte';
	import Modal from '$components/Modal.svelte';

	export let displayDay, programed;

	$: showModal = null;
</script>

<section class="col wfull">
	<main class="row wrap wfull">
		{#if programed.length > 0}
			{#each programed as program}
				<Program {program} bind:showModal />
			{/each}
		{/if}

		<Program bind:showModal />
	</main>
</section>

<Modal {displayDay} bind:showModal />

<style lang="postcss">
	main {
		gap: 0.4em;
	}
</style>
