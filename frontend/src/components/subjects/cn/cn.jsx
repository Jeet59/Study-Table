import { Link } from "react-router-dom";

export default function Cn() {
  return (
    <div className="subject-modules-container">
      <h1 className="header">Computer Network Modules</h1>
      <div className="module-boxes">
        <Link to="/home/itn" className="module-box">
          Introduction to Networks
        </Link>
        <Link to="/home/itn" className="module-box">
          Physical and Data Link Layer
        </Link>
        <Link to="/home/itn" className="module-box">
          Network Layer
        </Link>
        <Link to="/home/itn" className="module-box">
          Transport Layer and Application Layer
        </Link>
        <Link to="/home/itn" className="module-box">
          Enterprise Network Design
        </Link>
        <Link to="/home/itn" className="module-box">
          Software Defined Network
        </Link>
      </div>
      <div>
        <Link to="/home" className="back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
