<script>
	import Program from '$components/Program.svelte';
	export let programed, showModal, training;

	function startTraining() {
		training = true;
	}
</script>

<section class="col acenter wfull">
	<main class="row wrap wfull">
		{#if programed.length > 0}
			{#each programed as program}
				<Program {program} bind:showModal />
			{/each}
		{/if}

		<Program bind:showModal />
	</main>

	{#if programed.length > 0}
		<button class="wfull" on:click={startTraining}>INICIAR ENTRENO</button>
	{/if}
</section>

<style lang="postcss">
	section {
		gap: 1em;
		padding: 1em 0;
	}

	main {
		gap: 0.4em;
	}
</style>
