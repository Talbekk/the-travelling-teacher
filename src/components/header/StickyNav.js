import React, { useState } from "react";
import { Link } from "react-scroll";
import "../../App.css";

function StickyNav() {

    const [ showStickyNav, setShowStickyNav ] = useState(false);
    const [ ticking, setTicking ] = useState(false);
    const [ scrollPosition, setScrollPosition ] = useState(0);
    
    function doSomething(scrollPos) {
      if (scrollPos  >= 300) {
       setShowStickyNav(true);
    }
    else {
        setShowStickyNav(false);
    }
    }
    
    document.addEventListener('scroll', function(e) {
        setScrollPosition(window.scrollY);
    
      if (!ticking) {
        window.requestAnimationFrame(function() {
        doSomething(scrollPosition);
        setTicking(false);
        });
    
        setTicking(true);
      }
    });

  return (
        <nav className={(showStickyNav) ? "show-header" : "hide-header"}>
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