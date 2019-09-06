import Vue from "vue";
import Router from "vue-router";
import { default as home } from "@/app/home/routes/home.routes.js";
import { default as favorites } from "@/app/favorites/routes/favorites.routes.js";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    ...home,
    ...favorites
  ]
});
