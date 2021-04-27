import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from '../package.json'
const deps = Object.keys(pkg.dependencies)
const packages = ['button']

export default packages.map(name => ({
  input: path.resolve(__dirname, `../packages/${name}/index.ts`),
  output: {
    format: 'es',
    file: `lib/${name}/index.js`
  },
  plugins: [
    nodeResolve(),
    typescript(),
    vue({
      target: 'browser',
      css: false
    })
  ],
  external(id) {
    return /^vue/.test(id) || deps.some(k => new RegExp('^' + k).test(id))
  }
}))
