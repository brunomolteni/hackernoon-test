import React, { useEffect, useRef } from "react";
import "./Post.scss";

import modifyGistEmbed from "../util/modifyGistEmbed";
import Profile from "../common/Profile";
import Reactions from "../common/Reactions";

const Post = ({ data }) => {
  const modifiedMarkup = modifyGistEmbed(data.markup);
  const formattedDate = new Date(data.publishedAt * 1000).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <main className="post">
      <h1 className="post__title">{data.title} </h1>
      <div className="post__info">
        <p>
          {formattedDate}.{" "}
          <small>Estimated Time: {data.estimatedTime} Minutes</small>
        </p>
        <Reactions
          reactions={data.reactions.storyReactions}
          total={data.reactions.total}
        />
      </div>
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
      <Reactions
        className="post__reactions"
        reactions={data.reactions.storyReactions}
        total={data.reactions.total}
      />
    </main>
  );
};
Post.displayName = "Post";

export default Post;
