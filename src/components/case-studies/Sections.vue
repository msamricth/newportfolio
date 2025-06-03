<template>
    <div ref="container" class="overflow-clip">
        <!-- Section 1 -->

        <section ref="section1" class="px-8 max-w-full min-h-[150dvh] flex flex-col pt-24 tl">
            <div class="w-full max-w-2xl text-container mx-auto sticky top-45 md:top-25 lg:top-45 xl:top-38">
                <h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">{{ sections[0].heading
                    }}
                </h4>
                <p class="text-xl mb-6 placeholder-line" data-splitting="words" v-if="sections[0].paragraph">{{
                    sections[0].paragraph }}</p>
                <ul class="list-disc pl-6 space-y-3">
                    <li v-for="(item, i) in sections[0].items" :key="i" class="text-lg font-medium opacity-0" data-item>
                        {{ item }}</li>
                </ul>
            </div>

            <h5 v-if="sections[0].tags && sections[0].tags.length" class="text-xl my-6 placeholder-line"
                data-splitting="words">
                {{ sections[0].tagIntro }}
            </h5>

            <ul v-if="sections[0].tags && sections[0].tags.length" class="flex gap-1 items-start flex-wrap">
                <li v-for="(tag, i) in sections[0].tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                    {{ tag }}
                </li>
            </ul>
        </section>
        <section ref="imageSection"
            class="max-w-full lg:max-w-[1290px] xl:max-w-[1680px] mx-auto lg:px-12 py-12 lg:py-0 relative">
            <img class="md:max-h-[95dvh] mx-auto md:rounded-[3rem] lg:rounded-[6rem]"
                src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1747698374/1_Pager_11_x_11_in_zcsbil.webp" />
        </section>
        <section ref="section2"
            class="flex flex-col md:flex-row relative md:justify-between lg:justify-center items-start py-14 lg:py-0 gap-12 lg:min-h-[250dvh] overflow-clip mt:mt-10 lg:mt-20">
            <div ref="section2Content"
                class="w-full md:max-w-2xl text-container px-8 lg:px-12 pb-12 md:pb-0 lg:min-h-dvh flex flex-col justify-center tl">
                <h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">{{ sections[1].heading }}
                </h4>
                <p class="text-xl mb-6 placeholder-line" data-splitting="words" v-if="sections[1].paragraph">{{
                    sections[1].paragraph }}</p>
                <ul class="list-disc pl-6 space-y-3">
                    <li v-for="(item, i) in sections[1].items" :key="i" class="text-lg font-medium opacity-0" data-item>
                        {{ item }}</li>
                </ul>
                <h5 class="text-xl my-6 placeholder-line" data-splitting="words">{{ sections[1].tagIntro }}</h5>
                <ul class="flex flex-wrap gap-2">
                    <li v-for="(tag, i) in sections[1].tags" :key="i"
                        class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                        {{ tag }}</li>
                </ul>
            </div>
            <div ref="section2Image"
                class="w-full lg:w-1/2 h-[90dvh] md:rounded-l-[3rem] bg-cover bg-no-repeat bg-center lg:opacity-0 lg:absolute top-18 right-0 image tl"
                :style="`background-image: url(${images[1]})`"></div>
        </section>
        <section ref="section3"
            class="min-h-dvh flex flex-col md:flex-row items-center justify-between py-14 gap-12 relative tl lg:min-h-[200vh] lg:items-start">
            <div ref="section3Image"
                class="w-full order-3 md:order-1 md:w-1/3 h-[80vh] bg-cover bg-center md:opacity-0 md:rounded-r-[3rem] image tl md:px-8 lg:px-12 lg:mt-8 xl:w-1/2"
                :style="`background-image: url(${images[2]})`"></div>
            <div class="w-full order-1 md:order-2 lg:max-w-2xl md:mr-auto text-container px-8 lg:px-12 tl lg:h-[80vh] lg:flex lg:flex-col lg:justify-center lg:mt-8">
                <h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">{{ sections[2].heading }}
                </h4>
                <p class="text-xl mb-6 placeholder-line" data-splitting="words" v-if="sections[2].paragraph">{{
                    sections[2].paragraph }}</p>
                <ul class="list-disc pl-6 space-y-3">
                    <li v-for="(item, i) in sections[2].items" :key="i" class="text-lg font-medium opacity-0" data-item>
                        {{ item }}</li>
                </ul>


                <h5 v-if="sections[2].tags && sections[2].tags.length" class="text-xl my-6 placeholder-line"
                    data-splitting="words">
                    {{ sections[2].tagIntro }}
                </h5>

                <ul v-if="sections[2].tags && sections[2].tags.length" class="flex gap-1 items-start flex-wrap">
                    <li v-for="(tag, i) in sections[2].tags" :key="i"
                        class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                        {{ tag }}
                    </li>
                </ul>
            </div>
            <div
                class="order-2 md:px-0 md:pt-6 lg:pt-0 px-2 w-full md:absolute relative md:opacity-0 gist tl md:right-8 lg:right-12 md:w-2/3 flex flex-col justify-center xl:max-w-xl  lg:mt-14">
                <Gist gistId="11de8482695bd4c490300e3e4077edda" repoUrl="https://github.com/msamricth/theme-main"
                    FileName="sidebarBlockSettings.js" Caption="Block settings for GLT's custom WordPress Theme"
                    class="lg:mx-auto w-full" />
            </div>
        </section>
        <section ref="section4"
            class="relative flex flex-col md:flex-row justify-between py-14 md:py-0 gap-12 max-w-full lg:max-w-[1024px] xl:max-w-[1290px] mx-auto overflow-clip md:min-h-[280dvh] lg:min-h-[230dvh] lg:justify-center lg:items-start">
            <div ref="section4Content"
                class="order-2 md:order-1 w-full md:max-w-4xl lg:max-w-2xl xl:max-w-xl md:ml-auto text-container pt-6 md:pt-0 lg:pt-6 px-8 lg:pl-12 lg:pr-0 tl lg:min-h-[70vh] lg:flex lg:flex-col lg:justify-center">
                <h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">{{ sections[3].heading }}
                </h4>
                <p class="text-xl mb-6 placeholder-line" data-splitting="words" v-if="sections[3].paragraph">{{
                    sections[3].paragraph }}</p>
                <ul class="list-disc pl-6 space-y-3">
                    <li v-for="(item, i) in sections[3].items" :key="i" class="text-lg font-medium opacity-0" data-item>
                        {{ item }}</li>
                </ul>


                <h5 v-if="sections[3].tags && sections[3].tags.length" class="text-xl my-6 placeholder-line"
                    data-splitting="words">
                    {{ sections[3].tagIntro }}
                </h5>

                <ul v-if="sections[3].tags && sections[3].tags.length" class="flex gap-1 items-start flex-wrap">
                    <li v-for="(tag, i) in sections[3].tags" :key="i"
                        class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                        {{ tag }}
                    </li>
                </ul>
            </div>
            <Gist ref="gistContainer" gistId="2e77a8ac064d7665b942021b08e9aa85"
                repoUrl="https://github.com/msamricth/airtable-WP" FileName="class-airtable-service.php"
                Caption="WordPress form builder plugin that connects and syncs with Airtable"
                class="order-3 md:order-2 md:absolute md:max-w-xl lg:max-w-2xl md:opacity-0 gist mx-2 md:mx-6 md:mt-6 lg:mt-0 tl left-0" />
            <div class="order-2 md:order-3 items-center relative space-y-12 md:w-2/5 lg:w-lg px-8 lg:pr-12 lg:pl-0 tl  lg:h-[70vh]  lg:flex lg:flex-col lg:justify-center">
                <div ref="iconTrack"
                    class="relative space-y-12 md:size-90 lg:size-95 origin-center max-md:flex justify-between gap-3 tl">
                    <div class="icon-btn md:absolute w-24 h-24 group md:min-w-[120px] top-0 left-30 tl">
                        <Airtable
                            class="icon-wipe-overlay inset-0 w-full h-full transition-all duration-700 z-10 text-hot-coral tl" />
                    </div>
                    <div
                        class="icon-btn  md:absolute w-24 h-24 group md:min-w-[120px] overflow-visible top-34 lg:top-36 left-30 tl">
                        <Wordpress
                            class="icon-wipe-overlay  inset-0 w-full h-full transition-all duration-700 z-10 text-electric-purple tl" />
                    </div>
                    <div class="icon-btn  md:absolute w-24 h-24 group min-w-[120px] bottom-0 left-32 tl">
                        <ActionNetwork
                            class="icon-wipe-overlay inset-0 w-full h-full transition-all duration-700 z-10 text-sunburn-orange  tl" />
                    </div>
                </div>
            </div>
        </section>


        <section ref="section5"
            class="flex flex-col md:flex-row items-center lg:pr-24 justify-center py-14 md:py-0 lg:my-40 lg:min-h-[350vh] lg:items-start w-full relative">

            <div ref="resultImages"
                class="md:absolute w-full max-w-xl overflow-hidden md:w-1/2 md:h-dvh left-0 tl flex flex-col gap-12 order-2 md:order-1 lg:justify-center lg:max-w-1/2 lg:h-screen">
                <img v-for="(img, i) in finalImages" :key="i" :src="img" :class="'results-image-' + i"
                    class="md:absolute top-0 left-0 w-full object-contain md:object-cover opacity-0 blur-xl h-full md:rounded-r-[3rem] tl md:h-[120vh]" />
            </div>
            <div
                class="w-full md:w-1/2 lg:max-w-2xl mb-12 text-container px-8 lg:px-12 pt-18 order-1 md:order-2 lg:min-h-dvh lg:flex lg:flex-col lg:justify-center lg:mx-auto">

                <h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">{{ results.heading }}
                </h4>
                <p class="text-xl mb-6 placeholder-line" data-splitting="words" v-if="results.paragraph">{{
                    results.paragraph }}</p>
                <ul class="list-disc pl-6 space-y-1 lg:space-y-3">
                    <li v-for="(item, i) in results.items" :key="i" class="text-sm lg:text-lg font-medium opacity-0"
                        data-item>
                        {{ item }}</li>
                </ul>


                <h5 v-if="results.tags && results.tags.length" class="text-xl my-6 placeholder-line"
                    data-splitting="words">
                    {{ results.tagIntro }}
                </h5>

                <ul v-if="results.tags && results.tags.length" class="flex gap-1 items-start flex-wrap">
                    <li v-for="(tag, i) in results.tags" :key="i"
                        class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                        {{ tag }}
                    </li>
                </ul>
                <MainButton href="https://greenleadershiptrust.org/" label="greenleadershiptrust.com"
                    :onClick="() => ctaClick('https://greenleadershiptrust.org/')"
                    class="max-md:text-md min-w-[270px] md:min-w-[306px] text-electric-purple dark:text-accent mt-6 lg:mt-24 btn" />
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PlaceholderJS from '../../utils/placeholder.js'
import Airtable from '../icons/Airtable.vue'
import Wordpress from '../icons/Wordpress.vue'
import ActionNetwork from '../icons/ActionNetwork.vue'
import MainButton from '../buttons/MainButton.vue'
import { data } from '../../data/glt'
import Gist from '../contexts/Gist.vue'

