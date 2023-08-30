<script>
	import { days } from '$lib/utils';

	export let displayDay;

	const lastDay = days.length - 1;
	$: day = days[displayDay];

	function prevDay() {
		const prevDay = displayDay - 1;

		if (prevDay < 0) displayDay = lastDay;
		else displayDay--;
	}

	function nextDay() {
		const nextDay = displayDay + 1;

		if (nextDay === lastDay) displayDay = 0;
		else displayDay++;
	}
</script>

<section class="row acenter wfull">
	<h3>{day}</h3>
	<button on:click={prevDay}>{'<'}</button>
	<button on:click={nextDay}>{'>'}</button>
</section>

<style lang="postcss">
	section {
		position: sticky;
		top: 0;
		gap: 2em;
		background-color: hsl(var(--alt-hsl), 0.7);
		backdrop-filter: blur(1em);
		padding: 1em 0;
	}

	h3 {
		text-transform: capitalize;
		margin-right: auto;
	}
</style>
