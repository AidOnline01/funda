interface MediaItem {
  Url: string
}

export interface Media {
  MediaItems: MediaItem[]
}

export default interface EstateResponse {
  Id: number,
  InternalId: string,
  HoofdFoto?: string,
  Media?: Media[],
  Makelaar: string,
  MakelaarId: number,
  MakelaarTelefoon: string
}
