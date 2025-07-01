<script setup lang="ts">
useHead({
  titleTemplate: '%s | Code Artisan',
  title: 'About',
  meta: [
    {
      name: 'description',
      content: "Creating powerful digital products for brands that inspire us."
    },
    { property: 'og:title', content: 'About | Code Artisan' },
    { property: 'og:url', content: 'https://codeartisan.dev/about' },
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
import Lyric from '@/components/contexts/Lyric.vue';
import AboutContent from '@/components/contexts/About.vue';
import Testimonials from '@/components/Testimonials.vue';
import Offerings from '@/components/contexts/Offerings.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/stores/main';
const store = useMainStore()
</script>
<template>
  <div
    class="relative transition duration-700 font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary overflow-x-clip">
    <div
      class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9 lg:pt-12 pb-18 lg:pb-20"
      ref="utilityBar">
      <InnerSecondaryNav v-if="store.loaded"  />
    </div>
    <InnerNav title="About" brandLabel="hi, i'm emm." brandURL="/" v-if="store.loaded" />
    <Preloader />
    <div class="flex flex-col gap-6 max-w-full mt-6 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto items-start">
      <AboutContent />
    </div>
    <Testimonials />
    <Offerings v-if="store.loaded"  />
    <Lyric class="my-20 lg:mt-34" v-if="!store.reduceMotion && store.loaded" />
    <Contact v-if="store.loaded"  />
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