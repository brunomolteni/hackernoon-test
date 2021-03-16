import React from "react";
import "./Post.scss";

const Post = ({ data }) => (
  <main className="post">
    <h1 className="post__title">{data.title} </h1>
    <div
      className="post__content"
      dangerouslySetInnerHTML={{ __html: data.markup }}
    ></div>
  </main>
);

export default Post;
