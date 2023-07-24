import { insertPost, PostProps, updatePost } from "@/util/repository";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postData = req.body as PostProps;
  if (req.method === "POST") {
    await updatePost(postData);
    return res.redirect(302, `/posts/${postData._id}`);
  }
}
