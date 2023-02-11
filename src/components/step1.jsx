import { React, useState } from "react";
import GoToTop from "./GoToTop";
import "./step1.css";

const Step1 = () => {
  const [items, setItems] = useState([
    { appliance: "", power: 0, hours: 0, amount: 1, total: 0 },
  ]);

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

  const onDelete = (appliance) => {
    if (items.length - 1 === 0) return;
    const newItems = items.filter((I) => I.appliance !== appliance);
    setItems(newItems);
  };

  const totalPower = items.reduce((sum, item) => sum + item.total, 0);
  return (
    <div className="container">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Appliance</th>
              <th>Power (W)</th>
              <th>Hours (h)</th>
              <th>Number of Appliances</th>
              <th>Total Power (Wh)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    placeholder="e.g Computer, Lightbulb, Fridge, etc"
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
                    className="delete"
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
        <h1> Total Load Demand: {totalPower} Watt Hours</h1>
      </div>
     
      <GoToTop />
    </div>
  );
};

export default Step1;
