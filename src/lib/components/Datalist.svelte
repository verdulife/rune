<script>
	import { exercisesList } from '$lib/utils';
	export let value;
</script>

<label class="col wfull" for="exercise">
	<p>Nombre del ejercicio</p>
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
</style>
