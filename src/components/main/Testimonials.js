import React from "react";
import leo from "../../img/profile-1.jpg";
import kim from "../../img/profile-2.jpg";
import "../../App.css";

function Testimonials() {
  return (
    <section className="section-testimonials">
        <h2 className="heading-secondary u-margin-bottom-4">
            Testimonials
        </h2>
        <figure className="testimonials-review">
            <blockquote className="review__text">
            &ldquo;Maecenas eget urna mi. Integer sed sem et urna laoreet bibendum vel ut mauris. In hac habitasse platea dictumst. Integer pulvinar lacinia justo, et pulvinar libero consectetur eget. Nulla facilisi. Praesent pretium est ac tortor lobortis venenatis. Curabitur a accumsan est. Vivamus et mauris sem. Fusce molestie enim at condimentum iaculis.&rdquo;
            </blockquote>
            <figcaption className="review__user">
                <img src={leo} alt="User 1" className="review__photo"/>
                <div className="review__user-box">
                    <p className="review__user-name">Leo Kim</p>
                    <p className="review__user-date">Jun. 23rd 2018</p>
                </div>
                <div className="review__user-rating">8.5</div>
            </figcaption>
        </figure>
        <figure className="testimonials-review">
            <blockquote className="review__text">
            &ldquo;Aenean urna lorem, porttitor fringilla suscipit sit amet, ornare at augue. Proin aliquet nec velit vel consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus accumsan ultrices est id vulputate. Nulla pulvinar malesuada mi non ullamcorper.&rdquo;
            </blockquote>
            <figcaption className="review__user">
                <img src={kim} alt="User 1" className="review__photo"/>
                <div className="review__user-box">
                    <p className="review__user-name">Kim Sukyoung</p>
                    <p className="review__user-date">Mar. 4th 2018</p>
                </div>
                <div className="review__user-rating">9.7</div>
            </figcaption>
        </figure>
        <a href="https://ratemyteachers.com/" target="_blank" rel="noreferrer" className="btn btn--blue">View More &rarr;</a>
    </section>
  );
}

export default Testimonials;