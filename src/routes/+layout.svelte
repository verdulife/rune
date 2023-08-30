<script>
	import '$lib/startcss/startcss.css';
</script>

<main class="col full">
	<slot />
</main>

<style lang="postcss">
	@media (--cursor) {
		main {
			max-width: 400px;
			max-height: calc(100% - 100px);
			border: 0.75em solid #000;
			border-radius: 3em;
			box-shadow: 0 0 5em 0 hsl(var(--base-hsl), 0.2);
			margin: 50px auto;
			overflow: hidden;
		}
	}
</style>
