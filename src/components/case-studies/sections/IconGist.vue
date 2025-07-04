<template>
    <section ref="sectionEl"
        class="relative flex flex-col md:flex-row justify-between pt-24 pb-14 md:py-0 gap-12 max-w-full lg:max-w-[1024px] xl:max-w-[1290px] mx-auto overflow-clip md:min-h-[280dvh] lg:min-h-[200dvh] lg:justify-center lg:items-start icon-gist w-full motionless:lg:max-w-full motionless:xl:max-w-[1290px] motionless:2xl:max-w-[1440px] motionless:md:min-h-screen  motionless:lg:min-h-screen motionless:items-start motionless:gap-8 motionless:2xl-gap-12 motionless:max-md:pt-0 motionless:hidden">
        <div ref="textEl"
            class="order-2 md:order-1 w-full md:max-w-4xl lg:max-w-2xl xl:max-w-xl md:ml-auto text-container pt-0 lg:pt-6 px-8 lg:pl-12 lg:pr-0 tl lg:min-h-[70vh] lg:flex lg:flex-col lg:justify-center motionless:lg:pl-0 motionless:order-2 motionless:w-full motionless:md:pt-0 motionless:min-h-auto motionless:md:pr-0">

            <h4 class="mb-3 text-2xl font-black h3 placeholder-line" data-splitting="words">
                {{ heading }}
            </h4>

            <p class="mb-6 text-xl opacity-0 md:text-sm lg:text-lg smd:text-xl md:mb-4 lg:mb-6 placeholder-line"
                data-splitting="words" v-if="paragraph">{{
                    paragraph }}</p>
            <ul class="pl-6 space-y-3 list-disc">
                <li v-for="(item, i) in items" :key="i"
                    class="text-lg md:text-sm smd:text-lg max-lg:mb-2 font-medium opacity-0 motionless:opacity-100 **:inline-flex **:flex-wrap"
                    data-item>
                    {{ item }}</li>
            </ul>

            <h5 v-if="tags && tags.length" class="my-6 text-xl placeholder-line" data-splitting="words">
                {{ tagIntro }}
            </h5>

            <ul v-if="tags && tags.length" class="flex flex-wrap items-start gap-1">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0 motionless:opacity-100">
                    {{ tag }}
                </li>
            </ul>
        </div>
        <Gist v-if="gistId" :gistId="gistId" :repoUrl="repoUrl" :FileName="FileName" :Caption="Caption" :code="code"
            class="order-3 md:order-2 md:absolute md:max-w-xl lg:max-w-2xl md:opacity-0 motionless:opacity-100 gist mx-2 md:mx-6 md:mt-6 lg:mt-0 tl left-0 max-md:mt-6 max-md:w-[calc(100%-16px)] motionless:md:relative motionless:md:max-w-md motionless:lg:max-w-lg motionless:mx-0 motionless:max-md:mx-auto" />

        <div
            class="order-1 md:order-3 items-center relative space-y-12 md:w-2/5 lg:w-lg px-8 lg:pr-12 lg:pl-0 tl lg:h-[70vh] lg:flex lg:flex-col lg:justify-center motionless:lg:pr-0 motionless:order-1 motionless:md:hidden motionless:xl:flex">
            <div ref="iconTrack"
                class="relative justify-between gap-6 mb-4 origin-center iconTrack md:space-y-12 md:size-90 lg:size-95 max-md:flex md:gap-3 tl md:mn-0 motionless:md:w-24 motionless:lg:w-24 motionless:md:**:left-0 motionless:max-md:items-end">
                <div class="top-0 w-24 h-24 icon-btn md:absolute group md:min-w-30 left-30 tl" v-if="icons[0]">
                    <component :is="icons[0]"
                        class="inset-0 z-10 w-full h-full duration-700 icon-wipe-overlay md:transition-all text-hot-coral tl" />
                </div>
                <div class="w-24 h-24 overflow-visible icon-btn md:absolute group md:min-w-30 top-34 lg:top-36 left-30 tl"
                    v-if="icons[1]">
                    <component :is="icons[1]"
                        class="inset-0 z-10 w-full h-full duration-700 icon-wipe-overlay md:transition-all text-electric-purple tl" />
                </div>
                <div class="bottom-0 w-24 h-24 icon-btn md:absolute group min-w-30 left-32 tl" v-if="icons[2]">
                    <component :is="icons[2]"
                        class="inset-0 z-10 w-full h-full duration-700 icon-wipe-overlay md:transition-all text-sunburn-orange tl" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, nextTick, watch, onMounted } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useMainStore } from '@/stores/main.js'
import textAnim from '@/utils/textAnims'
import { imgAnim } from '@/composables/imgAnims'
import Gist from '../../contexts/Gist.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { useCSStore } from '@/stores/caseStudy'

const csStore = useCSStore()

const sectionEl = ref(null)
const textEl = ref(null)
const iconTrack = ref(null)
let tl
let anim

