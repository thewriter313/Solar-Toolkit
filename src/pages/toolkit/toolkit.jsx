import { React, useState } from "react";
import GoToTop from "../../components/GoToTop";
import { Stepper } from "react-form-stepper";
import "./toolkit.css";
import Step1 from "../../components/step1";
import Step2 from "../../components/step2";
import Step3 from "../../components/step3";
import Step4 from "../../components/step4";

const Toolkit = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

 const [specialAppliances]=useState({});

 const [typicalAppliances]=useState({});

 const [inputCalculations]=useState({quantity:'',value:0});

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
                <div style={{width:'70%'}}>
                  <Step1 specialAppliances={specialAppliances}  typicalAppliances={typicalAppliances} inputCalculations={inputCalculations} />
                  <div className="button-class">
                    <button className="button" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </div>
              );
            case 2:
              return (
                <div style={{width:'70%'}}>
                  <Step2 />
                  <div className="button-class">
                    <button className="button" onClick={handleBack}>
                      Back
                    </button>
                    <button className="button" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </div>
              );
            case 3:
              return (
                <div style={{width:'70%'}}>
                  <Step3 />
                  <div className="button-class">
                    <button className="button" onClick={handleBack}>
                      Back
                    </button>
                    <button className="button" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </div>
              );
            case 4:
              return (
                <div style={{width:'70%'}}>
                  <Step4 specialAppliances={specialAppliances}  typicalAppliances={typicalAppliances} inputCalculations={inputCalculations} />
                  <div className="button-class">
                    <button className="button" onClick={handleBack}>
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
