import * as data from "$lib/data";

export async function get({ query }) {
	return { body: await data.getGDPPerCapita() };
}
