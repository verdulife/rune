<script>
	export let program = null;
	export let showModal = null;

	function openModal(value) {
		showModal = value;
	}
</script>

<article class="col">
	{#if !program}
		<button class="unset col fcenter full" on:click={() => openModal({})}>
			<h4>+</h4>
			<p class="tcenter">añadir ejercicio</p>
		</button>
	{:else}
		<button class="unset col full" on:click={() => openModal(program)}>
			<header class="col">
				<small>{program.exercise}</small>
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

<style>
	article {
		width: calc((100% - 0.8em) / 3);
		aspect-ratio: 3/3.5;
		background-color: var(--accent);
		border-radius: 1em;
		padding: 1.5em 1em 1em 1em;
	}

	small:last-of-type {
		color: var(--accent-200);
	}

	main {
		margin-top: auto;
	}

	h3 {
		font-size: var(--font-xl);
	}

	h4,
	p {
		color: var(--accent-200);
		font-size: var(--font-md);
		line-height: 1;
	}

	button {
		gap: 1em;
	}
</style>
