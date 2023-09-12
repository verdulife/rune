<script>
	import { exercisesList } from '$lib/exercises';
	export let value;
</script>

<label class="col wfull" for="exercise">
	<p>Nombre del ejercicio</p>
	<input
		class="wfull"
		list="exercisesList"
		type="search"
		id="exercise"
		bind:value
		required
	/>

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

	p {
		color: var(--base-400);
		padding: 0.5em 1em;
	}
</style>
