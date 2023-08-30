<script>
	import { User } from '$lib/stores';
	import { currentDay } from '$lib/utils';

	import Header from '$components/Header.svelte';
	import ProgramList from '$components/ProgramList.svelte';
	import RecordsList from '$components/RecordsList.svelte';

	let displayDay = currentDay;

	$: userDay = $User[displayDay];
	$: ({ programed, records } = userDay);
</script>

<Header bind:displayDay />

<main class="col full">
	<ProgramList {displayDay} {programed} />
	<RecordsList {records} />
</main>

<style lang="postcss">
	main {
		gap: 2em;
	}
</style>
