import processEstateResponse from './processEstateResponse'
import baseEstate from '@/tests/baseEstate'
import baseResponseEstate from '@/tests/baseResponseEstate'

describe('processEstateResponse', () => {
  it('should correctly transform response to estate', () => {
    expect(processEstateResponse(baseResponseEstate)).toEqual(baseEstate)
  })

  it('should work without main image', () => {
    expect(processEstateResponse({ ...baseResponseEstate, HoofdFoto: undefined })).toEqual({ ...baseEstate, photos: ['second.png', 'third.png'] })
  })

  it('should work without any images', () => {
    expect(processEstateResponse({ ...baseResponseEstate, HoofdFoto: undefined, Media: undefined }))
      .toEqual({ ...baseEstate, photos: [] })

    expect(processEstateResponse({ ...baseResponseEstate, HoofdFoto: undefined, Media: [] }))
      .toEqual({ ...baseEstate, photos: [] })
  })
})
