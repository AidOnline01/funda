export interface EstateMakler {
  id: number,
  name: string,
  phone: string
}

export default interface Estate {
  id: number,
  internalId: string,
  photos: string[],
  makler: EstateMakler
}
