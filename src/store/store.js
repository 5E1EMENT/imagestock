import Vue from "vue";
import Vuex from "vuex";
import homePage from "@/app/home/store/home.store.js";
import favoritesPage from "@/app/favorites/store/favorites.store.js";
import photoPage from "@/app/photo/store/photo.store.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    homePage,
    favoritesPage,
    photoPage
  }
});
