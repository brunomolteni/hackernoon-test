import React from "react";
import "./Tag.scss";

const Tag = ({ children }) => {
  return (
    <a className="tag" href={`https://hackernoon.com/tagged/${children}`}>
      #{children}
    </a>
  );
};
Tag.displayName = "Tag";

export default Tag;
