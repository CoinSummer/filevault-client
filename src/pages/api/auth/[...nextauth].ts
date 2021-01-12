import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const providers = [
  Providers.Twitter({
    clientId: `${process.env.TWITTER_CLIENT_ID}`,
    clientSecret: `${process.env.TWITTER_CLIENT_SECRET}`,
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
    return Promise.resolve(account)
  },
  session: async (session: any, user: any) => {
    session.user = user
    return Promise.resolve(session)
  }
}

const database = `${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

const events = {
  signIn: async (message: any) => {
    console.log('message: ', message);
  }
}

const options = {
  providers,
  callbacks,
  database,
  events,
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)