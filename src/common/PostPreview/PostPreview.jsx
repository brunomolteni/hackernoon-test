import React from "react";
import formatDate from "../../util/formatDate";
import Profile from "../Profile";
import Tag from "../Tag";
import "./PostPreview.scss";

const PostPreview = ({ post, className }) => {
  const isSponsored = !post.id;
  const classes = `post-preview ${className || ""}`;
  return isSponsored ? (
    <div className={classes}>
      <a href={post.link} className="post-preview__title --unstyled">
        <h5>{post.text}</h5>
      </a>
      <a href={post.link} className="post-preview__image --unstyled">
        <img
          src={post.image}
          alt={`Preview for ${post.text}`}
          loading="lazy"
          height="200"
        />
      </a>
      <div className="post-preview__info">
        <a href={post.website}>Visit {post.companyName}</a>
        <Tag>Promoted</Tag>
      </div>
    </div>
  ) : (
    <div className={classes}>
      <a
        href={`https://hackernoon.com/${post.slug}`}
        className="post-preview__title --unstyled"
      >
        <h5>{post.title}</h5>
      </a>
      <a
        href={`https://hackernoon.com/${post.slug}`}
        className="post-preview__image --unstyled"
      >
        <img
          src={post.mainImage}
          alt={`Preview for ${post.title}`}
          loading="lazy"
          height="200"
        />
      </a>
      <div className="post-preview__info">
        <Profile profile={post.profile} vertical={false} />
        <p>
          {post.estimatedTime && (
            <span>
              {post.estimatedTime} Min.
              <br />
            </span>
          )}
          {formatDate(post.publishedAt)}
        </p>
      </div>
    </div>
  );
};
PostPreview.displayName = "PostPreview";

export default PostPreview;
