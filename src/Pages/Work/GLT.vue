<template>
    <div
        class="font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary transition duration-700">
        <InnerNav title="GLT" brandLabel="Featured Work" brandURL="/work" />
        <Intro />
        <Overview />
        <FullImage />
        <Sections />


        <Contact />
        <Footer />

    </div>
</template>
<script setup>
import InnerNav from '../../components/navigation/InnerNav.vue';
import Intro from '../../components/case-studies/Intro.vue';
import Overview from '../../components/case-studies/Overview.vue';
import FullImage from '../../components/case-studies/FullImage.vue';
import Sections from '../../components/case-studies/Sections.vue';
import Results from '../../components/case-studies/Results.vue';
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue';
const results = {
    heading: 'Results',
    items: [
        'Brand cohesion across digital and print, increasing audience trust and recognition',
        'A scalable website that supports GLT’s external communication and internal programming needs',
        'Streamlined internal operations using Airtable, resulting in more efficient board placements, tracking, and reporting',
        'Enhanced GLT’s capacity to support its strategic plan (2024–2029), especially in areas of digital storytelling, recruitment, and fundraising'
    ]
}
</script>