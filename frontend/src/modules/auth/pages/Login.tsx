import React, { useState, type ChangeEvent } from "react";
import "../styles/login.css";
import { useAuth } from "../../../contexts/auth/useAuth";
import { useNavigate } from "react-router-dom";

/*-----------------------------------------------------------------------------------------*/

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if(isAuthenticated) navigate("/dashboard", { replace: true });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
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
              value={email}
              id="login-email"
              placeholder="example@email.com"
              onChange={handleEmailChange}
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
