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

	export let allCountries: any[];

	let dataSets = [
		{ value: 'deaths', label: 'Deaths' },
		{ value: 'total_cases', label: 'Total Cases' },
		{ value: 'cases_per_million', label: 'Cases Per Million' },
		{ value: 'deaths_per_million', label: 'Deaths Per Million' },
		{ value: 'population_density', label: 'Population Density' },
		{ value: 'gdp_per_capita', label: 'GDP Per Capita' },
		{ value: 'total_vaccinations', label: 'Total Vaccinations' },
		{ value: 'vaccinations_per_million', label: 'Vaccinations per Million' }
	];

	let locations = allCountries.map((c: string) => ({ value: c, label: getCountryName(c) }));

	interface SelectValue {
		value: DataSetType;
		label: string;
	}

	let _leftValue: SelectValue = dataSets[0] as SelectValue;
	let _rightValue: SelectValue = dataSets[0] as SelectValue;

	$: leftValue = _leftValue && (_leftValue.value as DataSetType);
	$: rightValue = _rightValue && (_rightValue.value as DataSetType);

	$: selectedCountriesLabels = $selectedCountries && $selectedCountries.map((v) => v.value);

	async function createDataSet(countries: string[], left: DataSetType, right: DataSetType) {
		console.log(leftValue, rightValue);

		const leftDataSet = await api.getDataSet(leftValue, countries);
		const rightDataSet = await api.getDataSet(rightValue, countries);

		const leftValues = leftDataSet.map((v) => v[leftValue]);
		const rightValues = rightDataSet.map((v) => v[rightValue]);

		const leftMaxValue = Math.max(...leftValues);
		const leftMinValue = Math.min(...leftValues);
		const rightMaxValue = Math.max(...rightValues);
		const rightMinValue = Math.min(...rightValues);

		console.log('LeftDataSet', leftDataSet);
		console.log('RightDataSet', rightDataSet);

		const dataSet = {
			leftMinValue,
			leftMaxValue,
			rightMinValue,
			rightMaxValue,
			countries: countries.map((c) => {

				const l = leftDataSet.find((d) => d.country === c);
				const r = rightDataSet.find((d) => d.country === c);

				return {
					id: c,
					left: l&&l[leftValue],
					right: r&&r[rightValue]
				};
			})
		};

		console.log("DataSet", dataSet);
		console.log("-----------------------")

		return dataSet;
	}

	$: dataSetPromise =
		selectedCountriesLabels &&
		leftValue &&
		rightValue &&
		createDataSet(selectedCountriesLabels, leftValue, rightValue);
</script>


<h1 class="absolute text-4xl font-bold text-center w-screen">The numbers of global Covid</h1>

<div class="grid grid-cols-3 auto-rows-min" style="grid-template-columns: 1fr 0px 1fr;">
	<div class="left">
		<div class="select-box">
			<Select items={dataSets} bind:value={_leftValue} isClearable={false} />
		</div>
	</div>

	<div class="center" style="width: 200px">
		<div class="center-select">
			<Select items={locations} isMulti bind:value={$selectedCountries} />
		</div>
	</div>

	<div class="right">
		<div class="select-box">
			<Select items={dataSets} bind:value={_rightValue} isClearable={false} />
		</div>
	</div>

	{#await dataSetPromise}
		<div></div>
		<p>Loooading...</p>
		<div></div>
	{:then dataset}
		{#if dataset && dataset.countries && dataset.countries.length}
			{#each dataset.countries as country}
				<div class="w-full text-center max-w-full overflow-hidden mx-auto w-min" style="width: 40vw; margin-bottom: 40px;">
					<DataView
						type={leftValue}
						value={country.left}
						minAmount={dataset.leftMinValue}
						maxAmount={dataset.leftMaxValue}
					/>
				</div>
				<p
					class="bg-black min-w-max h-min p-2 rounded-xl text-white mb-5"
					style="transform:translateX(-50%); z-index: -1"
				>
					{getCountryName(country.id)}
				</p>
				<div class="w-full text-center overflow-hidden mx-auto w-min" style="width: 40vw">
					{#if country.right}
						<DataView
							type={rightValue}
							value={country.right}
							minAmount={dataset.rightMinValue}
							maxAmount={dataset.rightMaxValue}
						/>
					{:else}
						<p>No Data</p>
					{/if}
				</div>
			{/each}
		{:else}
			<div></div>
			<p>No Data</p>
		{/if}
	{/await}

</div>

<style>
	.center-select {
		transform: translateX(-50%);
	}

	h1 {
		text-transform: uppercase;
	}

	.left,
	.right,
	.center {
		padding-top: 50px;
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
		z-index: 99;
		max-width: 200px;
		--border: none;
		--background: black;
		--borderRadius: 20px;
	}

	.select-box :global(.selectedItem) {
		color: white;
	}
</style>
