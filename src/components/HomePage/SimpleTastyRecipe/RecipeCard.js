import React from "react";
import "./recipeCard.scss";
import Heart from "../../Globals/Heart/Heart";
import { RiTimerFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";

const RecipeCard = (props) => {
  return (
    <div className={props.cardClass}>
      <img src={props.image} alt="" className="recipe__img" />
      <Heart />
      <h3 className="recipe__title">{props.title}</h3>
      <div className="recipe__info">
        <RiTimerFill />
        <span>{props.time}</span>
        <ImSpoonKnife />
        <span>{props.type}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
