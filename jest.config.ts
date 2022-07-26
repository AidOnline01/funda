module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(mjs|js)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/tests/fileMock.js',
    '^~/(.*)$': '<rootDir>/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^@/(.*)': '<rootDir>/$1',
    '#app': '<rootDir>/node_modules/nuxt/dist/app/index.mjs',
    '#head': '<rootDir>/node_modules/nuxt/dist/head/runtime/index.mjs'
  },
  verbose: true,
  silent: false,
  setupFiles: ['./jest.setup.ts'],
  testRunner: 'jest-jasmine2',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!nuxt)'
  ]
}
