<script context="module" lang="ts">
	
	import * as icons from "./icons";

	export type icons = keyof typeof icons;

</script>

<script lang="ts">
	export let type: icons;
</script>


{@html icons[type]}
