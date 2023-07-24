"use client";

import { PostProps } from "@/util/repository";
import Link from "next/link";
import React from "react";

interface ItemProps {
  data: PostProps;
}

export default function PostItem({ data }: ItemProps) {
  return (
    <div key={data._id} className="list-item">
      <h4>
        <Link href={`/posts/${data._id}`}>{data.title}</Link>
      </h4>
      <p>{data.content}</p>
      <div>
        <Link href={`/posts/${data._id}/edit`}>수정</Link>
      </div>
      <div>
        <button
          onClick={(e: React.MouseEvent) => {
            fetch("/api/posts/delete", {
              method: "DELETE",
              body: data._id,
            })
              .then((res) => {
                const target = e.target as HTMLElement;
                const parentElement = target.parentElement?.parentElement;
                if (parentElement) {
                  parentElement.style.opacity = "0";
                  setTimeout(() => {
                    parentElement.style.display = "none";
                  }, 300);
                }
              })
              .catch(() => {});
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
