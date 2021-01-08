import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import BaseLayout from '../../layouts/BaseLayout'
import { AppDispatch } from '../../state/index'
import { getTwitterCallback } from '../../state/twitter/actions'

const AuthPage = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const { from } = router.query
    console.log('from: ', from)
    if (from) {
      console.log('get tweets list')
      if (from[0] === 'twitter') {
        const { oauth_token: oauthToken, oauth_verifier: oauthVerifier } = router.query
        console.log('oauthToken', oauthToken, 'oauthVerifier', oauthVerifier)
        dispatch(getTwitterCallback())
      }
    }
  }, [dispatch])

  return (
    <BaseLayout>
      Callback
    </BaseLayout>
  )
}

export default AuthPage
