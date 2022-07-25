import { defineNuxtPlugin } from '#app'

import createStore from '@/store'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createStore())
})
