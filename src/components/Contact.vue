<template>
    <section ref="container" aria-labelledby="formHeader" id="sayHello" tabindex="0"
        class="relative items-center w-full min-h-screen mx-auto mb-2 form-wrapper text-electric-purple dark:text-accent inverted:text-electric-purple mt-25 md:mt-28">
        <div
            class="h-full flex items-center sticky top-45 justify-center mx-auto pb-12 mb-4 lg:mb-8 px-6 flex-col max-w-[778px] relative xl:pb-24 xl:pb-16">
            <h3 class="mb-6 text-4xl font-black text-center uppercase transition-all lg:mb-12 form-header placeholder-line"
                data-splitting="words" id="formHeader" ref="formHeader" :class="submitted ? 'blur-sm' : ''">Lets get in
                touch!</h3>

            <div v-if="submitted" class="absolute z-30 pt-16 text-center fade-up" id="thanks">
                <h4 class="mb-2 text-3xl font-bold text-yellow">Message sent!</h4>
                <p class="text-white">We'll be in touch, thanks!
                </p>
            </div>
            <form ref="formRef"
                class="flex flex-col w-full gap-6 px-2 transition-all lg:gap-8 text-electric-purple dark:text-accent inverted:text-electric-purple"
                novalidate :class="submitted ? 'blur-md opacity-25' : ''">
                <div v-if="error" class="mb-2 text-sm text-electric-purple">
                    {{ error }}
                </div>
                <div class="flex flex-wrap w-full">
                    <div class="relative w-1/2 pr-4">
                        <label class="sr-only focus:not-sr-only" tabindex="0" for="name">
                            Name
                        </label>
                        <input type="text" placeholder="Name" id="name" name="name" v-model="formDataValues.name"
                            :class="{ 'border-b border-yellow': nameError }"
                            class="w-full outline-0 h-16 pb-2 p bg-transparent border-current border-3 rounded-[6rem] pl-6 py-[9px] pr-3 outline-none transition-all active:border-green disabled:cursor-default disabled:bg-gray-2 text-xl focus:border-green text-electric-purple dark:text-accent inverted:text-electric-purple placeholder:text-electric-purple/60 focus:placeholder:text-electric-purple dark:placeholder:text-accent/60 dark:focus:placeholder:text-accent inverted:placeholder:text-electric-purple/60 inverted:focus:placeholder:text-electric-purple">
                    </div>

                    <div class="w-1/2">
                        <label for="email" class="sr-only focus:not-sr-only" tabindex="0">
                            Email
                        </label>
                        <input type="email" id="email" placeholder="Email" name="email" v-model="formDataValues.email"
                            required :class="{ 'border-b border-yellow': emailError }"
                            class="w-full outline-0 h-16 pb-2 p bg-transparent border-current border-3 rounded-[6rem] pl-6 py-[9px] pr-3 outline-none transition-all active:border-green disabled:cursor-default disabled:bg-gray-2 text-xl focus:border-green text-electric-purple dark:text-accent inverted:text-electric-purple placeholder:text-electric-purple/60 focus:placeholder:text-electric-purple dark:placeholder:text-accent/60 dark:focus:placeholder:text-accent inverted:placeholder:text-electric-purple/60 inverted:focus:placeholder:text-electric-purple">
                    </div>

                </div>

                <label for="message" class="sr-only focus:not-sr-only" tabindex="0">
                    Type your message
                </label>
                <textarea
                    class="placeholder:text-current/60 focus:placeholder:text-current outline-0 h-22 pb-2 p bg-transparent border-current border-3 rounded-[1rem] pl-6 py-6 text-electric-purple dark:text-accent inverted:text-electric-purple"
                    :class="{ 'border-b border-yellow': messageError }" id="message" name="message"
                    placeholder="Your message" required v-model="formDataValues.message"></textarea>


                <div class="hidden">
                    <input type="text" id="hpField" name="hpField" v-model="formDataValues.hpField" tabindex="-1"
                        autocomplete="off" />
                </div>


                <!-- Submit Button -->
                <div>
                    <PrimaryBTN type="submit"
                        class="text-1xl btn text-electric-purple dark:text-accent subtle-slide-in submit ms-auto"
                        label="Submit" :onClick="() => submitForm()" :delay="'0.7s'" ref="formButton" />


                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import PlaceholderJS from './../utils/placeholder.js';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMainStore } from '../stores/main.js'
