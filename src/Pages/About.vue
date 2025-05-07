<template>
    <div
        class="font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary transition duration-700 relative">

        <InnerNav title="About" />
        <div class="flex flex-col gap-6 max-w-full mt-6 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto items-start">
            <About />
        </div>
        <Testimonials />
        <Offerings />
        <Contact />
        <Footer />
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import InnerNav from '../components/navigation/InnerNav.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
import About from '../components/contexts/About.vue';
import Testimonials from '../components/carousels/Testimonials.vue';
import Offerings from '../components/contexts/Offerings.vue';


</script>
  
<style scoped>
.sidebar button {
    transition: all 0.2s ease;
}

.sidebar button:hover {
    transform: scale(1.05);
}
</style>
  