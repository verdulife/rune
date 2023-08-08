<script>
	import { swipe } from 'svelte-gestures';

	export let open = false;

	let data = {
		registration: true,
		exercise: '',
		weight: 0,
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
		if (data.weight < 0) data.weight = 0;
	}

	function inc(value) {
		data[value]++;
	}

	function dec(value) {
		data[value]--;
		if (data[value] < 0) data[value] = 0;
	}

	$: console.log(data);
</script>

<div
	class="modal scrollbar"
	class:open
	use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-down' }}
	on:swipe={closeModal}
>
	<section class="col wfull">
		<header class="col wfull">
			<p>¿Quieres registrar o programar un entreno?</p>

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
					/>
				</label>
			</div>
		</header>

		<main class="col wfull">
			<label class="col wfull" for="exercise">
				NOMBRE DEL EJERCICIO
				<input
					class="wfull"
					list="exercisesList"
					type="search"
					id="exercise"
					bind:value={data.exercise}
				/>

				<datalist id="exercisesList">
					<option value="press de banca">press de banca</option>
					<option value="peso muerto">peso muerto</option>
				</datalist>
			</label>

			<label for="weight">
				<button on:click={decWeight}>-</button>
				<input
					type="number"
					inputmode="numeric"
					step="2.5"
					id="weight"
					bind:value={data.weight}
					readonly
				/>
				<button on:click={incWeight}>+</button>
			</label>
			<label for="reps">
				<button on:click={() => dec('reps')}>-</button>
				<input
					type="number"
					inputmode="numeric"
					step="2.5"
					id="reps"
					bind:value={data.reps}
					readonly
				/>
				<button on:click={() => inc('reps')}>+</button>
			</label>
			<label for="series">
				<button on:click={() => dec('series')}>-</button>
				<input
					type="number"
					inputmode="numeric"
					step="2.5"
					id="series"
					bind:value={data.series}
					readonly
				/>
				<button on:click={() => inc('series')}>+</button>
			</label>

			<div class="row wfull">
				<label for="plus">
					<input type="checkbox" id="plus" bind:checked={data.plus} />
				</label>

				<label for="fail">
					<input type="checkbox" id="fail" bind:checked={data.fail} />
				</label>
			</div>
		</main>

		<footer />
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
		gap: 2em;
	}

	header,
	header > div {
		gap: 1em;
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

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
