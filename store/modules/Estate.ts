import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import axios, { AxiosError } from 'axios'

import type EstateResponse from '@/types/EstateResponse'
import type Estate from '@/types/Estate'
import api from '@/api'
import processEstateResponse from '@/store/helpers/processEstateResponse'

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
      const response = await api(`estate/${id}`) as EstateResponse

      const estate = processEstateResponse(response)

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
