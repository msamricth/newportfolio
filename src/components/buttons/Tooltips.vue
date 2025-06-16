<template>
    <div class="opacity-0 group-hover:opacity-100 tooltip shadow-lg p-1 bg-slate-600 text-xs rounded-sm text-white absolute text-nowrap -translate-x-[50%] left-[50%] transition-all translate-y-2 duration-700 group-hover:translate-y-0">
        {{ message }}
    </div>
</template>
<script setup>
const props = defineProps({
    message: String,
})

</script>