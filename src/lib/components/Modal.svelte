<script>
	import { swipe } from 'svelte-gestures';

	export let open = false;

	let data = {
		registration: true,
		weight: 0
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

			<div class="row">
				<label for="weight">
					<button on:click={decWeight}>-</button>
					<input type="number" inputmode="numeric" step="2.5" bind:value={data.weight} readonly />
					<button on:click={incWeight}>+</button>
				</label>
				<label for="reps" />
				<label for="series" />
			</div>
		</main>
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
		background-color: hsl(var(--base-900-hsl), 0.6);
		font-size: 12px;
		color: var(--accent);
		border-radius: 10em;
		padding: var(--spacing-md) var(--spacing-2xl);
	}

	.radio:has(> input:checked) {
		box-shadow: inset 0px 1px 2px 0px hsl(var(--base-hsl), 0.25);
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
