import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="">Table</Link>
      <Link to="/">Logout</Link>
    </div>
  );
}
