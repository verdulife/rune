<script>
	import { User } from '$lib/stores';
	import { currentDay } from '$lib/utils';
	import { metadata } from '$lib/metadata';

	import Meta from '$components/Meta.svelte';
	import Header from '$components/Header.svelte';
	import ProgramList from '$components/ProgramList.svelte';
	import RecordsList from '$components/RecordsList.svelte';
	import Modal from '$components/Modal.svelte';
	import Training from '$components/Training.svelte';
	/* import Nav from '$components/Nav.svelte'; */

	export let data;
	const { origin } = data;
	let displayDay = currentDay;

	$: userDay = $User[displayDay];
	$: ({ programed, records } = userDay);
	$: showModal = null;
	$: training = false;
</script>

<Meta {metadata} {origin} />

<Header bind:displayDay />

<main class="col full">
	<ProgramList {programed} bind:showModal bind:training />
	<RecordsList {records} />
</main>

<!-- <Nav /> -->

{#if showModal}
	<Modal {displayDay} bind:showModal />
{/if}

{#if training}
	<Training {displayDay} bind:training />
{/if}

<style lang="postcss">
	main {
		gap: 2em;
	}
</style>
