import { Link } from "react-router-dom";

export default function Ai() {
  return (
    <div className="subject-modules-container">
      <h1 className="header">Artificial Intelligence Modules</h1>
      <div className="module-boxes">
        <Link to="/home/itn" className="module-box">
          Introduction to AI
        </Link>
        <Link to="/home/itn" className="module-box">
          Intelligent Agent
        </Link>
        <Link to="/home/itn" className="module-box">
          SOlving Problems by searching
        </Link>
        <Link to="/home/itn" className="module-box">
          Knowledge And Reasoning
        </Link>
        <Link to="/home/itn" className="module-box">
          Reasoning under Uncertainity
        </Link>
        <Link to="/home/itn" className="module-box">
          Planning and Learning
        </Link>
      </div>
    </div>
  );
}
