import { ref } from 'vue';
import { defineStore } from 'pinia';

const useModalStore = defineStore("modal", () => {
  const modalItem = ref(null);
  const pendingModalSlug = ref(null);
  function queueModalBySlug(slug) {
    pendingModalSlug.value = slug;
  }
  return { modalItem, pendingModalSlug, queueModalBySlug };
});

export { useModalStore as u };
//# sourceMappingURL=modal-Cy99Pjki.mjs.map
