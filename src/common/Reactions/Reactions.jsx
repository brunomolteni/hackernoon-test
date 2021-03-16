import React from "react";
import "./Reactions.scss";

const Reactions = ({ reactions, total, className }) => {
  const topReaction = Math.max(...Object.values(reactions));
  return (
    <div className={`reactions ${className || ""}`}>
      {total}
      {["heart", "light", "boat", "money"].map((emoji) => (
        <img
          key={emoji}
          src={`img/${emoji}.png`}
          alt={`React to this story with ${emoji}`}
          loading="lazy"
          className={
            reactions[emoji] === topReaction ? "reactions__highlight" : ""
          }
          title={`${reactions[emoji]} people reacted with ${emoji}`}
        />
      ))}
    </div>
  );
};

export default Reactions;
