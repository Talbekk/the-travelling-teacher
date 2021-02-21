import React, { useState } from "react";
import formPicture from "../../img/form-pic.jpg";
import "../../App.css";

function Enquiries() {

  const [ chosenService, setChosenService ] = useState("Tutoring");
  const [ serviceOptions ] = useState(["After School", "Business English", "Online", "Tutoring"]);
  const [ chosenPackage, setChosenPackage ] = useState("Single Class");
  const [ packageOptions ] = useState(["Month Bundle", "Single Class", "Semester Bundle"]);

  function populateDropdown(selectOptions) {
      return selectOptions.map((currentOption, index) => 
      <option key={index} value={currentOption}>{currentOption}</option>
      )
  }

  return (
    <section className="section-enquiries">
        <div className="enquiries-layout">
            <img className="enquires-image" src={formPicture} alt="Form" />
            <div className="enquiries-content">
                <h2 className="heading-secondary align-left">
                    Register Interest
                </h2>
                <p className="form-description">
                    Fill out the following form to register your interest in one of the pacakages above. Feel free to include any questions that you may have at this time.
                </p>
                <form className="form" action="#">
                    <div className="form__group">
                        <input id="name" type="text" placeholder="Full Name" className="form__input" required/>
                        <label htmlFor="name" className="form__label">Full Name</label>
                    </div>
                    <div className="form__group">
                        <input id="email" type="email" placeholder="Email Address" className="form__input" required/>
                        <label htmlFor="email" className="form__label">Email Address</label>
                    </div>
                    <div className="form__group">
                        <input id="number" type="tel" placeholder="Phone Number" className="form__input" required/>
                        <label htmlFor="number" className="form__label">Phone Number</label>
                    </div>
                    <div className="form__group">
                        <select value={chosenService} onChange={(e) => setChosenService(e.target.value)} required>
                            {populateDropdown(serviceOptions)}
                        </select>
                        <label>Service</label>
                    </div>
                    <div className="form__group">
                        <select value={chosenPackage} onChange={(e) => setChosenPackage(e.target.value)} required>
                            {populateDropdown(packageOptions)}
                        </select>
                        <label>Package</label>
                    </div>
                    <div className="form__group">
                        <textarea id="message" cols="30" rows="5"placeholder="Message" className="form__textarea" required/>
                        <label htmlFor="message" className="form__label">Message</label>
                    </div>
                    <button className="btn btn--blue">Send Form</button>
                </form>
            </div>
        </div>
    </section>
  );
}

export default Enquiries;