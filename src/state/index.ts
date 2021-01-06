import { configureStore } from '@reduxjs/toolkit'

import twitter from './twitter/reducer'
import user from './user/reducer'

import { updateVersion } from './user/actions'

const store = configureStore({
  reducer: {
    twitter,
    user,
  },
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
