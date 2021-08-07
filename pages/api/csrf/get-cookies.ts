import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("send cookie");
  res.writeHead(200, {
    "Set-Cookie": [
      "cookie1=NoAttributes",
      "cookie2=SameSiteLax;SameSite=Lax",
      "cookie3=SameSiteNotLax;SameSite=Strict",
    ],
  });
  res.end();
}
