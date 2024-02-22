import "@/assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "@/components/App.vue";
import router from "@/router";
import i18n from "@/i18n";

const vuetify = createVuetify({
  components,
  directives
});

const app = createApp(App);

app.use(createPinia().use(piniaPluginPersistedstate));
app.use(i18n);
app.use(router);
app.use(vuetify);

app.mount("#app");
