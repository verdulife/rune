<script>
	export let metadata, origin;
	const { title, sufix, description, keywords, card_image } = metadata;
</script>

<svelte:head>
	<title>{title} | {sufix}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={origin} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={card_image} />
	<meta property="og:image:secure_url" content={card_image} />
	<meta property="og:image:type" content="image/png" />

	<!-- Twitter -->
	<meta name="twitter:card" content={card_image} />
	<meta name="twitter:site" content={origin} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={card_image} />
</svelte:head>
