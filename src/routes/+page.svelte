<script>
	import { metadata as data } from '$lib/meta';
	import { Users } from '$lib/stores';

	import Meta from '$components/global/Meta.svelte';
	import Logo from '$lib/icons/Logo.svelte';

	const redirect = $Users[0]?.name || '/login';
</script>

<Meta {data} />

<a class="col fcenter full" href={redirect}>
	<picture>
		<Logo width="100" />
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
		bottom: 4em;
		left: 0;
		color: var(--accent);
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
