import React, { useState } from "react";
import CalorieEntry from "./CalorieEntry.jsx";
import axios from "axios";

const CalorieForm = () => {

    const userId = '60b6b3f96f1b2c001a3b8b0d';

    const [userInput, setUserInput] = useState({
        date: "",
        totalcalories: "",
        mealType: "",
        mealCalories: "",
        mealDescription: "",
    });

    const [entries, setEntries] = useState([]);

    function handleChange (event) {
        setUserInput(prevUserInput => {
            const {name, value} = event.target;
            return {
                ...prevUserInput,
                [name]: value
            }
        })
    };

    function handleSubmit (event) {
       event.preventDefault();
       console.log(userInput);

       const formData = {
        userId: "60b6b3f96f1b2c001a3b8b0d", 
        weekStart: new Date(), 
        dailyCalories: [{
            date: userInput.date,
            totalcalories: userInput.totalcalories,
            meals: [{
                mealType: userInput.mealType,
                calories: userInput.mealCalories,
                description: userInput.mealDescription
            }]
        }]
    };

    axios.post('http://localhost:5555/personal/calorie', formData)
        .then((res) => {
            console.log(res.data);
            setEntries((prevEntries) => [...prevEntries, userInput]);
            setUserInput({
                date: "",
                totalcalories: "",
                mealType: "",
                mealCalories: "",
                mealDescription: "",
            });
            
        })
        .catch((error) => {
            console.log(error.message);
        })


    };

    return (
        <div class="form-container">
            <form onSubmit={handleSubmit} class="calorie-form">
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={userInput.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="totalcalories">Total Calories:</label>
                    <input
                        type="number"
                        id="totalcalories"
                        name="totalcalories"
                        value={userInput.totalcalories}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mealType">Meal Type:</label>
                    <select
                        id="mealType"
                        name="mealType"
                        value={userInput.mealType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Meal Type</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="snack">Snack</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="mealCalories">Meal Calories:</label>
                    <input 
                        type="number"
                        id="mealCalories"
                        name="mealCalories"
                        value={userInput.mealCalories}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mealDescription">Meal Description</label>
                    <input 
                        type="text"
                        id="mealDescription"
                        name="mealDescription"
                        value={userInput.mealDescription}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            <div class="entries">
                <h2>Calorie Entries</h2>
                {entries.map((entry, index) => (
                    <div key={index} class="entries">
                        <p>Date: {entry.date}</p>
                        <p>Total Calories: {entry.totalcalories}</p>
                        <p>Meal Type: {entry.mealType}</p>
                        <p>Meal Calories: {entry.mealCalories}</p>
                        <p>Meal Description: {entry.mealDescription}</p>
                    </div>                   
                ))}
            </div>
        </div>
        
    );
;}

export default CalorieForm;