import { ref } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import { defineStore } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pinia/dist/pinia.prod.cjs';

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
