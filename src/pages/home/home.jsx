import React, { useEffect } from "react";
import "./home.css";
import "../../App.css";
// import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import setup from "../../Assets/Setup.png";
import toolkitpic from "../../Assets/Geometry.png";
import GoToTop from "../../components/GoToTop";
import Aos from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import panel from "../../Assets/Artboard87.png";


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <div className="home-container">
            <section>
            <Parallax strength={600} blur={{min:-5,max:5}} bgImage={panel} >
                <div className="flexrow intro-wrapper">
                    <div data-aos="fade-right" data-aos-duration="1000" className="flexcolumn intro">
                        <h1>
                            Welcome to Hel<span style={{color:'var(--color3)'}}>EOS</span> Solar Photovoltaic System Design and Installation Toolkit!
                        </h1>
                        <h2>
                            Developed by Students from the University of Nairobi
                        </h2>
                    </div>
                </div>
            </Parallax>
            </section>

            <section className="flexrow infobox">
                <div data-aos="fade-up" className="flexcolumn infoleft">
                    <h1>What equipment is required?</h1>
                    <p>
                        <strong>
                            Overhelmed by all the technical jargon? Fear not!
                        </strong>{" "}
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
                    data-aos="fade-up"
                    src={setup}
                    alt="setup"
                    height={"500px"}
                />
            </section>

            <section className="flexrow infobox">
                <img
                    data-aos="fade-up"
                    src={toolkitpic}
                    alt="toolkitpic"
                    height={"500px"}
                />
                <div data-aos="fade-up" className="flexcolumn inforight">
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
