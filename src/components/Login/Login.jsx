// components/Login.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../../actions/authActions";

import "./login.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Layout from "./../shared/Layout";

import profile from "../../image/a.png";
import email from "../../image/email.jpg";
import pass from "../../image/pass.png";

const Login = ({ loginSuccess, setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform API call here, passing username and password
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const userData = await response.json();

      // Assuming the API returns the user data upon successful login
      if (response.ok) {
        loginSuccess(userData);
        console.log("Login Successfull");
        navigate.push("/");
      } else {
        // Handle failed login
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    setIsAuthenticated(true);
  };

  return (
    <Layout>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <img src={email} alt="email" className="email" />
                <input
                  className="name"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  className="name"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="login-button">
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
            </form>
            <p className="link">
              <Link to="#">Forgot password ?</Link> Or
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default connect(null, { loginSuccess })(Login);
