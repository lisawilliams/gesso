
// 'use strict'
//
// // user require with a reference to bundle the file and use it in this file
// // var example = require('./example');
//
// // load manifests
// // scripts
// require('./assets/scripts/index.js')
//
// // styles
// require('./assets/styles/index.scss')
//
//

'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

const events = require('./assets/scripts/auth/events.js')

// load manifests
// scripts
require('./assets/scripts/index.js')
require('./assets/scripts/auth/events.js')
require('./assets/scripts/shows/events.js')

// styles
require('./assets/styles/index.scss')

module.exports = {
  events
}
