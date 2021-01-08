import { createReducer } from '@reduxjs/toolkit'
import { getTweetsList, updateTweetsList, getTwitterCallback } from './actions'

export interface StorageState {
  list?: any[]
  total: number
}

export const initialState: StorageState = {
  list: [],
  total: 0,
}

export default createReducer(initialState, builder =>
  builder
    // .addCase(getTweetsList.pending, (_, { meta: { arg: url, requestId } }) => {
    //   console.log(url, requestId);
    // })
    .addCase(getTweetsList.fulfilled, (state, { payload: { list, total } }) => {
      state.list = list
      state.total = total
    })
    .addCase(updateTweetsList, (state, action) => {
      state.list = action.payload.list
    })
    .addCase(getTwitterCallback.fulfilled, (_, action) => {
      console.log(action)
    })
)
