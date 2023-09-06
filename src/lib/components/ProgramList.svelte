<script>
	import Program from '$components/Program.svelte';
	export let programed, showModal;
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

<style lang="postcss">
	section {
		padding: 1em 0;
	}

	main {
		gap: 0.4em;
	}
</style>
