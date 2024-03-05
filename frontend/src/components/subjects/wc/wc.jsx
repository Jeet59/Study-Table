import { Link } from "react-router-dom";

export default function Wc() {
  return (
    <div className="subject-modules-container">
      <h1 className="header">Web Computing Modules</h1>
      <div className="module-boxes">
        <Link to="/home/itn" className="module-box">
          Web Programming Fundamentals
        </Link>
        <Link to="/home/itn" className="module-box">
          Javascript
        </Link>
        <Link to="/home/itn" className="module-box">
          React Fundamentals
        </Link>
        <Link to="/home/itn" className="module-box">
          NodeJS
        </Link>
        <Link to="/home/itn" className="module-box">
          Express
        </Link>
        <Link to="/home/itn" className="module-box">
          Advanced React
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
