import React, { useEffect } from "react";
import "./about.css";
import Form from "../../components/Form";
import GoToTop from "../../components/GoToTop";
import umair from "../../Assets/umair.webp";
import areeb from "../../Assets/areeb.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdQuote } from "react-icons/io";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
    
        <div className="about-page flexcolumn">
            {/* First section */}
            <div className="about-section flexrow">
                <div
                    data-aos="fade-up"
                    className="about-section-right flexcolumn">
                    <div className="flexrow">
                        <div>
                            <IoMdQuote className="openQuote" />
                        </div>
                        <div>
                            <h1 className="introHead">Hello</h1>
                            <p>
                                I'm Umair A. Malik, a 23-year-old{" "}
                                <span style={{ color: "var(--color3)" }}>
                                    Mechanical Engineering
                                </span>{" "}
                                student at the University of Nairobi. In my
                                final year of study, I have worked on this solar
                                home system sizing toolkit to help homeowners
                                determine the right{" "}
                                <span style={{ color: "var(--color3)" }}>
                                    size of solar equipment
                                </span>{" "}
                                for their homes. This tool is essential as it
                                can save resources and expenses. I'm interested
                                in promoting
                                <span style={{ color: "var(--color3)" }}>
                                    {" "}
                                    sustainable energy solutions
                                </span>{" "}
                                and contributing to a
                                <span style={{ color: "var(--color3)" }}>
                                    {" "}
                                    greener environment
                                </span>
                                .
                            </p>
                        </div>

                        <div className="flexrow">
                            <IoMdQuote
                                className="endQuote"
                                style={{ alignItems: "flex-end" }}
                            />
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    className="about-section-left flexcolumn">
                    <img src={umair} alt="umair" />
                </div>
            </div>

            {/* Second section */}
            <div
                className="about-section flexrow"
                style={{ backgroundColor: "#000", color: "white" }}>
                <div
                    data-aos="fade-up"
                    className="about-section-right flexcolumn">
                    
                    <img src={areeb} alt="areeb" />
                </div>
                <div
                    data-aos="fade-up"
                    className="about-section-right flexcolumn">
                    <div className="flexrow">
                        <div>
                            <IoMdQuote className="openQuote" />
                        </div>
                        <div>
                            <h1 className="introHead">Hello</h1>
                            <p>
                                My name is Areeb Ahmed. I'm a 23-year-old{" "}
                                <span style={{ color: "var(--color3)" }}>
                                    Mechanical Engineering
                                </span>{" "}
                                student in my final year at the University of
                                Nairobi. I believe that access to clean and
                                renewable energy is essential for communities
                                around the world, and our solar toolkit is a
                                small step towards making that a reality. With
                                the Hel
                                <span style={{ color: "var(--color3)" }}>
                                    EOS
                                </span>{" "}
                                toolkit, we hope to empower individuals and
                                communities to harness solar energy and make a
                                positive impact on the environment.
                            </p>
                        </div>

                        <div className="flexrow">
                            <IoMdQuote
                                className="endQuote"
                                style={{ alignItems: "flex-end" }}
                            />
                        </div>
                    </div>
                </div>
                </div>

        <div className="joinus flexcolumn wide">
          {" "}
          <h1>Contact Us</h1>
          <div className="aboutform">
            <Form />
          </div>
        </div>
        <GoToTop />
      </div>
      
    );
};

export default About;
