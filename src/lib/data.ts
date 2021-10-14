import fs from "fs";
import path from "path";

const data = new Promise((res, rej) => {
	fs.readFile(path.resolve("owid-covid-data.json"), "utf-8", (err, rawData) => {
		if(err) return rej(err);
		console.log("Loaded Data", rawData.length)
		const json = JSON.parse(rawData);
		console.log("Parsed data", Object.keys(json).length);
		console.log("Keys", Object.keys(json[Object.keys(json)[0]]))
		console.log("Data Keys", Object.keys(json[Object.keys(json)[0]].data[0]))
		res(json);
	});
});

export async function getCountries() {
	return Object.keys(await data);
}
