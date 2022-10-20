import React, {useState,useRef} from "react";
import "./collapsible.css";
import {MdOutlineArrowForwardIos} from 'react-icons/md';


const Collapsible = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  const parentRef = useRef();

  if (parentRef.current) console.log(parentRef);



  return (
    <div className="collapsible-body">
        <div  onClick={toggle} className='collapsible-head'>
        <h2>{props.label}</h2>
        <div className={open === true ? 'rotate':'rotateafter'}><MdOutlineArrowForwardIos/></div>
        </div>
        <div className="content-parent" 
            ref={parentRef} 
            style={
              (open ? {height:(parentRef.current.scrollHeight) +"px"}:{height:'0px'}) 
            }
            >
          <div>{props.children}</div>
        </div>
       
    </div>
  );
};

export default Collapsible;