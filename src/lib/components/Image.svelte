<script>
	export let src = null;
	export let width = null;
	export let height = null;
	export let alt = null;
</script>

<img {alt} {src} {width} {height} decoding="async" loading="lazy" />
