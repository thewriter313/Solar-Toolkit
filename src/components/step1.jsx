import { React, useState} from "react";
import GoToTop from "./GoToTop";
import "./step1.css";
import Preset from "./preset";
import large from '../Assets/large.png';
import small from '../Assets/small.png';
import rural from '../Assets/rural.png';

const Step1 = ({formData,formCalculations}) => {
  const [items, setItems] = useState([
    { appliance: "", power: 0, hours: 0, amount: 1, total: 0 },
  ]);

  const [preset1, setPreset1] = useState(false);
  const [preset2, setPreset2] = useState(false);
  const [preset3, setPreset3] = useState(false);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...items];

    // Validation check to ensure cost and amount are not negative
    if (name === "power" || name === "hours") {
      if (value < 0) return;
    }

    if (name === "amount") {
      if (value < 1) return;
    }

    list[index][name] = value;
    list[index].total =
      list[index].power * list[index].hours * list[index].amount;
    setItems(list);
  };

  const handleAdd = () => {
    // Validation check to not allow the addition of another item if a row is empty
    if (!items[items.length - 1].total) return;
    setItems([
      ...items,
      { appliance: "", power: 0, hours: 0, amount: 1, total: 0 },
    ]);
  };

  // Function to add 5 preset items to the table
  const handlePreset = (X) => {
    if (X === 0) {
      setItems([
        { appliance: "Computer", power: 1, hours: 5, amount: 1, total: 5 },
        { appliance: "Fridge", power: 1, hours: 6, amount: 1, total: 6 },
        { appliance: "Lightbulbs", power: 4, hours: 3, amount: 2, total: 24 },
        { appliance: "TV", power: 5, hours: 9, amount: 1, total: 45 },
        { appliance: "", power: 0, hours: 0, amount: 1, total: 0 },
      ]);
      setPreset1(true);
      setPreset2(false);
      setPreset3(false);
    }

    if (X === 1) {
      setItems([
        { appliance: "Computer", power: 1, hours: 5, amount: 1, total: 8 },
        { appliance: "Fridge", power: 1, hours: 6, amount: 1, total: 6 },
        { appliance: "Lightbulbs", power: 4, hours: 3, amount: 2, total: 24 },
        { appliance: "TV", power: 5, hours: 9, amount: 1, total: 45 },
        { appliance: "", power: 0, hours: 0, amount: 1, total: 0 },
      ]);

      setPreset1(false);
      setPreset2(true);
      setPreset3(false);
    }

    if (X === 2) {
      setItems([
        { appliance: "Computer", power: 1, hours: 5, amount: 1, total: 10 },
        { appliance: "Fridge", power: 1, hours: 6, amount: 1, total: 6 },
        { appliance: "Lightbulbs", power: 4, hours: 3, amount: 2, total: 24 },
        { appliance: "TV", power: 5, hours: 9, amount: 1, total: 45 },
        { appliance: "", power: 0, hours: 0, amount: 1, total: 0 },
      ]);
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
  const totalEnergy = items.reduce((sum, item) => sum + item.total, 0);

  // Total Power
  const totalPower = items.reduce((sum, item) => sum + item.power, 0);

  //Total items 
  const totalItems = items.reduce((sum, item) => sum + item.amount, 0);

  const calculations= [{quantity:'tItems', value:{totalItems}}, {quantity:'tPower', value:{totalPower}},{quantity:'tEnergy', value:{totalEnergy}}];

  formCalculations.items =calculations;

  formData.items = items;

  return (
    <div className="container">
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
                    placeholder="e.g Lightbulb..."
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

      <div className="sum">
        <p> Number of Appliances: <strong>{totalItems}</strong></p>
        <p> Total Power Demand: <strong>{totalPower} Watts</strong></p>
        <p> Total Energy Demand: <strong>{totalEnergy} Watt Hours</strong></p>
       
      </div>

      <GoToTop />
    </div>
  );
};

export default Step1;
