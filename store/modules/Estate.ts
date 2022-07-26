import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import axios, { AxiosError } from 'axios'

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
  async loadEstate (id: string): Promise<Estate | null> {
    try {
      const estate = await api(`estate/${id}`) as Estate

      return estate
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = (error as AxiosError)

        if (axiosError.response && axiosError.response.status === 404) {
          return null
        }
      }

      throw error
    }
  }

  @Action({ rawError: true })
  async findEstateId (): Promise<string> {
    try {
      const data = await api('search') as SearchEstateResponse

      return (data.Objects && data.Objects.length) ? data.Objects[0].Id : null
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = (error as AxiosError)

        if (axiosError.response && axiosError.response.status === 404) {
          return null
        }
      }

      throw error
    }
  }
}
