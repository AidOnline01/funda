import axios from 'axios'
import { apiUrl } from '@/config'

export default async function api (
  endpoint: string,
  params: Record<string, unknown> = {}
): Promise<unknown> {
  const response = await axios({
    method: 'get',
    url: apiUrl + '/' + endpoint,
    params
  })

  return response.data
}
