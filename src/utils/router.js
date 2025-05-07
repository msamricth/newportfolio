import { createWebHistory, createRouter } from 'vue-router'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Home from '../Pages/Home.vue'
import Work from '../Pages/Work.vue'
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
  next();
});

export default router;