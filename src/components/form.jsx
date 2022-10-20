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

  const handleNameChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };
  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleMessageChange = (event) => {
    setValues({ ...values, message: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values)
    setValues({
        name:'',
        email:'',
        message:'',
    })
    setSubmitted(true);
  };

  return (
    <form className="contactform" onSubmit={ handleSubmit }>
      <div className="passfail">
        {submitted ?
          <p className="pass">
            Your message has been recieved. Thank you.
          </p> : null}
      </div>
      <div className="formarea">
        <label>Name:</label>
        <input
          className="input"
          type="text"
          required
          value={values.name}
          onChange={handleNameChange}
        />
        <label>Email:</label>
        <input
          className="input"
          type="email"
          required
          value={values.email}
          onChange={handleEmailChange}
        />
        <label>Message:</label>
        <textarea
          className="input"
          type="text"
          required
          value={values.message}
          onChange={handleMessageChange}
        />
        <button type="submit" className="submitbtn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
