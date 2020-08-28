import path from 'path'
import merge from 'lodash/merge'

module.exports = function (moduleOptions) {
  const options = merge({}, moduleOptions, this.options.auth0)

  // Add plugin
  const r = this.addTemplate({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: path.join('auth.js'),
    options: options
  })

  this.options.plugins.push(path.resolve(this.options.buildDir, r.dst))

  // Extend auth with plugins
  if (options.plugins) {
    options.plugins.forEach(p => this.options.plugins.push(p))
    delete options.plugins
  }
}

module.exports.meta = require('../package.json')
