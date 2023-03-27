import React from "react";
import "./step2.css";
import GoToTop from "../GoToTop";
import Clouds from "../../Assets/clouds.png";
import CloudsInv from "../../Assets/cloudsInv.png";
import Sun from "../../Assets/sun.png";
import reliable from "../../Assets/reliable.webp";
import savings from "../../Assets/savings.png";
import GridTied from "../../Assets/Grid-tied.webp";
import OffGrid from "../../Assets/Offgrid-System.webp";
import PlainHouse from "../../Assets/House.png";
import HouseTree from "../../Assets/HousewithTrees.png";
import Expand from "../../Assets/Expand.png";
import nonExpand from "../../Assets/Unexpand.png";
import Large from "../../Assets/large.png";
import Medium from "../../Assets/rural.png";
import Small from "../../Assets/small.png";
import Battery from "../../Assets/battery.png";
import Monocrystalline from "../../Assets/monocrystalline.png";
import Polycrystalline from "../../Assets/polycrystalline.png";
import ThinFilm from "../../Assets/thinfilm.png";

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
        <form id="step2form" className="qnContainer" onSubmit={() => setStep(3)}>
            <h1>
                Step 2: <span style={{ color: "var(--color3)" }}>Design </span>Questions
            </h1>
            {/* 1st Row */}
            <div className="flexrow qnrow">
                <div className="flexcolumn qnleft">
                    <label>Days without Sunshine</label>
                    <p>How long would you like your solar energy system to power your home during a blackout?</p>
                    <div className="flexrow slidecontainer">
                        <input
                            type="range"
                            min={1}
                            max={3}
                            step={0.01}
                            name="doa"
                            className="flexrow slider"
                            value={qnDetails.doa}
                            onChange={handleChange}
                        />
                        <h3>{Math.round(qnDetails.doa)} Days</h3>
                    </div>
                    
                </div>
                <div className="flexrow qnright">
                    <div className="flexrow qnrightContainer">
                        <img
                            style={{
                                transform: `translateX(${
                                    qnDetails.doa * 40
                                }px)`,
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
                                transform: `translateX(${
                                    qnDetails.doa * -40
                                }px)`,
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
            <div className="flexrow qnrow">
                <div className="flexrow qnright">
                    <div className="flexrow qnleftContainer">
                        <img
                            style={{
                                opacity: `${(100 / 3) * qnDetails.cost}%`,
                                transition: "1s",
                            }}
                            src={reliable}
                            className="reliable"
                            alt="reliable"
                        />
                        <img
                            style={{
                                opacity: `${(-100 / 3) * qnDetails.cost + 100}%`,
                                transition: "1s",
                            }}
                            src={savings}
                            alt="savings"
                            className="savings"
                        />
                    </div>
                </div>
                <div className="flexcolumn qnleft">
                    <label>Cost and Reliability</label>
                    <p>
                        When it comes to choosing a system, are you more
                        interested in something that is inexpensive or something
                        that is reliable?
                    </p>
                    <div className="flexrow slidecontainer">
                        <input
                            type="range"
                            min={0}
                            max={3}
                            step={0.01}
                            name="cost"
                            className="flexrow slider sliderdark"
                            value={qnDetails.cost}
                            onChange={handleChange}
                        />
                        <h3>{qnCostOptions[Math.round(qnDetails.cost)]}</h3>
                    </div>
                </div>
            </div>
            {/* 3rd Row */}
            <div className="flexrow qnrow">
                <div className="flexcolumn qnleft">
                    <label>Off-Grid or Grid-Tied</label>
                    <p>
                        Do you want a system that is independent from the power
                        grid, or one that is connected to it?
                    </p>
                    <select
                        name="grid"
                        value={qnDetails.grid}
                        className="qnleftSelect"
                        onChange={handleChange}>
                        <option value="OffGrid">Off-Grid</option>
                        <option value="GridTied">Grid-Tied</option>
                    </select>
                    
                </div>
                <div className="flexrow qnright">
                    <div className="flexrow qnrightContainer">
                        <img
                            className="optionImage"
                            src={
                                `${qnDetails.grid}` === "OffGrid"
                                    ? OffGrid
                                    : GridTied
                            }
                            alt="GridImage"
                        />
                    </div>
                </div>
            </div>
            {/* 4th Row */}
            <div className="flexrow qnrow">
                <div className="flexrow qnright">
                    <div className="flexrow qnleftContainer">
                        <img
                            className="optionImage"
                            src={
                                `${qnDetails.shade}` === "yesshade"
                                    ? HouseTree
                                    : PlainHouse
                            }
                            alt="shadeImage"
                        />
                    </div>
                </div>
                <div className="flexcolumn qnleft">
                    <label>Shade</label>
                    <p>
                        Does your house experience any shade from 10 am to 4 pm
                        during the day?
                    </p>
                    <select
                        name="shade"
                        value={qnDetails.shade}
                        className="qnleftSelect"
                        onChange={handleChange}>
                        <option value="yesshade">Yes</option>
                        <option value="slight">Slightly</option>
                    </select>
                    
                </div>
            </div>
            {/* 5th Row */}
            <div className="flexrow qnrow">
                <div className="flexcolumn qnleft">
                    <label>Expansion</label>
                    <p>
                        Would you like to expand your solar PV system in the
                        future?
                    </p>
                    <select
                        name="expand"
                        value={qnDetails.expand}
                        className="qnleftSelect"
                        onChange={handleChange}>
                        <option value="likely">Likely</option>
                        <option value="unlikely">Unlikely</option>
                    </select>
                    
                </div>
                <div className="flexrow qnright">
                    <div className="flexrow qnrightContainer">
                        <img
                            className="optionImage"
                            src={
                                `${qnDetails.expand}` === "likely"
                                    ? Expand
                                    : nonExpand
                            }
                            alt="GridImage"
                        />
                    </div>
                </div>
            </div>
            {/* 6th Row */}
            <div className="flexrow qnrow">
                <div className="flexrow qnright">
                    <div className="flexrow qnleftContainer">
                        <img
                            className="optionImage"
                            src={
                                (`${qnDetails.space}` >= 0 &&
                                    `${qnDetails.space}` <= 100) ||
                                `${qnDetails.space}` === null
                                    ? Small
                                    : `${qnDetails.space}` >= 100 &&
                                      `${qnDetails.space}` <= 500
                                    ? Medium
                                    : Large
                            }
                            alt="GridImage"
                        />
                    </div>
                </div>
                <div className="flexcolumn qnleft">
                    <label>Roof Space</label>
                    <p>
                        How much roof space do you have available for installing
                        solar PV panels?
                    </p>
                    <div className="flexrow slidecontainer">
                        <input
                            type="number"
                            min={10}
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
                    
                </div>
            </div>
            {/* 7th Row */}
            <div className="flexrow qnrow">
                <div className="flexcolumn qnleft">
                    <label>Battery Space</label>
                    <p>
                        Do you have sufficient space in your home to store a
                        battery pack for your solar energy system?
                    </p>
                    <select
                        name="batteryspace"
                        value={qnDetails.batteryspace}
                        className="qnleftSelect"
                        onChange={handleChange}>
                        <option value="nobatteryspace">No</option>
                        <option value="yesbatteryspace">Yes</option>
                    </select>
                    
                </div>
                <div className="flexrow qnright">
                    <div className="flexrow qnrightContainer">
                        <img
                            className="optionImage"
                            src={Battery}
                            alt="battery"
                        />
                    </div>
                </div>
            </div>
            {/* 8th Row */}
            <div className="flexrow qnrow">
                <div className="flexrow qnright">
                    <div className="flexrow qnleftContainer">
                        <img
                            className="optionImage"
                            src={
                                `${qnDetails.appeal}` === "yesappeal"
                                    ? ThinFilm
                                    : `${qnDetails.appeal}` === "bothappeal"
                                    ? Monocrystalline
                                    : Polycrystalline
                            }
                            alt="GridImage"
                        />
                    </div>
                </div>
                <div className="flexcolumn qnleft">
                    <label>Visual Appeal</label>
                    <p>
                        Are you interested in having a solar PV system that not
                        only performs well but also looks good?
                    </p>
                    <select
                        name="appeal"
                        value={qnDetails.appeal}
                        className="qnleftSelect"
                        onChange={handleChange}>
                        <option value="yesappeal">Yes</option>
                        <option value="bothappeal">Both</option>
                        <option value="noappeal">No</option>
                    </select>
                    
                </div>
            </div>
            <GoToTop />
        </form>
    );
};

export default Step2;
