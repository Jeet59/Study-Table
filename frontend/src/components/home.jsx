import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="home">
      <nav className="nav">
        <Navbar />
      </nav>
      <div className="homeContent">
        <Outlet />
      </div>
    </div>
  );
}
