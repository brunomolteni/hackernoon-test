import React from "react";
import Tag from "../../common/Tag";

export default ({ tags }) => {
  return (
    <div className="post__tags">
      <h4 className="post__tags-title">Tags</h4>
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  );
};
