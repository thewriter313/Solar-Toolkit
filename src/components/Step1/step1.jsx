import React from "react";
import GoToTop from "../GoToTop";
import "./step1.css";
import Preset from "../preset";
import large from "../../Assets/large.png";
import small from "../../Assets/small.png";
import rural from "../../Assets/rural.png";
import ApplianceCard from "../ApplianceCard";
import { Tooltip } from "react-tippy";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Addcard from "../Addcard/Addcard";
import { toast } from 'react-toastify';

const Step1 = ({
  appliances,
  setAppliances,
  preset1,
  preset2,
  preset3,
  setPreset1,
  setPreset2,
  setPreset3,
  deleteAppliance,
  sleep,
}) => {

  //increasing amount on click
  const incrementAmount = (id) => {
    setAppliances((appliances) =>
      appliances.map((appliance) =>
        appliance.id === id && ((appliance.power >= 500 && appliance.amount === 0) || appliance.power < 500)
          ? { ...appliance, amount: appliance.amount + 1 }
          : appliance
      )
      
     
    );
    appliances.map((appliance) =>
      appliance.id === id && ((appliance.power >= 500 && appliance.amount === 1))
        ? notify(<center>You can not add more than 1 inductive load</center>,'inductive'): appliance
    )
  
  };

  const added = () => {
    console.log('added')
    notify('Appliance added successfully','success')
  }

  const toastStyle ={
    toastId: '1',
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    }

  const notify = async(message,type) => {
    (type === 'inductive' ? toast.warning(message,toastStyle) : toast.success(message,toastStyle));
    await sleep(2000);
  }



  //decreasing amount on click
  const decrementAmount = (id) => {
    setAppliances((appliances) =>
      appliances.map((appliance) =>
        appliance.id === id
          ? { ...appliance, amount: appliance.amount - 1 }
          : appliance
      )
    );
  };

  // Function to add 3 presets
  const handlePreset = (X) => {
    const newArray = [...appliances];

    if (X === 0) {
      const updatedArray = newArray.map((obj) =>
        obj.name === "Tubelight"
          ? { ...obj, amount: 3 }
          : obj.name === "Lightbulb"
          ? { ...obj, amount: 3 }
          : obj.name === "TV"
          ? { ...obj, amount: 1 }
          : obj.name === "Fridge"
          ? { ...obj, amount: 1 }
          : obj.name === "Phone"
          ? { ...obj, amount: 3 }
          : obj.name === "Microwave"
          ? { ...obj, amount: 1 }
          : obj.name === "Laptop"
          ? { ...obj, amount: 1 }
          : obj.name === "WiFi-Router"
          ? { ...obj, amount: 1 }
          : obj.name === "Fan"
          ? { ...obj, amount: 0 }
          : obj.name === "Water Pump"
          ? { ...obj, amount: 0 }
          : obj.name === "Washing Machine"
          ? { ...obj, amount: 0 }
          : obj.name === "Electric Ironbox"
          ? { ...obj, amount: 0 }
          : obj.name === "Electric Stove"
          ? { ...obj, amount: 0 }
          :obj
      );

      setAppliances(updatedArray);

      setPreset1(true);
      setPreset2(false);
      setPreset3(false);
    }

    if (X === 1) {
      const updatedArray = newArray.map((obj) =>
        obj.name === "Tubelight"
          ? { ...obj, amount: 15 }
          : obj.name === "Lightbulb"
          ? { ...obj, amount: 5 }
          : obj.name === "TV"
          ? { ...obj, amount: 2 }
          : obj.name === "Fridge"
          ? { ...obj, amount: 1 }
          : obj.name === "Phone"
          ? { ...obj, amount: 5 }
          : obj.name === "Microwave"
          ? { ...obj, amount: 1 }
          : obj.name === "Laptop"
          ? { ...obj, amount: 3 }
          : obj.name === "WiFi-Router"
          ? { ...obj, amount: 1 }
          : obj.name === "Fan"
          ? { ...obj, amount: 2 }
          : obj.name === "Water Pump"
          ? { ...obj, amount: 0 }
          : obj.name === "Washing Machine"
          ? { ...obj, amount: 0 }
          : obj.name === "Electric Ironbox"
          ? { ...obj, amount: 1 }
          : obj.name === "Electric Stove"
          ? { ...obj, amount: 0 }
          :obj
      );

      setAppliances(updatedArray);

      setPreset1(false);
      setPreset2(true);
      setPreset3(false);
    }

    if (X === 2) {
      const updatedArray = newArray.map((obj) =>
        obj.name === "Tubelight"
          ? { ...obj, amount: 3 }
          : obj.name === "Lightbulb"
          ? { ...obj, amount: 2 }
          : obj.name === "TV"
          ? { ...obj, amount: 0 }
          : obj.name === "Fridge"
          ? { ...obj, amount: 0 }
          : obj.name === "Phone"
          ? { ...obj, amount: 2 }
          : obj.name === "Microwave"
          ? { ...obj, amount: 0 }
          : obj.name === "Laptop"
          ? { ...obj, amount: 0 }
          : obj.name === "WiFi-Router"
          ? { ...obj, amount: 0 }
          : obj.name === "Fan"
          ? { ...obj, amount: 0 }
          : obj.name === "Water Pump"
          ? { ...obj, amount: 0 }
          : obj.name === "Washing Machine"
          ? { ...obj, amount: 0 }
          : obj.name === "Electric Ironbox"
          ? { ...obj, amount: 1 }
          : obj.name === "Electric Stove"
          ? { ...obj, amount: 0 }
          :obj
      );

      setAppliances(updatedArray);

      setPreset1(false);
      setPreset2(false);
      setPreset3(true);
    }
  };

  return (
    <div className="flexcolumn container-step1">
      <h1>
        Step 1:
        <span style={{ color: "var(--color3)" }}> Load </span>Sizing
      </h1>
      <div className="flexcolumn section-1">
        <h2>
          What would you say is the size of your house?{" "}
          <Tooltip
            arrow="true"
            position="right"
            
            html={
              <p style={{ fontFamily: "rubik", margin: "0.1em" }}>
                Pick an option that closely resembles the size of house.
              </p>
            }
          >
            <IoIosInformationCircleOutline />
          </Tooltip>
        </h2>
        <div className="flexrow preset">
          <div onClick={() => handlePreset(0)}>
            <Preset
              presetName={"Small House"}
              presetImg={small}
              style={
                preset1 ? "flexrow preset-card on" : "flexrow preset-card "
              }
            />
          </div>
          <div onClick={() => handlePreset(1)}>
            <Preset
              presetName={"Large House"}
              presetImg={large}
              style={
                preset2 ? "flexrow preset-card on" : "flexrow preset-card "
              }
            />
          </div>
          <div onClick={() => handlePreset(2)}>
            <Preset
              presetName={"Rural House"}
              presetImg={rural}
              style={
                preset3 ? "flexrow preset-card on" : "flexrow preset-card "
              }
            />
          </div>
        </div>
      </div>
      <div className="section-1">
        <h2>What appliances do you have?</h2>
        <div className="flexrow appliances">
          {appliances.map((data, i) => (
            <ApplianceCard
              setData={setAppliances}
              key={i}
              name={data.name}
              amount={data.amount}
              img={data.img}
              decrement={decrementAmount}
              increment={incrementAmount}
              data={data}
              deleteAppliance={deleteAppliance}
            />
          ))}
          <Addcard appliances={appliances} setAppliances={setAppliances} notify={notify} added={added}/>
        </div>
      </div>

      <GoToTop />
    </div>
  );
};

export default Step1;
