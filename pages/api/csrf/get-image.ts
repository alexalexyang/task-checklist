import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "isomorphic-unfetch";

type Data = {
  catUrl: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const randomCat = await (
    await fetch("https://api.thecatapi.com/v1/images/search")
  ).json();

  res.status(200).json({ catUrl: randomCat[0].url });
}
