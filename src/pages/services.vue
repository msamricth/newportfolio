<script setup lang="ts">
useHead({
  titleTemplate: '%s | Code Artisan',
  title: 'Services',
  meta: [
    {
      name: 'description',
      content: "Code that clicks, pixels that pop, and strategy that actually makes sense."
    },
    { property: 'og:title', content: 'Services | Code Artisan' },
    { property: 'og:url', content: 'https://codeartisan.dev/services' },
    {
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto,w_960/v1745552050/Title_bjlnl8.png'
    }
  ],

})

import Preloader from '@/components/Preloader.vue';
import InnerSecondaryNav from '@/components/navigation/InnerSecondaryNav.vue'
import InnerNav from '@/components/navigation/InnerNav.vue';
import ServicesIntro from '@/components/contexts/services/ServicesIntro.vue';
import Offerings from '@/components/contexts/Offerings.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import { useMainStore } from '@/stores/main';
const store = useMainStore()
</script>
<template>
  <div
    class="relative transition duration-700 font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary overflow-x-clip">
    <div
      class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9 lg:pt-12 pb-18 lg:pb-20"
      ref="utilityBar">
      <InnerSecondaryNav v-if="store.loaded" />
    </div>
    <InnerNav title="Services" brandLabel="hi, i'm emm." brandURL="/" v-if="store.loaded" />
    <Preloader />
    <ServicesIntro />

    <Offerings v-if="store.loaded" />
    <Contact v-if="store.loaded" />
    <Footer />
  </div>
</template>


<style scoped>
.sidebar button {
  transition: all 0.2s ease;
}

.sidebar button:hover {
  transform: scale(1.05);
}
</style>