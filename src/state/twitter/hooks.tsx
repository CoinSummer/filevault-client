import { useSelector } from 'react-redux'

import { AppState } from '../index'
import { TweetsMetaData } from './reducer'

export const useTwettsList = (): any[] => {
  return useSelector((state: AppState) => state.twitter.list || [])
}

export const useTwettsMeta = (): TweetsMetaData => {
  return useSelector((state: AppState) => state.twitter.meta || {})
}