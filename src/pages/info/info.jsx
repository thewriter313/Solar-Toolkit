import { React } from "react";
import "./info.css";
import FaqData from "../../Data/FaqData";
import Accordion from "../../components/Accordion/Accordion";
import Collapsible from "../../components/collapsible/Collapsible";
import GoToTop from "../../components/GoToTop";

const Info = () => {
  return (
    <div className="info">
      <div className="head">
        <h1>How the heck does a home solar system work? </h1>
        <p>
          Sizing your house when contemplating switching to solar power can be a
          daunting task. All the technical 'gibberish' can discourage many
          suitors from miving away from the grid. Not to worry though, as we
          provide an expansive and simple guide together with our toolkit to
          help you understand exactly what you are getting without having a
          technical background.
          <br />
          <br />
          The basic components of a solar PV are:
        </p>
        <ol>
          <li>Solar PV panels</li>
          <li>Inverter</li>
          <li>Battery</li>
          <li>Charge Controller</li>
          <li>Wiring</li>
          <li>Protective devices</li>
        </ol>
      </div>
      <Collapsible label="Solar PV Panels">
        <p>
          A Solar cell is a device that converts energy from the sun into
          electricity. It is made up of semiconductor material, usually
          silicon-based. These cells are connected in series or parallel to
          reach a desired voltage, current, or power. This interconnection makes
          up a PV module. In a PV module, these cells are covered in a laminate
          which offers protection from the environment, and eventually, the PV
          module makes up the building blocks of a Solar PV panel. Solar panels
          are obtained while already pre-wired and offering a certain output
          rating. Various Solar panels have to be used to meet the energy demand
          for a particular area, such as a residential household. This
          arrangement is known as a Solar PV Array. These Solar arrays are
          customizable or bought off the shelf, and its performance is rated
          according to the Maximum Power Output (Watts). There are 3 types of
          solar panels:
        </p>
        <ol>
          <li>Monocrystalline</li>
          <li>Polycrystalline</li>
          <li>Thin Film</li>
        </ol>
        <div className="acc-wrapper">
          <div className="FAQ"> FAQs </div>
          {FaqData.map((data, i) => (
            <Accordion
              key={i}
              question={data.question}
              answer={data.answer}
              i={i}
            ></Accordion>
          ))}
        </div>
      </Collapsible>
      <Collapsible label="Inverter">
        <p>
          An inverter converts the DC voltage to an AC voltage. In most cases,
          the input DC voltage is usually lower while the output AC is equal to
          the grid supply voltage of either 120 volts, or 240 Volts depending on
          the country. In Kenya 240 volts is mostly supplied.
        </p>
        <p>There are two main categrories of inverters:</p>
        <ol>
          <li>String Inverter</li>
          <li>Microinverter</li>
        </ol>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h4>Advantages of an String inverter</h4>
            <ul>
              <li>Easy to troubleshoot</li>
              <li>Low cost</li>
              <li>Low probability of wire mishap</li>
            </ul>
          </div>
          <div>
            <h4>Disdvantages of an String inverter</h4>
            <ul>
              <li>Effects of shading on efficiency is significant</li>
              <li>Difficulty in system expansion</li>
              <li>Short Lifespan</li>
              <li>Difficult to monitor system</li>
            </ul>
          </div>
          <div>
            <h4>Advantages of an Microinverter</h4>
            <ul>
              <li>Rapid shutdown capability</li>
              <li>Micro-electricity</li>
              <li>Ease of expansion</li>
              <li>Long Lifespan</li>
              <li>Suitable for challenging conditions</li>
            </ul>
          </div>
          <div>
            <h4>Disdvantages of an Microinverter</h4>
            <ul>
              <li>High cost</li>
              <li>Difficult to maintain</li>
              <li>Lots of hardware on the roof</li>
            </ul>
          </div>
        </div>
      </Collapsible>

      <Collapsible label="Battery">
        <p>
          Battery sizing includes the determination of the total energy
          consumption of the system, the total battery Ah required daily, the
          days of autonomy, the depth of discharge, total Ah needed and finally
          the number of batteries needed.The four main types of batteries are:
        </p>
        <ul>
          <li>Lead acid batteries</li>
          <li>Lithium Ion batteries</li>
          <li>Nickel Cadmium batteries</li>
          <li>Flow batteries</li>
        </ul>

        <p>
          Days of autonomy are the number of days in a month that the battery
          can supply the home without any support from generation sources.{" "}
        </p>
        <p>
          Depth of Discharge shows how much of the battery has been depleted
          compared to its entire capacity. If you routinely discharge the
          battery at a lesser percentage rather than continually draining it to
          its maximum DoD, the battery will last longer.
        </p>
      </Collapsible>

      <Collapsible label="Charge Controller">
        <p>
          The main function of a charge controller in a PV system is to regulate
          the voltage and current from PV Solar panels into a rechargeable
          battery. The main objective of the charge controller is to maintain
          the battery at the highest possible state of charge by preventing
          overcharging by the PV array or over-discharging by the load demand.
          It senses the battery voltage and reduces the charging current when
          the voltage gets high enough. A charge controller also reverses the
          current at night to draw charge from the battery and meet the load
          demand while the Solar Panels are not harvesting Solar energy{" "}
        </p>
        <p>There are 2 categories of charge controllers:</p>
        <ol>
          <li>Pulse width Modulated (PWM) charge controller</li>
          <li>Maximum Power Point Tracking (MPPT) charge controller</li>
        </ol>
        <p>
          PWM charge controllers require that the Solar PV voltage and battery
          voltage be be the same at all times hence have to drag down solar PV
          voltage to battery voltage thereby wasting usable energy. MPPT charge
          the battery at the maximum available current hence a solar PV with a
          higher voltage can charge a battery bank of lower voltage.
        </p>
      </Collapsible>

      <Collapsible label="Protective devices">
        <p>
        Off-grid systems are as dangerous as the on-grid systems as they include elements of high current and voltage. Few of the prtection mechansims are losted below:
        </p>
        <ol>
          <li>Shock prevention</li>
          <li>Lightning protection to solar PV arrays</li>
          <li>DC circuit protection</li>
        </ol>
      </Collapsible>
      <GoToTop />
    </div>
  );
};

export default Info;
