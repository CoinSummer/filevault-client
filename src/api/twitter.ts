import request from '../utils/request'

export const fetchTweetsList = (params?: any): Promise<any> => {
  return request({
    url: `/twitter/tweets`,
    method: 'GET',
    params,
  })
}
