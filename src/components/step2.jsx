import React, { useState } from "react";
import "./step2.css";
import "../App.css";

const Step2 = () => {
  const [inputs, setInputs] = useState({
    doa: 3,
    bvolt: "12",
    btype: "Lead Acid",
    phrs: 5.5,
    wpanel: 50,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `${inputs.doa}, ${inputs.bvolt}, ${inputs.btype}, ${inputs.phrs}, ${inputs.wpanel}`
    );
  };

  return (
    <form className="qnform" onSubmit={handleSubmit}>
      <div className="qnContainer">
        <h2>
          <span style={{ color: "var(--color3)" }}>Step 1: </span>Battery Bank
          Size
        </h2>
        <div className="section">
          <div className="left">
            <h3>Enter Days of Autonomy</h3>
            <input
              type="number"
              min="0"
              name="doa"
              value={inputs.doa}
              onChange={handleChange}
            />
            <p className="units">Days</p>
          </div>
          <div className="right">
            <div className="info">
              <h3>What are Days of Autonomy?</h3>
              <p>
                Days of Autonomy are the number of days that the battery can
                supply the site's loads without any support from generation
                sources. The default value is 3 days but can be changed
                depending on the requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="left">
            <h3>What Battery Voltage would you like to use?</h3>
            <select
              type="number"
              name="bvolt"
              value={inputs.bvolt}
              onChange={handleChange}
            >
              <option value="12" selected="selected">
                12
              </option>
              <option value="24">24</option>
            </select>
            <p className="units">Volts</p>
          </div>
          <div className="right">
            <div className="info">
              <h3>What is Battery Voltage?</h3>
              <p>
                The battery voltage is the voltage of a single battery in the
                battery pack. 12 Volts and 24 Volts batteries are readily
                available in Kenya.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="left">
            <h3>What is your preffered Battery Type</h3>
            <select
              type="number"
              name="btype"
              value={inputs.btype}
              onChange={handleChange}
            >
              <option value="lead" selected="selected">
                Lead Acid
              </option>
              <option value="lithium">Lithium Ion</option>
            </select>
          </div>
          <div className="right">
            <div className="info">
              <h3>What are the Battery Types?</h3>
              <p>
                Lead-acid batteries are the traditional type of battery.
                Lead-acid batteries are reliable and have a long lifespan, but
                they are also heavy and have a limited capacity. Lithium-ion
                batteries, on the other hand, are lighter, have a higher energy
                density, and can be recharged more quickly. However, they are
                also more expensive than lead-acid batteries and are more
                sensitive to temperature changes.
              </p>
            </div>
          </div>
        </div>
        <h2 className="line">
          <span style={{ color: "var(--color3)" }}>Step 2: </span>Solar Array
          Size
        </h2>
        <div className="section">
          <div className="left">
            <h3>Enter Peak Sun Hours</h3>
            <input
              type="number"
              step="0.1"
              min="0"
              name="phrs"
              value={inputs.phrs}
              onChange={handleChange}
            />
            <p className="units">Hours</p>
          </div>
          <div className="right">
            <div className="info">
              <h3>What are Peak Sun Hours?</h3>
              <p>
                One peak sun hour is when the sun's intensity reaches an average
                of 1,000 watts of photovoltaic power per square meter. The
                avareage peak sun hours in Kenya are 5.5 hours
              </p>
            </div>
          </div>
        </div>
        <h2 className="line">
          <span style={{ color: "var(--color3)" }}>Step 3: </span>
          Charge Controller Size
        </h2>
        <div className="section">
          <div className="left">
            <h3>What Watts per Solar Panel would you prefer?</h3>
            <select
              type="number"
              name="wpanel"
              value={inputs.wpanel}
              onChange={handleChange}
            >
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
              <option value="250">2500</option>
              <option value="300">300</option>
            </select>
            <p className="units">Watts</p>
          </div>
          <div className="right">
            <div className="info">
              <h3>What is Watts per Solar Panel?</h3>
              <p>
                Panel wattage refers to the amount of power generated by a solar
                panel. It represents the maximum power output that a panel can
                produce under ideal conditions. The panel wattage is a crucial
                factor in determining the size and number of panels needed for a
                solar power system. A higher panel wattage means that a single
                panel can generate more electricity, while a lower panel wattage
                requires more panels to generate the same amount of electricity.
              </p>
            </div>
          </div>
        </div>
        <button type="submit" className="submitbtn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step2;
