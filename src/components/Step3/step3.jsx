import React from "react";
import "./step3.css";
import GoToTop from "../GoToTop";
import Mail from "../../Assets/EmailSent.png";
import countryList from "react-select-country-list";


const Step3 = ({ setStep, contactDetails, setContactDetails, countyData}) => {
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContactDetails((values) => ({ ...values, [name]: value }));
    };

    const options = countryList().getData();

 
    // console.log(countyData);

    return (
        <form id="step3form" className="flexcolumn step3contactform" onSubmit={()=>setStep(4)}>
            <div className="contactHead">
                <center><h1>
                    Step 3: Computed{" "}
                    <span style={{ color: "var(--color3)" }}>Results</span>
                </h1></center>
            </div>
            <div className="flexrow contactBody">
                <div className="flexrow contactImage">
                    <img src={Mail} alt="emailIcon" />
                </div>
                <div className="flexcolumn contactForm">
                    <h2>
                        Share Your Contact{" "}
                        <span style={{ color: "var(--color3)" }}>Info!</span>
                    </h2>
                    <div className="flexcolumn contactField">
                        <label>Full Name</label>
                        <div>
                            <input
                                type="text"
                                placeholder="John Doe"
                                name="fullname"
                                value={contactDetails.fullname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flexcolumn contactField">
                        <label>Address</label>
                        <div className="addressFields">
                            <select
                                value={contactDetails.country}
                                name="country"
                                onChange={handleChange}
                                required>
                                {options.map((option, i) => (
                                    <option key={i} value={option.label}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                placeholder="City"
                                name="city"
                                value={contactDetails.city}
                                required
                                onChange={handleChange}
                            />
                            <select
                                name="county"
                                value={contactDetails.county}
                                onChange={handleChange}
                                required
                                disabled={!(contactDetails.country === 'Kenya')}
                            >
                                 {countyData.map((option, i) => (
                                    <option key={i} value={option[0]}>
                                        {option[0]}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flexcolumn contactField">
                        <label>E-mail</label>
                        <div>
                            <input
                                type="email"
                                placeholder="someone@email.com"
                                name="email"
                                value={contactDetails.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flexcolumn contactField">
                        <label>Phone Number</label>
                        <div>
                            <input
                                type="tel"
                                name="pnumber"
                                placeholder="+254712345678"
                                pattern="\+254\d{9}"
                                value={contactDetails.pnumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flexcolumn contactField">
                        <label>
                            How user friendly is Hel
                            <span style={{ color: "var(--color3)" }}>EOS</span>?
                        </label>
                        <div className="flexrow raterange">
                            <input
                                type="range"
                                min={0}
                                max={10}
                                step={0.01}
                                name="rate"
                                className="slider rate"
                                value={contactDetails.rate}
                                onChange={handleChange}
                                required
                            />
                            <div style={{minWidth: '20px'}}><h2>{Math.round(contactDetails.rate)}</h2></div>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop />
        </form>
    );
};
export default Step3;
