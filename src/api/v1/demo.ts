import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const Demo: NextApiHandler = (req: NextApiRequest, res: NextApiResponse<any>) => {
  console.log('req: ', req)
  // 其他的操作和 js 一样
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify({ name: '狗子' }))
  res.end()
}

export default Demo