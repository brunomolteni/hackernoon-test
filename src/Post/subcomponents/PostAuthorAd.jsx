import React from "react";
import Profile from "../../common/Profile";

export default ({ profile }) => {
  return (
    <div className="post__author-ad">
      <Profile profile={profile} />
      <a href={profile.adLink}>{profile.adText}</a>
    </div>
  );
};
