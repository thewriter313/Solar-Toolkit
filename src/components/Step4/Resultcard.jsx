import React, { useState } from "react";
import "./Resultcard.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";

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
        <div className="resultCardContainer flex flexcolumn">
            <div className="resultCardHead flex" onClick={toggleCard}>
                <h2>{title}</h2>
                <i className={isOpen ? "arrowDown" : "arrowRight"}>
                    <MdOutlineArrowForwardIos />
                </i>
            </div>

            <div
                className={
                    isOpen
                        ? "resultCardBody flex bodyOpen"
                        : "resultCardBody flex"
                }>
                <div className="resultCardImage flex">
                    <img src={image} alt="eqmuipmentImage" />
                </div>
                <div className="resultCardText flex">
                    {type && (
                        <div className="resultCardValue flex">
                            <p className="resultCardProperty">{type} </p>
                            <p>{typeValue}</p>
                        </div>
                    )}
                    {voltage && (
                        <div className="resultCardValue flex">
                            <p className="resultCardProperty">{voltage} </p>
                            {title === "Battery" ? (
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
                                    <p>V</p>
                                </>
                            ) : (
                                <p>{voltageValue} V</p>
                            )}
                        </div>
                    )}
                    {capacity && (
                        <div className="resultCardValue flex">
                            <p className="resultCardProperty">{capacity} </p>
                            <p>{capacityValue} Ah</p>
                        </div>
                    )}
                    {quantity && (
                        <div className="resultCardValue flex">
                            <p className="resultCardProperty">{quantity} </p>
                            <p>{quantityValue} pcs</p>
                        </div>
                    )}
                    {power && (
                        <div className="resultCardValue flex">
                            <p className="resultCardProperty">{power} </p>
                            {title === "Solar Panel" ? (
                                <>
                                    <select
                                        name="panelWattage"
                                        value={propertyValues.panelWattage}
                                        onChange={handleChange}>
                                        <option value={50}>50</option>
                                        <option value={100}>100</option>
                                        <option value={150}>150</option>
                                        <option value={200}>200</option>
                                    </select>
                                    <p>Watts</p>
                                </>
                            ) : (
                                <p>{powerValue} Watts</p>
                            )}
                        </div>
                    )}
                    {amps && (
                        <div className="resultCardValue flex">
                            <p className="resultCardProperty">{amps} </p>
                            <p>{ampsValue} A</p>
                        </div>
                    )}
                    {price && (
                        <div className="resultCardValue flex">
                            <p className="resultCardProperty">{price} </p>
                            <p>KES. 20,000</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Resultcard;