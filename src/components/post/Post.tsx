import React from "react";

import PostClasses from "./Post.module.css";
import { PostData } from "./Post.type";

export default function Post(props: { data: PostData }) {
  const { data } = props;

  return (
    <div className={`${PostClasses.post} mb-5`}>
      <div className={`${PostClasses.header} pl-5`}>
        <h1>
          {/*
           1. What should I do here?
           2. How I should handle the same action in multiple place?
           3. Should I use Slug or id?
           4. How can I deal with SSR and slug?
           5. Should I add postUrl in the PostData interface?
           */}
          <a href="" className={PostClasses.postHeaderLink}>
            {data.title}
          </a>
        </h1>
      </div>
      <div className={`${PostClasses.postDate} pl-5`}>
        <p>Written at {data.createdAt.toDateString()}</p>
        <p>Updated at {data.updatedAt.toDateString()}</p>
      </div>
      <div className={`${PostClasses.postDescription} mb-5`}>
        <p className="p-5">{data.description}</p>
      </div>
      <div className={`${PostClasses.postFooter} pt-10`}>
        <a href="#" className={`${PostClasses.postLink} mx-5`}>
          Read this post
        </a>
      </div>
    </div>
  );
}
