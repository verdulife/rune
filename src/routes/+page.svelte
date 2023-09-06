<script>
	import { User } from '$lib/stores';
	import { currentDay } from '$lib/utils';
	import { metadata } from '$lib/metadata';

	import Meta from '$components/Meta.svelte';
	import Header from '$components/Header.svelte';
	import ProgramList from '$components/ProgramList.svelte';
	import RecordsList from '$components/RecordsList.svelte';
	import Modal from '$components/Modal.svelte';

	export let data;
	const { origin } = data;
	let displayDay = currentDay;

	$: userDay = $User[displayDay];
	$: ({ programed, records } = userDay);
	$: showModal = null;
</script>

<Meta {metadata} {origin} />

<Header bind:displayDay />

<main class="col full">
	<ProgramList {programed} bind:showModal />
	<RecordsList {records} />
</main>

<Modal {displayDay} bind:showModal />

<style lang="postcss">
	main {
		gap: 2em;
	}
</style>
