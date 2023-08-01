<script>
	import { goto } from '$app/navigation';
	import { metadata as data } from '$lib/meta';
	import { Users } from '$lib/stores';

	import Meta from '$components/global/Meta.svelte';
	import Logo from '$lib/icons/Logo.svelte';

	const emptyName = 'tu nombre';
	let name = emptyName;

	async function setUser() {
		if (name === emptyName) {
			alert(`Cambia [${emptyName}] por tu nombre o alias.`);
			return;
		}

		const user = { name };
		$Users = [...$Users, user];

		goto(`/${user.name}`);
	}
</script>

<Meta {data} />

<section class="col jcenter full" href="/login">
	<picture>
		<Logo width="20" />
	</picture>

	<h1>
		<strong>
			Hola,
			<br />
			<b contenteditable="true" spellcheck="false" bind:textContent={name} />
			<br />
			ya puedes
			<br />
			registrar tus
			<br />
			entrenos.
		</strong>
	</h1>

	<button on:click={setUser}>SIGUIENTE</button>
</section>

<style lang="postcss">
	section {
		position: relative;
		animation: fade 3s ease;
		animation-delay: 100ms;
		animation-fill-mode: backwards;
		padding: 2em;
	}

	picture {
		position: absolute;
		top: 2em;
		right: 2em;
	}

	h1 {
		color: var(--accent);
		margin-top: -20%;
	}

	b {
		color: var(--base);
	}

	button {
		position: absolute;
		bottom: 4em;
		left: 0;
		right: 0;
		width: 150px;
		margin: 0 auto;
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
