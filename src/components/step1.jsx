import { React, useState } from "react";
import GoToTop from "./GoToTop";
import "./step1.css";

const Step1 = () => {
  const [items, setItems] = useState([
    { appliance: "", power: 0, amount: 0, total: 0 },
  ]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...items];

    // Validation check to ensure cost and amount are not negative
    if (name === "power" || name === "amount") {
      if (value < 0) return;
    }

    list[index][name] = value;
    list[index].total = list[index].power * list[index].amount;
    setItems(list);
  };

  const handleAdd = () => {
    setItems([...items, { appliance: "", power: 0, amount: 0, total: 0 }]);
  };

  const totalPower = items.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">Appliance</th>
            <th className="table-header">Power</th>
            <th className="table-header">Number of Appliances</th>
            <th className="table-header">Total Power</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} >
              <td>
                <input
                  className="input-box1"
                  type="text"
                  placeholder="e.g Computer, Lightbulb, Fridge, etc"
                  name="appliance"
                  value={item.appliance}
                  onChange={(event) => handleChange(event, index)}
                />
              </td>
              <td>
                <input
                  className="input-box2"
                  type="number"
                  name="power"
                  value={item.power}
                  onChange={(event) => handleChange(event, index)}
                  disabled={!item.appliance}
                />
              </td>
              <td>
                <input
                  className="input-box2"
                  type="number"
                  name="amount"
                  value={item.amount}
                  onChange={(event) => handleChange(event, index)}
                  disabled={!item.appliance}
                />
              </td>
              <td className="input-box3">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sum">
        <h1> Total Load Demand: {totalPower} Watts</h1>
      </div>
      <div>
        <button className="add-button" onClick={handleAdd}>
          Add Appliance
        </button>
      </div>
      <GoToTop />
    </div>
  );
};

export default Step1;
