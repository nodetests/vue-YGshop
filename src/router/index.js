import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        children: [{
            path: '',
            name: 'index',
            component: () =>
                import ('../views/Index/index.vue')
        }]
    },

    {
        path: '/category',
        component: Home,
        children: [{
            path: '',
            name: 'category',
            component: () =>
                import ('../views/Category/category')
        }]
    },

    {
        path: '/my',
        component: Home,
        children: [{
            path: '',
            name: 'my',
            component: () =>
                import ('../views/My/my.vue')
        }]
    },
    {
        path: '/car',
        component: Home,
        children: [{
            path: '',
            name: 'car',
            component: () =>
                import ('../views/Shopingcar/car.vue')
        }]
    },

    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login/login.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () =>
            import ('../views/Detail/detail')

    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router