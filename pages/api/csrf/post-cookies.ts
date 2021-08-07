import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status?: "success" | "fail";
  cookies: string[][];
  body: object;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body ? JSON.parse(req.body) : {};
  const headers = req.headers;

  const parsedCookies = headers.cookie
    ?.split("; ")
    .map((cookie) => cookie.split("="));

  if (parsedCookies || !!body) {
    console.log(body);
    console.log(parsedCookies);

    return res.status(200).json({
      status: "success",
      cookies: parsedCookies ?? [],
      ...body,
    });
  }

  return res.status(500).json({ status: "fail", cookies: [], body: {} });
}
