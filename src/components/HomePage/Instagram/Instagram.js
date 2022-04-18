import React from "react";
import SectionHeader from "../../Globals/CommonHeading/CommonHeading";
import { BsInstagram } from "react-icons/bs";
import Post1 from "../../../assets/images/post/post01.jpg";
import Post2 from "../../../assets/images/post/post02.jpg";
import Post3 from "../../../assets/images/post/post03.jpg";
import Post4 from "../../../assets/images/post/post04.jpg";

import "./instagram.scss";

const Instagram = () => {
  return (
    <section className="instagram">
      <div className="container">
        <div className="insta-container">
        <SectionHeader
          className="insta-header"
          title="Check out @foodieland on Instagram"
          text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        ></SectionHeader>
        <div className="screenshots">
          <div className="post__wrapper">
            <img src={Post1} alt="" className="post" />
          </div>
          <div className="post__wrapper">
            <img src={Post2} alt="" className="post" />
          </div>
          <div className="post__wrapper">
            <img src={Post3} alt="" className="post" />
          </div>
          <div className="post__wrapper">
            <img src={Post4} alt="" className="post" />
          </div>
        </div>
        <a href="#" className="btn">
          Visit Our Instagram <BsInstagram />
        </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
