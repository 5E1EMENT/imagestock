import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/store";
import '@/app/core/configs/unsplash.config.js'
import './plugins/bootstrap-vue'
import './fonts/fonts.css'
import '@babel/polyfill'
import 'mutationobserver-shim'
import '@/app/core/specialStyles/masonry.css'
import ScrollDirective from '@/app/core/directives/scroll.directive.js'

Vue.config.productionTip = false;
Vue.directive('scroll', ScrollDirective)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
