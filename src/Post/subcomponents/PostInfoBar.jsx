import React from "react";
import Reactions from "../../common/Reactions";
import formatDate from "../../util/formatDate";

export default ({ publishedAt, estimatedTime, reactions }) => (
  <div className="post__info">
    <p>
      {formatDate(publishedAt)}.
      <small>Estimated Time: {estimatedTime} Minutes</small>
    </p>
    <Reactions reactions={reactions.storyReactions} total={reactions.total} />
  </div>
);
