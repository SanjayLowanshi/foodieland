import React from "react";

import "./CategoryHeader.scss";

const CategoryHeader = () => {
  return (
    <div className="CH-header cat-header">
      <h2 className="CH-title">Categories</h2>
      <button className="btn btn-wht">View All Categories</button>
    </div>
  );
};

export default CategoryHeader;
