import { getPosts } from "@/util/repository";
import PostItem from "./PostItem";

export const dynamic = "force-dynamic";

export default async function List() {
  const results = await getPosts();
  return (
    <div className="list-bg">
      {results.map((data) => (
        <PostItem key={data._id?.toString()} data={data} />
      ))}
    </div>
  );
}
