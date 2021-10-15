<script lang="ts">
	import type { DataSetType } from '$lib/types';
	import Icon, { icons } from './Icon.svelte';

	export let type: DataSetType;

	export let minAmount: number = 0;
	export let maxAmount: number = 10;
	export let value: number = 0;

	console.log(minAmount, maxAmount, value);

	$: amount = Math.min(50, maxAmount);


	function getIconType(t: string): icons {
		return 'person';
	}

	$: iconType = getIconType(type);

	$: percent = value / maxAmount;

	let debug = false;
	function keyDown(ev) {
		if (ev.key === 'D') debug = !debug;
	}
</script>

<svelte:window on:keydown={keyDown} />

<div>
	{#if debug}
		{Math.floor(value * 10) / 10}
		<div class="bar h-5 w-full">
			<span class="h-full inline-block" style="width: {percent * 100}%" />
		</div>
	{/if}

	<div class="flex">
		{#each new Array(amount) as _,i}
			<div class="w-10 h-10" class:filled={i/amount > percent}>
				<Icon type={iconType} filled={i/amount < percent} />
			</div>
		{/each}
	</div>
</div>

<style>
	.flex {
		flex-flow: wrap;
	}
	.bar > span {
		background-color: black;
	}

	.filled {
		opacity: 0.4;
	}
</style>
