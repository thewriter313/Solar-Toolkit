import React, { useState } from "react";
import "./addcard.css";
import watch from "../../Assets/wristwatch.png";
import questionMark from "../../Assets/questionmark.png";
import {
  IoIosAddCircle,
  IoMdClose,
} from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'

Aos.init({ duration: 500 });

const Addcard = (props) => {
  const [popUp, setPopUp] = useState(false);
  const [name, setName] = useState("");
  const [power, setPower] = useState(0);
  const [hours, setHours] = useState(0);
  const [amount, setAmount] = useState(0);

  const inductiveLoads = props.appliances.reduce((Sum, item) => Sum + parseInt(item.power > 500 ? item.amount : 0), 0)

  //adding an appliance in table
  const handleAdd = () => {
    const applianceNumber = Number(props.appliances.length) + 2;
    props.setAppliances((appliances) => {
      return [
        ...appliances,
        {
          id: applianceNumber,
          name: name,
          power: power,
          hours: hours,
          amount: parseInt(amount),
          img: questionMark,
          loadType: power > 1000 ? "Inductive" : "Resistive",
        },
      ];
    });
    setName("");
    setPower(0);
    setHours(0);
    setAmount(0);
    setPopUp(false);
  };

  return (
    <div className="flexrow addcard-container">
      <IoIosAddCircle className="addcard-icon" onClick={() => setPopUp(true)} />
      {popUp && (
        <div className="addcard-popup">
          <div data-aos="fade-up" className="flexrow addcard-popup-inner">
            <div
              onClick={() => setPopUp(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                cursor: "pointer",
              }}
              className="addcard-popup-close"
            >
              <IoMdClose></IoMdClose>
            </div>
            <div className="flexcolumn addcard-popup-inner-header">
              <img src={watch} alt="" width={"300em"} />
              <h2>Add an Appliance </h2>
              <div className="flexcolumn infotip">
              
                <p style={{ fontFamily: "rubik", margin: "0.1em" }}>
                  Only add appliances not shown in the section above. Also look
                  at the appliances that should not be included in the sizing <Link to=".././info">here</Link>.
                  </p>
                
              </div>
            </div>

            <div className="flexcolumn addcard-popup-right">
              <div className="flexcolumn addcard-popup-inner-body">
                <div className="flexcolumn popup-input">
                  <label>Appliance </label>
                  <input
                    type="text"
                    placeholder="e.g Playstation..."
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flexcolumn popup-input">
                  <label>Appliance Wattage</label>
                  <input
                    type="number"
                    name="power"
                    min={0}
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                    disabled={!name}
                  />
                </div>
                <div className="flexcolumn popup-input">
                  <label> Number of Hours</label>
                  <input
                    type="number"
                    name="hours"
                    min={0}
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    disabled={!name}
                  />
                </div>
                <div className="flexcolumn popup-input">
                  <label> Number of appliances</label>
                  <input
                    type="number"
                    name="amount"
                    min={0}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    disabled={!name}
                  />
                </div>
              </div>
              <button
                className="btn1"
                disabled={
                  (amount === 0 || hours === 0 || power === 0 || name === "" || amount < 0 || hours < 0 || power < 0) || (power > 1000 && amount > 1) ||(power > 1000 && hours > 1) || (power > 500 && inductiveLoads >= 2)
                }
                onClick={() => {handleAdd(); props.added()}}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addcard;
