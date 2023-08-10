// AddedToBagMessage.js
import React from "react";
import "./singleproduct.css";

const AddedToBagMessage = ({ onClose, data }) => {
  return (
    <div className="added-to-bag-message">
      <img className="imag1" src={data.images[0]} alt="" />
      <p>Item added to bag</p>
      {/* <button onClick={onClose}>Close</button> */}
    </div>
  );
};

export default AddedToBagMessage;
