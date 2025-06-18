<template>
    <section ref="workSection" class="pt-20" id="work">
        <div class="relative group overflow-x-clip pb-8 lg:pb-24">
            <div class="relative">
                <WorkItem v-for="(w, index) in shuffledWork" :key="index" :item="w"
                    :onClick="() => { w.caseStudy ? openCaseStudy(w) : openWork(w.slug) }" :Link="itemHref(w)" />
                <div class="flex gap-2 group/ctas flex-wrap max-w-75 flex-col items-center md:items-end md:max-w-4xl mx-auto opacity-0 -translate-x-100"
                    ref="button">
                    <MainButton href="/work/" label="View all work" class="hover:text-accent" :delay="'0.7s'" />
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
import MainButton from '@/components/buttons/MainButton.vue'
import WorkItem from '@/components/contexts/WorkItem.vue';
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
watch(() => shuffledWork.value, async () => {
    await nextTick();
    gsap.timeline({
        scrollTrigger: {
            trigger: button.value,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
            once: false,
        },
    })
        .to(button.value, {
            x: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: 'elastic.out(0.4)'

        })
});
onMounted(async () => {
    await nextTick()
    modalStore.modalItem = '';
    modalStore.pendingModalSlug = '';
    const workSectionEl = workSection.value;
    shuffledWork.value = [...featuredWork.value].sort(() => Math.random() - 0.5)

    ScrollTrigger.create({
        trigger: workSectionEl,
        start: 'top 20%',
        end: 'bottom bottom',
        onEnter: () => {
            store.toggleFold(true)
            loaded.value = true;
        }
    });


});
</script>