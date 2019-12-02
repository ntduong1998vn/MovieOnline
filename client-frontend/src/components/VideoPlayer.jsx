import React from "react";

const VideoPlayer = () => {

    
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        paddingBottom: "56.25%"
      }}
    >
      <iframe
        src="https://cdn.jwplayer.com/players/5h7bQYQZ-T0wXAmi0.html"
        width="100%"
        height="100%"
        frameBorder={0}
        scrolling="auto"
        title="Btp Sb L1 U06 002-sub-text"
        style={{ position: "absolute" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};


export default VideoPlayer;