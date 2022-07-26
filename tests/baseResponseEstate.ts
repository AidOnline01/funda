import EstateResponse from '@/types/EstateResponse'

const baseResponseEstate: EstateResponse = {
  Id: 10025,
  InternalId: 'test-id',
  HoofdFoto: 'main.png',
  Media: [
    {
      MediaItems: [
        {
          Url: 'small.png'
        },
        {
          Url: 'second.png'
        }
      ]
    },
    {
      MediaItems: [
        {
          Url: 'small.png'
        },
        {
          Url: 'third.png'
        }
      ]
    }
  ],

  Makelaar: 'Dendy',
  MakelaarId: 1505,
  MakelaarTelefoon: '020 025 10 50'
}

export default baseResponseEstate
