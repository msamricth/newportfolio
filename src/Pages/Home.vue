<script setup>
import Nav from '../components/navigation/Nav.vue';
import HeroSection from '../components/HeroSection.vue';
import About from '../components/contexts/Intro.vue'
import LogoGarden from '../components/LogoGarden.vue'
import FeaturedWork from '../components/carousels/FeaturedWork.vue'
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
  <div class="font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary transition duration-700">
    <HeroSection />
    <Nav />
    <About />
  <LogoGarden />
  <FeaturedWork />
  <Contact />
  <Footer />
  </div>
</template>