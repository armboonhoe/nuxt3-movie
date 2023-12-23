// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      movieToken: process.env.NUXT_MOVIE_TOKEN
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    'dayjs-nuxt',
    'nuxt-svgo',
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './locales/i18n.config.ts'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})