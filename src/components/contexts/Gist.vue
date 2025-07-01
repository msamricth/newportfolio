<template>
    <div class="gist-embed lg:max-w-2xl rounded-[1.5rem] overflow-clip bg-primary">
        <div class=" min-h-[calc(45dvh+85px)]" v-if="loading">Loading snippet…</div>
        <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
        <div v-else>
            <div class="flex items-center justify-between px-6 py-2 bg-gray-100/10 text-background">
                <span class="text-xs" v-if="Caption">{{ Caption }}</span>
            </div>
            <pre
                class="overflow-y-auto overflow-x-clip px-6 bg-gray-700/10 text-hot-coral h-[45dvh] lg:h-[60dvh] relative transition-all duration-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer">
                 <code class="block text-xs/6 opacity-70">{{ code }}</code>
            </pre>
            <div class="flex items-center justify-between px-6 py-2 bg-gray-100/10 text-background text-md">
                <Links :href="repoUrl || defaultGistPage" :text="typeof linkText === 'function' ? linkText() : linkText"
                    v-if="!loading" />
                <Github :url="repoUrl || defaultGistPage" :aria="Caption" class="relative hidden w-10 lg:inline-flex" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Links from '../Links.vue'
import Github from '../buttons/Github.vue'
import { ref, onMounted, watch, computed, nextTick } from 'vue'
const props = defineProps({
    gistId: { type: String, required: true },
    repoUrl: { type: String, default: '' },
    FileName: { type: String, default: '' },
    code: { type: String, default: '' },
    Caption: { type: String, default: '' },

})

const loading = ref(true)
const error = ref('')
//const code = ref('')
const gistLinkText = computed(() => {
    const intro = props.FileName
        ? `<strong class="block md:inline">${props.FileName}&nbsp;/&nbsp;</strong>`
        : ''
    return intro + '&nbsp;View the full repo ↗'
})

const defaultGistPage = computed(() => {
    const id = props.gistId.split('/').pop();
    return `https://gist.github.com/${id}`;
});

/*
async function fetchGist() {
  loading.value = true
  error.value = ''
 // code.value = ''
  const id = props.gistId.includes('gist.github.com')
    ? props.gistId.split('/').pop()
    : props.gistId

  try {
    const gist = await $fetch(`/api/github/gitAuth`, {
      query: { id }
    })
    const files = gist.files
    const filename = Object.keys(files)[0]
    code.value = files[filename].content
  } catch (e) {
    error.value = e.message || 'Failed to load gist'
  } finally {
    loading.value = false
  }
}
onMounted(async () => {
    await nextTick()
    fetchGist()
})
watch(() => [props.gistId, props.file], fetchGist)
*/
onMounted(async () => {
    await nextTick()
   // fetchGist()
    loading.value = false
})
function linkText() {
    return gistLinkText.value;
} 

</script>
<style scoped>
@import url('https://cdn.jsdelivr.net/npm/comic-mono@0.0.1/index.css');
@import url('https://github.githubassets.com/assets/gist-embed-b1ee75c43dbe.css');
</style>