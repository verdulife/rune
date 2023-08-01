<script>
	import { Users } from '$lib/stores';

	export let data;
	const user = $Users.find((u) => u.name == data.user);
</script>

{#if user}
	<h1>{user.name}</h1>
{:else}
	<section class="col fcenter full">
		<h3 class="tcenter">No existe ningun usuario registrado con ese nombre</h3>
		<a role="button" href="/">VOLVER</a>
	</section>
{/if}

<style>
	section {
		gap: 2em;
		padding: 2em;
	}

	:--button {
		min-width: 150px;
	}
</style>
