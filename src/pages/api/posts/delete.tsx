import { DeleteProps, deletePost } from "@/util/repository";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const deleteData = req.body as string;
  if (req.method === "DELETE") {
    await deletePost(deleteData);
    return res.status(200).json({ text: "OK" });
  }
}
