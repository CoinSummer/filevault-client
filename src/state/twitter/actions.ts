import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchTweetsList, fetchTwitterCallback } from '../../api/twitter'

const requestTweetsList = async (username: string): Promise<any> => {
  const response = await fetchTweetsList(username)
  return response
}
const fetchCache: { [username: string]: Promise<any> } = {}

export const getTweetsList = createAsyncThunk('getTweetsList', (username: string) =>
  // this makes it so we only ever fetch a list a single time concurrently
(fetchCache[username] = fetchCache[username] ?? requestTweetsList(username).catch(error => {
    delete fetchCache[username]
    throw error
  })))

// TODO replace any[] to twetts interface
export const updateTweetsList = createAction<{ list: any[] }>('updateTweetsList')

export const getTwitterCallback = createAsyncThunk('twitter/getTwitterCallback', async () => {
  return await fetchTwitterCallback()
})