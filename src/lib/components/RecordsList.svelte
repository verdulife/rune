<script>
	import Record from '$components/Record.svelte';

	export let records;
</script>

{#if records.length > 0}
	<section class="col full">
		<header class="row jbetween aend wfull">
			<h3>Registros</h3>
		</header>

		<ul class="col wfull">
			{#each records as record}
				<li class="col wfull">
					<Record {record} />
				</li>
			{/each}
		</ul>
	</section>
{/if}

<style lang="postcss">
	section {
		gap: 1em;
	}

	header {
		padding: 1em;
	}
</style>
