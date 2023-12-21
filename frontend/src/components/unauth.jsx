import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function UnAuth() {
  const { setAuthStatus, setUser } = useContext(AuthContext);
  useEffect(() => {
    setAuthStatus(false);
    setUser(null);
  });
  return (
    <div>
      <h1>You are unauthorized to access this website, Kindly log in again</h1>
      <Link to={"/"}>Back to Login</Link>
    </div>
  );
}
