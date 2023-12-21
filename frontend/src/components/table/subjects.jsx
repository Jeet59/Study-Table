import { Link } from "react-router-dom";

export default function Subjects() {
  return (
    <div className="subjects-container">
      <h1 className="header">What Do We Study Today?</h1>
      <div className="subject-boxes">
        <Link to="cn" className="subject-link">
          <div className="subject">Computer Networks</div>
        </Link>
        <Link to="ai" className="subject-link">
          <div className="subject">Artificial Intelligence</div>
        </Link>
        <Link to="wc" className="subject-link">
          <div className="subject">Web Computing</div>
        </Link>
        <Link to="dwm" className="subject-link">
          <div className="subject">Data Web Mining</div>
        </Link>
        <Link to="st" className="subject-link">
          <div className="subject">Stats for AI/DS</div>
        </Link>
      </div>
    </div>

    //<div>
    //  <h1>What do we study today!</h1>
    //  <div>
    //    <Link to="cn">Computer Networks</Link>
    //    <Link to="ai">Artifical Intelligence</Link>
    //    <Link to="wc">Web Computing</Link>
    //    <Link to="dwm">Data Web Mining</Link>
    //    <Link to="st">Stats for AI/DS</Link>
    //  </div>
    //</div>
  );
}
