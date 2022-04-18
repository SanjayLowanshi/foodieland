import React from "react";
import SectionHeader from "../../Globals/CommonHeading/CommonHeading";

import KitchenImage from "../../../assets/images/kitchen/kitchen-chef.png";

import "./happyChef.scss";

const HappyChef = () => {
  return (
    <section className="happychef">
      <div className="container">
        <div className="chef-container">
          <div className="chef-text">
            <SectionHeader
              className="chef-header"
              title="Everyone can be a chef in their own kitchen"
              text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
            />
            <a href="" className="btn">
              Learn More
            </a>
          </div>
          <div className="chef-img">
            <div className="chef-img-wrapper">
              <img src={KitchenImage} alt="" className="chef__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyChef;
