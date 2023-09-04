<script>
	import { User } from '$lib/stores';
	import { currentDay } from '$lib/utils';
	import { metadata } from '$lib/metadata';

	import Meta from '$components/Meta.svelte';
	import Header from '$components/Header.svelte';
	import ProgramList from '$components/ProgramList.svelte';
	import RecordsList from '$components/RecordsList.svelte';

	export let data;
	const { origin } = data;
	let displayDay = currentDay;

	$: userDay = $User[displayDay];
	$: ({ programed, records } = userDay);
</script>

<Meta {metadata} {origin} />

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
