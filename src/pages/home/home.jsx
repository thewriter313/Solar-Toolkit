import React, { useEffect } from "react";
import "./home.css";
import "../../App.css";
import { Link } from "react-router-dom";
import setup from "../../Assets/Setup.webp";
import toolkitpic from "../../Assets/Geometry.png";
import GoToTop from "../../components/GoToTop";
import Aos from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import code from "../../Assets/CaptureCode.png";


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <div className="home-container">
            <section>
            <Parallax strength={600} blur={{min:-3,max:5}} bgImage={code} >
                <div className="flexrow intro-wrapper">
                    <div data-aos="fade-right" data-aos-duration="1000" className="flexcolumn intro">
                        <h1>
                            Welcome to Hel<span style={{color:'var(--color3)'}}>EOS</span> Solar System Design and Installation Toolkit!
                        </h1>
                        <h2>
                            Developed by Students from the University of Nairobi
                        </h2>
                    </div>
                </div>
            </Parallax>
            </section>

            <section data-aos="fade-up" className="flexrow infobox">
                <div  className="flexcolumn infoleft">
                    <h1>What equipment is required?</h1>
                    <p>Overhelmed by all the technical jargon? Fear not!
                        We provide a complete guide to all the components
                        required in setup and installation of solar PV system. A
                        solar PV system consists of a solar PV array, an
                        inverter, a battery, a solar charge controller,
                        electrical loads, wiring, and system protection.
                    </p>
                    <Link className="infolink" to="/info">
                        <button className="btn1">Learn More</button>
                    </Link>
                </div>
                <img
                    src={setup}
                    alt="setup"
                    height={"500px"}
                />
            </section>

            <section data-aos="fade-up" className="flexrow infobox">
                <img
                    src={toolkitpic}
                    alt="toolkitpic"
                    height={"500px"}
                />
                <div className="flexcolumn inforight">
                    <h1>Easy to use Toolkit</h1>
                    <p>
                        Our toolkit design employs engineering principles
                        together with the solar industry standards to provide an
                        easy user friendly platform to aid design and
                        installation of a solar PV system. All you need to know
                        is the number of appliances in your home. Try it
                        yourself!
                    </p>
                    <Link to="/toolkit">
                        <button className="btn1">Start</button>
                    </Link>
                </div>
            </section>
            <GoToTop />
        </div>
    );
};

export default Home;
