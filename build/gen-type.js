const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const { noElPrefixFile } = require('./common')
const outsideImport = /import .* from '..\/(.*?)\/src\/.*/

// global.d.ts
fs.copyFileSync(
  path.resolve(__dirname, '../typings/vue-shim.d.ts'),
  path.resolve(__dirname, '../lib/sky-plus.d.ts')
)

// index.d.ts
const newIndexPath = path.resolve(__dirname, '../lib/index.d.ts')
fs.copyFileSync(path.resolve(__dirname, '../lib/sky/index.d.ts'), newIndexPath)
const index = fs.readFileSync(newIndexPath)
const newIndex = index
  .toString()
  .replace(/@sky\//g, './sky-')
  .replace('sky-utils', 'utils')
fs.writeFileSync(newIndexPath, newIndex)

// component
const libDirPath = path.resolve(__dirname, '../lib')
fs.readdirSync(libDirPath).forEach(comp => {
  if (!noElPrefixFile.test(comp)) {
    if (fs.lstatSync(path.resolve(libDirPath, comp)).isDirectory()) {
      // rename
      const newCompName = `sky-${comp}`
      // console.log(path.resolve(libDirPath, comp))
      // console.log(path.resolve(libDirPath, newCompName))
      fs.renameSync(
        path.resolve(libDirPath, comp),
        path.resolve(libDirPath, newCompName)
      )
      // re-import
      const imp = fs
        .readFileSync(
          path.resolve(__dirname, '../lib', newCompName, 'index.d.ts')
        )
        .toString()
      if (outsideImport.test(imp) || imp.includes('@sky/')) {
        const newImp = imp
          .replace(outsideImport, (i, c) => {
            return i.replace(`../${c}`, `../sky-${c}`)
          })
          .replace('@sky/', '../sky-')
          .replace('sky-utils', 'utils')
        fs.writeFileSync(
          path.resolve(__dirname, '../lib', newCompName, 'index.d.ts'),
          newImp
        )
      }
    }
  }
})

// after components dir renamed
fs.readdirSync(libDirPath).forEach(comp => {
  // check src/*.d.ts exist
  const srcPath = path.resolve(libDirPath, comp, './src')
  if (fs.existsSync(srcPath)) {
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.readdir(srcPath, 'utf-8', (err, data) => {
        if (err) return
        // replace all @element-plus in src/*.d.ts
        data.forEach(f => {
          if (!fs.lstatSync(path.resolve(srcPath, f)).isDirectory()) {
            const imp = fs.readFileSync(path.resolve(srcPath, f)).toString()
            if (imp.includes('@sky/')) {
              const newImp = imp.replace(/@sky\//g, '../../sky-')
              fs.writeFileSync(path.resolve(srcPath, f), newImp)
            }
          }
        })
      })
    }
  }
})

rimraf('lib/sky-sky', function() {
  // console.log(err)
})
