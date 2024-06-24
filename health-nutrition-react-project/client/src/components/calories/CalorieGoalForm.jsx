import React, { useState, useEffect } from "react";
import axios from "axios";

const CalorieGoalForm = ({ userId }) => {
    const [calorieGoal, setCalorieGoal] = useState('');
    const [currentGoal, setCurrentGoal] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5555/personal/calorie-goals')
            .then((res) => {
                if (res.data.data.length > 0) {
                    setCurrentGoal(res.data.data[0].caloriegoal);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.post('http://localhost:5555/personal/calorie-goals', { caloriegoal: calorieGoal, userId })
            .then((res) => {
                setCurrentGoal(res.data.calorieGoal.caloriegoal);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    };

    return (
        <div>
            <h2>Set Your Daily Calorie Limit!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={calorieGoal}
                    onChange={(e) => setCalorieGoal(e.target.value)}
                    placeholder="Enter calorie goal"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Goal' }
                </button>
            </form>
            {currentGoal && <h3>Current Calorie Goal: {currentGoal} calories</h3>}
        </div>
    )
};

export default CalorieGoalForm;