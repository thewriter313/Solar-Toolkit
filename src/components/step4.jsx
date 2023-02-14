import { React, useState, useEffect } from "react";

const Step4 = ({ formData, qnDetails, contactDetails }) => {
  // console.log({ formData });

  // const [data, setData] = useState([]);
  // const [calcData, setCalcData] = useState([]);

  // useEffect(() => {
  //   setData({formData}.formData.items);
  //   setCalcData({formData}.formCalculations.items);
  // }, [{formData}.formData.items,formData.formCalculations.items]);
  // console.log(data);
  // console.log(calcData);

  return (
    <div>
      {/* {data.map((data, index) => (
        <li key={index}>{data.appliance}</li>
      ))}
      {calcData.map((data, index) => (
        <li key={index}>{data.quantity}</li>
      ))} */}
      <div>
        <p>Fullname: {contactDetails.fullname}</p>
        <p>Address: {contactDetails.address}</p>
        <p>E-mail: {contactDetails.email}</p>
        <p>Phone Number: {contactDetails.pnumber}</p>
        <p>Days of Autonomy: {qnDetails.doa}</p>
        <p>Cost or Reliable: {qnDetails.cost}</p>
      </div>


    </div>
  );
};

export default Step4;
