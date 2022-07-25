import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

import api from '@/api'
import type Estate from '@/types/Estate'

export interface EstateState {
  estate: Estate
}

export interface SearchEstateResponse {
  Objects: Array<{
    Id: string
  }>
}

@Module({ namespaced: true, name: 'estate' })
export default class EstateModule extends VuexModule implements EstateState {
  estate = null

  @Mutation
  setEstate (estate: Estate) {
    this.estate = estate
  }

  @Action({ rawError: true })
  async loadEstate (id: string): Promise<Estate> {
    const estate = await api(`estate/${id}`) as Estate

    return estate
  }

  @Action({ rawError: true })
  async findEstateId (): Promise<string> {
    const data = await api('search') as SearchEstateResponse

    return data.Objects[0].Id
  }
}
