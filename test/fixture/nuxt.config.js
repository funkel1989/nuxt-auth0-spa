const { resolve } = require('path')
require('dotenv').config()

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  mode: 'spa',
  modules: [
    { handler: require('../../') }
  ],
  auth0: {
    domain: process.env.AUTH0_DOMAIN,
    client_id: process.env.AUTH0_CLIENT_ID,
    plugins: ['~/plugins/extend.js']
  }
}
