<script context="module" lang="ts">

	export async function load({fetch}){
		const response = await fetch("/data/countries");

		return {
			props:{
				data: await response.json()
			}
		}
	}

</script>

<script>
	export let data;
	console.log(data);
</script>


<pre><code>
	{JSON.stringify(data)}
</code></pre>
