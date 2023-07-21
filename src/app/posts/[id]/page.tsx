import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

interface PostProps {
  _id: string;
  title: string;
  content: string;
}

interface PostDetailProps {
  params: {
    id: string;
  };
}

export default async function PostDetail(props: PostDetailProps) {
  const db = (await connectDB).db("forum");
  const result = (await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) })) as unknown as PostProps;

  console.log(props);
  console.log(result);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
