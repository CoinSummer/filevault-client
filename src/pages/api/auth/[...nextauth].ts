import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const providers = [
  Providers.Twitter({
    // clientId: `${process.env.TWITTER_CLIENT_ID}`,
    // clientSecret: `${process.env.TWITTER_CLIENT_SECRET}`,
    clientId: '1Rcc9zajmlnRCNnrXaOXY195D',
    clientSecret: 'Zu0oF91sth3goB2uvjNKsJPITbU8umsWwW4Fye3g0F0tdFDr4A',
  }),
  Providers.GitHub({
    clientId: `${process.env.GITHUB_CLIENT_ID}`,
    clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
  })
]

const callbacks = {
  signIn: async (user: any, account: any, profile: any) => {
    console.log('profile: ', profile);
    console.log('account: ', account);
    console.log('user: ', user);
    return Promise.resolve(true)
  }
}

// const database = {
//   type: process.env.DB_TYPE,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   synchronize: process.env.DB_SYNCHRONIZE
// }

const database = `${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

const options = {
  providers,
  callbacks,
  database,
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)