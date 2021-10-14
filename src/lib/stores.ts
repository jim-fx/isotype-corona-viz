import {writable} from "svelte/store";
import localStorageStore from "./localStorageStore";

export const isLoading = writable(false);

export const selectedCountries = localStorageStore("selectedCountries",[]);

