import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { work as workData } from '../data/work.js';

export const useWorkStore = defineStore('work', () => {
  const activeFilters = ref([]);
  const modalItem = ref(null);
  const work = ref(workData);
  const isFiltered = ref(false);
  const gridResults = ref(true);

  const allTech = Array.from(
    workData.flatMap(w =>
      (w.tech || []).map(tech => ({
        tech,
        textColor: w.textColor || 'text-primary'
      }))
    ).reduce((map, item) => {
      if (!map.has(item.tech)) {
        map.set(item.tech, item);
      }
      return map;
    }, new Map()).values()
  );

  const techStack = ref([...allTech]);

  const filteredWork = computed(() => {
    gridResults.value = true;
    if (activeFilters.value.length === 0) {
      isFiltered.value = false;
      return work.value;
    }
    const results = work.value.filter(item => {
      const allTags = [
        ...(item.caseStudy ? ['case-study'] : []),
        ...(item.tech || [])
      ];
      return activeFilters.value.every(tag => allTags.includes(tag));
    });

    gridResults.value = results.length > 0;
    isFiltered.value = true;
    return results;
  });

  const toggleFilter = (tag) => {
    window.scrollTo(0, 0);
    if (activeFilters.value.includes(tag)) {
      activeFilters.value = activeFilters.value.filter(t => t !== tag);
    } else {
      activeFilters.value.push(tag);
    }
  };

 
  const resetFilter = () => {
    activeFilters.value = [];
    isFiltered.value = false;
    gridResults.value = true;
    window.scrollTo(0, 0);
  };

  return {
    activeFilters,
    modalItem,
    allTech,
    filteredWork,
    toggleFilter,
    resetFilter,
    isFiltered,
    gridResults,
  };
});
