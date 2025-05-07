import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  const modalItem = ref(null);
  const pendingModalSlug = ref(null)
  function queueModalBySlug(slug) {
    pendingModalSlug.value = slug
  }
  return { modalItem, pendingModalSlug, queueModalBySlug };
});
