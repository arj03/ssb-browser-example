const ssbSingleton = require('ssb-browser-core/ssb-singleton')

function extraModules(secretStack) {
  // add extra modules here
  return secretStack
}

// in case you want to add or overwrite something from here
// https://github.com/arj03/ssb-browser-core/blob/master/net.js#L11
let config = {}

// setup ssb browser core
ssbSingleton.setup("/.ssb-example", config, extraModules, () => {})

ssbSingleton.getSimpleSSBEventually(
  (err, SSB) => {
    if (err) return console.error(err)

    console.log("got SSB", SSB)
  }
)
