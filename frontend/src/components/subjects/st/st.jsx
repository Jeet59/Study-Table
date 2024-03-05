import { Link } from "react-router-dom";

export default function St() {
  return (
    <div className="subject-modules-container">
      <h1 className="header">Stats for AI/DS Modules</h1>
      <div className="module-boxes">
        <Link to="/home/itn" className="module-box">
          Exploratory Data Analysis
        </Link>
        <Link to="/home/itn" className="module-box">
          Data and sampling distribution
        </Link>
        <Link to="/home/itn" className="module-box">
          Statistical experiment
        </Link>
        <Link to="/home/itn" className="module-box">
          Summarizing Data
        </Link>
        <Link to="/home/itn" className="module-box">
          Analysis of Variance
        </Link>
        <Link to="/home/itn" className="module-box">
          Linear Least Squares
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
