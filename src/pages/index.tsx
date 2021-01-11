import CardLayout from '../layouts/CardLayout'
import PageLayout from '../layouts/PageLayout'
import { useSession } from 'next-auth/client'
import Login from '../components/Login'
import Feed from '../components/Feed'
import { useTwettsList } from '../state/twitter/hooks'

const IndexPage = () => {
  const [session] = useSession()
  // const session = {
  //   accessToken: 'd1f0cab40d5ff5c445957e4b6133b04adae8b9997b042eddae495379cc723063',
  //   user: {
  //     name: 'Max',
  //     image: 'https://pbs.twimg.com/profile_images/1428024873/image.jpg',
  //   }
  // }
  // const session = null
  console.log('session: ', session);
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
  console.log('tweetsList: ', tweetsList);

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
