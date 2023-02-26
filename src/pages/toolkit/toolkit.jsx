import { React, useState } from "react";
import GoToTop from "../../components/GoToTop";
import { Stepper } from "react-form-stepper";
import "./toolkit.css";
import Step1 from "../../components/Step1/step1";
import Step2 from "../../components/Step2/step2";
import Step3 from "../../components/Step3/step3";
import Step4 from "../../components/Step4/step4";
import bulb from "../../Assets/bulb.png";
import oldTV from "../../Assets/oldTV.png";
import phoneImg from "../../Assets/phoneImg.png";
import microwaveimg from "../../Assets/microwaveimg.png";
import fridgeimg from "../../Assets/fridgeimg.png";
import laptopImg from "../../Assets/laptopImg.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Toolkit = () => {
  const [step, setStep] = useState(1);

  const [appliances, setAppliances] = useState([
    { id: 1, name: "Lightbulb", power: 13, hours: 5, amount: 0, img: bulb },
    { id: 2, name: "TV", power: 150, hours: 8, amount: 0, img: oldTV },
    { id: 3, name: "Fridge", power: 350, hours: 24, amount: 0, img: fridgeimg },
    { id: 4, name: "Phone", power: 6, hours: 2, amount: 0, img: phoneImg },
    {
      id: 5,
      name: "Microwave",
      power: 1000,
      hours: 0.1,
      amount: 0,
      img: microwaveimg,
    },
    { id: 6, name: "Laptop", power: 50, hours: 10, amount: 0, img: laptopImg },
  ]);

  const [items, setItems] = useState([]);

  const [contactDetails, setContactDetails] = useState({
    fullname: "",
    address: "",
    email: "",
    pnumber: "",
    rate: '',
  });

  const [qnDetails, setqnDetails] = useState({
    doa: 3,
    cost: 0,
    grid: "OffGrid",
    shade: "yesshade",
    expand: "likely",
    space: "0",
    batteryspace: "nobatteryspace",
    appeal: "yesappeal",
  });

  const totalItems =
    items.reduce((sum, item) => sum + parseInt(item.amount), 0) +
    appliances.reduce((sum, item) => sum + parseInt(item.amount), 0);

  const [preset1, setPreset1] = useState(false);
  const [preset2, setPreset2] = useState(false);
  const [preset3, setPreset3] = useState(false);

  return (
    <div>
      <div className="toolkit-container">
        <Stepper
          steps={[
            { label: "Load Sizing" },
            { label: "Design Questions" },
            { label: "Contact Details" },
            { label: "Summary" },
          ]}
          activeStep={step - 1}
          styleConfig={{
            activeBgColor: "#000000",
            activeTextColor: "#fff",
            inactiveBgColor: "#dddddd",
            inactiveTextColor: "#000",
            completedBgColor: "#00bf8c",
            completedTextColor: "#fff",
            size: "2.8em",
            labelFontSize: "1.7em",
            fontWeight: "bold",
          }}
          connectorStyleConfig={{
            disabledColor: "#888",
            activeColor: "#00bf8c",
          }}
          className={"stepper"}
          stepClassName={"stepper_step"}
        />

        {(() => {
          switch (step) {
            case 1:
              return (
                <div style={{ width: "70%" }}>
                  <Step1
                    items={items}
                    setItems={setItems}
                    appliances={appliances}
                    setAppliances={setAppliances}
                    preset1={preset1}
                    setPreset1={setPreset1}
                    preset2={preset2}
                    setPreset2={setPreset2}
                    preset3={preset3}
                    setPreset3={setPreset3}
                  />
                  <div className="button-class">
                    <button
                      disabled={totalItems === 0}
                      className="button"
                      onClick={() => setStep(2)}
                    >
                      Next <IoIosArrowForward />
                    </button>
                  </div>
                </div>
              );
            case 2:
              return (
                <div style={{ width: "70%" }}>
                  <Step2
                    setStep={setStep}
                    qnDetails={qnDetails}
                    setqnDetails={setqnDetails}
                  />
                  <div className="button-class">
                    <button className="button" onClick={() => setStep(1)}>
                      <IoIosArrowBack /> Back
                    </button>
                    <button className="button" type="submit" form="step2form">
                      Next <IoIosArrowForward />
                    </button>
                  </div>
                </div>
              );
            case 3:
              return (
                <div style={{ width: "70%" }}>
                  <Step3
                    setStep={setStep}
                    contactDetails={contactDetails}
                    setContactDetails={setContactDetails}
                  />
                  <div className="button-class">
                    <button className="button" onClick={() => setStep(2)}>
                      <IoIosArrowBack /> Back
                    </button>
                    <button className="button" type="submit" form="step3form">
                      Next <IoIosArrowForward />
                    </button>
                  </div>
                </div>
              );
            case 4:
              return (
                <div style={{ width: "70%" }}>
                  <Step4
                    items={items}
                    appliances={appliances}
                    contactDetails={contactDetails}
                    qnDetails={qnDetails}
                  />
                  <div className="button-class">
                    <button className="button" onClick={() => setStep(3)}>
                      Finish
                    </button>
                  </div>
                </div>
              );
            default:
              return <div />;
          }
        })()}
      </div>
      <GoToTop />
    </div>
  );
};

export default Toolkit;
