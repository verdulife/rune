<script>
	import Record from '$components/Record.svelte';

	export let records;
</script>

{#if records.length > 0}
	<section class="col acenter full">
		<header class="row">
			<p><small>REGISTRO</small></p>
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
		background-color: var(--base-700);
		color: var(--base-400);
		border: 1px solid var(--base-600);
		border-radius: 1em;
		padding: 0.5em 2em;
	}
</style>
