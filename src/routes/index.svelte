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
	import type { DataSetType } from '$lib/types';
	import { isLoading, selectedCountries } from '$lib/stores';
	import getCountryName from '$lib/getCountryName';
	import { DataView } from '$lib/components';

	export let allCountries;

	let dataSets = [
		{ value: 'deaths', label: 'Deaths' },
		{ value: 'vaccinations', label: 'Vaccinations' }
	];

	let locations = allCountries.map((c: string) => ({ value: c, label: getCountryName(c) }));

	let _leftValue = { value: 'vaccinations', label: 'Vaccinations' };
	let _rightValue = { value: 'vaccinations', label: 'Vaccinations' };

	$: leftValue = _leftValue && _leftValue.value;
	$: rightValue = _rightValue && _rightValue.value;

	$: selectedCountriesLabels = $selectedCountries && $selectedCountries.map((v) => v.value);

	async function createDataSet(countries: string[], left: DataSetType, right: DataSetType) {
		return countries.map((c) => {
			return {
				id: c,
				left: Math.random(),
				right: Math.random()
			};
		});
	}

	$: countriesPromise =
		selectedCountriesLabels &&
		leftValue &&
		rightValue &&
		createDataSet(selectedCountriesLabels, leftValue, rightValue);
</script>

{#if $isLoading}
	<p>IsLoading</p>
{/if}

<h1 class="absolute text-4xl font-bold text-center w-screen">The numbers of global Covid</h1>

<div class="grid grid-cols-3 auto-rows-min" style="grid-template-columns: 1fr 0px 1fr;">
	<div class="left">
		<div class="select-box">
			<Select items={dataSets} bind:value={_leftValue} />
		</div>
	</div>

	<div class="center" style="width: 200px">
		<div class="center-select">
			<Select items={locations} isMulti bind:value={$selectedCountries} />
		</div>
	</div>

	<div class="right">
		<div class="select-box">
			<Select items={dataSets} bind:value={_rightValue} />
		</div>
	</div>

	{#await countriesPromise then countries}
		{#each countries as country}
			<div class="w-full text-center max-w-full overflow-hidden mx-auto w-min">
				<DataView />
			</div>
			<p
				class="bg-black min-w-max h-min p-2 rounded-xl text-white mb-5"
				style="transform:translateX(-50%)"
			>
				{getCountryName(country.id)}
			</p>
			<div class="w-full text-center overflow-hidden mx-auto w-min">
				<DataView />
			</div>
		{/each}
	{/await}
</div>

<style>
	.center-select {
		transform: translateX(-50%);
	}

	.left,
	.right,
	.center {
		padding-top: 50px;
		z-index: 99;
		margin-bottom: 20px;
	}

	.grid::before {
		content: '';
		position: fixed;
		width: 50vw;
		height: 100vh;
		z-index: -1;
		background-color: gray;
		border-right: solid 5px black;
	}

	.grid {
		min-height: 100vh;
	}

	.select-box {
		margin: 0 auto;
		max-width: 200px;
		--border: none;
		--background: black;
    --borderRadius: 20px;
	}

	.select-box :global(.selectedItem){
		color: white;
	}


</style>
