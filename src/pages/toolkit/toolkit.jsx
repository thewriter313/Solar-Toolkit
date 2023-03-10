import  React,{ useEffect, useState } from "react";
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
import router from "../../Assets/Router.png";
import tubelight from "../../Assets/tubelight.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import Papa from "papaparse";
import counties from "../../Data/counties.csv";

const Toolkit = () => {
  const [step, setStep] = useState(1);

  const [appliances, setAppliances] = useState([
    { id: 1, name: "Lightbulb", power: 13, hours: 8, amount: 0, img: bulb },
    { id: 2, name: "Tubelight", power: 40, hours: 8, amount: 0, img: tubelight },
    { id: 3, name: "TV", power: 150, hours: 8, amount: 0, img: oldTV },
    { id: 4, name: "Fridge", power: 350, hours: 24, amount: 0, img: fridgeimg },
    { id: 5, name: "Phone", power: 6, hours: 2, amount: 0, img: phoneImg },
    { id: 6, name: "Microwave", power: 1000, hours: 0.1,  amount: 0, img: microwaveimg},
    { id: 7, name: "Laptop", power: 50, hours: 10, amount: 0, img: laptopImg },
    { id: 8, name: "WiFi-Router", power: 1.9, hours: 24, amount: 0, img: router },
    { id: 9, name: "Fan", power: 60, hours: 8, amount: 0, img: bulb},
    { id: 10, name: "Water Pump", power: 377, hours: 3, amount: 0, img: bulb},
    { id: 11, name: "Washing Machine", power: 1000, hours: 1, amount: 0, img: bulb},
    { id: 12, name: "Electric Ironbox", power: 1000, hours: 0.1, amount: 0, img: bulb},
    { id: 13, name: "Electric Stove", power: 1000, hours: 0.1, amount: 0, img: bulb},
  ]);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  
  const [items, setItems] = useState([]);

  const [contactDetails, setContactDetails] = useState({
    fullname: "",
    country: "Kenya",
    city: "",
    county: "",
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

  const totalItems = appliances.reduce((sum, item) => sum + parseInt(item.amount), 0);

  const [preset1, setPreset1] = useState(false);
  const [preset2, setPreset2] = useState(false);
  const [preset3, setPreset3] = useState(false);

  const deleteAppliance = (id) => {
    setAppliances((appliances) =>
        appliances.filter((appliance) => appliance.id !== id)
    )};

     //fetch data from counties csv file
     const [countyData, setCountyData] = useState();

     useEffect(() => {
        const fetchCountyData = async () => {
         Papa.parse(counties, {
             download: true,
             delimiter: ",",
             complete:((result) => {
                 setCountyData(result.data);
             })
         })
        }
          fetchCountyData();
     },[]);
 

  return (
    <div>
      <div  className="flexcolumn toolkit-container">
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
            size: "3.2em",
            labelFontSize: "2em",
            
            fontWeight: "bold",
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
                    deleteAppliance={deleteAppliance}
                  />
                  <div className="flexrow button-class">
                    <button
                      disabled={totalItems === 0}
                      className="btn1"
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
                  <div className="flexrow button-class">
                    <button className="btn1" onClick={() => setStep(1)}>
                      <IoIosArrowBack /> Back
                    </button>
                    <button className="btn1" form="step2form" >
                      Next <IoIosArrowForward />
                    </button>
                  </div>
                </div>
              );
            case 3:
              return (
                <div style={{ width: "70%" }}>
                  <Step3
                  countyData={countyData}
                    setStep={setStep}
                    contactDetails={contactDetails}
                    setContactDetails={setContactDetails}
                  />
                  <div className="flexrow button-class">
                    <button className="btn1" onClick={() => setStep(2)}>
                      <IoIosArrowBack /> Back
                    </button>
                    <button className="btn1" form="step3form">
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
                  <div className="flexrow button-class">
                  <button className="btn1" onClick={() => setStep(3)}>
                      <IoIosArrowBack /> Back
                    </button>
                    <button className="btn1">
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
