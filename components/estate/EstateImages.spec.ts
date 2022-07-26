import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import EstateImages from './EstateImages.vue'
import baseEstate from '@/tests/baseEstate'
import type Estate from '@/types/Estate'

function getWrapper (estate: Estate): VueWrapper {
  const wrapper = shallowMount(EstateImages, {
    propsData: {
      estate
    }
  } as unknown)

  return wrapper
}

describe('EstateImages', () => {
  it('should load images', () => {
    const wrapper = getWrapper({ ...baseEstate, photos: ['main.png', 'second.png', 'third.png'] })

    const mainImageEl = wrapper.find('[data-test-id="main-image-inner"]')
    const imageEls = wrapper.findAll('[data-test-id="image-inner"]')

    expect((mainImageEl.element as HTMLElement).style.backgroundImage).toMatch('main.png')

    expect((imageEls[0].element as HTMLElement).style.backgroundImage).toMatch('main.png')
    expect((imageEls[1].element as HTMLElement).style.backgroundImage).toMatch('second.png')
    expect((imageEls[2].element as HTMLElement).style.backgroundImage).toMatch('third.png')
  })

  it('should make main image active on thumbnail click', async () => {
    const wrapper = getWrapper({ ...baseEstate, photos: ['main.png', 'second.png', 'third.png'] })

    const mainImageEl = wrapper.find('[data-test-id="main-image-inner"]')
    const imageEls = wrapper.findAll('[data-test-id="image"]')

    expect((mainImageEl.element as HTMLElement).style.backgroundImage).toMatch('main.png')
    expect(imageEls[0].classes()).toContain('active')

    await imageEls[2].find('[data-test-id="image-inner"]').trigger('click')

    expect((mainImageEl.element as HTMLElement).style.backgroundImage).toMatch('third.png')
    expect(imageEls[0].classes()).not.toContain('active')
    expect(imageEls[2].classes()).toContain('active')
  })
})
