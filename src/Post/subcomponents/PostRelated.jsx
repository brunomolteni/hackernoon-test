import React from "react";
import PostPreview from "../../common/PostPreview";
import Reactions from "../../common/Reactions";

export default ({ relatedStories }) => (
  <div className="post__related">
    <h4 className="post__related-title">Related</h4>
    {relatedStories.map((post) => (
      <PostPreview post={post} key={post.id || post.text} />
    ))}
  </div>
);
