import { NextApiRequest, NextApiResponse} from 'next'

export default function(req: NextApiRequest, res: NextApiResponse) {
  // it should NOT be a react component
  // it should be a api call or some kind of api
  res.json({status: 'ok'})
}

// This is available on
// http://localhost:3000/api/random