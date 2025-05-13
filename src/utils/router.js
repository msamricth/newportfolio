import { createWebHistory, createRouter } from 'vue-router'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Home from '../Pages/Home.vue'
import Work from '../Pages/Work/Index.vue'
import GLT from '../Pages/Work/GLT.vue'
import About from '../Pages/About.vue'

gsap.registerPlugin(ScrollTrigger);

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
        path: '/work/glt',
        name: 'glt',
        component: GLT,
        meta: {
            title: 'Green Leadership Trust - Featured Work | Code Artisan',
            metaTags: [
                { name: 'description', content: "Designed and developed Green Leadership Trust's website, and design most of GLT's media on an on-going basis" },
                { property: 'og:title', content: 'Green Leadership Trust - Featured Work | Code Artisan' }
            ]
        }
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

router.beforeEach((to, from, next) => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.globalTimeline.clear();
    document.body.classList.remove('dark')
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

    if (nearestWithTitle) document.title = nearestWithTitle.meta.title

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).forEach(el => el.remove())

    if (nearestWithMeta) {
        nearestWithMeta.meta.metaTags.forEach(tagDef => {
            const tag = document.createElement('meta')

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key])
            })

            tag.setAttribute('data-vue-router-controlled', '')
            document.head.appendChild(tag)
        })
    }
    next();
});

export default router;