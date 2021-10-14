<script context="module" lang="ts">
	export async function load({ fetch }) {
		const countries = await fetch('/data/countries');

		return {
			props: {
				allCountries: await countries.json()
			}
		};
	}
</script>

<script lang="ts">
	import Select from 'svelte-select';
	import * as api from '$lib/client-api';
	import { isLoading } from '$lib/stores';

	export let allCountries;

	let dataSets = [
		{ value: 'deaths', label: 'Chocolate' },
		{ value: 'vaccinations', label: 'Pizza' },
		{ value: 'cake', label: 'Cake' },
		{ value: 'chips', label: 'Chips' },
		{ value: 'ice-cream', label: 'Ice Cream' }
	];

	let locations = allCountries.map((c: string) => ({ value: c, label: c }));

	let leftValue = { value: 'cake', label: 'Cake' };
	let rightValue = { value: 'cake', label: 'Cake' };
	let locationValue = [{ value: 'DE', label: 'DE' }];

	$: selectedCountries = locationValue && locationValue.map((v) => v.value);
	$: countries = allCountries.filter((c) => {
		return selectedCountries.includes(c);
	});
</script>

{#if $isLoading}
	<p>IsLoading</p>
{/if}

<h1 class="absolute text-4xl font-bold text-center w-screen">The numbers of global Covid</h1>

<div class="grid grid-cols-3 grid-rows-2" style="grid-template-columns: 1fr 0px 1fr;">
	<div class="left">
		<div class="select-box">
			<Select items={dataSets} bind:value={leftValue} />
		</div>
	</div>

	<div class="center" style="width: 200px">
		<div class="center-select">
		<Select items={locations} isMulti bind:value={locationValue} />
		</div>
	</div>

	<div class="right">
		<div class="select-box">
			<Select items={dataSets} bind:value={rightValue} />
		</div>
	</div>

	{#each countries as country}
		<p>Left</p>
		<p>{country}</p>
		<p>Right</p>
	{/each}
</div>

<style>

	.center-select {
		transform: translateX(-50%)	
	}

	.left,.right,.center{
			padding-top: 50px
	}

	.left {
		background-color: gray;
		border-right: solid 5px black;
		min-height: 100vh;
	}

	.select-box {
		margin: 0 auto;
		max-width: 200px;
	}
</style>
