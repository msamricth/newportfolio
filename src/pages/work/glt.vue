<script setup>
useHead({
    title: 'Green Leadership Trust | Featured Work',
    meta: [
        { name: 'description', content: "Designed and developed Green Leadership Trust's website, and design most of GLT's media on an on-going basis." },
        { property: 'og:title', content: 'Green Leadership Trust - Featured Work | Code Artisan' },
        { property: 'og:url', content: 'https://codeartisan.dev/work/glt' },
        { property: 'og:image', content: "https://res.cloudinary.com/dp1qyhhlo/image/upload/w_990,f_auto/v1746750909/Title_2_jwbc2m.png" },
    ]
})
import InnerNav from '../../components/navigation/InnerNav.vue';
import Intro from '../../components/case-studies/Intro.vue';
import Overview from '../../components/case-studies/Overview.vue';
import FullImage from '../../components/case-studies/FullImage.vue';
import Sections from '../../components/case-studies/Sections.vue';
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue';

</script>
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