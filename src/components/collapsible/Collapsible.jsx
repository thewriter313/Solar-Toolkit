import React, {useState} from "react";
import "./collapsible.css";
import {MdOutlineArrowForwardIos} from 'react-icons/md';


const Collapsible = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="collapsible-body">
        <div  onClick={toggle} className='collapsible-head'>
        <h2>{props.label}</h2>
        <div className={open === true ? 'rotate':'rotateafter'}><MdOutlineArrowForwardIos/></div>
        </div>
        {open && <div className={open ? 'collapsible-content active':'collapsible-content'}>{props.children}</div>}
    </div>
  );
};

export default Collapsible;