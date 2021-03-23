import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        props: { name: 'fang' }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/print',
        name: 'Print',
        component: () => import(/* webpackChunkName: "about" */ '../views/print.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/test.vue')
    },
    {
        path: '/loading',
        name: 'loading',
        component: () => import('../views/loading.vue')
    },
    {
        path: '/',
        name: 'any',
        redirect: '/test'
    }
]

const router = new VueRouter({
    routes
})

// const isLogin = function () {
//     return false
// }

// // 全局守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/print') {
//         if (!isLogin()) {
//             // 没有登录
//             next('/home')
//         } else {
//             next('/about')
//         }
//     } else {
//         next()
//     }
// })


export default router
