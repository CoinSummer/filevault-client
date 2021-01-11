import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchTweetsList, fetchTwitterCallback } from '../../api/twitter'

export const getTweetsList = createAsyncThunk('twitter/getTweetsList', async () => {
  return await fetchTweetsList()
})

// TODO replace any[] to twetts interface
export const updateTweetsList = createAction<{ list: any[] }>('updateTweetsList')

export const getTwitterCallback = createAsyncThunk('twitter/getTwitterCallback', async () => {
  return await fetchTwitterCallback()
})