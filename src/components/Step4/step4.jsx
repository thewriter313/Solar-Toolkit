import React, { useEffect, useMemo, useState, Suspense } from "react";
import "./step4.css";
import GoToTop from "../GoToTop";
import Resultcard from "./Resultcard";
import Summarycard from "./Summarycard";
import battery from "../../Assets/battery.png";
import Thinfilm from "../../Assets/thinfilm.png";
import Polycrystalline from "../../Assets/polycrystalline.png";
import Monocrystalline from "../../Assets/monocrystalline.png";
import inverter from "../../Assets/Inverter.png";
import chargeController from "../../Assets/ChargeController2.png";
import PDFFile from "../PDFFile";

const Step4 = ({ setStep, appliances, qnDetails, contactDetails, getFromChild, countyData, catalogueData }) => {
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

    // console.log(catalogueData);

    const solarPanelsArray = catalogueData.filter(row => row[1] === 'Solar Panel');
    const inverterArray = catalogueData.filter(row => row[1] === 'Inverter');
    const batteryArray = catalogueData.filter(row => row[1] === 'Battery');
    const chargeControllerArray = catalogueData.filter(row => row[1] === 'Charge Controller');


    console.log(solarPanelsArray);
    console.log(inverterArray);
    console.log(batteryArray);
    console.log(chargeControllerArray);


    const panelImage =
        contactDetails.country !== "Kenya"
            ? qnDetails.appeal === "yesappeal"
                ? Thinfilm
                : qnDetails.appeal === "bothappeal"
                ? Monocrystalline
                : Polycrystalline
            : qnDetails.appeal === "yesappeal"
            ? Monocrystalline
            : qnDetails.appeal === "bothappeal"
            ? Monocrystalline
            : Polycrystalline;

    // Equipment Type
    const paneltype =
        contactDetails.country !== "Kenya"
            ? qnDetails.appeal === "yesappeal"
                ? "Thin Film"
                : qnDetails.appeal === "bothappeal"
                ? "Monocrystalline"
                : "Polycrystalline"
            : qnDetails.appeal === "yesappeal"
            ? "Monocrystalline"
            : qnDetails.appeal === "bothappeal"
            ? "Monocrystalline"
            : "Polycrystalline";
    const batteryType =
            qnDetails.batteryspace === "nobatteryspace" && qnDetails.cost > 2
                ? "Lithium Ion Battery"
                : "Lead Acid Battery"
    const inverterType =
        contactDetails.country !== "Kenya"
        ? qnDetails.shade === "yesshade" || qnDetails.expand === "likely"
            ? "Micro Inverter"
            : qnDetails.cost >= 1.5
            ? "Micro Inverter"
            : "String Inverter"
            : qnDetails.shade === "yesshade" || qnDetails.expand === "likely"
            ? "String Inverter"
            : qnDetails.cost >= 1.5
            ? "String Inverter"
            : "String Inverter"
    const chargeControllerType =
        contactDetails.country !== "Kenya"
        ? qnDetails.cost < 1.5
            ? "Pulse Width Modulation (PWM)"
            : "Maximum Power Point Tracking (MPPT)"
            : "Maximum Power Point Tracking (MPPT)"

    const [propertyValues, setpropertyValues] = useState({
        batteryVoltageValue: 12,
        panelWattage: 100,
    });

    // Find PSH for given County
    const nameToFind = contactDetails.county;
    const matchingArr = countyData.find((arr) => arr[0] === nameToFind);
    const PSH = matchingArr ? matchingArr[1] : null;

    // Property Values
    const GE = 1.3 * totalEnergy;
    const DOD = 0.5;
    const GP = 1.3 * totalPower;

    // Get from Inverter Manual
    const systemVoltage = 24;
    const inverterWattage = Math.ceil(GP / 100) * 100;

    // Battery Sizing
    const batterySeries = systemVoltage / propertyValues.batteryVoltageValue;
    const batteryCapacity = 200;
    const totalbatteryAh =
        (totalEnergy * qnDetails.doa) / (DOD * systemVoltage * 0.85);
    const batteryParallel = Math.ceil(totalbatteryAh / batteryCapacity);
    const batteryNumbers = Math.ceil(batteryParallel * batterySeries);

    // Panel Sizing
    const panelWattage = GE / PSH;
    const singlePanelvoltage = 24; // Get from Catologue
    const singlePanelWatt = propertyValues.panelWattage; // Get from Catologue
    const panelNumbers = Math.ceil(panelWattage / singlePanelWatt);
    const panelSeries = systemVoltage / singlePanelvoltage;
    const panelParallel = Math.ceil(panelNumbers / panelSeries);
    const panelNumbersUpdated = panelSeries * panelParallel;

    // Charge Controller Sizing
    const shortCircuitCurrent = 9.44; // Get from Catologue
    const panelWattageUpdated = panelNumbersUpdated * singlePanelWatt;
    const chargeControllerSize =
        chargeControllerType === "Pulse Width Modulation (PWM)"
            ? Math.ceil(shortCircuitCurrent * panelParallel * 1.25)
            : Math.ceil(panelWattageUpdated / systemVoltage);

    const ResultCardData = [
        {
            image: panelImage,
            title: "Solar Panel",
            type: "Type",
            typeValue: paneltype,
            power: "Power",
            powerValue: singlePanelWatt,
            voltage: "Voltage",
            voltageValue: singlePanelvoltage,
            current: "Current",
            currentValue: shortCircuitCurrent,
            quantity: "Quantity",
            quantityValue: panelNumbersUpdated,
            price: "Price",
            priceValue: 20000,
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
            priceValue: 20000,
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
            priceValue: 20000,
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
            priceValue: 20000,
        },
    ];

    const myDoc = useMemo(
        () => (
            <Suspense fallback={<div>Loading PDF...</div>}>
                <PDFFile
                    contactDetails={contactDetails}
                    singlePanelvoltage={singlePanelvoltage}
                    singlePanelWatt={singlePanelWatt}
                    panelNumbersUpdated={panelNumbersUpdated}
                    batteryVoltageValue={propertyValues.batteryVoltageValue}
                    batteryCapacity={batteryCapacity}
                    batteryNumbers={batteryNumbers}
                    inverterWattage={inverterWattage}
                    systemVoltage={systemVoltage}
                    chargeControllerSize={chargeControllerSize}
                />
            </Suspense>
        ),
        [
            contactDetails,
            singlePanelvoltage,
            singlePanelWatt,
            panelNumbersUpdated,
            propertyValues.batteryVoltageValue,
            batteryCapacity,
            batteryNumbers,
            inverterWattage,
            systemVoltage,
            chargeControllerSize,
        ]
    );

    useEffect(() => {
        getFromChild(myDoc);
    }, [myDoc, getFromChild]);

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
                                current={data.current}
                                currentValue={data.currentValue}
                                capacity={data.capacity}
                                capacityValue={data.capacityValue}
                                quantity={data.quantity}
                                quantityValue={data.quantityValue}
                                price={data.price}
                                priceValue={data.priceValue}
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
                                        {contactDetails.country === "Kenya" ? (
                                            <td>
                                                {contactDetails.county},{" "}
                                                {contactDetails.country}
                                            </td>
                                        ) : (
                                            <td>{contactDetails.country}</td>
                                        )}
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
