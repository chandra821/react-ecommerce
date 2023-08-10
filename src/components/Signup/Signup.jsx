import React, { useState } from "react";
import "./Signup.css";
import Layout from "../shared/Layout";
import profile from "../../image/a.png";
import email from "../../image/email.jpg";
import pass from "../../image/pass.png";
import Profile from "../../image/profile.jpg";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log("Form data:", formData);
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
                <img src={Profile} alt="email" className="email" />
                <input
                  className="name"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <img src={Profile} alt="email" className="email" />
                <input
                  className="name"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <img src={email} alt="email" className="email" />
                <input
                  className="name"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <img src={pass} alt="pass" className="email" />
                <input
                  className="name"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button className="btn" type="submit">
                Sign Up
              </button>
            </form>
            <p className="link">
              Already have Account?
              <a href="/login"> Login</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
