"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setMeals([]);
    }
  }

  useEffect(() => {
    if (ingredient !== "") {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">
        {ingredient === "" ? "Meal Ideas (select an item)" : `Meal ideas for "${ingredient}"`}
      </h2>

      {ingredient === "" ? (
        <p className="text-gray-400">Choose an item to see ideas.</p>
      ) : meals.length === 0 ? (
        <p className="text-gray-400">No meal ideas found.</p>
      ) : (

        <ul className="grid grid-cols-2 gap-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-3 border border-gray-400 rounded bg-transparent hover:bg-gray-800 transition-colors text-sm"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}