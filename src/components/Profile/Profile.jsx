import React, { useState } from "react";
import "./profile.css";
import Layout from "../shared/Layout";
// import profile from "../../image/a.png";
const Profile = () => {
  const value = JSON.parse(localStorage.getItem("persist:root"));
  console.log(value);
  const value1 = JSON.parse(value.auth);
  console.log(value1);
  const value2 = value1.user;
  console.log(value2);

  return (
    <Layout>
      <div className="main2">
        <div className="sub-main2">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={value2.image} alt="profile" className="profile" />
              </div>
            </div>
            <table>
              <tr>
                <th>Firstname</th>
                <td>{value2.firstName}</td>
              </tr>
              <tr>
                <th>Lastname</th>
                <td>{value2.lastName}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{value2.email}</td>
              </tr>
              <tr>
                <th>Username</th>
                <td>{value2.username}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
