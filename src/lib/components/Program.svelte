<script>
	import Add from '$components/icons/Add.svelte';

	export let program = null;
	export let showModal = null;

	function openModal(value) {
		showModal = value;
	}
</script>

<article class="col" class:add={!program}>
	{#if !program}
		<button class="unset col fcenter full" on:click={() => openModal({})}>
			<Add />

			<p class="tcenter">
				<small>AÑADIR</small>
			</p>
		</button>
	{:else}
		<button class="unset col full" on:click={() => openModal(program)}>
			<header>
				<p>{program.exercise}</p>
			</header>

			<main>
				<h3>
					<strong>{program.weight}kg</strong>
				</h3>
			</main>

			<footer>
				<p><b>{program.reps}r / {program.series}s</b></p>
			</footer>
		</button>
	{/if}
</article>

<style lang="postcss">
	article {
		width: calc((100% - 0.8em) / 3);
		aspect-ratio: 3/4;
		background: linear-gradient(45deg, var(--accent), var(--accent-400));
		border-radius: 1em;
		padding: 1.5em 1em 1em 1em;

		&.add {
			background: linear-gradient(45deg, var(--base-700), var(--base-600));
		}
	}

	main {
		margin-top: auto;
	}

	h3 {
		font-size: var(--font-xl);
	}

	button {
		gap: 1em;
	}
</style>
