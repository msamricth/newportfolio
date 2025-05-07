import { createWebHistory, createRouter } from 'vue-router'

import Home from '../Pages/Home.vue'
import Work from '../Pages/Work.vue'
import About from '../Pages/About.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/work',
        name: 'work',
        component: Work
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
      },
})


export default router;