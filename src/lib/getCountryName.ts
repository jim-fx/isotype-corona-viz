import countries from "i18n-iso-countries"

import en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(en);

export default (id:string) => countries.getName(id, "en", {select: "official"}) || id;

