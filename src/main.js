import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/store";
import vueSmoothScroll from 'vue2-smooth-scroll'
import { VueMasonryPlugin } from "vue-masonry";
import '@/app/core/configs/unsplash.config.js'
import './plugins/bootstrap-vue'
import './fonts/fonts.css'
import '@babel/polyfill'
import 'mutationobserver-shim'
import '@/app/core/specialStyles/masonry.css'


Vue.config.productionTip = false;
Vue.use(vueSmoothScroll)
Vue.use(VueMasonryPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

/** Event hub */
export const eventBus = new Vue();