import passport from 'passport'
import nextConnect from 'next-connect'
import auth from '../../middleware/auth'
import { twitterStrategy } from '../../lib/passport-twitter'

// const authenticate = (method: string, req: any, res: any) => {
//   new Promise((resolve, reject) => {
//     passport.authenticate(method, {}, (error, token) => {
//       error ? reject(error) : resolve(token)
//     })(req, res)
//   })
// }

// passport.use(twitterStrategy)

// export default nextConnect().use(passport.initialize()).post(async (req, res) => {
//   try {
//     const user = await authenticate('twitter', req, res)
//     console.log('user: ', user)
//     // res.status(200).send({ done: true })
//   } catch (error) {
//     console.error(error)
//     // res.status(401).send(error.message)
//   }
// })

passport.use(twitterStrategy)

export default nextConnect()
  .use(auth)
  .post(passport.authenticate('twitter'), (req, res) => {
    console.log('res: ', res);
    console.log('req: ', req);
    // res.json({ user: req.user })
  })