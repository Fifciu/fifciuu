const description = "Fast-growing frontend & backend developer\'s website."
const title = 'Fifciuu - Filip Jędrasik'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  generate: {
    dir: 'docs'
  },
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: title },
      { name: 'twitter:title', content: title },
      { property: 'og:description', content: description },
      { name: 'twitter:description', content: description },
      { property: 'og:url', content: 'https://fifciuu.com/' },
      { property: 'og:site_name', content: title },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: '//fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap', as: 'style' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap', media: 'print', onload: "this.media='all'" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // 'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/antd-ui'
    '@/assets/sass/main.scss'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/google-analytics', {
      id: 'UA-80868902-7',
      debug: {
        enabled: true,
        sendHitTask: true
      }
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  pwa: {
    manifest: {
      name: title,
      lang: 'en',

    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
