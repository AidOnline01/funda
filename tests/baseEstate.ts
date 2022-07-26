import type Estate from '@/types/Estate'

const baseEstate: Estate = {
  id: 10025,
  internalId: 'test-id',
  photos: ['main.png', 'second.png', 'third.png'],
  makler: {
    id: 1505,
    name: 'Dendy',
    phone: '020 025 10 50'
  }
}

export default baseEstate
