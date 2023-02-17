import React from "react";
import "./step2.css";
import GoToTop from "../components/GoToTop";
import Clouds from "../Assets/clouds.png";
import CloudsInv from "../Assets/cloudsInv.png";
import Sun from "../Assets/sun.png";
import Coins from "../Assets/coins.png";
import CoinsInv from "../Assets/coinsInv.png";
import Clock from "../Assets/clock.png";
import GridTied from "../Assets/Grid-tied.png";
import OffGrid from "../Assets/Offgrid-System.png";
import PlainHouse from "../Assets/House.png";
import HouseTree from "../Assets/HousewithTrees.png";
import Expand from "../Assets/Expand.png";
import nonExpand from "../Assets/Unexpand.png";
import Large from "../Assets/large.png";
import Medium from "../Assets/rural.png";
import Small from "../Assets/small.png";
import Battery from "../Assets/Battery.jpg"
import ThinFilm from "../Assets/thinfilm.png";
import Polycrystalline from "../Assets/polycrystalline.png";

// const qndoaColors = ["#87CEEB", "#62BFE4", "#2EAADC", "#1E85AE"];
// const qnCostColors = ["#FE8454", "#FEA885", "#88A27C", "#738F66"];
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
      <form
        id="step2form"
        className="qnform"
        onSubmit={() => setStep(3)}
        action="./action.php"
      >
        {/* 1st Row */}
        <div
          // style={{
          //   backgroundColor: qndoaColors[qnDetails.doa],
          //   transition: "1s",
          // }}
          className="qnrow"
        >
          <div className="qnleft">
            <label>Backup Days</label>
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
              <h3>{qnDetails.doa} Days</h3>
            </div>
            <p>
              How long would you like your solar energy system to power your
              home during a blackout?
            </p>
          </div>
          <div className="qnright">
            <div className="qnrightContainer">
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
        <div className="qnrow">
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
            <p>
              When it comes to choosing a system, are you more interested in
              something that is inexpensive or something that is reliable?
            </p>
          </div>
          <div className="qnright">
            <div className="qnrightContainer">
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
        {/* 3rd Row */}
        <div className="qnrow">
          <div className="qnleft">
            <label>Off-Grid or Grid-Tied</label>
            <select
              name="grid"
              value={qnDetails.grid}
              className="gridselect"
              onChange={handleChange}
            >
              <option value="OffGrid">Off-Grid</option>
              <option value="GridTied">Grid-Tied</option>
            </select>
            <p>
              Do you want a system that is independent from the power grid, or
              one that is connected to it?
            </p>
          </div>
          <div className="qnright">
            <div className="qnrightContainer">
              <img
                className="optionImage"
                src={`${qnDetails.grid}` === "OffGrid" ? OffGrid : GridTied}
                alt="GridImage"
              />
            </div>
          </div>
        </div>
        {/* 4th Row */}
        <div className="qnrow">
          <div className="qnleft">
            <label>Shade</label>
            <select
              name="shade"
              value={qnDetails.shade}
              className="qnleftSelect"
              onChange={handleChange}
            >
              <option value="slight">Slight Shade</option>
              <option value="noshade">No Shade</option>
            </select>
            <p>
              Does your house get any slight shade from 10 am to 4 pm during the
              day?
            </p>
          </div>
          <div className="qnright">
            <div className="qnrightContainer">
              <img
                className="optionImage"
                src={`${qnDetails.shade}` === "slight" ? HouseTree : PlainHouse}
                alt="shadeImage"
              />
            </div>
          </div>
        </div>
        {/* 5th Row */}
        <div className="qnrow">
          <div className="qnleft">
            <label>Expansion</label>
            <select
              name="expand"
              value={qnDetails.expand}
              className="qnleftSelect"
              onChange={handleChange}
            >
              <option value="expandable">Expandable</option>
              <option value="notexpandable">Not Expandable</option>
            </select>
            <p>
              Would you like your solar PV system to be expandable in the
              future?
            </p>
          </div>
          <div className="qnright">
            <div className="qnrightContainer">
              <img
                className="optionImage"
                src={
                  `${qnDetails.expand}` === "expandable" ? Expand : nonExpand
                }
                alt="GridImage"
              />
            </div>
          </div>
        </div>
        {/* 6th Row */}
        <div className="qnrow">
          <div className="qnleft">
            <label>Roof Space</label>
            <div className="slidecontainer">
              <input
                type="number"
                min={0}
                name="space"
                className="qnInputNumber"
                value={qnDetails.space}
                onChange={handleChange}
                required
              />
              <h3>
                m<sup>2</sup>
              </h3>
            </div>
            <p>
              How much roof space do you have available for installing solar PV
              panels?
            </p>
          </div>
          <div className="qnright">
            <div className="qnrightContainer">
              <img
                className="optionImage"
                src={
                  `${qnDetails.space}` >= 0 && `${qnDetails.space}` <= 100
                    ? Small
                    : `${qnDetails.space}` >= 100 && `${qnDetails.space}` <= 500
                    ? Medium
                    : Large
                }
                alt="GridImage"
              />
            </div>
          </div>
        </div>
        {/* 7th Row */}
        <div className="qnrow">
          <div className="qnleft">
            <label>Battery Space</label>
            <select
              name="batteryspace"
              value={qnDetails.batteryspace}
              className="qnleftSelect"
              onChange={handleChange}
            >
              <option value="nobatteryspace">No</option>
              <option value="yesbatteryspace">Yes</option>
            </select>
            <p>
              Do you have sufficient space in your home to store a battery pack
              for your solar energy system?
            </p>
          </div>
          <div className="qnright">
            <div className="qnrightContainer">
              <img className="optionImage" src={Battery} alt="battery" />
            </div>
          </div>
        </div>
        {/* 8th Row */}
        <div className="qnrow">
          <div className="qnleft">
            <label>Visual Appeal</label>
            <select
              name="appeal"
              value={qnDetails.appeal}
              className="qnleftSelect"
              onChange={handleChange}
            >
              <option value="yesappeal">Yes</option>
              <option value="noappeal">No</option>
            </select>
            <p>
              Are you interested in having a solar PV system that not only
              performs well but also looks good?
            </p>
          </div>
          <div className="qnright">
            <div className="qnrightContainer">
              <img
                className="optionImage"
                src={
                  `${qnDetails.appeal}` === "yesappeal"
                    ? ThinFilm
                    : Polycrystalline
                }
                alt="GridImage"
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
