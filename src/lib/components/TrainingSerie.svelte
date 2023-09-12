<script>
	export let exercise, check, index;
</script>

<label class="col acenter grow" for={`${exercise}_${index + 1}`}>
	<input type="checkbox" id={`${exercise}_${index + 1}`} bind:checked={check} hidden />

	<h4><b>{index + 1}</b></h4>
	<small>SERIE</small>
</label>

<style lang="postcss">
	label {
		color: var(--base);
		border: 1px solid var(--accent-200);
		border-radius: 1em;
		padding: 1em;

		&:has(input:checked) {
			background-color: var(--accent-200);
		}
	}
</style>
