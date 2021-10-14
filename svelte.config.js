import preprocess from 'svelte-preprocess';
import WindiCSS from "vite-plugin-windicss"
import adapterStatic from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapterStatic(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite:{
			plugins: [WindiCSS.default()]
		}
	}
};

export default config;
