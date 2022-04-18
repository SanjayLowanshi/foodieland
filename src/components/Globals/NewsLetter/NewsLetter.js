import React from "react";
import SectionHeader from "../CommonHeading/CommonHeading";

import "./newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="nl-container">
          <SectionHeader
            title="Deliciousness to your inbox"
            text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
          />
          <form action="">
            <input type="text" name="" id="" placeholder="Your Email Address" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
