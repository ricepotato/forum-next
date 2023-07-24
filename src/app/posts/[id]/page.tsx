import { getPostById } from "@/util/repository";
import Link from "next/link";

interface PostDetailProps {
  params: {
    id: string;
  };
}

export default async function PostDetail(props: PostDetailProps) {
  const post = await getPostById(props.params.id);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
      <div>
        <Link href={`/posts/${props.params.id}/edit`}>수정</Link>
      </div>
    </div>
  );
}
