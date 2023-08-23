<script>
	import { swipe } from 'svelte-gestures';

	export let open = false;

	const weekday = new Date().getDay();

	let data = {
		registration: true,
		exercise: '',
		weekday,
		weight: 2.5,
		reps: 4,
		series: 10,
		plus: false,
		fail: false
	};

	function closeModal() {
		open = false;
	}

	function incWeight() {
		data.weight += 2.5;
	}

	function decWeight() {
		data.weight -= 2.5;
		if (data.weight < 2.5) data.weight = 2.5;
	}

	function inc(value) {
		data[value]++;
	}

	function dec(value) {
		data[value]--;
		if (data[value] < 1) data[value] = 1;
	}

	function saveData() {
		console.log(data);
	}
</script>

<div
	class="modal scrollbar"
	class:open
	use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-down' }}
	on:swipe={closeModal}
>
	<section class="col wfull">
		<header class="col wfull">
			<p>¿Quieres registrar o programar un ejercicio?</p>

			<div class="row wfull">
				<label class="radio row fcenter grow" for="register">
					REGISTRAR
					<input
						type="radio"
						id="register"
						name="registration"
						value={true}
						bind:group={data.registration}
						hidden
						required
					/>
				</label>

				<label class="radio row fcenter grow" for="program">
					PROGRAMAR
					<input
						type="radio"
						id="program"
						name="registration"
						value={false}
						bind:group={data.registration}
						hidden
						required
					/>
				</label>
			</div>
		</header>

		<main class="col wfull">
			<label class="col wfull" for="exercise">
				<p>Nombre del ejercicio</p>
				<input
					class="wfull"
					list="exercisesList"
					type="search"
					id="exercise"
					bind:value={data.exercise}
					required
				/>

				<datalist id="exercisesList">
					<option value="press de banca">press de banca</option>
					<option value="peso muerto">peso muerto</option>
				</datalist>
			</label>

			{#if !data.registration}
				<label class="col wfull" for="weekday">
					<p>¿A que día pertenece este entreno?</p>
					<select class="wfull" id="weekday" bind:value={data.weekday} required>
						<option value={1}>LUNES</option>
						<option value={2}>MARTES</option>
						<option value={3}>MIÉRCOLES</option>
						<option value={4}>JUEVES</option>
						<option value={5}>VIERNES</option>
						<option value={6}>SÁBADO</option>
						<option value={0}>DOMINGO</option>
					</select>
				</label>
			{/if}

			<label class="row jbetween wfull" for="weight">
				<button class="w1/3" on:click={decWeight}>-</button>
				<input
					type="number"
					inputmode="numeric"
					step="2.5"
					id="weight"
					bind:value={data.weight}
					hidden
					required
				/>
				<h3>{data.weight}kg</h3>
				<button class="w1/3" on:click={incWeight}>+</button>
			</label>

			<label class="row jbetween wfull" for="reps">
				<button class="w1/3" on:click={() => dec('reps')}>-</button>
				<input
					type="number"
					inputmode="numeric"
					step="2.5"
					id="reps"
					bind:value={data.reps}
					hidden
					required
				/>
				<h3>{data.reps} reps</h3>
				<button class="w1/3" on:click={() => inc('reps')}>+</button>
			</label>

			<label class="row jbetween wfull" for="series">
				<button class="w1/3" on:click={() => dec('series')}>-</button>
				<input
					type="number"
					inputmode="numeric"
					step="2.5"
					id="series"
					bind:value={data.series}
					hidden
					required
				/>
				<h3>{data.series} series</h3>
				<button class="w1/3" on:click={() => inc('series')}>+</button>
			</label>

			{#if data.registration}
				<aside class="row wfull">
					<label class="radio row fcenter grow" for="plus">
						PLUS
						<input type="checkbox" id="plus" bind:checked={data.plus} hidden required/>
					</label>

					<label class="radio row fcenter grow" for="fail">
						FALLO
						<input type="checkbox" id="fail" bind:checked={data.fail} hidden required/>
					</label>
				</aside>
			{/if}
		</main>

		<footer class="row jcenter wfull">
			<button class="w1/2" on:click={saveData}>GUARDAR</button>
		</footer>
	</section>
</div>

<style lang="postcss">
	.modal {
		position: fixed;
		inset: 100% 0 0 0;
		background-color: hsl(var(--alt-hsl), 0.75);
		backdrop-filter: blur(1em);
		border-radius: 3em 3em 0 0;
		box-shadow: inset 0px 1px 1px 0px hsl(var(--base-hsl), 0.25);
		padding: 4em 2em 2em 2em;
		pointer-events: none;
		transition: inset 250ms ease-out;
	}

	.open {
		inset: 20% 0 0 0;
		pointer-events: all;
	}

	section {
		gap: 1em;
	}

	header,
	header > div,
	aside {
		gap: 1em;
	}

	main {
		gap: 2em;
	}

	.radio {
		--squircle-smooth: 1;
		--squircle-radius: 25px;
		aspect-ratio: 16/6;
		background-color: var(--accent);
		mask-image: paint(squircle);
		font-size: 12px;
		font-weight: bold;
		color: var(--alt);
	}

	.radio:has(> input:checked) {
		background-color: Khaki;
	}
</style>
