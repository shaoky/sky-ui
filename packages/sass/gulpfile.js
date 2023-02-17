/* eslint-disable @typescript-eslint/no-var-requires */
// const fs = require('fs')
const path = require('path')
const { series, src, dest, watch } = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const noElPrefixFile = /(index)/

function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssmin())
    .pipe(
      rename(function(path) {
        if (!noElPrefixFile.test(path.basename)) {
          path.basename = `sky-${path.basename}`
        }
      })
    )
    // .pipe(dest('./lib'))
    .pipe(dest('./lib'))
}
// 监听修改
// watch(['./src/*.scss'], series(compile, function (cb) {
//   fs.cpSync(
//     path.resolve(__dirname, './lib'),
//     path.resolve(__dirname, '../../lib/css'),
//     {
//       recursive: true
//     }
//   )
//   cb()
// }))
exports.build = series(compile)
