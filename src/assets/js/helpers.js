import { countries_assoc, countries_index } from './globals.js';

function getCountryByName(name) { return countries_assoc[name]; }
function getCountryById(id)     { return countries_index[id];   }
function getCountryNames()      { return countries_index;       }

export { getCountryByName, getCountryById, getCountryNames };