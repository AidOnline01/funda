import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  vite: {
    plugins: [
      eslintPlugin({
        failOnError: true
      }),
      svgLoader()
    ],
    server: {
      hmr: {
        clientPort: 8301,
        port: 8301
      }
    }
  }
})
