import { useSelector } from 'react-redux'

import { AppState } from '../index'

export const useTwettsList = (): any[] => {
  return useSelector((state: AppState) => state.twitter.list || [])
}

export const useTwettsTotal = (): number => {
  return useSelector((state: AppState) => state.twitter.total || 0)
}