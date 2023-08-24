<script>
	import { User } from '$lib/stores';
	import { days, currentDay } from '$lib/utils';

	import Header from '$components/Header.svelte';
	import ProgramSlider from '$components/ProgramSlider.svelte';
	import RecordsList from '$components/RecordsList.svelte';

	let displayDay = currentDay;

	$: userDay = $User[displayDay];
	$: ({ programed, records } = userDay);
</script>

<Header bind:displayDay />

<main class="col wfull">
	<ProgramSlider {displayDay} {programed} />
	<RecordsList {records} />
</main>

<style lang="postcss">
	main {
		gap: 2em;
	}
</style>
