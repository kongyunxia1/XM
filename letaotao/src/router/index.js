import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
<<<<<<< HEAD
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
=======
    routes: [{
            path: '/',
            redirect: '/shouye'
        },
        {
            path: '/shouye',
            redirect: '/shouye/jujia',
            component: () =>
                import('../views/shouye/index'),
            children: [{
                path: 'jujia',
                component: () => import('../views/shouye/jujia/index.vue')
            }, ]
        },
        {
            path: '/fenlei',
            component: () =>
                import('../views/fenlei/index')
        },
        {
            path: '/cart',
            component: () =>
                import('../views/cart/index')
        },
        {
            path: '/mine',
            component: () =>
                import('../views/mine/index')
        }
    ],
    linkActiveClass: "active"
})
>>>>>>> 3b08be5bad9ad18560a141c1575ac3ff48ea7b2b

export default router;
