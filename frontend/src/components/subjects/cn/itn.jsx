import YouTubePlayer from "../youtubeplayer";
import { Link } from "react-router-dom";

export default function Itn() {
  const videoId = "IPvYjXCsTg8";
  const playlist = ["m8eNwVel5xI", "ly8ikWtAY7s", "EBTP0mpCGBM"];

  return (
    <div className="module-container">
      <div className="module-xyz">
        <div className="youtube-container">
          <YouTubePlayer videoId={videoId} playlist={playlist} />
        </div>
      </div>
      <div>
        <Link to="/home/cn" className="back-button">
          Back
        </Link>
      </div>
    </div>
  );
}
