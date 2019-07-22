import axios from '@/utils/api.request'

export const getHeroes = (params = null) => {
  return axios.request({
    url: '/heroes',
    method: 'get',
    params: params
  })
}

export const getHeroesById = id => {
  return axios.request({
    url: `/heroes/${id}`,
    method: 'get'
  })
}

export const createHero = info => {
  return axios.request({
    url: '/heroes',
    data: info,
    method: 'post'
  })
}

export const uploadImg = formData => {
  return axios.request({
    url: 'image/upload',
    data: formData
  })
}