import React from "react";
import Reactions from "../../common/Reactions";

export default ({ publishedAt, estimatedTime, reactions }) => {
  const formattedDate = new Date(publishedAt * 1000).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="post__info">
      <p>
        {formattedDate}. <small>Estimated Time: {estimatedTime} Minutes</small>
      </p>
      <Reactions reactions={reactions.storyReactions} total={reactions.total} />
    </div>
  );
};
