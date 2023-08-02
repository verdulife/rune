<script>
	import Logo from '$lib/icons/Logo.svelte';

	export let name;
</script>

<section class="col fcenter wfull h1/2">
	<p>{name}</p>

	<picture>
		<Logo width={50} />
	</picture>
</section>

<style lang="postcss">
	section {
		position: relative;
	}

	p {
		position: absolute;
		top: 2em;
		right: 2em;
		text-transform: uppercase;
	}
</style>
