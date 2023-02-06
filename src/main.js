import { createApp } from "vue";
import App from "./App.vue";
import { gCountries } from "./assets/js/globals.js";

const app = createApp(App);

app.config.globalProperties.countries = gCountries;

app.mount("#app");
