<script>
	import { days } from '$lib/utils';

	export let displayDay;

	const lastDay = days.length;

	$: day = days[displayDay];
	$: prev_day = days[displayDay - 1] || days[days.length - 1];
	$: next_day = days[displayDay + 1] || days[0];

	function prevDay() {
		const prevDay = displayDay - 1;

		if (prevDay < 0) displayDay = lastDay - 1;
		else displayDay--;
	}

	function nextDay() {
		const nextDay = displayDay + 1;

		if (nextDay === lastDay) displayDay = 0;
		else displayDay++;
	}
</script>

<section class="row jbetween acenter wfull">
	<button on:click={prevDay}>{prev_day}</button>
	<h3>{day}</h3>
	<button on:click={nextDay}>{next_day}</button>
</section>

<style lang="postcss">
	section {
		position: sticky;
		top: 0;
		background-color: var(--base);
		border-bottom: 1px solid var(--base-200);
		padding: 2em 1em;
		padding-top: calc(var(--safe-top) + 2em);

		@media (--dark) {
			background-color: var(--base-900);
			border-color: var(--base-700);
		}
	}

	h3 {
		text-transform: capitalize;
	}

	button {
		width: 90px;
		font-size: var(--font-2xs);
		font-weight: bold;
		text-transform: uppercase;
		padding: 1em 1.5em;
	}
</style>
