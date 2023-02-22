import React from "react";
import "./teamcard.css";

const Teamcard = ({ image, title, name, occupation }) => {
    return (
        <div className="teamcard-container">
            <div className="teamimage-container">
                <img src={image} alt="image1" />
            </div>
            <div className="teamcard-title">{title}</div>
            <div className="teamcard-name">{name}</div>
            <div className="occupation">{occupation}</div>
        </div>
    );
};

export default Teamcard;
