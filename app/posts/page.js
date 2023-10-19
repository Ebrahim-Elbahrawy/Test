import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Post",
};
async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const post = await response.json();

  const postsJSX = post.map((post) => {
    return (
      <Link
        key={post.id}
        href={`/posts/${post.id}`}
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            backgroundColor: "#ddd",
            padding: "10px",
            borderRadius: "15px",
            marginTop: "10px",
            color: "black",
          }}
        >
          <h1>{post.title} ....</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });
  return <div>{postsJSX}</div>;
}

export default PostsPage;
