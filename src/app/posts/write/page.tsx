export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/posts" method="POST">
        <div>
          <label htmlFor="title">글제목</label>
          <input
            id="title"
            type="text"
            name="title"
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
          ></textarea>
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
