<template>
    <div ref="section"
        class="overview flex-wrap max-w-full lg:max-w-[1024px]  px-8 lg:px-12  mx-auto intro flex md:flex-row relative md:pb-20 justify-center py-24 relative">
        <div class="min-h-dvh">
            <div class="w-full sticky top-24 lg:top-60" ref="challenges">
                <h4 class="text-2xl font-black w-full placeholder-line mb-3" data-splitting="words">Challenges</h4>
                <p class="text-xl mb-6 placeholder-line" data-splitting="words">
                    GLT operates at the intersection of racial justice, environmental equity, and leadership development.
                    Their expanding impact demanded:
                </p>
                <ul class="challenges-list space-y-3 list-disc pl-6">
                    <li class="text-lg font-medium opacity-0" data-item>A modern, accessible, and visually compelling brand
                        identity</li>
                    <li class="text-lg font-medium opacity-0" data-item>A website that could serve both public audiences and
                        internal stakeholders</li>
                    <li class="text-lg font-medium opacity-0" data-item>Better internal workflows, especially for managing a
                        CRM and donor pipeline</li>
                    <li class="text-lg font-medium opacity-0" data-item>Cohesive and mission-aligned event materials and
                        collateral</li>
                </ul>
            </div>
        </div>
        <div class="min-h-dvh">
            <div class="w-full sticky top-24 lg:top-60" ref="challenges">
                <h4 class="text-2xl font-black w-full placeholder-line mb-3" data-splitting="words">Challenges</h4>
                <p class="text-xl mb-6 placeholder-line" data-splitting="words">
                    GLT operates at the intersection of racial justice, environmental equity, and leadership development.
                    Their expanding impact demanded:
                </p>
                <ul class="challenges-list space-y-3 list-disc pl-6">
                    <li class="text-lg font-medium opacity-0" data-item>A modern, accessible, and visually compelling brand
                        identity</li>
                    <li class="text-lg font-medium opacity-0" data-item>A website that could serve both public audiences and
                        internal stakeholders</li>
                    <li class="text-lg font-medium opacity-0" data-item>Better internal workflows, especially for managing a
                        CRM and donor pipeline</li>
                    <li class="text-lg font-medium opacity-0" data-item>Cohesive and mission-aligned event materials and
                        collateral</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PlaceholderJS from './../../utils/placeholder.js'

gsap.registerPlugin(ScrollTrigger)
const challenges = ref(null)
const section = ref(null)
const sectionVis = ref(false)

onMounted(async() => {
    await nextTick()
    const sectionEl = section.value
    const challengesEl = challenges.value
    const heading = sectionEl.querySelector('h4.placeholder-line')
    const para = sectionEl.querySelector('p.placeholder-line')
    const listItems = sectionEl.querySelectorAll('[data-item]')
    const tl = gsap.timeline({paused: true})
    new PlaceholderJS(heading, { scrub: true })
    new PlaceholderJS(para, { scrub: true, speed: 2 })

    gsap.fromTo(challengesEl,{
        x:0,
        blur:0,
        autoAlpha:1
    },{
        x:'-100%',
        blur:40,
        autoAlpha:0,
        ease: 'power1.inOut',
        duration:1,
        scrollTrigger: {
                    trigger: challengesEl,
                    start: 'top top',
                    markers: true,
                    toggleActions: 'play none none reverse'
                }

    })
    listItems.forEach((item) => {
        gsap.fromTo(item,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 0.3,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 65%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top 65%',
        end: 'bottom 40%',
        // onEnter: () => tl.play(),
        onLeaveBack: () => {
            //  tl.reverse()
            // headingAnim.getTimeline().progress(1).reverse()
            // paraAnim.getTimeline().progress(1).reverse()
        }
    })

    nextTick(() => {
        ScrollTrigger.create({
            trigger: sectionEl,
            start: 'top top',
            onLeave: () => {
                document.body.classList.remove('dark')
            },
            onEnterBack: () => {
                document.body.classList.add('dark')
            }
        })
    })
})
</script>
