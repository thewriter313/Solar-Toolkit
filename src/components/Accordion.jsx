import {React,useState} from 'react'
import './accordion.css'
import {MdOutlineArrowForwardIos} from 'react-icons/md';

const Accordion = ({question,answer,i}) => {

    const [selected,setSelected] =useState(null)

    const toggle =(i)  => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }  
  return (
    
        <div className='accordion'>
            <div className='question' onClick={()=> toggle(i)}>
                <h2>{question}</h2>
                <div className={selected === i ? 'rotate':'rotateafter'}><MdOutlineArrowForwardIos/></div>
            </div>
            <div className={selected === i ? 'answer show':' answer'}>{answer}</div>
        </div>
    
  )
}

export default Accordion