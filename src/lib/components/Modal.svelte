<script>
	import { slide } from 'svelte/transition';
	import AddProgram from '$components/AddProgram.svelte';
	import EditProgram from '$components/EditProgram.svelte';

	export let displayDay, showModal;
</script>

{#if showModal}
	<div class="modal wfull" transition:slide>
		{#if showModal.exercise}
			<EditProgram bind:showModal />
		{:else}
			<AddProgram {displayDay} bind:showModal />
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
