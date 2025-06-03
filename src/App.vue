<script setup>
import { onMounted, nextTick } from 'vue'
import { useMainStore } from '@/stores/main'

const store = useMainStore()

onMounted(async () => {
  await nextTick()
  store.initReduceMotion()
  store.loaded = true
})
</script>


<template>
  <NuxtPage/>
</template>