import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const events = require('@/_data/db.json');
  res.status(200).json(events);
}
