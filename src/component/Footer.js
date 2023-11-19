import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <div className="Fouter-container">
        <div className="services">
          <h2>Services</h2>
          <ul>
            <li>Web design</li>
            <li>Development</li>
            <li>Hosting</li>
          </ul>
        </div>

        <div className="careers">
          <h2>Careers</h2>
          <ul>
            <li>Job openings</li>
            <li>Employee success</li>
            <li>Benefits</li>
          </ul>
        </div>
        <div className="social-media">
          <a
            href="https://www.youtube.com/c/jamesqquick"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/learnbuildteach/"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.twitter.com/jamesqquick"
            className="twitter social"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/learnbuildteach"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <h4>
            The best Quiz site <br /> 2022
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
