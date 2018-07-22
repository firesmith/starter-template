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
        ["env", {
          "targets": {
            "browsers": ["last 2 versions", "safari >= 9"]
          }
        }],
        'stage-2',
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
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isServer) {
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
    {{#fontSystem}}
    ]
    {{else}}
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' }
    ]
    {{/fontSystem}}
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { onesignal: false, workbox: false }]
  ],
  plugins: [
    '@/plugins/vuetify'
  ],
  vendor: [
    '@/plugins/vuetify'
  ]
}

