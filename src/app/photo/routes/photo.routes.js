export default [
  {
    path: "/photo/:imgId",
    name: "Photo",
    component: () => import("@/app/photo/PhotoPage.vue")
  }
];
