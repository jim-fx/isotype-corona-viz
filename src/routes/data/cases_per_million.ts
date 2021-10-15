import * as data from "$lib/data";

export async function get({ query }) {
	const totalCases = await data.getCasesPerMillion()
	return { body: totalCases };
}
