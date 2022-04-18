import React from "react";
import "./CategoryCard.scss";

const CategoryCard = (props) => {
  const catImage = props.image;
  const catTitle = props.title;
  return (
    <div className="cat-card">
      <img src={catImage} alt="" className="cat-card__img" />
      <p className="cat__title">{catTitle}</p>
    </div>
  );
};

export default CategoryCard;
