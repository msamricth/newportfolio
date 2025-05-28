<script setup>
definePageMeta({ prerender: true })
useHead({
    title: 'Green Leadership Trust | Featured Work',
    meta: [
        { name: 'description', content: "Designed and developed Green Leadership Trust's website…" },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Code Artisan' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Green Leadership Trust – Featured Work | Code Artisan' },
        { property: 'og:description', content: "Designed and developed Green Leadership Trust's website…" },
        { property: 'og:url', content: 'https://codeartisan.dev/work/glt/' },
        { name: 'image', content: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_1200,h_627,c_fill,f_auto/v1746750909/Title_2_jwbc2m.png?v2' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_1200,h_627,c_fill,f_auto/v1746750909/Title_2_jwbc2m.png?v2' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '627' },
        { property: 'og:image:alt', content: 'Screenshot of the GLT project' },
        { hid: 'canonical', rel: 'canonical', href: 'https://codeartisan.dev/work/glt/' }
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