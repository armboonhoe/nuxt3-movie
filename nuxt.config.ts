// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      movieToken: process.env.NUXT_MOVIE_TOKEN
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ['@pinia/nuxt', '@nuxt/image', 'dayjs-nuxt', 'nuxt-svgo'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})