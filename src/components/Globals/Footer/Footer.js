import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top-left">
            <p className="header__logo">
              Foodieland<span>.</span>{" "}
            </p>
            <p className="footer__text">Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
          </div>
          <div className="footer__top-right">
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="/recipes" className="footer__link">
                  Recipes
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/blog" className="footer__link">
                  Blog
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/about" className="footer__link">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom--center">
            © 2020 Flowbase. Powered by <a href="">Webflow</a>
          </p>
          <div className="footer__social">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
