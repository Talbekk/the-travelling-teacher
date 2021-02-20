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
            <blockquote class="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption class="review__user">
                <img src={logo} alt="User 1" class="review__photo"/>
                <div class="review__user-box">
                    <p class="review__user-name">Leo Kim</p>
                    <p class="review__user-date">Jun. 23rd 2018</p>
                </div>
                <div class="review__user-rating">8.5</div>
            </figcaption>
        </figure>
        <figure className="testimonials-review">
            <blockquote class="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption class="review__user">
                <img src={logo} alt="User 1" class="review__photo"/>
                <div class="review__user-box">
                    <p class="review__user-name">Kim Sukyoung</p>
                    <p class="review__user-date">Mar. 4th 2018</p>
                </div>
                <div class="review__user-rating">9.7</div>
            </figcaption>
        </figure>
    </section>
  );
}

export default Testimonials;