<script>
	import { User } from '$lib/stores';
	import { formatDate, record_states, state_labels } from '$lib/utils';
	import { redirect } from '@sveltejs/kit';

	export let record;

	let change = {
		name: false,
		weight: false,
		reps: false,
		series: false
	};

	function detectUpdates() {
		if (record.state === record_states.created) return;

		$User[record.day].records.forEach((r) => {
			if (r.id !== record.id) return;

			if (r.exercise !== record.exercise) change.name = true;
			if (r.weight !== record.weight) change.weight = true;
			if (r.reps !== record.reps) change.reps = true;
			if (r.series !== record.series) change.series = true;
		});
	}

	detectUpdates();
</script>

<article class="row jbetween acenter wfull">
	<main class="col">
		<h5>
			{record.exercise}
		</h5>

		<footer>
			<small>{formatDate(record.date)}</small>
		</footer>
	</main>

	<aside>
		<main>
			{#if record.state === record_states.created}
				{state_labels.created}
			{:else if change.name}
				{state_labels.name}
			{:else if record.fail}
				{state_labels.fail}
			{:else if record.state === record_states.deleted}
				{state_labels.deleted}
			{/if}
		</main>

		<footer class="row jend">
			{#if change.weight}
				<span>
					↑ {record.weight}kg
				</span>
			{/if}

			{#if change.reps}
				<span>
					↑ {record.reps}r
				</span>
			{/if}

			{#if change.series}
				<span>
					↑ {record.series}s
				</span>
			{/if}
		</footer>
	</aside>
</article>

<style>
	article {
		border-bottom: 1px solid var(--base-800);
		padding: 1em;
	}

	footer {
		font-size: var(--font-xs);
		color: var(--base-500);
	}

	small {
		font-size: var(--font-xs);
		text-transform: uppercase;
		border-radius: 1em;
	}
</style>
