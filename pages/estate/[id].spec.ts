import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import { createRouter, createWebHistory } from 'vue-router'
import type { Router } from 'vue-router'
import EstatePage from './[id].vue'
import createStore from '@/store'
import { apiUrl } from '@/config'
import mockAxios from '@/tests/mockAxios'
import baseEstate from '@/tests/baseEstate'
import App from '@/tests/App.vue'
import type Estate from '@/types/Estate'

async function getWrapper (estate: Estate | boolean, delay = 0): Promise<[VueWrapper, Router]> {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/estate/:id',
        component: EstatePage
      }
    ]
  })

  router.push('/estate/test-id')

  await router.isReady()

  if (estate !== false) {
    mockAxios({
      url: `${apiUrl}/estate/test-id`,
      data: estate,
      delay
    })
  }

  const wrapper = mount(App, {
    shallow: true,
    global: {
      plugins: [router],
      provide: {
        store: createStore()
      },
      stubs: {
        EstatePage: false,
        RouterView: false,
        NuxtPage: false,
        NuxtLayout: {
          template: '<div><slot /></div>'
        }
      }
    }
  } as unknown)

  await flushPromises()

  return [wrapper, router]
}

describe('EstatePage', () => {
  it('should show loading', async () => {
    const [wrapper] = await getWrapper({ ...baseEstate, Id: 'test-id' }, 1000)

    expect(wrapper.find('[data-test-id="loading"]').exists()).toBe(true)
  })

  it('should render estate', async () => {
    const [wrapper] = await getWrapper({ ...baseEstate, Id: 'test-id' })

    expect(wrapper.find('[data-test-id]').exists()).toBe(true)
  })

  it('should show NotFound error', async () => {
    const [wrapper] = await getWrapper(false)

    expect(wrapper.find('[data-test-id="not-found"]').exists()).toBe(true)
  })

  it('should show loading on estate change', async () => {
    const [wrapper, router] = await getWrapper({ ...baseEstate, Id: 'test-id' })

    const mockSecondEstate: Estate = { ...baseEstate, Id: 'test-id-2' }

    mockAxios({
      url: `${apiUrl}/estate/test-id-2`,
      data: mockSecondEstate,
      delay: 1000
    })

    router.push('/estate/test-id-2')

    await flushPromises()

    await wrapper.vm.$forceUpdate()

    expect(wrapper.find('[data-test-id="loading"]').exists()).toBe(true)
  })
})
