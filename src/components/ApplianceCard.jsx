import {React} from "react";
import './applianceCard.css'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io'

const ApplianceCard = (props) => {
    

  return (
    <div className= {props.amount >0 ? 'appliance-card active':'appliance-card'}>
        <button onClick={()=>props.increment(props.name,props.amount)}><IoIosArrowUp/></button>
      <div onClick={()=>props.increment(props.name,props.amount)} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h4 style={{textAlign:'center', padding:'0.5em'}}>{props.name}</h4>
        <img src={props.img} alt="image1" height={"100em"} />
      </div>
      <h3 style={{fontSize:'2em', padding:'0.5em', fontWeight:"500", margin:'0'}}>{props.amount}</h3>
      <button disabled={props.amount===0} onClick={()=>props.decrement(props.name,props.amount)}><IoIosArrowDown/></button>
    </div>
  );
};

export default ApplianceCard;
