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
import FactionsRepo from "@/services/FactionsRepo";


const BASE_URL = process.env.VUE_APP_RESOURCE_BASE_URL;
console.log(process.env.NODE_ENV);
console.log(BASE_URL);

const factionsRepo = new FactionsRepo(BASE_URL);
const vehicleRepo = new VehicleRepo(BASE_URL, factionsRepo);


Vue.prototype.$vehicleRepo = vehicleRepo;
Vue.prototype.$factionsRepo = factionsRepo;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
