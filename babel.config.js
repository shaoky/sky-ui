module.exports = {
  // presets: ['@vue/cli-plugin-babel/preset'],
  presets: ['@vue/cli-plugin-babel/preset', '@babel/typescript'],
  plugins: ['lodash'],
  // 这个会影响test:unit
  // overrides: [
  //   {
  //     test: /\.vue$/,
  //     plugins: ['@babel/transform-typescript']
  //   }
  // ],
  env: {
    utils: {
      ignore: ['**/*.test.ts', '**/*.spec.ts'],
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false
          }
        ]
      ],
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            root: ['sky'],
            alias: {
              '@sky': 'sky/lib'
            }
          }
        ]
      ]
    }
  }
}
