<script context="module" lang="ts">
	
	import * as _icons from "./icons";

	export type icons = keyof typeof _icons;

	export let filled = true;

</script>

<script lang="ts">
	export let type: icons;
</script>

<div>
{@html _icons[type]}
</div>

<style>
	div {
		height: 100%;
	}
	div>:global(svg) {
		height: 100%;
	}
</style>
