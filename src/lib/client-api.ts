const dataSets = {};
import { browser } from "$app/env";
import {isLoading} from "./stores";

async function get(path:string){
	isLoading.set(true);
	const response = await fetch(path);
	const json = await response.json();
	isLoading.set(false);
	return json;
}

export async function getDataSet(dataSetId:string, countries: string[]){

	let url = "/data/"+dataSetId

	if(browser && window.location.href.includes("github")){
		url = "/isotype-corona-viz"+url
		console.log("Diiirty fix")
		console.log(url)
	}

	let data = dataSets[dataSetId];
	if(data) return data;
	data = await get(url);

	if(countries && countries.length){
		return data.filter(d => countries.includes(d.country));
	}

	return data
}
