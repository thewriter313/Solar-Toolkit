import {React,useState} from 'react'
import './accordion.css'
// import {MdOutlineArrowForwardIos} from 'react-icons/md';

const Accordion = ({question,answer,i}) => {
    const [open, setOPen] = useState(true);


    const toggle = () => {
        setOPen(!open);
      };
     
  return (
    
        <div className='accordion'>
            <div className='question' onClick={toggle}>
                <h2>{question}</h2>
                {/* <div className={open? 'rotate':'rotateafter'}><MdOutlineArrowForwardIos/></div> */}
            </div>
            <div className=' answer show'>{answer}</div>
        </div>
    
  )
}

export default Accordion