// import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import profileimg from "../../image/profile.jpg";
import "./profileIcon.style.scss";
const ProfileIcon = ({ history }) => {
  return (
    <li className="cart-container" onClick={() => history.push("/profile")}>
      <img src={profileimg} alt="shopping-cart-icon" />
    </li>
  );
};

export default withRouter(ProfileIcon);
