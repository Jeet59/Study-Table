import React from "react";

export default function YouTubePlayer({ videoId }) {
  return (
    <div className="youtube-player">
      <iframe
        title="YouTube Video"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
