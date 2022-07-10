import axios from "axios";
import { NextApiRequest,NextApiResponse } from "next";

export  default async function getAccount(req: NextApiRequest, res: NextApiResponse) {
  const resUser = await axios.get('http://localhost:1337/api/users/5')
  res.json({
    id: resUser.data.data.attributes.id,
    nombre: resUser.data.data.attributes.username,
    
    method: req.method
  })
}