import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BaseLayout from '../../layouts/BaseLayout'
// import { useUser } from '../../hooks/user'

const AuthPage = () => {
  const router = useRouter()

  useEffect(() => {
    const fetchFeed = async () => {
      const { callback } = router.query
      if (callback) {
        if (callback[0] === 'twitter') {
          const { oauth_token: oauthToken, oauth_verifier: oauthVerifier } = router.query
          const payload = {
            oauthTokenKey: oauthToken,
            oauthTokenSecret: oauthVerifier
          }
          // console.log('payload: ', payload);
          const res = await fetch('/api/feed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
          console.log('res', res)
        }
      }
    }
    fetchFeed()
  }, [])
  

  return (
    <BaseLayout>
      Callback
    </BaseLayout>
  )
}

export default AuthPage
