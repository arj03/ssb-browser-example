const ssbSingleton = require('ssb-browser-core/ssb-singleton')

function ssbReady(sbot) {
  console.log("got sbot", sbot)
}

function extraModules(secretStack) {
  // add extra modules here
  return secretStack
}

// in case you want to add or overwrite something from here
// https://github.com/arj03/ssb-browser-core/blob/master/net.js#L11
let config = {}

// setup ssb browser core
ssbSingleton.setup("/.ssb-example", config, extraModules, () => {})

ssbSingleton.getSSBEventually(
  -1,
  () => { return true },
  (SSB) => { return SSB },
  (err, SSB) => {
    if (err) console.error(err)
    else ssbReady(SSB)
  }
)
