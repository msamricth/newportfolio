<template>
    <section ref="elm"
        class="mt-10 md:mt-0 flex flex-col md:flex-row items-center md:justify-between py-14 gap-12 relative  tl md:min-h-[250vh] lg:min-h-[200vh] md:items-start w-full  motionless:md:min-h-screen  motionless:lg:min-h-screen motionless:lg:mb-60">
        <div ref="imgEl"
            class="w-full image order-2 md:order-1 md:w-1/3 h-[80vh] bg-cover bg-center motionless:hidden md:motionless:block md:opacity-0 motionless:opacity-100 md:rounded-r-[3rem] image tl md:px-8 lg:px-12 lg:mt-8 xl:w-1/2 motionless:w-1/6 xl:motionless:w-1/4"
            :style="`background-image:url(${image})`"></div>
        <div
            class="w-full order-1 md:order-2 lg:max-w-2xl md:mr-auto text-container md:pt-6 px-8 lg:px-12 tl lg:h-[80vh] lg:flex lg:flex-col lg:justify-center lg:mt-8">
            <h4 class="mb-3 text-2xl font-black h3 placeholder-line" data-splitting="words">{{ heading }}
            </h4>
            <p class="mb-6 text-xl opacity-0 md:text-sm lg:text-lg smd:text-xl placeholder-line" data-splitting="words"
                v-if="paragraph">{{
                    paragraph }}</p>
            <ul class="pl-6 space-y-3 list-disc">
                <li v-for="(item, i) in items" :key="i"
                    class="text-lg md:text-sm max-lg:mb-2 smd:text-xl font-medium opacity-0 motionless:opacity-100 **:inline-flex **:flex-wrap"
                    data-item>
                    {{ item }}</li>
            </ul>


            <h5 v-if="tags && tags.length" class="my-6 text-xl md:text-md smd:text-xl placeholder-line"
                data-splitting="words">
                {{ tagIntro }}
            </h5>

            <ul v-if="tags && tags.length" class="flex flex-wrap items-start gap-1">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0 motionless:opacity-100">
                    {{ tag }}
                </li>
            </ul>
        </div>
        <div class="relative flex flex-col justify-center order-3 w-full px-2 md:order-2 md:px-0 md:pt-6 lg:pt-0 md:absolute md:opacity-0 motionless:opacity-100 gist tl md:right-8 xl:right-12 md:w-2/3 xl:max-w-xl lg:mt-14 motionless:md:relative motionless:left-0 motionless:md:pr-8 motionless:lg:pr-12 motionless:mx-auto motionless:md:mr-auto"
            v-if="gistId">
            <Gist :gistId="gistId" :repoUrl="repoUrl" :FileName="FileName" :Caption="Caption" :code="code"
                class="w-full lg:mx-auto" />
        </div>
    </section>




</template>


<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useMainStore } from '@/stores/main'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PlaceholderJS from '@/utils/placeholder.js'
import { imgAnim } from '@/composables/imgAnims'
import textAnim from '@/utils/textAnims'
import Gist from '@/components/contexts/Gist.vue'

import { useCSStore } from '@/stores/caseStudy'

