import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";

const filePath = path.resolve(".", "public/cat.jpg");
const imageBuffer = fs.readFileSync(filePath);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.headers);

  res.setHeader("Content-Type", "image/jpg");
  res.send(imageBuffer);
}
