<script>
	import { metadata as data } from '$lib/meta';

	import Meta from '$components/global/Meta.svelte';
	import Logo from '$lib/icons/Logo.svelte';
</script>

<Meta {data} />

<a class="col fcenter full" href="/login">
	<picture>
		<Logo />
	</picture>

	<p class="tcenter wfull">TOCA PARA CONTINUAR</p>
</a>

<style lang="postcss">
	a {
		position: relative;
		animation: fade 3s ease;
		animation-delay: 1s;
		animation-fill-mode: backwards;
	}

	picture {
		margin-top: -20%;
	}

	p {
		position: absolute;
		bottom: 0;
		left: 0;
		color: var(--accent);
		padding: 2em;
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
