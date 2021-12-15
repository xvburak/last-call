<script context="module">
	export async function preload({ params }) {
	  try {
		const res = await this.fetch('api/blog/all');
		const { posts } = await res.json()
		return { posts };
	  } catch (err) {
		this.error(500, err);
	  }
	};
  </script>
  
  <script>
	// import BlockContent from "@movingbrands/svelte-portable-text";
  	import serializers from "../components/serializers";
	  
	export let posts;
	// console.log(posts);
  
	function formatDate(date) {
	  return new Date(date).getFullYear()
	}
  </script>
  
  <svelte:head>
	  <title>Vasil Burak</title>
  </svelte:head>

  <!-- ↓↓↓ screens smaller 640px ↓↓↓ -->

  <div class="small">
	<div class="header border-b border-gray-300 py-2">Projects</div>
	{#each posts as post}
	<a rel='prefetch' href='{post.slug.current}'>
		<div class="border-b border-gray-300 py-2">
			<p class="">{post.title}</p>
			<div class="flex flex-wrap text-gray-500 hover:text-gray-500">
				<p>{post.deliverables} |&nbsp;</p>
				<p>{formatDate(post.publishedAt)}</p>
			</div>
		</div>
  	</a>
	{/each}
  </div>

   <!-- ↓↓↓ screens bigger 640px ↓↓↓ -->
  
  <div class="big">
	<div class="row header flex flex-wrap border-b border-gray-300 py-2">
		<div class="cell w-2/6">Projects</div>
		<div class="cell w-2/6">Deliverables</div>
		<div class="cell w-1/6">Date</div>
		<div class="cell w-1/6">With</div>
	</div>
	  {#each posts as post}
	  <a rel='prefetch' href='{post.slug.current}'>
		<div class="row flex flex-wrap border-b border-gray-300 py-2">
			<div class="cell w-2/6 pr-4">
				<p class="truncate">{post.title}</p>
			</div>
			<div class="cell w-2/6 pr-4">
				<p class="truncate">{post.deliverables}</p>
			</div>
			<div class="cell w-1/6 pr-4"><p>{formatDate(post.publishedAt)}</p></div>
			<div class="cell w-1/6"><p>@everyone</p></div>
		</div>
	</a>
	  {/each}
  </div>
  