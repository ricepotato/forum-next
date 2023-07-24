import { getPostById } from "@/util/repository";

interface PostDetailProps {
  params: {
    id: string;
  };
}

export default async function Edit(props: PostDetailProps) {
  const post = await getPostById(props.params.id);
  return (
    <div>
      <h4>글 수정</h4>
      <form action="/api/posts/edit" method="POST">
        <input hidden name="_id" defaultValue={props.params.id}></input>
        <div>
          <label htmlFor="title">글제목</label>
          <input
            id="title"
            type="text"
            name="title"
            defaultValue={post.title}
            className="border border-gray-600"
            placeholder="글제목을 입력하세요."
          ></input>
        </div>
        <div>
          <label htmlFor="content">글내용</label>
          <textarea
            id="content"
            name="content"
            className="border border-gray-600"
            placeholder="글내용"
            defaultValue={post.content}
          ></textarea>
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
