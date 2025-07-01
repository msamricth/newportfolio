import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCSStore = defineStore('caseStudy', {
    state: () => ({
        sectionReady: 0,
    }),
})
