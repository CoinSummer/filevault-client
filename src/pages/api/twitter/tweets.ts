import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { getSession } from 'next-auth/client'
import needle from 'needle'
import { twitterClient } from '../../../utils/twitter'
import { TWITTER_API_BASE } from '../../../const'

import pool from '../../../utils/database'

export const getUserAccountById = async (useId: number) => {
  const { rows } = await pool.query({
    text: `
      SELECT *
      FROM accounts
      WHERE user_id = $1
      LIMIT 1
    `,
    values: [useId],
  })
  console.log('rows', rows)
  return rows[0]
}

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
  .get(async (_, res) => {
    try {
      const { access_token: bearerToken } = await twitterClient.getBearerToken()
      if (bearerToken) {
        const params = {
          'max_results': 100,
          'tweet.fields': 'created_at'
        }
        const options = {
          headers: {
            authorization: `Bearer ${bearerToken}`
          }
        }
        const url = `${TWITTER_API_BASE}/users/102486999/tweets`
        const resp = await needle('get', url, params, options)
        res.json(resp.body)
      }
    } catch (error) {
      console.error(error)
    }
  })

export default handler