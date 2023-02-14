import React from "react";
// import ContactForm from "./contactform";
import "./step3.css";
import GoToTop from "../components/GoToTop";

const Step3 = ({ setStep, contactDetails, setContactDetails }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactDetails((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="step3contactform">
      <div className="contactcontainer">
        <div className="contacthead">
          <h2>Get Your Results!</h2>
          <p>Provide contact details to recieve the results.</p>
        </div>
        <form id="step3form" onSubmit={() => setStep(4)}>
          <div className="contactrow">
            <div className="contactfield">
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
            <div className="contactfield">
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
            <div className="contactfield">
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
            <div className="contactfield">
              <label>Phone Number</label>
              <input
                type="tel"
                name="pnumber"
                placeholder="+254712345678"
                pattern="[+254]{4}[0-9]{9}"
                value={contactDetails.pnumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
      </div>
      {/* <ContactForm /> */}
      <GoToTop />
    </div>
  );
};

export default Step3;
