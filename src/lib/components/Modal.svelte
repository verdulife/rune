<script>
	export let top;
</script>

<div class="outer" />
<div class="modal scrollbar" style="--top: {top}%">
	<h1>Modal</h1>
</div>

<style>
	.outer {
		position: fixed;
		inset: var(--top) 0 0 0;
	}

	.modal {
		position: fixed;
		inset: var(--top) 0 0 0;
		background-color: hsl(var(--alt-hsl), 0.75);
		backdrop-filter: blur(1em);
		border-radius: 3em 3em 0 0;
		box-shadow: inset 0px 1px 1px 0px hsl(var(--base-hsl), 0.25);
		padding: 4em 2em 2em 2em;
	}
</style>
