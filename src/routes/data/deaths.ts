import * as data from "$lib/data";

export async function get({ query }) {
	const deaths = await data.getDeaths()
	console.log("GET DEATHS", deaths);
	return { body: deaths };
}
