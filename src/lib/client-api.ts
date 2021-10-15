const dataSets = {};
import {isLoading} from "./stores";

async function get(path:string){
	isLoading.set(true);
	const response = await fetch(path);
	const json = await response.json();
	isLoading.set(false);
	return json;
}

export async function getDataSet(dataSetId:string, countries: string[]){
	let data = dataSets[dataSetId];
	if(data) return data;
	data = await get("/data/"+dataSetId);

	if(countries && countries.length){
		return data.filter(d => countries.includes(d.country));
	}

	return data
}
