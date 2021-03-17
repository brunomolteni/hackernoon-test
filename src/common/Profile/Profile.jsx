import React from "react";
import "./Profile.scss";

const SocialLink = ({ provider, user }) => (
  <a href={`https://${provider}.com/${user}`} className="--unstyled">
    <img
      src={`img/${provider}-new.png`}
      width="20"
      height="20"
      loading="lazy"
    />
  </a>
);

const Profile = ({
  profile,
  showBio,
  showSocialLinks,
  className,
  vertical = true,
}) => {
  const profileUrl = `https://hackernoon.com/u/${profile.handle}`;
  return (
    <div
      className={`profile ${className || ""} ${vertical ? "" : "--horizontal"}`}
    >
      <a href={profileUrl} className="profile__avatar --unstyled">
        <img
          src={profile.avatar}
          alt={`${profile.displayName}'s Profile Picture`}
          width="50"
          height="50"
          loading="lazy"
        ></img>
      </a>

      <h3 className="profile__name">
        <a className="profile__handle" href={profileUrl}>
          @{profile.handle}
        </a>
        <small>{profile.displayName}</small>
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
