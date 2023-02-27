import React, { useState } from "react";
import "./step4.css";
import GoToTop from "../GoToTop";
import Resultcard from "./Resultcard";
import battery from "../../Assets/battery.png";
import Thinfilm from "../../Assets/thinfilm.png";
import Polycrystalline from "../../Assets/polycrystalline.png";
import inverter from "../../Assets/Inverter.png";
import chargeController from "../../Assets/ChargeController2.png";

const Step4 = ({ appliances, items, qnDetails, contactDetails }) => {
    // Total Energy
    const totalEnergy =
        items.reduce((sum, item) => sum + item.energy, 0) +
        appliances.reduce(
            (sum, item) =>
                sum + item.power * parseInt(item.amount) * item.hours,
            0
        );

    // Total Power
    const totalPower =
        items.reduce(
            (sum, item) => sum + item.power * parseInt(item.amount),
            0
        ) +
        appliances.reduce(
            (sum, item) => sum + item.power * parseInt(item.amount),
            0
        );

    // Total items
    const totalItems =
        items.reduce((sum, item) => sum + parseInt(item.amount), 0) +
        appliances.reduce((sum, item) => sum + parseInt(item.amount), 0);

    const panelImage =
        qnDetails.appeal === "yesappeal" ? Thinfilm : Polycrystalline;

    // Equipment Type
    const paneltype =
        qnDetails.appeal === "yesappeal"
            ? "Thin Film"
            : qnDetails.appeal === "noappeal"
            ? "Polycrystalline"
            : "Monocrystalline";
    const batteryType =
        qnDetails.batteryspace === "nobatteryspace" &&
        (qnDetails.cost === 2 || qnDetails.cost === 3)
            ? "Lithium Ion Battery"
            : "Lead Acid Battery";
    const inverterType =
        qnDetails.shade === "yesshade" ? "Micro Inverter" : "String Inverter";
    const chargeControllerType =
        qnDetails.cost === 0 || qnDetails.cost === 1
            ? "Pulse Width Modulation (PWM)"
            : "Maximum Power Point Tracking (MPPT)";

    const [propertyValues, setpropertyValues] = useState({
        batteryVoltageValue: 12,
        panelWattage: 100,
    });
    // Property Values
    const GE = 1.3 * totalEnergy;
    const PSH = 4.2;
    const DOD = 0.5;
    const GP = 1.5 * totalPower;

    // Get from Inverter Manual
    const systemVoltage = 24;
    const batterySeries = Math.ceil(systemVoltage / propertyValues.batteryVoltageValue);
    // const systemVoltage = propertyValues.batteryVoltageValue;
    const singlePanelWatt = propertyValues.panelWattage;
    const batteryCapacity = 200;
    const batteryParallel = (Math.ceil((GE * qnDetails.doa) / (DOD * systemVoltage) / 100) * 100) / batteryCapacity;
    const panelWattage = Math.ceil(GE / PSH / 100) * 100;
    const panelNumbers = Math.ceil(panelWattage / singlePanelWatt);


    // For number of panels in series
    const panelSeries = chargeControllerType === "Pulse Width Modulation (PWM)" ? Math.ceil(systemVoltage / 8) : Math.floor(systemVoltage / 10 );
    const panelParallel = Math.ceil(panelNumbers / panelSeries);
    const panelNumbersUpdated = panelSeries * panelParallel;
    const inverterWattage = Math.ceil(GP / 100) * 100;
    const totalbatterySize = Math.ceil((GE * qnDetails.doa) / (DOD * systemVoltage) / 100) * 100;
    const batteryNumbers = batteryParallel * batterySeries;

    // const batteryNumbers = Math.ceil(totalbatterySize / batteryCapacity);
    const batterySize = Math.ceil(totalbatterySize / batteryNumbers / 10) * 10;
    const chargeControllerSize = Math.ceil(GP / systemVoltage / 10) * 10;

    const ResultCardData = [
        {
            image: panelImage,
            title: "Solar Panel",
            type: "Type",
            typeValue: paneltype,
            power: "Power",
            powerValue: singlePanelWatt,
            quantity: "Quantity",
            quantityValue:  panelNumbersUpdated,
            price: "Price",
        },
        {
            image: battery,
            title: "Battery",
            type: "Type",
            typeValue: batteryType,
            voltage: "Voltage",
            voltageValue: propertyValues.batteryVoltageValue,
            capacity: "Capacity",
            capacityValue: batterySize,
            quantity: "Quantity",
            quantityValue: batteryNumbers,
            price: "Price",
        },
        {
            image: inverter,
            title: "Inverter",
            type: "Type",
            typeValue: inverterType,
            voltage: "Voltage",
            voltageValue: systemVoltage,
            power: "Power",
            powerValue: inverterWattage,
            price: "Price",
        },
        {
            image: chargeController,
            title: "Charge Controller",
            type: "Type",
            typeValue: chargeControllerType,
            voltage: "Voltage",
            voltageValue: systemVoltage,
            amps: "Amperage",
            ampsValue: chargeControllerSize,
            price: "Price",
        },
    ];
    return (
        <div className="step4equipment flex">
            <div className="step4container flex">
                <div className="summary flex flexcolumn">
                    <h2>
                        <span style={{ color: "var(--color3)" }}>Summary</span>
                    </h2>
                    <div className="summaryBox flex">
                        <div className="summaryTitle">
                            <h3>Total Number of Items</h3>
                        </div>
                        <div className="summaryValue">
                            <h4>{totalItems} items</h4>
                        </div>
                    </div>
                    <div className="summaryBox flex">
                        <div className="summaryTitle">
                            <h3>Total Energy Demand</h3>
                        </div>
                        <div className="summaryValue">
                            <h4>{totalEnergy} Watt Hours</h4>
                        </div>
                    </div>
                    <div className="summaryBox flex">
                        <div className="summaryTitle">
                            <h3>Peak Load</h3>
                        </div>
                        <div className="summaryValue">
                            <h4>{totalPower} Watts</h4>
                        </div>
                    </div>
                </div>
                <div className="computedResults">
                <h2>
                    Computed{" "}
                    <span style={{ color: "var(--color3)" }}>Results</span>
                </h2>
                {ResultCardData.map((data, i) => (
                    <Resultcard
                        key={i}
                        title={data.title}
                        image={data.image}
                        type={data.type}
                        typeValue={data.typeValue}
                        voltage={data.voltage}
                        voltageValue={data.voltageValue}
                        capacity={data.capacity}
                        capacityValue={data.capacityValue}
                        quantity={data.quantity}
                        quantityValue={data.quantityValue}
                        price={data.price}
                        power={data.power}
                        powerValue={data.powerValue}
                        amps={data.amps}
                        ampsValue={data.ampsValue}
                        propertyValues={propertyValues}
                        setpropertyValues={setpropertyValues}
                    />
                ))}
                </div>
            </div>
            <GoToTop />
        </div>
        // <div>
        //   <div>
        //     <p>Fullname: {contactDetails.fullname}</p>
        //     <p>Address: {contactDetails.address}</p>
        //     <p>E-mail: {contactDetails.email}</p>
        //     <p>Phone Number: {contactDetails.pnumber}</p>
        //     <p>Days of Autonomy: {qnDetails.doa}</p>
        //     <p>Cost or Reliable: {qnDetails.cost}</p>
        //     <p>
        //       {appliances.map((appliances, i) => (
        //         <li key={i}> Number of {appliances.name}s: {appliances.amount}-----each with power demand of {appliances.power}</li>
        //       ))}
        //     </p>
        //     <p>
        //       {items.map((items, i) => (
        //         <li key={i}>Number of {items.appliance}: {items.amount}-----each with power demand of {items.power}</li>
        //       ))}
        //     </p>
        //     <p>Total energy= {totalEnergy} Wh</p>
        //     <p>Total Power = {totalPower} W</p>
        //     <p>Toatl items ={totalItems}</p>
        //   </div>
        // </div>
    );
};

export default Step4;
