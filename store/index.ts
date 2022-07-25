import { createStore } from 'vuex'
import type { EstateState } from './modules/Estate'

import estate from './modules/Estate'

export interface State {
  movies: EstateState,
}

export default () => {
  const store = createStore<State>({
    modules: {
      estate
    }
  })

  return store
}
