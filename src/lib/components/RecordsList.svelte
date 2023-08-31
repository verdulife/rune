<script>
	import Record from '$components/Record.svelte';

	export let records;
</script>

<section class="col full">
	<header class="row jbetween aend wfull">
		<h3>Registros</h3>
	</header>

	<ul class="col wfull">
		{#if records.length > 0}
			{#each records as record}
				<li class="col wfull">
					<Record {record} />
				</li>
			{/each}
		{:else}
			<li class="col wfull">
				<p>No hay registros</p>
			</li>
		{/if}
	</ul>
</section>

<style lang="postcss">
	section {
		gap: 1em;
	}

	ul {
		gap: 0.4em;
	}
</style>
