import React from "react";
// import ContactForm from "./contactform";
import "./step3.css";
import GoToTop from "../GoToTop";
import Mail from "../../Assets/EmailSent.png";

const Step3 = ({ contactDetails, setContactDetails }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactDetails((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className="flexcolumn step3contactform">
      <div className="contactHead">
        <h1>
          Get Computed <span style={{ color: "var(--color3)" }}>Results</span>
        </h1>
      </div>
      <div className="flexrow contactBody">
        <div className="contactImage">
          <img src={Mail} alt="emailIcon" />
        </div>
          <div className="flexcolumn contactForm">
            <h2>
              Share Your Contact{" "}
              <span style={{ color: "var(--color3)" }}>Info!</span>
            </h2>
            <div className="flexcolumn contactField">
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
            <div className="flexcolumn contactField">
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
            <div className="flexcolumn contactField">
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
            <div className="flexcolumn contactField">
              <label>Phone Number</label>
              <input
                type="tel"
                name="pnumber"
                placeholder="+254712345678"
                pattern="\+254\d{9}"
                value={contactDetails.pnumber}
                onChange={handleChange}
                // required
              />
            </div>
            <div className="flexcolumn contactField">
              <label>
                How user friendly is Hel
                <span style={{ color: "var(--color3)" }}>EOS</span>?
              </label>
              <div className="flexrow raterange">
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={0.01}
                  name="rate"
                  className="slider rate"
                  value={contactDetails.rate}
                  onChange={handleChange}
                />
                <h2>{Math.round(contactDetails.rate)}</h2>
              </div>
            </div>
          </div>
      </div>
      <GoToTop />
    </div>
  );
};
export default Step3;
