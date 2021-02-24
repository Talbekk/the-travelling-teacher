import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRebel } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
        <p className="footer__about-dev">
          Copyright &copy; 2021 by Michael Campbell @ talbekk_dev
        </p>
            <ul className="footer__list">
                <li className="footer__item"><a href="https://github.com/Talbekk" target="_blank" rel="noreferrer" className="footer__link"><FontAwesomeIcon icon={faGithub}/></a></li>
                <li className="footer__item"><a href="https://www.linkedin.com/in/mt-campbell/" target="_blank" rel="noreferrer" className="footer__link"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                <li className="footer__item"><a href="https://twitter.com/?lang=en-gb" target="_blank" rel="noreferrer" className="footer__link"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li className="footer__item"><a href="https://starwars.fandom.com/wiki/Alliance_to_Restore_the_Republic" target="_blank" rel="noreferrer" className="footer__link"><FontAwesomeIcon icon={faRebel}/></a></li>
            </ul>
    </footer>
  )
}

export default Footer;