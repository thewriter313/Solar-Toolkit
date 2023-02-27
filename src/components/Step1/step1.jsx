import React from "react";
import GoToTop from "../GoToTop";
import "./step1.css";
import Preset from "../preset";
import large from "../../Assets/large.png";
import small from "../../Assets/small.png";
import rural from "../../Assets/rural.png";
import ApplianceCard from "../ApplianceCard";
import bulb from "../../Assets/bulb.png";
import oldTV from "../../Assets/oldTV.png";
import phoneImg from "../../Assets/phoneImg.png";
import microwaveimg from "../../Assets/microwaveimg.png";
import fridgeimg from "../../Assets/fridgeimg.png";
import laptopImg from "../../Assets/laptopImg.png";
import { Tooltip } from "react-tippy";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Step1 = ({
  items,
  setItems,
  appliances,
  setAppliances,
  preset1,
  preset2,
  preset3,
  setPreset1,
  setPreset2,
  setPreset3,
}) => {
  //increasing amount on click
  const incrementAmount = (id) => {
    setAppliances((appliances) =>
      appliances.map((appliance) =>
        appliance.id === id
          ? { ...appliance, amount: appliance.amount + 1 }
          : appliance
      )
    );
  };

  //decreasing amount on click
  const decrementAmount = (id) => {
    setAppliances((appliances) =>
      appliances.map((appliance) =>
        appliance.id === id
          ? { ...appliance, amount: appliance.amount - 1 }
          : appliance
      )
    );
  };

  //handdle changes in table
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...items];

    // Validation check to ensure cost and amount are not negative
    if (name === "power" || name === "hours" || name === "amount") {
      if (value < 0) return;
    }

    list[index][name] = value;
    list[index].energy =
      list[index].power * list[index].hours * list[index].amount;
    setItems(list);
  };

  //adding an appliance in table
  const handleAdd = () => {
     setItems([
      ...items,
      { appliance: "", power: 0, hours: 0, amount: 0, total: 0 },
    ]);
  };

  // Function to add 5 preset items to the table
  const handlePreset = (X) => {
    if (X === 0) {
      setAppliances([
        { id: 1, name: "Lightbulb", power: 13, hours: 5, amount: 3, img: bulb },
        { id: 2, name: "TV", power: 150, hours: 8, amount: 1, img: oldTV },
        {
          id: 3,
          name: "Fridge",
          power: 350,
          hours: 24,
          amount: 1,
          img: fridgeimg,
        },
        { id: 4, name: "Phone", power: 6, hours: 2, amount: 2, img: phoneImg },
        {
          id: 5,
          name: "Microwave",
          power: 1000,
          hours: 0.1,
          amount: 1,
          img: microwaveimg,
        },
        {
          id: 6,
          name: "Laptop",
          power: 50,
          hours: 10,
          amount: 1,
          img: laptopImg,
        },
      ]);
      setPreset1(true);
      setPreset2(false);
      setPreset3(false);
    }

    if (X === 1) {
      setAppliances([
        {
          id: 1,
          name: "Lightbulb",
          power: 13,
          hours: 5,
          amount: 10,
          img: bulb,
        },
        { id: 2, name: "TV", power: 150, hours: 8, amount: 2, img: oldTV },
        {
          id: 3,
          name: "Fridge",
          power: 350,
          hours: 24,
          amount: 1,
          img: fridgeimg,
        },
        { id: 4, name: "Phone", power: 6, hours: 2, amount: 4, img: phoneImg },
        {
          id: 5,
          name: "Microwave",
          power: 1000,
          hours: 0.1,
          amount: 1,
          img: microwaveimg,
        },
        {
          id: 6,
          name: "Laptop",
          power: 50,
          hours: 10,
          amount: 3,
          img: laptopImg,
        },
      ]);

      setPreset1(false);
      setPreset2(true);
      setPreset3(false);
    }

    if (X === 2) {
      setAppliances([
        { id: 1, name: "Lightbulb", power: 13, hours: 5, amount: 3, img: bulb },
        { id: 2, name: "TV", power: 150, hours: 8, amount: 0, img: oldTV },
        {
          id: 3,
          name: "Fridge",
          power: 350,
          hours: 24,
          amount: 0,
          img: fridgeimg,
        },
        { id: 4, name: "Phone", power: 6, hours: 2, amount: 1, img: phoneImg },
        {
          id: 5,
          name: "Microwave",
          power: 1000,
          hours: 0.1,
          amount: 0,
          img: microwaveimg,
        },
        {
          id: 6,
          name: "Laptop",
          power: 50,
          hours: 10,
          amount: 0,
          img: laptopImg,
        },
      ]);

      setPreset1(false);
      setPreset2(false);
      setPreset3(true);
    }
  };

  //Delete an appliance
  const onDelete = (appliance) => {
    const newItems = items.filter((I) => I.appliance !== appliance);
    setItems(newItems);
  };

  return (
    <div className="container-step1">
      <div className="section-1">
        <h3>
          What would you say is the size of your house?{" "}
          <Tooltip
            arrow="true"
            position="right"
            html={
              <p style={{ fontFamily: "rubik", margin: "0.1em" }}>
                Pick an option that is closest to your house
              </p>
            }
          >
            <IoIosInformationCircleOutline />
          </Tooltip>
        </h3>
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
              data={data}
            />
          ))}
        </div>
      </div>
      <div className="section-1">
        <h3>
          Are there any other appliances you wish to include?{" "}
          <Tooltip
            arrow="true"
            position="right"
            html={
              <p style={{ fontFamily: "rubik", margin: "0.1em" }}>
                Only add appliances not shown in the section above.
              </p>
            }
          >
            <IoIosInformationCircleOutline />
          </Tooltip>
        </h3>
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
                  <td className="output">{item.energy}</td>
                  <td>
                    <button onClick={() => onDelete(item.appliance)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="add">
          <button onClick={handleAdd} disabled={(items.length !== 0 && !items[items.length - 1].energy)}>Add Appliance</button>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Step1;
