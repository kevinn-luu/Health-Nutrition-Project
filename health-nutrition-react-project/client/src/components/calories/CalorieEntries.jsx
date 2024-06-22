import React, { useEffect, useState } from "react";
import axios from "axios";

const CalorieEntries = () => {
    const [ entries, setEntries ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/personal/calorie')
            .then((res) => {
                console.log("Response :", JSON.stringify(res.data.data, null, 2));
                setEntries(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
        }, [])
        
        return (
            <div className="calorie-entries">
                <h2>Calorie Entries</h2>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    entries.length > 0 ? (
                        entries.map((entry) => (
                            entry.dailyCalories.map((dailyCalorie) => (
                                <div key={dailyCalorie._id}>
                                    <p>Date: {new Date(dailyCalorie.date).toLocaleDateString()}</p>
                                    <p>Total Calories: {dailyCalorie.totalcalories}</p>
                                    {dailyCalorie.meals.map((meal) => (
                                        <div key={meal._id}>
                                            <p>Meal Type: {meal.mealType}</p>
                                            <p>Meal Calories: {meal.calories}</p>
                                            <p>Meal Description: {meal.description}</p>
                                        </div>
                                    ))}
                                </div>
                            ))
                        ))
                    ) : (
                        <p>No entries available</p>
                    )
                )}
            </div>
        );
        
};

export default CalorieEntries;
