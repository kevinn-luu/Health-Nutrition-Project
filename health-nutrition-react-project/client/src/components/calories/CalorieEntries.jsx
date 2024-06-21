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
            {entries.length > 0 ? (
                entries.map((entry) => (
                    <div key={entry._id}>
                        <p>Date: {entry.date}</p>
                        <p>Total Calories: {entry.totalcalories}</p>
                        <p>Meal Type: {entry.mealType}</p>
                        <p>Meal Calories: {entry.mealCalories}</p>
                        <p>Meal Description: {entry.mealDescription}</p>
                    </div>
            ))) : (
                <p>No entries available</p>
            )}
        </div>
    );
};

export default CalorieEntries;
