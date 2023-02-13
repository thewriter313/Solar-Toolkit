import React from 'react'


const Preset = ({presetName,presetImg,style}) => {
  return (
    <div className={style}>
        <img src={presetImg} alt="image1" height={'70em'}/>
        <h1>{presetName}</h1>
    </div>
  )
}

export default Preset