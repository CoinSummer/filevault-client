import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const users = [{ id: 1 }, { id: 2 }, { id: 3 }]
const Demo: NextApiHandler = (req: NextApiRequest, res: NextApiResponse<any>) => {
  console.log('res: ', res);
  console.log('req: ', req);
  // Get data from your database
  res.status(200).json(users)
}

export default Demo
