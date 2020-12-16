import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/shouye",
    },
    {
      path: "/shouye",
      // redirect: '/shouye/nowplaying',
      component: () => import("../views/shouye/index.vue"),
    },
    {
      path: "/fenlei",
      component: () => import("../views/fenlei/index"),
    },
    {
      path: "/cart",
      component: () => import("../views/cart/index"),
    },
    {
      path: "/mine",
      component: () => import("../views/mine/index"),
    },
    {
      path: "/detail",
      component: () => import("../views/detail/index"),
    },
  ],
  linkActiveClass: "active",
});

export default router;
