import console from 'console'
import {
  VuexModule, Module, Mutation, Action
} from 'vuex-module-decorators'
import { estateUrl, searchUrl } from '@/api/endpoints'

import api from '@/api'
import type Estate from '@/types/Estate'

export interface EstateState {
  estate: Estate
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
    const url = estateUrl.replace('[id]', id)

    const estate = await api(url) as Estate

    return estate
  }

  @Action({ rawError: true })
  async findEstateId (): Promise<string> {
    const xml = await api(searchUrl) as string

    console.log(xml)

    return 'test'
  }
}
