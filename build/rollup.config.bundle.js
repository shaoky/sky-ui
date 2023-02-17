import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'

export default [
  {
    input: path.resolve(__dirname, '../packages/index.ts'),
    output: {
      format: 'es',
      file: `lib/index.esm.js`
    },
    plugins: [
      terser(),
      nodeResolve(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false
      }),
      typescript({
        tsconfigOverride: {
          include: ['packages/**/*', 'typings/vue-shim.d.ts'],
          exclude: ['packages/**/__tests__/*']
        },
        abortOnError: false
      })
    ],
    external(id) {
      return /^vue/.test(id)
    }
  }
]
