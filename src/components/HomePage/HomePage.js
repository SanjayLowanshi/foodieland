import React from "react";
import Newsletter from "../Globals/NewsLetter/NewsLetter";
import Categories from "./Categories/Categories";
import HappyChef from "./HappyChef/HappyChef";
import Hero from "./Hero/Hero";
import Instagram from "./Instagram/Instagram";
import Recipe from "./SimpleTastyRecipe/Recipe";
import TryThis from "./TryThisRecipe/TryThis";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipe />
      <HappyChef />
      <Instagram />
      <TryThis />
      <Newsletter />
    </>
  );
};

export default Home;