const props = defineProps({
    heading: String,
    paragraph: String,
    items: Array,
    tagIntro: String,
    tags: Array,
    icons: Array,
    gistId: String,
    repoUrl: String,
    FileName: String,
    Caption: String
})
const code = `<?php
namespace airtableWP\Inc;

class AirtableService
{
    public static function airtableConfig()
    {
        $options = get_option('airtable_WP_options');
        $apiKey = isset($options['api_key']) ? $options['api_key'] : '';
        $baseId = isset($options['base_id']) ? $options['base_id'] : '';
        $tableName = isset($options['table_name']) ? $options['table_name'] : '';
        $email_field = isset($options['email_field_name']) ? $options['email_field_name'] : 'Primary Email';
        return [
            'api_key' => $apiKey,
            'base_ID' => $baseId,
            'table_name' => $tableName,
            'email_field_name' => $email_field
        ];
    }

    public static function email_exists_in_airtable($email)
    {
        // Airtable API details
        $apiDetails = self::airtableConfig();
        $api_key = $apiDetails['api_key'];
        $base_id = $apiDetails['base_ID'];
        $table_name = $apiDetails['table_name'];
        $email_field = $apiDetails['email_field_name'];
        if (is_array($email)) {
            $email = implode(', ', $email); 
        }
    
        $api_url = "https://api.airtable.com/v0/{$base_id}/{$table_name}?filterByFormula=" . urlencode("{" . $email_field . "}='{$email}'");
        $response = wp_remote_get(
            $api_url,
            array(
                'headers' => array(
                    'Authorization' => 'Bearer ' . $api_key,
                ),
                'timeout' => 15, // Increase timeout to 15 seconds
            )
        );
        if (is_wp_error($response)) {
            error_log('Error checking email in Airtable: ' . $response->get_error_message());
            return false;
        }
    
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);
        if (!empty($data['records'])) {
            error_log('email_exists_in_airtable');
        }
        return !empty($data['records']);
    }
    
    public static function add_record_to_airtable($data)
    {
        $apiDetails = self::airtableConfig();
        $api_key = $apiDetails['api_key'];
        $base_id = $apiDetails['base_ID'];
        $table_name = $apiDetails['table_name'];
        $api_url = "https://api.airtable.com/v0/{$base_id}/{$table_name}";

        $response = wp_remote_post(
            $api_url,
            array(
                'headers' => array(
                    'Authorization' => 'Bearer ' . $api_key,
                    'Content-Type' => 'application/json',
                ),
                'body' => wp_json_encode($data),
            )
        );

        if (is_wp_error($response)) {
            // Log or handle the error
            error_log('Error adding email to Airtable: ' . $response->get_error_message());
        } else {
            // Check if the request was successful
            $response_code = wp_remote_retrieve_response_code($response);
            if ($response_code !== 200) {
                error_log('Unexpected response adding email to Airtable: ' . $response_code);
            }
        }
    }

    public static function update_record_in_airtable($data, $email, $debug_info)
    {
        $apiDetails = self::airtableConfig();
        $api_key = $apiDetails['api_key'];
        $base_id = $apiDetails['base_ID'];
        $table_name = $apiDetails['table_name'];
        $emailField = $apiDetails['email_field_name'];
        $logData = $data;
        if (is_array($logData)) {
            $logData = json_encode($logData, JSON_PRETTY_PRINT); // Convert array (including sub-arrays) to JSON string
        }

        $api_url = "https://api.airtable.com/v0/{$base_id}/{$table_name}?filterByFormula=" . urlencode("{" . $emailField . "}='{$email}'");
        $response = wp_remote_get(
            $api_url,
            array(
                'headers' => array(
                    'Authorization' => 'Bearer ' . $api_key,
                ),
            )
        );

        if (is_wp_error($response)) {
            error_log('Error searching email in Airtable: ' . $response->get_error_message());
            return;
        }

        $body = wp_remote_retrieve_body($response);
        $records = json_decode($body, true);
        if (!empty($records['records'])) {
            $record_id = $records['records'][0]['id'];
            $update_url = "https://api.airtable.com/v0/{$base_id}/{$table_name}/{$record_id}";

            $update_response = wp_remote_post(
                $update_url,
                array(
                    'method' => 'PATCH',
                    'headers' => array(
                        'Authorization' => 'Bearer ' . $api_key,
                        'Content-Type' => 'application/json',
                    ),
                    'body' => wp_json_encode(array('fields' => $data)),
                )
            );

            if (is_wp_error($update_response)) {
                error_log('Error updating record in Airtable: ' . $update_response->get_error_message());
            } else {
                $response_code = wp_remote_retrieve_response_code($update_response);
                if ($response_code !== 200) {
                    error_log('Unexpected response updating record in Airtable: ' . $response_code);
                } else {
                    self::SuccessResponse($record_id, $data, $debug_info);
                }
            }
        } else {
            error_log('Record not found in airtable');
        }
    }
    public static function SuccessResponse($record_id,$form_data, $debug_info)
    {
        $debug_info['record ID'] = $record_id;
        wp_send_json_success(
            array(
                'message' => 'Form data received successfully.',
                'data' => $form_data,
                'debug_info' => $debug_info,
                'record_id' => $record_id
            )
        );
    }
}`
const store = useMainStore()
const { width } = useWindowSize()
watch(() => store.loaded, async (ready) => {
    if (!ready) return
    await nextTick()
    if (store.reduceMotion) await cleanup()
    else await run()
}, { immediate: true })
watch(
    () => store.reduceMotion,
    async (reduceMotion) => {
        if (reduceMotion) await cleanup()
        else await run()
    },
    { immediate: true }
)
onMounted(async () => {
    await nextTick()

    csStore.sectionReady = 6
})
async function cleanup() {
    const el = sectionEl.value
    const gistEl = el?.querySelector('.gist')
    const icons = iconTrack.value?.querySelectorAll('.icon-btn') || []

    tl?.kill()
    tl = null
    anim?.kill()
    anim = null
    icons.forEach(icon => {
        icon?.removeAttribute('style')
        gsap.set(icon, { clearProps: 'all' })
        const svg = icon.querySelector('.icon-wipe-overlay')
        if (svg) {
            svg.removeAttribute('style')
            gsap.set(svg, { clearProps: 'all' })
            const paths = svg.querySelectorAll('path')
            if (paths.length) {
                paths.forEach((path) => {
                    path.removeAttribute('style')
                    gsap.set(path, { clearProps: 'all' })
                })
            }
        }
    })
}

