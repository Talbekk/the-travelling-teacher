import React from "react";
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
                    <h4 className="card__header--heading">Test Header</h4>
                    <p className="card__heading--price">£3.00 per class</p>
                    <p className="card__heading--description">Only £3 per class</p>
                </div>
                <div className="card__details">
                    <ul className="card__details--list">
                        <li>3 day tour</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cosy hotels</li>
                        <li>Difficulty: easy</li>
                    </ul>
                </div>
                <button className="card__btn">Enquire Now</button>
            </div>
            <div className="card">
                <div className="card__header">
                    <h4 className="card__header--heading">Test Header</h4>
                    <p className="card__heading--price">£3.00 per class</p>
                    <p className="card__heading--description">Only £3 per class</p>
                </div>
                <div className="card__details">
                    <ul className="card__details--list">
                        <li>3 day tour</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cosy hotels</li>
                        <li>Difficulty: easy</li>
                    </ul>
                </div>
                <button className="card__btn">Enquire Now</button>
            </div>
            <div className="card">
                <div className="card__header">
                    <h4 className="card__header--heading">Test Header</h4>
                    <p className="card__heading--price">£3.00 per class</p>
                    <p className="card__heading--description">Only £3 per class</p>
                </div>
                <div className="card__details">
                    <ul className="card__details--list">
                        <li>3 day tour</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cosy hotels</li>
                        <li>Difficulty: easy</li>
                    </ul>
                </div>
                <button className="card__btn">Enquire Now</button>
            </div>
        </div>
    </section>
  );
}

export default Packages;