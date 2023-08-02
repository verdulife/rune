<script>
	import { Users } from '$lib/stores';
	import NoUser from '$components/NoUser.svelte';
	import Header from '$components/Header.svelte';

	export let data;
	const user = $Users.find((u) => u.name == data.user);
</script>

{#if user}
	<Header name={user.name} />
{:else}
	<NoUser />
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
