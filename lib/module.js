const path = require('path')

export default function(moduleOptions) {
  const options = { ...this.options.clientWidth, ...moduleOptions }

  const pluginOptions = Object.assign(
    {
      tablet: 768,
      desktop: 1024,
      largeDesktop: 1440,
    },
    options,
  )

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template'),
    fileName: 'plugin.client-width.client.js',
    options: pluginOptions,
    ssr: false,
  })
}

module.exports.meta = require('../package.json')
