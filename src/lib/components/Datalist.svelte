<script>
	import { exercisesList } from '$lib/utils';
	export let value;
</script>

<label class="col wfull" for="exercise">
	<h3>Nombre del ejercicio</h3>
	<input class="wfull" list="exercisesList" type="search" id="exercise" bind:value required />

	<datalist id="exercisesList">
		{#each exercisesList as exercise}
			<option value={exercise}>{exercise}</option>
		{/each}
	</datalist>
</label>

<style lang="postcss">
	input,
	datalist,
	option {
		text-transform: uppercase;
	}

	h3 {
		padding: 0.5em;
	}
</style>
