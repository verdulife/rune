<script>
	import { formatDate, parseWeight, record_states, state_labels } from '$lib/utils';

	export let record;
</script>

<article class="row jbetween acenter wfull">
	<main class="col">
		<h5 class="clamp">
			{record.exercise}
		</h5>

		<footer>
			<small>{formatDate(record.date)}</small>
		</footer>
	</main>

	<aside>
		<main class="row jend">
			<small>{record.fail ? state_labels.fail : state_labels[record.state]}</small>
		</main>

		<footer class="row jend">
			{#if record.state === record_states.updated}
				<small>
					{parseWeight(record.weight)}
				</small>
				<small>
					{record.reps} r
				</small>
				<small>
					{record.series} s
				</small>
				{#if record.rir !== -1}
					<small>
						{record.rir || 0} rir
					</small>
				{/if}
			{/if}
		</footer>
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

	main > small {
		font-weight: bold;
		color: var(--accent);
	}

	footer {
		gap: 0.5em;
		font-size: var(--font-xs);
		color: var(--base-500);

		& small {
			font-size: var(--font-xs);
			font-weight: bold;
			text-transform: uppercase;
			border-left: 1px solid var(--base-400);
			padding-left: 0.5em;

			&:first-of-type {
				border: none;
			}
		}
	}
</style>
