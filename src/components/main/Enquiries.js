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
            <div className="enquiries-content">
                <h2 className="heading-secondary align-left">
                    Register Interest
                </h2>
                <p className="form-description">
                    Fill out the following form to register your interest in one of the pacakages above. Feel free to include any questions that you may have at this time.
                </p>
                <form className="form" action="#">
                    <div className="form__groupleft">
                        <div className="form__group">
                            <label htmlFor="name" className="form__label">Full Name</label>
                            <input id="name" type="text" placeholder="Full Name" className="form__input" required/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="email" className="form__label">Email Address</label>
                            <input id="email" type="email" placeholder="Email Address" className="form__input" required/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="number" className="form__label">Phone Number</label>
                            <input id="number" type="tel" placeholder="Phone Number" className="form__input" required/>
                        </div>
                    </div>
                    <div className="form__group-right">
                        <div className="form__group">
                            <label className="form__label">Service</label>
                            <select className="form__select" value={chosenService} onChange={(e) => setChosenService(e.target.value)} required>
                                {populateDropdown(serviceOptions)}
                            </select>
                        </div>
                        <div className="form__group">
                            <label className="form__label">Package</label>
                            <select className="form__select" value={chosenPackage} onChange={(e) => setChosenPackage(e.target.value)} required>
                                {populateDropdown(packageOptions)}
                            </select>
                        </div>
                    </div>
                    <div className="form__group-textarea">
                        <label htmlFor="message" className="form__label">Message</label>
                        <textarea className="form_textarea" id="message" cols="50" rows="5" placeholder="Please add any other comments or questions here..." className="form__textarea" required/>
                    </div>
                    <button className="btn btn--blue btn--form align-left" type="submit">Send Form</button>
                </form>
            </div>
        </div>
    </section>
  );
}

export default Enquiries;