<script setup>
import { onMounted, nextTick } from 'vue'
import { useMainStore } from '@/stores/main'

const store = useMainStore()

onMounted(async () => {
  await nextTick()
  store.initReduceMotion()
  store.loaded = true
  setTimeout(() => store.ready = true, 400)
})
</script>


<template>
  <NuxtPage />
</template>