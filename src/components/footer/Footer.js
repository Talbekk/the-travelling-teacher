import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer className="footer">
        <p className="footer__about-dev">
        Copyright &copy; 2021 by Michael Campbell @ talbekk_dev. Check out my socials to the right to see nore.
        </p>
            <ul class="footer__list">
                <li class="footer__item"><a href="#" class="footer__link">Github</a></li>
                <li class="footer__item"><a href="#" class="footer__link">LinkedIn</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Twitter</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Portfolio</a></li>
            </ul>
    </footer>
  )
}

export default Footer;