import React, { useState } from "react";
import "../../App.css";

function Enquiries() {

  const [ chosenService, setChosenService ] = useState("Tutoring");
  const [ serviceOptions ] = useState(["After School", "Business English", "Online", "Tutoring"]);
  const [ chosenPackage, setChosenPackage ] = useState("Single Class");
  const [ packageOptions ] = useState(["Month Bundle", "Single Class", "Semester Bundle"]);

  function populateDropdown(selectOptions) {
      return selectOptions.map((currentOption) => 
      <option value={currentOption}>{currentOption}</option>
      )
  }

  return (
    <section className="section-enquiries">
        <div className="enquiries-content">
            <h2 className="heading-secondary ">
                Register Interest
            </h2>
            <p className="paragraph">
                Fill out the following form to register your interest in one of the pacakages above. Feel free to include any questions that you may have at this time.
            </p>
            <form className="form" action="#">
                <div class="form__group">
                    <input id="name" type="text" placeholder="Full Name" class="form__input" required/>
                    <label for="name" class="form__label">Full Name</label>
                </div>
                <div class="form__group">
                    <input id="email" type="email" placeholder="Email Address" class="form__input" required/>
                    <label for="email" class="form__label">Email Address</label>
                </div>
                <div class="form__group">
                    <input id="email" type="email" placeholder="Email Address" class="form__input" required/>
                    <label for="email" class="form__label">Email Address</label>
                </div>
                <div class="form__group">
                    <select value={chosenService} onChange={(e) => setChosenService(e.target.value)} required>
                        {populateDropdown(serviceOptions)}
                    </select>
                    <label>Service</label>
                </div>
                <div class="form__group">
                    <select value={chosenPackage} onChange={(e) => setChosenPackage(e.target.value)} required>
                        {populateDropdown(packageOptions)}
                    </select>
                    <label>Package</label>
                </div>
                <div class="form__group">
                    <textarea id="message" cols="30" rows="5"placeholder="Message" class="form__textarea" required/>
                    <label for="message" class="form__label">Message</label>
                </div>
                <button className="btn btn--blue">Send Form</button>
            </form>
        </div>
    </section>
  );
}

export default Enquiries;