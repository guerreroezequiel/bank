import axios from "axios";
import { NextApiRequest,NextApiResponse } from "next";

export default async function getAccount(req: NextApiRequest, res: NextApiResponse) {
  const resCards = await axios.get('http://localhost:1337/api/users/5?populate=cards')
  res.json({
    id: resCards.data.id,
    pan: resCards.data.pan,
    provider: resCards.data.provider,
    spending: resCards.data.spending,
    max: resCards.data.max,
    status: resCards.data.status,

    method: req.method
  })
}