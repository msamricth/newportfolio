<template>
    <div class="flex flex-col items-center justify-center w-full max-w-full bg-sunburn-orange h-30 lg:h-70 overflow-x-clip"
        ref="bookingAlertContainer" v-if="store.showBooking">
        <div class="bg-sunburn-orange w-full group/booking fixed bottom-0 max-lg:left-0 justify-center lg:justify-start max-w-full lg:max-w-200 lg:translate-x-[-50%] lg:left-[50%] mx-auto lg:rounded-[3rem] flex gap-8 md:pl-12 lg:py-2 p-4 items-center  z-100 opacity-0 transition-opacity duration-700 overflow-clip text-background subtle-slide-in lg:bottom-4 lg:gap-12 xl:gap-16"
            :class="{ 'disapear': !show }" ref="bookingAlert">
            <div class="flex flex-col transition-all duration-900" :class="{ 'opacity-65': hovering }">
                <p class="mb-2 text-xl font-heading lg:mb-0 font-weight-thin">
                    <span class="hidden md:inline">Looks like you have </span><span
                        class="max-md:capitalize">been</span>
                    here before?
                </p>
                <p class="hidden text-xl font-heading lg:block">Lets schedule time
                    to check in!</p>
            </div>
            <div @mouseenter="isHovering" @mouseleave="isHovering" class="lg:w-65">
                <MainButton href="https://calendly.com/codeartisan" label="Lets Chat!"
                    class="max-md:text-sm max-md:max-w-32 hover:text-primary wobble-ver-right"
                    style="--theme-main-animation-delay:0.6s" />
            </div>
            <div class="transition-all duration-700 hidden group-[.fixed]/booking:block opacity-45 hover:opacity-85">
                <Close
                    class="group-[.fixed]/booking:top-0 group-[.fixed]/booking:scale-65 group-[.fixed]/booking:hover:scale-75 animate subtle-slide-in"
                    :onClick="() => closeBooking" style="--theme-main-animation-delay:0.4s" />
            </div>
        </div>
    </div>
</template>
<script setup>
import MainButton from '@/components/buttons/MainButton.vue'
import Close from '@/components/buttons/Close.vue'
import { useMainStore } from '../../stores/main'
import { ref, computed, onMounted, nextTick, onUnmounted } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNuxtApp } from '#app'

const { $gsap: gsap } = useNuxtApp()
const store = useMainStore()
const hovering = ref(false)
const show = ref(true)
const bookingAlert = ref(null)
const bookingAlertContainer = ref(null)

const isHovering = computed(() => {
    hovering.value = !hovering.value
})

const closeBooking = computed(() => {
    show.value = false
    store.hideBooking()
    window.removeEventListener('scroll', handleScroll);
})
const threshold = window.innerHeight * 0.012;
const handleScroll = () => {
    const el = bookingAlert.value;
    if (!el) return;
    if (window.scrollY > threshold) {
        el.classList.add('animate');
    } else {
        el.classList.remove('animate');
    }
};
onMounted(async () => {
    await nextTick()
    if (bookingAlert.value && store.showBooking) {

        window.addEventListener('scroll', handleScroll, { passive: true });


        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        gsap.to(bookingAlert.value, {
            scrollTrigger: {
                trigger: bookingAlertContainer.value, // Or a specific element
                start: "bottom bottom",
                end: 'top bottom',
                onEnter: () => {
                    bookingAlert.value?.classList.remove('fixed', 'lg:translate-x-[-50%]')
                    const btn = bookingAlert.value?.querySelector('.wobble-ver-right')
                    if (btn) {
                        btn.removeAttribute('style');
                        btn.classList.remove('wobble-ver-right')
                        setTimeout(() => {
                            btn.classList.add('wobble-ver-right')
                        }, 5)
                    }
                },
                onEnterBack: () => {

                    if (bookingAlert.value && store.showBooking) {
                        bookingAlert.value?.classList.add('fixed', 'lg:translate-x-[-50%]')
                    }
                },
            },
        });
    }
})
</script>