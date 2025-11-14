import React from "react";
import "../styles/login.css";

/*-----------------------------------------------------------------------------------------*/

const Login = () => {
  return (
    <>
      <form action="" className="login-wrapper">
        <div className="login-container">
          <h1>soosky sync hub</h1>
          <div className="login-input-container">
            <span>email</span>
            <input
              type="email"
              name=""
              id="login-email"
              placeholder="example@email.com"
            />
          </div>
          <div className="login-input-container">
            <span>password</span>
            <input
              type="password"
              name=""
              id="login-password"
              placeholder="your password"
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
