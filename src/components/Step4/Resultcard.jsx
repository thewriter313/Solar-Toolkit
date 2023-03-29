import React from "react";
import "./Resultcard.css";
import Dayliff from "../../Assets/Davis and Shirtliff.png"
import Camel from "../../Assets/Camel.png"

const Resultcard = ({
    title,
    image,
    type,
    model,
    modelValue,
    supplier,
    supplierValue,
    typeValue,
    voltage,
    voltageValue,
    current,
    currentValue,
    capacity,
    quantity,
    quantityValue,
    price,
    priceValue,
    power,
    powerValue,
    amps,
    ampsValue,
    propertyValues,
    setpropertyValues,
    solarPanelsArray,
    batteryArray,
}) => {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setpropertyValues((values) => {
            return { ...values, [name]: value };
        });
    };

    return (
        <div className="flexcolumn resultCardContainer">
            <div className="flexrow resultCardHead">
                <h4>{title}</h4>
            </div>
            <div className="flexcolumn resultCardBody">
                <div className="flexrow resultCardImage">
                    <img src={image} alt="eqmuipmentImage" />
                </div>
                <div className="flexcolumn resultCardText">
                    <table>
                        <tbody>
                        {type && (
                            <tr>
                                <td className="resultCardProperty">{type}</td>
                                <td>{typeValue}</td>
                            </tr>)}
                        {model && (
                            <tr>
                                <td className="resultCardProperty">{model}</td>
                                <td>{modelValue}</td>
                            </tr>)}
                        {supplier && (
                            <tr>
                                <td className="resultCardProperty">{supplier}</td>
                                <td>{supplierValue}</td>
                            </tr>)}
                            {supplier && (
                            <tr>
                                <td colSpan="2" style={{textAlign: "center"}}><img src={supplierValue === "Davis & Shirtliff" ? Dayliff : Camel} style={{maxHeight: "50px"}} alt="Supplier" /></td>
                            </tr>)}
                        {voltage && (
                            <tr>
                                <td className="resultCardProperty">{voltage} </td>
                                <td>{voltageValue} V</td>
                            </tr>
                        )}
                        {current && (
                            <tr>
                                <td className="resultCardProperty">{current}</td>
                                <td>{currentValue} A</td>
                            </tr>)}
                        {capacity && (
                        <tr>
                            <td className="resultCardProperty">{capacity}</td>
                            <td>
                                <>
                                    <select
                                        name="batteryCapacity"
                                        value={propertyValues.batteryCapacity}
                                        onChange={handleChange}>
                                            {batteryArray.map((data, i) => (
                                                <option key={i} value={data[8]}>{data[8]}</option>
                                            ))}
                                    </select>
                                    <> Ah</>
                                </></td>
                        </tr>
                        )}
                        {quantity && (
                        <tr>
                            <td className="resultCardProperty">
                                {quantity}
                            </td>
                            <td>
                                {quantityValue} Units
                            </td>
                        </tr>
                        )}
                        {power && (
                        <tr>
                            <td className="resultCardProperty">{power}</td>
                            <td>{title === "Solar Panel" ? (
                                <>
                                    <select
                                        name="panelWattage"
                                        value={propertyValues.panelWattage}
                                        onChange={handleChange}>
                                            {solarPanelsArray.map((data, i) => (
                                                <option key={i} value={data[5]}>{data[5]}</option>
                                            ))}
                                    </select>
                                    <> Watts</>
                                </>
                                ) : (
                                <>{powerValue} Watts</>
                        )}</td>
                        </tr>
                        )}
                        {amps && (
                        <tr>
                            <td className="resultCardProperty">{amps}</td>
                            <td>{ampsValue} Amps</td>
                        </tr>
                        )}
                        {price && (
                        <tr>
                            <td className="resultCardProperty">{price}</td>
                            <td>KES. {priceValue}</td>
                        </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Resultcard;
