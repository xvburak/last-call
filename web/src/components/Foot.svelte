<script>
  import { onMount} from 'svelte';

  let date = new Date();
	$: fullDate = date.toDateString();
	$: hour = (date.getHours()<10?'0':'') + date.getHours();
	$: min = (date.getMinutes()<10?'0':'') + date.getMinutes();
	$: sec = (date.getSeconds()<10?'0':'') + date.getSeconds();

  onMount(() => {
    const interval = setInterval(() => {
      date = new Date();
    }, 1000);
  });

</script>


<footer class="flex flex-wrap border-t border-gray-300 py-2">

  <ul class="flex sm:w-4/6">
    <li class="mr-4"><a href='.'>Email</a></li>
    <li class="mr-4"><a href='.'>Instagram</a></li>
    <li class="mr-4"><a href='.'>Are.na</a></li>
    <li class="mr-4"><a href='.'>Spotify</a></li>
  </ul>
  <div class="sm:flex sm:w-2/6 sm:justify-end hidden">
    <div class="mr-4">
		{fullDate}
	  </div>
    <div> 
      {hour} : {min} : {sec}
    </div>
  </div>
</footer>
