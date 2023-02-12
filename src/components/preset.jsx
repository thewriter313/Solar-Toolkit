import React from 'react'


const Preset = ({presetName,presetImg,style}) => {
  return (
    <div className={style}>
        <img src={presetImg} alt="image1" width={'70px'}/>
        <h1>{presetName}</h1>
    </div>
  )
}

export default Preset