import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import auth from '../../middleware/auth'
import Twitter from 'twitter-lite'

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(auth)
  .post(async (req, res) => {
    // console.log('res: ', res);
    console.log('req-----------------: ', req);
    const { oauthTokenKey, oauthTokenSecret } = req.body
    const client = new Twitter({
      consumer_key: '1Rcc9zajmlnRCNnrXaOXY195D',
      consumer_secret: 'Zu0oF91sth3goB2uvjNKsJPITbU8umsWwW4Fye3g0F0tdFDr4A',
      access_token_key: oauthTokenKey,
      access_token_secret: oauthTokenSecret,
    })
    const params = {
      screen_name: 'yuwenhui1',
      count: 15,
    }

    const feedList = await client.get('statuses/user_timeline', params)
    console.log('feedList: ', feedList)
    res.json({})
  })
  .use((req, res, next) => {
    if (!req.user) {
      res.status(401).send('unauthenticated')
    } else {
      next()
    }
  })

export default handler