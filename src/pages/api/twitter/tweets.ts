import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { getSession } from 'next-auth/client'
import needle from 'needle'
// import auth from '../../middleware/auth'
import Twitter from 'twitter-lite'
import { TWITTER_API_BASE } from '../../../const'

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(async (req, res, next) => {
    const session = await getSession({ req })
    console.log('session: ', session);
    if (!session) {
      res.status(401).send('unauthenticated')
    } else {
      next()
    }
  })
  .get(async (req, res) => {
    const session = await getSession({ req })
    console.log('session: ', session);

    const user = new Twitter({
      consumer_key: `${process.env.TWITTER_CLIENT_ID}`,
      consumer_secret: `${process.env.TWITTER_CLIENT_SECRET}`,
    })

    try {
      const { access_token: bearerToken } = await user.getBearerToken()
      const params = {
        'max_results': 100,
        'tweet.fields': 'created_at'
      }
      const options = {
        headers: {
          authorization: `Bearer ${bearerToken}`
        }
      }
      const url = `${TWITTER_API_BASE}/users/989945442/tweets`
      const resp = await needle('get', url, params, options)
      res.json(resp.body)
    } catch (error) {
      console.error(error)
    }
  })

export default handler