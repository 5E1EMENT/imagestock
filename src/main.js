import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/store";
import '@/app/core/configs/unsplash.config.js'
import './plugins/bootstrap-vue'
import './fonts/fonts.css'
import '@babel/polyfill'
import 'mutationobserver-shim'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
