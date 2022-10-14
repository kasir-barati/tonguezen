import React from "react";

import PostsClasses from "./Posts.module.css";
import Post from "./post/Post";
import { PostData } from "./post/Post.type";

export default function Posts() {
  const posts: PostData[] = [
    {
      title: "Learn to learn faster",
      slug: "",
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      description: "Some text",
    },
    {
      title: "Learn to learn faster",
      slug: "",
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      description: "Some text",
    },
  ];

  return (
    <div className={`${PostsClasses.posts} mx-5`}>
      {posts.map((post) => (
        <Post data={post}></Post>
      ))}
    </div>
  );
}
