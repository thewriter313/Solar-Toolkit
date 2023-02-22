import React from "react";
// import ContactForm from "./contactform";
import "./step3.css";
import GoToTop from "./GoToTop";
import Mail from "../Assets/EmailSent.png";

const Step3 = ({ setStep, contactDetails, setContactDetails }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactDetails((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className="step3contactform">
      <div className="contactHead">
        <h1>
          Get Computed <span style={{ color: "var(--color3)" }}>Results</span>
        </h1>
      </div>
      <div className="contactBody">
        <div className="contactImage">
          <img src={Mail} alt="emailIcon" />
        </div>
        <form id="step3form" onSubmit={() => setStep(4)}>
          <div className="contactForm">
            <h2>
              Share Your Contact{" "}
              <span style={{ color: "var(--color3)" }}>Info!</span>
            </h2>
            <div className="contactField">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                name="fullname"
                value={contactDetails.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contactField">
              <label>Address</label>
              <input
                type="text"
                placeholder="Murang'a Rd, Nairobi, Kenya"
                name="address"
                value={contactDetails.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contactField">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="someone@email.com"
                name="email"
                value={contactDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contactField">
              <label>Phone Number</label>
              <input
                type="tel"
                name="pnumber"
                placeholder="+254712345678"
                pattern="\+254\d{9}"
                value={contactDetails.pnumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contactField">
              <label>
                How user friendly is Hel
                <span style={{ color: "var(--color3)" }}>EOS</span>?
              </label>
              <div className="raterange">
                <input
                  type="range"
                  min={0}
                  max={10}
                  name="rate"
                  className="slider rate"
                  value={contactDetails.rate}
                  onChange={handleChange}
                />
                <h3>{contactDetails.rate}</h3>
              </div>
            </div>
          </div>
        </form>
      </div>
      <GoToTop />
    </div>
  );
};
export default Step3;
