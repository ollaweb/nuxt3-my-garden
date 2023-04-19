// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@pinia/nuxt'],
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
}
