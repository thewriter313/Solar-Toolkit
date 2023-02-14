import { React, useState, useEffect } from "react";

const Step4 = ({ formData, qnDetails, contactDetails }) => {

  return (
   <div>
      <div>
        <p>Fullname: {contactDetails.fullname}</p>
        <p>Address: {contactDetails.address}</p>
        <p>E-mail: {contactDetails.email}</p>
        <p>Phone Number: {contactDetails.pnumber}</p>
        <p>Days of Autonomy: {qnDetails.doa}</p>
        <p>Cost or Reliable: {qnDetails.cost}</p>
      </div>
      </div>

  //console.log(props);

  //const [dataTypical, setDataTypical] = useState([]);
  //const [dataSpecial, setDataSpecial] = useState([]);
  //const [calcData, setCalcData] = useState([]);

  //useEffect(() => {
    //setDataTypical(props.typicalAppliances.items);
    //setDataSpecial(props.specialAppliances.items);
    //setCalcData(props.inputCalculations.items);
  //}, [props.typicalAppliances.items,props.specialAppliances.items,props.inputCalculations.items]);
  //console.log(dataTypical);
  //console.log(calcData);
  //console.log(dataSpecial);

  //return (
    //<div>
      //{dataTypical.map((data, index) => (
        //<li key={index}>{data.name},{data.amount}</li>
      //))}
      //{calcData.map((data, index) => (
        //<li key={index}>{data.quantity},{data.value}</li>
      //))}
    //</div>
  //);
//};

export default Step4;
