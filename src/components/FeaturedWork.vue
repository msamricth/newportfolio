<template>
    <section ref="workSection" class="pt-20 overflow-x-clip" id="work">
        <div class="relative pb-8 group lg:pb-24 max-w-full lg:max-w-[1024px] xl:max-w-[1290px] mx-auto px-8 lg:px-12">
            <div class="relative">
                <WorkItem v-for="(w, index) in shuffledWork" :key="index" :item="w"
                    :onClick="() => { w.caseStudy ? openCaseStudy(w) : openWork(w.slug) }" :Link="itemHref(w)" class="mb-20 md:mb-12 lg:mb-20 xl:mb-28 nth-of-type-4:mb-12" />
                <div class="flex flex-col flex-wrap items-center gap-2 mx-auto opacity-0 group/ctas max-w-75 md:items-end md:max-w-4xl -translate-x-100"
                    ref="button">

                    <PrimaryBTN href="/work/"
                        class="btn text-primary dark:text-background inverted:text-background hover:text-accent"
                        label="View all work" :onClick="() => navigateTo('/work')" />
                </div>
            </div>

        </div>
    </section>
    <div class="hidden stroke-sunburn-orange stroke-"></div>
</template>

<script setup>
import { navigateTo } from '#imports'
import { ref, onMounted, computed, nextTick, watch } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@splidejs/vue-splide/css';

import { useMainStore } from '@/stores/main.js'
import { useModalStore } from '@/stores/modal.js'
import { work } from '@/data/work.js';
import PrimaryBTN from '@/components/buttons/PrimaryBTN.vue'
import WorkItem from '@/components/contexts/WorkItem.vue';
import { newPromise } from '@/utils/nextPromise';
const store = useMainStore()
const modalStore = useModalStore()
const workSection = ref(null);
const button = ref(null);
const loaded = ref(false)
const shuffledWork = ref([])



const itemHref = (item) => {
    if (item.caseStudy) {
        return '/work/' + item.slug;
    } else {
        return '/work/'
    }
}

const props = defineProps({
    featuredItems: Array,
})
const featuredWork = computed(() =>
    work.filter(w => props.featuredItems?.includes(w.slug))
)
const openCaseStudy = (item) => {
    if (!item.caseStudy) return
    const slug = '/work/' + item.slug
    navigateTo(slug)
}

const openWork = (item) => {
    modalStore.queueModalBySlug(item)
    navigateTo('/work')
}
watch(() => shuffledWork.value, async (newVal) => {
    if(!newVal) return
    await nextTick();
    await newPromise();
    gsap.timeline({
        scrollTrigger: {
            trigger: button.value,
            start: 'top top',
            toggleActions: 'play none none none',
            once: false,
        },
    })
        .to(button.value, {
            x: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: 'elastic.out(0.4)'

        })
},
    { immediate: true })
onMounted(async () => {
    await nextTick()
    modalStore.modalItem = '';
    modalStore.pendingModalSlug = '';
    const workSectionEl = workSection.value;
    shuffledWork.value = [...featuredWork.value].sort(() => Math.random() - 0.5)

    ScrollTrigger.create({
        trigger: workSectionEl,
        start: 'top 10%',
        end: 'bottom bottom',
        onEnter: () => {
            store.toggleFold(true)
            loaded.value = true;
        },
        onLeaveBack: () =>
            store.toggleFold(false, true)
    });


});
</script>