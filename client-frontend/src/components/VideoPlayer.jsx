import React from "react";

const VideoPlayer = ({ link }) => {
  return (
    <iframe
      src={link}
      width={640}
      height={360}
      frameBorder={0}
      scrolling="auto"
      title="Unit 12 – Real Life Exchange – Macmillan Education Everywhere-sub-text"
      allowFullScreen
    />
  );
};

export default VideoPlayer;
