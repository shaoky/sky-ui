const fs = require('fs')
const path = require('path')

// global.d.ts
fs.copyFileSync(
  path.resolve(__dirname, '../typings/vue-shim.d.ts'),
  path.resolve(__dirname, '../lib/sky.d.ts')
)
