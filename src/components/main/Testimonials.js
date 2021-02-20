import React from "react";
import logo from "../../img/logo.png";
import "../../App.css";

function Testimonials() {
  return (
    <section className="section-testimonials">
        <h2 className="heading-secondary u-margin-bottom-8">
            Testimonials
        </h2>
        <figure className="testimonials-review">
            <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className="review__user">
                <img src={logo} alt="User 1" className="review__photo"/>
                <div className="review__user-box">
                    <p className="review__user-name">Leo Kim</p>
                    <p className="review__user-date">Jun. 23rd 2018</p>
                </div>
                <div className="review__user-rating">8.5</div>
            </figcaption>
        </figure>
        <figure className="testimonials-review">
            <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className="review__user">
                <img src={logo} alt="User 1" className="review__photo"/>
                <div className="review__user-box">
                    <p className="review__user-name">Kim Sukyoung</p>
                    <p className="review__user-date">Mar. 4th 2018</p>
                </div>
                <div className="review__user-rating">9.7</div>
            </figcaption>
        </figure>
    </section>
  );
}

export default Testimonials;