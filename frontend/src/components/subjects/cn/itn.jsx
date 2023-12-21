import PdfViewer from "../pdfviewer";
import YouTubePlayer from "../youtubeplayer";
import samplepdf from "../samplepdf.pdf";
import { Link } from "react-router-dom";

export default function Itn() {
  //const pdfPath =  "https://drive.google.com/drive/folders/19yKYMzMSV_82pW5YbIz_xHSv9Nc7PeXk?usp=drive_link";
  const pdfPath = "https://www.africau.edu/images/default/sample.pdf";
  const videoId = "IPvYjXCsTg8";
  const playlist = ["m8eNwVel5xI", "ly8ikWtAY7s", "EBTP0mpCGBM"];

  return (
    <div className="module-container">
      <div className="module-xyz">
        <div className="pdf-container">
          <PdfViewer samplepdf={samplepdf} />
        </div>
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
