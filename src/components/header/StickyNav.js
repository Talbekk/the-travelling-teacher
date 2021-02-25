import React from "react";
import { Link } from "react-scroll";
import "../../App.css";

function StickyNav() {

    window.scroll(function(){
        if (window.scrollTop() >= 300) {
            ('nav').addClass('fixed-header');
        }
        else {
            ('nav').removeClass('fixed-header');
        }
    });

  return (
        <nav className="header__sticky-nav">
          <ul className="header__main-nav">
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-about">About</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-services">Services</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-packages">Packages</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-testimonials">Testimonials</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-enquiries">Enquiries</Link></li>
          </ul>
        </nav>
  );
}

export default StickyNav;