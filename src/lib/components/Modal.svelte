<script>
	import { swipe } from 'svelte-gestures';
	import { fly } from 'svelte/transition';
	import AddProgram from '$components/AddProgram.svelte';
	import EditProgram from '$components/EditProgram.svelte';

	export let displayDay, showModal;

	function closeModal() {
		showModal = null;
	}
</script>

{#if showModal}
	<div
		class="modal wfull"
		class:open={showModal}
		use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-down' }}
		on:swipe={closeModal}
		transition:fly
	>
		{#if showModal === 'add'}
			<AddProgram {displayDay} />
		{/if}

		{#if showModal === 'edit'}
			<EditProgram />
		{/if}
	</div>
{/if}

<style lang="postcss">
	.modal {
		position: fixed;
		bottom: 0;
		background-color: hsl(var(--alt-hsl), 0.75);
		backdrop-filter: blur(1em);
		border-radius: 3em 3em 0 0;
		box-shadow: inset 0px 1px 1px 0px hsl(var(--base-hsl), 0.25);
		padding: 4em 2em 2em 2em;
		z-index: 1;
	}
</style>
