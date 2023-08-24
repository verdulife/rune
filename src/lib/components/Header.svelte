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

<section class="row fcenter wfull">
	<button on:click={prevDay}>{'<'}</button>
	<h1>{day}</h1>
	<button on:click={nextDay}>{'>'}</button>
</section>

<style lang="postcss">
	section {
		gap: 2em;
		padding: 4em 2em;
	}

	h1 {
		text-transform: uppercase;
	}
</style>
