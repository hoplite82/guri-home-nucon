// https://nuxt.com/docs/api/configuration/nuxt-config
/** 
  * TODO
    - fix hardloading scripts
**/
export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: "/",
    head: {
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: "width=device-width, initial-scale=1" }],

      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic', type: 'text/css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kaushan Script' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu Mono' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Protest Revolution' },

        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css' },
        { rel: 'icon', href: 'favicon.ico', type: "image/x-icon" }
      ],
      script: [
        { src: 'scripts.js' }, { src: 'https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' }, 
        { type: "text/javascript", src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image", "nuxt-primevue"],
  content: {
    markdown: {
      anchorLinks: false,
    }
  }, primevue: {
    components: {
      prefix: 'Prime',
      include: ['Button', 'DataTable']
    },
    options: {
      unstyled: true
    }
  },
  css: ['@/assets/scss/styles.scss'],
  nitro: {
    serveStatic: false
  }
})