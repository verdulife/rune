<script>
	import { parseWeight } from '$lib/utils';

	export let program, done;
	let checks = [];

	for (let i = 0; i < program.series; i++) {
		const checked = false;
		checks = [...checks, checked];
	}

	$: allChecked = checks.every((check) => check);
	$: if (allChecked) done = true;
</script>

<article class="col wfull">
	<header>
		<h1>{program.exercise.toLowerCase()}</h1>
	</header>

	<main>
		<h3>
			<strong>{parseWeight(program.weight)} / {program.reps}r</strong>
		</h3>
	</main>

	<footer class="row jbetween wfull">
		{#if !allChecked}
			{#each checks as check, i}
				<label class="col acenter grow" for={`${program.exercise}_${i + 1}`}>
					<input type="checkbox" id={`${program.exercise}_${i + 1}`} bind:checked={check} hidden />

					<h4><b>{i + 1}</b></h4>
					<small>SERIE</small>
				</label>
			{/each}
		{:else}
			<span class="row jcenter wfull">
				<h3>Finalizado</h3>
			</span>
		{/if}
	</footer>
</article>

<style lang="postcss">
	article {
		background: linear-gradient(45deg, var(--accent), var(--accent-400));
		word-break: break-word;
		border-radius: 1em;
		padding: 1.5em 1em 1em 1em;
		overflow: hidden;
	}

	h1 {
		text-transform: capitalize;
		color: var(--base);
	}

	main {
		margin: auto 0 0.25em 0;
	}

	h3 {
		color: var(--accent-200);
	}

	footer {
		gap: 0.5em;
	}

	label {
		color: var(--base);
		border: 1px solid var(--accent-200);
		border-radius: 1em;
		padding: 1em;

		&:has(input:checked) {
			background-color: var(--accent-200);
		}
	}

	span {
		background-color: var(--accent-200);
		border: 1px solid var(--accent-200);
		border-radius: 1em;
		padding: 1em;

		& h3 {
			color: var(--base);
		}
	}
</style>