const csStore = useCSStore()
const code = `import { enableSidebarSelectOnBlocks } from './blockList';
import { setSidebarSelectAttribute } from './setAttributes';

const { __ } = wp.i18n;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, InspectorAdvancedControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { ToggleControl, PanelBody, TextControl, RadioControl, CheckboxControl, SelectControl, Button } = wp.components;

export const withSidebarSelect = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (!enableSidebarSelectOnBlocks.includes(props.name)) {
            return <BlockEdit {...props} />;
        }
        const { attributes, setAttributes, isSelected } = props;
        const { matchNavBackground, blockAnimation, animationDelay, fullHeight, fullWidth, hideMobile, hideTablet, hideDesktop, topPadding, bottomPadding, topMargin, bottomMargin, backgroundImage, seperatorTop, seperatorBottom } = attributes;

        function onChangeBlockAnimation(newValue) {
            setAttributes({ blockAnimation: newValue });
        }
        function onChangeAnimationDelay(newValue) {
            setAttributes({ animationDelay: newValue });
        }
        function onChangeTopPadding(newValue) {
            setAttributes({ topPadding: newValue });
        }
        function onChangeBottomPadding(newValue) {
            setAttributes({ bottomPadding: newValue });
        }
        function onChangeTopMargin(newValue) {
            setAttributes({ topMargin: newValue });
        }
        function onChangeBottomMargin(newValue) {
            setAttributes({ bottomMargin: newValue });
        }
        function onChangeBackgroundImage(newImage) {
            setAttributes({ backgroundImage: newImage.sizes.full.url });
        }
        return (
            <Fragment>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody
                        title={__('Theme Main Base')}
                    >
                        <PanelBody title={__('Block Settings')}>
                            <ToggleControl
                                label={wp.i18n.__('Match Nav Background on scroll', 'emm-bootstrap-base')}
                                checked={!!attributes.matchNavBackground}
                                onChange={(newval) => setAttributes({ matchNavBackground: !attributes.matchNavBackground })}
                            />

                            <ToggleControl
                                label={wp.i18n.__('Make Full Width', 'emm-bootstrap-base')}
                                help="Make this block go edge to edge (good for Background colors)"
                                checked={!!attributes.fullWidth}
                                onChange={(newval) => setAttributes({ fullWidth: !attributes.fullWidth })}
                            />
                            <ToggleControl
                                label={wp.i18n.__('Make Full Height', 'emm-bootstrap-base')}
                                help="Make this block go edge to edge (good for Background colors)"
                                checked={!!attributes.fullHeight}
                                onChange={(newval) => setAttributes({ fullHeight: !attributes.fullHeight })}
                            />
<SelectControl
                                label="Animate this block"
                                value={blockAnimation}
                                options={[
                                    { label: 'No Animation', value: '' },
                                    { label: 'Fade In', value: 'fade-in' },
                                    { label: 'Slide Up', value: 'slide-up' },
                                    { label: 'Bounce In', value: 'bounce-in' },
                                    { label: 'Bounce In Forward', value: 'bounce-in-fwd' },
                                    { label: 'Subtle Slide In', value: 'subtle-slide-in' },
                                    { label: 'TEXT: Focus In', value: 'text-focus-in' },
                                    { label: 'TEXT: Tracking In', value: 'tracking-in-expand' },
                                    { label: 'Custom', value: 'custom' },
                                ]}
                                onChange={onChangeBlockAnimation}
                            />

                            {blockAnimation !== '' && (
                                <TextControl
                                    label="Animation Delay (ex: 600ms, 0.6s)"
                                    value={animationDelay}
                                    onChange={onChangeAnimationDelay}
                                />
                            )}
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onChangeBackgroundImage}
                                    allowedTypes={['image']}
                                    value={backgroundImage}
                                    render={({ open }) => (
                                        <Button className="components-button is-primary" onClick={open}>Add Background image to block</Button>
                                    )}
                                />
                            </MediaUploadCheck>
                        </PanelBody>

                        <PanelBody title={__('Spacing')}>
                            <ToggleControl
                                label={wp.i18n.__('Seperator Top', 'emm-bootstrap-base')}
                                help="Add a seperator line to the top of this block"
                                checked={!!attributes.seperatorTop}
                                onChange={(newval) => setAttributes({ seperatorTop: !attributes.seperatorTop })}
                            />

                            <ToggleControl
                                label={wp.i18n.__('Seperator Bottom', 'emm-bootstrap-base')}
                                help="Add a seperator line to the Bottom of this block"
                                checked={!!attributes.seperatorBottom}
                                onChange={(newval) => setAttributes({ seperatorBottom: !attributes.seperatorBottom })}
                            />
                            <SelectControl
                                label="Padding Top"
                                value={topPadding}
                                options={[
                                    { label: 'None', value: '' },
                                    { label: 'Smallest', value: 'pt-1' },
                                    { label: 'Small', value: 'pt-2' },
                                    { label: 'Medium', value: 'pt-3' },
                                    { label: 'Large', value: 'pt-4' },
                                    { label: 'Largest', value: 'pt-5' },
                                    { label: 'Size of gutter', value: 'pt-gutter' },
                                ]}
                                onChange={onChangeTopPadding}
                            />
                            <SelectControl
                                label="Padding Bottom"
                                value={bottomPadding}
                                options={[
                                    { label: 'None', value: '' },
                                    { label: 'Smallest', value: 'pb-1' },
                                    { label: 'Small', value: 'pb-2' },
                                    { label: 'Medium', value: 'pb-3' },
                                    { label: 'Large', value: 'pb-4' },
                                    { label: 'Largest', value: 'pb-5' },
                                    { label: 'Size of gutter', value: 'pb-gutter' },
                                ]}
                                onChange={onChangeBottomPadding}
                            />
                            <SelectControl
                                label="Margin Top"
                                value={topMargin}
                                options={[
                                    { label: 'None', value: '' },
                                    { label: 'Smallest', value: 'mt-1' },
                                    { label: 'Small', value: 'mt-2' },
                                    { label: 'Medium', value: 'mt-3' },
                                    { label: 'Large', value: 'mt-4' },
                                    { label: 'Largest', value: 'mt-5' },
                                    { label: 'Size of gutter', value: 'mt-gutter' },
                                ]}
                                onChange={onChangeTopMargin}
                            />
                            <SelectControl
                                label="Margin Bottom"
                                value={bottomMargin}
                                options={[
                                    { label: 'None', value: '' },
                                    { label: 'Smallest', value: 'mb-1' },
                                    { label: 'Small', value: 'mb-2' },
                                    { label: 'Medium', value: 'mb-3' },
                                    { label: 'Large', value: 'mb-4' },
                                    { label: 'Largest', value: 'mb-5' },
                                    { label: 'Size of gutter', value: 'mb-gutter' },
                                ]}
                                onChange={onChangeBottomMargin}
                            />
                        </PanelBody>
                        <PanelBody title={__('Visibility')}>
                            <ToggleControl
                                label={wp.i18n.__('Hide on Mobile', 'emm-bootstrap-base')}
                                checked={!!attributes.hideMobile}
   …`
