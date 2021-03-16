import React from "react";

const Post = ({ data }) => (
  <main>
    <h1>{data.title} </h1>
    <div dangerouslySetInnerHTML={{ __html: data.markup }}></div>
  </main>
);

export default Post;
