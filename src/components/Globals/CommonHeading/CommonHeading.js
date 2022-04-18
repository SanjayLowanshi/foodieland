import React from "react";

import "./commonHeading.scss";

const SectionHeader = (props) => {
  const headingClass = "CH-header " + props.className;
  return (
    <div className={headingClass}>
      <h2 className="CH-title">{props.title}</h2>
      <p className="CH-text">{props.text}</p>
    </div>
  );
};

export default SectionHeader;