let mm;
const sections = data.sections
const container = ref(null)
const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)
const imageSection = ref(null)
const section4Content = ref(null)
const gistContainer = ref(null)
const section5 = ref(null)
const section2Content = ref(null)
const section2Image = ref(null)
const section3Image = ref(null)
const iconTrack = ref(null)
const resultImages = ref(null)
const results = {
    heading: 'Results',
    items: [
        'Brand cohesion across digital and print, increasing audience trust and recognition',
        'A scalable website that supports GLT’s external communication and internal programming needs',
        'Streamlined internal operations using Airtable, resulting in more efficient board placements, tracking, and reporting',
        'Enhanced GLT’s capacity to support its strategic plan (2024–2029), especially in areas of digital storytelling, recruitment, and fundraising'
    ]
}
const images = [
    '',
    'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_900,f_auto/v1746818135/2_ev2u7a.jpg',
    'https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto/v1746818136/Untitled_design_8_ia98uc.jpg',
]
const finalImages = [
    'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_900,q_auto/v1746818458/3_1_mkdmee.png',
    'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_900,q_auto/v1746818489/4_1_fz3muz.png',
]
onMounted(async () => {
    await nextTick()
    mm = gsap.matchMedia()
    nextTick(() => {
        const el1 = section1.value
        const el2 = section2.value
        const el3 = section3.value
        const el4 = section4.value
        const el5 = section5.value
        let els = [el2, el3, el4, el5]

        mm.add(
            {
                // define two named queries
                isDesktop: "(min-width: 1024px)",
                isTablet: "(max-width: 1023px) and (min-width: 778px)",
                isMobile: "(max-width: 777px)",

                reduceMotion: "(prefers-reduced-motion: reduce)",
            },
            (context) => {
                const { isDesktop, isTablet, isMobile, reduceMotion } = context.conditions

                if (reduceMotion) return;

                if (isDesktop || isTablet || isMobile) {
                    const bigimage1 = imageSection.value;
                    setupRougeImages(bigimage1)
                    setupSection1()
                }

                if (isDesktop) {
                    // full scroll-triggered sequences
                    setupSection2()
                    setupSection3()
                    setupSection4('top 15%')
                    setupSection5('58%')
                }
                if (isTablet) {
                    setupSection3()
                    setupSection4()
                    setupSection5('50%')
                    els = [el1, el2]
                    els.forEach((el) => {
                        textAnim(el, false, 'play none none reverse');
                        imgAnim(el, false, 'play none none reverse');
                    })
                }
                if (isMobile) {
                    els = [el2, el3, el4, el5]
                    els.forEach((el) => {
                        console.log(el)
                        imgAnim(el, false, 'play none none reverse');
                        textAnim(el, false, 'play none none reverse');
                    })

                }
                return () => {
                    const els = gsap.utils.toArray(".tl, .image, .icon-btn, .placeholder-line");
                    gsap.set(els, {
                        clearProps: "transform,opacity,filter,x,y,autoAlpha,scale,visibility"
                    });
                    ScrollTrigger.getAll().forEach((st) => {
                        console.log(st.vars.id)
                        if (st.vars.id === 'sectionST') {
                            st.kill()
                        } else {
                            st.refresh()
                        }
                    })
                }
            }
        )
    })
})
const imgAnim = (el, reversed = false, toggleActions = 'play none none reverse') => {
    const imgs = el.querySelectorAll('img, .image')
    const svgs = el.querySelectorAll('.icon-btn')
    const svgCont = iconTrack.value
    let int = 0
    if (svgs) {
        const tl = gsap.timeline({
            paused: true
        })
        svgs.forEach((icon, index) => {
            const overlayIcon = icon.querySelector('.icon-wipe-overlay');
            const overlayPaths = overlayIcon.querySelectorAll('path');
            let len = 0;
            int = index * 0.15;
            // tl.fromTo(icon, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, index * 0.5)
            overlayPaths.forEach((path) => {
                len = path.getTotalLength();
                path.style.strokeDasharray = len;
                path.style.strokeDashoffset = len;
            });
            tl.fromTo(icon, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, int)

            int = int * index
            tl.fromTo(overlayPaths, {
                autoAlpha: 0,
                strokeDashoffset: len
            }, {
                autoAlpha: 1,
                strokeDashoffset: 0,
                duration: 1,
                ease: 'power3.out',
            }, int)
        })
        ScrollTrigger.create({
            id: 'sectionST',
            trigger: svgCont,
            start: 'top 80%',
            onEnter: () => tl.play(),
            onLeaveBack: () => tl.reverse().progress(0)
        })
    }

    if (imgs) {
        imgs.forEach((img, i) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'sectionST',
                    trigger: el,
                    start: 'top 50%',
                    end: 'bottom 90%',
                    toggleActions: toggleActions,
                }
            })

            tl.fromTo(img, {
                y: -200,
                autoAlpha: 0,
                filter: 'blur(40px)'
            }, {
                y: 0,
                filter: 'blur(0px)',
                autoAlpha: 1,
                duration: 0.4,
                ease: 'power1.inOut'
            }, i * 0.6)
        })
    }

}
const textAnim = (el, reversed = false, toggleActions = 'play none none none') => {
    if (!el) return;
    const h = el.querySelector('h4.placeholder-line')
    const h5 = el.querySelector('h5.placeholder-line')
    const p = el.querySelector('p.placeholder-line')
    const items = el.querySelectorAll('.list-disc li')
    const tagEls = el.querySelectorAll('.tags')
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            id: 'sectionST',
            start: 'top 50%',
            end: 'bottom 90%',
            toggleActions: toggleActions,
        }
    })
    tl.fromTo(h,
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 0.3
        }, 0.1
    );

    tl.add(() => {
        const phH = new PlaceholderJS(h, { manual: true });
        phH.play()
    }, 0)
    if (p) {
        tl.fromTo(p,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 0.3,
                onStart: () => {
                    //   phP.play()
                }
            }, 0.3
        )
        tl.add(() => {
            const phP = new PlaceholderJS(p, { manual: true, speed: 2 });
            phP.play()
        }, 0.28)
    }
    if (h5) {
        tl.fromTo(h5,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 0.3,
            }, 0.4
        )
        tl.add(() => {
            const phP = new PlaceholderJS(h5, { manual: true, speed: 2 });
            phP.play()
        }, 0.38)
    }

    items.forEach((item, i) => {
        tl.fromTo(item,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 0.3,
            },
            0.3 + (i * 0.15)
        );
    })

    tagEls.forEach((tag, i) => {
        tl.fromTo(tag, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out'
        }, items.length * 0.15 + 0.6 + (i * 0.05))
    })
    // if(play) tl.play();
    if (reversed) tl.reversed()

}

