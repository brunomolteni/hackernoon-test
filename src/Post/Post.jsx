import React, { useEffect, useRef } from "react";
import "./Post.scss";

import modifyGistEmbed from "../util/modifyGistEmbed";
import Profile from "../common/Profile";

const Post = ({ data }) => {
  const modifiedMarkup = modifyGistEmbed(data.markup);

  return (
    <main className="post">
      <h1 className="post__title">{data.title} </h1>
      <img
        className="post__image"
        src={data.mainImage}
        alt={`Main image for article "${data.title}"`}
      />
      <Profile
        className="post__profile"
        profile={data.profile}
        showBio
        showSocialLinks
      />
      <article
        className="post__content"
        dangerouslySetInnerHTML={{ __html: modifiedMarkup }}
      ></article>
    </main>
  );
};
Post.displayName = "Post";

export default Post;
