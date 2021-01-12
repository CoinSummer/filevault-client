import { createReducer } from '@reduxjs/toolkit'
import { getTweetsList, updateTweetsList } from './actions'

export interface TweetsMetaData {
  oldest_id: string
  newest_id: string
  result_count: number
}

export interface StorageState {
  loading: boolean
  list?: any[]
  meta: TweetsMetaData
  total: number
}

export const initialState: StorageState = {
  loading: false,
  list: [],
  meta: {
    oldest_id: '',
    newest_id: '',
    result_count: 0,
  },
  total: 0,
}

export default createReducer(initialState, builder =>
  builder
    .addCase(getTweetsList.pending, (state) => {
      state.loading = true
    })
    .addCase(getTweetsList.fulfilled, (state, { payload } ) => {
      const { data, meta } = payload
      state.loading = false
      state.meta = meta
      state.list = data
    })
    .addCase(updateTweetsList, (state, action) => {
      state.list = action.payload.list
    })
)
