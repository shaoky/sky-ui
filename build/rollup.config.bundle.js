import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import pkg from '../package.json'
const deps = Object.keys(pkg.dependencies)
export default [
  {
    input: path.resolve(__dirname, '../packages/sky/index.ts'),
    output: {
      format: 'es',
      file: `lib/index.esm.js`
    },
    plugins: [
      terser(),
      nodeResolve(),
      // typescript(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false
      }),
      // typescript()
      typescript({
        tsconfigOverride: {
          include: ['packages/**/*', 'typings/vue-shim.d.ts'],
          exclude: ['node_modules', 'packages/**/__tests__/*']
        },
        abortOnError: false
      })
      // commonjs(),
    ],
    external(id) {
      return /^vue/.test(id) || deps.some(k => new RegExp('^' + k).test(id))
    }
  }
]
