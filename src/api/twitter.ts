import request from '../utils/request'

export const fetchTweetsList = (params?: any): Promise<any> => {
  return request({
    url: `/twitter/tweets`,
    method: 'GET',
    params,
  })
}

export const fetchTwitterLogin = (): Promise<any> => {
  return request({
    url: 'auth/twitter/login',
    method: 'get',
  })
}

export const fetchTwitterCallback = (): Promise<any> => {
  return request({
    url: 'auth/twitter/callback',
    method: 'get',
  })
}
