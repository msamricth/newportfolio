<template>
    <button
        class="absolute top-1 z-20 right-1 text-3xl cursor-pointer transition duration-700 text-current hover:text-accent rounded-[3rem] px-6 py-3 hover:scale-[1.08] group size-18 flex flex-col justify-center items-center hover:rotate-270"
        @click="handleClick" aria-label="Close modal">
        <span
            class="w-10 h-[4px] bg-current block rotate-45 rounded-[3rem] absolute left-4 group-hover:-rotate-135 transition-all duration-700"></span>
        <span
            class="w-10 h-[4px] bg-current block -rotate-45 rounded-[3rem] absolute left-4 group-hover:rotate-135 transition-all duration-700"></span>
    </button>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    onClick: Function,
})

const handleClick = () => {
      props.onClick?.()
}
</script>