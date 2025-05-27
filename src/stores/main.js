import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMainStore = defineStore('main', {
    state: () => ({
        sticky: true,
        darkMode: 'dark',
        sliderArrowSticky: false,
        sliderTimeline: 'before',
    navOpen: false,
    }),

  getters: {
    isDark: (state) => state.darkMode === 'dark',
    arrowPos: (state) => state.sliderTimeline === 'before',
    isSticky: (state) => state.sticky === true,

    toggleIcon: (state) => {
        return(state.darkMode === 'dark') 
        ? '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z" fill="current"/></svg>'
        :'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><circle cx="12" cy="12" fill="current" r="5"/><path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" fill="current"/><path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" fill="current"/><path d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z" fill="current"/><path d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z" fill="current"/><path d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z" fill="current"/><path d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z" fill="current"/><path d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z" fill="current"/><path d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z" fill="current"/></svg>'
    }
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
        },
        openNav()  { this.navOpen = true },
        closeNav() { this.navOpen = false },
    },
});
