import React,{useState, useEffect} from "react";
import "./applianceCard.css";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosInformationCircle,
  IoMdClose
} from "react-icons/io";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

const ApplianceCard = (props) => {
  const [closeable, setCloseable] = useState(false);
 
  useEffect(()=>{
    if (props.data.id > 9) {
      setCloseable(true);}
  },[props.data.id])
  
  return (
    <div 
      className={props.amount > 0 ? "flexcolumn appliance-card on" : "flexcolumn appliance-card"}
    >
      <div style={{ position: "absolute", translate: "-4.7em -8em", cursor:'pointer'}}>
        <Tooltip 
          title="Ratings"
          arrow="true"
          html={(
            <div style={{fontFamily:'rubik', fontSize:'0.8em', textAlign:'left'}}>
              <p style={{margin:'0'}} >Power: {props.data.power} W</p>
              <p style={{margin:'0'}} >Hours Utilized Daily: {props.data.hours} hours</p>
            </div>
          )}
          >
          <IoIosInformationCircle size={'1.5em'}></IoIosInformationCircle>
        </Tooltip>
        <div className={closeable ? '':'off'} style={{ position: "absolute", translate: "10em -2em", cursor:'pointer' }} onClick={()=>props.deleteAppliance(props.data.id)}>
        <IoMdClose size={'1.5em'}></IoMdClose>
        </div>
      </div>
      <button onClick={() => props.increment(props.data.id)}>
        <IoIosArrowUp size={'20px'}/>
      </button>
      <div
        onClick={() => props.increment(props.data.id)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
          <h4 style={{ textAlign: "center", padding: "0.5em" }}>
            {props.name}
          </h4>
        
        <img src={props.img} alt="image1" height={"100em"} />
      </div>
      <h3
        style={{
          fontSize: "2em",
          padding: "0.5em",
          fontWeight: "500",
          margin: "0",
          fontFamily: "dosis",
        }}
      >
        {props.amount}
      </h3>
      <button
        disabled={props.amount === 0}
        onClick={() => props.decrement(props.data.id)}
      >
        <IoIosArrowDown />
      </button>
    </div>
  );
};

export default ApplianceCard;
