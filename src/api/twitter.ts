import request from '../utils/request'

export const fetchTweetsList = (username: string, params?: any): Promise<any> => {
  return request({
    url: `/twitter/${username}`,
    method: 'get',
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
