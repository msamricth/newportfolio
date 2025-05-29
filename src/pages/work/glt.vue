<script setup lang="ts">
definePageMeta({ prerender: true })

useSeoMeta({
    title: 'Green Leadership Trust | Featured Work',
    ogTitle: 'Green Leadership Trust – Featured Work | Code Artisan',
    description: "Designed and developed Green Leadership Trust's website, and design most of GLT's media on an on-going basis.",
    ogDescription: "Designed and developed Green Leadership Trust's website, and design most of GLT's media on an on-going basis.",
    canonical: 'https://codeartisan.dev/work/glt/',
    ogUrl: 'https://codeartisan.dev/work/glt/',

    ogImage: 'https://codeartisan.dev/glt-meta.webp',
    ogImageWidth: 1200,
    ogImageHeight: 627,
    ogImageAlt: 'Screenshot of the GLT project',

    twitterCard: 'summary_large_image'
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