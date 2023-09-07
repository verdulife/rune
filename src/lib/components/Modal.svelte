<script>
	import { slide } from 'svelte/transition';
	import ProgramForm from '$components/ProgramForm.svelte';

	export let displayDay, showModal;

	function closeModal() {
		showModal = null;
	}
</script>

{#if showModal}
	<button class="outer unset" on:click={closeModal} />
	<div class="modal wfull" transition:slide>
		<ProgramForm {displayDay} bind:showModal />
	</div>
{/if}

<style lang="postcss">
	.outer {
		position: fixed;
		inset: 0;
	}

	.modal {
		position: fixed;
		bottom: 0;
		background-color: var(--base);
		border-top: 1px solid var(--base-200);
		border-radius: 2em 2em 0 0;
		padding: 2em;
		z-index: 1;
		
		@media (--dark) {
			background-color: var(--base-800);
			border-color: var(--base-700);
		}
	}
</style>
