import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../index'
import { getTweetsList } from './actions'

const Updater = (): null => {
  const dispatch = useDispatch<AppDispatch>()
  // const accountId = '989945442'
  useEffect(() => {
    console.log('get tweets list')
    dispatch(getTweetsList())
  }, [dispatch])

  return null
}

export default Updater
