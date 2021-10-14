import * as data from "$lib/data";

export async function get({ query }) {
	const deaths = await data.getPopulationDensity()
	return { body: deaths };
}
