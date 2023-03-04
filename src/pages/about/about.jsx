import React, {useEffect} from "react";
import "./about.css";
import "../../App.css";
import TeamCard from "../../components/Teamcard";
import teamData from "../../Data/TeamData";
import Form from "../../components/Form";
import GoToTop from "../../components/GoToTop";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
}, []);

  return (
    <div className="flexcolumn aboutuspage">
      <div  data-aos='fade-up'className=" flexcolumn wide aboutIntro">
        <h1 data-aos='fade-up'>Let's Go Green Together</h1>
        <h2 data-aos='fade-up'> We are HelEOS - striving to provide a user-friendly platform to promote renewal energy solutions to Kenyans</h2>
      </div>
      <div className="mission dark flexcolumn wide">
        <h1>Who We Are</h1>
        <p>
          Hi, fellow curious Kenyan. Glad you are here. We are HelEOS, a student
          led group providing a simple tool for all your home solar needs. We
          hope, together with you, to be part of the people to lead Kenya into
          an era of renewable energy as we try to do our part to save our
          planet.
        </p>
      </div>
      <div className="mission flexcolumn wide">
        <h1>Our Story</h1>
        <p>
          Inspired by the ever enlarging danger of climate change and global
          warming, we set out to reduce our carbon footprint as students of the
          University of Nairobi. We identified a gap in the market for a toolkit
          that sizes solar powered homes which was previously unexplored.
        </p>
      </div>
      <div className="team dark flexcolumn wide">
        <h1>Our Team</h1>
        <div className="teamcards">
          {teamData.map((data,i) => (
            <TeamCard
              key={i}
              image={data.image}
              title={data.title}
              name={data.name}
              occupation={data.occupation}
            />
          ))}
        </div>
      </div>
      <div className="joinus flexcolumn wide">
        <h1>Contact Us</h1>
        <div className="aboutform">
          <Form />
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default About;
