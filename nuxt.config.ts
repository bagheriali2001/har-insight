// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    autoImport: true
  },
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  components: { 
    global: true,
    dirs: ['~/components']
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  plugins: [
  ]
})
