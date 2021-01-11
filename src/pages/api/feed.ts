import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import needle from 'needle'
import auth from '../../middleware/auth'
import Twitter from 'twitter-lite'

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(auth)
  .get(async (_, res) => {
    const user = new Twitter({
      consumer_key: `${process.env.TWITTER_CLIENT_ID}`,
      consumer_secret: `${process.env.TWITTER_CLIENT_SECRET}`,
    })
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
    const url = `https://api.twitter.com/2/users/989945442/tweets`
    const resp = await needle('get', url, params, options)
    // console.log('resp: ', resp.body)
    const { data, meta } = resp.body
    res.json({data, meta})
  })
  .use((req, res, next) => {
    if (!req.user) {
      res.status(401).send('unauthenticated')
    } else {
      next()
    }
  })

export default handler