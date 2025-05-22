<template>
    <div class="bg-electric-purple inverted:bg-primary min-h-40 relative py-6 md:py-12 group/footer">
        <div class="utilties max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto">
            <SecondaryNav :footer="true" class="text-primary"/>
        </div>
    </div>
</template>

<script setup>
import SecondaryNav from './navigation/SecondaryNav.vue';
</script>