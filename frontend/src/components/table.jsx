import { Outlet } from "react-router-dom";

export default function Table() {
  return (
    <div className="table">
      <div className="tableContent">
        <Outlet />
      </div>
    </div>
  );
}
