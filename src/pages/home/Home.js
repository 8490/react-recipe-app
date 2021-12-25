import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { HomeImg, MainContainer, ImgDiv } from "./HomeStyle";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "9f6b915e";
const APP_KEY = "6174e9be441de0ec6bce11d350ac6031";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  // useEffect(() => {
  //   getData();
  // }, []);

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      console.log(result.data.hits);
      if (result.data.more) {
        setRecipes(result.data.hits);
        setQuery("");
      } else {
        setQuery("");
        console.log("No food a this name");
      }
    } else {
      alert("Please fill the form");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
