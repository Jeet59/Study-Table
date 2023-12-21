import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Navigate = useNavigate();
  async function signup() {
    if (password === confirmPassword) {
      //const response = await fetch("http://localhost:3001/register", {
      //  method: "POST",
      //  headers: {
      //    "Content-Type": "application/json",
      //  },
      //  body: JSON.stringify({ username: username, password: password }),
      //});
      //if (response.ok) {
      Navigate("/");
    }
  }

  return (
    <div className="register-page">
      <div className="login-container">
        <h1>Register</h1>
        <form onSubmit={signup}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(ev) => setConfirmPassword(ev.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <Link to="/">Already a User?Go to Login</Link>
      </div>
      <div className="banner">
        <h2>Everything has a first time</h2>
        <h2>Its never too late ;)</h2>
      </div>
    </div>
  );
}
