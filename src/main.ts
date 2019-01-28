import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import * as api from "./utils/api";

Vue.config.productionTip = false;

Vue.prototype.http = api;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
