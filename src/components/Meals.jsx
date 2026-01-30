import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }

        const resData = await response.json();
        setMeals(resData);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    }

    fetchMeals();
  }, []);

  if (isLoading) {
    return <p>Loading meals...</p>;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
