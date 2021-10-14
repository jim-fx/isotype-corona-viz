<script context="module" lang="ts">
	export async function load({ fetch }) {
		const countries = await fetch('/data/countries');

		return {
			props: {
				countries: await countries.json()
			}
		};
	}
</script>

<script lang="ts">
	import Select from 'svelte-select';
	import * as api from '$lib/client-api';
	import { isLoading } from '$lib/stores';

	export let countries;

	let dataSets = [
		{ value: 'deaths', label: 'Chocolate' },
		{ value: 'vaccinations', label: 'Pizza' },
		{ value: 'cake', label: 'Cake' },
		{ value: 'chips', label: 'Chips' },
		{ value: 'ice-cream', label: 'Ice Cream' }
	];

	let locations = countries.map((c:string) => ({value: c, label: c}))

	let leftValue = { value: 'cake', label: 'Cake' };
	let rightValue = { value: 'cake', label: 'Cake' };
	let locationValue = [{ value: 'DE', label: 'DE' }];
</script>

{#if $isLoading}
	<p>IsLoading</p>
{/if}

<h1 class="text-2xl font-bold text-center">The numbers of global Covid</h1>

<div class="grid grid-cols-3 grid-rows-2">
	<div class="left">
		<Select items={dataSets} bind:value={leftValue} />
	</div>

	<div class="center">
		<Select items={locations} isMulti bind:value={locationValue} />
	</div>

	<div class="right">
		<Select items={dataSets} bind:value={rightValue} />
	</div>

	{#each countries as country}

	<p>Left</p>
	<p>{country}</p>
	<p>Right</p>	
	{/each}


</div>

<style>
	h1 {
	}
</style>
