import React from "react";

 const CalorieEntry = ({ entry }) => {
    return(
        <div className="calorie-entry">
            <h3>Calorie Information Entered</h3>
            <p>Date: {entry.date}</p>
            <p>Total Calories: {entry.totalcalories}</p>
            <p>Meals: </p>
            <ul>
                {entry.meals.map((meal, index) => (
                    <li key="index">
                        <p>Meal Type: {meal.mealType}</p>
                        <p>Calories: {meal.calories}</p>
                        <p>Description: {meal.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
 };

 export default CalorieEntry