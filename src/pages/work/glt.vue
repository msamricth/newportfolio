<script setup>
definePageMeta({ prerender: true })

useSeoMeta({
    titleTemplate: '%s | Code Artisan',
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

import {nextTick, onMounted, defineAsyncComponent } from 'vue';
import InnerSecondaryNav from '@/components/navigation/InnerSecondaryNav.vue'
import InnerNav from '@/components/navigation/InnerNav.vue';
import Intro from '@/components/case-studies/Intro.vue';
import Overview from '@/components/case-studies/Overview.vue';
import FullImage from '@/components/case-studies/FullImage.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import { data } from '@/data/glt'
import Airtable from '@/components/icons/Airtable.vue'
import Wordpress from '@/components/icons/Wordpress.vue'
import ActionNetwork from '@/components/icons/ActionNetwork.vue'
import GLT from '@/components/icons/GLT.vue'
import { useMainStore } from '@/stores/main.js';
import { useHls } from '@/composables/useHLS';
import { useCSStore } from '@/stores/caseStudy.js';
const icons = [Airtable, Wordpress, ActionNetwork]
const sections = data.sections;
const results = data.results;
const introData = data.intro;
const csStore = useCSStore()
const store = useMainStore()

import BasicImage from '../../components/case-studies/sections/BasicImage.vue';
import Image from '../../components/case-studies/sections/Image.vue';
import ImageGist from '../../components/case-studies/sections/ImageGist.vue';
import Basic from '../../components/case-studies/sections/Basic.vue';
import IconGist from '../../components/case-studies/sections/IconGist.vue';
import SlideShow from '../../components/case-studies/sections/SlideShow.vue';

const { loadHls } = useHls()
onMounted(async()=>{
    await nextTick()
    if(!store.loaded) return
    loadHls()
    csStore.sectionReady = 0
})
</script>
<template>
    <div
        class="transition duration-700 font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary overflow-x-clip">
        <div class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9 lg:pt-24 pb-18 lg:pb-20"
            ref="utilityBar">
            <InnerSecondaryNav  v-if="store.loaded"/>
        </div>
        <InnerNav title="GLT" brandLabel="Featured Work" brandURL="/work" v-if="store.loaded" />
        <Intro :icon="GLT" :videoURL="introData.video" :poster="introData.poster" :heading="introData.title" v-if="store.loaded" />
        <Overview v-if="store.loaded" />
        <FullImage v-if="store.loaded" />

        <div class="overflow-clip" v-if="store.loaded">
            <Basic :heading="sections[0].heading" :paragraph="sections[0].paragraph" :items="sections[0].items"
                :tagIntro="sections[0].tagIntro" :tags="sections[0].tags" v-if="csStore.sectionReady > 0 && store.loaded" />
            <Image
                image="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1747698374/1_Pager_11_x_11_in_zcsbil.webp" v-if="csStore.sectionReady > 1 && store.loaded" />
            <BasicImage :heading="sections[1].heading" :paragraph="sections[1].paragraph" :items="sections[1].items"
                :tagIntro="sections[1].tagIntro" :tags="sections[1].tags"
                image="https://res.cloudinary.com/dp1qyhhlo/image/upload/w_900,f_auto/v1746818135/2_ev2u7a.jpg" v-if="csStore.sectionReady > 2 && store.loaded"/>
            <ImageGist :heading="sections[2].heading" :paragraph="sections[2].paragraph" :items="sections[2].items"
                :tagIntro="sections[2].tagIntro" :tags="sections[2].tags"
                image="https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto/v1746818136/Untitled_design_8_ia98uc.jpg"
                gistId="11de8482695bd4c490300e3e4077edda" repoUrl="https://github.com/msamricth/theme-main"
                FileName="sidebarBlockSettings.js" Caption="Block settings for GLT's custom WordPress Theme" v-if="csStore.sectionReady > 3 && store.loaded" />
            <IconGist :heading="sections[3].heading" :paragraph="sections[3].paragraph" :items="sections[3].items"
                :tagIntro="sections[3].tagIntro" :tags="sections[3].tags" gistId="2e77a8ac064d7665b942021b08e9aa85"
                repoUrl="https://github.com/msamricth/airtable-WP" FileName="class-airtable-service.php"
                Caption="WordPress form builder plugin that connects and syncs with Airtable" :icons="icons" v-if="csStore.sectionReady > 4 && store.loaded" />
            <SlideShow :heading="results.heading" :items="results.items" :Images="results.Images"
                :buttonLabel="results.button.label" :buttonHref="results.button.href" v-if="csStore.sectionReady > 5 && store.loaded"/>

        </div>
        <Contact v-if="store.loaded" />
        <Footer />

    </div>
</template>