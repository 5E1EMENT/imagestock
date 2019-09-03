export default [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/app/home/HomePage.vue")
  }
];
