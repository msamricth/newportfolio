export function useHls() {
    const loadHls = () => {
      if (typeof window === 'undefined') return
  
      // Modern
      if (!document.querySelector('script[src="/js/hls.mjs"]')) {
        const script = document.createElement('script')
        script.src = '/js/hls.mjs'
        script.type = 'module'
        script.defer = true
        document.head.appendChild(script)
      }
  
      // Fallback
      if (!document.querySelector('script[src="/js/hls.min.js"]')) {
        const nomodule = document.createElement('script')
        nomodule.src = '/js/hls.min.js'
        nomodule.setAttribute('nomodule', '')
        nomodule.defer = true
        document.head.appendChild(nomodule)
      }
    }
  
    return { loadHls }
  }
  