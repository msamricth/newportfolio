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
</template>