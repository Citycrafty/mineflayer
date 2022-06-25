if (typeof process !== 'undefined' && parseInt(process.versions.node.split('.')[0]) < 14) {
  console.error('Your node version is currently', process.versions.node)
  console.error('Please update it to a version >= 14.x.x from https://nodejs.org/')
  process.exit(1)
Host: citycrafty.aternos.me
Port: 63290
Name: city
}

module.exports = require('./lib/loader.js')
