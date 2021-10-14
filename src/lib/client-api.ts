const dataSets = {};
import {isLoading} from "./stores";

async function get(path:string){
	isLoading.set(true);
	const response = await fetch(path);
	const json = await response.json();
	isLoading.set(false);
	return json;
}

export async function getCountries(){
	if(dataSets["countries"]) return dataSets["countries"];
	dataSets["countries"] = await get("/data/countries");
	return dataSets["countries"]
}

export async function getDataSet(dataSetId:string){
	if(dataSets[dataSetId]) return dataSets[dataSetId];
	dataSets[dataSetId] = await get("/data/"+dataSetId);
	return dataSets[dataSetId]
}
