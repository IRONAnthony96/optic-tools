import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import VueMathjax from "vue-mathjax";

Vue.config.productionTip = false;
Vue.use(VueMathjax);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
