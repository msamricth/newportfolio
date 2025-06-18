<template>
    <div class="bg-sunburn-orange h-30 lg:h-70 w-full flex flex-col justify-center items-center overflow-x-clip max-w-full" ref="bookingAlertContainer" v-if="store.showBooking">
        <div class="bg-sunburn-orange w-full group/booking fixed bottom-0 max-lg:left-0 justify-center lg:justify-start max-w-full lg:max-w-200 lg:translate-x-[-50%] lg:left-[50%] mx-auto lg:rounded-[3rem] flex gap-8 pl-12 items-center lg:items-end z-100 p-4 overflow-clip text-background animate subtle-slide-in lg:py-2 lg:bottom-4 lg:gap-12 xl:gap-16"
             :class="{ 'disapear': !show }" ref="bookingAlert">
            <div class="flex flex-col transition-all duration-900" :class="{ 'opacity-65': hovering }">
                <p class="text-xl font-heading mb-2 lg:mb-0 font-weight-thin">
                    <span class="hidden md:inline">Looks like you have </span><span
                        class="max-md:capitalize">been</span>
                    here before?
                </p>
                <p class="text-xl font-heading hidden lg:block">Lets schedule time
                    to check in!</p>
            </div>
            <div @mouseenter="isHovering" @mouseleave="isHovering">
                <MainButton href="https://calendly.com/codeartisan" label="Lets Chat!"
                    class="max-2xl:text-sm max-2xl:max-w-32 hover:text-primary wobble-ver-right"
                    style="--theme-main-animation-delay:0.6s" />
            </div>
            <div class="transition-all duration-700 hidden group-[.fixed]/booking:block opacity-45 hover:opacity-85">
                <Close
                    class="group-[.fixed]/booking:scale-65 group-[.fixed]/booking:hover:scale-75 max-lg:-right-3 group-[.fixed]/booking:-top-3 animate subtle-slide-in"
                    :onClick="() => closeBooking" style="--theme-main-animation-delay:0.4s" />
            </div>
        </div>
    </div>
</template>
<script setup>
import MainButton from '@/components/buttons/MainButton.vue'
import Close from '@/components/buttons/Close.vue'
import { useMainStore } from '../../stores/main'
import { ref, computed, onMounted, nextTick } from 'vue'
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
})

onMounted(async () => {
    await nextTick()
    if (bookingAlert.value && store.showBooking) {
        gsap.to(bookingAlert.value, {
            scrollTrigger: {
                trigger: bookingAlertContainer.value, // Or a specific element
                start: "bottom bottom",
                end: 'top bottom',
                onEnter: () => {
                    bookingAlert.value?.classList.remove('fixed','lg:translate-x-[-50%]')
                    const btn = bookingAlert.value?.querySelector('.wobble-ver-right')
                    if(btn){
                        btn.removeAttribute('style');
                        btn.classList.remove('wobble-ver-right')
                        setTimeout(()=>{
                            btn.classList.add('wobble-ver-right')
                        }, 5)
                    }
                },
                onEnterBack: () => {
                    bookingAlert.value?.classList.add('fixed','lg:translate-x-[-50%]')
                },
            },
        });
    }
})

</script>