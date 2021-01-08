import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import useSWR from 'swr'
import BaseLayout from '../../layouts/BaseLayout'
import { AppDispatch } from '../../state/index'

const AuthPage = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const fetcher = (url) => fetch(url).then((res) => res.json())
  
  const { from } = router.query
  if (from) {
    console.log('get tweets list')
    // if (from[0] === 'twitter') {
    //   const { oauth_token: oauthToken, oauth_verifier: oauthVerifier } = router.query
    //   console.log('oauthToken', oauthToken, 'oauthVerifier', oauthVerifier)
    //   dispatch(getTwitterCallback())
    // }
  }

  const { data, error } = useSWR('/api/users', fetcher)
  console.log('data: ', data);

  return (
    <BaseLayout>
      Callback
    </BaseLayout>
  )
}

export default AuthPage
