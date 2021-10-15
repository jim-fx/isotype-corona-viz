import * as data from "$lib/data";

export async function get({ query }) {
	const totalCases = await data.getVacinationsPerMillion()
	return { body: totalCases };
}
