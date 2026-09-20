// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-microcms-module', '@nuxtjs/tailwindcss'],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography]
    }
  }
  //runtimeConfig: {
  //  apiKey: process.env.NUXT_API_KEY
  //  public: {
  //    apiKey: process.env.NUXT_API_KEY,
  //    serviceDomain: process.env.NUXT_MICROCMS_SERVICE_DOMAIN,
  //  }
  //},
  
})
