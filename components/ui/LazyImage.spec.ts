import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import LazyImage from './LazyImage.vue'

function getWrapper (src: string): VueWrapper {
  const wrapper = shallowMount(LazyImage, {
    propsData: {
      src
    }
  } as unknown)

  return wrapper
}

describe('LazyImage', () => {
  it('should render image', () => {
    const src = 'https://website.com/image.png'

    const wrapper = getWrapper(src)

    expect((wrapper.find('[data-test-id="lazy-image"]').element as HTMLElement).style.backgroundImage).toBe(`url(${src})`)
  })
})
