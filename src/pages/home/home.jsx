import React, { useEffect } from "react";
import "./home.css";
import "../../App.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import toolkitpic from "../../Assets/toolkitpic.png";
import GoToTop from "../../components/GoToTop";
import Aos from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import panel from "../../Assets/SolarEnergy.jpg";

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <div className="home-container">
            <Parallax strength={600} blur={{min:-5,max:5}} bgImage={panel} >
                <div className="intro-wrapper">
                    <div className="flexrow intro">
                        <div className="flexrow type-slogan">
                            <div className="flexrow typewriter">
                                <Typewriter
                                    options={{
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .changeCursor("_")
                                            .changeDelay(50)
                                            .changeDeleteSpeed(25)
                                            .typeString(
                                                "<span style='color:var(--color3);'>Welcome to </span>"
                                            )
                                            .typeString(
                                                "<span style='color:var(--color2);'>Hel</span>"
                                            )
                                            .typeString(
                                                "<span style='color:var(--color3);'>EOS Solar Photovoltaic System Design and Installation Toolkit! </span>"
                                            )
                                            .pauseFor(1000)
                                            .changeCursor("<")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .changeCursor("_")
                                            .pauseFor(500)
                                            .typeString(
                                                "<span style='color:red;'>Developed by students from the University of Nairobi</span>"
                                            )
                                            .pauseFor(1000)
                                            .changeCursor("<")
                                            .pauseFor(1000)
                                            .start();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className="flexrow infobox">
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
                    data-aos="fade-left"
                    src={toolkitpic}
                    alt="toolkitpic"
                    height={"500px"}
                />
            </div>

            <div className="flexrow infobox">
                <img
                    data-aos="fade-right"
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
            </div>
            <GoToTop />
        </div>
    );
};

export default Home;
