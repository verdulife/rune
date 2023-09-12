<script>
	export let training;

	function cancelTraining() {
		training = false;
	}
</script>

<footer class="row fcenter wfull">
	<button class="unset wfull" on:click={cancelTraining}>CANCELAR ENTRENO</button>
</footer>

<style lang="postcss">
	footer {
		padding: 2em;
	}

	button {
		color: var(--base-800);
		font-weight: bold;
		
		@media (--dark) {
			color: var(--base-200);
		}
	}
</style>
