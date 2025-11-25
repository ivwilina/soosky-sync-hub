import React, { useState, type ChangeEvent } from "react";
import "../styles/login.css";
import { useAuth } from "../../../contexts/auth/useAuth";
import { useNavigate } from "react-router-dom";

/*-----------------------------------------------------------------------------------------*/

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  if (isAuthenticated) {
    navigate("/dashboard", { replace: true });
    return null;
  }

  const handleLogin = (e: React.FormEvent) => {
    console.log("nihaoma")
    e.preventDefault();

    if (username === "admin@email.com" && password === "password") {
      login("admin");
      navigate("/dashboard", { replace: true });
    } else if (username === "employee@email.com" && password === "password") {
      login("employee");
      navigate("/dashboard", { replace: true });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="login-wrapper">
        <div className="login-container">
          <h1>soosky sync hub</h1>
          <div className="login-input-container">
            <span>email</span>
            <input
              type="email"
              value={username}
              id="login-email"
              placeholder="example@email.com"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="login-input-container">
            <span>password</span>
            <input
              type="password"
              value={password}
              id="login-password"
              placeholder="your password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="login-submit-container">
            <button type="submit">sign in</button>
            <span>forget password? contact hr for support</span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
