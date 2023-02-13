import { React, useState, useEffect } from "react";

const Step4 = (formData) => {
  console.log(formData);

  const [data, setData] = useState([]);
  const [calcData, setCalcData] = useState([]);

  useEffect(() => {
    setData(formData.formData.items);
    setCalcData(formData.formCalculations.items);
  }, [formData.formData.items,formData.formCalculations.items]);
  console.log(data);
  console.log(calcData);

  return (
    <div>
      {data.map((data, index) => (
        <li key={index}>{data.appliance}</li>
      ))}
      {calcData.map((data, index) => (
        <li key={index}>{data.quantity}</li>
      ))}
    </div>
  );
};

export default Step4;
