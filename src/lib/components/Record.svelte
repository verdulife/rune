<script>
	import { exercise_lib } from '$lib/libs';
	import { formatDate, parseRir, parseWeight } from '$lib/utils';

	export let record;
</script>

<article class="row jbetween wfull">
	<main class="col">
		<h5 class="clamp">
			{record.exercise}
		</h5>

		<footer class="row jend">
			<small>
				{parseWeight(record.weight)}
			</small>
			<small>
				{record.reps}
				{exercise_lib.reps.unit}
			</small>
			<small>
				{record.series}
				{exercise_lib.series.unit}
			</small>
			<small>
				{parseRir(record.rir || 0)}
			</small>
		</footer>
	</main>

	<aside>
		<small>{formatDate(record.date)}</small>
	</aside>
</article>

<style lang="postcss">
	article {
		gap: 1em;
		border-bottom: 1px solid var(--base-200);
		padding: 1em;

		@media (--dark) {
			border-color: var(--base-700);
		}
	}

	small {
		color: var(--base-500);
		white-space: nowrap;
		font-size: var(--font-xs);
		font-weight: bold;
		text-transform: uppercase;
		border-left: 1px solid var(--base-400);
		padding-left: 0.5em;

		&:first-of-type {
			border: none;
		}
	}

	footer {
		gap: 0.5em;
		font-size: var(--font-xs);
	}
</style>
