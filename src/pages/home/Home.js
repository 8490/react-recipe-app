import React, { useState } from "react";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "9f6b915e";
const APP_KEY = "6174e9be441de0ec6bce11d350ac6031";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
