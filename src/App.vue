<script setup>
import Nav from './components/nav.vue';
import HeroSection from './components/HeroSection.vue';
import About from './components/about.vue'
import LogoGarden from './components/LogoGarden.vue'
import FeaturedWork from './components/FeaturedWork.vue'
import Contact from './components/Contact.vue';

'./components/About.vue';
</script>

<template>
  <div class="font-main bg-background text-primary dark:text-background dark:bg-deep-purple transition duration-700">
    <HeroSection />
    <Nav />
    <About />
  <LogoGarden />
  <FeaturedWork />
  <Contact />
  </div>
</template>
<style>
/* Global styles or overrides */
</style>
