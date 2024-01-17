import React, { useState } from "react";
import "./css files/Login-SignUp.css";
// import Login from "./Login";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [confirmPassword, setConfirmPassword] = useState();
  // const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="full-screen-container">
      <div className="login-container" id="loginContainer">
        <h1 className="login-title">Login</h1>
        <form className="form" id="signupForm" onSubmit={handleSubmit}>
          {/* Signup form content */}

          <div className="input-group">
            <label htmlFor="signupEmail">Email</label>
            <input
              type="email"
              name="signupEmail"
              id="signupEmail"
              placeholder="Enter e-mail"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="createPassword">Enter Password</label>
            <input
              type="password"
              name="createPassword"
              id="createPassword"
              placeholder="Enter Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {/*<Link to={Login} className="login-message">
            Already have an account? Sign in
  </Link>*/}

        <p>Not Registered?</p>
        <Link to="/register" className="login-button">
          Sign Up
        </Link>

        {/*} <a href="login.html" className="login-message">
            Already have an account? Sign in
  </a>*/}
      </div>
    </div>
  );
};

export default Login;
