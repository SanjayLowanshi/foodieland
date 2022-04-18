import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import "./Header.scss";

const Header = () => {
  const [navExpand, setNavExpand] = useState(false);
  const handleClick = () => {
    setNavExpand(!navExpand);
  };
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="nav-container">
        <p className="header__logo">
          Foodieland<span>.</span>
        </p>
        <nav className={navExpand ? "nav nav--active" : "nav"} id="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/recipes" className="nav__link">
                Recipes
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/blog" className="nav__link">
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className={navExpand ? "header__social header__social--active" : "header__social"} id="headerSocial">
          <a href="facebook.com" className="header__social-link">
            <RiFacebookFill />
          </a>
          <a href="twitter.com" className="header__social-link">
            <RiTwitterFill />
          </a>
          <a href="instagram.com" className="header__social-link">
            <RiInstagramLine />
          </a>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {/* <span className="hamburger__line" />
          <span className="hamburger__line" />
          <span className="hamburger__line" /> */}
          <AiOutlineMenu className={navExpand ? "hide" : "show"} />
          <AiOutlineClose className={navExpand ? "show" : "hide"} />
        </div>
        </div>
        </div>
    </header>
  );
};

export default Header;
