<script>
	import { Users } from '$lib/stores';
	import NoUser from '$components/NoUser.svelte';
	import Header from '$components/Header.svelte';
	import CardSlider from '$components/CardSlider.svelte';
	import Modal from '$components/Modal.svelte';

	export let data;
	const user = $Users.find((u) => u.name == data.user);
	let open = false;

	function togModal() {
		open = !open;
	}
</script>

{#if user}
	<Header name={user.name} />
	<section class="col wfull">
		<CardSlider />
		<CardSlider />
		<CardSlider />

		<button on:click={togModal}>+ AÑADIR</button>
	</section>

	<Modal {open} />
{:else}
	<NoUser />
{/if}

<style>
	section {
		position: relative;
		gap: 3em;
		padding-bottom: 8em;
	}

	button {
		position: fixed;
		bottom: 3em;
		left: 0;
		right: 0;
		width: 150px;
		margin: 0 auto;
	}
</style>
