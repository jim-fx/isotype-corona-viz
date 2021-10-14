import fs from "fs";
import path from "path";

const allData = new Promise((res, rej) => {
	fs.readFile(path.resolve("owid-covid-data.json"), "utf-8", (err, rawData) => {
		if(err) return rej(err);
		console.log("Loaded Data", rawData.length)
		const json = JSON.parse(rawData);
		console.log("Parsed data", Object.keys(json).length);
		console.log("Keys", Object.keys(json[Object.keys(json)[0]]))
		console.log("Data Keys", Object.keys(json[Object.keys(json)[0]].data[0]))
		res(json);
	});
});

export async function getCountries() {
	getTotalDataFromEachDayByCountry('new_deaths');
	//getPopulationDensity()
	return Object.keys(await allData);
}

export async function getDeaths() {
	let result = [];
	let dataSet = await allData
	Object.keys(dataSet).forEach(key => {
		let totalDeath = 0;
		dataSet[key].data.forEach(day => {
			if (day.total_deaths) {
				totalDeath = totalDeath + day.new_deaths
			}
		});
		result.push({country:key,death:totalDeath})
	});
}


export async function getTotalCases() {
	let result = []
	let dataSet = await allData
	Object.keys(dataSet).forEach(key => {
		let totalCases = 0;
		dataSet[key].data.forEach(day => {
			if(day.new_cases){
				totalCases = totalCases + day.new_cases
			}	
		});
		result.push({country:key, totalCases:totalCases})
	})
	console.log(result)
}

export async function getCasesPerMillion() {
	let result = []
	let dataSet = await allData
	Object.keys(dataSet).forEach(key => {
		let totalCases = 0;
		dataSet[key].data.forEach(day => {
			if(day.new_cases_per_million){
				totalCases = totalCases + day.new_cases_per_million
			}	
		});
		result.push({country:key, cases_per_million:totalCases})
	})
	console.log(result)
}

export async function getDeathsPerMillion() {
	let result = []
	let dataSet = await allData
	Object.keys(dataSet).forEach(key => {
		let totalCases = 0;
		dataSet[key].data.forEach(day => {
			if(day.new_deaths_per_million){
				totalCases = totalCases + day.new_deaths_per_million
			}	
		});
		result.push({country:key, deaths_per_million:totalCases})
	})
	console.log(result)
}

export async function getPopulationDensity() {
	let result = [];
	let dataSet = await allData
	Object.keys(dataSet).forEach(key => {
		if(dataSet[key].population_density){
			result.push({country:key, population_density: dataSet[key].population_density})
		}
	})
	console.log(result);
}

export async function getSpecificDataByCountry(specificData:string) {
	let result = [];
	let dataSet = await allData
	Object.keys(dataSet).forEach(key => {
		if(dataSet[key][specificData]){
			result.push({country:key, tag: dataSet[key][specificData]})
		}
	})
	console.log(result);
}

export async function getTotalDataFromEachDayByCountry(specificData:string) {
	let result = []
	let dataSet = await allData
	Object.keys(dataSet).forEach(key => {
		let totalResult = 0;
		dataSet[key].data.forEach(day => {
			if(day[specificData]){
				totalResult = totalResult + day[specificData]
			}
		});
		result.push({country:key, [specificData]:totalResult})
	})
}


