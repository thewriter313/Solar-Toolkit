import React from "react";

const Step4 = ({ appliances, items, qnDetails, contactDetails }) => {
  
  console.log(appliances);
  console.log(items);
  console.log(qnDetails);
  console.log(contactDetails);

  // Total Energy
  const totalEnergy = items.reduce((sum, item) => sum + item.energy, 0)+(appliances.reduce((sum, item) => sum + item.power*parseInt(item.amount)*item.hours,0));

  // // Total Power
  const totalPower = items.reduce((sum, item) => sum + item.power*parseInt(item.amount), 0)+(appliances.reduce((sum, item) => sum + item.power*parseInt(item.amount),0));

  //Total items
  const totalItems = items.reduce((sum, item) => sum + parseInt(item.amount) ,0)+(appliances.reduce((sum, item) => sum + parseInt(item.amount),0));
  


  return (
    <div>
      <div>
        <p>Fullname: {contactDetails.fullname}</p>
        <p>Address: {contactDetails.address}</p>
        <p>E-mail: {contactDetails.email}</p>
        <p>Phone Number: {contactDetails.pnumber}</p>
        <p>Days of Autonomy: {qnDetails.doa}</p>
        <p>Cost or Reliable: {qnDetails.cost}</p>
        <p>
          {appliances.map((appliances, i) => (
            <li key={i}> Number of {appliances.name}s: {appliances.amount}-----each with power demand of {appliances.power}</li>
          ))}
        </p>
        <p>
          {items.map((items, i) => (
            <li key={i}>Number of {items.appliance}: {items.amount}-----each with power demand of {items.power}</li>
          ))}
         
        </p>
        <p>Total energy= {totalEnergy} Wh</p>
          <p>Total Power = {totalPower} W</p>
          <p>Toatl items ={totalItems}</p>
      </div>
    </div>
  );
};

export default Step4;
