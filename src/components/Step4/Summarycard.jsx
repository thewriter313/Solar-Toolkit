import React from "react";
import "./Summarycard.css";

const Summarycard = ({ title, value, unit }) => {
    return (
        <div className="flexrow summaryBox">
            <div className="summaryTitle">
                <h3>{title}</h3>
            </div>
            <div className="flexcolumn summaryDetail">
                <h4>{value} </h4> <h5>{unit}</h5>
            </div>
        </div>
    );
};

export default Summarycard;
