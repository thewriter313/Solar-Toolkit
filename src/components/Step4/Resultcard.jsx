import React, { useState } from "react";
import "./Resultcard.css";

const Resultcard = ({
    title,
    image,
    type,
    typeValue,
    voltage,
    propertyValues,
    setpropertyValues,
    voltageValue,
    capacity,
    capacityValue,
    quantity,
    quantityValue,
    price,
    power,
    powerValue,
    amps,
    ampsValue,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCard = () => {
        setIsOpen(!isOpen);
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setpropertyValues((values) => {
            return { ...values, [name]: value };
        });
    };
    return (
        <div className="flexcolumn resultCardContainer">
            <div className="flexrow resultCardHead" onClick={toggleCard}>
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
                            {voltage && (
                                <tr>
                                    <td className="resultCardProperty">{voltage} </td>
                                    <td>{title === "Battery" ? (
                                    <>
                                        <select
                                            name="batteryVoltageValue"
                                            value={
                                                propertyValues.batteryVoltageValue
                                            }
                                            onChange={handleChange}>
                                            <option value={12}>12</option>
                                            <option value={24}>24</option>
                                            <option value={48}>48</option>
                                        </select>
                                        <> V</>
                                    </>
                                    ) : (
                                    <>{voltageValue} V</>
                            )}</td>
                                </tr>
                            )}
                            {capacity && (
                            <tr>
                                <td className="resultCardProperty">{capacity}</td>
                                <td>{capacityValue} Ah</td>
                            </tr>
                            )}
                            {quantity && (
                            <tr>
                                <td className="resultCardProperty">
                                    {quantity}
                                </td>
                                <td>
                                    {quantityValue} {title === "Battery" ? "Units" : "Units"}
                                </td>
                            </tr>
                            )}
                            {power && (
                            <tr>
                                <td className="resultCardProperty">{power}</td>
                                <td>
                                    {title === "Solar Panel" ? (
                                    <>
                                        <select
                                            name="panelWattage"
                                            value={propertyValues.panelWattage}
                                            onChange={handleChange}>
                                            <option value={50}>50</option>
                                            <option value={100}>100</option>
                                            <option value={120}>120</option>
                                            <option value={150}>150</option>
                                            <option value={200}>200</option>
                                            <option value={285}>285</option>
                                            <option value={340}>340</option>
                                            <option value={450}>450</option>
                                            <option value={540}>540</option>
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
                                <td>KES. 20,000</td>
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
