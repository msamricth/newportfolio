<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '@/stores/main'

const store = useMainStore()

onMounted(() => {
  store.initReduceMotion()
  store.loaded = true;
})
</script>

<template>
  <NuxtPage/>
  <script src="/js/hls.js" defer></script>
</template>