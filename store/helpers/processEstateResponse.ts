import type Estate from '@/types/Estate'
import type { EstateMakler } from '@/types/Estate'
import type EstateResponse from '@/types/EstateResponse'
import type { Media } from '@/types/EstateResponse'

export default (response: EstateResponse): Estate => {
  const estate: Estate = {
    internalId: response.InternalId,
    id: response.Id,
    photos: [],
    makler: null
  }

  addPhotos(response, estate)

  addMakler(response, estate)

  return estate
}

function addPhotos (response: EstateResponse, estate: Estate) {
  if (response.HoofdFoto) {
    estate.photos.push(response.HoofdFoto)
  }

  if (estateHasMedia(response)) {
    response.Media.forEach((media) => {
      if (mediaHasItems(media)) {
        const item = media.MediaItems[media.MediaItems.length - 1]

        estate.photos.push(item.Url)
      }
    })
  }
}

function estateHasMedia (response: EstateResponse): boolean {
  return response.Media && response.Media.length !== 0
}

function mediaHasItems (media: Media): boolean {
  return media.MediaItems && media.MediaItems.length !== 0
}

function addMakler (response: EstateResponse, estate: Estate) {
  const makler: EstateMakler = {
    id: response.MakelaarId,
    name: response.Makelaar,
    phone: response.MakelaarTelefoon
  }

  estate.makler = makler
}
