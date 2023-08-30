<script>
	export let record;
</script>

<article class="row jbetween acenter wfull">
	<main class="col">
		<h5>
			{record.exercise}
		</h5>

		<footer class="row">
			{record.weight}kg | {record.reps}reps | {record.series}series {record.fail ? '| FALLO' : ''}
		</footer>
	</main>

	<aside>
		<small>{record.state}</small>
	</aside>
</article>

<style>
	article {
		border-bottom: 1px solid var(--base-800);
		padding: 1em 0;
	}

	footer {
		font-size: var(--font-xs);
		color: var(--base-500);
	}

	small {
		background-color: var(--base-900);
		font-size: var(--font-xs);
		text-transform: uppercase;
		border-radius: 1em;
		padding: 0.3em 0.6em;
	}
</style>
