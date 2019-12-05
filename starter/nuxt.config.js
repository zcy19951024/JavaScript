module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/css/main.scss',
    '@/assets/css/iconfont/iconfont.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /** 定义中间件
   * */
  router: {
    middleware: ['visits', 'user-agent']
  },
  /**
   * 定义插件
   * */
  plugins: [
    {src: '~/plugins/vue-notifications.js', ssr: false},
    {src: '~/plugins/element-ui'}
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // cache: true,
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 100,
        maxAge: 100 * 60 * 15
      })
    }
  }
}

