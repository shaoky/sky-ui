const webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = {
  stories: [
    // '../stories/**/*.stories.@(ts|mdx)',
    '../src/**/*.stories.@(ts|mdx)',
    // '../stories/**/*.stories.tsx',
    // '../src/welcome/0-welcome.stories.tsx',
    // '../src/keypoint-select/keypoint-select.stories.tsx'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ],
  webpackFinal: (config) => {
    config.module = webpackConfig.module
    config.resolve.extensions.push('.ts')
    return config
  },
};
