import axios from 'axios'
import { accessKey } from '@/config'

export const API_URL = 'https://api.tvmaze.com'

export default async function api (
  url: string,
  params: Record<string, unknown> = {}
): Promise<unknown> {
  url = url.replace('[key]', accessKey)

  const response = await axios({
    method: 'get',
    url,
    params,
    headers: {
      origin: 'funda.nl'
    }
  })

  return response.data
}
