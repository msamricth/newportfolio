<script setup>
import { onMounted, nextTick  } from 'vue'
import { useMainStore } from '@/stores/main'

import { useNuxtApp } from '#app'
import { onBeforeRouteLeave } from 'vue-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const { $gsap: gsap } = useNuxtApp()
const store = useMainStore()

onMounted(async () => {
  await nextTick()
  store.initReduceMotion()
  
  store.setupStateManagement();
  store.loaded = true
})

</script>


<template>
  <NuxtPage />
</template>