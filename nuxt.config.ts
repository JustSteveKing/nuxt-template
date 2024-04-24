// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  devtools: { enabled: true },
  experimental: {
    viewTransition: true
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/test-utils/module",
    "@pinia/nuxt",
    "nuxt-auth-sanctum"
  ],
  routeRules: {
    '/': {
      prerender: true
    },
    '/api/*': {
      cache: {
        maxAge: 60 * 60
      }
    }
  },
  sanctum: {
    baseUrl: 'http://localhost:8080'
  }
})