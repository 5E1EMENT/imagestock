import Vue from "vue";
import Vuex from "vuex";
import homePage from "@/app/home/store/home.store.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    homePage
  }
});
