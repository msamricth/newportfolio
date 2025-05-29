<script setup>
definePageMeta({
  prerender: true,       
  head: {
    title: 'Green Leadership Trust | Featured Work',
    link: [
      { rel: 'canonical', href: 'https://codeartisan.dev/work/glt/' }
    ],
    meta: [
      { hid: 'desc',        name: 'description',      content: "Designed and developed Green Leadership Trust's website…" },
      { hid: 'og:type',     property: 'og:type',      content: 'website' },
      { hid: 'og:site',     property: 'og:site_name', content: 'Code Artisan' },
      { hid: 'og:locale',   property: 'og:locale',    content: 'en_US' },
      { hid: 'og:title',    property: 'og:title',     content: 'Green Leadership Trust – Featured Work | Code Artisan' },
      { hid: 'og:desc',     property: 'og:description',content: "Designed and developed Green Leadership Trust's website…" },
      { hid: 'og:url',      property: 'og:url',       content: 'https://codeartisan.dev/work/glt/' },

      // legacy LinkedIn “image” tag
      {
        hid: 'meta:image',
        name: 'image',
        content: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_1200,h_627,c_fill,f_auto/v1746750909/Title_2_jwbc2m.png?v2'
      },
      // the real OG image tag
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_1200,h_627,c_fill,f_auto/v1746750909/Title_2_jwbc2m.png?v2'
      },
      { hid: 'og:image:width', 	property: 'og:image:width',  content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '627' },
      { hid: 'og:image:alt',    property: 'og:image:alt',    content: 'Screenshot of the GLT project' },
    ]
  }
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