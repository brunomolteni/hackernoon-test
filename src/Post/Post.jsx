import React from "react";
import "./Post.scss";

import Profile from "../common/Profile";

const Post = ({ data }) => (
  <main className="post">
    <h1 className="post__title">{data.title} </h1>
    <img src={data.mainImage} alt={`Main image for article "${data.title}"`} />
    <Profile
      className="post__profile"
      profile={data.profile}
      showBio
      showSocialLinks
    />
    <article
      className="post__content"
      dangerouslySetInnerHTML={{ __html: data.markup }}
    ></article>
  </main>
);
Post.displayName = "Post";

export default Post;
