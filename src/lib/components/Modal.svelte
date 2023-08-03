<script>
	export let open = false;

	let data = {
		registration: true
	};

	$: console.log(data);
</script>

<div class="modal scrollbar" class:open>
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
		font-size: 12px;
		color: var(--accent);
		border-radius: 1em;
		box-shadow: 0 0 2px 1px hsl(var(--base-hsl), 0.25);
		padding: 1.5em 1em;
	}

	.radio:has(> input:checked) {
		background-color: var(--accent);
		color: var(--alt);
	}
</style>
