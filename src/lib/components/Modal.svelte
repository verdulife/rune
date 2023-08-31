<script>
	import { slide } from 'svelte/transition';
	import ProgramForm from '$components/ProgramForm.svelte';

	export let displayDay, showModal;
</script>

{#if showModal}
	<div class="modal wfull" transition:slide>
		<ProgramForm {displayDay} bind:showModal />
	</div>
{/if}

<style lang="postcss">
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
