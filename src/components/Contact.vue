<template>
    <section ref="container" aria-labelledby="formHeader" id="sayHello" tabindex="0"
        class="form-wrapper relative w-full mx-auto mb-2  text-primary dark:text-accent inverted:text-electric-purple items-center relative mt-25 md:mt-28 min-h-screen">
        <div
            class="h-full flex items-center sticky top-45 justify-center mx-auto pb-12 mb-4 lg:mb-8 px-6 flex-col max-w-[778px] relative xl:pb-24 xl:pb-16">
            <h3 class="text-4xl font-black transition text-center mb-6 lg:mb-12 form-header uppercase placeholder-line"
                data-splitting="words" id="formHeader" ref="formHeader" :class="submitted ? 'blur-sm' : ''">Lets get in
                touch!</h3>

            <div v-if="submitted" class="text-center pt-16 fade-up absolute z-30" id="thanks">
                <h4 class="text-3xl mb-2 font-bold mb-2 text-yellow">Success</h4>
                <p class="text-white">ss
                </p>
            </div>
            <form ref="formRef" @submit.prevent="submitForm" class="transition w-full px-2 block flex flex-col gap-6"
                novalidate :class="submitted ? 'blur-md opacity-25' : ''">
                <div v-if="error" class="text-electric-purple text-sm mb-2">
                    {{ error }}
                </div>
                <div class="flex flex-wrap w-full">
                    <div class="relative w-1/2 pr-4">
                        <label class="sr-only focus:not-sr-only" tabindex="0" for="name">
                            Name
                        </label>
                        <input type="text" placeholder="Name" id="name" name="name" v-model="formDataValues.name"
                            :class="{ 'border-b border-yellow': nameError }"
                            class="w-full placeholder:text-current/60 focus:placeholder:text-current outline-0 h-12 pb-2 p bg-transparent border-current border rounded-[6rem] pl-6 py-[10px] pr-3 outline-none transition active:border-green disabled:cursor-default disabled:bg-gray-2 text-xl focus:border-green bg-transparent text-primary dark:text-accent inverted:text-electric-purple">
                    </div>

                    <div class="w-1/2">
                        <label for="email" class="sr-only focus:not-sr-only" tabindex="0">
                            Email
                        </label>
                        <input type="email" id="email" placeholder="Email" name="email" v-model="formDataValues.email"
                            required :class="{ 'border-b border-yellow': emailError }"
                            class="w-full placeholder:text-current/60 focus:placeholder:text-current outline-0 h-12 pb-2 p bg-transparent border-current border rounded-[6rem] pl-6 py-[10px] pr-3 outline-none transition active:border-green disabled:cursor-default disabled:bg-gray-2 text-xl focus:border-green text-primary dark:text-accent inverted:text-electric-purple">
                    </div>

                </div>

                <textarea
                    class="placeholder:text-current/60 focus:placeholder:text-current outline-0 h-22 pb-2 p bg-transparent border-current border rounded-[1rem] pl-6 py-6 text-primary dark:text-accent inverted:text-electric-purple"
                    :class="{ 'border-b border-yellow': messageError }" id="message" name="message"
                    placeholder="Your message" required v-model="formDataValues.message"></textarea>


                <div class="hidden">
                    <input type="text" id="hpField" name="hpField" v-model="formDataValues.hpField" tabindex="-1"
                        autocomplete="off" />
                </div>


                <!-- Submit Button -->
                <div>


                    <button type="submit"
                        class="relative submit flex items-center transition overflow-hidden w-60 ml-auto text-center group/cta"
                        ref="formButton" @mouseenter="formHoverIn" @mouseleave="formHoverOut">
                        <span
                            class="inline-block font-semibold px-4 py-2 border-current border-2 rounded-full transition-all relative z-10 bg-inherit w-full whitespace-nowrap"
                            ref="formLabel">
                            Submit
                        </span>
                        <span
                            class="absolute right-0 top-0 w-0 h-full opacity-0 transition-all z-0 origin-left block overflow-clip"
                            ref="formBlob">
                            <span ref="formBlobInner"
                                class="flex items-center justify-center rounded-r-full bg-current h-full transition-all z-0 origin-left block w-10">
                                <svg class="arrow w-24 h-24 fill-current" viewBox="0 0 24 24">
                                    <path d="M8 5l8 7-8 7z" />
                                </svg>
                            </span>
                        </span>
                    </button>

                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { gsap } from "gsap";
import PlaceholderJS from './../utils/placeholder.js';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMainStore } from '../stores/main.js'
const store = useMainStore()
const formButton = ref(null)
const container = ref(null)
const formLabel = ref(null)
const formBlob = ref(null)
const formBlobInner = ref(null)
const formHeader = ref(null)

let formTL

const formHoverIn = () => {
    if (!formTL) {
        formTL = gsap.timeline({ paused: true })

        formTL.set(formBlob.value, { opacity: 0, width: 0 })
        formTL.set(formBlobInner.value, { x: '-2.5rem' })

        formTL.to(formBlob.value, { opacity: 1, duration: 0.2 }, 0)
        formTL.to(formLabel.value, { paddingRight: '2rem', duration: 0.2 }, 0)
        formTL.fromTo(formBlobInner.value, { x: '-2.5rem' }, { x: 0, duration: 0.2, ease: 'power2.out' }, 0.1)
        formTL.fromTo(formBlob.value, { width: 0 }, { width: '2.5rem', duration: 0.2, ease: 'power2.out' }, 0.1)
        formTL.to(formLabel.value, {
            borderTopRightRadius: '0.5rem',
            borderBottomRightRadius: '0.5rem',
            width: '80%',
            duration: 0.2,
            ease: 'power2.out'
        }, 0.25)
        formTL.to(formBlobInner.value, {
            backgroundColor: 'transparent',
            duration: 0.2,
            ease: 'power3.out'
        }, 0.5)
    }

    formTL.play()
}

const formHoverOut = () => {
    formTL?.reverse()
}
gsap.registerPlugin(ScrollTrigger);
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
onMounted(() => {
    const formHeaderEle = formHeader.value;
    const headlineAnim = new PlaceholderJS(formHeaderEle, { manual: true });
    ScrollTrigger.create({
        trigger: formHeaderEle,
        start: 'top top',
        end: 'bottom 70%',
        onEnter: () => {
            store.setsliderTimeline('after') 
        },
        onEnterBack: () => {
            store.setsliderTimeline('after') 
        },
    });
    expandTextAreaPattern();
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".form-wrapper",
            start: "top 80%",
            end: "bottom bottom",
            toggleActions: "play none play reverse",
        }
    });
    tl.call(() => {
        if (tl.reversed()) {} else {
            document.body.classList.add('dark')
        }
    })
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
});
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