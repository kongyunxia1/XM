import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/shouye'
        },
        {
            path: '/shouye',
            redirect: '/shouye/jujia',
            component: () =>
                import ('../views/shouye/index'),
            children: [{
                path: 'jujia',
                component: () =>
                    import ('../views/shouye/jujia/index.vue')
            }, ]
        },
        {
            path: '/fenlei',
            component: () =>
                import ('../views/fenlei/index')
        },
        {
            path: '/cart',
            component: () =>
                import ('../views/cart/index')
        },
        {
            path: '/mine',
            component: () =>
                import ('../views/mine/index')
        },
        {
            path: '/resgiest',
            component: () =>
                import ('../views/resgiest/index')
        },
        {
            path: '/login',
            component: () =>
                import ('../views/loging/index'),
            children: [{
                path: 'login',
                component: () =>
                    import ('../views/login/loging/index')
            }]
        },

    ],
    linkActiveClass: "active"
})

export default router;