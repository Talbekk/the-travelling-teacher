import React, { useState } from "react";
import { Link } from "react-scroll";
import "../../App.css";

function StickyNav() {

    const [ showStickyNav, setShowStickyNav ] = useState(false);
    const [ ticking, setTicking ] = useState(false);
    const [ scrollPosition, setScrollPosition ] = useState(0);

    // let lastKnownScrollPosition = 0;
    // let ticking = false;
    
    function doSomething(scrollPos) {
      // Do something with the scroll position
      if (scrollPos  >= 300) {
       setShowStickyNav(true);
    }
    else {
        setShowStickyNav(false);
    }
    }
    
    document.addEventListener('scroll', function(e) {
        setScrollPosition(window.scrollY);
        // lastKnownScrollPosition = window.scrollY;
    
      if (!ticking) {
        window.requestAnimationFrame(function() {
        doSomething(scrollPosition);
        setTicking(false);
        });
    
        setTicking(true);
      }
    });

    // window.scroll(function(){
    //     if (window.scrollTop() >= 300) {
    //         ('nav').addClass('fixed-header');
    //     }
    //     else {
    //         ('nav').removeClass('fixed-header');
    //     }
    // });

  return (
        <nav className={(showStickyNav) ? "header__sticky-nav fixed-header" : "header__sticky-nav"}>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-about">About</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-services">Services</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-packages">Packages</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-testimonials">Testimonials</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-enquiries">Enquiries</Link></li>
          </nav>
        );
}

export default StickyNav;