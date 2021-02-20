import React from "react";
import "../../App.css";

function Enquiries() {
  return (
    <section className="section-enquiries">
        <div className="enquiries-content">
            <h2 className="heading-secondary">
                Register Interest
            </h2>
            <p className="paragraph">
                Fill out the following form to register your interest in one of the pacakages above. Feel free to include any questions that you may have at this time.
            </p>
            <form>
                <button className="btn btn--blue ">Send Form</button>
            </form>
        </div>
    </section>
  );
}

export default Enquiries;