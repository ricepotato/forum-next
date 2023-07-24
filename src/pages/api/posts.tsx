import { deletePost, insertPost, PostProps } from "@/util/repository";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postData = req.body as PostProps;
  if (req.method === "POST") {
    const resultId = await insertPost(postData);
    return res.redirect(302, `/posts/${resultId}`);
  } else if (req.method === "DELETE") {
    const result = await deletePost(postData._id);
    return res.status(200);
  } else {
    return res.status(200).json({ text: "" });
  }
}
