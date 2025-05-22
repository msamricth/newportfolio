<template>
    <div class="gist-embed lg:max-w-2xl rounded-[1.5rem] overflow-clip">
        <div v-if="loading">Loading snippet…</div>
        <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
        <div v-else>
            <div
                class="bg-gray-100/10 px-6 py-2 flex justify-between items-center text-background">
                <span class="text-xs" v-if="Caption">{{ Caption }}</span>
            </div>
            <pre
                class="overflow-y-auto overflow-x-clip px-6 bg-gray-700/10 text-hot-coral h-[45dvh] lg:h-[60dvh] relative transition-all duration-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer">
                 <code class="text-xs/6 block opacity-70">{{ code }}</code>
            </pre>
            <div
                class="bg-gray-100/10 px-6 py-2 flex justify-between items-center text-background text-md">
                <Links :href="repoUrl || defaultGistPage" :text="typeof linkText === 'function' ? linkText() : linkText"
                 v-if="!loading" />
                <Github :url="repoUrl || defaultGistPage"
                    :aria="Caption" class="w-10 relative" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Links from '../Links.vue'
import Github from '../buttons/Github.vue'
import { ref, onMounted, watch, computed } from 'vue'
const props = defineProps({
    gistId: { type: String, required: true },
    repoUrl: { type: String, default: '' },
    FileName: { type: String, default: '' },
    Caption: { type: String, default: '' },
})

const loading = ref(true)
const error = ref('')
const code = ref('')

const gistLinkText = computed(() => {
    const intro = props.FileName
        ? `<strong class="block md:inline">${props.FileName} / </strong>`
        : ''
    return intro + 'View the full repo ↗'
})

const defaultGistPage = computed(() => {
    const id = props.gistId.split('/').pop()
    return `https://gist.github.com/${id}`
})

async function fetchGist() {
    loading.value = true
    error.value = ''
    code.value = ''
    const id = props.gistId.includes('gist.github.com')
        ? props.gistId.split('/').pop()
        : props.gistId

    try {
        const res = await fetch(`https://api.github.com/gists/${id}`)
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)
        const gist = await res.json()
        const files = gist.files
        const filename = Object.keys(files)[0]

        code.value = files[filename].content
    } catch (e) {
        error.value = e.message
    } finally {
        loading.value = false
    }
}

function linkText() {
    return gistLinkText.value;
}
onMounted(() => {
    fetchGist()
})
watch(() => [props.gistId, props.file], fetchGist)
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/comic-mono@0.0.1/index.css');
@import url('https://github.githubassets.com/assets/gist-embed-b1ee75c43dbe.css');


</style>