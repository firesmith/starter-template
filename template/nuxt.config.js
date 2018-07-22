const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {

  /*
  ** Build configuration
  */
  build: {
    analyze: process.env.ANALYZE,
    babel: {
      'presets': [
        '@babel/preset-env',
        'stage-0',
        'vue'
      ],
      plugins: [
        ["transform-imports", {
          "vuetify": {
            "transform": "vuetify/es5/components/${member}",
            "preventFullImport": true
          }
        }]
      ]
    },
    devtool: 'source-map',
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
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    },
    extractCSS: true
  },
  css: ['@/assets/styles/global.scss'],
  /*
  ** Headers of the page
  */
 head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { onesignal: false, workbox: false }]
  ],
  vendor: [
    '~/plugins/vuetify.js'
  ]
}