function setupRougeImages(elm) {
    if (!elm) return;
    nextTick(() => {
        const image = elm.querySelector('img')
        const imageAnim = gsap.timeline({
            scrollTrigger: {
                trigger: elm,
                id: 'sectionST',
                // markers: true,
                start: 'top 70%',
                pinSpacing: false,
                end: 'bottom top',
                toggleActions: 'play none none reverse',
            }
        })
        imageAnim.fromTo(image, {
            y: '100%',
            autoAlpha: 0,
            filter: 'blur(40px)'
        }, {
            y: 0,
            autoAlpha: 1,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: 'power3.inOut'

        })
    })

}

function setupSection1() {
    nextTick(() => {
        const el = section1.value
        const tl = gsap.timeline({
            paused: true,
        })

        textAnim(el, false, 'play none none reverse');

        tl.fromTo(el, { x: '0%', autoAlpha: 1 }, { x: '-100%', autoAlpha: 0, duration: 1, filter: 'blur(40px)', ease: 'power3.inOut' })
        ScrollTrigger.create({
            trigger: el,
            start: 'top top',
            end: 'bottom 60%',
            scrub: true,
            id: 'sectionST',
            // pin: true,
            // pinSpacing: false,
            //  anticipatePin: 1,
            onEnter: () => {
                tl.reverse()
            },
            onLeave: () => {
                tl.play()
            },
            onEnterBack: () => {
                textAnim(el, true);
                tl.reverse()
            },
            onLeaveBack: () => {
                tl.reverse()
            }
        })
    })
}

