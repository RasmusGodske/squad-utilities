import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// @ts-ignore
import VueSimpleMarkdown from 'vue-simple-markdown'


import 'vue-simple-markdown/dist/vue-simple-markdown.css'
Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false;

import VehicleRepo from "@/services/VehicleRepo";


const BASE_URL = "https://raw.githubusercontent.com/RasmusGodske/squad-utilities-resources/main";
// const BASE_URL = "http://localhost:8081";

const vehicleRepo = new VehicleRepo(BASE_URL);

Vue.prototype.$vehicleRepo = vehicleRepo;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
