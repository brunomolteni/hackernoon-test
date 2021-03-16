import React from "react";
import "./Profile.scss";

const SocialLink = ({ provider, user }) => (
  <a href={`https://${provider}.com/${user}`}>
    <img
      src={`img/${provider}-new.png`}
      width="20"
      height="20"
      loading="lazy"
    />
  </a>
);

const Profile = ({ profile, showBio, showSocialLinks, className }) => {
  const profileUrl = `https://hackernoon.com/u/${profile.handle}`;
  return (
    <div className={`profile ${className || ""}`}>
      <a href={profileUrl}>
        <img
          className="profile__avatar"
          src={profile.avatar}
          alt={`${profile.displayName}'s Profile Picture`}
          width="50"
          height="50"
          loading="lazy"
        ></img>
      </a>

      <h3>
        <a className="profile__handle" href={profileUrl}>
          @{profile.handle}
        </a>
        <p className="profile__name">{profile.displayName}</p>
      </h3>

      {showBio && <p className="profile__bio">{profile.bio} </p>}

      {showSocialLinks && (
        <div className="profile__social">
          {["github", "twitter"].map((provider) => (
            <SocialLink
              provider={provider}
              user={profile[provider]}
              key={provider}
            />
          ))}
        </div>
      )}
    </div>
  );
};
Profile.displayName = "Profile";

export default Profile;