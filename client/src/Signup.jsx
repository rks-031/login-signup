import React, { useState } from "react";
import "./css files/Login-SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!confirmPassword) {
      console.log("Please confirm your password");
      return;
    }

    axios
      .post("http://localhost:3000/register", {
        name,
        email,
        phoneNumber,
        password,
        confirmPassword,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="full-screen-container">
      <div className="login-container" id="loginContainer">
        <h1 className="login-title">Sign Up</h1>
        <form className="form my-4" id="signupForm" onSubmit={handleSubmit}>
          {/* Signup form content */}
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter phone number"
              autoComplete="off"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="createPassword">Create Password</label>
            <input
              type="password"
              name="createPassword"
              id="createPassword"
              placeholder="Enter Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              autoComplete="off"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>

        <p>Already a user?</p>
        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
