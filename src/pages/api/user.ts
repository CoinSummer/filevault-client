import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import auth from '../../middleware/auth'

export default nextConnect<NextApiRequest, NextApiResponse>()
  .use(auth)
  .get((req, res) => {
    console.log('res: ', res);
    console.log('req: ', req);
  })
  .use((req, res, next) => {
    if (!req.user) {
      res.status(401).send('unauthenticated')
    } else {
      next()
    }
  })