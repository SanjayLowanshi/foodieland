import React from "react";
import CategoryCard from "./CategoryCard";
import CategoryHeader from "./CategoryHeader";
import "./categories.scss";

import breakfast from "../../../assets/images/category/breakfast.svg";
import vegan from "../../../assets/images/category/vegan.svg";
import meat from "../../../assets/images/category/meat.svg";
import dessert from "../../../assets/images/category/dessert.svg";
import lunch from "../../../assets/images/category/lunch.svg";
import chocolate from "../../../assets/images/category/chocolate.svg";

const categoryData = [
  {
    title: "Breakfast",
    image: breakfast,
  },
  {
    title: "Vegan",
    image: vegan,
  },
  {
    title: "Meat",
    image: meat,
  },
  {
    title: "Dessert",
    image: dessert,
  },
  {
    title: "Lunch",
    image: lunch,
  },
  {
    title: "Chocolate",
    image: chocolate,
  },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <CategoryHeader />
        <div className="cat-card-container">
          {categoryData.map((category) => (
            <CategoryCard title={category.title} image={category.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
