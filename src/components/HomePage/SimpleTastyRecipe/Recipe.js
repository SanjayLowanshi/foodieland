import React from "react";
import SectionHeader from "../../Globals/CommonHeading/CommonHeading";
import RecipeCard from "./RecipeCard";
import "./recipe.scss";

import recipe01 from "../../../assets/images/recipe/recipe01.png";
import recipe02 from "../../../assets/images/recipe/recipe02.png";
import recipe03 from "../../../assets/images/recipe/recipe03.png";
import recipe04 from "../../../assets/images/recipe/recipe04.png";
import recipe05 from "../../../assets/images/recipe/recipe05.png";
import recipe06 from "../../../assets/images/recipe/recipe06.png";
import recipe07 from "../../../assets/images/recipe/recipe07.png";
import recipe08 from "../../../assets/images/recipe/recipe08.png";
import Ads from "../../../assets/images/recipe/Ads.png";

const recipeData = [
  {
    image: recipe01,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    type: "Snack",
    cardClass: "recipe-card",
  },
  {
    image: recipe02,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    time: "30 Minutes",
    type: "Fish",
    cardClass: "recipe-card",
  },
  {
    image: recipe03,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    time: "30 Minutes",
    type: "Breakfast",
    cardClass: "recipe-card",
  },
  {
    image: recipe04,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    time: "30 Minutes",
    type: "Healthy",
    cardClass: "recipe-card",
  },
  {
    image: recipe05,
    title: "Chicken Meatballs with Cream Cheese",
    time: "30 Minutes",
    type: "Meat",
    cardClass: "recipe-card",
  },
  {
    image: Ads,
    title: "",
    time: "",
    type: "",
    cardClass: "ads-card",
  },
  {
    image: recipe06,
    title: "Fruity Pancake with Orange & Blueberry",
    time: "30 Minutes",
    type: "Sweet",
    cardClass: "recipe-card",
  },
  {
    image: recipe07,
    title: "The Best Easy One Pot Chicken and Rice",
    time: "30 Minutes",
    type: "Snack",
    cardClass: "recipe-card",
  },
  {
    image: recipe08,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    time: "30 Minutes",
    type: "Noodles",
    cardClass: "recipe-card",
  },
];

const Recipe = () => {
  return (
    <section className="recipe-section">
      <div className="container">
        <SectionHeader
          className="recipe-header"
          title="Simple and tasty recipes"
          text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        ></SectionHeader>
        <div className="recipe-card-container">
          {recipeData.map((recipe) => (
            <RecipeCard image={recipe.image} title={recipe.title} time={recipe.time} type={recipe.type} cardClass={recipe.cardClass} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipe;
