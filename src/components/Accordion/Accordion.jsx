import {React,useState} from 'react'
import './accordion.css'

const Accordion = ({question,answer}) => {
    const [open, setOPen] = useState(true);


    const toggle = () => {
        setOPen(!open);
      };
     
  return (
    
        <div className='accordion'>
            <div className='question' onClick={toggle}>
                <h2>{question}</h2>
            </div>
            <div className=' answer'>{answer}</div>
        </div>
    
  )
}

export default Accordion