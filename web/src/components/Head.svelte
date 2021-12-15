<script>
	export let segment;
</script>

<nav class="flex sm:justify-start justify-between border-b border-gray-300 py-2 mb-8">

	<div class="sm:w-2/6">
		<a class="" href='.'>Vasil Burak</a>
	</div>
	<div class="sm:w-2/6 justify-end">
		<a class='{segment === "information" ? "selected" : ""}' href='information'>Information</a>
	</div>
</nav>
