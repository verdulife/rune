<script>
	import { User } from '$lib/stores';
	import TrainingActions from './TrainingActions.svelte';
	import TrainingCard from './TrainingCard.svelte';

	export let displayDay, training;
	const { programed } = $User[displayDay];
	let progress = programed.map((program) => (program.done = false));

	function finishTraning() {
		training = false;
	}

	$: progressComplete = progress.every((p) => p);
	$: if (progressComplete) finishTraning();
</script>

<section class="yscroll">
	<main class="col wfull">
		{#each programed as program, i}
			<TrainingCard {program} bind:done={progress[i]} />
		{/each}
	</main>

	<TrainingActions bind:training />
</section>

<style lang="postcss">
	section {
		position: fixed;
		inset: 0;
		background-color: var(--base);

		@media (--dark) {
			background-color: var(--base-900);
		}
	}

	main {
		gap: 0.5em;
	}
</style>
