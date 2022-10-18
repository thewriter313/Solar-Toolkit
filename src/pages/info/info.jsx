import {React} from 'react'
import './info.css'
import Card  from '../../components/card'
import panelData from '../../Data/panelData'
import faqData from '../../Data/faqData'
import Accordion from '../../components/Accordion'
import {MdOutlineArrowForwardIos} from 'react-icons/md';


const Info = () => {
 
  
   
  return (
    <div>
      <div className='head'>
        <h1>How the heck does a home solar system work? </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos maxime sequi atque dolor fugiat sint itaque quod laborum, doloribus impedit sapiente aspernatur cum laudantium ipsam blanditiis, distinctio perspiciatis vel possimus vero! Accusamus beatae, vel unde itaque, ducimus quia ipsum voluptatibus et consequuntur quis soluta facere cum tenetur minus, ea sed ab! Eum inventore voluptatem itaque, sunt quos cupiditate blanditiis aspernatur doloremque repudiandae quia porro deserunt iure? Eveniet debitis ab quidem facilis repudiandae aperiam molestiae numquam aliquam cumque! Eius consequuntur non ad, ea harum debitis dolorem at repellat magnam mollitia. Ipsam saepe consequatur similique architecto sequi repellat doloremque iste, libero molestiae.</p>
      </div>
      <div className='container'>
        <div className='container-head'>
           <h2>Solar Panels</h2>
           <div><MdOutlineArrowForwardIos/></div>
        </div>        
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque obcaecati rem nam vel aut inventore voluptate iure, ea nobis ipsum dolor corrupti quia consequuntur unde iste labore quis minima!</p>
        <div className='cards'>
          {panelData.map(data=>(
              <Card 
              title={data.title} 
              imageUrl={data.image}
              text={data.text}
              points={data.points} />
            ))}
        </div>
        <div className='acc-wrapper'>
            <div className='FAQ'> FAQs </div>
            {faqData.map((data,i)=>(
              <Accordion 
              question={data.question}
              answer={data.answer}
              i={i}></Accordion>
            ))}
            
        </div>
        
      </div>
      <div className='container'>
        <h2>battery</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem ipsum natus dolore dolor consequuntur voluptates, quo, est repellat dicta fugit voluptate in odit aliquid incidunt eveniet. Molestias, sapiente quasi.</p>
      </div>
      <div className='container'>
        <h2>charge controller</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis alias atque aliquid quod et, laborum consequatur odit delectus in veritatis, omnis non inventore nostrum, iusto ut aspernatur voluptas repellendus sapiente.</p>
      </div>
      <div className='container'>
        <h2> The various combinations of connections</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim molestias cumque, numquam harum similique officiis tenetur sequi, doloribus repudiandae natus soluta ea quo voluptatum consequuntur mollitia tempora voluptates accusamus!</p>
      </div>
    </div>
  )
}

export default Info
