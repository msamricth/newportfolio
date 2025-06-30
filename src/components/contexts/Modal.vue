<template>
    <Teleport to="body">
        <div v-if="isOpen"
            class="fixed inset-0 top-0 z-50 w-full py-5 overflow-y-auto bg-primary/60 backdrop-blur h-dvh lg:p-5 lg:pb-15 overflow-x-clip z-100"
            :class="modalStore.modalItem?.textColor" @click.self="handleClose" ref="overlay">
            <div ref="modalContent"
                class="rounded-lg  lg:rounded-[3rem] lg:max-w-5xl xl:max-w-7xl w-full mx-auto p-6 lg:p-12 relative mt-10 modal-window origin-top motionless:duration-50 focus-visible:outline-none"
                :class="contentClass ? contentClass : 'bg-background'" tabindex="-1" @keydown.esc.prevent="handleClose">
                <button
                    class="absolute top-1 z-20 right-1 text-3xl cursor-pointer transition duration-700 text-current hover:text-accent rounded-[3rem] px-6 py-3 hover:scale-108 group size-18 flex flex-col justify-center items-center hover:rotate-270 modal-contant motionless:hover:rotate-0 active:scale-95 motionless:duration-50"
                    @click="handleClose" aria-label="Close modal">
                    <span
                        class="w-10 h-[4px] bg-current block rotate-45 motionless:group-hover:rotate-45 rounded-[3rem] absolute left-4 group-hover:-rotate-135 transition-all duration-700"></span>
                    <span
                        class="w-10 h-[4px] bg-current block -rotate-45 motionless:group-hover:-rotate-45 rounded-[3rem] absolute left-4 group-hover:rotate-135 transition-all duration-700"></span>
                </button>
                <span tabindex="0" @focus="focusLast" />
                <slot />
                <span tabindex="0" @focus="focusFirst" />
            </div>
        </div>
    </Teleport>
</template>

<script setup>

import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { useMainStore } from '@/stores/main.js'
import { useModalStore } from '@/stores/modal.js';

const props = defineProps({
    isOpen: { type: Boolean, required: true },
    contentClass: { type: String },
})


const emit = defineEmits(['close'])

const overlay = ref(null)
const modalContent = ref(null)
const store = useMainStore()
const modalStore = useModalStore()
let lastFocusedElement = null

function handleClose() {
    if (store.loaded) document.body.style.overflow = ''
    if (!store.reduceMotion) {
        const tl = gsap.timeline({
            onComplete: () => emit('close')
        })
        tl.to(modalContent.value, {
            scale: 0.9,
            autoAlpha: 0,
            duration: 0.3,
            ease: 'power1.in'
        }).to(overlay.value, {
            autoAlpha: 0,
            filter: 'blur(20px)',
            duration: 0.3,
            ease: 'power1.out'
        }, '<')
    } else {
        emit('close')
    }
}

function trapFocus() {
    const focusable = modalContent.value.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    // Fallback if nothing is focusable
    if (!first) {
        modalContent.value.focus()
        return
    }

    const keyHandler = (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault()
                last.focus()
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault()
                first.focus()
            }
        }
    }

    modalContent.value.addEventListener('keydown', keyHandler)
    return () => modalContent.value.removeEventListener('keydown', keyHandler)
}

function focusFirst() {
    const focusable = modalContent.value.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    focusable[0]?.focus()
}
function focusLast() {
    const focusable = modalContent.value.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    focusable[focusable.length - 1]?.focus()
}

watch(() => props.isOpen, async (open) => {
    if (!open) return
    await nextTick()
    document.body.style.overflow = 'hidden'
    lastFocusedElement = document.activeElement

    if (store.reduceMotion) {
        gsap.set([overlay.value, modalContent.value], { clearProps: 'all' })
        modalContent.value.focus()
        return
    }

    if (!overlay.value) return
    const tl = gsap.timeline()
    tl.fromTo(overlay.value, {
        autoAlpha: 0,
        filter: 'blur(40px)'
    }, {
        autoAlpha: 1,
        filter: 'none',
        duration: 0.4,
        ease: 'power1.out'
    })
    tl.fromTo(modalContent.value, {
        scale: 0,
    }, {
        scale: 1,
        duration: 0.6,
        ease: 'elastic.out(0.9)',
        onComplete: () => {
            modalContent.value.focus()
            cleanupTrap = trapFocus()
        }
    }, '-=0.2')

})

let cleanupTrap = null

onBeforeUnmount(() => {
    document.body.style.overflow = ''
    cleanupTrap?.()
})

watch(() => props.isOpen, (open) => {
    if (!open && lastFocusedElement) {
        lastFocusedElement.focus()
    }
})
</script>