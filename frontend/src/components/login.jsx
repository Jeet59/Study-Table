import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const { setAuthStatus, setUser } = useContext(AuthContext);
  async function loginreq(ev) {
    if (username != "" && password != "") Navigate("/home");
  }
  //ev.preventDefault();
  //const response = await fetch("https://localhost:3001/login", {
  //  method: "POST",
  //  headers: {
  //    "Content-Type": "application/json",
  //  },
  //  credentials: "include",
  //  body: JSON.stringify({ username: username, password: password }),
  //});
  //if (response.ok) {
  //  response.json().then(async (data) => {
  //    await setUser(username);
  //    await setAuthStatus(true);
  //  Navigate("/home/studytable/cn/modules");
  // });
  //} else {
  //  console.log("error");
  //}
  //}

  return (
    <div className="login-page">
      <div className="banner">
        <h1>Welcome to the Table :)</h1>
      </div>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={loginreq}>
          <input
            type="text"
            placeholder="Username"
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <Link to="/register">New User?Click Here</Link>
      </div>
    </div>
  );
}
