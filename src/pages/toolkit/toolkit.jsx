import React from 'react'
import GoToTop from '../../components/GoToTop'
import { Stepper } from 'react-form-stepper'
import './toolkit.css'

const toolkit = () => {
  return (
    <div>
       <Stepper
            steps={[{ label: 'Load Sizing' }, { label: 'Design Questions' }, { label: 'Contact Details' }, { label: 'Summary' }]}
            activeStep={3}
            styleConfig={{
              activeBgColor: '#000000',
              activeTextColor: '#fff',
              inactiveBgColor: '#dddddd',
              inactiveTextColor: '#000',
              completedBgColor: '#00bf8c',
              completedTextColor: '#fff',
              size: '2.5em',
              labelFontSize: '1rem'

              
            }}
            connectorStyleConfig={{
              disabledColor: '#888',
              activeColor:'#00bf8c',
                           
            }}
            
            className={'stepper'}
            stepClassName={'stepper__step'}
          />
      <GoToTop/>
    </div>
  )
}

export default toolkit
