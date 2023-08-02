<script>
	export let data;

	const { exercise, date, weight, reps, series } = data;
</script>

<article class="col">
	<header class="col">
		<small>{exercise}</small>
		<small>{date}</small>
	</header>
	<main>
		<h3>
			<strong>{weight}kg</strong>
		</h3>
	</main>
	<footer>
		<p><b>{reps}r / {series}s</b></p>
	</footer>
</article>

<style>
	article {
		width: 150px;
		aspect-ratio: 3/4;
		background-color: hsl(var(--base-hsl), 0.25);
		border-radius: 2em;
		padding: 1.5em 1em 1em 1em;
	}

	small:last-of-type {
		color: var(--alt);
	}

	main {
		margin-top: auto;
	}

	h3 {
		font-size: var(--font-xl);
	}

	p {
		font-size: var(--font-md);
		color: var(--alt);
	}
</style>
