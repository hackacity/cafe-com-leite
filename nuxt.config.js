module.exports = {
  head: {
    title: 'SmartFeira',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Aplicativo para mapeamento da Feira de Caruaru' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css' }
    ]
  },
  plugins: [
    '~/plugins/mapbox',
    '~/plugins/scripts',
    '~/plugins/firebase',
    '~/plugins/vuetify'
  ],
  css: [
    '~/assets/style/app.styl'
  ],
  mode: 'spa',
  loading: { color: '#3B8070' },
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ]
}
