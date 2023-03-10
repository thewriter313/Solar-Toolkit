import React, { useState } from "react";
import "./step4.css";
import GoToTop from "../GoToTop";
import Resultcard from "./Resultcard";
import Summarycard from "./Summarycard";
import battery from "../../Assets/battery.png";
import Thinfilm from "../../Assets/thinfilm.png";
import Polycrystalline from "../../Assets/polycrystalline.png";
import inverter from "../../Assets/Inverter.png";
import chargeController from "../../Assets/ChargeController2.png";

const Step4 = ({ setStep, appliances, qnDetails, contactDetails }) => {
    // Total Energy
    const totalEnergy = appliances.reduce(
        (sum, item) => sum + item.power * parseInt(item.amount) * item.hours,
        0
    );

    // Total Power
    const totalPower = appliances.reduce(
        (sum, item) => sum + item.power * parseInt(item.amount),
        0
    );

    // Total items
    const totalItems = appliances.reduce(
        (sum, item) => sum + parseInt(item.amount),
        0
    );

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
        qnDetails.shade === "yesshade" || qnDetails.expand === 'likely' ? "Micro Inverter" : qnDetails.cost >= 1.5 ? 'Micro Inverter' : "String Inverter";
    const chargeControllerType =
        qnDetails.cost < 1.5
            ? "Pulse Width Modulation (PWM)"
            : "Maximum Power Point Tracking (MPPT)";

    const [propertyValues, setpropertyValues] = useState({
        batteryVoltageValue: 12,
        panelWattage: 100,
    });
    // Property Values
    const GE = 1.3 * totalEnergy;

    //Get actual values from excel for each county
    const PSH = 6;
    const DOD = 0.5;
    const GP = 1.25 * totalPower;

    // Get from Inverter Manual
    const systemVoltage = 48;
    const inverterWattage = GP;

    // Battery Sizing
    const batterySeries = systemVoltage / propertyValues.batteryVoltageValue;
    const totalbatteryAh = (totalEnergy / systemVoltage / DOD / 0.85) * qnDetails.doa;
    const batteryCapacity = 200; // Get from Catalogue
    const batteryParallel = Math.ceil(totalbatteryAh / batteryCapacity);
    const batteryNumbers = Math.ceil(batteryParallel * batterySeries);
    

    // Panel Sizing
    const panelWattage = GE / PSH;
    const singlePanelvoltage = 24; // Get from Catologue
    const singlePanelWatt = propertyValues.panelWattage; // Get from Catologue
    const panelNumbers = Math.ceil(panelWattage / singlePanelWatt);
    const panelSeries = Math.ceil(systemVoltage / singlePanelvoltage);
    const panelParallel = Math.ceil(panelNumbers / panelSeries);
    const panelNumbersUpdated = panelSeries * panelParallel;
    console.log(panelWattage);
    console.log(panelNumbers);
    console.log(panelParallel);
    console.log(panelSeries);
    console.log(panelNumbersUpdated);

    // Charge Controller Sizing
    const panelWattageUpdated = panelNumbersUpdated * singlePanelWatt;
    const chargeControllerSize = panelWattageUpdated / systemVoltage;

    // const batterySeries = Math.ceil(systemVoltage / propertyValues.batteryVoltageValue);
    // // const systemVoltage = propertyValues.batteryVoltageValue;
    // const singlePanelWatt = propertyValues.panelWattage;
    // const batteryCapacity = 200; // From catalogue get this value (Ah)
    // // const batteryParallel = ((GE * qnDetails.doa) / (0.5 * systemVoltage)) / batteryCapacity; // Number of batteries required in parallel
    // const panelWattage = Math.ceil(GE / PSH / 100) * 100;
    // const panelNumbers = Math.ceil(panelWattage / singlePanelWatt);


    // // For number of panels in series
    // const panelSeries =
    //     chargeControllerType === "Pulse Width Modulation (PWM)"
    //         ? Math.ceil(systemVoltage / 8)
    //         : Math.floor(systemVoltage / 10);
    // const panelParallel = Math.ceil(panelNumbers / panelSeries);
    // const panelNumbersUpdated = panelSeries * panelParallel;
    // console.log(panelParallel);
    // console.log(panelSeries);
    // const inverterWattage = Math.ceil(GP / 100) * 100;
    // const totalbatterySize =
    //     Math.ceil((GE * qnDetails.doa) / (DOD * systemVoltage) / 100) * 100;
    // const batteryNumbers = batteryParallel * batterySeries;

    // // const batteryNumbers = Math.ceil(totalbatterySize / batteryCapacity);
    // const batterySize = Math.ceil(totalbatterySize / batteryNumbers / 10) * 10;
    // const chargeControllerSize = Math.ceil(GP / systemVoltage / 10) * 10;

    const ResultCardData = [
        {
            image: panelImage,
            title: "Solar Panel",
            type: "Type",
            typeValue: paneltype,
            power: "Power",
            powerValue: singlePanelWatt,
            quantity: "Quantity",
            quantityValue: panelNumbersUpdated,
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
            capacityValue: batteryCapacity,
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
        <div className="flexrow step4equipment">
            <div className="flexcolumn step4container">
                <div className="flexcolumn summary">
                    <h1>
                        Step 4:{" "}
                        <span style={{ color: "var(--color3)" }}>Summary</span>
                    </h1>
                    <div className="flexrow summaryContainer">
                        <Summarycard
                            title="Number of Items"
                            value={Math.ceil(totalItems)}
                            unit="Items"
                        />
                        <Summarycard
                            title="Energy Demand"
                            value={Math.ceil(totalEnergy)}
                            unit="Wh"
                        />
                        <Summarycard
                            title="Peak Power Demand"
                            value={Math.ceil(totalPower)}
                            unit="W"
                        />
                    </div>
                </div>
                <div className="flexcolumn computedResults">
                    <h1>
                        Computed
                        <span style={{ color: "var(--color3)" }}> Results</span>
                    </h1>
                    <div className="flexrow resultCardsContainer">
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
                <div className="flexcolumn final">
                    <h1>
                        Contact{" "}
                        <span style={{ color: "var(--color3)" }}>Details</span>
                    </h1>
                    <div className="flexcolumn">
                        <div className="flexrow finalDetails">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="finalDetailsText">
                                            Name
                                        </td>
                                        <td>{contactDetails.fullname}</td>
                                    </tr>
                                    <tr>
                                        <td className="finalDetailsText">
                                            Address
                                        </td>
                                        <td>
                                            {contactDetails.county},{" "}
                                            {contactDetails.city},{" "}
                                            {contactDetails.country}
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="finalDetailsText">
                                            E-mail
                                        </td>
                                        <td className="finalDetailsEmail">
                                            {contactDetails.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="finalDetailsText">
                                            Phone Number
                                        </td>
                                        <td>{contactDetails.pnumber}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button
                                className="btn1"
                                style={{ margin: "0px" }}
                                onClick={() => setStep(3)}>
                                Change
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <GoToTop />
        </div>
    );
};

export default Step4;
