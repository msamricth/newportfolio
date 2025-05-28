import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

export default defineNuxtConfig({
  srcDir: './src/',
  css: ['~/style.css'],
  publicDir: resolve(__dirname, 'public'),
  modules: [
    '@pinia/nuxt',
  ],

  generate: {
    fallback: true,
    routes: [
      '/',
      '/about',
      '/work/',
      '/work/glt'
    ]
  },
  compatibilityDate: '2025-05-22',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    baseURL: '/',
    head: {
      titleTemplate: '%s | Code Artisan',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://res.cloudinary.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap' },
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/hls.js@1', defer: true, crossorigin:"anonymous" },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-JPS46M3VH5', async: true },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-JPS46M3VH5');
          `
        }
      ]
    }
  },
})
