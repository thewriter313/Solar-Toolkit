import React from 'react'


const Preset = ({presetName,presetImg,style}) => {
  return (
    <div className={style}>
        <img src={presetImg} alt="image1" height={'70em'}/>
        <h1 style={{fontSize:'1.3em',margin:'0'}}>{presetName}</h1>
    </div>
  )
}

export default Preset