import PrimaryBTN from "./buttons/PrimaryBTN.vue";
const store = useMainStore()
const formButton = ref(null)
const container = ref(null)
const formLabel = ref(null)
const formBlob = ref(null)
const formBlobInner = ref(null)
const formHeader = ref(null)

let tl



function expandTextAreaPattern() {

    function calcHeight(value) {
        var numberOfLineBreaks = (value.match(/\n/g) || []).length;
        var heightVar = 80.6;
        var newHeight = heightVar + numberOfLineBreaks * heightVar + 12 + 2;
        return newHeight;
    }

    var textareaEX = document.querySelector("textarea");

    if (textareaEX) {
        textareaEX.addEventListener("keyup", function () {
            textareaEX.style.height = calcHeight(textareaEX.value) + "px";
        });
    }
}
onMounted(async () => {
    await nextTick()
    expandTextAreaPattern();
});

async function contactFormAnims() {
    await nextTick()
    if (!formHeader.value) return
    const formHeaderEle = formHeader.value;
    const headlineAnim = new PlaceholderJS(formHeaderEle, { manual: true });
    ScrollTrigger.create({
        trigger: formHeaderEle,
        start: 'top top',
        end: 'bottom 70%',
        onEnter: () => store.toggleFold(true),
    });

    tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".form-wrapper",
            start: "top 80%",
            end: "bottom bottom",
            toggleActions: "play none none none",
        }
    });

    tl.call(() => {
        if (tl.reversed()) {
            headlineAnim.getTimeline().progress(1).reverse();
        } else {
            headlineAnim.play();
        }
    })
        .fromTo(
            ["#name", "#email", "#message"],
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }
        )
        .fromTo(
            ".submit",
            { opacity: 0, scale: 1.1, rotate: -2 },
            { opacity: 1, scale: 1, rotate: 0, duration: 0.3, ease: "power3.out" }
        );
}

watch(
    () => store.loaded,
    async (loaded) => {
        if (!loaded) return
        if (!store.reduceMotion) { await contactFormAnims() }
    },
    { immediate: true }
)
watch(
    () => store.reduceMotion,
    async (reduceMotion) => {
        await nextTick()
        if (reduceMotion) {
            if (tl) tl.kill()
            gsap.set(
                ["#name", "#email", "#message", ".submit"],
                { clearProps: "all" }
            )
        } else {
            await contactFormAnims()
        }
    },
    { immediate: true }
)
const nameError = ref(null);
const emailError = ref(null);
const messageError = ref(null);
const formRef = ref(null);
const formDataValues = reactive({
    name: '',
    email: '',
    message: '',
    hpField: ''
});
const submitted = ref(false);
const error = ref('');


async function submitForm() {
    // Check required fields and update a general error message if needed
    if (!formDataValues.name || !formDataValues.email || !formDataValues.message) {
        nameError.value = computed(() => !formDataValues.name);
        emailError.value = computed(() => !formDataValues.email);
        messageError.value = computed(() => !formDataValues.message);
        error.value = '*Please fill in all required fields.';
        return;
    }

    if (formDataValues.hpField) {
        error.value = 'No Robots!';
        console.warn('Bot detected.');
        return;
    }

    const formData = new FormData(formRef.value);

    try {
        const response = await fetch('https://usebasin.com/f/53cc1ac22741', {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData
        });
        if (response.status === 200) {
            submitted.value = true;
        } else {
            error.value = 'There was an error submitting the form. Please try again.';
            console.error('Form submission failed with status:', response.status);
        }
    } catch (err) {
        error.value = 'An unexpected error occurred.';
        console.error('Error submitting form:', err);
    }
}
</script>
<style scoped>
.fade-up {
    animation: fade-in-bottom .6s cubic-bezier(.39, .575, .565, 1.000) both;
}

@keyframes fade-in-bottom {
    0% {
        transform: translateY(0px);
        opacity: 0
    }

    100% {
        transform: translateY(-120px);
        opacity: 1
    }
}
</style>