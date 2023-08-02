<script>
	import Card from '$components/Card.svelte';

	let data = {
		exercise: 'Press de banca',
		date: '10/07/2023',
		weight: 20,
		reps: 10,
		series: 4,
		plus: false,
		fail: false
	};
</script>

<div class="col wfull">
  <header class="row jbetween aend wfull">
    <h2><b>Hoy</b></h2>
    <a href="/hoy">VER TODO</a>
  </header>

	<section class="scrollbar snap" horizontal>
		<Card {data} />
		<Card {data} />
		<Card {data} />
		<Card {data} />
		<Card {data} />
		<Card {data} />
		<Card {data} />
		<Card {data} />
		<Card {data} />
		<Card {data} />
		<Card {data} />
		<Card {data} />
	</section>
</div>

<style>
  div {
    gap: 1em
  }
</style>