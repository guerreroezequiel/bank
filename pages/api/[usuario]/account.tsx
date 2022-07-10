import { NextApiRequest,NextApiResponse } from "next";

export default function getAccount(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    hello: "account",
    method: req.method
  })
}
