import axios from 'axios'
import { SITE_API_TIMEOUT } from '../const'

const service = axios.create({
  baseURL: process.env.SITE_BASE_API || '/api',
  timeout: SITE_API_TIMEOUT,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  (error) => {
    return Promise.reject({
      statusCode: error.response.status,
      data: error.response.data,
    })
  }
)

export default service