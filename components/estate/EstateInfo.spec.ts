import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import EstateInfo from './EstateInfo.vue'
import EstateMakler from './EstateMakler.vue'
import baseEstate from '@/tests/baseEstate'

function getWrapper (): VueWrapper {
  const wrapper = shallowMount(EstateInfo, {
    propsData: {
      estate: baseEstate
    }
  } as unknown)

  return wrapper
}

describe('EstateInfo', () => {
  it('should render EstateMakler', () => {
    const wrapper = getWrapper()

    expect(wrapper.findComponent(EstateMakler).exists()).toBe(true)
  })
})
