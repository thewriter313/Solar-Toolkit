import React from "react";
import "./card.css";

const card = ({ title, imageUrl, text, price, supplier, logo }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="image1" />
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="supplier">
        <h4>{supplier}</h4>
        <img src={logo} alt="logo1" style={{ width: "5em" }} />
      </div>
      <h3 className="price">{price} Ksh</h3>
    </div>
  );
};

export default card;
