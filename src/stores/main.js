import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMainStore = defineStore('main', {
    state: () => ({
        sticky: true,
        darkMode: 'dark',
        sliderArrowSticky: false,
        sliderTimeline: 'before'
    }),

  getters: {
    isDark: (state) => state.darkMode === 'dark',
    arrowPos: (state) => state.sliderTimeline === 'before',
    isSticky: (state) => state.sticky === true,
  },
    actions: {
        setSliderArrowSticky(value) {
            this.sliderArrowSticky = value
        },

        setSticky(value) {
            this.sticky = value
        },
        setsliderTimeline(value) {
            this.sliderTimeline = value
        },
        toggleSliderArrowSticky() {
            this.sliderArrowSticky = !this.sliderArrowSticky
        },
        setupDarkMode() {
            const stored = localStorage.getItem('theme');
            this.darkMode = stored === 'dark' ? 'dark' : 'light';
            document.body.classList.toggle('inverted', this.darkMode === 'dark');
        },
        toggleTheme(value) {
            this.darkMode = value ? 'dark' : 'light';
            localStorage.setItem('theme', this.darkMode);
            document.body.classList.toggle('inverted', value);
        }
    },
});
