<script>
	import Record from '$components/Record.svelte';

	export let records;
</script>

<section class="col wfull">
	<header class="row jbetween aend wfull">
		<h2>Registros</h2>
	</header>

	<main class="scrollbar snap" horizontal>
		{#if records.length === 0}
			<p>No hay registros</p>
		{:else}
			{#each records as record}
				<Record {record} />
			{/each}
		{/if}
	</main>
</section>

<style lang="postcss">
</style>
