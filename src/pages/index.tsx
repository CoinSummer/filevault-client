import CardLayout from '../layouts/CardLayout'
import PageLayout from '../layouts/PageLayout'
import { useSession } from 'next-auth/client'
import Login from '../components/Login'
import Feed from '../components/Feed'
import { useTwettsList } from '../state/twitter/hooks'

const IndexPage = () => {
  const [session] = useSession()
  let userInfo = {}
  let tweetsList = []
  if (session) {
    userInfo = {
      avatar: session.user.image,
      name: session.user.name,
    }
    tweetsList = useTwettsList()
  } else {
    userInfo = {
      avatar: '',
      name: '',
    }
  }

  return (
    <>
      {session ?
        (
          <PageLayout>
            <Feed
              feedList={tweetsList}
              userInfo={userInfo}
            />
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
