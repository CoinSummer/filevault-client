import { useRouter } from 'next/router'
import BaseLayout from '../../layouts/BaseLayout'

const AuthPage = () => {
  const router = useRouter()
  
  const { from } = router.query
  if (from) {
    console.log('get tweets list')
    // if (from[0] === 'twitter') {
    //   const { oauth_token: oauthToken, oauth_verifier: oauthVerifier } = router.query
    //   console.log('oauthToken', oauthToken, 'oauthVerifier', oauthVerifier)
    //   dispatch(getTwitterCallback())
    // }
  }
  // const { data, error } = useSWR('/api/users', fetcher)
  // console.log('data: ', data);

  return (
    <BaseLayout>
      Callback
    </BaseLayout>
  )
}

export default AuthPage
