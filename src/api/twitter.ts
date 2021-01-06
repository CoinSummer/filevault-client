import request from '../utils/request'

export const fetchTweetsList = (username: string, params?: any): Promise<any> => {
  return request({
    url: `/twitter/${username}`,
    method: 'get',
    params
  })
}