async function run() {
    await nextTick()
    if (!sectionEl.value || store.reduceMotion) return
    const el = sectionEl.value
    const elm = textEl.value
    const gistEl = el.querySelector('.gist')
    const icons = iconTrack.value.querySelectorAll('.icon-btn')

    const isMobile = width.value < 768

    if (isMobile) {
        anim = new textAnim(el, { toggleActions: 'play none none reverse' })
        imgAnim(el, false, 'play none none reverse')
        anim?.init()
        return
    }

    tl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: 'top 15%',
            end: '+=200%',
            scrub: true,
            pinSpacing: false,
            pin: true,
        }
    })

    anim = new textAnim(el, { toggleActions: 'play none none reverse', linkedTL: tl })

    tl.addLabel('enter')
    tl.fromTo(elm, {
        y: '100%', autoAlpha: 0, filter: 'blur(40px)'
    }, {
        y: '0%', autoAlpha: 1, filter: 'none', duration: 0.5
    }, 'enter+=0')

    tl.addLabel('icons', 'enter+=0.1')
    anim?.init()

    icons.forEach((icon, index) => {
        const overlayPaths = icon.querySelectorAll('.icon-wipe-overlay path')
        const len = [...overlayPaths].map(path => {
            const l = path.getTotalLength()
            path.style.strokeDasharray = l
            path.style.strokeDashoffset = l
            return l
        })

        tl.fromTo(icon, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, `icons+=${index * 0.25}`)
        tl.fromTo(overlayPaths, {
            autoAlpha: 0,
            strokeDashoffset: (i) => len[i]
        }, {
            autoAlpha: 1,
            strokeDashoffset: 0,
            duration: 1,
            ease: 'power3.out'
        }, `icons+=${index * 0.25}`)

        switch (index) {
            case 0:
                tl.addLabel('iconsRP', 'icons+=3.5')
                tl.to(icon, { y: 70, duration: 1.2, ease: 'power3.inOut' }, 'iconsRP')
                break
            case 1:
                tl.to(icon, { x: -80, y: 30, duration: 1.2, ease: 'power3.inOut' }, 'iconsRP')
                break
            case 2:
                tl.to(icon, { x: 80, y: -104, duration: 1.2, ease: 'power3.inOut' }, 'iconsRP')
                break
        }
    })

    tl.addLabel('iconRoll', 'iconsRP+=1')
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

    if (gistEl) {
        tl.addLabel('gist', 'iconRoll+=1.5')
        tl.to(elm, {
            x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1.5
        }, 'gist+=1')
        tl.fromTo(gistEl, {
            y: 1000, autoAlpha: 0, filter: 'blur(40px)'
        }, {
            y: 0, autoAlpha: 1, filter: 'blur(0px)', duration: 1.5
        }, 'gist+=1')
    }

    tl.to(icons, {
        x: 0, y: 0, duration: 1.2, ease: 'power1.inOut'
    }, 'iconRoll+=6')

    tl.addLabel('leave', 'iconRoll+=8')
    tl.to(icons, {
        y: -60, autoAlpha: 0, duration: .6, stagger: 0.2, ease: 'power1.inOut'
    }, 'leave+=1')

    tl.to(el, {
        x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1
    }, 'leave+=1')
}
</script>
<style>
.motionless .icon-gist .icon-wipe-overlay path {
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
}
</style>