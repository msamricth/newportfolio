<template>
    <div
        class="secondary-nav group/secondaryNav max-w-1440 px-0 md:px-12 flex justify-end items-center relative gap-8 md:gap-6">
        <Mode />
        <icons />
        <Hamburger :footer="footer"/>
    </div>
</template>


<script setup>
import Icons from './Icons.vue'
import Hamburger from './Hamburger.vue'
import Mode from './Mode.vue'


defineProps({
    footer: { type: Boolean },
  })
</script>
<style scoped>
.stroke-animate {
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
}

.group:hover .stroke-animate {
    stroke-dashoffset: 0;
}

.icon-wipe-overlay path {
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
    transition: stroke-dashoffset 0.9s ease-in-out;
}

.icon-btn:hover .icon-wipe-overlay path {
    stroke-dashoffset: 0;
}
</style>