import { createStore } from 'vuex'
import type { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Estate from '@/store/modules/Estate'
import type { SearchEstateResponse } from '@/store/modules/Estate'
import type { State } from '@/store'
import mockAxios from '@/tests/mockAxios'
import { apiUrl } from '@/config'
import baseEstate from '@/tests/baseEstate'

describe('Vuex: Movies', () => {
  let store: Store<State> | null = null
  let module: Estate = null

  beforeEach(() => {
    store = createStore<State>({
      modules: {
        estate: Estate
      }
    })

    module = getModule(Estate, store)
  })

  describe('Actions', () => {
    it('findEstateId', async () => {
      const mockResponse: SearchEstateResponse = {
        Objects: [
          {
            Id: 'test-id'
          }
        ]
      }

      mockAxios({
        url: `${apiUrl}/search`,
        data: mockResponse
      })

      const id = await module.findEstateId()

      expect(id).toBe('test-id')
    })

    it('findEstateId no objects', async () => {
      const mockResponse: SearchEstateResponse = {
        Objects: []
      }

      mockAxios({
        url: `${apiUrl}/search`,
        data: mockResponse
      })

      const id = await module.findEstateId()

      expect(id).toBe(null)
    })

    it('findEstateId 404', async () => {
      const id = await module.findEstateId()

      expect(id).toBe(null)
    })

    it('loadEstate', async () => {
      mockAxios({
        url: `${apiUrl}/estate/test-id`,
        data: baseEstate
      })

      const estate = await module.loadEstate('test-id')

      expect(estate).toEqual(baseEstate)
    })

    it('loadEstate 404', async () => {
      const estate = await module.loadEstate('non-existing-id')

      expect(estate).toBe(null)
    })
  })

  describe('Mutations', () => {
    it('setEstate', () => {
      expect(module.estate).toBe(null)

      module.setEstate(baseEstate)

      expect(module.estate).toEqual(baseEstate)
    })
  })

  describe('Getters', () => {
  })
})
