<script>
	import Alert from './icons/Alert.svelte';
	import Back from './icons/Back.svelte';
	import Save from './icons/Save.svelte';
	import Trash from './icons/Trash.svelte';
</script>

<nav class="row fcenter grow">
	<button class="unset col acenter grow active">
		<Save />
		<small>WEEK</small>
	</button>

	<button class="unset col acenter grow">
		<Alert />
		<small>STATS</small>
	</button>

	<button class="unset col acenter grow">
		<Trash />
		<small>STORE</small>
	</button>

	<button class="unset col acenter grow">
		<Back />
		<small>USER</small>
	</button>
</nav>

<style lang="postcss">
	nav {
		position: sticky;
		bottom: 1.5em;
    left: 1.5em;
    width: calc(100% - 3em);
		background-color: hsl(var(--base-800-hsl), 0.7);
		backdrop-filter: blur(1em);
		border: 1px solid var(--base-700);
		border-radius: 1.5em;
		padding: 1.25em;
    z-index: 1;

		& button {
			gap: 0.75em;
			opacity: 0.5;

			&.active {
				opacity: 1;
			}

			& small {
				font-size: var(--font-2xs);
			}
		}
	}
</style>
