import axios from '@/utils/api.request'

export const getData = () => {
  return axios.request({
    url: '/heroes1',
    method: 'get'
  })
}