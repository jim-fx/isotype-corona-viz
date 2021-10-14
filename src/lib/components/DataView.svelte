<script lang="ts">
	import { DataSetType } from '$lib/types';
	import Icon, {icons} from './Icon.svelte';

	export let type: DataSetType;

	export let minAmount: number = 0;
	export let maxAmount: number = 10;

	$: amount = new Array(maxAmount - minAmount);

  function getIconType(t:string):icons{
		return "cigarette";
	}

	$: iconType =  getIconType(type);
</script>

<div class="flex">
{#each amount as i}
	<div class="w-10 h-10">
		<Icon type={iconType} />
	</div>
{/each}
</div>