function setupSection2() {
    nextTick(() => {
        const el = section2.value
        const text = section2Content.value
        const img = section2Image.value
        textAnim(el, false, 'play none none reverse');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top top',
                end: '+=200%',
                pinSpacing: false,
                id: 'sectionST',
                scrub: true,
                pin: true,
            }
        })
        tl.to(text, {
            x: '-50%',
            ease: 'power2.inOut',
            duration: 1,
        })
        //  tl.fromTo(text, { x: '100%', autoAlpha: 0 }, { x: '0%', autoAlpha: 1, duration: 1 })
        // fade in image
        tl.fromTo(img, { autoAlpha: 0, y: '200%', filter: 'blur(40px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1 }, '-=0.5')
        // slide text off left, image off right
        tl.to(text, { x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, '+=3.5')
        tl.to(img, { x: '100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, '<')
    })
}

function setupSection3() {

    nextTick(() => {
        const el = section3.value
        const text = el.querySelector('.text-container')
        const h = el.querySelector('h4.placeholder-line')
        const h5 = el.querySelector('h5.placeholder-line')
        const p = el.querySelector('p.placeholder-line')
        const items = el.querySelectorAll('.list-disc li')
        const gist = el.querySelector('.gist')
        const tagEls = el.querySelectorAll('.tags')
        const phH = new PlaceholderJS(h, { manual: true });
        const img = section3Image.value
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top top',
                end: '+=200%',
                scrub: true,
                id: 'sectionST',
                pinSpacing: false,
                pin: true,
            }
        })
        tl.addLabel('entrance')
        tl.fromTo(img, { x: '-100%', autoAlpha: 0, filter: 'blur(40px)' }, { x: '0%', filter: 'blur(0px)', autoAlpha: 1, duration: 0.75 })
        tl.fromTo(text, { x: '100%', autoAlpha: 0 }, { x: '0%', autoAlpha: 1, duration: 1 }, 'entrance-=0.05')

        tl.fromTo(h,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 0.3,
                onStart: () => {
                    phH.play()
                }
            }, 'entrance+=0.8'
        );
        if (p) {
            const phP = new PlaceholderJS(p, { manual: true, speed: 2 });
            tl.fromTo(p,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                    onStart: () => {
                        phP.play()
                    }
                }, 'entrance+=1'
            )
        }
        if (h5) {
            const phP = new PlaceholderJS(h5, { manual: true, speed: 2 });
            tl.fromTo(h5,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                    onComplete: () => {
                        if (!tl.reversed()) phP.play()
                    }
                }
            ), 'entrance+=1.1'
        }
        items.forEach((item, i) => {
            tl.fromTo(item,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                },
                `entrance+=${1 + (i * 0.15)}`
            );
        })

        tagEls.forEach((tag, i) => {
            tl.fromTo(tag, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: 'power2.out'
            }, `entrance+=${items.length * 0.15 + 1.2 + (i * 0.05)}`)
        })
        tl.addLabel('gist', 'entrance+=2')
        tl.to(text, { x: '200%', filter: 'blur(40px)', autoAlpha: 1, duration: 0.5 }, 'gist+=0.5')
        tl.fromTo(gist, { x: '-200%', filter: 'blur(40px)', autoAlpha: 0 }, { x: '0', filter: 'blur(0px)', autoAlpha: 1, duration: 0.5 }, 'gist+=0.5')
        
        tl.addLabel('leave', 'gist+=2')
        tl.to(gist, { x: '200%', filter: 'blur(40px)', autoAlpha: 1, duration: 0.5 }, 'leave+=0.5')
        tl.to(img, { y: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=0.5')
    })
}

