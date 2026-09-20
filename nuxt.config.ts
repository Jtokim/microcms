// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
  //  apiKey: process.env.NUXT_API_KEY
    public: {
      apiKey: process.env.NUXT_API_KEY
    }
  },
  
})
