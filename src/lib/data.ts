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
	getTotalCases()
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
			if(day.total_cases){
				totalCases = totalCases + day.new_cases
			}	
		});
		result.push({country:key, death:totalCases})
	})
	console.log(result)
}


export async function addTotalDataFromEachDayByCountry() {
	let result = []
	let dataSet = await allData
	Object.keys(dataSet).forEach(key => {
		let currentResult = 0;
		dataSet[key].data.forEach(day => {
			if(day.)
		})
	})
}
