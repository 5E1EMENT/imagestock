import home from "@/app/home/HomePage.vue";

export default [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: home
  }
];
