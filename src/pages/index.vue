<script setup>
useHead({
  titleTemplate: 'Code Artisan | %s',
  title: 'Bridging good design & things that actually work',

  link: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  ],
  meta: [
    { name: 'description', content: "Code artisan forging WordPress & Vue.js experiences by day, crafting dirt jumps & trails for bikes by night UX zeal meets mud and grit creativity." },
    { property: 'og:title', content: 'Building bridges between good design and things that actually work' },
    { property: 'og:image', content: "https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto,w_960/v1745552050/Title_bjlnl8.png" },
  ]
})
import Nav from '@/components/navigation/Nav.vue';
import HomeHero from '@/components/contexts/HomeHero.vue';
import About from '@/components/contexts/Intro.vue'
import LogoGarden from '@/components/LogoGarden.vue'
import FeaturedWork from '@/components/FeaturedWork.vue'
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import ReturningUser from '../components/contexts/ReturningUser.vue';
import { useMainStore } from '@/stores/main';
const work = ['glt','supply', 'dr-martens', 'dat'];
const store = useMainStore()

</script>

<template>
  <div
    class="relative transition duration-700 font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary overflow-x-clip">
    <div class="">
      <HomeHero />
      <Nav v-show="store.loaded"></Nav>
    </div>
    <About />
    <LogoGarden v-if="store.loaded" />
    <FeaturedWork v-if="store.loaded" :featuredItems="work" />
    <Contact v-if="store.loaded" />
   <!-- <ReturningUser  v-if="store.ready && store.returning && store.showBooking"/>-->
    <Footer></Footer>
  </div>
</template>