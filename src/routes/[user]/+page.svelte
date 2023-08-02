<script>
	import { Users } from '$lib/stores';
	import NoUser from '$components/NoUser.svelte';
	import Header from '$components/Header.svelte';
	import CardSlider from '$components/CardSlider.svelte';

	export let data;
	const user = $Users.find((u) => u.name == data.user);
</script>

{#if user}
<Header name={user.name} />
	<section class="col wfull">
		<CardSlider />
		<CardSlider />
		<CardSlider />
	</section>
{:else}
	<NoUser />
{/if}

<style>
	section {
		gap: 3em;
	}
</style>