function setupSection4(start = 'top 15%') {

    nextTick(() => {
        const el = section4.value
        const elm = section4Content.value
        const gistEl = el.querySelector('.gist')
        let int = 0
        const icons = iconTrack.value.querySelectorAll('.icon-btn')

        textAnim(elm, false, 'play none none reverse');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: start,
                end: '+=200%',
                id: 'sectionST',
                scrub: true,
                pinSpacing: false,
                pin: true,
            }
        })
        tl.addLabel('enter')
        tl.fromTo(elm, {
                y: '100%', autoAlpha: 0, filter: 'blur(40px)'
            },{
                y: '0%', autoAlpha: 1, filter: 'none', duration: 0.5
            },'enter+=0')
        tl.addLabel('icons', 'enter+=0.1')
        icons.forEach((icon, index) => {
            const overlayIcon = icon.querySelector('.icon-wipe-overlay');
            const overlayPaths = overlayIcon.querySelectorAll('path');
            const baseIcon = icon.querySelector('.text-current');
            const cardBorder = icon.querySelector('.card-border');
            const iconBTN = icon.querySelector('.icon-btn');
            let len = 0;
            int = index * 0.25;
            // tl.fromTo(icon, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, index * 0.5)
            overlayPaths.forEach((path) => {
                len = path.getTotalLength();
                path.style.strokeDasharray = len;
                path.style.strokeDashoffset = len;
            });
            tl.fromTo(icon, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, `icons+=${int}`)

            int = int * index
            tl.fromTo(overlayPaths, {
                autoAlpha: 0,
                strokeDashoffset: len
            }, {
                autoAlpha: 1,
                strokeDashoffset: 0,
                duration: 1,
                ease: 'power3.out',
            },  `icons+=${int}`)
            switch (index) {
                case 0:
                    tl.addLabel('iconsRP', 'icons+=3.5')
                    tl.to(icon, {
                        y: 70,
                        duration: 1.2,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')
                    break;
                case 1:
                    tl.to(icon, {
                        x: -80,
                        y: 30,
                        duration: 1.2,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')
                    break;
                case 2:
                    tl.to(icon, {
                        y: -104,
                        x: 80,
                        duration: 1.2,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')
                    break;
            }
        });

        if (gistEl) {
            
            tl.addLabel('gist', 'iconsRP+=2')
            tl.to(elm, {
                x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1.5
            }, 'gist+=0')
            tl.fromTo(gistEl, {
                y: 1000,
                autoAlpha: 0,
                filter: 'blur(40px)',
            }, {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: 1.5
            }, 'gist+=0')
        }
        tl.addLabel('iconRoll', 'iconsRP+=1.5')
        tl.to(iconTrack.value, {
            rotation: '360deg',
            duration: 4,
            ease: 'power1.inOut'
        }, 'iconRoll+=0.6')

        tl.to(icons, {
            rotation: '-360deg',
            duration: 4,
            ease: 'power1.inOut'
        }, 'iconRoll+=0.6')
        tl.to(icons, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: 'power1.inOut'
        }, 'iconRoll+=6')
        tl.addLabel('leave', 'iconRoll+=8')
        tl.to(icons, {
            y: -60,
            autoAlpha: 0,
            duration: .6,
            stagger: 0.2,
            ease: 'power1.inOut'
        }, 'leave+=1')
        tl.to(el, {
            x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1
        }, 'leave+=1')
    })
}

function setupSection5(left) {
    if (!left) return;
    nextTick(() => {
        const el = section5.value
        const text = el.querySelector('.text-container')
        const img1 = el.querySelector('.results-image-0')
        const img2 = el.querySelector('.results-image-1')
        const imgs = resultImages.value.querySelectorAll('img')
        textAnim(el, false, 'play none none reverse');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top top',
                end: '+=300%',
                id: 'sectionST',
                pinSpacing: false,
                scrub: true,
                pin: true,
            }
        })
        tl.to(text, {
            x: left,
            ease: 'power2.inOut',
            duration: 1,
        })

        tl.fromTo(img1, { y: 1000, autoAlpha: 0 }, { y: -50, autoAlpha: 1, duration: 0.6 }, '=+0.9')
        tl.fromTo(img1, { filter: 'blur(20px)' }, { filter: 'blur(0px)', duration: 0.3 }, '=+0.2')
        tl.to(img1, { y: -1000, autoAlpha: 0, filter: 'blur(20px)', duration: 1 }, '=+2')

        tl.addLabel('img2Enter', '+=0')


        tl.fromTo(img2,
            { y: 1000, autoAlpha: 0, filter: 'blur(20px)' },
            { y: -50, autoAlpha: 1, duration: 0.3, ease: 'power1.out' },
            'img2Enter'
        )
        tl.to(img2,
            { filter: 'blur(0px)', duration: 0.3, ease: 'none' },
            'img2Enter+=0.3'
        )
        tl.to(img2,
            { y: -1000, autoAlpha: 0, filter: 'blur(20px)', duration: 0.7 },
            'img2Enter+=2.3'
        )

        tl.to(el,
            { y: -200, autoAlpha: 0, filter: 'blur(40px)', duration: 1 },
            'img2Enter+=2.5'
        )
    })
}
</script>