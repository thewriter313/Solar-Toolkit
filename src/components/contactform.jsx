import React, { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    address: "",
    email: "",
    pnumber: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${inputs.name} ${inputs.address} ${inputs.email} ${inputs.number}`);
  };

  return (
    <div className="contactcontainer">
      <div className="contacthead">
        <h2>Get Your Results!</h2>
        <p>Provide contact details to recieve the results.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contactrow">
          <div className="contactfield">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              value={inputs.name}
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
              value={inputs.address}
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
              value={inputs.email}
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
              value={inputs.pnumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
