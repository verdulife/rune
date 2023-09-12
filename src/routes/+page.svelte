<script>
	import { User } from '$lib/stores';
	import { currentDay } from '$lib/utils';
	import { metadata } from '$lib/metadata';
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';

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
	let screensaver = false;
	let wakeLock = null;

	function runScreensaver() {
		setTimeout(() => {
			if (wakeLock) screensaver = true;
		}, 10000);
	}

	function resetScreensaver() {
		screensaver = false;
		runScreensaver();
	}

	async function awakeOn() {
		if (!'wakeLock' in navigator) return;

		try {
			wakeLock = await navigator.wakeLock.request('screen');
			runScreensaver();

			console.log('awake is on');
		} catch (err) {
			console.log(err);
		}

		wakeLock.addEventListener('release', () => {
			wakeLock = null;
			console.log('awake is off');
		});

		document.addEventListener('visibilitychange', async () => {
			if (document.visibilityState === 'visible') {
				wakeLock = await navigator.wakeLock.request('screen');
				console.log('awake is on');
			}
		});
	}

	async function awakeOff() {
		if (!'wakeLock' in navigator || !wakeLock) return;

		try {
			await wakeLock.release();
			wakeLock = null;
			console.log('awake is off');
		} catch (err) {
			console.log(err);
		}
	}

	$: if (browser) {
		if (browser && training) awakeOn();
		else awakeOff();
	}
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

{#if screensaver}
	<button class="screensaver unset row full" on:click={resetScreensaver} transition:fade />
{/if}

<style lang="postcss">
	main {
		gap: 2em;
	}

	.screensaver {
		position: fixed;
		inset: 0;
		background-color: hsl(var(--base-900-hsl), 0.7) !important;
	}
</style>
