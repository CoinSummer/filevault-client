import CardLayout from '../layouts/CardLayout'
import PageLayout from '../layouts/PageLayout'
import { useSession } from 'next-auth/client'
import Login from '../components/Login'
import Feed from '../components/Feed'
import { useTwettsList } from '../state/twitter/hooks'

const IndexPage = () => {
  const [session] = useSession()

  // const session = null
  console.log('session: ', session);
  let userInfo = {}
  if (session) {
    userInfo = {
      avatar: session.user.image,
      name: session.user.name,
    }
  } else {
    userInfo = {
      avatar: '',
      name: '',
    }
  }
  const tweetsList = useTwettsList()
  console.log('tweetsList: ', tweetsList);

  return (
    <>
      {session ?
        (
          <PageLayout>
            <Feed feedList={tweetsList} userInfo={userInfo} />
          </PageLayout>
        ):
        (
          <CardLayout>
            <Login /> 
          </CardLayout>
        )
      }
    </>
  )
}

export default IndexPage
