import { React, useState } from "react";
import GoToTop from "./GoToTop";
import "./step1.css";
import Preset from "./preset";
import large from "../Assets/large.png";
import small from "../Assets/small.png";
import rural from "../Assets/rural.png";
import ApplianceCard from "./ApplianceCard";
import bulb from "../Assets/bulb.png"; 
import oldTV from "../Assets/oldTV.png";
import phoneImg from "../Assets/phoneImg.png";
import microwaveimg from "../Assets/microwaveimg.png"
import fridgeimg from "../Assets/fridgeimg.png" ;
import laptopImg from "../Assets/laptopImg.png";


const Step1 = ({ specialAppliances, typicalAppliances, inputCalculations }) => {
  const [items, setItems] = useState([
    { appliance: "", power: 0, hours: 0, amount: 0, total: 0 },
  ]);

  //Stock appliances
  const [lightbulb, setLightbulb] = useState(0);
  const [tv, setTv] = useState(0);
  const [fridge, setFridge] = useState(0);
  const [phone, setPhone] = useState(0);
  const [microwave, setMicrowave] = useState(0);
  const [laptop, setLaptop] = useState(0);

  const appliances = [
    { name: "Lightbulb", power: 13, hours: 5, amount: lightbulb,img: bulb },
    { name: "TV", power: 150, hours: 8, amount: tv,img: oldTV },
    { name: "Fridge", power: 350, hours: 24, amount: fridge,img: fridgeimg },
    { name: "Phone", power: 6, hours: 2, amount: phone, img:phoneImg},
    { name: "Microwave", power: 1000, hours: 0.1, amount: microwave,img: microwaveimg },
    { name: "Laptop", power: 50, hours: 10, amount: laptop,img: laptopImg },
    
  ];

  //increasing amount on click
  const incrementAmount = (name) => {
    if (name === "Lightbulb") setLightbulb(lightbulb + 1);
    if (name === "TV") setTv(tv + 1);
    if (name === "Fridge") setFridge(fridge + 1);
    if (name === "Phone") setPhone(phone + 1);
    if (name === "Microwave") setMicrowave(microwave + 1);
    if (name === "Laptop") setLaptop(laptop + 1);
  };

  //decreasing amount on click
  const decrementAmount = (name) => {
    if (name === "Lightbulb") setLightbulb(lightbulb - 1);
    if (name === "TV") setTv(tv - 1);
    if (name === "Fridge") setFridge(fridge - 1);
    if (name === "Phone") setPhone(phone - 1);
    if (name === "Microwave") setMicrowave(microwave - 1);
    if (name === "Laptop") setLaptop(laptop - 1);
  };

  const [preset1, setPreset1] = useState(false);
  const [preset2, setPreset2] = useState(false);
  const [preset3, setPreset3] = useState(false);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...items];

    // Validation check to ensure cost and amount are not negative
    if (name === "power" || name === "hours" || name==="amount") {
      if (value < 0) return;
    }

   
    list[index][name] = value;
    list[index].total =
      list[index].power * list[index].hours * list[index].amount;
    setItems(list);
    console.log(items);
  };

  const handleAdd = () => {
    // Validation check to not allow the addition of another item if a row is empty
    if (!items[items.length - 1].total) return;
    setItems([
      ...items,
      { appliance: "", power: 0, hours: 0, amount: 0, total: 0 },
    ]);
  };

  // Function to add 5 preset items to the table
  const handlePreset = (X) => {
    if (X === 0) {
      setLightbulb(3);
      setTv(1);
      setFridge(1);
      setPhone(2);
      setMicrowave(1);
      setLaptop(2);

      setPreset1(true);
      setPreset2(false);
      setPreset3(false);
    }

    if (X === 1) {
      setLightbulb(10);
      setTv(2);
      setFridge(2);
      setPhone(4);
      setMicrowave(1);
      setLaptop(3);

      setPreset1(false);
      setPreset2(true);
      setPreset3(false);
    }

    if (X === 2) {
      setLightbulb(3);
      setTv(0);
      setFridge(0);
      setPhone(1);
      setMicrowave(0);
      setLaptop(0);


      setPreset1(false);
      setPreset2(false);
      setPreset3(true);
    }
  };

  //Delete an appliance
  const onDelete = (appliance) => {
    if (items.length - 1 === 0) return;
    const newItems = items.filter((I) => I.appliance !== appliance);
    setItems(newItems);
  };

  // Total Energy
  const totalEnergy = items.reduce((sum, item) => sum + item.total, 0)+(appliances.reduce((sum, item) => sum + item.power*item.amount*item.hours,0));

  // Total Power
  const totalPower = items.reduce((sum, item) => sum + item.power*item.amount, 0)+(appliances.reduce((sum, item) => sum + item.power*item.amount,0));

  //Total items
  const totalItems = items.reduce((sum, item) => sum + parseInt(item.amount) ,0)+(appliances.reduce((sum, appliance) => sum + appliance.amount,0));
  console.log(totalItems);

  //passing calculations to parent
  const calculations = [
    { quantity: "tItems", value: totalItems  },
    { quantity: "tPower", value: totalPower },
    { quantity: "tEnergy", value: totalEnergy },
  ];

  inputCalculations.items = calculations;

  specialAppliances.items = items;

  typicalAppliances.items = appliances;

  return (
    <div className="container">
      <div className="section-1">
        <h3>What would you say is the size of your house?</h3>
        <div className="preset">
          <div onClick={() => handlePreset(0)}>
            <Preset
              presetName={"Small House"}
              presetImg={small}
              style={preset1 ? "preset-card on" : "preset-card "}
            />
          </div>
          <div onClick={() => handlePreset(1)}>
            <Preset
              presetName={"Large House"}
              presetImg={large}
              style={preset2 ? "preset-card on" : "preset-card "}
            />
          </div>
          <div onClick={() => handlePreset(2)}>
            <Preset
              presetName={"Rural House"}
              presetImg={rural}
              style={preset3 ? "preset-card on" : "preset-card "}
            />
          </div>
        </div>
      </div>
      <div className="section-1">
        <h3>What appliances do you have?</h3>
        <div className="appliances">
          {appliances.map((data, i) => (
            <ApplianceCard
              key={i}
              name={data.name}
              amount={data.amount}
              img={data.img}
              decrement={decrementAmount}
              increment={incrementAmount}

            />
          ))}
        </div>
      </div>
      <div className="section-1">
        <h3>Are there any other appliances you wish to include?</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Appliance</th>
                <th>Power (W)</th>
                <th>Hours (h)</th>
                <th>Number of Appliances</th>
                <th>Total Energy (Wh)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      placeholder="e.g electric cooker..."
                      name="appliance"
                      value={item.appliance}
                      onChange={(event) => handleChange(event, index)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="power"
                      value={item.power}
                      onChange={(event) => handleChange(event, index)}
                      disabled={!item.appliance}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="hours"
                      value={item.hours}
                      onChange={(event) => handleChange(event, index)}
                      disabled={!item.appliance}
                    />
                  </td>
                  <td>
                  <input
                      type="number"
                      name="amount"
                      value={item.amount}
                      onChange={(event) => handleChange(event, index)}
                      disabled={!item.appliance}
                    />
                  </td>
                  <td className="output">{item.total}</td>
                  <td>
                    <button
                      disabled={!item.appliance}
                      onClick={() => onDelete(item.appliance)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="add">
          <button onClick={handleAdd}>Add Appliance</button>
        </div>
        {/* <div>
          <p>energy {totalEnergy}, items {totalItems},power {totalPower}</p>
        </div> */}
      </div>
      <GoToTop />
    </div>
  );
};

export default Step1;
