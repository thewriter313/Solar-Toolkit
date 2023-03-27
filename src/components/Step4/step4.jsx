import React, { useEffect, useState, useMemo, Suspense } from "react";
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
                : "Lead Acid Battery";

    const inverterType =
        contactDetails.country !== "Kenya"
        ? qnDetails.shade === "yesshade" || qnDetails.expand === "likely"
            ? "Micro Inverter"
            : qnDetails.cost >= 1.5
            ? "Micro Inverter"
            : "String Inverter"
            : "String Inverter";

    const chargeControllerType =
        contactDetails.country !== "Kenya"
        ? qnDetails.cost < 1.5
            ? "Pulse Width Modulation (PWM)"
            : "Maximum Power Point Tracking (MPPT)"
            : "Maximum Power Point Tracking (MPPT)"

    

    // Find PSH for given County
    const nameToFind = contactDetails.county;
    const matchingArr = countyData.find((arr) => arr[0] === nameToFind);
    const PSH = matchingArr ? matchingArr[1] : null;

    // Property Values
    const GE = 1.3 * totalEnergy;
    const DOD = 0.5;
    const GP = 1.3 * totalPower;
    const batteryVoltageValue = 12;

    // Get from Inverter Manual
    const systemVoltage = totalPower > 3000 ? 48 : totalPower > 1000 ? 24 : 12;
    const inverterWattage = Math.ceil(GP / 100) * 100;

    const [propertyValues, setpropertyValues] = useState({
        batteryCapacity: batteryType === "Lead Acid Battery" ? 200 : 100,
        panelWattage:
            systemVoltage <= 12
                ? (paneltype === "Polycrystalline"
                    ? 120
                    : 125)
                : (paneltype === "Polycrystalline"
                    ? 345
                    : 330)
        // paneltype === "Polycrystalline" ? 345 : 330,
    });
    
    const solarPanelsArray = paneltype === 'Monocrystalline' ? catalogueData.filter(row => (row[0] === 'Solar Panel') && (row[2] === 'Monocrystalline')).sort((a,b) => a[5]-b[5]).filter(row => parseInt(row[6]) <= systemVoltage) : catalogueData.filter(row => (row[0] === 'Solar Panel') && (row[2] === 'Polycrystalline')).sort((a,b) => a[5]-b[5]).filter(row => parseInt(row[6]) <= systemVoltage);
    const inverterArray = catalogueData.filter(row => row[0] === 'Inverter').sort((a,b) => a[5]-b[5]);
    const batteryArray = batteryType === "Lithium Ion Battery" ? catalogueData.filter(row => row[0] === 'Battery' && row[2] === "Lithium Ion Battery").sort((a,b) => a[8]-b[8]) : catalogueData.filter(row => row[0] === 'Battery' && row[2] === "Lead Acid Battery").sort((a,b) => a[8]-b[8]);
    const chargeControllerArray = catalogueData.filter(row => row[0] === 'Charge Controller').sort((a,b) => a[7]-b[7]);

    const selectedInverter = inverterArray.filter((arr) => (parseInt(arr[5]) > inverterWattage) && (parseInt(arr[6]) === systemVoltage)).sort((a,b) => a[5]-b[5])[0];


    // Battery Sizing
    const batterySeries = systemVoltage / batteryVoltageValue;
    const batteryCapacity = parseInt(propertyValues.batteryCapacity);
    const selectedBattery = batteryArray.find((arr) => parseInt(arr[8]) === batteryCapacity);
    const totalbatteryAh = (totalEnergy * qnDetails.doa) / (DOD * systemVoltage * 0.85);
    const batteryParallel = Math.ceil(totalbatteryAh / batteryCapacity);
    const batteryNumbers = Math.ceil(batteryParallel * batterySeries);

    // Panel Sizing
    const totalPanelWattage = GE / PSH;
    const singlePanelWatt = parseInt(propertyValues.panelWattage); // Get from Catologue
    const selectedPanel = solarPanelsArray.find((arr) => parseInt(arr[5]) === singlePanelWatt);
    const singlePanelvoltage = parseInt(selectedPanel[6]);
    const panelNumbers = Math.ceil(totalPanelWattage / singlePanelWatt);
    const panelSeries = systemVoltage / singlePanelvoltage;
    const panelParallel = Math.ceil(panelNumbers / panelSeries);
    const panelNumbersUpdated = panelSeries * panelParallel;
    

    // Charge Controller Sizing
    const shortCircuitCurrent = parseInt(selectedPanel[7]); // Get from Catologue
    
    const panelWattageUpdated = panelNumbersUpdated * singlePanelWatt;
    const chargeControllerSize =
        chargeControllerType === "Pulse Width Modulation (PWM)"
            ? Math.ceil(shortCircuitCurrent * panelParallel * 1.25)
            : Math.ceil(shortCircuitCurrent * panelParallel * 1.25)
            // : Math.ceil(panelWattageUpdated / systemVoltage);
    const selectedController = chargeControllerArray.filter((arr) => parseInt(arr[7]) > chargeControllerSize).sort((a,b) => a[5]-b[5])[0];

    const panelPrice = selectedPanel[4]
    const batteryPrice = selectedBattery[4]
    const inverterPrice = selectedInverter[4]
    const controllerPrice = selectedController[4]

    const selectedInverterRating = selectedInverter[5]
    const selectedControllerRating = selectedController[7]


    const ResultCardData = [
        {
            image: panelImage,
            title: "Solar Panel",
            model: "Model",
            modelValue: selectedPanel[1],
            supplier: "Supplier",
            supplierValue: selectedPanel[3],
            type: "Type",
            typeValue: paneltype,
            power: "Power",
            powerValue: singlePanelWatt,
            voltage: "Voltage",
            voltageValue: singlePanelvoltage,
            current: "Short Circuit Current",
            currentValue: shortCircuitCurrent,
            quantity: "Quantity",
            quantityValue: panelNumbersUpdated,
            price: "Unit Price",
            priceValue: selectedPanel[4],
        },
        {
            image: battery,
            title: "Battery",
            model: "Model",
            modelValue: selectedBattery[1],
            supplier: "Supplier",
            supplierValue: selectedBattery[3],
            type: "Type",
            typeValue: batteryType,
            voltage: "Voltage",
            voltageValue: batteryVoltageValue,
            capacity: "Capacity",
            capacityValue: batteryCapacity,
            quantity: "Quantity",
            quantityValue: batteryNumbers,
            price: "Unit Price",
            priceValue: selectedBattery[4],
        },
        {
            image: inverter,
            title: "Inverter",
            model: "Model",
            modelValue: selectedInverter[1],
            supplier: "Supplier",
            supplierValue: selectedInverter[3],
            type: "Type",
            typeValue: inverterType,
            voltage: "Voltage",
            voltageValue: systemVoltage,
            power: "Power",
            powerValue: selectedInverter[5],
            price: "Unit Price",
            priceValue: selectedInverter[4],
        },
        {
            image: chargeController,
            title: "Charge Controller",
            model: "Model",
            modelValue: selectedController[1],
            supplier: "Supplier",
            supplierValue: selectedController[3],
            type: "Type",
            typeValue: chargeControllerType,
            voltage: "Voltage",
            voltageValue: systemVoltage,
            amps: "Amperage",
            ampsValue: selectedController[7],
            price: "Unit Price",
            priceValue: selectedController[4],
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
                    batteryVoltageValue={batteryVoltageValue}
                    batteryCapacity={batteryCapacity}
                    batteryNumbers={batteryNumbers}
                    inverterWattage={selectedInverterRating}
                    systemVoltage={systemVoltage}
                    chargeControllerSize={selectedControllerRating}
                    panelPrice={panelPrice}
                    batteryPrice={batteryPrice}
                    inverterPrice={inverterPrice}
                    controllerPrice={controllerPrice}
                />
            </Suspense>
        ),
        [
            contactDetails,
            singlePanelvoltage,
            singlePanelWatt,
            panelNumbersUpdated,
            batteryVoltageValue,
            batteryCapacity,
            batteryNumbers,
            systemVoltage,
            panelPrice,
            batteryPrice,
            inverterPrice,
            controllerPrice,
            selectedInverterRating,
            selectedControllerRating,
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
                                model={data.model}
                                modelValue={data.modelValue}
                                supplier={data.supplier}
                                supplierValue={data.supplierValue}
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
                                solarPanelsArray={solarPanelsArray}
                                batteryArray={batteryArray}
                                systemVoltage={systemVoltage}
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
