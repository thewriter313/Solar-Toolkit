import React, { useState } from "react";
import "./form.css";
// import { useFormspark } from "@formspark/use-formspark";

const Form = () => {
  // const FORM_ID = 'DY8qfjiV';
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setValues({
      name: "",
      email: "",
      message: "",
    });
    setSubmitted(true);
  };

  return (
    <form className="contactform" onSubmit={handleSubmit}>
      <div className="flexcolumn">
        {submitted ? (
          <p className="pass">Your message has been recieved. Thank you.</p>
        ) : null}
      </div>
      <div className="formarea flexcolumn">
        <label>Name:</label>
        <input
          className="input"
          type="text"
          name="name"
          required
          value={values.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          className="input"
          type="email"
          name="email"
          required
          value={values.email}
          onChange={handleChange}
        />
        <label>Message:</label>
        <textarea
          className="input"
          type="text"
          name="message"
          required
          value={values.message}
          onChange={handleChange}
        />
        <button type="submit" className="submitbtn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
