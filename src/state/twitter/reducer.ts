import { createReducer } from '@reduxjs/toolkit'
import { getTweetsList, updateTweetsList, getTwitterCallback } from './actions'

export interface TweetsMetaData {
  oldest_id: string
  newest_id: string
  result_count: number
}

export interface StorageState {
  list?: any[]
  meta: TweetsMetaData
  total: number
}

export const initialState: StorageState = {
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
    // .addCase(getTweetsList.pending, (_, { meta: { arg: url, requestId } }) => {
    //   console.log(url, requestId);
    // })
    .addCase(getTweetsList.fulfilled, (state, { payload } ) => {
      console.log('payload: ', payload);
      const { data, meta } = payload
      state.meta = meta
      state.list = data
    })
    .addCase(updateTweetsList, (state, action) => {
      state.list = action.payload.list
    })
    .addCase(getTwitterCallback.fulfilled, (_, action) => {
      console.log(action)
    })
)
