import React from "react";
import { Link } from "react-scroll";
import "../../App.css";

function Packages() {
  return (
    <section className="section-packages">
        <h2 className="heading-secondary u-margin-bottom-8">
            Packages
        </h2>
        <div className="packages-content">
            <div className="card">
                <div className="card__header">
                    <h4 className="card__header--heading">Single Class</h4>
                    <p className="card__header--price">£100 per class</p>
                    <p className="card__header--description">Can be booked individually</p>
                </div>
                <div className="card__details">
                    <ul className="card__details--list">
                        <li>Recommended for substitute roles</li>
                        <li>Up to 15 per class</li>
                        <li>Covers basic topics</li>
                        <li>No homework required</li>
                    </ul>
                </div>
                <Link spy={true} smooth={true} offset={-70} duration={600} className="card__btn" to="section-enquiries">Enquire Now &rarr;</Link>
            </div>
            <div className="card">
                <div className="card__header">
                    <h4 className="card__header--heading">Month Block</h4>
                    <p className="card__header--price">£75 per class</p>
                    <p className="card__header--description">Three classes per week</p>
                </div>
                <div className="card__details">
                    <ul className="card__details--list">
                        <li>Perfect for trials or long-term substitute roles</li>
                        <li>Up to 12 per class</li>
                        <li>Covers variety of topics</li>
                        <li>Weekly homework provided</li>
                        <li>Fortnightly reviews included</li>
                    </ul>
                </div>
                <Link spy={true} smooth={true} offset={-70} duration={600} className="card__btn" to="section-enquiries">Enquire Now &rarr;</Link>
            </div>
            <div className="card">
                <div className="card__header">
                    <h4 className="card__header--heading">Semester Block</h4>
                    <p className="card__header--price">£50 per class</p>
                    <p className="card__header--description">Three to five classes per week</p>
                </div>
                <div className="card__details">
                    <ul className="card__details--list">
                        <li>Perfect for exam preparation</li>
                        <li>Up to 10 per classes</li>
                        <li>Covers all disciplines</li>
                        <li>Daily homework provided</li>
                        <li>Montly reviews included</li>
                    </ul>
                </div>
                <Link spy={true} smooth={true} offset={-70} duration={600} className="card__btn" to="section-enquiries">Enquire Now &rarr;</Link>
            </div>
        </div>
    </section>
  );
}

export default Packages;