import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: "/",
            redirect: "/shouye",
        },
        {
            path: "/shouye",
            redirect: "/shouye/tuijian",
            component: () =>
                import ("../views/shouye/index.vue"),
            children: [{
                    path: "tuijian",
                    component: () =>
                        import ("../views/shouye/tui/index.vue"),
                },
                {
                    path: "jujia",
                    component: () =>
                        import ("../views/shouye/jujia/index.vue"),
                },
            ],
        },
        {
            path: "/fenlei",
            redirect: "/fenlei/tuijian",
            component: () =>
                import ("../views/fenlei"),
            children: [{
                    path: 'tuijian',
                    component: () =>
                        import ('../views/fenlei/tuijian')
                },
                {
                    path: 'xinpin',
                    component: () =>
                        import ('../views/fenlei/xinpin')
                },
                {
                    path: 'jujia',
                    component: () =>
                        import ('../views/fenlei/jujia')
                },

            ]
        },
        {
            path: '/fenleixiangqing',
            redirect: "/fenleixiangqing/yuangong",

            component: () =>
                import ('../views/fenleixiangqing'),
            children: [{
                    path: 'yuangong',
                    component: () =>
                        import ('../views/fenleixiangqing/yuangong')
                },
                {
                    path: 'huigou',
                    component: () =>
                        import ('../views/fenleixiangqing/huigou')
                },
                {
                    path: 'fushi',
                    component: () =>
                        import ('../views/fenleixiangqing/fushi')
                },

            ]
        },
        {
            path: "/cart",
            component: () =>
                import ("../views/cart/index"),
        },
        {
            path: "/resgiest",
            component: () =>
                import ("../views/resgiest/index"),
        },
        {
            path: "/loging",
            component: () =>
                import ("../views/loging/index"),
        },
        {
            path: "/mine",
            component: () =>
                import ("../views/mine/index"),
        },
        {
            path: "/detail",
            component: () =>
                import ("../views/detail/index"),
        },
    ],
    linkActiveClass: "active",
});

export default router;