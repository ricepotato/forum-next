import { getPostById } from "@/util/repository";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { cache } from "react";

interface PostDetailProps {
  params: {
    id: string;
  };
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// https://nextjs.org/docs/app/building-your-application/data-fetching/caching
const cachedGetPostById = cache(getPostById);

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const post = await cachedGetPostById(id);
  return {
    title: post.title,
    description: "Blockchain Information Correlation Scanner",
    themeColor: "#000000",
    viewport: "width=device-width, initial-scale=1",
    openGraph: {
      title: "BICScan",
      description: "Blockchain Information Correlation Scanner",
      url: "https://bicscan.io",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: "BICScan",
        },
      ],
    },
  };
}

export default async function PostDetail(props: PostDetailProps) {
  const post = await cachedGetPostById(props.params.id);

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
