import React from "react";
import "./Tag.scss";

export default ({ children }) => {
  return (
    <a className="tag" href={`https://hackernoon.com/tagged/${children}`}>
      #{children}
    </a>
  );
};