const props = defineProps({
    heading: String,
    paragraph: String,
    items: Array,
    tagIntro: String,
    tags: Array,
    image: String,
    gistId: String,
    repoUrl: String,
    FileName: String,
    Caption: String,
})

const elm = ref(null)
const imgEl = ref(null)
const store = useMainStore()
const { width } = useWindowSize()

let anim = null
let tl = null



function cleanup() {
    tl?.kill()
    tl = null
    anim?.getTimeline()?.kill()
    anim = null

    if (elm.value) gsap.set(elm.value, { clearProps: 'all' })

    if (imgEl.value) gsap.set(imgEl.value, { clearProps: 'scale', autoAlpha: 1, filter: 'none' })
    const text = elm.value?.querySelector('.text-container')
    if (text) {
        const h = text.querySelector('h4.placeholder-line')
        const h5 = text.querySelector('h5.placeholder-line')
        const p = text.querySelector('p.placeholder-line')
        const items = text.querySelectorAll('.list-disc li')
        const tags = text.querySelectorAll('.tags')
        const gist = elm.value.querySelector('.gist')

        gsap.set(text, { clearProps: 'all' })
            ;[h, h5, p].forEach(el => el?.removeAttribute('style'))
        items.forEach(el => el.removeAttribute('style'))
        tags.forEach(el => el.removeAttribute('style'))
        gist?.removeAttribute('style')
    }
}

async function initSection() {
    await nextTick()
    if (!elm.value || store.reduceMotion) return
    const isMobile = width.value < 778
    const el = elm.value
    const text = el.querySelector('.text-container')
    const h = el.querySelector('h4.placeholder-line')
    const h5 = el.querySelector('h5.placeholder-line')
    const p = el.querySelector('p.placeholder-line')
    const items = el.querySelectorAll('.list-disc li')
    const tagEls = el.querySelectorAll('.tags')
    const gist = el.querySelector('.gist')
    const img = imgEl.value

    if (isMobile) {
        imgAnim(el, false, 'play none none reverse')
        anim = new textAnim(text, { toggleActions: 'play none none reverse' })
        anim?.init()
        return
    }

    const phH = new PlaceholderJS(h, { manual: true })
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: '+=200%',
            scrub: true,
            pinSpacing: false,
            pin: true,
        },
    })

    tl.addLabel('entrance')
    tl.fromTo(img, { x: '-100%', autoAlpha: 0, filter: 'blur(40px)' }, { x: '0%', autoAlpha: 1, filter: 'blur(0px)', duration: 0.75 })
    tl.fromTo(text, { x: '100%', autoAlpha: 0 }, { x: '0%', autoAlpha: 1, duration: 1 }, 'entrance-=0.05')
    tl.fromTo(h, { opacity: 0, y: 40 }, {
        opacity: 1,
        y: 0,
        ease: 'power3.out',
        duration: 0.3,
        onStart: () => phH.play()
    }, 'entrance+=0.8')

    if (p) {
        const phP = new PlaceholderJS(p, { manual: true, speed: 0.15 })
        tl.fromTo(p, { opacity: 0, y: 40 }, {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 0.3,
            onStart: () => phP.play()
        }, 'entrance+=1')
    }

    if (h5) {
        const phH5 = new PlaceholderJS(h5, { manual: true, speed: 2 })
        tl.fromTo(h5, { opacity: 0, y: 40 }, {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 0.3,
            onComplete: () => {
                if (!tl.reversed()) phH5.play()
            }
        }, 'entrance+=1.1')
    }

    items.forEach((item, i) => {
        tl.fromTo(item, { opacity: 0, y: 40 }, {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 0.3,
        }, `entrance+=${1 + i * 0.15}`)
    })

    tagEls.forEach((tag, i) => {
        tl.fromTo(tag, { opacity: 0, y: 20 }, {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out'
        }, `entrance+=${items.length * 0.15 + 1.2 + i * 0.05}`)
    })

    tl.addLabel('gist', 'entrance+=2')
    tl.to(text, { x: '200%', filter: 'blur(40px)', autoAlpha: 1, duration: 0.5 }, 'gist+=0.5')
    tl.fromTo(gist, { x: '-200%', filter: 'blur(40px)', autoAlpha: 0 }, {
        x: '0',
        filter: 'blur(0px)',
        autoAlpha: 1,
        duration: 0.5
    }, 'gist+=0.5')

    tl.addLabel('leave', 'gist+=2')
    tl.to(gist, { x: '200%', filter: 'blur(40px)', autoAlpha: 1, duration: 0.5 }, 'leave+=0.5')
    tl.to(img, { y: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=0.5')
}

onMounted(async () => {
    await nextTick()
    csStore.sectionReady = 5
   // initSection()
})

watch(() => store.loaded, async (ready) => {
    if (!ready || store.reduceMotion) return
    await nextTick()
    await initSection()
})
watch(() => store.reduceMotion, async (rm) => {
    await nextTick()
    cleanup()
    if (!rm) await initSection()
},
    { immediate: true })
</script>