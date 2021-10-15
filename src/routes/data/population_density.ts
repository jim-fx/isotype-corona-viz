import * as data from "$lib/data";

export async function get() {
	return { body: await data.getPopulationDensity() };
}
