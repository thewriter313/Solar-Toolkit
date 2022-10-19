const FaqData =[
    {question:'What is the Difference between AC and DC solar Arrays?',
    answer:
        <div>
            <h3>DC Solar Arrays</h3>
            <p>A Solar DC panel generates DC voltage from the Solar cells in the Solar modules which is then connected to charge the batteries through a Solar charge controller. A string inverter is used in this arrangement to convert the DC current to AC so as to supply the AC loads. </p>
            <h3>AC Solar Arrays</h3>
            <p >These are Solar panels that have a Micro-Inverter connected at the back that immediately converts the DC current produced by the panel into AC current. In AC Solar panels, the AC current produced will have to be converted back to DC current using a rectifier in order to charge the batteries. </p>
        </div>    
    },

    {question:'What are the advantages of AC solar Arrays?', 
     answer: 
        <div>
            <ul style={{lineHeight:'25px', textAlign:'justify', paddingLeft:'10px'}}>
                <li><strong>Offers Safety - </strong>The conventional series string of DC Solar panels has the disadvantage of creating a hightemperature arc when handling high DC voltage, which may lead to a fire. On the other hand, microinverters convert current to 240V AC, thus avoiding this problem.</li><br />
                <li><strong>Shading - </strong>if either one of the Solar panels in a conventional DC panel string is shaded, it affects the rest of the array. Shading of the panels can be caused by dust, leaves etc. On the other hand, if an AC Solar panel in an array is shaded, it does not affect the rest of the panels which enables them to continue functioning at their best</li><br />
                <li><strong>Monitoring and fault finding - </strong>Micro-Inverters found in AC Solar panels come with inbuilt monitoring ability, which is useful when the output derived is not at the expected level. Unlike a string inverter which monitors the combined output of all the panels in the array, microinverters monitor panels individually hence a faulty panel can be quickly and easily identified</li><br />
                <li><strong>Redundancy - </strong>If any of the Solar panels in a DC string develops a problem, the whole array will fail to produce power until the problem is identified and fixed. However, if a microinverter develops a problem, the rest of the AC Solar panels can continue to provide power as the issue is being resolved</li><br />
                <li><strong>Modularity - </strong>A string inverter can only accommodate a certain number of Solar panels. If more panels are required in the future, another string inverter will be need to be purchased. As stated previously,since micro inverters do not use a separate string inverter this problem will not be encountered and hence other panels can be added</li><br />
                <li><strong>Orientation - </strong>Panels in the conventional string inverter need to provide the same voltage simultaneously for the string inverter to produce AC power efficiently. String panels will produce the current of the least producing panel hence underperforming in most cases. This isn't a problem that is encountered in AC Solar panels as the micro inverters enable the individual panels to produce AC power</li><br />
            </ul>
        </div>   
    },

    {question:'What are the disadvantages of AC solar Arrays?', 
     answer: 
     <ul style={{lineHeight:'25px', textAlign:'justify', paddingLeft:'10px'}}>
                <li><strong>Efficiency - </strong>Currently in the market the microinverters of all the panels combine does not reach the same AC conversion value as compared that of a string inverter.</li><br />
                <li><strong>High initial Cost - </strong>Installing AC Solar panels makes the whole Solar system cost about 25-30% more than a Solar system in which only one string inverter is used </li><br />
                <li><strong>High Replacement Cost - </strong>It is more challenging to replace microinverters since they are located below the panels on the roof of the house. This is different from a string inverter that is inside the household.</li><br />
                <li><strong>Risk of Damage - </strong>Since the microinverters are located on the roof of the house, they are commonly exposed to environmental elements such as rain and dust, making them more susceptible than string inverters located inside the house</li><br />
            </ul>
    }
]

export default FaqData;