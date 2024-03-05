import { Link } from "react-router-dom";

export default function Dwm() {
  return (
    <div className="subject-modules-container">
      <h1 className="header">Data Web Mining Modules</h1>
      <div className="module-boxes">
        <Link to="/home/itn" className="module-box">
          Data Warehouse and OLAP
        </Link>
        <Link to="/home/itn" className="module-box">
          Introduction to Data mining
        </Link>
        <Link to="/home/itn" className="module-box">
          CLassification
        </Link>
        <Link to="/home/itn" className="module-box">
          CLustering
        </Link>
        <Link to="/home/itn" className="module-box">
          Frequent Patterns
        </Link>
        <Link to="/home/itn" className="module-box">
          Web Mining
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
