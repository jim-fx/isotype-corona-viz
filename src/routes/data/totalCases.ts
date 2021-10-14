import * as data from "$lib/data";

export async function get({ query }) {
	const deaths = await data.getTotalCases()
	return { body: deaths };
}
