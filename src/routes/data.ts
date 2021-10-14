import * as data from "$lib/data";

export async function get({ query }) {
	const countries = await data.getCountries()
	return { body: countries };
}
