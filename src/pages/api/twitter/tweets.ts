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
      SELECT user_id, provider_account_id
      FROM accounts
      WHERE user_id = $1
      LIMIT 1
    `,
    values: [useId],
  })
  return rows[0]
}

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(async (req, res, next) => {
    const session = await getSession({ req })
    if (!session) {
      res.status(401).send('unauthenticated')
    } else {
      next()
    }
  })
  .get(async (req, res) => {
    const session = await getSession({ req })
    try {
      if (session) {
        const accountId = session.account.provider_account_id
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
          const url = `${TWITTER_API_BASE}/users/${accountId}/tweets`
          const resp = await needle('get', url, params, options)
          res.json(resp.body)
        }
      }
    } catch (error) {
      console.error(error)
    }
  })

export default handler