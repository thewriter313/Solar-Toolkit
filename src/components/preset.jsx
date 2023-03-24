import React from 'react'


const Preset = ({presetName,presetImg,style}) => {
  return (
    <div className={style}>
        <img src={presetImg} alt="image1" height={'70em'}/>
        <h4 style={{fontSize:'1.2em',margin:'0'}}>{presetName}</h4>
    </div>
  )
}

export default Preset