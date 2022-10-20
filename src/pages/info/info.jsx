import {React} from 'react'
import './info.css'
import Card  from '../../components/card'
import PanelData from '../../Data/PanelData'
import FaqData from '../../Data/FaqData'
import Accordion from '../../components/Accordion'
import Collapsible from '../../components/collapsible/Collapsible'



const Info = () => {
 
  
   
  return (
    <div className='info'>
      <div className='head'>
        <h1>How the heck does a home solar system work? </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos maxime sequi atque dolor fugiat sint itaque quod laborum, doloribus impedit sapiente aspernatur cum laudantium ipsam blanditiis, distinctio perspiciatis vel possimus vero! Accusamus beatae, vel unde itaque, ducimus quia ipsum voluptatibus et consequuntur quis soluta facere cum tenetur minus, ea sed ab! Eum inventore voluptatem itaque, sunt quos cupiditate blanditiis aspernatur doloremque repudiandae quia porro deserunt iure? Eveniet debitis ab quidem facilis repudiandae aperiam molestiae numquam aliquam cumque! Eius consequuntur non ad, ea harum debitis dolorem at repellat magnam mollitia. Ipsam saepe consequatur similique architecto sequi repellat doloremque iste, libero molestiae.</p>
      </div >
      <Collapsible label='Solar Panels'>   
          <p >A Solar cell is a device that converts energy from the sun into electricity. It is made up of semiconductor material, usually silicon-based. These cells are connected in series or parallel to reach a desired voltage, current, or power. This interconnection makes up a PV module. In a PV module, these cells are covered in a laminate which offers protection from the environment, and eventually, the PV module makes up the building blocks of a Solar PV panel. Solar panels are obtained while already pre-wired and offering a certain output rating. Various Solar panels have to be used to meet the energy demand for a particular area, such as a residential household. This arrangement is known as a Solar PV Array. These Solar arrays are customizable or bought off the shelf, and its performance is rated according to the Maximum Power Output (Watts).</p>
          <div className='cards'>
          {PanelData.map(data=>(
              <Card 
              title={data.title} 
              imageUrl={data.image}
              text={data.text}
              points={data.points} />
            ))}
        </div>
        <div className='acc-wrapper'>
            <div className='FAQ'> FAQs </div>
            {FaqData.map((data,i)=>(
              <Accordion 
              question={data.question}
              answer={data.answer}
              i={i}></Accordion>
            ))}
            
        </div>
        
      </Collapsible>
      <Collapsible label='Inverter' >

      <p>The main function of a charge controller in a PV system is to regulate the voltage and current from
            PV Solar panels into a rechargeable battery. The main objective of the charge controller is to
            maintain the battery at the highest possible state of charge by preventing overcharging by the PV
            array or over-discharging by the load demand. It senses the battery voltage and reduces the charging current when the voltage gets high enough.
            A charge controller also reverses the current at night to draw charge from the battery and meet the
            load demand while the Solar Panels are not harvesting Solar energy </p>
      </Collapsible>
      
      <Collapsible label='Battery' >
      <p>The main function of a charge controller in a PV system is to regulate the voltage and current from
            PV Solar panels into a rechargeable battery. The main objective of the charge controller is to
            maintain the battery at the highest possible state of charge by preventing overcharging by the PV
            array or over-discharging by the load demand. It senses the battery voltage and reduces the charging current when the voltage gets high enough.
            A charge controller also reverses the current at night to draw charge from the battery and meet the
            load demand while the Solar Panels are not harvesting Solar energy </p>

            <p>The main function of a charge controller in a PV system is to regulate the voltage and current from
            PV Solar panels into a rechargeable battery. The main objective of the charge controller is to
            maintain the battery at the highest possible state of charge by preventing overcharging by the PV
            array or over-discharging by the load demand. It senses the battery voltage and reduces the charging current when the voltage gets high enough.
            A charge controller also reverses the current at night to draw charge from the battery and meet the
            load demand while the Solar Panels are not harvesting Solar energy </p>
            
      </Collapsible>
      
      <Collapsible label='Charge Controller'>

      <p>The main function of a charge controller in a PV system is to regulate the voltage and current from
            PV Solar panels into a rechargeable battery. The main objective of the charge controller is to
            maintain the battery at the highest possible state of charge by preventing overcharging by the PV
            array or over-discharging by the load demand. It senses the battery voltage and reduces the charging current when the voltage gets high enough.
            A charge controller also reverses the current at night to draw charge from the battery and meet the
            load demand while the Solar Panels are not harvesting Solar energy </p>
      </Collapsible>
      
      <Collapsible label='Protection devices' >

      <p>The main function of a charge controller in a PV system is to regulate the voltage and current from
            PV Solar panels into a rechargeable battery. The main objective of the charge controller is to
            maintain the battery at the highest possible state of charge by preventing overcharging by the PV
            array or over-discharging by the load demand. It senses the battery voltage and reduces the charging current when the voltage gets high enough.
            A charge controller also reverses the current at night to draw charge from the battery and meet the
            load demand while the Solar Panels are not harvesting Solar energy </p>
      </Collapsible>
      
    </div>
  )
}

export default Info
