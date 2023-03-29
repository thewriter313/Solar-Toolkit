import  React,{ Suspense, useEffect, useState } from "react";
import GoToTop from "../../components/GoToTop";
import { Stepper } from "react-form-stepper";
import "./toolkit.css";
import Step1 from "../../components/Step1/step1";
import Step2 from "../../components/Step2/step2";
import Step3 from "../../components/Step3/step3";
import Step4 from "../../components/Step4/step4";
import bulb from "../../Assets/bulb.png";
import phoneImg from "../../Assets/phoneImg.png";
import microwaveimg from "../../Assets/microwaveimg.png";
import fridgeimg from "../../Assets/fridgeimg.png";
import laptopImg from "../../Assets/laptopImg.png";
import router from "../../Assets/Router.png";
import tubelight from "../../Assets/tubelight.webp";
import washing from "../../Assets/washing.png";
import TV from "../../Assets/TV.png";
import pump from "../../Assets/pump.png";
import ironbox from "../../Assets/ironbox.png";
import cooker from "../../Assets/cooker.png";
import fan from "../../Assets/fan.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import Papa from "papaparse";
import counties from "../../Data/counties.csv";
import catalogue from "../../Data/catalogue.csv"
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useFormspark } from "@formspark/use-formspark";

const Toolkit = () => {

  // const [step2Submit, step2Submitting] = useFormspark({
  //   formId: 'JVOsrTlqdaq',
  //   // formId: 'JVOsrTlL',
  // });

  // const [step3Submit, step3Submitting] = useFormspark({
  //   formId: 'Se6EgXIKags',
  //   // formId: 'Se6EgXIK',
  // });

  const [step, setStep] = useState(1);

  const [appliances, setAppliances] = useState([
    { id: 1, name: "Lightbulb", power: 13, hours: 5, amount: 0, img: bulb,loadType: 'Resistive'},
    { id: 2, name: "Tubelight", power: 40, hours: 5, amount: 0, img: tubelight, loadType: 'Resistive'},
    { id: 3, name: "TV", power: 150, hours: 8, amount: 0, img: TV, loadType: 'Resistive'},
    { id: 4, name: "Fridge", power: 350, hours: 15, amount: 0, img: fridgeimg, loadType: 'Reactive' },
    { id: 5, name: "Phone", power: 6, hours: 2, amount: 0, img: phoneImg, loadType: 'Resistive' },
    { id: 6, name: "Microwave", power: 1000, hours: 0.1,  amount: 0, img: microwaveimg, loadType: 'Inductive'},
    { id: 7, name: "Laptop", power: 50, hours: 10, amount: 0, img: laptopImg, loadType: 'Resistive'},
    { id: 8, name: "WiFi-Router", power: 1.9, hours: 24, amount: 0, img: router, loadType: 'Resistive' },
    { id: 9, name: "Fan", power: 60, hours: 8, amount: 0, img: fan, loadType: 'Resistive'},
    { id: 10, name: "Water Pump", power: 377, hours: 2, amount: 0, img: pump, loadType: 'Reactive'},
    { id: 11, name: "Washing Machine", power: 1000, hours: 1, amount: 0, img: washing, loadType: 'Inductive'},
    { id: 12, name: "Electric Ironbox", power: 1000, hours: 0.5, amount: 0, img: ironbox, loadType: 'Inductive'},
    { id: 13, name: "Electric Stove", power: 1000, hours: 1, amount: 0, img: cooker, loadType: 'Inductive'},
  ]);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  
  const [items, setItems] = useState([]);

  const [contactDetails, setContactDetails] = useState({
    fullname: '',
    country: 'Kenya',
    county: 'Nairobi',
    email: '',
    pnumber: '',
    rate: '',
  });

  const [qnDetails, setqnDetails] = useState({
    doa: 1,
    cost: 0,
    grid: "OffGrid",
    shade: "yesshade",
    expand: "likely",
    space: 10,
    batteryspace: "yesbatteryspace",
    appeal: "bothappeal",
  });

  const totalItems = appliances.reduce((sum, item) => sum + parseInt(item.amount), 0);

  const [preset1, setPreset1] = useState(false);
  const [preset2, setPreset2] = useState(false);
  const [preset3, setPreset3] = useState(false);

  const deleteAppliance = (id) => {
      setAppliances((appliances) =>
          appliances.filter((appliance) => appliance.id !== id)
      );
  };

  //fetch data from counties csv file
  const [countyData, setCountyData] = useState();

  useEffect(() => {
      const fetchCountyData = async () => {
          Papa.parse(counties, {
              download: true,
              delimiter: ",",
              complete: (result) => {
                  setCountyData(result.data);
              },
          });
      };
      fetchCountyData();
  }, []);

  const [catalogueData, setCatalogueData] = useState();

  useEffect(() => {
    const fetchCatalogueData = async () => {
        Papa.parse(catalogue, {
            download: true,
            delimiter: ",",
            complete: (result) => {
                setCatalogueData(result.data);
            },
        });
    };
    fetchCatalogueData();
  }, []);

  const [myDoc, setData] = useState()

  function getFromChild(data) {
    setData(data)
  }

  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
  };

  const handleFinish = async () => {
    toast.success('Your document is Downloading', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    await sleep(3000);
    window.location.reload(true)
  }

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
        <>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
        
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
                    sleep={sleep}
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
                    // step2Submit={step2Submit}
                  />
                  <div className="flexrow button-class">
                    <button className="btn1" onClick={() => setStep(1)}>
                      <IoIosArrowBack /> Back
                    </button>
                    <button 
                      className="btn1" 
                      form="step2form" 
                    // disabled={step2Submitting}>
                    >
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
                    // step3Submit={step3Submit}
                  />
                  <div className="flexrow button-class">
                    <button className="btn1" onClick={() => setStep(2)}>
                      <IoIosArrowBack /> Back
                    </button>
                    <button type="submit" className="btn1" form="step3form" 
                    // disabled={step3Submitting}>
                      >
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
                    setStep={setStep}
                    appliances={appliances}
                    contactDetails={contactDetails}
                    qnDetails={qnDetails}
                    getFromChild={getFromChild}
                    countyData={countyData}
                    catalogueData={catalogueData}
                  />
                  <div className="flexrow button-class">
                  <button className="btn1" onClick={() => setStep(3)}>
                      <IoIosArrowBack /> Back
                    </button>
                    {/* <button className="btn1" onClick={() => setStep(3)}>
                      Finish<GiCheckeredFlag size={20}/>
                    </button> */}
                  <Suspense fallback={<div>Loading PDF...</div>}>
                  {myDoc &&
                    <PDFDownloadLink
                      document={myDoc}
                      fileName={"HelEOS Solar Quotation" + new Date().getMinutes()}
                      className='btn1'
                      style={{ textDecoration: 'none', height:'fit-content' }}
                      onClick={handleFinish}
                      >
                      {({ loading }) => loading ? ("Loading Doc...") : ("Finish" )
                      }
                    </PDFDownloadLink>}
                  </Suspense>
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
