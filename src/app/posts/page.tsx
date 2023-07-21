import Link from "next/link";
import { connectDB } from "@/util/database";

interface PostProps {
  _id: string;
  title: string;
  content: string;
}

export default async function List() {
  const db = (await connectDB).db("forum");
  const result = (await db
    .collection("post")
    .find()
    .toArray()) as unknown as PostProps[];

  return (
    <div className="list-bg">
      {result.map((data) => (
        <div key={data._id} className="list-item">
          <h4>
            <Link href={`/posts/${data._id}`}>{data.title}</Link>
          </h4>
          <p>{data.content}</p>
        </div>
      ))}
    </div>
  );
}
