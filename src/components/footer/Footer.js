import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer className="footer">
        <p className="footer__about-dev">
        Copyright &copy; 2021 by Michael Campbell @ talbekk_dev. Check out my socials to the right to see nore.
        </p>
            <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">Github</a></li>
                <li className="footer__item"><a href="#" className="footer__link">LinkedIn</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Twitter</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Portfolio</a></li>
            </ul>
    </footer>
  )
}

export default Footer;