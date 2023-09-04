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
		background-color: hsl(var(--base-hsl), 0.75);
		backdrop-filter: blur(1em);
		border-radius: 3em 3em 0 0;
		padding: 4em 2em 2em 2em;
		z-index: 1;

		@media (--dark) {
			background-color: hsl(var(--base-900-hsl), 0.75);
		}
	}
</style>
