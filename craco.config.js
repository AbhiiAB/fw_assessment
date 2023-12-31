// craco.config.js (in root)
const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  // ...
  webpack: {
    alias: {
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@container': path.join(path.resolve(__dirname, './src/container')),
      '@store': path.join(path.resolve(__dirname, './src/store')),
      '@utils': path.join(path.resolve(__dirname, './src/utils')),
      '@views': path.join(path.resolve(__dirname, './src/views')),
      '@styles': path.join(path.resolve(__dirname, './src/styles')),
      '@assets': path.join(path.resolve(__dirname, './src/assets')),
      '@hooks': path.join(path.resolve(__dirname, './src/hooks')),
      '@services': path.join(path.resolve(__dirname, './src/services')),
      '@routes': path.join(path.resolve(__dirname, './src/routes')),
      '@type': path.join(path.resolve(__dirname, './src/type')),
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  },
};
