import nextConnect from 'next-connect'
import auth from '../../middleware/auth'
import Twitter from 'twitter-lite'

export default nextConnect()
  .use(auth)
  .get((req, res) => {
    console.log('res: ', res);
    console.log('req: ', req);
    const client = new Twitter({
      consumer_key: '1Rcc9zajmlnRCNnrXaOXY195D',
      consumer_secret: 'Zu0oF91sth3goB2uvjNKsJPITbU8umsWwW4Fye3g0F0tdFDr4A',
      // access_token_key: accessTokenKey,
      // access_token_secret: accessTokenSecret,
    })
    console.log('client', client)
  })
  .use((req, res, next) => {
    if (!req.user) {
      res.status(401).send('unauthenticated')
    } else {
      next()
    }
  })