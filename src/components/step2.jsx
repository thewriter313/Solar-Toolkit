import React from "react";
import "./step2.css";
import GoToTop from "../components/GoToTop";
import Clouds from "../Assets/clouds.png";
import CloudsInv from "../Assets/cloudsInv.png";
import Sun from "../Assets/sun.png";
import Coins from "../Assets/coins.png";
import CoinsInv from "../Assets/coinsInv.png";
import Clock from "../Assets/clock.png";

const qndoaColors = ["#87CEEB", "#62BFE4", "#2EAADC", "#1E85AE"];
const qnCostColors = ["#FE8454", "#FEA885", "#88A27C", "#738F66"];
const qnCostOptions = ["Cheapest", "Cheap", "Reliable", "Very Reliable"];

const Step2 = ({ setStep, qnDetails, setqnDetails }) => {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setqnDetails((values) => {
      return { ...values, [name]: value };
    });
  };

  return (
    <div className="qnContainer">
      <h1>
        <span style={{ color: "var(--color3)" }}>Design </span>Questions
      </h1>
      <form id="step2form" className="qnform" onSubmit={() => setStep(3)}>
        {/* 1st Row */}
        <div
          style={{
            backgroundColor: qndoaColors[qnDetails.doa],
            transition: "1s",
          }}
          className="qnrow"
        >
          <div className="qnleft">
            <label>Days without Sunshine</label>
            <div className="slidecontainer">
              <input
                type="range"
                min={0}
                max={3}
                name="doa"
                className="slider"
                value={qnDetails.doa}
                onChange={handleChange}
              />
              <h3>{qnDetails.doa}</h3>
            </div>
            <p>The number of consecutive days without any sunshine.</p>
          </div>
          <div className="qnright">
            <div className="sky">
              <img
                style={{
                  transform: `translateX(${qnDetails.doa * 40}px)`,
                  scale: `${qnDetails.doa / 10 + 1}`,
                  transition: "1s",
                }}
                src={Clouds}
                className="leftclouds"
                alt="Cloud"
              />

              <img
                style={{
                  transform: `rotate(${qnDetails.doa * 90}deg)`,
                  transition: "1s",
                }}
                src={Sun}
                alt="Sun"
                className="sun"
              />
              <img
                style={{
                  transform: `translateX(${qnDetails.doa * -40}px)`,
                  scale: `${qnDetails.doa / 10 + 1}`,
                  transition: "1s",
                }}
                src={CloudsInv}
                className="rightclouds"
                alt="Cloud"
              />
            </div>
          </div>
        </div>
        {/* 2nd Row */}
        <div
          style={{
            backgroundColor: qnCostColors[qnDetails.cost],
            transition: "1s",
          }}
          className="qnrow"
        >
          <div className="qnleft">
            <label>Cost and Reliability</label>
            <div className="slidecontainer">
              <input
                type="range"
                min={0}
                max={3}
                name="cost"
                className="slider"
                value={qnDetails.cost}
                onChange={handleChange}
              />
              <h3>{qnCostOptions[qnDetails.cost]}</h3>
            </div>
            <p>Choose between a reliable system or a cheap one.</p>
          </div>
          <div className="qnright">
            <div className="cost">
              <img
                style={{
                  opacity: `${(80 / 3) * qnDetails.cost + 10}%`,
                  transition: "1s",
                }}
                src={Coins}
                className="leftcoins"
                alt="coins"
              />
              <img
                style={{
                  opacity: `${(-80 / 3) * qnDetails.cost + 90}%`,
                  transition: "1s",
                }}
                src={Clock}
                alt="clock"
                className="clock"
              />
              <img
                style={{
                  opacity: `${(80 / 3) * qnDetails.cost + 10}%`,
                  transition: "1s",
                }}
                src={CoinsInv}
                className="rightcoins"
                alt="coins"
              />
            </div>
          </div>
        </div>
      </form>
      <GoToTop />
    </div>
  );
};

export default Step2;
