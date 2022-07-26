import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import EstateMakler from './EstateMakler.vue'
import baseEstate from '@/tests/baseEstate'
import type Estate from '@/types/Estate'

function getWrapper (): VueWrapper {
  const mockEstate: Estate = {
    ...baseEstate,
    makler: {
      id: 1505,
      name: 'Dendy',
      phone: '020 025 10 50'
    }
  }

  const wrapper = shallowMount(EstateMakler, {
    propsData: {
      estate: mockEstate
    }
  } as unknown)

  return wrapper
}

describe('EstateMakler', () => {
  it('should render image', () => {
    const wrapper = getWrapper()

    expect(wrapper.find('[data-test-id="image"]').exists()).toBe(true)
  })

  it('should render name', () => {
    const wrapper = getWrapper()

    expect(wrapper.find('[data-test-id="name"]').text()).toMatch(/dendy/i)
  })

  it('should render phone', async () => {
    const wrapper = getWrapper()

    const phoneEl = wrapper.find('[data-test-id="phone"]')

    expect(phoneEl.text()).toMatch(/show/i)

    await phoneEl.trigger('click')

    expect(phoneEl.text()).toMatch(/020 025 10 50/i)
  })
})
