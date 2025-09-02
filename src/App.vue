<script setup>
import { onMounted, nextTick, onUnmounted  } from 'vue'
import { useMainStore } from '@/stores/main'

import { useNuxtApp } from '#app'
import { onBeforeRouteLeave } from 'vue-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimationFrame } from '@/utils/AnimationFrame'
const { $gsap: gsap } = useNuxtApp()
const store = useMainStore()

onMounted(async () => {
  store.ready=false
  await nextTick()
  store.setupStateManagement();
  store.loaded = true
  AnimationFrame(()=>{ store.ready = true}, 450)

})

onUnmounted(async () => {
  store.ready=false
  await nextTick()
  store.ready=false
  store.loaded = false

})
</script>


<template>
  <NuxtPage />
</template>