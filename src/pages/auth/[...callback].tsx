import { useRouter } from 'next/router'
import BaseLayout from '../../layouts/BaseLayout'
import { useUser } from '../../hooks/user'

const AuthPage = () => {
  const router = useRouter()
  console.log('router.query', router.query)
  
  const { callback } = router.query
  if (callback) {
    console.log('callback')
    if (callback[0] === 'twitter') {
      const { oauth_token: oauthToken, oauth_verifier: oauthVerifier } = router.query
      console.log('oauthToken', oauthToken, 'oauthVerifier', oauthVerifier)
    }
  }

  const [user, { loading }] = useUser()
  console.log('user: ', user);

  return (
    <BaseLayout>
      Callback
    </BaseLayout>
  )
}

export default AuthPage
