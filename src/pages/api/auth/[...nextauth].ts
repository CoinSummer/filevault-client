import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import pool from '../../../utils/database'

const getUserAccountById = async (useId: number) => {
  const { rows } = await pool.query({
    text: `
      SELECT user_id, provider_account_id
      FROM accounts
      WHERE user_id = $1
      LIMIT 1
    `,
    values: [useId],
  })
  return rows[0]
}

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
  session: async (session: any, user: any) => {
    console.log('user: ', user);
    if (user) {
      session.account = await getUserAccountById(user.id)
    }
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