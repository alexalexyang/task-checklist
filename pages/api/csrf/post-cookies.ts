import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status?: "success" | "fail";
  cookies: string[][];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const headers = req.headers;
  const parsedCookies = headers.cookie
    ?.split("; ")
    .map((cookie) => cookie.split("="));

  if (parsedCookies) {
    return res.status(200).json({ status: "success", cookies: parsedCookies });
  }

  return res.status(500).json({ status: "fail", cookies: [] });
}
