import React from "react";
import Link from "next/link";
async function PostsId(props) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${props.params.id}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return <div>{post.body}</div>;
}

export default PostsId;
